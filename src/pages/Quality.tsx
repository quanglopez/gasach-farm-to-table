import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, CheckCircle, Award, FileCheck } from 'lucide-react';
import qualityImage from '@/assets/quality-process.jpg';

const Quality = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary text-secondary-foreground">Cam Kết Chất Lượng</Badge>
          <h1 className="text-5xl font-bold mb-6">
            An Toàn <span className="text-primary">100%</span> Cho Sức Khỏe
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Gasach cam kết mang đến sản phẩm gà sạch với chất lượng tuyệt đối, được kiểm soát chặt
            chẽ từng khâu để đảm bảo an toàn thực phẩm cho mọi gia đình.
          </p>
        </div>

        {/* Main Image */}
        <div className="mb-16">
          <img
            src={qualityImage}
            alt="Quy trình kiểm soát chất lượng"
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>

        {/* Quality Commitments */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            Cam Kết <span className="text-primary">Chất Lượng</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: 'Không Chất Tăng Trọng',
                desc: 'Gà được nuôi tự nhiên, không sử dụng bất kỳ chất kích thích tăng trọng nào. Thời gian nuôi đủ 90-120 ngày để gà phát triển tự nhiên.',
              },
              {
                icon: CheckCircle,
                title: 'Không Kháng Sinh',
                desc: 'Không sử dụng kháng sinh trong suốt quá trình nuôi dưỡng. Thay vào đó, chúng tôi chú trọng phòng bệnh bằng cách tăng cường miễn dịch tự nhiên.',
              },
              {
                icon: Award,
                title: 'Thức Ăn Hữu Cơ',
                desc: 'Gà được cho ăn thức ăn hữu cơ, không biến đổi gen. Thức ăn bao gồm ngô, thóc, rau xanh tươi và các loại hạt tự nhiên.',
              },
              {
                icon: FileCheck,
                title: 'Kiểm Tra Định Kỳ',
                desc: 'Đàn gà được kiểm tra sức khỏe định kỳ bởi bác sĩ thú y. Mỗi con gà trước khi xuất chuồng đều được kiểm tra kỹ lưỡng.',
              },
            ].map((item, index) => (
              <Card key={index} className="p-8 card-hover">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quality Control Process */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            Quy Trình <span className="text-secondary">Kiểm Soát</span> Chất Lượng
          </h2>

          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Kiểm Tra Giống',
                desc: 'Chọn lọc giống gà ta thuần chủng, khỏe mạnh. Kiểm tra di truyền và tiêm phòng đầy đủ trước khi đưa vào nuôi.',
              },
              {
                step: '2',
                title: 'Giám Sát Môi Trường',
                desc: 'Theo dõi nhiệt độ, độ ẩm, ánh sáng hàng ngày. Vệ sinh, khử trùng chuồng trại định kỳ để đảm bảo môi trường sống tốt nhất.',
              },
              {
                step: '3',
                title: 'Kiểm Tra Thức Ăn',
                desc: 'Nguồn thức ăn được kiểm tra chất lượng trước khi sử dụng. Đảm bảo không có hóa chất, không biến đổi gen.',
              },
              {
                step: '4',
                title: 'Kiểm Tra Sức Khỏe',
                desc: 'Bác sĩ thú y kiểm tra đàn gà hàng tuần. Phát hiện sớm và xử lý kịp thời nếu có bất thường.',
              },
              {
                step: '5',
                title: 'Kiểm Tra Trước Xuất Chuồng',
                desc: 'Mỗi con gà được kiểm tra kỹ lưỡng về sức khỏe, cân nặng, da thịt trước khi xuất chuồng.',
              },
              {
                step: '6',
                title: 'Quy Trình Giết Mổ',
                desc: 'Giết mổ theo tiêu chuẩn vệ sinh an toàn thực phẩm. Đóng gói cẩn thận trong môi trường vô trùng.',
              },
            ].map((step, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            Chứng Nhận & <span className="text-primary">Giấy Phép</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Giấy Chứng Nhận ATTP',
                desc: 'Chứng nhận An toàn Thực phẩm do Sở Y tế cấp',
                year: '2023',
              },
              {
                title: 'Giấy Phép Kinh Doanh',
                desc: 'Đăng ký kinh doanh hợp pháp, minh bạch',
                year: '2019',
              },
              {
                title: 'Chứng Nhận VietGAP',
                desc: 'Chứng nhận thực hành nông nghiệp tốt',
                year: '2022',
              },
            ].map((cert, index) => (
              <Card key={index} className="p-6 text-center card-hover">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-muted-foreground mb-2">{cert.desc}</p>
                <Badge variant="outline">Năm {cert.year}</Badge>
              </Card>
            ))}
          </div>
        </div>

        {/* Guarantee */}
        <div className="bg-gradient-primary text-white rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Cam Kết Hoàn Tiền 100%</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nếu bạn không hài lòng với chất lượng sản phẩm, chúng tôi cam kết hoàn lại 100% số tiền
            trong vòng 24 giờ. Không cần lý do, không cần giải thích.
          </p>
          <div className="inline-flex items-center gap-2 text-2xl font-bold">
            <Shield className="h-8 w-8" />
            <span>Đảm Bảo Chất Lượng Tuyệt Đối</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
