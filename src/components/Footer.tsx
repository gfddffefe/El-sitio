import { motion } from 'motion/react';
import { Calendar, Phone, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-wood text-cream relative overflow-hidden pt-24 pb-28 sm:pb-12">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-white">
              Come experience <br className="hidden md:block" />
              <span className="text-secondary italic">El Sitio</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
              <a
                href="#reservation"
                className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Reserve a Table
              </a>
              <a
                href="tel:+17867823901"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full font-bold text-lg transition-all flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>

        <div className="w-full h-px bg-white/10 mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div>
            <span className="font-serif text-3xl font-bold text-secondary">El Sitio</span>
            <p className="text-cream/60 mt-2 text-sm">Bar & Grill</p>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-cream/80 hover:text-secondary transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-cream/80 hover:text-secondary transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
          
          <div className="text-cream/60 text-sm md:text-right">
            <p>&copy; {new Date().getFullYear()} El Sitio Bar & Grill.</p>
            <p className="mt-1">All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
