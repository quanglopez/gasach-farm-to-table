import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { UserPlus, AlertCircle } from 'lucide-react';
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
      const userEmail = email;
      setEmail('');
      setOpen(false);
      
      toast.success(
        `Hướng dẫn: Yêu cầu người dùng với email ${userEmail} đăng ký tài khoản tại /admin/signup. ` +
        `Sau đó, vào Database → user_roles table để thêm role 'admin' cho user đó.`,
        { duration: 10000 }
      );
      
      onAdminAdded();
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      }
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
            Hướng dẫn thêm admin mới vào hệ thống
          </DialogDescription>
        </DialogHeader>
        
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="text-sm">
            <strong>Cách thêm admin:</strong>
            <ol className="list-decimal ml-4 mt-2 space-y-1">
              <li>Yêu cầu người dùng đăng ký tại <code className="bg-muted px-1 rounded">/admin/signup</code></li>
              <li>Vào Cloud → Database → user_roles table</li>
              <li>Thêm row mới: user_id của họ và role = admin</li>
            </ol>
          </AlertDescription>
        </Alert>

        <form onSubmit={handleAddAdmin} className="space-y-4">
          <div>
            <Label htmlFor="admin-email">Email (để ghi nhớ)</Label>
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
              Đóng
            </Button>
            <Button type="submit" disabled={isLoading}>
              Xem Hướng Dẫn
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
