import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const SkuStandards = () => {
  const standards = [
    {
      title: 'SKU Basic',
      badge: 'SKU Basic',
      color: 'bg-blue-500/10 text-blue-700 border-blue-500/20',
      description: 'Gà thịt độ dai thấp, thịt vẫn thơm nhẹ, vàng nhẹ phù hợp với món nướng, chiên, kho và khách hàng chỉ thích ăn dai ít',
      features: [
        'Độ dai thấp, thịt mềm',
        'Thịt thơm nhẹ, vàng nhẹ',
        'Phù hợp nướng, chiên, kho',
        'Giá cả phải chăng',
        'Thích hợp khách hàng ăn dai ít'
      ],
      cookingMethods: ['Nướng', 'Chiên', 'Kho'],
      weight: '1.6 - 1.9 kg',
      priceRange: '80,000đ - 95,000đ'
    },
    {
      title: 'SKU Standard',
      badge: 'SKU Standard',
      color: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
      description: 'Gà thịt có độ dai vừa tới, thịt thơm, ít mỡ, vàng óng tự nhiên, với gà mái có độ béo nhẹ, trong thớ thịt. Phù hợp với các món lẩu, kho, luộc',
      features: [
        'Độ dai vừa phải, cân đối',
        'Thịt thơm, ít mỡ',
        'Vàng óng tự nhiên',
        'Gà mái có độ béo nhẹ trong thớ thịt',
        'Chất lượng đảm bảo'
      ],
      cookingMethods: ['Lẩu', 'Kho', 'Luộc', 'Hấp'],
      weight: '1.5 - 2.4 kg',
      priceRange: '95,000đ - 110,000đ'
    },
    {
      title: 'SKU Premium',
      badge: 'SKU Premium',
      color: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
      description: 'Sản phẩm "gà ta ngon" đảm bảo được độ dai ngon, thơm, da giòn, vàng óng hoặc đỏ, ít mỡ. Gà mái tơ có ôm trứng chưa đẻ thịt béo thơm. Phù hợp các món luộc, hấp, lẩu',
      features: [
        'Độ dai ngon, đậm đà',
        'Thịt thơm, da giòn',
        'Vàng óng hoặc đỏ tự nhiên',
        'Gà mái tơ ôm trứng, thịt béo thơm',
        'Cao cấp nhất, chất lượng đỉnh'
      ],
      cookingMethods: ['Luộc', 'Hấp', 'Lẩu', 'Gà tần'],
      weight: '1.5 - 2.0 kg',
      priceRange: '125,000đ - 135,000đ'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Chuẩn Phân Loại <span className="text-primary">SKU</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tại Gasach, chúng tôi phân loại gà theo 3 chuẩn SKU khác nhau để phù hợp với từng nhu cầu chế biến và khẩu vị của khách hàng
          </p>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {standards.map((standard, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover-lift border-2"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">{standard.title}</h2>
                <Badge className={`${standard.color} border-2`}>
                  {standard.badge}
                </Badge>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {standard.description}
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-3 text-lg">Đặc điểm nổi bật</h3>
                  <ul className="space-y-2">
                    {standard.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="font-semibold text-muted-foreground mb-1">Trọng lượng</p>
                      <p className="font-bold">{standard.weight}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-muted-foreground mb-1">Giá</p>
                      <p className="font-bold text-primary">{standard.priceRange}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="font-semibold mb-2 text-sm">Phương thức chế biến phù hợp</p>
                  <div className="flex flex-wrap gap-2">
                    {standard.cookingMethods.map((method, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {method}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <Card className="p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Bảng So Sánh Chi Tiết</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-4 px-2 md:px-4">Tiêu chí</th>
                  <th className="text-center py-4 px-2 md:px-4 text-blue-700">SKU Basic</th>
                  <th className="text-center py-4 px-2 md:px-4 text-amber-700">SKU Standard</th>
                  <th className="text-center py-4 px-2 md:px-4 text-emerald-700">SKU Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-2 md:px-4 font-semibold">Độ dai</td>
                  <td className="text-center py-4 px-2 md:px-4">Thấp</td>
                  <td className="text-center py-4 px-2 md:px-4">Vừa phải</td>
                  <td className="text-center py-4 px-2 md:px-4">Ngon, đậm đà</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-2 md:px-4 font-semibold">Hương thơm</td>
                  <td className="text-center py-4 px-2 md:px-4">Nhẹ</td>
                  <td className="text-center py-4 px-2 md:px-4">Thơm</td>
                  <td className="text-center py-4 px-2 md:px-4">Rất thơm</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-2 md:px-4 font-semibold">Độ béo</td>
                  <td className="text-center py-4 px-2 md:px-4">Ít</td>
                  <td className="text-center py-4 px-2 md:px-4">Béo nhẹ (mái)</td>
                  <td className="text-center py-4 px-2 md:px-4">Béo thơm</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-2 md:px-4 font-semibold">Da gà</td>
                  <td className="text-center py-4 px-2 md:px-4">Vàng nhẹ</td>
                  <td className="text-center py-4 px-2 md:px-4">Vàng óng</td>
                  <td className="text-center py-4 px-2 md:px-4">Vàng óng/đỏ, giòn</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-2 md:px-4 font-semibold">Món ăn phù hợp</td>
                  <td className="text-center py-4 px-2 md:px-4 text-sm">Nướng, chiên, kho</td>
                  <td className="text-center py-4 px-2 md:px-4 text-sm">Lẩu, kho, luộc</td>
                  <td className="text-center py-4 px-2 md:px-4 text-sm">Luộc, hấp, lẩu</td>
                </tr>
                <tr>
                  <td className="py-4 px-2 md:px-4 font-semibold">Mức giá</td>
                  <td className="text-center py-4 px-2 md:px-4">₫</td>
                  <td className="text-center py-4 px-2 md:px-4">₫₫</td>
                  <td className="text-center py-4 px-2 md:px-4">₫₫₫</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
            <h3 className="text-2xl font-bold mb-3">Cần Tư Vấn Chọn Gà?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Đội ngũ chuyên gia của Gasach sẵn sàng tư vấn để bạn chọn được loại gà phù hợp nhất cho món ăn của mình
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:0899099940">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Gọi ngay: 089 909 9940
                </button>
              </a>
              <a href="https://zalo.me/0899099940" target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Chat Zalo
                </button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SkuStandards;
