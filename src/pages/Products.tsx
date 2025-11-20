import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ProductGridSkeleton } from '@/components/LoadingSkeleton';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Products = () => {
  const [filter, setFilter] = useState<'all' | 'regular' | 'premium' | 'super'>('all');
  const [isLoading, setIsLoading] = useState(true);
  const { ref: productsRef, isVisible: productsVisible } = useScrollAnimation();

  const filteredProducts =
    filter === 'all' ? products : products.filter((p) => p.category === filter);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [filter]);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Sản Phẩm <span className="text-primary">Gà Sạch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Chọn lựa sản phẩm gà sạch phù hợp với nhu cầu của gia đình bạn
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'bg-primary' : ''}
          >
            Tất Cả
          </Button>
          <Button
            variant={filter === 'regular' ? 'default' : 'outline'}
            onClick={() => setFilter('regular')}
            className={filter === 'regular' ? 'bg-primary' : ''}
          >
            SKU Basic
          </Button>
          <Button
            variant={filter === 'premium' ? 'default' : 'outline'}
            onClick={() => setFilter('premium')}
            className={filter === 'premium' ? 'bg-primary' : ''}
          >
            SKU Standard
          </Button>
          <Button
            variant={filter === 'super' ? 'default' : 'outline'}
            onClick={() => setFilter('super')}
            className={filter === 'super' ? 'bg-primary' : ''}
          >
            SKU Premium
          </Button>
        </div>

        {/* Products Grid */}
        <div ref={productsRef}>
          {isLoading ? (
            <ProductGridSkeleton count={6} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, idx) => (
                <div
                  key={product.id}
                  className={`transition-all duration-700 ${
                    productsVisible ? 'animate-slide-in-bottom' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          )}

          {!isLoading && filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">Không tìm thấy sản phẩm nào.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
