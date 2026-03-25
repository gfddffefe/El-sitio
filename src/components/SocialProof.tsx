import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    text: "Food and atmosphere was wonderful… pricing for lunch was great.",
    author: "Maria S.",
    rating: 5,
  },
  {
    text: "Everything tasted amazing and the service was spectacular.",
    author: "Carlos D.",
    rating: 5,
  },
  {
    text: "Chicharrones with cilantro sauce… the way to my soul.",
    author: "Jessica R.",
    rating: 5,
  },
  {
    text: "A good place to spend time with family.",
    author: "Alejandro M.",
    rating: 5,
  },
];

export default function SocialProof() {
  return (
    <section className="py-20 bg-cream text-wood relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-wood mb-4">
            Loved by Miami
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-wood/5 relative hover:shadow-md transition-shadow"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-secondary/20" />
              <div className="flex text-secondary mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-lg font-medium italic text-wood-light mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <p className="font-semibold text-wood uppercase tracking-wider text-sm">
                — {review.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
