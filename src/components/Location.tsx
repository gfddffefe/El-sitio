import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-white text-wood relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Visit Us</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Find El Sitio</h3>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-cream p-8 rounded-3xl border border-wood/5 shadow-sm">
              <div className="flex items-start mb-6">
                <div className="bg-white p-3 rounded-2xl text-primary mr-4 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-wood text-xl mb-2">Address</h4>
                  <p className="text-wood-light leading-relaxed">
                    10648 Fontainebleau Blvd<br />
                    <span className="font-semibold text-primary">Second Floor</span><br />
                    Miami, FL 33172
                  </p>
                  <a
                    href="https://maps.google.com/?q=10648+Fontainebleau+Blvd,+Miami,+FL+33172"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-sm font-bold text-secondary hover:text-secondary-hover transition-colors uppercase tracking-wider"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="w-full h-px bg-wood/10 my-6"></div>

              <div className="flex items-start mb-6">
                <div className="bg-white p-3 rounded-2xl text-primary mr-4 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-wood text-xl mb-2">Contact</h4>
                  <a href="tel:+17867823901" className="text-wood-light hover:text-secondary transition-colors text-lg">
                    +1 (786) 782-3901
                  </a>
                </div>
              </div>

              <div className="w-full h-px bg-wood/10 my-6"></div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-2xl text-primary mr-4 shadow-sm">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-wood text-xl mb-2">Hours</h4>
                  <ul className="text-wood-light space-y-2">
                    <li className="flex justify-between">
                      <span>Mon - Thu</span>
                      <span className="font-medium">11:00 AM - 10:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Fri - Sat</span>
                      <span className="font-medium">11:00 AM - 11:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">11:00 AM - 9:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 rounded-3xl overflow-hidden shadow-xl border border-wood/5 h-[300px] md:h-[400px] lg:h-[500px] relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.656543148118!2d-80.3698416849806!3d25.78201798362688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b9b4b4b4b4b4%3A0x4b4b4b4b4b4b4b4b!2s10648%20Fontainebleau%20Blvd%2C%20Miami%2C%20FL%2033172!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="El Sitio Bar & Grill Location"
              className="absolute inset-0 grayscale-[20%] contrast-[1.1]"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
