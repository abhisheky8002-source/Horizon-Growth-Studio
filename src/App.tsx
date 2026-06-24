import SEOHead from './components/SEOHead';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050507] text-white selection:bg-white selection:text-black">
      {/* Custom, premium hardware-accelerated cursor follower */}
      <CustomCursor />

      {/* Dynamic SEO Injector (Injects optimized tags, keywords and structured JSON-LD Schema markup) */}
      <SEOHead />

      {/* Floating Premium Top Navigation */}
      <Header />

      {/* Main Structural Layout */}
      <main className="relative flex flex-col w-full" id="main-content">
        {/* Hero Segment */}
        <Hero />

        {/* Section 1: Philosophy & Identity */}
        <About />

        {/* Section 2: Core Offerings */}
        <Services />

        {/* Section 3: Live Production Portfolio */}
        <Portfolio />

        {/* Section 4: Flat Rate Investment Structure */}
        <Pricing />

        {/* Section 5: Minimum Contact Channel */}
        <Contact />
      </main>

      {/* Elegant Standard Agency Footer */}
      <Footer />
    </div>
  );
}
