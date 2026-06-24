import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col justify-center items-center px-6 md:px-12 pt-28 pb-16 bg-[#050507] overflow-hidden"
    >
      {/* Subtle Premium Background Glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none opacity-15 filter blur-[120px]"
        style={{ background: 'radial-gradient(circle, #3A3A4A 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl w-full text-center z-10 flex flex-col items-center">
        {/* Elite agency label */}
       
        {/* Strong H1 Statement with extreme typography precision */}
        <h1 
          className="text-4xl sm:text-5xl md:text-7xl font-sans font-bold tracking-tight text-white leading-[1.1] max-w-3xl"
          id="hero-title"
        >
          We build websites & content that turn{' '}
          <span className="text-[#8E8E9F] font-light italic">attention</span> into customers.
        </h1>

        {/* Elegant short description */}
        <p 
          className="text-sm md:text-base text-[#8E8E9F] mt-6 md:mt-8 max-w-xl font-light leading-relaxed font-sans"
          id="hero-subtitle"
        >
          A highly-focused digital partner for clinics, salons, coaches, and creators. 
          No fluff. No overheads. Just performance-driven designs and high-retention short-form assets.
        </p>

        {/* CTA Button and secondary action */}
        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 text-xs font-semibold tracking-wider uppercase bg-white text-black border border-white hover:bg-transparent hover:text-white px-8 py-4 transition-all duration-300 cursor-pointer"
            id="hero-cta-btn"
          >
            <span>Let's Work</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={scrollToAbout}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs font-semibold tracking-wider uppercase bg-transparent text-[#8E8E9F] hover:text-white border border-[#1a1a24] hover:border-[#3A3A4A] px-8 py-4 transition-all duration-300 cursor-pointer"
            id="hero-secondary-btn"
          >
            <span>Discover More</span>
          </button>
        </div>
      </div>

      {/* Subtle indicator to scroll down */}
      <div 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 cursor-pointer text-[#8E8E9F] hover:text-white transition-colors duration-300"
        id="scroll-indicator"
      >
        <span className="text-[10px] uppercase tracking-widest font-mono">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
