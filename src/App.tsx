/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import About from './components/About';
import SignatureDishes from './components/SignatureDishes';
import Menu from './components/Menu';
import WhyLoveIt from './components/WhyLoveIt';
import Gallery from './components/Gallery';
import Reservation from './components/Reservation';
import Location from './components/Location';
import Footer from './components/Footer';
import MobileStickyCTA from './components/MobileStickyCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-sans text-wood selection:bg-secondary/30 selection:text-wood">
      <Navbar />
      <Hero />
      <SocialProof />
      <About />
      <SignatureDishes />
      <Menu />
      <WhyLoveIt />
      <Gallery />
      <Reservation />
      <Location />
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
