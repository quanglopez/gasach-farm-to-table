import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import chickenTexture from '@/assets/chicken-texture.jpg';
import chickenParts from '@/assets/chicken-parts.jpg';
import chickenWholeRaw from '@/assets/chicken-whole-raw.jpg';
import chickenCooked from '@/assets/chicken-cooked.jpg';

const galleryItems = [
  {
    id: 'texture',
    title: 'Thớ Thịt Chi Tiết',
    image: chickenTexture,
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
    description: 'Gà sau khi chế biến với da giòn vàng ươm, thịt thơm ngon hấp dẫn. Đây là kết quả khi bạn sử dụng gà sạch chất lượng cao từ Chicken Fresh - mang đến bữa cơm gia đình sum vầy và hạnh phúc.',
    features: [
      'Da giòn tan, vàng ươm đẹp mắt',
      'Thịt mềm mại, thơm ngon tự nhiên',
      'Giữ nguyên giá trị dinh dưỡng',
      'Hương vị đậm đà, đặc trưng gà ta',
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
