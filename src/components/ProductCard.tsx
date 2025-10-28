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
      <Card className="overflow-hidden card-hover cursor-pointer group">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform group-hover:scale-110"
          />
          {badge && (
            <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
              {badge}
            </Badge>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1">{name}</h3>
          <p className="text-muted-foreground text-sm mb-3">{weight}</p>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">
              {price.toLocaleString('vi-VN')}₫
            </span>
            
            <Button
              size="sm"
              onClick={handleAddToCart}
              className="bg-accent hover:opacity-90"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Thêm
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
