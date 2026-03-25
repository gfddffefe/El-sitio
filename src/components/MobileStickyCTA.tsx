import { Phone, Calendar } from 'lucide-react';

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-wood border-t border-white/10 p-3 flex sm:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
      <div className="flex w-full gap-3">
        <a
          href="tel:+17867823901"
          className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-bold flex items-center justify-center transition-colors border border-white/10"
        >
          <Phone className="w-5 h-5 mr-2" />
          Call
        </a>
        <a
          href="#reservation"
          className="flex-1 bg-primary hover:bg-primary-hover text-white py-3 rounded-xl font-bold flex items-center justify-center transition-colors shadow-lg"
        >
          <Calendar className="w-5 h-5 mr-2" />
          Reserve
        </a>
      </div>
    </div>
  );
}
