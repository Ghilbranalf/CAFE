import React, { useRef, useState } from 'react';

/**
 * MagneticButton Component
 * Gently pulls towards the user's cursor when hovered near,
 * giving a tactile, bespoke luxury interaction.
 */
export default function MagneticButton({
  children,
  className = '',
  strength = 0.28,
  as = 'a',
  ...props
}) {
  const btnRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const Component = as;

  return (
    <Component
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`inline-block transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isHovered
          ? 'transform 0.15s ease-out'
          : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
