import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ZaloIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.5 14.5L14 12L16.5 9.5L15.09 8.09L12 11.18L8.91 8.09L7.5 9.5L10 12L7.5 14.5L8.91 15.91L12 12.82L15.09 15.91L16.5 14.5Z" />
    <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">Z</text>
  </svg>
);

const FloatingContact = () => {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-3">
      <a
        href="http://zalo.me/0899099940"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size="lg"
          className="h-12 w-12 md:h-14 md:w-14 rounded-full shadow-xl hover:shadow-2xl bg-[#0068FF] hover:bg-[#0052CC] text-white floating-pulse border-2 border-white/20"
        >
          <ZaloIcon className="h-5 w-5 md:h-6 md:w-6" />
        </Button>
      </a>
      
      <a href="tel:0899099940">
        <Button
          size="lg"
          className="h-12 w-12 md:h-14 md:w-14 rounded-full shadow-xl hover:shadow-2xl gradient-accent text-white floating-pulse border-2 border-white/20"
        >
          <Phone className="h-5 w-5 md:h-6 md:w-6" />
        </Button>
      </a>
    </div>
  );
};

export default FloatingContact;
