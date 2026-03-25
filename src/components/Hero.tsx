import { motion } from 'motion/react';
import { Star, Calendar, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Lively Latin restaurant atmosphere with grilled meat"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-wood/80 via-wood/60 to-wood/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-cream">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-sm font-semibold tracking-wider uppercase mb-6">
            Miami, Florida
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Taste the Heart of <br className="hidden md:block" />
            <span className="text-secondary">Latin America</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 text-cream/90 font-light max-w-2xl mx-auto">
            Authentic flavors, warm family atmosphere, and unforgettable moments. Experience real comfort food that feels like home.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://api.whatsapp.com/send/?phone=17867823901&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Reserve a Table
            </a>
            <a
              href="tel:+17867823901"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full font-semibold text-lg transition-all flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>

          {/* Quick Trust */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm md:text-base text-cream/80">
            <div className="flex items-center bg-wood/40 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10">
              <div className="flex text-secondary mr-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="italic">"Everything tasted amazing..."</p>
            </div>
            <div className="flex items-center bg-wood/40 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10">
              <div className="flex text-secondary mr-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="italic">"Felt like home... perfect for family"</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
