import React, { useState, useEffect, useRef } from 'react';
import { Star, CheckCircle, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { REVIEWS } from '../data/reviewsData';
import Reveal from './Reveal';

export default function Reviews() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const totalReviews = REVIEWS.length;

  const nextSlide = () => {
    setActiveIdx((prev) => (prev + 1) % totalReviews);
  };

  const prevSlide = () => {
    setActiveIdx((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  // Autoplay slider on mobile/tablet (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % totalReviews);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, totalReviews]);

  // Touch Swipe Handlers for iPad & Mobile
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStartX(null);
  };

  return (
    <section id="reviews" className="pt-10 sm:pt-12 pb-16 sm:pb-20 md:pt-16 md:pb-28 bg-[#FAF7F2] text-[#140C07] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal effect="up" className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88B58] block mb-2 sm:mb-2.5">
            Guest Journal &amp; Reflections
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-[#140C07] mb-3 sm:mb-4">
            Words from Our Discerning Patrons
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#6E6259] font-light leading-relaxed">
            Genuine entries and reflections from residents, writers, and international coffee lovers in London.
          </p>
        </Reveal>

        {/* 1. Mobile & Tablet Interactive Slideshow (Clean, Uncluttered, Generous Breathing Room) */}
        <div 
          className="block lg:hidden mb-10 sm:mb-14"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="max-w-xl mx-auto">
            {/* Active Card */}
            <article className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E8DFD5] shadow-md transition-all duration-500 ease-out flex flex-col justify-between min-h-[340px] relative">
              {/* Subtle Decorative Quote Symbol */}
              <div className="absolute top-6 right-6 text-[#B88B58]/15 pointer-events-none">
                <Quote className="w-12 h-12" />
              </div>

              <div>
                {/* Patron Header */}
                <div className="flex items-center gap-3.5 mb-5 relative z-10">
                  <div
                    className={`w-12 h-12 rounded-full ${REVIEWS[activeIdx].avatarColor} text-[#FAF7F2] font-serif font-bold flex items-center justify-center text-sm shadow-xs shrink-0`}
                  >
                    {REVIEWS[activeIdx].initials}
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="font-serif font-bold text-[#140C07] text-base sm:text-lg leading-tight truncate">
                      {REVIEWS[activeIdx].name}
                    </h3>
                    <span className="text-xs text-[#8A7C72] block mt-0.5 font-medium truncate">
                      {REVIEWS[activeIdx].role}
                    </span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#FAF7F2] text-[#B88B58] border border-[#E8DFD5] font-black flex items-center justify-center text-xs shrink-0">
                    G
                  </div>
                </div>

                {/* Stars */}
                <div className="flex text-[#B88B58] mb-4">
                  {[...Array(REVIEWS[activeIdx].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B88B58]" />
                  ))}
                </div>

                {/* Comment with Room to Breathe */}
                <p className="font-serif text-sm sm:text-base text-[#4A3C32] leading-relaxed italic mb-6">
                  "{REVIEWS[activeIdx].comment}"
                </p>
              </div>

              {/* Date & Verified Badge */}
              <div className="flex items-center justify-between text-xs text-[#8A7C72] pt-4 border-t border-[#F3EDE4]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#B88B58]" />
                  <span>Verified London Patron</span>
                </div>
                <span className="text-[11px] font-mono text-[#A8988C]">
                  {REVIEWS[activeIdx].date}
                </span>
              </div>
            </article>

            {/* Slideshow Controls (Prev/Next + Dot Indicators) */}
            <div className="flex items-center justify-between mt-6 px-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-[#E8DFD5] bg-white hover:bg-[#140C07] hover:text-white hover:border-[#140C07] text-[#140C07] transition-all flex items-center justify-center cursor-pointer shadow-xs active:scale-95"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Dots & Counter */}
              <div className="flex items-center gap-2">
                {REVIEWS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                      activeIdx === i
                        ? 'w-7 bg-[#B88B58]'
                        : 'w-2 bg-[#E8DFD5] hover:bg-[#B88B58]/50'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-[#E8DFD5] bg-white hover:bg-[#140C07] hover:text-white hover:border-[#140C07] text-[#140C07] transition-all flex items-center justify-center cursor-pointer shadow-xs active:scale-95"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 2. Desktop Grid (Wide Screen 3-Column Prestigious Display) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-10 sm:mb-14">
          {REVIEWS.map((review, idx) => (
            <Reveal
              key={review.id}
              effect="up"
              delay={idx * 140}
              duration={750}
              className="h-full"
            >
              <article
                className="h-full bg-white rounded-2xl p-7 lg:p-8 border border-[#E8DFD5] shadow-xs hover:shadow-xl hover:border-[#B88B58]/40 hover:-translate-y-1.5 transition-all duration-500 ease-out flex flex-col justify-between group"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div
                      className={`w-11 h-11 rounded-full ${review.avatarColor} text-[#FAF7F2] font-serif font-bold flex items-center justify-center text-sm shadow-xs`}
                    >
                      {review.initials}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-serif font-bold text-[#140C07] text-base leading-tight group-hover:text-[#B88B58] transition-colors">
                        {review.name}
                      </h3>
                      <span className="text-xs text-[#8A7C72] block mt-0.5 font-medium">
                        {review.role}
                      </span>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[#FAF7F2] text-[#B88B58] border border-[#E8DFD5] font-black flex items-center justify-center text-xs">
                      G
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex text-[#B88B58] mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#B88B58]" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="font-serif text-sm text-[#4A3C32] leading-relaxed italic mb-6">
                    "{review.comment}"
                  </p>
                </div>

                {/* Date */}
                <div className="flex items-center gap-1.5 text-xs text-[#8A7C72] pt-4 border-t border-[#F3EDE4]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#B88B58]" />
                  <span>Verified London Patron • {review.date}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Google Score Summary Bar */}
        <Reveal effect="zoom" delay={200}>
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DFD5] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-[#B88B58]/40 transition-colors">
            <div className="flex items-center gap-5 text-center sm:text-left">
              <span className="font-serif font-extrabold text-4xl sm:text-5xl text-[#140C07]">
                4.9
              </span>
              <div>
                <div className="flex justify-center sm:justify-start text-[#B88B58]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B88B58]" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-[#6E6259] font-medium mt-1 block">
                  Ranked Exceptional across 820+ verified Google Reviews
                </span>
              </div>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-btn px-7 py-3.5 rounded-xl border border-[#140C07] text-[#140C07] hover:bg-[#140C07] hover:text-[#FAF7F2] text-xs uppercase tracking-widest font-bold transition-all duration-300"
            >
              Leave a Google Review
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
