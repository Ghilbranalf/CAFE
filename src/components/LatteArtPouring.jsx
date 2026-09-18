import React from 'react';

/**
 * LatteArtPouring Component
 * Ultra-clean, cinematic 720p HD master barista pour video.
 * Plays automatically and loops continuously without any button clutter.
 */
export default function LatteArtPouring({ className = '' }) {
  return (
    <div className={`relative w-full aspect-[4/3] bg-[#140C07] rounded-2xl overflow-hidden select-none shadow-[0_20px_50px_rgba(20,12,7,0.25)] ${className}`}>
      
      {/* 1. Cinematic Video (Full Bleed, Crystal Clear, AutoPlay & Continuous Loop) */}
      <video
        src="/latte-art-pour.mp4"
        poster="/pour_stage_70.jpg"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover object-center"
      />

      {/* 2. Soft Edge Vignette & Inner Rim */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#140C07]/50 via-transparent to-black/20" />
      <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/15 rounded-2xl" />

      {/* 3. Discreet Provenance Pill Indicator at the Bottom */}
      <div className="absolute bottom-3 right-3 z-20 px-3 py-1 rounded-full bg-[#140C07]/80 backdrop-blur-md border border-[#B88B58]/30 flex items-center gap-2 text-[10px] uppercase font-sans tracking-[0.18em] text-[#FAF7F2]/90 pointer-events-none shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-[#B88B58] animate-pulse"></span>
        <span>Master Barista Pour</span>
      </div>

    </div>
  );
}
