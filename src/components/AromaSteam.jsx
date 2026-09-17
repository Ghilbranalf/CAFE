import React from 'react';

export default function AromaSteam() {
  // Pre-calculated deterministic floating motes for optimal performance
  const particles = [
    { left: '15%', bottom: '15%', size: 6, delay: '0s', duration: '9s', drift: '25px', opacity: 0.25 },
    { left: '28%', bottom: '8%', size: 4, delay: '2s', duration: '11s', drift: '-20px', opacity: 0.3 },
    { left: '42%', bottom: '22%', size: 5, delay: '4s', duration: '8.5s', drift: '30px', opacity: 0.2 },
    { left: '55%', bottom: '12%', size: 7, delay: '1s', duration: '10.5s', drift: '-15px', opacity: 0.22 },
    { left: '68%', bottom: '18%', size: 4, delay: '3.5s', duration: '9.5s', drift: '22px', opacity: 0.28 },
    { left: '80%', bottom: '10%', size: 6, delay: '5s', duration: '12s', drift: '-25px', opacity: 0.24 },
    { left: '88%', bottom: '25%', size: 5, delay: '2.5s', duration: '8s', drift: '18px', opacity: 0.18 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0" aria-hidden="true">
      {particles.map((p, idx) => (
        <span
          key={idx}
          className="absolute rounded-full bg-gradient-to-t from-[#B88B58] to-[#FAF7F2] blur-[1px]"
          style={{
            left: p.left,
            bottom: p.bottom,
            width: `${p.size}px`,
            height: `${p.size * 1.6}px`,
            opacity: p.opacity,
            animation: `steamDrift ${p.duration} ease-in-out ${p.delay} infinite`,
            '--drift-x': p.drift,
          }}
        />
      ))}
    </div>
  );
}
