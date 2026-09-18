import React, { useRef, useState } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

/**
 * LatteArtPouring Component
 * Ultra-clean, cinematic 720p HD master barista pour video.
 * Zero clutter obscuring the pour, subtle minimalist controls.
 */
export default function LatteArtPouring({ className = '' }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  return (
    <div className={`relative w-full aspect-[4/3] bg-[#140C07] rounded-2xl overflow-hidden select-none group shadow-[0_20px_50px_rgba(20,12,7,0.25)] ${className}`}>
      
      {/* 1. Cinematic Video (Full Bleed, Crystal Clear, Always Muted) */}
      <video
        ref={videoRef}
        src="/latte-art-pour.mp4"
        poster="/pour_stage_70.jpg"
        autoPlay
        loop
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        className="w-full h-full object-cover object-center"
      />

      {/* 2. Soft Edge Vignette (Subtle Depth, Never Obscures the Action) */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#140C07]/60 via-transparent to-black/20" />
      <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/15 rounded-2xl" />

      {/* 3. Bottom Sleek Controls Bar */}
      <div className="absolute bottom-0 inset-x-0 z-20 px-3.5 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-t from-[#140C07]/90 via-[#140C07]/60 to-transparent flex items-center justify-between opacity-95 sm:opacity-90 sm:group-hover:opacity-100 transition-opacity">
        
        {/* Play / Pause & Replay */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleTogglePlay}
            className="p-2 sm:p-1.5 rounded-full bg-[#140C07]/80 hover:bg-[#B88B58] text-[#FAF7F2] hover:text-[#140C07] border border-[#B88B58]/40 transition-all cursor-pointer shadow"
            title={isPlaying ? 'Pause' : 'Play'}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          
          <button
            onClick={handleRestart}
            className="p-2 sm:p-1.5 rounded-full bg-[#140C07]/80 hover:bg-[#B88B58] text-[#FAF7F2] hover:text-[#140C07] border border-[#B88B58]/40 transition-all cursor-pointer shadow"
            title="Replay from Start"
            aria-label="Replay from Start"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Live Indicator */}
        <div className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] uppercase font-sans tracking-[0.16em] sm:tracking-[0.2em] text-[#FAF7F2]/90">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B88B58] animate-pulse"></span>
          <span>Master Barista Pour</span>
        </div>
      </div>

      {/* 5. Minimalist Golden Progress Line at the Very Bottom Edge */}
      <div className="absolute bottom-0 inset-x-0 h-0.5 bg-white/20 z-30">
        <div
          className="h-full bg-[#B88B58] transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

    </div>
  );
}
