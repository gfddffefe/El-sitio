import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const dishes = [
  {
    name: "Chicharron Con Tostones",
    desc: "Crispy pork belly, fresh cilantro sauce, crunchy tostones.",
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Picanha",
    desc: "Perfectly grilled, juicy, cooked the right way.",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cachapa Con Carne Mechada",
    desc: "Sweet corn, shredded beef, melted cheese, nata.",
    img: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Arepa Reina Pepiada",
    desc: "Chicken + avocado, creamy and rich.",
    img: "https://images.unsplash.com/photo-1627308595229-7830f5c9c66e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Colombian Bowl",
    desc: "Hearty, colorful, full plate experience.",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function SignatureDishes() {
  return (
    <section className="py-24 bg-wood text-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Our Favorites</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Signature Dishes</h3>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">
            Experience the true flavor of Latin America with our most loved dishes, prepared fresh every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {dishes.map((dish, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-wood-light/30 border border-white/5 hover:border-secondary/50 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wood via-wood/20 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="text-2xl font-serif font-bold text-white mb-2">{dish.name}</h4>
                  <p className="text-cream/80 text-sm leading-relaxed">{dish.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#menu"
            className="inline-flex items-center justify-center px-8 py-4 bg-secondary hover:bg-secondary-hover text-wood rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
          >
            View Full Menu
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
