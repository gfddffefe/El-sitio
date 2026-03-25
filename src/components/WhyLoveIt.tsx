import { motion } from 'motion/react';
import { UtensilsCrossed, Smile, DollarSign, Users } from 'lucide-react';

const reasons = [
  {
    icon: <UtensilsCrossed className="w-8 h-8" />,
    title: "Authentic Homemade Flavor",
    desc: "Real recipes, real ingredients. Every bite tastes like it was made in a Latin grandmother's kitchen."
  },
  {
    icon: <Smile className="w-8 h-8" />,
    title: "Friendly, Memorable Service",
    desc: "We don't just serve food; we serve smiles. Our staff treats every guest like family."
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Affordable Lunch Pricing",
    desc: "Incredible taste shouldn't break the bank. Enjoy generous portions at prices that make sense."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Perfect for Family & Groups",
    desc: "Spacious seating, a lively atmosphere, and a menu that has something for everyone."
  }
];

export default function WhyLoveIt() {
  return (
    <section className="py-24 bg-white text-wood relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">The Experience</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Why People Love It</h3>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-cream p-8 rounded-3xl text-center border border-wood/5 hover:shadow-lg transition-all group"
            >
              <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center text-secondary mb-6 shadow-sm group-hover:scale-110 transition-transform group-hover:bg-secondary group-hover:text-white">
                {reason.icon}
              </div>
              <h4 className="text-xl font-bold text-wood mb-4">{reason.title}</h4>
              <p className="text-wood-light leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
