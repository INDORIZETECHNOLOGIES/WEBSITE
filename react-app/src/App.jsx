import { useEffect } from 'react';

import Preloader from './components/Preloader.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import About from './components/About.jsx';
import Solutions from './components/Solutions.jsx';
import Products from './components/Products.jsx';
import Stats from './components/Stats.jsx';
import WhyUs from './components/WhyUs.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ChatWidget from './components/ChatWidget.jsx';

import initSite from './siteScript.js';

export default function App() {
  // Run the original script.js logic once, after the markup has mounted.
  useEffect(() => {
    initSite();
  }, []);

  return (
    <>
      <Preloader />

      {/* ===== SCROLL PROGRESS ===== */}
      <div className="scroll-progress" aria-hidden="true"></div>

      {/* ===== MOUSE GLOW ===== */}
      <div className="mouse-glow" aria-hidden="true"></div>

      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Solutions />
      <Products />
      <Stats />
      <WhyUs />
      <Contact />
      <Footer />
      <ChatWidget />
    </>
  );
}
