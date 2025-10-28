import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { toast } from 'sonner';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulate saving to database
      console.log('Newsletter subscription:', email);
      toast.success('Đăng ký nhận tin thành công!');
      setEmail('');
    }
  };

  return (
    <footer className="bg-card border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary">Ga</span>
              <span className="text-secondary">sach</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Gà sạch cho bữa ăn an toàn và ngon trọn vị!
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-muted-foreground hover:text-primary">Sản phẩm</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">Về chúng tôi</Link></li>
              <li><Link to="/quality" className="text-muted-foreground hover:text-primary">Cam kết chất lượng</Link></li>
              <li><Link to="/reviews" className="text-muted-foreground hover:text-primary">Phản hồi khách hàng</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-bold mb-4">Chính sách</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Chính sách giao hàng</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Chính sách đổi trả</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Bảo mật thông tin</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Điều khoản sử dụng</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-bold mb-4">Liên hệ</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>0123 456 789</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>info@gasach.vn</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Hà Nội, Việt Nam</span>
              </li>
            </ul>
            
            <form onSubmit={handleSubscribe} className="space-y-2">
              <h4 className="font-semibold text-sm">Nhận tin khuyến mãi</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Email của bạn"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="bg-primary text-primary-foreground">
                  Đăng ký
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; 2024 Gasach. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
