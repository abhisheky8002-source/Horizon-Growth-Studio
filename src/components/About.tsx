export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-36 px-6 md:px-12 bg-[#050507] border-t border-[#101015]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left column: section tag */}
        <div className="lg:col-span-4" id="about-meta">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8E8E9F]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#8E8E9F]">
              01 // The Philosophy
            </span>
          </div>
          <h2 className="text-xl font-bold font-sans text-white mt-3 uppercase tracking-tight">
            Our Purpose
          </h2>
        </div>

        {/* Right column: High-end concise block */}
        <div className="lg:col-span-8 flex flex-col justify-center" id="about-content">
          <p className="text-xl sm:text-2xl md:text-3xl text-white font-sans font-light leading-relaxed max-w-3xl">
            We are <span className="font-semibold text-white">Horizon Growth Studio</span>. 
            We do not sell abstract aesthetics or vanity metrics. We construct lightweight, high-conversion 
            digital frameworks and high-retention short-form content channels designed specifically to 
            scale real-world client acquisition.
          </p>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-[#15151c]/60 max-w-2xl">
            <div>
              <div className="text-2xl font-bold font-sans text-white">100%</div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#8E8E9F] mt-1">Client Centered</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-sans text-white">0%</div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#8E8E9F] mt-1">Agile Fluff</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-2xl font-bold font-sans text-white">24/7</div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#8E8E9F] mt-1">Acquisition Velocity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
