import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Minus, Plus, ShoppingCart, ArrowLeft, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { getProductById, products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import ProductCard from '@/components/ProductCard';
import chickenTexture from '@/assets/chicken-texture.jpg';
import chickenParts from '@/assets/chicken-parts.jpg';
import chickenWholeRaw from '@/assets/chicken-whole-raw.jpg';
import chickenCooked from '@/assets/chicken-cooked.jpg';

const detailImages = [
  {
    id: 'texture',
    title: 'Thớ Thịt Chi Tiết',
    image: chickenTexture,
    description: 'Sợi thịt mịn màng, tươi ngon tự nhiên',
  },
  {
    id: 'parts',
    title: 'Phần Đùi & Cánh',
    image: chickenParts,
    description: 'Thịt đùi và cánh săn chắc',
  },
  {
    id: 'whole-raw',
    title: 'Gà Nguyên Con Tươi',
    image: chickenWholeRaw,
    description: 'Da vàng óng, tươi sống',
  },
  {
    id: 'cooked',
    title: 'Sau Khi Chế Biến',
    image: chickenCooked,
    description: 'Da giòn, thơm ngon hấp dẫn',
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const product = getProductById(id || '');

  const galleryImages = product?.gallery || [product?.image || ''];

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Không tìm thấy sản phẩm</h1>
          <Button onClick={() => navigate('/products')}>Quay lại sản phẩm</Button>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/cart');
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Button
          variant="ghost"
          onClick={() => navigate('/products')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay lại
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image Gallery */}
          <div>
            <div 
              className="relative aspect-square rounded-2xl overflow-hidden bg-muted cursor-zoom-in group"
              onClick={() => setIsGalleryOpen(true)}
            >
              <img
                src={galleryImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {product.badge && (
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground text-lg py-2 px-4">
                  {product.badge}
                </Badge>
              )}
              <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1.5 rounded-full text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="h-4 w-4" />
                Xem phóng to
              </div>
            </div>
            
            {/* Thumbnail Gallery */}
            {galleryImages.length > 1 && (
              <div className="grid grid-cols-4 gap-3 mt-4">
                {galleryImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index 
                        ? 'border-primary scale-105 shadow-lg' 
                        : 'border-transparent hover:border-muted-foreground/30'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-bold text-primary mb-6">
              {product.price.toLocaleString('vi-VN')}₫
            </p>

            <Card className="p-6 mb-6">
              <h3 className="font-bold mb-3">Mô tả sản phẩm</h3>
              <p className="text-muted-foreground mb-4">{product.description}</p>
              
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Trọng lượng:</span> {product.weight}</p>
                <p><span className="font-semibold">Nguồn gốc:</span> {product.origin}</p>
              </div>
            </Card>

            <Card className="p-6 mb-6">
              <h3 className="font-bold mb-3">Cách bảo quản</h3>
              <p className="text-muted-foreground text-sm">{product.storage}</p>
            </Card>

            <Card className="p-6 mb-6">
              <h3 className="font-bold mb-3">Gợi ý chế biến</h3>
              <p className="text-muted-foreground text-sm">{product.cooking}</p>
            </Card>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-semibold">Số lượng:</span>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                size="lg"
                className="flex-1 bg-accent hover:opacity-90"
                onClick={handleBuyNow}
              >
                Mua Ngay
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Thêm Giỏ Hàng
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="mt-8 p-4 bg-muted/50 rounded-lg">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  ✓ Cam kết gà tươi 100%
                </li>
                <li className="flex items-center gap-2">
                  ✓ Giao hàng tận nơi trong 24h
                </li>
                <li className="flex items-center gap-2">
                  ✓ Hoàn tiền 100% nếu không hài lòng
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Detail Images Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Chi Tiết <span className="text-primary">Sản Phẩm</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {detailImages.map((img) => (
              <Card key={img.id} className="overflow-hidden card-hover group">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={img.image}
                    alt={img.title}
                    className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-bold text-lg mb-1">{img.title}</h3>
                      <p className="text-sm text-white/90">{img.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Sản Phẩm Liên Quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Gallery Modal */}
      <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
        <DialogContent className="max-w-5xl w-full p-0 bg-black/95">
          <div className="relative">
            <img
              src={galleryImages[selectedImage]}
              alt={product.name}
              className="w-full h-[80vh] object-contain"
            />
            
            {/* Navigation Buttons */}
            {galleryImages.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full h-12 w-12"
                  onClick={handlePrevImage}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full h-12 w-12"
                  onClick={handleNextImage}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
                
                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
                  {selectedImage + 1} / {galleryImages.length}
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductDetail;
