import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Leaf, Shield, Award, ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import heroChicken from '@/assets/hero-chicken.jpg';
import farmImage from '@/assets/farm-image.jpg';

const Index = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:h-[600px] lg:h-[700px] flex items-center gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroChicken}
            alt="Gà sạch tươi ngon"
            className="w-full h-full object-cover mix-blend-overlay opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 py-12 md:py-0 relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <Badge className="mb-4 md:mb-6 bg-accent text-accent-foreground shadow-lg text-sm md:text-base px-4 py-1.5">
              ✨ 100% Tự Nhiên
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Gà Sạch Cho <span className="text-gradient">Bữa Cơm Gia Đình</span>{' '}
              <span className="text-secondary">Sum Vầy Và Hạnh Phúc!</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-muted-foreground leading-relaxed">
              Gà ta tươi ngon, nuôi tự nhiên, không chất tăng trọng, không kháng sinh độc hại.
              Giúp bữa nấu nướng đơn giản - tiện lợi, mang đến sự ấm áp cho mỗi bữa ăn gia đình.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link to="/products" className="w-full sm:w-auto">
                <Button size="lg" variant="accent" className="w-full sm:w-auto text-base md:text-lg">
                  Đặt Hàng Ngay <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:0899099940" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base md:text-lg border-2">
                  Gọi Tư Vấn Miễn Phí
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            Tại Sao Chọn <span className="text-gradient">Chicken Fresh</span>?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: Leaf,
                title: 'Nuôi Tự Nhiên 100%',
                description: 'Gà được chăn thả tự do, ăn thức ăn tự nhiên trong môi trường sạch sẽ',
              },
              {
                icon: Shield,
                title: 'Không Chất Tăng Trọng',
                description: 'Cam kết không sử dụng bất kỳ chất tăng trọng nào trong quá trình nuôi',
              },
              {
                icon: Award,
                title: 'Không Kháng Sinh',
                description: 'An toàn tuyệt đối, không có kháng sinh độc hại cho sức khỏe',
              },
              {
                icon: Check,
                title: 'Nguồn Gốc Rõ Ràng',
                description: 'Truy xuất nguồn gốc minh bạch từ trang trại đến bàn ăn',
              },
            ].map((item, index) => (
              <Card key={index} className="p-5 md:p-6 text-center card-hover card-glass border-2">
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-3 md:mb-4 shadow-[var(--shadow-soft)]">
                  <item.icon className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Sản Phẩm Nổi Bật</h2>
            <p className="text-xl text-muted-foreground">
              Chọn lựa gà sạch chất lượng cao cho gia đình bạn
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/products">
              <Button size="lg" variant="outline" className="text-lg">
                Xem Tất Cả Sản Phẩm <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Quy Trình Nuôi Gà <span className="text-primary">Sạch</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Chọn Giống', desc: 'Giống gà ta thuần chủng, khỏe mạnh' },
              { step: '02', title: 'Nuôi Dưỡng', desc: 'Chăn thả tự nhiên, thức ăn hữu cơ' },
              { step: '03', title: 'Kiểm Tra', desc: 'Kiểm soát chất lượng nghiêm ngặt' },
              { step: '04', title: 'Giao Hàng', desc: 'Đóng gói cẩn thận, giao tận nơi' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm Image */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={farmImage}
                alt="Trang trại Gasach"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-secondary text-secondary-foreground">
                Trang Trại Của Chúng Tôi
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                Môi Trường Nuôi <span className="text-secondary">Tự Nhiên</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Trang trại Chicken Fresh tọa lạc tại Đồng Nai, với không gian rộng rãi,
                thoáng mát và trong lành. Gà được chăn thả tự do trên đồng cỏ xanh mướt,
                tận hưởng ánh nắng mặt trời tự nhiên và không khí trong lành.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Diện tích rộng 5 hecta với môi trường tự nhiên',
                  'Nguồn nước sạch từ giếng khoan sâu',
                  'Thức ăn hữu cơ, không hóa chất',
                  'Chăm sóc tận tâm bởi đội ngũ chuyên nghiệp',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about">
                <Button size="lg" variant="outline">
                  Tìm Hiểu Thêm
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Khách Hàng Nói Gì Về <span className="text-primary">Chicken Fresh</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Chị Lan Anh',
                location: 'Đồng Nai',
                rating: 5,
                comment:
                  'Gà rất tươi ngon, thịt dai và ngọt tự nhiên. Gia đình tôi rất hài lòng với chất lượng. Bữa cơm gia đình thêm phần sum vầy và ấm cúng!',
              },
              {
                name: 'Anh Minh Tuấn',
                location: 'Biên Hòa',
                rating: 5,
                comment:
                  'Mua thử lần đầu và rất ưng ý. Da gà vàng óng, thịt săn chắc. Nấu phở gà ngon tuyệt vời. Giá hợp lý so với chất lượng.',
              },
              {
                name: 'Chị Hương',
                location: 'Long Khánh',
                rating: 5,
                comment:
                  'Đặt hàng online rất dễ dàng, giao hàng nhanh. Gà đóng gói cẩn thận, tươi ngon. Dịch vụ tốt, nhân viên nhiệt tình!',
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/reviews">
              <Button variant="outline">Xem Thêm Đánh Giá</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Sẵn Sàng Thưởng Thức Gà Sạch?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Đặt hàng ngay hôm nay để nhận gà tươi ngon giao tận nơi. Cam kết hoàn tiền 100% nếu
            không hài lòng!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/products">
              <Button size="lg" variant="secondary" className="text-lg">
                Đặt Hàng Ngay
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg text-white border-white hover:bg-white/10">
                Liên Hệ Tư Vấn
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
