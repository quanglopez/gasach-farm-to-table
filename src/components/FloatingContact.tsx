import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import zaloIcon from '@/assets/zalo-icon.png';

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
          className="h-12 w-12 md:h-14 md:w-14 rounded-full shadow-xl hover:shadow-2xl bg-[#0068FF] hover:bg-[#0052CC] floating-pulse border-2 border-white/20 p-0 overflow-hidden"
        >
          <img src={zaloIcon} alt="Zalo" className="h-full w-full object-cover" />
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
