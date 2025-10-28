import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://zalo.me/0899099940"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size="lg"
          className="h-14 w-14 rounded-full shadow-lg bg-[#0068FF] hover:bg-[#0052CC] text-white floating-pulse"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </a>
      
      <a href="tel:0899099940">
        <Button
          size="lg"
          className="h-14 w-14 rounded-full shadow-lg bg-accent hover:opacity-90 floating-pulse"
        >
          <Phone className="h-6 w-6" />
        </Button>
      </a>
    </div>
  );
};

export default FloatingContact;
