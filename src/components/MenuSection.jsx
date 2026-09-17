import React, { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { Sparkles, Coffee } from 'lucide-react';
import Reveal from './Reveal';
import SpotlightCard from './SpotlightCard';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems =
    activeCategory === 'all'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 md:py-28 bg-[#FAF7F2] text-[#140C07] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Smooth Entrance */}
        <Reveal effect="up" className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88B58] block mb-2.5">
            The Daily Service
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#140C07] mb-4">
            Curated Speciality Menu
          </h2>
          <p className="font-sans text-base text-[#6E6259] font-light leading-relaxed">
            Every drink is crafted with pure mineral-balanced water, precisely dialed-in extraction profiles, and certified British &amp; European provenance.
          </p>
        </Reveal>

        {/* Category Filter Pills */}
        <Reveal effect="fade" delay={100} className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-14">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#140C07] text-[#FAF7F2] shadow-md border border-[#B88B58]/40 scale-105'
                  : 'bg-white text-[#6E6259] hover:text-[#140C07] border border-[#E8DFD5] hover:border-[#140C07]/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </Reveal>

        {/* Menu Items Grid with Staggered Cascading Reveals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item, idx) => (
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

                  {/* Elegant In-Cafe Tasting Note / CTA */}
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

        {/* UK Regulatory & Allergen Notice */}
        <div className="text-center max-w-2xl mx-auto mb-14 text-[11px] text-[#8C7A6B] font-sans leading-relaxed border-t border-[#E8DFD5] pt-6">
          <p>
            * All prices are quoted in British Sterling (£) and inclusive of 20% standard UK VAT. A discretionary 12.5% service charge is added to table service. In accordance with UK Food Information Regulations (Natasha's Law), please speak to our team regarding any food allergies or intolerances.
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
                We gladly provide certified organic British oat milk at zero supplement, Swiss Water Process decaffeinated roasts, and bespoke pour-over tasting flights guided by our senior head roaster.
              </p>
            </div>

            <a
              href="#reservation"
              className="shimmer-btn shrink-0 px-8 py-4 rounded-xl bg-[#B88B58] hover:bg-[#9E7445] text-white text-xs uppercase tracking-widest font-bold shadow-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center"
            >
              Reserve a Tasting Session
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
