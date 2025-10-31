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
          <Badge className="mb-4 bg-secondary text-secondary-foreground">Tiêu Chuẩn 3 Sạch</Badge>
          <h1 className="text-5xl font-bold mb-6">
            Chất Lượng Là <span className="text-primary">Hàng Đầu</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Chicken Fresh cam kết tiêu chuẩn 3 sạch: Nguồn cung cấp sạch - Sản xuất và đóng gói sạch - 
            Vận chuyển giao hàng sạch. Mỗi khâu được kiểm soát chặt chẽ để đảm bảo chất lượng và dịch vụ hài lòng.
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
            Tiêu Chuẩn <span className="text-primary">3 Sạch</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Nguồn Cung Cấp Sạch',
                desc: 'Tiêu chuẩn nhập đầu vào được kiểm soát chặt chẽ. Chọn lọc giống gà ta thuần chủng, khỏe mạnh từ các trang trại uy tín với chứng nhận đầy đủ.',
              },
              {
                icon: CheckCircle,
                title: 'Sản Xuất & Đóng Gói Sạch',
                desc: 'Tiêu chuẩn về cơ sở vật chất, chuồng trại ở nơi gia công được đảm bảo. Quy trình sản xuất và đóng gói đạt chuẩn vệ sinh an toàn thực phẩm.',
              },
              {
                icon: Award,
                title: 'Vận Chuyển Giao Hàng Sạch',
                desc: 'Bảo quản nhiệt độ phù hợp trong suốt quá trình vận chuyển. Tiêu chuẩn cơ sở vật chất tại điểm bán và kho hàng được kiểm soát nghiêm ngặt.',
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
                title: 'Kiểm Soát Đầu Vào',
                desc: 'Tiêu chuẩn nhập đầu vào: Chọn lọc giống gà ta thuần chủng, kiểm tra nguồn gốc rõ ràng, chứng nhận đầy đủ từ nhà cung cấp uy tín.',
              },
              {
                step: '2',
                title: 'Khâu Sản Xuất',
                desc: 'Tiêu chuẩn về cơ sở vật chất, chuồng trại ở nơi gia công: Môi trường nuôi đạt chuẩn, vệ sinh định kỳ, giám sát nhiệt độ và độ ẩm thường xuyên.',
              },
              {
                step: '3',
                title: 'Kênh Bán Hàng',
                desc: 'Bảo quản nhiệt độ phù hợp hàng trong quá trình bán ra. Tiêu chuẩn cơ sở vật chất nơi trưng bày hàng tại điểm bán được kiểm tra nghiêm ngặt.',
              },
              {
                step: '4',
                title: 'Quản Lý Hàng Tồn',
                desc: 'Bảo quản nhiệt độ phù hợp trong quá trình thanh lý hàng tồn kho. Cơ sở vật chất nơi trưng bày hàng đảm bảo chất lượng sản phẩm.',
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
