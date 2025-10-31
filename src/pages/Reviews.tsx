import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Star } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const Reviews = () => {
  const [rating, setRating] = useState(5);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    productQuality: 5,
    deliveryService: 5,
    staffAttitude: 5,
    comment: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate saving to database
    const review = {
      ...formData,
      overallRating: rating,
      timestamp: new Date().toISOString(),
    };
    
    console.log('Review submitted:', review);
    
    toast.success('Cảm ơn bạn đã đánh giá! Đánh giá của bạn rất quan trọng với chúng tôi.');
    setRating(5);
    setFormData({
      name: '',
      location: '',
      productQuality: 5,
      deliveryService: 5,
      staffAttitude: 5,
      comment: '',
    });
  };

  const reviews = [
    {
      name: 'Chị Phương Thảo',
      location: 'Long Khánh, Đồng Nai',
      rating: 5,
      date: '25/11/2025',
      comment:
        'Gà rất tươi ngon, thịt dai và ngọt tự nhiên. Gia đình tôi ở Long Khánh rất hài lòng với chất lượng. Da gà vàng óng, thịt săn chắc. Đã đặt mua nhiều lần và sẽ ủng hộ Gasach lâu dài!',
      productQuality: 5,
      deliveryService: 5,
      staffAttitude: 5,
    },
    {
      name: 'Anh Minh Tuấn',
      location: 'Long Khánh, Đồng Nai',
      rating: 5,
      date: '18/11/2025',
      comment:
        'Mua thử lần đầu và rất ưng ý. Nấu phở gà cho gia đình ngon tuyệt vời. Giá hợp lý so với chất lượng. Giao hàng tận nhà ở Long Khánh nhanh chóng, đóng gói cẩn thận. Chắc chắn sẽ mua lại!',
      productQuality: 5,
      deliveryService: 5,
      staffAttitude: 5,
    },
    {
      name: 'Chị Hương Lan',
      location: 'Long Khánh, Đồng Nai',
      rating: 5,
      date: '12/11/2025',
      comment:
        'Đặt hàng rất dễ dàng. Gà tươi ngon, không tanh, thịt chắc. Dịch vụ tốt, nhân viên nhiệt tình tư vấn. Chất lượng đúng như cam kết. Cả nhà đều rất hài lòng và sẽ giới thiệu cho bạn bè!',
      productQuality: 5,
      deliveryService: 5,
      staffAttitude: 5,
    },
    {
      name: 'Anh Văn Đức',
      location: 'Long Khánh, Đồng Nai',
      rating: 5,
      date: '05/11/2025',
      comment:
        'Gà sạch thật sự, ăn rất yên tâm. Thích nhất là da gà vàng tự nhiên, không giống gà công nghiệp. Mua cho bố mẹ và cả nhà đều khen ngon. Gasach là lựa chọn tốt nhất cho bữa cơm gia đình!',
      productQuality: 5,
      deliveryService: 5,
      staffAttitude: 5,
    },
  ];

  const RatingStars = ({ value, onChange }: { value: number; onChange?: (val: number) => void }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange?.(star)}
            className={`${onChange ? 'cursor-pointer' : 'cursor-default'}`}
          >
            <Star
              className={`h-6 w-6 ${
                star <= value
                  ? 'fill-primary text-primary'
                  : 'fill-none text-muted-foreground'
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Phản Hồi <span className="text-primary">Khách Hàng</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ý kiến của bạn rất quan trọng với chúng tôi. Hãy chia sẻ trải nghiệm của bạn để giúp
            Gasach ngày càng hoàn thiện hơn!
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">5.0</div>
            <div className="flex justify-center mb-2">
              <RatingStars value={5} />
            </div>
            <p className="text-muted-foreground">Đánh giá trung bình</p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <p className="text-muted-foreground">Khách hàng hài lòng</p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <p className="text-muted-foreground">Phản hồi tích cực</p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">60%+</div>
            <p className="text-muted-foreground">Khách hàng trung thành</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Review Form */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Đánh Giá Của Bạn</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label>Đánh giá tổng thể *</Label>
                  <RatingStars value={rating} onChange={setRating} />
                </div>

                <div>
                  <Label htmlFor="name">Họ và tên *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nguyễn Văn A"
                  />
                </div>

                <div>
                  <Label htmlFor="location">Địa chỉ</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Hà Nội"
                  />
                </div>

                <div>
                  <Label>Chất lượng sản phẩm</Label>
                  <RatingStars
                    value={formData.productQuality}
                    onChange={(val) => setFormData({ ...formData, productQuality: val })}
                  />
                </div>

                <div>
                  <Label>Dịch vụ giao hàng</Label>
                  <RatingStars
                    value={formData.deliveryService}
                    onChange={(val) => setFormData({ ...formData, deliveryService: val })}
                  />
                </div>

                <div>
                  <Label>Thái độ nhân viên</Label>
                  <RatingStars
                    value={formData.staffAttitude}
                    onChange={(val) => setFormData({ ...formData, staffAttitude: val })}
                  />
                </div>

                <div>
                  <Label htmlFor="comment">Nhận xét chi tiết *</Label>
                  <Textarea
                    id="comment"
                    required
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    placeholder="Chia sẻ trải nghiệm của bạn về sản phẩm và dịch vụ..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full bg-accent">
                  Gửi Đánh Giá
                </Button>
              </form>
            </Card>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold mb-6">Đánh Giá Từ Khách Hàng</h2>
            
            {reviews.map((review, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-lg">{review.name}</h3>
                      <span className="text-sm text-muted-foreground">{review.location}</span>
                    </div>
                    <RatingStars value={review.rating} />
                  </div>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>

                <p className="text-muted-foreground mb-4">{review.comment}</p>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Chất lượng SP</p>
                    <div className="flex gap-0.5">
                      {[...Array(review.productQuality)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Giao hàng</p>
                    <div className="flex gap-0.5">
                      {[...Array(review.deliveryService)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Nhân viên</p>
                    <div className="flex gap-0.5">
                      {[...Array(review.staffAttitude)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
