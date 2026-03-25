import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone } from 'lucide-react';

const menuData = [
  {
    category: "Appetizers",
    items: [
      { name: "Tequeños Guayaba y Queso", desc: "Sweet guava and cheese wrapped in crispy dough" },
      { name: "Mini Empanadas", desc: "Colombian & Venezuelan style" },
      { name: "Chicharron Con Tostones", desc: "Crispy pork belly with fresh cilantro sauce" },
      { name: "Tostones Con Hogao", desc: "Fried green plantains with traditional tomato-onion sauce" },
      { name: "Coctel De Camarones", desc: "Fresh shrimp cocktail" },
      { name: "Guacamole", desc: "Served with crispy chicharron chips" },
    ]
  },
  {
    category: "Arepas",
    items: [
      { name: "Reina Pepiada", desc: "Chicken and avocado salad, creamy and rich" },
      { name: "Pelua", desc: "Shredded beef and yellow cheese" },
      { name: "Pabellon", desc: "Shredded beef, black beans, plantains, and cheese" },
      { name: "Carne Mechada", desc: "Traditional shredded beef" },
      { name: "Pollo", desc: "Shredded chicken" },
      { name: "Queso", desc: "Various cheese options available" },
    ]
  },
  {
    category: "Cachapas",
    items: [
      { name: "Queso de Mano", desc: "Traditional handmade soft cheese" },
      { name: "Carne Mechada", desc: "Shredded beef and cheese" },
      { name: "Santa Barbara", desc: "Grilled steak and cheese" },
      { name: "El Junquito", desc: "Pork and cheese" },
    ]
  },
  {
    category: "Main Dishes",
    items: [
      { name: "Bandeja Paisa El Sitio", desc: "Traditional Colombian platter with beans, rice, chicharron, egg, and more" },
      { name: "Pabellon Criollo", desc: "Venezuelan national dish with shredded beef, rice, beans, and plantains" },
      { name: "Parrilla Mar y Tierra", desc: "Surf and turf grill" },
      { name: "Salmon", desc: "Prepared in multiple styles" },
      { name: "Corvina", desc: "Fresh fish dishes" },
      { name: "Bistec", desc: "Various steak options" },
    ]
  },
  {
    category: "Pepitos",
    items: [
      { name: "Mixto", desc: "Mixed meats sandwich" },
      { name: "Pollo", desc: "Chicken sandwich" },
      { name: "Carne", desc: "Beef sandwich" },
      { name: "El Sitio", desc: "Our house special sandwich" },
    ]
  },
  {
    category: "Breakfast",
    items: [
      { name: "Desayuno El Sitio", desc: "House special breakfast" },
      { name: "Venezuelan Dream Breakfast", desc: "Traditional morning spread" },
      { name: "Huevos Rancheros", desc: "Eggs ranchero style" },
      { name: "Omelettes", desc: "Custom made to order" },
    ]
  },
  {
    category: "Salads",
    items: [
      { name: "Salmon Salad", desc: "Fresh greens with grilled salmon" },
      { name: "Chicken Salad", desc: "Grilled chicken over mixed greens" },
      { name: "Cesar Salad", desc: "Classic Caesar" },
      { name: "Picanha Salad", desc: "Premium grilled steak over fresh salad" },
    ]
  },
  {
    category: "Drinks",
    items: [
      { name: "Sodas", desc: "Coca Cola, Sprite, Fanta" },
      { name: "Latin Favorites", desc: "Inca Kola, Jupiña, Freskolita, Malta" },
      { name: "Water", desc: "Perrier, Agua, Agua con gas" },
    ]
  },
  {
    category: "Alcohol",
    items: [
      { name: "Beer", desc: "Corona, Heineken, Stella, Polar" },
      { name: "Whisky", desc: "Buchanan's, Old Parr" },
      { name: "Vodka", desc: "Tito's, Grey Goose" },
      { name: "Tequila", desc: "Don Julio, Patron" },
      { name: "Cocktails", desc: "Tequila Sunrise and more" },
    ]
  }
];

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
                      </div>
                      <p className="text-sm text-wood-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-16 text-center bg-cream p-8 rounded-2xl border border-wood/5">
                  <p className="text-lg font-medium text-wood mb-4">Ready to taste the magic?</p>
                  <a
                    href="tel:+17867823901"
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Call to Order
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
