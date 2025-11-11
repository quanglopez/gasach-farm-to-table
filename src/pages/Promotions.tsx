import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Gift, Tag, Percent, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'sonner';

const Promotions = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate saving to database
    console.log('Promotion subscription:', { email, phone });
    
    toast.success('Đăng ký nhận khuyến mãi thành công! Chúng tôi sẽ thông báo cho bạn sớm nhất.');
    setEmail('');
    setPhone('');
  };

  const currentPromotions = [
    {
      id: 1,
      title: 'Giảm 10% Cho Đơn Hàng Đầu Tiên',
      desc: 'Khách hàng mới đặt hàng lần đầu được giảm ngay 10% toàn bộ đơn hàng',
      code: 'WELCOME10',
      validUntil: '31/12/2024',
      icon: Gift,
      color: 'bg-primary',
    },
  ];

  const upcomingPromotions = [
    {
      title: 'Black Friday - Giảm Đến 30%',
      desc: 'Chương trình khuyến mãi lớn nhất trong năm',
      date: '24/11/2024',
    },
    {
      title: 'Tết Nguyên Đán - Quà Tặng Đặc Biệt',
      desc: 'Mua gà sạch nhận ngay giỏ quà Tết trị giá 500.000đ',
      date: '01/01/2025',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-accent-foreground">Khuyến Mãi</Badge>
          <h1 className="text-5xl font-bold mb-6">
            Ưu Đãi <span className="text-primary">Hấp Dẫn</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cập nhật các chương trình khuyến mãi mới nhất từ Gasach. Tiết kiệm hơn khi mua gà sạch
            chất lượng cao!
          </p>
        </div>

        {/* Current Promotions */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Khuyến Mãi Đang Diễn Ra</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-md mx-auto">
            {currentPromotions.map((promo) => (
              <Card key={promo.id} className="overflow-hidden">
                <div className={`${promo.color} text-white p-6`}>
                  <promo.icon className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{promo.title}</h3>
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{promo.desc}</p>
                  
                  <div className="bg-muted p-3 rounded-lg mb-4">
                    <p className="text-xs text-muted-foreground mb-1">Mã khuyến mãi:</p>
                    <p className="text-2xl font-bold font-mono">{promo.code}</p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    Có hiệu lực đến: {promo.validUntil}
                  </p>
                  
                  <Link to="/products">
                    <Button className="w-full">Mua Ngay</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* How to Use */}
        <div className="mb-20 bg-muted/30 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Cách Sử Dụng Mã Khuyến Mãi</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Chọn Sản Phẩm', desc: 'Thêm sản phẩm vào giỏ hàng' },
              { step: '2', title: 'Đến Giỏ Hàng', desc: 'Xem lại đơn hàng của bạn' },
              { step: '3', title: 'Nhập Mã', desc: 'Nhập mã khuyến mãi vào ô tương ứng' },
              { step: '4', title: 'Hoàn Tất', desc: 'Xác nhận đơn hàng và nhận ưu đãi' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Promotions */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Khuyến Mãi Sắp Diễn Ra</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingPromotions.map((promo, index) => (
              <Card key={index} className="p-6 border-2 border-dashed">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                      <Bell className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-2">Sắp Diễn Ra</Badge>
                    <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                    <p className="text-muted-foreground mb-2">{promo.desc}</p>
                    <p className="text-sm font-semibold text-primary">Ngày: {promo.date}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="p-8 md:p-12 gradient-hero">
          <div className="max-w-2xl mx-auto text-center">
            <Bell className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Đăng Ký Nhận Thông Báo Khuyến Mãi
            </h2>
            <p className="text-muted-foreground mb-8">
              Đăng ký ngay để không bỏ lỡ các chương trình khuyến mãi hấp dẫn từ Gasach.
              Chúng tôi sẽ gửi thông báo sớm nhất về các ưu đãi đặc biệt dành riêng cho bạn!
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-left">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com"
                    className="bg-white"
                  />
                </div>
                
                <div className="text-left">
                  <Label htmlFor="phone">Số điện thoại</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0123456789"
                    className="bg-white"
                  />
                </div>
              </div>
              
              <Button type="submit" size="lg" className="w-full md:w-auto bg-accent">
                Đăng Ký Ngay
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground mt-4">
              Chúng tôi tôn trọng quyền riêng tư của bạn và không chia sẻ thông tin với bên thứ ba.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Promotions;
