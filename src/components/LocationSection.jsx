import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import Reveal from './Reveal';

export default function LocationSection() {
  return (
    <section id="location" className="pt-10 sm:pt-12 pb-16 sm:pb-20 md:pt-16 md:pb-28 bg-[#FAF7F2] text-[#140C07] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal effect="up" className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88B58] block mb-2 sm:mb-2.5">
            The Destination
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-[#140C07] mb-3 sm:mb-4">
            Finding Our Mayfair Roastery
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#6E6259] font-light leading-relaxed">
            Nestled on historical Mount Street, moments from Grosvenor Square and Bond Street Station.
          </p>
        </Reveal>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Details Card */}
          <Reveal effect="right" className="lg:col-span-5 h-full">
            <div className="h-full bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E8DFD5] shadow-xs flex flex-col justify-between hover:border-[#B88B58]/30 transition-colors">
              <div className="space-y-6">
                
                {/* Address */}
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] text-[#B88B58] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#140C07] mb-1">
                      London Sanctuary Address
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-[#6E6259] leading-relaxed font-light">
                      42 Mount Street, Mayfair, London W1K 2RN, United Kingdom
                    </p>
                    <span className="text-xs text-[#B88B58] font-semibold mt-1 block">
                      4-minute walk from Bond Street Station (Elizabeth &amp; Jubilee Lines)
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] text-[#B88B58] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <h4 className="font-serif font-bold text-base text-[#140C07] mb-2">
                      Cafe &amp; Kitchen Hours
                    </h4>
                    <div className="space-y-1.5 text-xs sm:text-sm text-[#6E6259] font-sans font-light">
                      <div className="flex justify-between border-b border-[#F3EDE4] pb-1">
                        <span>Monday – Thursday:</span>
                        <strong className="text-[#140C07] font-semibold">07:30 – 22:30 GMT</strong>
                      </div>
                      <div className="flex justify-between border-b border-[#F3EDE4] pb-1">
                        <span>Friday – Saturday:</span>
                        <strong className="text-[#140C07] font-semibold">07:30 – 23:00 GMT</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <strong className="text-[#140C07] font-semibold">08:00 – 22:30 GMT</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact & Socials */}
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] text-[#B88B58] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#140C07] mb-1">
                      Concierge &amp; Enquiries
                    </h4>
                    <div className="text-xs sm:text-sm text-[#6E6259] space-y-1 font-sans font-light">
                      <p>
                        Telephone: <a href="tel:+442079460912" className="font-bold text-[#140C07] hover:underline">+44 (0) 20 7946 0912</a>
                      </p>
                      <p>
                        Email: <a href="mailto:concierge@heritageandroast.co.uk" className="text-[#B88B58] font-medium hover:underline">concierge@heritageandroast.co.uk</a>
                      </p>
                      <p>
                        Instagram: <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[#B88B58] hover:underline">@theheritageandroast</a>
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Google Maps Button */}
              <div className="pt-8 mt-6 border-t border-[#F3EDE4]">
                <a
                  href="https://maps.google.com/?q=Mount+Street+Mayfair+London"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-btn w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#140C07] hover:bg-[#2A1C14] text-[#FAF7F2] text-xs uppercase tracking-widest font-bold shadow-md hover:shadow-lg transition-all duration-300 border border-[#B88B58]/40"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#B88B58]" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right Map Iframe */}
          <Reveal effect="left" delay={150} className="lg:col-span-7 h-full">
            <div className="h-full bg-white rounded-3xl overflow-hidden border border-[#E8DFD5] shadow-sm flex flex-col min-h-[340px] sm:min-h-[400px]">
              <div className="w-full h-72 sm:h-96 lg:h-full min-h-[300px] sm:min-h-[380px]">
                <iframe
                  title="The Heritage and Roast Mayfair London Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2384725350756!2d-0.15426172338023027!3d51.50974861058288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876052dc9359c19%3A0xe54b9d038222955f!2sMount%20St%2C%20London%20W1K%2C%20UK!5e0!3m2!1sen!2suk!4v1715000000000!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="p-3.5 sm:p-4 bg-white border-t border-[#E8DFD5] text-center text-xs font-serif font-medium text-[#6E6259]">
                Valet Parking Available on Request • Secure Bicycle Stands in Courtyard
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
