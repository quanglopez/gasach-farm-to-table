import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  weight: string;
  image: string;
  badge?: string;
}

const ProductCard = ({ id, name, price, weight, image, badge }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({ id, name, price, image, weight });
  };

  return (
    <Link to={`/products/${id}`}>
      <Card className="overflow-hidden card-hover cursor-pointer group border-2 hover:border-primary/20">
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-muted to-muted/50">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          {badge && (
            <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground shadow-lg backdrop-blur-sm">
              {badge}
            </Badge>
          )}
        </div>
        
        <div className="p-4 md:p-5">
          <h3 className="font-bold text-base md:text-lg mb-1 group-hover:text-primary transition-colors">{name}</h3>
          <p className="text-muted-foreground text-xs md:text-sm mb-3">{weight}</p>
          
          <div className="flex items-center justify-between gap-2">
            <span className="text-xl md:text-2xl font-bold text-gradient">
              {price.toLocaleString('vi-VN')}₫
            </span>
            
            <Button
              size="sm"
              variant="accent"
              onClick={handleAddToCart}
              className="text-xs md:text-sm"
            >
              <ShoppingCart className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
              Thêm
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
