import React, { useEffect, useRef, useState } from 'react';

/**
 * Reveal Component
 * Provides silky-smooth, GPU-accelerated scroll animations with luxury cubic-bezier easing.
 * 
 * @param {React.ReactNode} children - Content to animate
 * @param {string} className - Additional CSS classes
 * @param {number} delay - Animation delay in milliseconds (useful for staggered lists)
 * @param {number} duration - Animation duration in milliseconds
 * @param {'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade'} effect - Animation direction/effect
 * @param {number} threshold - Viewport intersection threshold (0 to 1)
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  duration = 850,
  effect = 'up',
  threshold = 0.12,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const node = domRef.current;
    if (!node) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  const getInitialTransform = () => {
    switch (effect) {
      case 'up':
        return 'translate3d(0, 32px, 0)';
      case 'down':
        return 'translate3d(0, -32px, 0)';
      case 'left':
        return 'translate3d(36px, 0, 0)';
      case 'right':
        return 'translate3d(-36px, 0, 0)';
      case 'zoom':
        return 'scale3d(0.95, 0.95, 1) translate3d(0, 16px, 0)';
      case 'fade':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  return (
    <div
      ref={domRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0) scale3d(1, 1, 1)' : getInitialTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
