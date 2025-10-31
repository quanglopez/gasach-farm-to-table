import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Heart, Users, Award } from 'lucide-react';
import farmImage from '@/assets/farm-image.jpg';
import qualityImage from '@/assets/quality-process.jpg';

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-primary-foreground">Về Chúng Tôi</Badge>
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-primary">Chicken Fresh</span> - Gà Sạch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hướng tới một lối sống lành mạnh về sức khoẻ, giảm thiểu nỗi lo chi tiêu cho việc ăn uống, 
            giúp cho việc nấu nướng trở nên đơn giản - tiện lợi, những bữa cơm gia đình sẽ trở nên sum vầy 
            và hạnh phúc cho gia đình Việt Nam.
          </p>
        </div>

        {/* Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src={farmImage}
              alt="Trang trại Gasach"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Tầm Nhìn: <span className="text-secondary">Bữa Cơm Gia Đình</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Tầm nhìn tới 2030 là một thương hiệu nhượng quyền hướng tới 50% bếp ăn trong gia đình Việt 
              những món ăn với Gà Sạch chất lượng đi kèm là đạt tiêu chuẩn cao trong tỉnh Đồng Nai. 
              Chúng tôi tập trung vào tệp khách hàng có tính local, nơi "Bữa cơm gia đình" là điều họ luôn 
              mong muốn và duy trì.
            </p>
            <ul className="space-y-3">
              {[
                'Thấu hiểu mong muốn của phụ nữ Việt Nam trong việc chăm sóc gia đình',
                'Mang đến sự an tâm với gà sạch chất lượng cao',
                'Giúp bữa cơm gia đình trở nên ấm áp và hạnh phúc',
                'Đơn giản hóa việc nấu nướng, tiết kiệm thời gian',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Quy Trình Nuôi Dưỡng</h2>
            <p className="text-xl text-muted-foreground">
              Từ giống gà đến bàn ăn - mọi khâu đều được kiểm soát chặt chẽ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: '01',
                title: 'Chọn Giống',
                desc: 'Giống gà ta thuần chủng được nhập khẩu từ các trang trại uy tín. Kiểm tra sức khỏe và tiêm phòng đầy đủ.',
              },
              {
                number: '02',
                title: 'Nuôi Dưỡng',
                desc: 'Chăn thả tự nhiên trên diện tích rộng 5 hecta. Thức ăn hữu cơ, nước sạch từ giếng khoan sâu.',
              },
              {
                number: '03',
                title: 'Kiểm Soát',
                desc: 'Kiểm tra sức khỏe định kỳ. Môi trường nuôi được vệ sinh, khử trùng thường xuyên.',
              },
              {
                number: '04',
                title: 'Thu Hoạch',
                desc: 'Giết mổ theo quy trình vệ sinh an toàn. Đóng gói cẩn thận, giao hàng nhanh chóng.',
              },
            ].map((step, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Quality Control */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold mb-6">
              Tiêu Chuẩn <span className="text-primary">Chất Lượng</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Mỗi con gà của Gasach đều trải qua quy trình kiểm soát chất lượng nghiêm ngặt từ khâu
              chọn giống đến khi đến tay khách hàng. Chúng tôi có đội ngũ chuyên gia thú y và kỹ
              thuật viên giàu kinh nghiệm giám sát 24/7.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Heart, text: 'Chăm sóc tận tâm' },
                { icon: Users, text: 'Đội ngũ chuyên nghiệp' },
                { icon: Award, text: 'Chứng nhận ATTP' },
                { icon: Check, text: 'Cam kết chất lượng' },
              ].map((item, index) => (
                <Card key={index} className="p-4 text-center">
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold">{item.text}</p>
                </Card>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src={qualityImage}
              alt="Quy trình kiểm soát chất lượng"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Values */}
        <div className="bg-muted/30 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Giá Trị Cốt Lõi</h2>
            <p className="text-xl text-muted-foreground">
              Những giá trị mà Gasach luôn đề cao và thực hiện
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Tiêu Chuẩn Chất Lượng',
                desc: 'Cam kết duy trì tiêu chuẩn chất lượng cao nhất từ nguồn cung cấp, sản xuất, đóng gói đến vận chuyển. Mỗi khâu đều được kiểm soát chặt chẽ.',
              },
              {
                title: 'Hài Lòng Dịch Vụ',
                desc: 'Đặt sự hài lòng của khách hàng lên hàng đầu. Luôn lắng nghe và cải thiện dịch vụ để mang đến trải nghiệm tốt nhất cho mọi gia đình.',
              },
            ].map((value, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '5+', label: 'Năm Kinh Nghiệm' },
              { number: '10000+', label: 'Khách Hàng Tin Dùng' },
              { number: '5 Ha', label: 'Diện Tích Trang Trại' },
              { number: '100%', label: 'Cam Kết Chất Lượng' },
            ].map((stat, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
