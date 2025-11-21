import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { ArrowLeft, Save, Webhook } from 'lucide-react';

const AdminSettings = () => {
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const [webhookUrl, setWebhookUrl] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate('/admin/login');
    }
  }, [user, isAdmin, loading, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      loadSettings();
    }
  }, [user, isAdmin]);

  const loadSettings = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('admin_settings')
        .select('value')
        .eq('key', 'zapier_webhook_url')
        .maybeSingle();

      if (error && error.code !== 'PGRST116') throw error;
      
      if (data) {
        setWebhookUrl(data.value);
      }
    } catch (error) {
      console.error('Error loading settings:', error);
      toast.error('Không thể tải cài đặt');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);

      const { error } = await supabase
        .from('admin_settings')
        .upsert({
          key: 'zapier_webhook_url',
          value: webhookUrl,
        }, {
          onConflict: 'key'
        });

      if (error) throw error;

      toast.success('Đã lưu cài đặt thành công!');
    } catch (error) {
      console.error('Error saving settings:', error);
      toast.error('Không thể lưu cài đặt');
    } finally {
      setIsSaving(false);
    }
  };

  if (loading || isLoading || !user || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/20">
      <header className="bg-background border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" onClick={() => navigate('/admin/dashboard')}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-2xl font-bold">Cài Đặt Admin</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <Webhook className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-bold">Tích Hợp Google Sheets (Zapier)</h2>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="webhookUrl">Zapier Webhook URL</Label>
              <Input
                id="webhookUrl"
                type="url"
                placeholder="https://hooks.zapier.com/hooks/catch/..."
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                className="mt-2"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Nhập URL webhook từ Zapier để tự động gửi đơn hàng mới vào Google Sheets
              </p>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Hướng dẫn cài đặt:</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>Đăng nhập vào Zapier tại <a href="https://zapier.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">zapier.com</a></li>
                <li>Tạo Zap mới với trigger "Webhooks by Zapier"</li>
                <li>Chọn "Catch Hook" và copy Webhook URL</li>
                <li>Dán URL vào ô trên và lưu lại</li>
                <li>Trong Zapier, thêm action "Google Sheets" để ghi dữ liệu</li>
                <li>Khi có đơn hàng mới, dữ liệu sẽ tự động gửi đến Google Sheets</li>
              </ol>
            </div>

            <Button 
              onClick={handleSave} 
              disabled={isSaving || !webhookUrl.trim()}
              className="w-full"
            >
              <Save className="h-4 w-4 mr-2" />
              {isSaving ? 'Đang lưu...' : 'Lưu Cài Đặt'}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminSettings;
