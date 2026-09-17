import React from 'react';
import Reveal from './Reveal';

export default function Gallery() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80',
      title: 'The Georgian Lounge & Reading Library',
      span: 'lg:col-span-2 lg:row-span-2 min-h-[320px] lg:min-h-[480px]',
    },
    {
      url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80',
      title: 'The Calibrated Espresso Bar',
      span: 'min-h-[230px]',
    },
    {
      url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=600&q=80',
      title: 'Weekly Small-Batch Micro Roasting',
      span: 'min-h-[230px]',
    },
    {
      url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
      title: 'The Writers & Creative Mezzanine',
      span: 'min-h-[230px]',
    },
    {
      url: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=600&q=80',
      title: 'The Heated Victorian Garden Courtyard',
      span: 'min-h-[230px]',
    },
  ];

  return (
    <section id="gallery" className="pt-20 md:pt-28 pb-12 bg-[#FAF7F2] text-[#140C07] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal effect="up" className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88B58] block mb-2.5">
            Atmosphere &amp; Sanctuary
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#140C07] mb-4">
            A Glimpse into Our Coffee House
          </h2>
          <p className="font-sans text-base text-[#6E6259] font-light leading-relaxed">
            Soft brass lamps, natural linen textures, and the aroma of freshly ground Geisha coffees welcoming you from the bustling London streets.
          </p>
        </Reveal>

        {/* Gallery Grid with Staggered Cascades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {images.map((item, index) => (
            <Reveal
              key={index}
              effect="zoom"
              delay={index * 100}
              duration={750}
              className={`${item.span}`}
            >
              <div
                className="relative h-full w-full rounded-2xl overflow-hidden shadow-xs hover:shadow-xl group border border-[#E8DFD5] transition-all duration-500"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140C07]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <span className="text-[#FAF7F2] font-serif text-sm sm:text-base tracking-wide font-medium">
                    {item.title}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
