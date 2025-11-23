import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
      <Card className="w-full max-w-2xl p-8 md:p-12 text-center shadow-[var(--shadow-medium)]">
        <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
          <Search className="h-10 w-10 text-primary" />
        </div>
        
        <h1 className="mb-4 text-6xl md:text-8xl font-bold text-gradient">404</h1>
        
        <h2 className="mb-3 text-2xl md:text-3xl font-bold text-foreground">
          Không Tìm Thấy Trang
        </h2>
        
        <p className="mb-8 text-muted-foreground max-w-md mx-auto">
          Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển. 
          Vui lòng kiểm tra lại đường dẫn hoặc quay về trang chủ.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg" 
            className="btn-primary"
          >
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Về Trang Chủ
            </Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            onClick={() => window.history.back()}
          >
            <button>
              <ArrowLeft className="mr-2 h-5 w-5" />
              Quay Lại
            </button>
          </Button>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">
            Hoặc khám phá các trang sau:
          </p>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            <Link to="/products" className="text-primary hover:underline">
              Sản Phẩm
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/about" className="text-primary hover:underline">
              Giới Thiệu
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/quality" className="text-primary hover:underline">
              Quy Trình
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/contact" className="text-primary hover:underline">
              Liên Hệ
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;
