import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#050507]/60 backdrop-blur-xl border-white/[0.04] py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo / Title */}
        <div 
          onClick={() => scrollToSection('hero')} 
          className="flex items-center space-x-3 cursor-pointer group"
          id="logo-container"
        >
          <img
            src="https://res.cloudinary.com/dr5obadvt/image/upload/v1782313086/Horizon_s06es8.png"
            alt="Horizon Growth Studio Logo"
            referrerPolicy="no-referrer"
            className="w-7 h-7 rounded-full object-cover border border-[#1a1a24] group-hover:border-white/50 transition-all duration-300"
          />
          <span className="font-sans font-semibold tracking-tight text-lg text-white">
            Horizon<span className="text-[#8E8E9F] font-light"> Growth</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
          <button
            onClick={() => scrollToSection('about')}
            className="text-xs text-[#8E8E9F] hover:text-white transition-colors duration-200 tracking-wider uppercase font-medium cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-xs text-[#8E8E9F] hover:text-white transition-colors duration-200 tracking-wider uppercase font-medium cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="text-xs text-[#8E8E9F] hover:text-white transition-colors duration-200 tracking-wider uppercase font-medium cursor-pointer"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="text-xs text-[#8E8E9F] hover:text-white transition-colors duration-200 tracking-wider uppercase font-medium cursor-pointer"
          >
            Pricing
          </button>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center space-x-2 text-xs font-medium tracking-wider uppercase bg-white text-black border border-white hover:bg-transparent hover:text-white px-5 py-2.5 transition-all duration-300 cursor-pointer"
            id="header-cta"
          >
            <span>Let's Work</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white hover:text-[#8E8E9F] transition-colors p-1"
          id="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 top-[65px] z-40 bg-[#050507] border-t border-[#1a1a24] transition-all duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col space-y-6 p-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-left text-sm text-[#8E8E9F] hover:text-white transition-colors tracking-wider uppercase font-medium border-b border-[#15151c]/50 pb-3"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-left text-sm text-[#8E8E9F] hover:text-white transition-colors tracking-wider uppercase font-medium border-b border-[#15151c]/50 pb-3"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="text-left text-sm text-[#8E8E9F] hover:text-white transition-colors tracking-wider uppercase font-medium border-b border-[#15151c]/50 pb-3"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="text-left text-sm text-[#8E8E9F] hover:text-white transition-colors tracking-wider uppercase font-medium border-b border-[#15151c]/50 pb-3"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full inline-flex items-center justify-between bg-white text-black hover:bg-transparent hover:text-white border border-white px-5 py-3 transition-all duration-300 font-medium tracking-wider uppercase text-xs"
          >
            <span>Let's Work</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </nav>
      </div>
    </header>
  );
}
