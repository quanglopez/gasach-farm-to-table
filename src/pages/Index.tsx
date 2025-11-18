import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Leaf, Shield, Award, ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import LazyImage from '@/components/LazyImage';
import heroChicken from '@/assets/hero-background.jpg';
import farmImage from '@/assets/farm-image.jpg';
import farmChickens1 from '@/assets/farm-chickens-1.jpg';
import farmChickens7 from '@/assets/farm-chickens-7.jpg';
import farmBackground from '@/assets/farm-background.jpg';
import farmChickens8 from '@/assets/farm-chickens-8.jpg';
import farmChickens9 from '@/assets/farm-chickens-9.jpg';
import tableMeal1 from '@/assets/table-meal-1.jpg';
import review1 from '@/assets/review-1.jpg';
import review2 from '@/assets/review-2.jpg';
import review3 from '@/assets/review-3.jpg';
import review4 from '@/assets/review-4.jpg';
import review5 from '@/assets/review-5.jpg';
import review6 from '@/assets/review-6.jpg';
import review7 from '@/assets/review-7.jpg';
import review8 from '@/assets/review-8.jpg';
import review9 from '@/assets/review-9.jpg';

const Index = () => {
  const featuredProducts = products;
  const { ref: farmRef, isVisible: farmVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
  const { ref: productsRef, isVisible: productsVisible } = useScrollAnimation();
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation();
  const { ref: farmImagesRef, isVisible: farmImagesVisible } = useScrollAnimation();
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:h-[600px] lg:h-[700px] flex items-center overflow-hidden bg-background">
        <div className="absolute inset-0">
          <LazyImage 
            src={heroChicken} 
            alt="Gà sạch tươi ngon" 
            className="w-full h-full object-cover" 
            eager
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 py-12 md:py-0 relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <Badge className="mb-4 md:mb-6 bg-white/90 text-foreground shadow-lg text-sm md:text-base px-4 py-1.5">
              ✨ 100% Tự Nhiên
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-white drop-shadow-lg">
              Gà Sạch Cho <span className="drop-shadow-lg text-slate-50">Bữa Cơm Gia Đình</span>{' '}
              <span className="text-accent drop-shadow-lg">Sum Vầy Và Hạnh Phúc!</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-white/90 leading-relaxed drop-shadow-md">
              Mang sự tiện lợi và sạch vào bữa cơm việt, cam kết giá cả tốt nhất thị trường, từ đó đảm bảo sức khoẻ giúp cho "mâm cơm nhà" sum vầy và hạnh phúc.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link to="/products" className="w-full sm:w-auto">
                <Button size="lg" variant="accent" className="w-full sm:w-auto text-base md:text-lg">
                  Đặt Hàng Ngay <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="https://m.me/61582742801525" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base md:text-lg border-2">
                  Liên Hệ Tư Vấn Miễn Phí
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* From Farm to Table */}
      <section ref={farmRef} className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-700 ${farmVisible ? 'animate-slide-in-bottom' : 'opacity-0'}`}>
            <Badge className="mb-4 bg-accent text-accent-foreground">
              Hành Trình Từ Trang Trại
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Từ <span className="text-primary">Trang Trại</span> Đến <span className="text-accent">Nhà Bạn</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mỗi con gà đều trải qua hành trình được chăm sóc tận tâm, từ trang trại xanh mát đến bữa cơm sum vầy của gia đình bạn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Farm Section */}
            <Card className={`overflow-hidden card-hover group hover-lift transition-all duration-700 ${farmVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <LazyImage
                  src={farmBackground}
                  alt="Gà trong trang trại"
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">🌿 Trong Trang Trại</h3>
                  <p className="text-white/90">
                    Gà được chăn thả tự nhiên trong môi trường rộng rãi, thoáng mát với cỏ xanh tươi
                  </p>
                </div>
              </div>
              <div className="p-6 bg-card">
                <ul className="space-y-2">
                  {[
                    'Chăn thả tự do, vận động nhiều',
                    'Thức ăn tự nhiên, không hóa chất',
                    'Chăm sóc tận tâm hàng ngày',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* Table Section */}
            <Card className={`overflow-hidden card-hover group hover-lift transition-all duration-700 ${farmVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <LazyImage
                  src={tableMeal1}
                  alt="Gà trên mâm cơm"
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">🍽️ Trên Mâm Cơm</h3>
                  <p className="text-white/90">
                    Món ăn thơm ngon, bổ dưỡng cho bữa cơm gia đình sum vầy và hạnh phúc
                  </p>
                </div>
              </div>
              <div className="p-6 bg-card">
                <ul className="space-y-2">
                  {[
                    'Thịt thơm ngon, dai ngọt tự nhiên',
                    'An toàn tuyệt đối cho sức khỏe',
                    'Mang hạnh phúc đến gia đình',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link to="/gallery">
              <Button size="lg" variant="outline">
                Xem Thêm Hình Ảnh <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section ref={valuesRef} className="py-12 md:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 transition-all duration-700 ${valuesVisible ? 'animate-slide-in-bottom' : 'opacity-0'}`}>
            Tại Sao Chọn <span className="text-gradient">Gà Sạch</span>?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[{
            icon: Leaf,
            title: 'Gà Nuôi Tự Nhiên 100%',
            description: 'Gà được nuôi thả vườn trong môi trường tự nhiên, ăn bắp và cám sạch, giúp thịt săn chắc, thơm ngon và đảm bảo an toàn tuyệt đối cho sức khỏe'
          }, {
            icon: Shield,
            title: 'Không Chất Tăng Trọng – Không Kháng Sinh',
            description: 'Tuyệt đối nói không với chất tăng trọng, không sử dụng kháng sinh trong suốt quá trình nuôi. Mỗi con gà đều được kiểm tra chất lượng kỹ lưỡng'
          }, {
            icon: Award,
            title: 'Nguồn Gốc Minh Bạch – Giá Cả Phù Hợp',
            description: 'Minh bạch nguồn gốc từ trang trại tới tay khách hàng, truy xuất dễ dàng. Giá bán luôn hợp lý, bình ổn, gần sát với giá thị trường truyền thống'
          }, {
            icon: Check,
            title: 'Dịch Vụ Khách Hàng Chu Đáo',
            description: 'Đội ngũ luôn đồng hành và hỗ trợ nhiệt tình, giúp quý khách có trải nghiệm nhanh chóng, tiện lợi và hài lòng tuyệt đối'
          }].map((item, index) => <Card key={index} className={`p-5 md:p-6 text-center card-hover card-glass border-2 hover-lift transition-all duration-700 ${valuesVisible ? 'animate-zoom-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 100}ms` }}>
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-3 md:mb-4 shadow-[var(--shadow-soft)]">
                  <item.icon className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section ref={productsRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-700 ${productsVisible ? 'animate-slide-in-bottom' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-4">Sản Phẩm Nổi Bật</h2>
            <p className="text-xl text-muted-foreground mb-2">
              Chọn lựa gà sạch chất lượng cao cho gia đình bạn
            </p>
            <p className="text-lg text-muted-foreground font-medium">
              Gà nuôi 100% tự nhiên - Được thả vườn, môi trường tự nhiên, cho ăn bắp và cám nên thịt săn chắc và đảm bảo an toàn
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product, idx) => (
              <div
                key={product.id}
                className={`transition-all duration-700 ${productsVisible ? 'animate-zoom-in' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section ref={processRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center mb-12 transition-all duration-700 ${processVisible ? 'animate-slide-in-bottom' : 'opacity-0'}`}>
            Quy Trình Nuôi Gà <span className="text-primary">Sạch</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[{
            step: '01',
            title: 'Chọn Giống',
            desc: 'Giống gà ta thuần chủng, khỏe mạnh'
          }, {
            step: '02',
            title: 'Nuôi Dưỡng',
            desc: 'Chăn thả tự nhiên, thức ăn hữu cơ'
          }, {
            step: '03',
            title: 'Kiểm Tra',
            desc: 'Kiểm soát chất lượng nghiêm ngặt'
          }, {
            step: '04',
            title: 'Giao Hàng',
            desc: 'Đóng gói cẩn thận, giao tận nơi'
          }].map((item, index) => <div key={index} className={`text-center transition-all duration-700 ${processVisible ? 'animate-zoom-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 100}ms` }}>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Farm Image */}
      <section ref={farmImagesRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 ${farmImagesVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <Carousel className="w-full">
                <CarouselContent>
                  {[farmChickens1, farmChickens7, farmChickens8, farmChickens9].map((img, idx) => (
                    <CarouselItem key={idx}>
                      <LazyImage 
                        src={img} 
                        alt={`Trang trại Gasach - Ảnh ${idx + 1}`} 
                        className="rounded-2xl shadow-2xl w-full h-auto object-cover" 
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
            <div className={`transition-all duration-700 ${farmImagesVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              <Badge className="mb-4 bg-secondary text-secondary-foreground">
                Trang Trại Của Chúng Tôi
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                Môi Trường Nuôi <span className="text-secondary">Tự Nhiên</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Trang trại toạ lạc tại địa bàn tỉnh Đồng Nai, với không gian rộng rãi, 
                nguồn nước và thức ăn được kiểm soát chặt chẽ. Gà được chăn thả tự do, 
                và chăm sóc kỹ lưỡng.
              </p>
              <ul className="space-y-3 mb-8">
                {['Nguồn nước sạch từ giếng khoan sâu', 'Thức ăn hữu cơ, không hoá chất', 'Đội ngũ Chuyên nghiệp, có kỹ năng nghiệp vụ về gia cầm'].map((item, index) => <li key={index} className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </li>)}
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
          <h2 className="text-4xl font-bold text-center mb-4">
            Phản Hồi <span className="text-accent">Khách Hàng</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Ý kiến của bạn rất quan trọng với chúng tôi. Hãy chia sẻ trải nghiệm của bạn để giúp Gasach ngày càng hoàn thiện hơn!
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">5.0</div>
              <div className="flex gap-1 justify-center mb-2">
                {[...Array(5)].map((_, i) => <span key={i} className="text-accent text-xl">★</span>)}
              </div>
              <p className="text-sm text-muted-foreground">Đánh giá trung bình</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <p className="text-sm text-muted-foreground">Khách hàng hài lòng</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <p className="text-sm text-muted-foreground">Tỷ lệ hài lòng</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">60%+</div>
              <p className="text-sm text-muted-foreground">Khách hàng trung thành</p>
            </Card>
          </div>
          
          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
            name: 'Chị Mai Phương',
            location: 'Long Khánh, Đồng Nai',
            rating: 5,
            date: '05/11/2025',
            comment: 'Gia đình mình mua gà của Gasach được gần 1 năm rồi. Chất lượng luôn ổn định, thịt gà thơm ngon, da vàng óng. Đặc biệt là dịch vụ giao hàng rất nhanh, gà luôn tươi. Giá cả hợp lý, cả nhà rất hài lòng!',
            image: review1
          }, {
            name: 'Anh Thanh Tùng',
            location: 'Long Khánh, Đồng Nai',
            rating: 5,
            date: '08/11/2025',
            comment: 'Mình đã thử nhiều nơi bán gà sạch nhưng chỉ có Gasach là ưng ý nhất. Gà nuôi tự nhiên nên thịt dai, ngọt và rất thơm. Nấu phở hay luộc đều ngon. Nhân viên tư vấn nhiệt tình, đóng gói cẩn thận!',
            image: review2
          }, {
            name: 'Chị Ngọc Hân',
            location: 'Biên Hòa, Đồng Nai',
            rating: 5,
            date: '12/11/2025',
            comment: 'Lần đầu đặt mua nhưng rất hài lòng với chất lượng. Gà tươi, sạch sẽ, không mùi. Bữa cơm gia đình ngon hơn hẳn khi dùng gà của Gasach. Chắc chắn sẽ ủng hộ lâu dài!',
            image: review3
          }, {
            name: 'Chị Thu Hà',
            location: 'Xuân Lộc, Đồng Nai',
            rating: 5,
            date: '15/11/2025',
            comment: 'Gà luộc da vàng óng, thịt chắc và ngọt tự nhiên. Cả nhà đều khen ngon, đặc biệt các bé ăn rất thích. Sẽ giới thiệu cho bạn bè cùng dùng thử!',
            image: review4
          }, {
            name: 'Anh Minh Tuấn',
            location: 'Trảng Bom, Đồng Nai',
            rating: 5,
            date: '18/11/2025',
            comment: 'Thịt gà săn chắc, thớ thịt đẹp, nấu món gì cũng ngon. Đặc biệt là khi làm gà hấp sả hay gà luộc, hương vị thơm ngon tự nhiên không cần nhiều gia vị.',
            image: review5
          }, {
            name: 'Chị Lan Anh',
            location: 'Nhơn Trạch, Đồng Nai',
            rating: 5,
            date: '20/11/2025',
            comment: 'Mình mua gà về xé để chấm với nước muối chanh, thịt ngọt và dai vừa phải. Gia đình rất thích, đã đặt mua nhiều lần và luôn hài lòng với chất lượng!',
            image: review6
          }, {
            name: 'Anh Quốc Bảo',
            location: 'Long Thành, Đồng Nai',
            rating: 5,
            date: '22/11/2025',
            comment: 'Gà luộc nguyên con để cúng rất đẹp, da vàng bóng. Sau khi cúng xong, xé ra ăn thì thịt vẫn ngon, không bị khô. Rất hài lòng với sản phẩm!',
            image: review7
          }, {
            name: 'Chị Bích Ngọc',
            location: 'Định Quán, Đồng Nai',
            rating: 5,
            date: '25/11/2025',
            comment: 'Đùi gà to, thịt nhiều và rất ngon. Nướng hay luộc đều được, thịt thơm và không bị mùi hôi. Con nhỏ nhà mình rất thích ăn, giờ chỉ mua gà của Gasach thôi!',
            image: review8
          }, {
            name: 'Anh Văn Hải',
            location: 'Thống Nhất, Đồng Nai',
            rating: 5,
            date: '28/11/2025',
            comment: 'Gà nấu cơm rất ngon, thịt dai ngọt và nước dùng trong. Vợ mình rất thích vì dễ chế biến và an tâm về chất lượng. Sẽ mua thường xuyên!',
            image: review9
          }].map((testimonial, index) => <Card key={index} className="p-6 overflow-hidden">
                <div className="mb-4">
                  <LazyImage 
                    src={testimonial.image} 
                    alt={`Đánh giá từ ${testimonial.name}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => <span key={i} className="text-accent text-xl">★</span>)}
                  </div>
                  <span className="text-sm text-muted-foreground">{testimonial.date}</span>
                </div>
                <p className="text-muted-foreground mb-4 italic leading-relaxed">"{testimonial.comment}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </Card>)}
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
              <Button size="lg" variant="accent" className="text-lg">
                Liên Hệ Tư Vấn
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;