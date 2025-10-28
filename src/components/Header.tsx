import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Phone } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import logo from '@/assets/gasach-logo.png';

const Header = () => {
  const location = useLocation();
  const { itemCount } = useCart();

  const menuItems = [
    { path: '/', label: 'Trang chủ' },
    { path: '/products', label: 'Sản phẩm' },
    { path: '/about', label: 'Về chúng tôi' },
    { path: '/quality', label: 'Cam kết chất lượng' },
    { path: '/promotions', label: 'Khuyến mãi' },
    { path: '/contact', label: 'Liên hệ' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Gasach Logo" className="h-12 md:h-14" />
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <a href="tel:0899099940">
              <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">0899 099 940</span>
              </Button>
            </a>
            
            <Link to="/cart" className="relative">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge 
                    className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 bg-accent text-accent-foreground"
                  >
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
