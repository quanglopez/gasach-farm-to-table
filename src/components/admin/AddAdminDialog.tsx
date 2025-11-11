import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserPlus } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { z } from 'zod';

const emailSchema = z.string().trim().email({ message: 'Email không hợp lệ' });

interface AddAdminDialogProps {
  onAdminAdded: () => void;
}

export const AddAdminDialog = ({ onAdminAdded }: AddAdminDialogProps) => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAddAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      emailSchema.parse(email);
      setIsLoading(true);

      // First, search for the user by email using auth.users
      const { data: userData, error: userError } = await supabase
        .rpc('get_user_id_by_email', { user_email: email });

      if (userError) {
        toast.error('Không tìm thấy người dùng với email này');
        return;
      }

      if (!userData) {
        toast.error('Người dùng chưa đăng ký tài khoản');
        return;
      }

      // Add admin role
      const { error: roleError } = await supabase
        .rpc('add_admin_role', { target_user_id: userData });

      if (roleError) throw roleError;

      toast.success('Đã thêm admin thành công');
      setEmail('');
      setOpen(false);
      onAdminAdded();
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        console.error('Error adding admin:', error);
        toast.error('Không thể thêm admin. Vui lòng thử lại.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <UserPlus className="h-4 w-4 mr-2" />
          Thêm Admin
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Thêm Quản Trị Viên Mới</DialogTitle>
          <DialogDescription>
            Nhập email của người dùng đã đăng ký để cấp quyền admin
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleAddAdmin} className="space-y-4">
          <div>
            <Label htmlFor="admin-email">Email</Label>
            <Input
              id="admin-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@example.com"
              required
              disabled={isLoading}
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={isLoading}
            >
              Hủy
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Đang thêm...' : 'Thêm Admin'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
