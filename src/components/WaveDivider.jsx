import React from 'react';

/**
 * WaveDivider Component
 * Creates living, organic wave transitions between light and dark sections
 * with a subtle, silky breathing motion.
 *
 * @param {string} fill - The colour filling the wave shape (hex/tailwind variable)
 * @param {'top' | 'bottom'} position - Whether the wave is placed at the top or bottom of a section
 * @param {boolean} flipX - Mirrors the wave horizontally for visual variety
 * @param {string} className - Optional extra class names
 */
export default function WaveDivider({
  fill = '#140C07',
  position = 'bottom',
  flipX = false,
  className = '',
}) {
  const isTop = position === 'top';

  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none select-none ${
        isTop ? 'relative -mb-px' : 'relative -mt-px'
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={`w-full h-10 sm:h-16 lg:h-22 block ${
          isTop ? 'rotate-180' : ''
        } ${flipX ? '-scale-x-100' : ''}`}
      >
        {/* Soft living translucent under-wave for liquid depth */}
        <path
          d="M0,35 C240,85 480,10 720,55 C960,100 1200,25 1440,45 L1440,100 L0,100 Z"
          fill={fill}
          fillOpacity="0.22"
          className="animate-wave-glide"
        />
        {/* Main Solid Wave */}
        <path
          d="M0,55 C280,10 560,95 840,40 C1080,-5 1280,75 1440,55 L1440,100 L0,100 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
