import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Package, Search, Calendar, Tag } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { z } from 'zod';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Order {
  id: string;
  customer_name: string;
  customer_phone: string;
  customer_address: string;
  customer_note: string | null;
  subtotal: number;
  discount: number;
  promo_code: string | null;
  total: number;
  status: string;
  created_at: string;
  tracking_token: string;
}

interface OrderItem {
  id: string;
  product_name: string;
  product_image: string;
  product_weight: string;
  price: number;
  quantity: number;
}

const phoneSchema = z.string().trim().min(10, { message: "Số điện thoại không hợp lệ" }).max(15);
const trackingTokenSchema = z.string().trim().length(12, { message: "Mã tra cứu không hợp lệ" });

const OrderHistory = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchType, setSearchType] = useState<'phone' | 'tracking'>('tracking');
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const { ref: ordersRef, isVisible: ordersVisible } = useScrollAnimation();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsLoading(true);

      let query = supabase.from('orders').select('*');

      if (searchType === 'tracking') {
        const validatedToken = trackingTokenSchema.parse(searchInput.toUpperCase());
        query = query.eq('tracking_token', validatedToken);
      } else {
        const validatedPhone = phoneSchema.parse(searchInput);
        query = query.eq('customer_phone', validatedPhone);
      }

      const { data, error } = await query.order('created_at', { ascending: false });

      if (error) throw error;

      setOrders(data || []);
      setIsSearched(true);
      
      if (!data || data.length === 0) {
        toast.info(searchType === 'tracking' 
          ? 'Không tìm thấy đơn hàng với mã này' 
          : 'Không tìm thấy đơn hàng nào với số điện thoại này'
        );
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        console.error('Search error:', error);
        toast.error('Có lỗi xảy ra. Vui lòng thử lại');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const loadOrderItems = async (orderId: string) => {
    try {
      const { data, error } = await supabase
        .from('order_items')
        .select('*')
        .eq('order_id', orderId);

      if (error) throw error;

      setOrderItems(data || []);
    } catch (error) {
      console.error('Error loading order items:', error);
      toast.error('Không thể tải chi tiết đơn hàng');
    }
  };

  const handleViewDetails = (order: Order) => {
    setSelectedOrder(order);
    loadOrderItems(order.id);
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { label: 'Đang xử lý', className: 'bg-yellow-500' },
      confirmed: { label: 'Đã xác nhận', className: 'bg-blue-500' },
      shipping: { label: 'Đang giao', className: 'bg-purple-500' },
      completed: { label: 'Hoàn thành', className: 'bg-green-500' },
      cancelled: { label: 'Đã hủy', className: 'bg-red-500' },
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    return <Badge className={config.className}>{config.label}</Badge>;
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 bg-primary text-primary-foreground">Lịch Sử Đơn Hàng</Badge>
          <h1 className="text-5xl font-bold mb-6">
            Tra Cứu <span className="text-primary">Đơn Hàng</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nhập số điện thoại để xem lịch sử đặt hàng của bạn
          </p>
        </div>

        {/* Search Form */}
        <Card className="p-6 md:p-8 max-w-md mx-auto mb-12">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="flex gap-2 mb-4">
              <Button
                type="button"
                variant={searchType === 'tracking' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSearchType('tracking')}
                className="flex-1"
              >
                Mã tra cứu
              </Button>
              <Button
                type="button"
                variant={searchType === 'phone' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSearchType('phone')}
                className="flex-1"
              >
                Số điện thoại
              </Button>
            </div>

            <div>
              <Label htmlFor="search" className="flex items-center gap-2 mb-2">
                <Search className="h-4 w-4" />
                {searchType === 'tracking' ? 'Mã tra cứu đơn hàng' : 'Số điện thoại'}
              </Label>
              <Input
                id="search"
                type="text"
                required
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value.toUpperCase())}
                placeholder={searchType === 'tracking' ? 'VD: ABC123DEF456' : '0123456789'}
                maxLength={searchType === 'tracking' ? 12 : 15}
                disabled={isLoading}
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-accent"
              disabled={isLoading}
            >
              {isLoading ? 'Đang tìm kiếm...' : 'Tra Cứu Đơn Hàng'}
            </Button>
          </form>
        </Card>

        {/* Orders List */}
        {isSearched && (
          <div ref={ordersRef} className="space-y-6">
            {orders.length === 0 ? (
              <div className="text-center py-12">
                <Package className="h-24 w-24 mx-auto text-muted-foreground mb-4" />
                <p className="text-xl text-muted-foreground">Chưa có đơn hàng nào</p>
              </div>
            ) : (
              <>
                <h2 className={`text-3xl font-bold mb-6 transition-all duration-700 ${ordersVisible ? 'animate-slide-in-bottom' : 'opacity-0'}`}>
                  Tìm thấy {orders.length} đơn hàng
                </h2>
                
                <div className="grid grid-cols-1 gap-6">
                  {orders.map((order, idx) => (
                    <Card 
                      key={order.id} 
                      className={`p-6 hover-lift transition-all duration-700 ${ordersVisible ? 'animate-slide-in-bottom' : 'opacity-0'}`}
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <Package className="h-5 w-5 text-primary" />
                            <div>
                              <h3 className="font-bold text-lg">Đơn hàng #{order.id.slice(0, 8)}</h3>
                              <p className="text-xs text-muted-foreground font-mono">Mã: {order.tracking_token}</p>
                            </div>
                            {getStatusBadge(order.status)}
                          </div>
                          
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <p className="flex items-center gap-2">
                              <Calendar className="h-3 w-3" />
                              {new Date(order.created_at).toLocaleDateString('vi-VN', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </p>
                            <p>Người nhận: {order.customer_name}</p>
                            <p>Địa chỉ: {order.customer_address}</p>
                            {order.promo_code && (
                              <p className="flex items-center gap-1 text-primary">
                                <Tag className="h-3 w-3" />
                                Đã áp dụng mã: {order.promo_code}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-3">
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Tổng tiền:</p>
                            <p className="text-2xl font-bold text-primary">
                              {order.total.toLocaleString('vi-VN')}₫
                            </p>
                            {order.discount > 0 && (
                              <p className="text-xs text-muted-foreground">
                                Đã giảm: {order.discount.toLocaleString('vi-VN')}₫
                              </p>
                            )}
                          </div>

                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleViewDetails(order)}
                          >
                            Xem Chi Tiết
                          </Button>
                        </div>
                      </div>

                      {/* Order Details */}
                      {selectedOrder?.id === order.id && orderItems.length > 0 && (
                        <div className="mt-6 pt-6 border-t">
                          <h4 className="font-bold mb-4">Chi tiết sản phẩm:</h4>
                          <div className="space-y-3">
                            {orderItems.map((item) => (
                              <div key={item.id} className="flex gap-4">
                                <img
                                  src={item.product_image}
                                  alt={item.product_name}
                                  className="w-16 h-16 object-cover rounded"
                                />
                                <div className="flex-1">
                                  <p className="font-semibold">{item.product_name}</p>
                                  <p className="text-sm text-muted-foreground">{item.product_weight}</p>
                                  <p className="text-sm">
                                    {item.price.toLocaleString('vi-VN')}₫ x {item.quantity}
                                  </p>
                                </div>
                                <div className="font-bold">
                                  {(item.price * item.quantity).toLocaleString('vi-VN')}₫
                                </div>
                              </div>
                            ))}
                          </div>

                          {order.customer_note && (
                            <div className="mt-4 p-3 bg-muted/30 rounded-lg">
                              <p className="text-sm font-semibold mb-1">Ghi chú:</p>
                              <p className="text-sm text-muted-foreground">{order.customer_note}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
