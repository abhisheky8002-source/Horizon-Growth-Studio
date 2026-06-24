import { Check, ArrowUpRight } from 'lucide-react';

export default function Pricing() {
  const packages = [
    {
      id: "pkg-professional",
      price: "₹12,000",
      title: "Professional Website",
      desc: "Perfect for single service providers or standard businesses aiming to establish an elite digital footprint.",
      features: [
        "Modern custom website design",
        "Fully mobile responsive",
        "SEO optimized structure",
        "Lightning fast loading speeds",
        "1-month post-launch support"
      ],
      popular: false
    },
    {
      id: "pkg-booking",
      price: "₹15,000",
      title: "Website + WhatsApp + Booking",
      desc: "Our most requested system. Ideal for clinics, salons, and coaches requiring direct lead capture & reservation workflows.",
      features: [
        "Everything included in ₹12,000",
        "Direct WhatsApp chat integration",
        "Custom appointment/lead booking system",
        "Automated calendar synchronizations",
        "Interactive conversion elements"
      ],
      popular: true
    },
    {
      id: "pkg-ecommerce",
      price: "₹20,000",
      title: "E-Commerce Website",
      desc: "A fully integrated retail portal designed to list, market, and sell physical or digital goods seamlessly.",
      features: [
        "Full online store setup",
        "Interactive product catalog",
        "Optimized cart & checkout system",
        "Secure payments integration",
        "Admin control management panel"
      ],
      popular: false
    }
  ];

  const handleChoose = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="pricing"
      className="py-24 md:py-36 px-6 md:px-12 bg-[#050507] border-t border-[#101015]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24" id="pricing-header">
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8E8E9F]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8E8E9F]">
                04 // Clear Investments
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mt-4 tracking-tight">
              Simple Pricing
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#8E8E9F] max-w-sm mt-4 md:mt-0 leading-relaxed font-sans font-light">
            A transparent investment model tailored for scale. No hidden fees, no long contracts, pure delivery.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" id="pricing-grid">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`border p-8 md:p-10 flex flex-col justify-between transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] ${
                pkg.popular 
                  ? 'border-white/[0.25] bg-white/[0.04] backdrop-blur-lg shadow-[0_0_50px_rgba(255,255,255,0.03)]' 
                  : 'border-white/[0.04] hover:border-white/[0.15] bg-white/[0.01] hover:bg-white/[0.03] backdrop-blur-md'
              }`}
              id={pkg.id}
            >
              <div>
                {/* Popular Badge */}
                <div className="h-6 flex items-center mb-4">
                  {pkg.popular && (
                    <span className="text-[9px] font-mono tracking-widest uppercase text-white bg-[#1a1a24] border border-[#2d2d3d] px-2.5 py-0.5">
                      Recommended Velo
                    </span>
                  )}
                </div>

                {/* Package Title */}
                <h3 className="text-lg font-sans font-semibold text-[#8E8E9F] tracking-tight">
                  {pkg.title}
                </h3>

                {/* Pricing display */}
                <div className="mt-4 mb-6 flex items-baseline">
                  <span className="text-4xl md:text-5xl font-sans font-bold text-white tracking-tight">
                    {pkg.price}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-[#8E8E9F] tracking-widest ml-2">
                    / flat rate
                  </span>
                </div>

                <p className="text-xs text-[#8E8E9F] font-light leading-relaxed mb-8 border-b border-[#15151c]/60 pb-6">
                  {pkg.desc}
                </p>

                {/* Features list */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-xs text-white/95">
                      <Check className="w-3.5 h-3.5 text-[#8E8E9F] shrink-0 mt-0.5" />
                      <span className="font-sans font-light leading-normal">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={handleChoose}
                className={`w-full inline-flex items-center justify-between text-xs font-semibold tracking-wider uppercase px-5 py-3.5 transition-all duration-300 cursor-pointer ${
                  pkg.popular
                    ? 'bg-white text-black border border-white hover:bg-transparent hover:text-white'
                    : 'bg-transparent text-white border border-[#1a1a24] hover:border-white'
                }`}
              >
                <span>Select Package</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
