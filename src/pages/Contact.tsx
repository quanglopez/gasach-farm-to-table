import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate saving to database
    console.log('Contact form submitted:', formData);
    toast.success('Tin nhắn đã được gửi! Chúng tôi sẽ phản hồi bạn trong thời gian sớm nhất.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };
  return <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Liên Hệ Với <span className="text-primary">Gasach</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ với chúng tôi qua bất kỳ
            kênh nào bạn thấy thuận tiện nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Hotline</h3>
                  <a href="tel:0899099940" className="text-lg text-primary hover:underline">
                    0899 099 940
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Hỗ trợ 24/7
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <a href="mailto:info@gasach.vn" className="text-primary hover:underline">
                    info@gasach.vn
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Phản hồi trong 24h
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Địa chỉ</h3>
                  <p className="text-muted-foreground">
                    64 Đào Trí Phú, P.Long Khánh<br />
                    (P.Xuân Thanh cũ), Đồng Nai
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Giờ làm việc</h3>
                  <p className="text-muted-foreground">Thứ 2 - Chủ Nhật
6:00 - 21:00<br />
                    7:00 - 20:00
                  </p>
                </div>
              </div>
            </Card>

            {/* Social Media */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">Kết Nối Với Chúng Tôi</h3>
              <div className="flex gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Facebook className="h-5 w-5" />
                  </Button>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Instagram className="h-5 w-5" />
                  </Button>
                </a>
                <a href="https://zalo.me/0899099940" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <MessageCircle className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6">Gửi Tin Nhắn Cho Chúng Tôi</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Họ và tên *</Label>
                    <Input id="name" required value={formData.name} onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                  })} placeholder="Nguyễn Văn A" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Số điện thoại *</Label>
                    <Input id="phone" type="tel" required value={formData.phone} onChange={e => setFormData({
                    ...formData,
                    phone: e.target.value
                  })} placeholder="0123456789" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" required value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} placeholder="example@email.com" />
                </div>

                <div>
                  <Label htmlFor="message">Nội dung tin nhắn *</Label>
                  <Textarea id="message" required value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} placeholder="Nhập nội dung bạn muốn gửi..." rows={6} />
                </div>

                <Button type="submit" size="lg" className="w-full bg-accent">
                  Gửi Tin Nhắn
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Map */}
        <Card className="overflow-hidden">
          <div className="aspect-video bg-muted">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0969285507887!2d105.78466631540295!3d21.02880939317545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cd0c66f05%3A0xea31563511af2e54!2sHanoi%2C%20Vietnam!5e0!3m2!1sen!2s!4v1234567890123" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Gasach Location" />
          </div>
        </Card>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Câu Hỏi Thường Gặp</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[{
            q: 'Gasach giao hàng ở những khu vực nào?',
            a: 'Chúng tôi giao hàng toàn quốc. Nội thành Hà Nội giao trong vòng 2-4 giờ, các tỉnh thành khác 1-2 ngày.'
          }, {
            q: 'Làm sao để biết gà tươi?',
            a: 'Gà của chúng tôi được giết mổ mỗi sáng, da vàng óng, thịt săn chắc. Chúng tôi cam kết hoàn tiền 100% nếu gà không tươi.'
          }, {
            q: 'Có thể đặt hàng trước không?',
            a: 'Có, bạn có thể đặt hàng trước từ 1-7 ngày. Chúng tôi sẽ chuẩn bị và giao đúng thời gian bạn yêu cầu.'
          }, {
            q: 'Phương thức thanh toán nào được chấp nhận?',
            a: 'Chúng tôi nhận thanh toán COD (tiền mặt khi nhận hàng) và chuyển khoản ngân hàng.'
          }].map((faq, index) => <Card key={index} className="p-6">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </Card>)}
          </div>
        </div>
      </div>
    </div>;
};
export default Contact;