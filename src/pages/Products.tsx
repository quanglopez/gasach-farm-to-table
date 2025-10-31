import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import chickenTexture from '@/assets/chicken-texture.jpg';
import chickenParts from '@/assets/chicken-parts.jpg';
import chickenWholeRaw from '@/assets/chicken-whole-raw.jpg';
import chickenCooked from '@/assets/chicken-cooked.jpg';

const productCategories = [
  {
    id: 'texture',
    title: 'Thớ Thịt Chi Tiết',
    image: chickenTexture,
    description: 'Xem chi tiết thớ thịt gà sạch tươi ngon, sợi thịt mịn màng tự nhiên',
    link: '/gallery',
  },
  {
    id: 'parts',
    title: 'Lóc Thịt Phần Đùi & Cánh',
    image: chickenParts,
    description: 'Thịt đùi và cánh gà tươi ngon, đã lóc xương sẵn cho bạn',
    link: '/gallery',
  },
  {
    id: 'whole-raw',
    title: 'Gà Nguyên Con Tươi',
    image: chickenWholeRaw,
    description: 'Gà ta nguyên con tươi sống, da vàng óng tự nhiên',
    link: '/gallery',
  },
  {
    id: 'cooked',
    title: 'Gà Sau Khi Chế Biến',
    image: chickenCooked,
    description: 'Gà chế biến sẵn, da giòn thơm ngon, tiện lợi cho bữa ăn',
    link: '/gallery',
  },
];

const Products = () => {
  const [filter, setFilter] = useState<'all' | 'regular' | 'premium' | 'super'>('all');

  const filteredProducts =
    filter === 'all' ? products : products.filter((p) => p.category === filter);

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

        {/* Product Categories with Images */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Khám Phá <span className="text-primary">Chi Tiết Sản Phẩm</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category) => (
              <Link key={category.id} to={category.link}>
                <Card className="overflow-hidden card-hover cursor-pointer group h-full">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">Không tìm thấy sản phẩm nào.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
