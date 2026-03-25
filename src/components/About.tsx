import { motion } from 'motion/react';
import { Heart, Users, Coffee, Utensils } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/el-sitio-interior.jpg"
                alt="El Sitio Bar & Grill Interior"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to placeholder if the user hasn't uploaded the image yet
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
                }}
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-secondary text-wood p-8 rounded-full shadow-xl w-48 h-48 flex flex-col items-center justify-center text-center transform rotate-12 border-4 border-white">
              <Heart className="w-10 h-10 mb-2" />
              <span className="font-serif font-bold text-xl leading-tight">Made with<br/>Amor</span>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-8"
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-wood mb-6 leading-tight">
              A Taste of Home in Miami
            </h3>
            <div className="w-20 h-1 bg-secondary rounded-full mb-8"></div>
            
            <p className="text-lg text-wood-light mb-6 leading-relaxed">
              At El Sitio Bar & Grill, we believe that the best memories are made around the table. We bring you authentic Latin comfort food, deeply rooted in Colombian and Venezuelan traditions.
            </p>
            <p className="text-lg text-wood-light mb-10 leading-relaxed">
              Every dish is prepared with a homemade feel, using fresh ingredients and recipes passed down through generations. Our friendly staff treats you like family, ensuring your experience is as warm and lively as the cultures we celebrate.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-cream p-3 rounded-2xl text-primary mr-4">
                  <Utensils className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-wood mb-1">Latin Comfort</h4>
                  <p className="text-sm text-wood-light">Colombian & Venezuelan roots</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-cream p-3 rounded-2xl text-primary mr-4">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-wood mb-1">Family First</h4>
                  <p className="text-sm text-wood-light">A welcoming space for all</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-cream p-3 rounded-2xl text-primary mr-4">
                  <Coffee className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-wood mb-1">Homemade Feel</h4>
                  <p className="text-sm text-wood-light">Authentic, real food</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-cream p-3 rounded-2xl text-primary mr-4">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-wood mb-1">Warm Service</h4>
                  <p className="text-sm text-wood-light">Smiles guaranteed</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
