import React, { useRef, useState } from 'react';

/**
 * SpotlightCard Component
 * Luxury interactive card that reveals a subtle warm gilded brass light aura
 * following the user's cursor across the surface and border.
 */
export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(184, 139, 88, 0.16)',
  borderColor = 'rgba(184, 139, 88, 0.45)',
  ...props
}) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden transition-all duration-500 ${className}`}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Radial Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${spotlightColor}, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Dynamic Border Highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-500 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          border: `1px solid ${borderColor}`,
          maskImage: `radial-gradient(220px circle at ${coords.x}px ${coords.y}px, black 40%, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(220px circle at ${coords.x}px ${coords.y}px, black 40%, transparent 80%)`,
        }}
        aria-hidden="true"
      />

      {/* Card Content */}
      <div className="relative z-0 h-full">{children}</div>
    </div>
  );
}
