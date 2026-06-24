import { ArrowUp, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#050507] border-t border-[#101015] py-12 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Column */}
        <div className="flex items-center space-x-2.5" id="footer-logo">
          <img
            src="https://res.cloudinary.com/dr5obadvt/image/upload/v1782316044/Horizon_qofdao.png"
            alt="Horizon Growth Studio Logo"
            referrerPolicy="no-referrer"
            className="w-5 h-5 rounded-full object-cover border border-[#1a1a24] opacity-80"
          />
          <span className="font-sans font-medium text-xs tracking-wider uppercase text-[#8E8E9F]">
            Horizon Growth Studio
          </span>
        </div>

        {/* Middle Column: Links & Copyright */}
        <div className="flex flex-col items-center gap-2 text-center" id="footer-center">
          <a
            href="https://www.instagram.com/horizongrowthstudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-[#8E8E9F] hover:text-white transition-colors duration-300 border border-white/[0.04] px-4 py-1.5 hover:border-white/40 bg-[#0d0d12]/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-sm"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>@horizongrowthstudio</span>
          </a>
          <p className="text-[9px] font-mono uppercase tracking-widest text-[#8E8E9F]/40 mt-1">
            &copy; {currentYear} Horizon Growth Studio. All rights reserved.
          </p>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-[#8E8E9F] hover:text-white transition-colors duration-300 cursor-pointer"
          id="back-to-top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
