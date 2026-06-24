import { useState } from 'react';
import { Mail, ArrowRight, Copy, Check, Instagram } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "teamhorizongrowth@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-36 px-6 md:px-12 bg-[#050507] border-t border-[#101015] relative overflow-hidden"
    >
      {/* Subtle bottom-right corner ambient glow */}
      <div 
        className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full pointer-events-none opacity-10 filter blur-[80px]"
        style={{ background: 'radial-gradient(circle, #3A3A4A 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Slogan */}
          <div className="lg:col-span-5" id="contact-heading">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8E8E9F]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8E8E9F]">
                05 // Initiate Contact
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white mt-4 tracking-tight leading-none">
              Let's build<br />
              something<br />
              <span className="text-[#8E8E9F] font-light italic">impactful</span>.
            </h2>
            
            <p className="text-xs md:text-sm text-[#8E8E9F] mt-6 max-w-sm font-sans font-light leading-relaxed">
              We look forward to partnering with visionary clinics, premium local brands, salons, and creators who understand the value of attention.
            </p>
          </div>

          {/* Right Column: High-End Email Box */}
          <div className="lg:col-span-7 flex flex-col justify-center h-full" id="contact-action">
            <div className="border border-white/[0.04] hover:border-white/[0.15] bg-white/[0.01] hover:bg-white/[0.02] backdrop-blur-md p-8 md:p-12 transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8E8E9F]">
                Official Channel
              </span>
              
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#8E8E9F]">
                    Email Address
                  </div>
                  
                  <a
                    href={`mailto:${email}`}
                    className="text-xl sm:text-2xl md:text-3xl font-sans font-bold text-white hover:text-[#8E8E9F] transition-colors duration-300 block mt-2 break-all"
                  >
                    {email}
                  </a>
                </div>

                <div className="flex items-center space-x-3 shrink-0">
                  {/* Copy Button */}
                  <button
                    onClick={handleCopy}
                    className="w-12 h-12 border border-[#1a1a24] hover:border-white flex items-center justify-center text-[#8E8E9F] hover:text-white transition-all duration-300 cursor-pointer bg-[#050507]"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>

                  {/* Mailto Direct Button */}
                  <a
                    href={`mailto:${email}`}
                    className="w-12 h-12 border border-[#1a1a24] hover:border-white flex items-center justify-center text-[#8E8E9F] hover:text-white transition-all duration-300 bg-[#050507]"
                    title="Send Email"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Instant feedback when copied */}
              <div className="h-4 mt-3">
                {copied && (
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                    Copied to clipboard.
                  </span>
                )}
              </div>

              {/* Instagram Social Hub */}
              <div className="mt-8 pt-8 border-t border-[#15151c]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#8E8E9F]">
                    Social Presence
                  </div>
                  <a
                    href="https://www.instagram.com/horizongrowthstudio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-sans font-semibold text-white hover:text-[#8E8E9F] transition-colors duration-300 flex items-center space-x-2.5 mt-1 group/insta"
                  >
                    <Instagram className="w-5 h-5 text-white group-hover/insta:text-[#8E8E9F] transition-colors" />
                    <span>Instagram</span>
                    <ArrowRight className="w-4 h-4 text-[#8E8E9F] group-hover/insta:translate-x-1 transition-transform" />
                  </a>
                </div>
                <div className="text-[9px] font-mono uppercase tracking-widest text-[#8E8E9F]/80 border border-[#1a1a24] px-3 py-1.5 bg-[#050507]">
                  @horizongrowthstudio
                </div>
              </div>
            </div>

            {/* Quick stats / notes on velocity */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[#8E8E9F] text-[10px] font-mono uppercase tracking-widest space-y-2 sm:space-y-0 px-1">
              <span>ESTIMATED REPLY TIME: &lt; 4 HOURS</span>
              <span>GLOBAL OPERATIONS // INDIA & REMOTE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
