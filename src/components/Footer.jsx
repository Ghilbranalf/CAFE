import React from 'react';
import { Coffee, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#140C07] text-[#DFD5CB] pt-12 sm:pt-16 pb-10 sm:pb-12 border-t border-[#B88B58]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 pb-10 sm:pb-14 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border border-[#B88B58]/40 bg-[#2A1C14] text-[#FAF7F2] flex items-center justify-center">
                <Coffee className="w-5 h-5 text-[#B88B58]" />
              </div>
              <div>
                <span className="font-serif font-extrabold text-xl text-white tracking-wide block">
                  THE HERITAGE & ROAST
                </span>
                <span className="font-sans text-[9px] font-bold text-[#B88B58] tracking-[0.25em] uppercase block">
                  Artisan Roastery & Parlour • London
                </span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#A8988C] leading-relaxed max-w-sm mb-6">
              Dedicated to the timeless rituals of single-origin roasting, European pastry craftsmanship, and unhurried hospitality in the heart of Mayfair.
            </p>

            <div className="flex items-center gap-3 text-xs">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-[#B88B58] hover:text-[#140C07] font-semibold text-white transition-all shadow-xs"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-[#B88B58] hover:text-[#140C07] font-semibold text-white transition-all shadow-xs"
              >
                TikTok
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A8988C] font-sans">
              <li><a href="#hero" className="hover:text-[#B88B58] transition-colors">Our Story</a></li>
              <li><a href="#craft" className="hover:text-[#B88B58] transition-colors">The Roastery Craft</a></li>
              <li><a href="#menu" className="hover:text-[#B88B58] transition-colors">Curated Offerings</a></li>
              <li><a href="#parlour" className="hover:text-[#B88B58] transition-colors">The Parlour</a></li>
              <li><a href="#gallery" className="hover:text-[#B88B58] transition-colors">Atmosphere</a></li>
            </ul>
          </div>

          {/* Guest Services */}
          <div className="lg:col-span-2">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-4">
              Hospitality
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A8988C] font-sans">
              <li><a href="#reservation" className="hover:text-[#B88B58] transition-colors">Table Bookings</a></li>
              <li>
                <a
                  href="#reservation"
                  className="hover:text-[#B88B58] transition-colors"
                >
                  Private Parlour Hire
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="hover:text-[#B88B58] transition-colors"
                >
                  Single-Origin Lots
                </a>
              </li>
              <li><a href="#faq" className="hover:text-[#B88B58] transition-colors">Enquiries &amp; FAQ</a></li>
              <li><a href="#location" className="hover:text-[#B88B58] transition-colors">Find Our Cafe</a></li>
            </ul>
          </div>

          {/* Opening Times & Provenance */}
          <div className="lg:col-span-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-4">
              Cafe Service Hours
            </h4>
            <div className="text-xs text-[#A8988C] space-y-1 mb-4 font-sans">
              <p>Monday – Thursday: 07:30 – 22:30 GMT</p>
              <p>Friday – Saturday: 07:30 – 23:00 GMT</p>
              <p>Sunday Brunch: 08:00 – 22:30 GMT</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-[#D6C7BC] font-serif">
              <strong>100% SCA Speciality Grade</strong> • Minor Figures Organic Oat Milk Complimentary
            </div>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8A7C72] font-sans border-t border-white/5 mt-8">
          <div className="space-y-1 text-center md:text-left">
            <p>© 2026 The Heritage &amp; Roast Ltd. Registered in England &amp; Wales (Company No. 11849201).</p>
            <p className="text-[11px] text-[#6E6056]">
              Registered Office: 42 Mount Street, Mayfair, London W1K 2RN • VAT Reg: GB 348 9102 44 • All prices in GBP (£) inclusive of 20% UK VAT.
            </p>
          </div>
          <div className="flex items-center gap-1.5 shrink-0 text-center md:text-right">
            <span>Crafted with devotion for connoisseurs of fine coffee in London</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
