import { motion } from 'motion/react';
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';

export default function Reservation() {
  return (
    <section id="reservation" className="py-24 bg-cream text-wood relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:pr-8"
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Join Us</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-wood mb-6 leading-tight">
              Reserve Your Table
            </h3>
            <div className="w-20 h-1 bg-secondary rounded-full mb-8"></div>
            
            <p className="text-lg text-wood-light mb-6 leading-relaxed">
              Whether it's a family dinner, a casual lunch, or a special celebration, we're ready to welcome you with open arms and incredible food.
            </p>
            
            <div className="bg-wood/5 p-6 rounded-2xl border border-wood/10 mb-8 flex items-start">
              <div className="text-primary mr-4 mt-1">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-wood mb-1">Tables fill up fast during peak hours</h4>
                <p className="text-sm text-wood-light">We recommend booking in advance to secure your spot.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-wood/5 relative"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-wood mb-2">Date</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-wood-light">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <input
                      type="date"
                      className="w-full pl-12 pr-4 py-4 bg-cream border border-wood/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-wood mb-2">Time</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-wood-light">
                      <Clock className="w-5 h-5" />
                    </div>
                    <select
                      className="w-full pl-12 pr-4 py-4 bg-cream border border-wood/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all appearance-none"
                      required
                    >
                      <option value="">Select Time</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-wood mb-2">Guests</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-wood-light">
                    <Users className="w-5 h-5" />
                  </div>
                  <select
                    className="w-full pl-12 pr-4 py-4 bg-cream border border-wood/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all appearance-none"
                    required
                  >
                    <option value="">Number of Guests</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6+ People</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-wood mb-2">Contact Info</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-4 bg-cream border border-wood/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all mb-4"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-4 bg-cream border border-wood/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-bold text-lg transition-all transform hover:scale-[1.02] shadow-xl flex items-center justify-center"
              >
                Book Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
