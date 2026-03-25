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
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-wood/5 relative flex flex-col items-center justify-center text-center"
          >
            <div className="bg-[#25D366]/10 p-6 rounded-full mb-6">
              <svg className="w-16 h-16 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-wood mb-4">Book via WhatsApp</h4>
            <p className="text-wood-light mb-8">
              Click the button below to message us directly on WhatsApp. We'll confirm your reservation right away!
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=17867823901&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-bold text-lg transition-all transform hover:scale-[1.02] shadow-xl flex items-center justify-center"
            >
              Message Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
