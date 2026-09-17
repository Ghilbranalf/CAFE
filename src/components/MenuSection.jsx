import React from 'react';
import { TOP_SIX_MENU_ITEMS } from '../data/menuData';
import { Sparkles, Coffee, FileText, ExternalLink, Download, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import SpotlightCard from './SpotlightCard';

export default function MenuSection() {
  return (
    <section id="menu" className="py-20 md:py-28 bg-[#FAF7F2] text-[#140C07] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal effect="up" className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B88B58]/10 border border-[#B88B58]/30 text-[#B88B58] text-[11px] font-bold uppercase tracking-[0.22em] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Daily Service</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#140C07] mb-4">
            Curated Speciality Menu
          </h2>
          <p className="font-sans text-base text-[#6E6259] font-light leading-relaxed max-w-2xl mx-auto">
            Every drink is crafted with pure mineral-balanced water, precisely dialed-in extraction profiles, and certified British &amp; European provenance.
          </p>
        </Reveal>

        {/* Top Six Menu Grid (3x2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {TOP_SIX_MENU_ITEMS.map((item, idx) => (
            <Reveal
              key={item.id}
              effect="up"
              delay={(idx % 3) * 120}
              duration={700}
              className="h-full"
            >
              <SpotlightCard
                spotlightColor="rgba(184, 139, 88, 0.12)"
                borderColor="rgba(184, 139, 88, 0.5)"
                className="h-full bg-white rounded-2xl overflow-hidden border border-[#E8DFD5] shadow-xs hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col group"
              >
                {/* Image Container with Elegant Zoom */}
                <div className="relative h-56 overflow-hidden bg-[#FAF7F2]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {/* Badge */}
                  <span
                    className={`absolute top-3.5 left-3.5 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md text-white select-none ${
                      item.badgeType === 'brass'
                        ? 'bg-[#B88B58]'
                        : item.badgeType === 'emerald'
                        ? 'bg-[#2A4D38]'
                        : 'bg-[#140C07]'
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2.5">
                      <h3 className="font-serif font-bold text-lg text-[#140C07] leading-snug group-hover:text-[#B88B58] transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-serif font-extrabold text-[#B88B58] text-lg shrink-0">
                        {item.price}
                      </span>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-[#6E6259] leading-relaxed mb-5 font-light">
                      {item.desc}
                    </p>

                    {/* Flavour tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="text-[10px] font-semibold tracking-wider uppercase bg-[#FAF7F2] text-[#6E6259] border border-[#E8DFD5] px-2.5 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Dine-In Experience CTA */}
                  <a
                    href="#reservation"
                    className="shimmer-btn w-full py-2.5 px-4 rounded-xl border border-[#E8DFD5] hover:border-[#140C07] bg-[#FAF7F2] hover:bg-[#140C07] text-[#140C07] hover:text-[#FAF7F2] text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <Coffee className="w-3.5 h-3.5 text-[#B88B58]" />
                    <span>Dine In Experience</span>
                  </a>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        {/* Prominent "View All Menu (PDF)" Banner */}
        <Reveal effect="up" delay={100} className="mb-14">
          <div className="bg-gradient-to-r from-[#140C07] via-[#1E140D] to-[#140C07] rounded-2xl p-6 sm:p-8 border border-[#B88B58]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-[#FAF7F2]">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-[#B88B58]/15 border border-[#B88B58]/30 flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6 text-[#B88B58]" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
                  Discover Our Complete Mayfair Menu
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#D4C7BC] font-light mt-0.5">
                  Browse single-origin micro-lots, botanical cold brews, hand-laminated viennoiserie, and all-day kitchen offerings.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href="/menu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#B88B58] hover:bg-[#A37845] text-white text-xs uppercase tracking-widest font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <FileText className="w-4 h-4 text-white" />
                <span>View All Menu (PDF)</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="/menu.pdf"
                download="The-Heritage-And-Roast-Mayfair-Menu.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/20 text-[#FAF7F2] border border-[#B88B58]/30 hover:border-[#B88B58] text-xs uppercase tracking-widest font-semibold rounded-xl transition-all duration-300"
              >
                <Download className="w-3.5 h-3.5 text-[#B88B58]" />
                <span>Download</span>
              </a>
            </div>
          </div>
        </Reveal>

        {/* UK Regulatory & Allergen Notice */}
        <div className="text-center max-w-2xl mx-auto mb-14 text-[11px] text-[#8C7A6B] font-sans leading-relaxed border-t border-[#E8DFD5] pt-6">
          <p>
            * All prices are quoted in British Sterling (£) and inclusive of 20% standard UK VAT. A discretionary 12.5% service charge is added to table service. In accordance with UK Food Information Regulations (Natasha&apos;s Law), please speak to our team regarding any food allergies or intolerances.
          </p>
        </div>

        {/* Bespoke Catering & Flights Banner */}
        <Reveal effect="zoom" delay={150}>
          <div className="bg-[#140C07] text-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#B88B58]/30 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div>
              <div className="flex items-center gap-2 text-[#B88B58] text-xs font-semibold uppercase tracking-[0.2em] mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Bespoke Dietary &amp; Bean Flights</span>
              </div>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl mb-2.5">
                Specific Dietary Requirements or Rare Micro-Lot Flights?
              </h3>
              <p className="font-sans text-sm text-[#D6C7BC] max-w-2xl leading-relaxed font-light">
                We cater generously for gluten-free, vegan, and nut-intolerant patrons. Minor Figures organic British oat milk and decaffeinated Swiss Water swiss-roast are served at zero surcharge.
              </p>
            </div>

            <a
              href="#reservation"
              className="shimmer-btn shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-[#B88B58] hover:bg-[#9E7445] text-white text-xs uppercase tracking-widest font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <span>Book Tasting Table</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
