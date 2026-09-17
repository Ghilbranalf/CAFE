import React from 'react';
import { Wifi, Zap, Sparkles, Trees, Heart, Shield, ArrowRight } from 'lucide-react';
import { FACILITIES } from '../data/facilitiesData';
import Reveal from './Reveal';
import SpotlightCard from './SpotlightCard';

const iconMap = {
  Wifi,
  Zap,
  Sparkles,
  Trees,
  Heart,
  Shield,
};

export default function Facilities() {
  return (
    <section id="parlour" className="py-16 sm:py-20 md:py-28 bg-[#160E08] text-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal effect="up" className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88B58] block mb-2">
            The Living Space
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-[#FAF7F2] mb-3">
            Designed for Focus &amp; Stillness
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-[#D4C7BC] font-light leading-relaxed">
            Georgian architecture meets modern comfort — curated for quiet focus, reading, and civilized gathering.
          </p>
        </Reveal>

        {/* Facilities Grid (Responsive 1-col mobile, 2-col tablet, 3-col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-10 sm:mb-16">
          {FACILITIES.map((item, index) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <Reveal
                key={item.id}
                effect="up"
                delay={(index % 3) * 120}
                duration={700}
                className="h-full"
              >
                <SpotlightCard
                  spotlightColor="rgba(184, 139, 88, 0.22)"
                  borderColor="rgba(184, 139, 88, 0.6)"
                  className="h-full bg-[#21160F] rounded-2xl p-6 sm:p-7 lg:p-8 border border-[#B88B58]/20 shadow-xl hover:-translate-y-1.5 sm:hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(184,139,88,0.2)] transition-all duration-500 ease-out group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#2D1E15] border border-[#B88B58]/30 group-hover:bg-[#B88B58] group-hover:border-[#B88B58] flex items-center justify-center mb-5 sm:mb-6 transition-all duration-500">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#B88B58] group-hover:text-[#160E08] transition-colors duration-300" />
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

        {/* Private Parlour & Boardroom Hire Card */}
        <Reveal effect="zoom" delay={150}>
          <div className="bg-[#21160F] rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-dashed border-[#B88B58]/60 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-block bg-[#B88B58]/20 text-[#B88B58] text-[10px] font-bold uppercase tracking-[0.2em] px-3.5 py-1 rounded-full mb-3 border border-[#B88B58]/30">
                Private Hire &amp; Executive Meetings
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl lg:text-3xl text-white mb-2.5">
                Require an Intimate Space for Board Meetings or Private Dining?
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#D4C7BC] leading-relaxed font-light">
                The Private Parlour accommodates up to 18 seated guests, complete with private espresso bar, 4K wireless presentation display, and bespoke breakfast, lunch, or afternoon tea menus.
              </p>
            </div>

            <a
              href="#reservation"
              className="shimmer-btn w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 bg-[#B88B58] hover:bg-[#9E7445] text-white text-xs uppercase tracking-widest font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <span>Reserve The Parlour</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
