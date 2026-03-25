import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Calendar, Menu as MenuIcon, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-wood text-cream shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-serif text-2xl font-bold text-secondary">
              El Sitio
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#menu" className="text-cream hover:text-secondary transition-colors font-medium">Menu</a>
            <a href="#about" className="text-cream hover:text-secondary transition-colors font-medium">About</a>
            <a href="#location" className="text-cream hover:text-secondary transition-colors font-medium">Location</a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+17867823901" 
              className="flex items-center text-cream hover:text-secondary transition-colors font-medium"
            >
              <Phone className="w-4 h-4 mr-2" />
              (786) 782-3901
            </a>
            <a 
              href="https://api.whatsapp.com/send/?phone=17867823901&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-full font-medium transition-colors flex items-center"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Reserve
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-cream hover:text-secondary focus:outline-none p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-wood border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
              <a 
                href="#menu" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-4 text-base font-medium text-cream hover:text-secondary hover:bg-white/5 rounded-md"
              >
                Menu
              </a>
              <a 
                href="#about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-4 text-base font-medium text-cream hover:text-secondary hover:bg-white/5 rounded-md"
              >
                About
              </a>
              <a 
                href="#location" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-4 text-base font-medium text-cream hover:text-secondary hover:bg-white/5 rounded-md"
              >
                Location
              </a>
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
                <a 
                  href="tel:+17867823901" 
                  className="flex items-center justify-center w-full px-4 py-3 border border-white/20 text-cream rounded-xl font-medium"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (786) 782-3901
                </a>
                <a 
                  href="https://api.whatsapp.com/send/?phone=17867823901&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full px-4 py-3 bg-primary text-white rounded-xl font-medium"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Reserve a Table
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
