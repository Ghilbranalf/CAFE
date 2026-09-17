import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/faqData';
import Reveal from './Reveal';

export default function FaqSection() {
  const [openId, setOpenId] = useState(1);

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="pt-20 md:pt-28 pb-12 bg-[#FAF7F2] text-[#140C07] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal effect="up" className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88B58] block mb-2.5">
            Frequently Asked Enquiries
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#140C07] mb-4">
            Guest Etiquette &amp; Practical Notes
          </h2>
          <p className="font-sans text-base text-[#6E6259] font-light leading-relaxed">
            Everything you need to know regarding our cafe hospitality, remote working, and dietary offerings.
          </p>
        </Reveal>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <Reveal key={faq.id} effect="up" delay={idx * 70} duration={600}>
                <div
                  className={`bg-white rounded-2xl border transition-all duration-300 shadow-xs overflow-hidden ${
                    isOpen ? 'border-[#B88B58]/60 shadow-md' : 'border-[#E8DFD5] hover:border-[#140C07]/20'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full px-6 sm:px-8 py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF7F2]/60 transition-colors"
                  >
                    <span className="font-serif font-bold text-base sm:text-lg text-[#140C07]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#B88B58] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#140C07]' : ''
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 sm:px-8 pb-6 pt-2 border-t border-[#F3EDE4] font-sans text-xs sm:text-sm text-[#6E6259] leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
