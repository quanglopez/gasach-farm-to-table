import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import chickenTexture from '@/assets/chicken-texture.jpg';
import chickenParts from '@/assets/chicken-parts.jpg';
import chickenWholeRaw from '@/assets/chicken-whole-raw.jpg';
import chickenCooked from '@/assets/chicken-cooked.jpg';
import textureDetail1 from '@/assets/texture-detail-1.jpg';
import textureDetail2 from '@/assets/texture-detail-2.jpg';
import textureDetail3 from '@/assets/texture-detail-3.jpg';
import farmChickens1 from '@/assets/farm-chickens-1.jpg';
import farmChickens2 from '@/assets/farm-chickens-2.jpg';
import farmChickens3 from '@/assets/farm-chickens-3.jpg';
import farmChickens4 from '@/assets/farm-chickens-4.jpg';
import farmChickens5 from '@/assets/farm-chickens-5.jpg';
import farmChickens6 from '@/assets/farm-chickens-6.jpg';
import farmChickens7 from '@/assets/farm-chickens-7.jpg';
import farmChickens8 from '@/assets/farm-chickens-8.jpg';
import farmChickens9 from '@/assets/farm-chickens-9.jpg';
import tableMeal1 from '@/assets/table-meal-1.jpg';
import tableMeal2 from '@/assets/table-meal-2.jpg';
import tableMeal3 from '@/assets/table-meal-3.jpg';
import tableMeal4 from '@/assets/table-meal-4.jpg';
import tableMeal5 from '@/assets/table-meal-5.jpg';
import tableMeal6 from '@/assets/table-meal-6.jpg';
import tableMeal7 from '@/assets/table-meal-7.jpg';
import tableMeal8 from '@/assets/table-meal-8.jpg';

const farmGalleryImages = [
  farmChickens1,
  farmChickens2,
  farmChickens3,
  farmChickens4,
  farmChickens5,
  farmChickens6,
  farmChickens7,
  farmChickens8,
  farmChickens9,
];

const tableMealImages = [
  tableMeal1,
  tableMeal2,
  tableMeal3,
  tableMeal4,
  tableMeal5,
  tableMeal6,
  tableMeal7,
  tableMeal8,
];

