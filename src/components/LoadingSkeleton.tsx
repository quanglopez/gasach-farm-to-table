import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const ProductCardSkeleton = () => {
  return (
    <Card className="overflow-hidden border-2">
      <Skeleton className="aspect-square w-full" />
      <div className="p-4 md:p-5 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <div className="flex items-center justify-between gap-2 pt-1">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-9 w-20" />
        </div>
      </div>
    </Card>
  );
};

export const ImageSkeleton = ({ className }: { className?: string }) => {
  return <Skeleton className={className} />;
};

export const ProductGridSkeleton = ({ count = 6 }: { count?: number }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
};
