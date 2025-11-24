import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Minus, Plus, Trash2, ShoppingBag, Tag, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';
import { toast } from 'sonner';
import { validatePromoCode, calculateDiscount, type PromoCode } from '@/data/promoCodes';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';

// Form validation schema
const orderFormSchema = z.object({
  name: z.string().trim().min(1, { message: "Vui lòng nhập họ tên" }).max(100, { message: "Họ tên không được quá 100 ký tự" }),
  phone: z.string().trim().min(10, { message: "Số điện thoại không hợp lệ" }).max(15, { message: "Số điện thoại không hợp lệ" }),
  address: z.string().trim().min(10, { message: "Vui lòng nhập địa chỉ chi tiết" }).max(500, { message: "Địa chỉ không được quá 500 ký tự" }),
  note: z.string().max(500, { message: "Ghi chú không được quá 500 ký tự" }).optional(),
});

const promoCodeSchema = z.string().trim().max(20, { message: "Mã khuyến mãi không hợp lệ" });

const Cart = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeFromCart, total, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    note: '',
  });
  
  const [promoCodeInput, setPromoCodeInput] = useState('');
  const [appliedPromoCode, setAppliedPromoCode] = useState<PromoCode | null>(null);
  const [isApplyingPromo, setIsApplyingPromo] = useState(false);
  const [honeypot, setHoneypot] = useState(''); // Anti-bot field
  const [trackingToken, setTrackingToken] = useState<string | null>(null);

  const subtotal = total;
  const discount = calculateDiscount(subtotal, appliedPromoCode);
  const finalTotal = subtotal - discount;

  const handleApplyPromoCode = () => {
    try {
      // Validate input length and format
      const validatedInput = promoCodeSchema.parse(promoCodeInput);
      
      if (!validatedInput) {
        toast.error('Vui lòng nhập mã khuyến mãi');
        return;
      }

      setIsApplyingPromo(true);

      const promoCode = validatePromoCode(validatedInput);
      
      if (!promoCode) {
        toast.error('Mã khuyến mãi không hợp lệ hoặc đã hết hạn');
        setIsApplyingPromo(false);
        return;
      }

      // Check minimum order requirement
      if (promoCode.minOrder && subtotal < promoCode.minOrder) {
        toast.error(`Đơn hàng tối thiểu ${promoCode.minOrder.toLocaleString('vi-VN')}₫ để áp dụng mã này`);
        setIsApplyingPromo(false);
        return;
      }

      setAppliedPromoCode(promoCode);
      toast.success(`Áp dụng mã thành công! Giảm ${promoCode.discount}%`);
      setIsApplyingPromo(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error('Có lỗi xảy ra. Vui lòng thử lại');
      }
      setIsApplyingPromo(false);
    }
  };

  const handleRemovePromoCode = () => {
    setAppliedPromoCode(null);
    setPromoCodeInput('');
    toast.info('Đã xóa mã khuyến mãi');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (items.length === 0) {
      toast.error('Giỏ hàng trống!');
      return;
    }

    // Bot detection - if honeypot is filled, it's likely a bot
    if (honeypot) {
      console.log('Bot detected via honeypot');
      // Log to honeypot_logs table
      try {
        await supabase.from('honeypot_logs').insert({
          ip_address: 'unknown',
          user_agent: navigator.userAgent,
          honeypot_value: honeypot
        });
      } catch (err) {
        console.error('Error logging honeypot:', err);
      }
      toast.error('Có lỗi xảy ra. Vui lòng thử lại sau.');
      return;
    }

    try {
      // Validate form data
      const validatedData = orderFormSchema.parse(formData);

      // Log request for rate limiting tracking
      try {
        await supabase.from('request_logs').insert({
          ip_address: 'unknown', // In production, get real IP from edge function
          endpoint: 'create_order',
          user_agent: navigator.userAgent
        });
      } catch (err) {
        console.error('Error logging request:', err);
      }

      // Create order in database
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          customer_name: validatedData.name,
          customer_phone: validatedData.phone,
          customer_address: validatedData.address,
          customer_note: validatedData.note || null,
          subtotal: subtotal,
          discount: discount,
          promo_code: appliedPromoCode?.code || null,
          total: finalTotal,
          status: 'pending'
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // Create order items
      const orderItems = items.map(item => ({
        order_id: order.id,
        product_id: item.id,
        product_name: item.name,
        product_image: item.image,
        product_weight: item.weight,
        price: item.price,
        quantity: item.quantity
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) throw itemsError;

      // Send to Zapier webhook for Google Sheets integration
      try {
        const { data: webhookData } = await supabase
          .from('admin_settings')
          .select('value')
          .eq('key', 'zapier_webhook_url')
          .maybeSingle();

        if (webhookData?.value) {
          // Send order data to Zapier webhook
          fetch(webhookData.value, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            mode: 'no-cors',
            body: JSON.stringify({
              order_id: order.id,
              customer_name: order.customer_name,
              customer_phone: order.customer_phone,
              customer_address: order.customer_address,
              customer_note: order.customer_note,
              subtotal: order.subtotal,
              discount: order.discount,
              promo_code: order.promo_code,
              total: order.total,
              status: order.status,
              created_at: order.created_at,
              items: orderItems.map(item => ({
                product_name: item.product_name,
                product_weight: item.product_weight,
                price: item.price,
                quantity: item.quantity,
              })),
            }),
          }).catch(err => console.error('Webhook error:', err));
        }
      } catch (webhookError) {
        console.error('Error sending to webhook:', webhookError);
        // Don't show error to user as order was created successfully
      }
      
      // Save tracking token to show to user
      setTrackingToken(order.tracking_token);
      
      toast.success('Đặt hàng thành công! Vui lòng lưu lại mã tra cứu đơn hàng.');
      clearCart();
      setFormData({ name: '', phone: '', address: '', note: '' });
      setAppliedPromoCode(null);
      setPromoCodeInput('');
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        console.error('Order submission error:', error);
        toast.error('Có lỗi xảy ra khi đặt hàng. Vui lòng thử lại');
      }
    }
  };

  // Show success screen with tracking token
  if (trackingToken) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12">
        <Card className="max-w-2xl w-full p-8 md:p-12 text-center">
          <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10">
            <ShoppingBag className="h-10 w-10 text-green-500" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Đặt Hàng Thành Công!</h1>
          <p className="text-muted-foreground mb-8">
            Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
          </p>

          <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 mb-8">
            <p className="text-sm text-muted-foreground mb-2">Mã tra cứu đơn hàng của bạn:</p>
            <div className="flex items-center justify-center gap-2">
              <code className="text-3xl font-mono font-bold text-primary">{trackingToken}</code>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Vui lòng lưu lại mã này để tra cứu đơn hàng
            </p>
          </div>

          <div className="space-y-3">
            <Button 
              onClick={() => navigate('/order-history')} 
              size="lg" 
              className="w-full"
            >
              Tra Cứu Đơn Hàng
            </Button>
            <Button 
              onClick={() => {
                setTrackingToken(null);
                navigate('/products');
              }} 
              variant="outline"
              size="lg" 
              className="w-full"
            >
              Tiếp Tục Mua Sắm
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground mb-4" />
          <h1 className="text-3xl font-bold mb-4">Giỏ Hàng Trống</h1>
          <p className="text-muted-foreground mb-6">
            Bạn chưa có sản phẩm nào trong giỏ hàng
          </p>
          <Button onClick={() => navigate('/products')}>
            Tiếp Tục Mua Sắm
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Giỏ Hàng Của Bạn</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="p-4">
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{item.weight}</p>
                    <p className="text-primary font-bold text-lg">
                      {item.price.toLocaleString('vi-VN')}₫
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                      className="text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>

                    <div className="flex items-center gap-1">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-10 text-center font-bold">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Form */}
          <div>
            <Card className="p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Thông Tin Giao Hàng</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Họ và tên *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nguyễn Văn A"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Số điện thoại *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0123456789"
                  />
                </div>

                <div>
                  <Label htmlFor="address">Địa chỉ giao hàng *</Label>
                  <Textarea
                    id="address"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành phố"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="note">Ghi chú đơn hàng</Label>
                  <Textarea
                    id="note"
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    placeholder="Ghi chú thêm về đơn hàng (không bắt buộc)"
                    rows={2}
                    maxLength={500}
                  />
                </div>

                {/* Honeypot field - hidden from users, only bots will fill it */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                {/* Promo Code Section */}
                <div className="border rounded-lg p-4 bg-muted/30">
                  <Label htmlFor="promoCode" className="flex items-center gap-2 mb-2">
                    <Tag className="h-4 w-4" />
                    Mã khuyến mãi
                  </Label>
                  
                  {!appliedPromoCode ? (
                    <div className="flex gap-2">
                      <Input
                        id="promoCode"
                        value={promoCodeInput}
                        onChange={(e) => setPromoCodeInput(e.target.value.toUpperCase())}
                        placeholder="Nhập mã khuyến mãi"
                        maxLength={20}
                        disabled={isApplyingPromo}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleApplyPromoCode}
                        disabled={isApplyingPromo || !promoCodeInput.trim()}
                      >
                        Áp dụng
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between bg-primary/10 border border-primary/20 rounded-lg p-3">
                      <div className="flex-1">
                        <p className="font-mono font-bold text-primary">{appliedPromoCode.code}</p>
                        <p className="text-xs text-muted-foreground">{appliedPromoCode.description}</p>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={handleRemovePromoCode}
                        className="h-8 w-8 text-muted-foreground hover:text-destructive"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tạm tính:</span>
                    <span className="font-semibold">{subtotal.toLocaleString('vi-VN')}₫</span>
                  </div>
                  
                  {appliedPromoCode && discount > 0 && (
                    <div className="flex justify-between text-primary">
                      <span className="flex items-center gap-1">
                        <Tag className="h-3 w-3" />
                        Giảm giá ({appliedPromoCode.discount}%):
                      </span>
                      <span className="font-semibold">-{discount.toLocaleString('vi-VN')}₫</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phí vận chuyển:</span>
                    <span className="font-semibold text-secondary">Miễn phí</span>
                  </div>
                  
                  <div className="flex justify-between text-xl font-bold border-t pt-4">
                    <span>Tổng cộng:</span>
                    <span className="text-primary">{finalTotal.toLocaleString('vi-VN')}₫</span>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full bg-accent">
                  Xác Nhận Đặt Hàng
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Bằng việc đặt hàng, bạn đồng ý với các điều khoản và chính sách của Gasach
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
