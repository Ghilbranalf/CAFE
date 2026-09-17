import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { REVIEWS } from '../data/reviewsData';
import Reveal from './Reveal';

export default function Reviews() {
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

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 mb-10 sm:mb-14">
          {REVIEWS.map((review, idx) => (
            <Reveal
              key={review.id}
              effect="up"
              delay={idx * 140}
              duration={750}
              className="h-full"
            >
              <article
                className="h-full bg-white rounded-2xl p-6 sm:p-7 lg:p-8 border border-[#E8DFD5] shadow-xs hover:shadow-xl hover:border-[#B88B58]/40 hover:-translate-y-1.5 sm:hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col justify-between group"
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
              Leave a Google Review ⭐
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
