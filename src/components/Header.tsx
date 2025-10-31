import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Phone } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import MobileMenu from '@/components/MobileMenu';
import logo from '@/assets/gasach-logo.png';

const Header = () => {
  const location = useLocation();
  const { itemCount } = useCart();

  const menuItems = [
    { path: '/', label: 'Trang chủ' },
    { path: '/products', label: 'Sản phẩm' },
    { path: '/gallery', label: 'Thư viện ảnh' },
    { path: '/about', label: 'Về chúng tôi' },
    { path: '/quality', label: 'Cam kết chất lượng' },
    { path: '/promotions', label: 'Khuyến mãi' },
    { path: '/contact', label: 'Liên hệ' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur-xl shadow-sm supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Chicken Fresh - Gà Sạch" className="h-12 md:h-16" />
          </Link>

          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 lg:px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'bg-primary text-primary-foreground shadow-[var(--shadow-soft)]'
                    : 'text-foreground hover:bg-muted hover:scale-105'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2 md:space-x-3">
            <a href="tel:0899099940" className="hidden sm:block">
              <Button variant="outline" size="sm" className="items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="font-semibold hidden lg:inline">Gặp Admin Page</span>
              </Button>
            </a>
            
            <Link to="/cart" className="relative">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge 
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-accent text-accent-foreground text-xs font-bold border-2 border-card"
                  >
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </Link>

            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