const galleryItems = [
  {
    id: 'farm',
    title: 'Trong Trang Trại Gasach',
    images: farmGalleryImages,
    description: 'Khám phá môi trường nuôi gà tự nhiên tại trang trại Gasach. Gà được chăn thả tự do trong không gian rộng rãi, thoáng mát, với cỏ xanh tươi và không gian sống lý tưởng. Đây là nơi những chú gà khỏe mạnh được chăm sóc tận tình, tạo nên chất lượng thịt gà sạch tuyệt vời.',
    features: [
      'Diện tích rộng, không gian thoáng đãng',
      'Gà chăn thả tự nhiên, vận động tự do',
      'Môi trường sạch sẽ, cỏ xanh tươi',
      'Chăm sóc tận tâm theo tiêu chuẩn',
    ],
  },
  {
    id: 'texture',
    title: 'Thớ Thịt Chi Tiết',
    images: [chickenTexture, textureDetail1, textureDetail2, textureDetail3],
    description: 'Xem chi tiết thớ thịt gà sạch tươi ngon với sợi thịt mịn màng, tự nhiên. Mỗi con gà đều được chọn lọc kỹ càng để đảm bảo chất lượng thịt tươi ngon nhất, không chất tăng trọng, không kháng sinh.',
    features: [
      'Sợi thịt mịn màng, đều đặn',
      'Màu hồng tự nhiên, tươi sống',
      'Không có vết bầm tím hay dấu hiệu hỏng',
      'Độ đàn hồi cao khi ấn vào',
    ],
  },
  {
    id: 'parts',
    title: 'Lóc Thịt Phần Đùi & Cánh',
    image: chickenParts,
    description: 'Phần đùi và cánh gà được lóc thịt cẩn thận, giữ nguyên độ tươi ngon. Đây là những phần thịt được ưa chuộng nhất với độ ngọt tự nhiên và thịt săn chắc, phù hợp cho nhiều món ăn.',
    features: [
      'Thịt đùi săn chắc, không mỡ dư thừa',
      'Cánh gà da vàng óng, giòn giòn',
      'Đã lóc xương sẵn, tiện lợi chế biến',
      'Phù hợp cho chiên, nướng, kho',
    ],
  },
  {
    id: 'whole-raw',
    title: 'Gà Nguyên Con Tươi',
    image: chickenWholeRaw,
    description: 'Gà ta nguyên con tươi sống với da vàng óng tự nhiên, thịt săn chắc. Nuôi tự nhiên trong môi trường sạch sẽ, không sử dụng chất tăng trọng hay kháng sinh độc hại.',
    features: [
      'Da vàng óng ánh tự nhiên',
      'Trọng lượng đạt chuẩn từ 1.5-2.2kg',
      'Thịt săn chắc, không bở nhão',
      'Hoàn hảo cho món luộc, hấp, nấu phở',
    ],
  },
  {
    id: 'cooked',
    title: 'Gà Sau Khi Chế Biến',
    image: chickenCooked,
    description: 'Gà sau khi chế biến với da giòn vàng ươm, thịt thơm ngon hấp dẫn. Đây là kết quả khi bạn sử dụng gà sạch chất lượng cao từ Gasach - mang đến bữa cơm gia đình sum vầy và hạnh phúc.',
    features: [
      'Da giòn tan, vàng ươm đẹp mắt',
      'Thịt mềm mại, thơm ngon tự nhiên',
      'Giữ nguyên giá trị dinh dưỡng',
      'Hương vị đậm đà, đặc trưng gà ta',
    ],
  },
  {
    id: 'table',
    title: 'Trên Mâm Cơm Gia Đình',
    images: tableMealImages,
    description: 'Khoảnh khắc sum vầy bên mâm cơm với món gà sạch thơm ngon. Từ gà luộc truyền thống, gà xé phay, đến gà hấp - mỗi món ăn đều mang đến hương vị tự nhiên, đậm đà của gà ta, tạo nên bữa cơm gia đình ấm cúng và hạnh phúc.',
    features: [
      'Đa dạng cách chế biến: luộc, xé, hấp',
      'Hương vị tự nhiên, thơm ngon đặc trưng',
      'An toàn sức khỏe cho cả gia đình',
      'Bữa cơm sum vầy, hạnh phúc trọn vẹn',
    ],
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-accent-foreground">Thư Viện Ảnh</Badge>
          <h1 className="text-5xl font-bold mb-6">
            Chi Tiết <span className="text-primary">Sản Phẩm</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Khám phá chi tiết từng phần của gà sạch Chicken Fresh - từ thớ thịt tươi ngon đến 
            gà nguyên con và kết quả sau khi chế biến
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="space-y-16">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                {item.images ? (
                  // Carousel for multi-image sections
                  <Carousel className="w-full">
                    <CarouselContent>
                      {item.images.map((img, idx) => (
                        <CarouselItem key={idx} className="md:basis-1/2">
                          <Card className="overflow-hidden card-hover group">
                            <div className="relative aspect-square overflow-hidden">
                              <img
                                src={img}
                                alt={`${item.title} - Ảnh ${idx + 1}`}
                                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                              <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                                {idx + 1}/{item.images.length}
                              </div>
                            </div>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                ) : (
                  // Single image for other sections
                  <Card className="overflow-hidden card-hover group">
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Card>
                )}
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <Badge className="mb-4 bg-primary text-primary-foreground">
                  {String(index + 1).padStart(2, '0')}
                </Badge>
                <h2 className="text-4xl font-bold mb-6">{item.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">{item.description}</p>

                <div className="bg-muted/50 rounded-xl p-6 mb-6">
                  <h3 className="font-bold text-lg mb-4">Đặc điểm nổi bật:</h3>
                  <ul className="space-y-3">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-primary font-bold">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/products">
                  <Button size="lg" variant="accent">
                    Xem Sản Phẩm <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 gradient-primary rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Sẵn Sàng Đặt Hàng?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Hãy mang gà sạch chất lượng cao về cho bữa cơm gia đình sum vầy và hạnh phúc!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/products">
              <Button size="lg" variant="secondary">
                Đặt Hàng Ngay
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Liên Hệ Tư Vấn
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
