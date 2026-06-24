import { useEffect } from 'react';

export default function SEOHead() {
  useEffect(() => {
    // Set Document Title
    document.title = "Horizon Growth Studio | Premium Website Design & Short-Form Content Agency";

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Horizon Growth Studio is a premium digital agency specializing in website design agency services, expert reels editing for business, high-end business website development, and digital growth studio services.'
    );

    // Update Keywords Meta
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      'content',
      'website design agency, digital growth studio, reels editing services, business website development, premium web agency, conversion optimization, viral script writing'
    );

    // Schema Markup (JSON-LD)
    const schemaId = 'horizon-growth-schema';
    let scriptSchema = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!scriptSchema) {
      scriptSchema = document.createElement('script');
      scriptSchema.id = schemaId;
      scriptSchema.type = 'application/ld+json';
      document.head.appendChild(scriptSchema);
    }

    const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'https://horizongrowth.studio';
    
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Horizon Growth Studio",
      "alternateName": "Horizon Growth Studio",
      "description": "A premium digital growth agency crafting elite website design, conversion-focused landing pages, strategic business reels editing, and high-impact script writing.",
      "url": currentOrigin,
      "logo": `${currentOrigin}/logo.png`,
      "image": `${currentOrigin}/og-image.jpg`,
      "priceRange": "₹12000-₹20000",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gurugram",
        "addressRegion": "HR",
        "addressCountry": "IN"
      },
      "areaServed": ["IN", "US", "GB", "AE", "CA"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Agency Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Design & Development",
              "description": "Fast, modern, mobile-first websites and SEO optimized landing pages."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Short-Form Content & Reels Editing",
              "description": "High-impact storytelling, premium pacing, and engaging short videos for brands."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Script Writing & Viral Hooks",
              "description": "Engagement-driven structures, structured copy, and hook research."
            }
          }
        ]
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "teamhorizongrowth@gmail.com",
        "contactType": "sales",
        "availableLanguage": "en"
      }
    };

    scriptSchema.textContent = JSON.stringify(schemaData, null, 2);

    return () => {
      // Cleanup dynamically added schema if unmounted
      const existing = document.getElementById(schemaId);
      if (existing) {
        existing.remove();
      }
    };
  }, []);

  return null;
}
