import React, { useRef, useState } from 'react';
import AromaSteam from './AromaSteam';
import MagneticButton from './MagneticButton';
import LatteArtPouring from './LatteArtPouring';
import { Coffee, Eye, Sparkles } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, parallaxX: 0, parallaxY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [viewMode, setViewMode] = useState('latte-art'); // 'latte-art' | 'interior'

  // Smooth 3D Parallax Mouse Tracking on Desktop
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      rotateY: xPos * 6, // Subtle -3deg to +3deg
      rotateX: -yPos * 6,
      parallaxX: -xPos * 14,
      parallaxY: -yPos * 14,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateY: 0, rotateX: 0, parallaxX: 0, parallaxY: 0 });
  };

  return (
    <section 
      id="hero" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-[#FAF7F2] select-none"
    >
      {/* 1. Atmospheric Master Barista Background Atmosphere (Right-Anchored) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full opacity-35 lg:opacity-45">
          <img
            src="/barista_still_50.jpg"
            alt="Mayfair Master Barista Roastery Atmosphere"
            className="w-full h-full object-cover object-center filter saturate-85 contrast-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-[#B88B58]/10 mix-blend-color"></div>
        </div>

        {/* Seamless Luxury Radial & Horizontal Fades */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-[#FAF7F2]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2] via-transparent to-transparent h-24"></div>
      </div>

      {/* 2. Atmospheric Coffee Aroma Drifting Sparks/Steam */}
      <AromaSteam />

      {/* 3. Ambient Warm Roast Glow */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-[#B88B58]/18 via-[#FAF7F2] to-transparent blur-3xl pointer-events-none animate-ambient select-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Narrative (Staggered Entrance) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Editorial Eyebrow */}
            <div 
              className="flex items-center gap-3 mb-6 select-none animate-entrance"
              style={{ animationDelay: '100ms' }}
            >
              <span className="w-8 h-px bg-[#B88B58]"></span>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-[#B88B58]">
                Mayfair Micro-Roastery &amp; Coffee House
              </span>
              <span className="text-[#B88B58]/40 text-[9px]">✦</span>
              <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#8C7A6B]">
                Anno 2021
              </span>
            </div>

            {/* Poetic & Authoritative Luxury Headline */}
            <div className="overflow-hidden mb-7">
              <h1 
                className="font-serif text-4xl sm:text-6xl lg:text-[64px] text-[#140C07] leading-[1.07] tracking-tight font-normal animate-entrance"
                style={{ animationDelay: '250ms' }}
              >
                A civilised haven for <br className="hidden sm:inline" />
                <span className="font-cormorant italic font-normal text-[#B88B58]">
                  the art of the pour.
                </span>
              </h1>
            </div>

            {/* Evocative Editorial Narrative */}
            <p 
              className="font-sans text-base sm:text-lg text-[#5E5249] leading-relaxed mb-10 max-w-xl font-light animate-entrance"
              style={{ animationDelay: '400ms' }}
            >
              Behind the fluted Georgian windows of Mount Street, we roast rare single-origin harvests on vintage cast iron, fold artisan viennoiserie in Charentes butter, and preserve a quiet sanctuary for literature, conversation, and discerning taste.
            </p>

            {/* Bespoke Luxury CTAs with Magnetic Pull & Shimmer */}
            <div 
              className="flex flex-wrap items-center gap-6 mb-14 w-full sm:w-auto animate-entrance"
              style={{ animationDelay: '550ms' }}
            >
              <MagneticButton
                href="#menu"
                strength={0.25}
                className="shimmer-btn w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#140C07] hover:bg-[#2A1C14] text-[#FAF7F2] text-[11px] font-semibold uppercase tracking-[0.22em] border border-[#B88B58]/60 shadow-md hover:shadow-xl transition-all hover:border-[#B88B58] group cursor-pointer rounded-xl"
              >
                <span>Explore Curated Menu</span>
                <span className="text-[#B88B58] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </MagneticButton>
              
              <MagneticButton
                href="#location"
                strength={0.18}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-2 text-[#140C07] hover:text-[#B88B58] text-[11px] font-semibold uppercase tracking-[0.22em] border-b border-[#140C07]/30 hover:border-[#B88B58] transition-all group cursor-pointer"
              >
                <span>Location &amp; Opening Hours</span>
                <span className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
              </MagneticButton>
            </div>

            {/* Clean, Refined Brand Highlights */}
            <div 
              className="flex flex-wrap items-center gap-6 sm:gap-8 pt-6 border-t border-[#E8DFD5] w-full max-w-xl animate-entrance"
              style={{ animationDelay: '700ms' }}
            >
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B88B58]" />
                <span className="font-serif font-semibold text-sm text-[#140C07]">SCA 87+ Single-Origin</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B88B58]" />
                <span className="font-serif font-semibold text-sm text-[#140C07]">72-Hr AOP Viennoiserie</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B88B58]" />
                <span className="font-serif font-semibold text-sm text-[#140C07]">Mayfair Georgian Parlour</span>
              </div>
            </div>

          </div>

          {/* Right Column: Pure, Ultra-Sleek Cinematic Media Showcase */}
          <div 
            className="lg:col-span-5 relative mt-4 lg:mt-0"
            style={{ perspective: '1200px' }}
          >
            <div 
              className="relative mx-auto max-w-lg lg:max-w-none transition-transform duration-500 ease-out will-change-transform"
              style={{
                transform: `rotateX(${tilt.rotateX || 0}deg) rotateY(${tilt.rotateY || 0}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              
              {/* Sleek Luxury Bezel (Zero bulky white border, no messy overlapping elements) */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-[#B88B58]/40 via-[#B88B58]/15 to-[#140C07]/30 shadow-[0_25px_60px_-15px_rgba(20,12,7,0.3)] animate-entrance">
                
                {/* Media Container */}
                <div className="rounded-[14px] overflow-hidden bg-[#140C07]">
                  {viewMode === 'latte-art' ? (
                    <LatteArtPouring />
                  ) : (
                    <div className="relative overflow-hidden bg-[#140C07] aspect-[4/3] group">
                      <img
                        src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85"
                        alt="The Mount Street Cafe Interior & Espresso Bar"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#140C07]/70 via-transparent to-transparent"></div>
                      
                      {/* Cafe Overlay Caption */}
                      <div className="absolute bottom-4 left-4 right-4 text-[#FAF7F2]">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#B88B58] block mb-1">
                          Interior Architecture
                        </span>
                        <h3 className="font-serif font-bold text-base">
                          Mount Street Georgian Interior &amp; Espresso Bar
                        </h3>
                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* Minimalist Editorial Controls & View Switcher (Under the Frame) */}
              <div className="mt-4 flex items-center justify-between px-1 text-[11px] font-sans">
                {/* Tabs */}
                <div className="flex items-center gap-1.5 bg-[#FAF7F2] p-1.5 rounded-xl border border-[#E8DFD5] shadow-xs">
                  <button
                    onClick={() => setViewMode('latte-art')}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      viewMode === 'latte-art'
                        ? 'bg-[#140C07] text-[#FAF7F2] shadow-xs'
                        : 'text-[#7A6D63] hover:text-[#140C07]'
                    }`}
                  >
                    <Coffee className="w-3.5 h-3.5 text-[#B88B58]" />
                    <span>Barista Pour</span>
                  </button>

                  <button
                    onClick={() => setViewMode('interior')}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      viewMode === 'interior'
                        ? 'bg-[#140C07] text-[#FAF7F2] shadow-xs'
                        : 'text-[#7A6D63] hover:text-[#140C07]'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5 text-[#B88B58]" />
                    <span>Cafe Interior</span>
                  </button>
                </div>

                {/* Provenance Tag */}
                <div className="hidden sm:flex items-center gap-1.5 text-[#8C7A6B] text-[10px] font-mono tracking-widest uppercase">
                  <Sparkles className="w-3 h-3 text-[#B88B58]" />
                  <span>Mayfair W1K • Est. 2021</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
