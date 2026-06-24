import { Monitor, Film, FileText } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: "srv-websites",
      icon: Monitor,
      title: "Website Design & Development",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
      description: "Fast, modern, mobile-first websites and high-conversion landing pages built for local businesses.",
      features: ["Mobile responsive", "SEO optimized", "Lightning fast performance"]
    },
    {
      id: "srv-reels",
      icon: Film,
      title: "Short-Form Content (Reels)",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
      description: "High-retention Instagram Reels, TikToks, and Shorts edited to grab attention and boost authority.",
      features: ["Professional storytelling", "Premium editing & pacing", "Niche-targeted content"]
    },
    {
      id: "srv-scripts",
      icon: FileText,
      title: "Script Writing (Hooks + Structure)",
      image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=800",
      description: "Viral hooks and engagement-focused narrative structures that convert viewers into loyal followers.",
      features: ["Attention-grabbing hooks", "Clear messaging hierarchies", "Audience retention engineering"]
    }
  ];

  return (
    <section
      id="services"
      className="py-24 md:py-36 px-6 md:px-12 bg-[#050507] border-t border-[#101015]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header section with strategic keyword placement */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24" id="services-header">
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8E8E9F]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8E8E9F]">
                02 // Core Capabilities
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mt-4 tracking-tight">
              Elite Growth Engines
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#8E8E9F] max-w-sm mt-4 md:mt-0 leading-relaxed font-sans font-light">
            Providing high-end website design agency services and engagement-focused reels editing for premium businesses and clinics.
          </p>
        </div>

        {/* Minimal 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" id="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative border border-white/[0.04] hover:border-white/[0.15] bg-white/[0.01] hover:bg-white/[0.03] backdrop-blur-md p-6 md:p-8 transition-all duration-300 flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                id={service.id}
              >
                <div>
                  {/* Premium Unsplash Image Card Header */}
                  <div className="w-full aspect-[16/10] overflow-hidden border border-white/[0.06] group-hover:border-white/[0.15] mb-6 relative">
                    <div className="absolute inset-0 bg-[#050507]/40 z-10 group-hover:bg-transparent transition-all duration-500" />
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    {/* Title */}
                    <h3 className="text-base md:text-lg font-sans font-semibold text-white tracking-tight">
                      {service.title}
                    </h3>
                    
                    {/* Icon Area */}
                    <div className="w-8 h-8 border border-white/[0.08] group-hover:border-white rounded-none flex items-center justify-center text-[#8E8E9F] group-hover:text-white transition-colors duration-300 bg-white/[0.02] shrink-0 ml-3">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-[#8E8E9F] font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Micro List of Features */}
                <ul className="space-y-2 pt-4 border-t border-[#15151c]/60">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-wider text-[#8E8E9F]">
                      <span className="w-1 h-1 bg-[#8E8E9F] rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
