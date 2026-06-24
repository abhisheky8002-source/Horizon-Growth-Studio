import { useState } from 'react';
import { ArrowUpRight, Grid, Monitor, Eye } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const projects = [
    {
      id: "portfolio-salon",
      title: "8eenwon Salon",
      category: "SALONS & BEAUTY",
      url: "https://8eenwonsalon.pages.dev/",
      tag: "Salon",
      desc: "An immersive booking and digital presence framework for premium salons.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "portfolio-clinic",
      title: "Doon Veda Gurugram",
      category: "CLINICS & WELLNESS",
      url: "https://doonvedagurugram.pages.dev/",
      tag: "Clinic",
      desc: "Holistic wellness clinic interface built for organic search dominance.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "portfolio-doctor",
      title: "Dr. Ekansh",
      category: "MEDICAL PRACTICE",
      url: "https://drekansh.pages.dev/",
      tag: "Doctor",
      desc: "A bespoke appointment system and content hub for medical professionals.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "portfolio-gym",
      title: "Ather Gym",
      category: "ATHLETICS & FITNESS",
      url: "https://athergym.pages.dev/",
      tag: "Gym",
      desc: "High-energy membership conversion page with class scheduling.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "portfolio-coach",
      title: "Dr. Shruti Jain",
      category: "COACHING & THERAPY",
      url: "https://drshrutijainlifecaoch.pages.dev/",
      tag: "Life Coach",
      desc: "Refined coaching landing page engineered around trust and booking conversions.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "portfolio-realestate",
      title: "Realistic Akhilesh",
      category: "REAL ESTATE",
      url: "https://realistic-akhilesh.pages.dev/",
      tag: "Real Estate",
      desc: "A sleek real estate portfolio designed to capture premium property leads.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "portfolio-cleaning",
      title: "Velvet Cleaning",
      category: "SERVICE INDUSTRY",
      url: "https://velvet-cleaning-services.pages.dev/",
      tag: "Cleaning",
      desc: "Modern service booking interface featuring custom price quoting engines.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "portfolio-coaching",
      title: "Nisha Academy",
      category: "EDUCATION & LECTURES",
      url: "https://nisha-academy.pages.dev/",
      tag: "Coaching",
      desc: "Comprehensive learning hub featuring interactive class listings.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "portfolio-cafe",
      title: "Cafe Kala",
      category: "HOSPITALITY",
      url: "https://cofe-kala.pages.dev/",
      tag: "Cafe",
      desc: "Bespoke digital menu and ambient landing page for gourmet cafes.",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "portfolio-ecommerce",
      title: "Balaji Garments",
      category: "E-COMMERCE",
      url: "https://balaji-garments.pages.dev/",
      tag: "E-Commerce",
      desc: "Robust shopping portal engineered with fast loading product catalogs.",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "portfolio-jewellery",
      title: "Veyra Jewellery",
      category: "LUXURY RETAIL",
      url: "https://veyra-jewellery.pages.dev/",
      tag: "Jewellery",
      desc: "Exquisite visual display and lead funnel for premium jewelry lines.",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const categories = ['ALL', 'CLINICS & MEDICAL', 'COACHING & SERVICE', 'E-COMMERCE & RETAIL'];

  const filterProject = (proj: typeof projects[0]) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'CLINICS & MEDICAL') {
      return ['Clinic', 'Doctor', 'Life Coach'].includes(proj.tag);
    }
    if (activeFilter === 'COACHING & SERVICE') {
      return ['Coaching', 'Cleaning', 'Real Estate', 'Salon', 'Cafe', 'Gym'].includes(proj.tag);
    }
    if (activeFilter === 'E-COMMERCE & RETAIL') {
      return ['E-Commerce', 'Jewellery'].includes(proj.tag);
    }
    return true;
  };

  const filteredProjects = projects.filter(filterProject);

  return (
    <section
      id="portfolio"
      className="py-24 md:py-36 px-6 md:px-12 bg-[#050507] border-t border-[#101015]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16" id="portfolio-header">
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8E8E9F]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8E8E9F]">
                03 // Selected Proof
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mt-4 tracking-tight">
              Case Deliverables
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#8E8E9F] max-w-sm mt-4 md:mt-0 leading-relaxed font-sans font-light">
            Live client builds showing our conversion-focused philosophy in action across various high-value niches.
          </p>
        </div>

        {/* Minimal Filters */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-12 border-b border-[#15151c]/60 pb-6" id="portfolio-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-[10px] md:text-xs font-mono uppercase tracking-widest py-2 px-4 transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? 'border border-white text-white bg-white/5'
                  : 'border border-transparent text-[#8E8E9F] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="portfolio-grid">
          {filteredProjects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-white/[0.04] hover:border-white/[0.15] bg-white/[0.01] hover:bg-white/[0.03] backdrop-blur-md p-5 md:p-6 transition-all duration-300 flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
              id={project.id}
            >
              <div>
                {/* Premium Unsplash Image Header */}
                <div className="w-full aspect-[16/10] overflow-hidden border border-white/[0.06] group-hover:border-white/[0.15] mb-5 relative">
                  <div className="absolute inset-0 bg-[#050507]/40 z-10 group-hover:bg-transparent transition-all duration-500" />
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                </div>

                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-mono tracking-widest text-[#8E8E9F] uppercase">
                    {project.category}
                  </span>
                  <div className="w-7 h-7 rounded-none border border-white/[0.08] group-hover:border-white/50 flex items-center justify-center text-[#8E8E9F] group-hover:text-white transition-all duration-300 shrink-0 ml-2">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="text-lg font-sans font-semibold text-white tracking-tight mb-2 group-hover:text-[#a5a5b5] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs md:text-sm text-[#8E8E9F] font-light leading-relaxed mb-6">
                  {project.desc}
                </p>
              </div>

              {/* Status footer inside the card */}
              <div className="flex items-center space-x-2 mt-auto pt-4 border-t border-[#15151c]/40">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-500">
                  Live Production
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
