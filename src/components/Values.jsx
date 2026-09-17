import React from 'react';
import { Coffee, Compass, Feather, Trees } from 'lucide-react';
import Reveal from './Reveal';
import SpotlightCard from './SpotlightCard';

export default function Values() {
  const values = [
    {
      icon: Coffee,
      title: 'Single Origin Micro-Lots',
      desc: 'Small-batch speciality coffees purchased directly from renowned growers in Yirgacheffe, Huila, and Nyeri, roasted weekly in our micro-roastery.',
    },
    {
      icon: Compass,
      title: 'A Sanctuary for Thought',
      desc: 'Solid English oak tables, recessed brass charging ports, and dedicated quiet zones create an unhurried haven for creative minds.',
    },
    {
      icon: Feather,
      title: '72-Hour Viennoiserie',
      desc: 'Laminated by hand with certified Charentes-Poitou AOP French butter and slow-fermented for delicate flakiness and deep, buttery notes.',
    },
    {
      icon: Trees,
      title: 'Lounge & Heated Courtyard',
      desc: 'A serene Georgian-inspired main room paired with an intimate Victorian heated garden veranda adorned with fragrant jasmine and lanterns.',
    },
  ];

  return (
    <section id="craft" className="py-16 sm:py-20 md:py-28 bg-[#140C07] text-[#FAF7F2] relative overflow-hidden">
      {/* Moody Master Barista Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none opacity-20">
        <img
          src="/barista_still_50.jpg"
          alt="Mayfair Master Barista Crafting Coffee"
          className="w-full h-full object-cover object-center filter saturate-75 contrast-125"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#140C07] via-transparent to-[#140C07]"></div>
        <div className="absolute inset-0 bg-[#140C07]/70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Smooth Entrance */}
        <Reveal effect="up" className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88B58] block mb-2 sm:mb-2.5">
            The Philosophy &amp; Heritage
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-[#FAF7F2] mb-3 sm:mb-4">
            Curated with Uncompromising Reverence
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#D4C7BC] leading-relaxed font-light">
            From bean provenance to architectural acoustics, every detail has been purposefully shaped to foster clarity, conversation, and supreme culinary enjoyment.
          </p>
        </Reveal>

        {/* 4 Cards Grid with Interactive Gilded Spotlight Glow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={index}
                effect="up"
                delay={index * 130}
                duration={750}
                className="h-full"
              >
                <SpotlightCard
                  spotlightColor="rgba(184, 139, 88, 0.22)"
                  borderColor="rgba(184, 139, 88, 0.6)"
                  className="h-full bg-[#1F140D] rounded-2xl p-6 sm:p-7 lg:p-8 border border-[#B88B58]/25 shadow-xl hover:-translate-y-1.5 sm:hover:-translate-y-2 hover:shadow-[0_22px_45px_-10px_rgba(184,139,88,0.2)] transition-all duration-500 ease-out group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-xl bg-[#2A1C14] border border-[#B88B58]/30 group-hover:bg-[#B88B58] group-hover:border-[#B88B58] flex items-center justify-center mb-5 sm:mb-6 transition-all duration-500">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#B88B58] group-hover:text-[#140C07] transition-colors duration-300" />
                    </div>
                    <h3 className="font-serif font-bold text-base sm:text-lg text-white mb-2 sm:mb-2.5 group-hover:text-[#F4ECE1] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#C8B6A6] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
