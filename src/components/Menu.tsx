import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, ShoppingBag } from 'lucide-react';
import { menuData } from '../data/menuData';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);

  return (
    <section id="menu" className="py-24 bg-cream text-wood relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Discover</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Menu</h3>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Category Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 bg-white rounded-3xl p-4 shadow-sm border border-wood/5 overflow-x-auto lg:overflow-visible flex lg:flex-col gap-2 no-scrollbar">
              {menuData.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(cat.category)}
                  className={`text-left px-6 py-4 rounded-2xl font-medium transition-all whitespace-nowrap lg:whitespace-normal ${
                    activeCategory === cat.category
                      ? 'bg-primary text-white shadow-md'
                      : 'text-wood-light hover:bg-cream hover:text-wood'
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <div className="lg:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-wood/5"
              >
                <h4 className="text-3xl font-serif font-bold text-wood mb-8 pb-4 border-b border-wood/10">
                  {activeCategory}
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {menuData.find(c => c.category === activeCategory)?.items.map((item, idx) => (
                    <div key={idx} className="group">
                      <div className="flex justify-between items-baseline mb-2">
                        <h5 className="text-lg font-bold text-wood group-hover:text-primary transition-colors">
                          {item.name}
                        </h5>
                        <div className="flex-grow border-b border-dotted border-wood/20 mx-4"></div>
                        <span className="font-bold text-secondary">{item.price}</span>
                      </div>
                      {item.desc && (
                        <p className="text-sm text-wood-light leading-relaxed">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-16 text-center bg-cream p-8 rounded-2xl border border-wood/5">
                  <p className="text-lg font-medium text-wood mb-6">Ready to taste the magic?</p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href="https://www.google.com/viewer/chooseprovider?mid=/g/11v3gjzgh3&g2lbs=AIBNGdVlB0ZwaF8zeENFOTgkmhykgUcOA6ZFY5EnXBa2fbc2XitTfcVlQtswA1kdRSGEHkIj9l59o5DZY2HmXv9oylU9x0XWyQ%3D%3D&hl=en-US&gl=us&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&utm_source=tactile&gei=cVDDaYnrDIqrptQPlsHa-Qg&ei=cVDDaYnrDIqrptQPlsHa-Qg&fo_s=OA&opi=79508299&ebb=1&cs=0&foub=mcpp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-secondary hover:bg-secondary/90 text-wood rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                    >
                      <ShoppingBag className="mr-2 w-5 h-5" />
                      Order Delivery
                    </a>
                    <a
                      href="tel:+17867823901"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                    >
                      <Phone className="mr-2 w-5 h-5" />
                      Call to Order
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
