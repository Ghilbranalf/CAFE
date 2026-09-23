import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [storeStatus, setStoreStatus] = useState({
    isOpen: true,
    text: 'Welcoming Guests Until 22:30 GMT',
  });

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      // Calculate authentic London time (GMT / BST)
      const londonParts = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/London',
        hour: 'numeric',
        minute: 'numeric',
        weekday: 'short',
        hour12: false,
      }).formatToParts(now);

      const hourPart = parseInt(londonParts.find((p) => p.type === 'hour')?.value || '0', 10);
      const minutePart = parseInt(londonParts.find((p) => p.type === 'minute')?.value || '0', 10);
      const weekdayStr = londonParts.find((p) => p.type === 'weekday')?.value || '';

      const currentHour = hourPart + minutePart / 60;
      const isWeekend = weekdayStr === 'Fri' || weekdayStr === 'Sat';
      const isSunday = weekdayStr === 'Sun';

      let openHour = 7.5;
      let closeHour = 22.5;

      if (isWeekend) {
        closeHour = 23.0; // Friday & Saturday open until 23:00 London Time
      } else if (isSunday) {
        openHour = 8.0; // Sunday opens at 08:00 London Time
      }

      if (currentHour >= openHour && currentHour < closeHour) {
        const closeFormatted = isWeekend ? '23:00' : '22:30';
        setStoreStatus({
          isOpen: true,
          text: `Welcoming Guests Until ${closeFormatted} London Time`,
        });
      } else {
        const openFormatted = isSunday ? '08:00' : '07:30';
        setStoreStatus({
          isOpen: false,
          text: `Coffee House Resting • Doors Open ${openFormatted} London Time`,
        });
      }
    };

    checkStatus();

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape key & manage scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'The Craft', href: '#craft' },
    { label: 'Menu', href: '#menu' },
    { label: 'The Parlour', href: '#parlour' },
    { label: 'Atmosphere', href: '#gallery' },
    { label: 'Journal', href: '#reviews' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <>
      {/* Editorial Announcement Ribbon (Minimal & Classical) */}
      <aside className="bg-[#140C07] text-[#D8C7B8] text-[10px] sm:text-[11px] py-2 sm:py-2.5 border-b border-[#B88B58]/20 tracking-[0.14em] sm:tracking-[0.18em] uppercase select-none font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Mobile & iPad (Tablet) View: Single Pristine Line Only */}
          <div className="xl:hidden flex items-center justify-center text-center">
            <a
              href="#location"
              className="text-[#B88B58] hover:text-[#FAF7F2] font-semibold tracking-[0.18em] sm:tracking-[0.22em] transition-colors whitespace-nowrap"
            >
              No. 42 Mount Street, Mayfair
            </a>
          </div>

          {/* Desktop View (xl+): Full Editorial Status in 1 Single Unbroken Line */}
          <div className="hidden xl:flex items-center justify-between gap-6 w-full whitespace-nowrap">
            {/* Location & Real-Time London Status */}
            <div className="flex items-center gap-3">
              <span className="text-[#B88B58] font-semibold tracking-[0.16em]">
                No. 42 Mount Street, Mayfair
              </span>
              <span className="text-[#B88B58]/40">|</span>
              <span className="flex items-center gap-2 text-[#FAF7F2]/90 tracking-[0.12em]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B88B58] animate-pulse"></span>
                <span>{storeStatus.text}</span>
              </span>
            </div>

            {/* Concierge & Walk-In Link */}
            <div className="flex items-center gap-6 text-[10px] text-[#B88B58]">
              <span className="tracking-[0.2em] text-[#C4B3A3]">
                Walk-Ins Welcomed Daily
              </span>
              <a
                href="#location"
                className="text-[#FAF7F2] hover:text-[#B88B58] transition-colors flex items-center gap-1 font-semibold tracking-[0.14em]"
              >
                <span>Visit Us • Mayfair W1</span>
                <ArrowUpRight className="w-3 h-3 text-[#B88B58]" />
              </a>
            </div>
          </div>

        </div>
      </aside>

      {/* Main Luxury Navigation Bar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E8DFD5]'
            : 'bg-[#FAF7F2] border-b border-[#E8DFD5]/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 lg:h-24 flex items-center justify-between gap-6 xl:gap-8">
          
          {/* Bespoke Heritage Brand Crest & Wordmark */}
          <a href="#hero" className="flex items-center gap-2 sm:gap-3.5 group shrink-0">
            {/* Custom Monogram Seal */}
            <div className="w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full border border-[#B88B58] bg-[#140C07] text-[#B88B58] flex items-center justify-center shrink-0 shadow-sm relative group-hover:border-[#FAF7F2] transition-colors">
              <svg viewBox="0 0 100 100" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 fill-current">
                {/* Decorative outer ring */}
                <circle cx="50" cy="50" r="46" fill="none" stroke="#B88B58" strokeWidth="1.5" strokeDasharray="2 3" />
                <circle cx="50" cy="50" r="41" fill="none" stroke="#B88B58" strokeWidth="1" />
                {/* Intertwined Monogram H & R */}
                <text
                  x="50"
                  y="57"
                  textAnchor="middle"
                  fontFamily="'Playfair Display', Georgia, serif"
                  fontSize="32"
                  fontWeight="600"
                  fontStyle="italic"
                  fill="#FAF7F2"
                >
                  H<tspan fill="#B88B58" fontSize="24" dy="-4">{"&"}</tspan><tspan fill="#FAF7F2" fontSize="32" dy="4">R</tspan>
                </text>
              </svg>
            </div>

            {/* Typography */}
            <div className="flex flex-col">
              <span className="font-serif font-bold text-[13px] xs:text-sm sm:text-base xl:text-lg 2xl:text-xl tracking-[0.06em] xs:tracking-[0.08em] sm:tracking-[0.12em] text-[#140C07] uppercase leading-tight group-hover:text-[#B88B58] transition-colors whitespace-nowrap">
                The Heritage {"&"} Roast
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Large Desktop xl+ Only) */}
          <nav className="hidden xl:flex items-center gap-5 xl:gap-6 2xl:gap-8 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] 2xl:text-xs font-semibold uppercase tracking-[0.16em] 2xl:tracking-[0.2em] text-[#6E6259] hover:text-[#140C07] transition-colors relative py-1 whitespace-nowrap after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#B88B58] after:transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Bespoke Table Booking CTA & Hamburger */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Desktop Only Reservation Button (xl+ only) */}
            <div className="hidden xl:block">
              <MagneticButton
                href="#reservation"
                strength={0.22}
                className="shimmer-btn inline-flex items-center gap-2 px-5 py-2.5 2xl:px-6 2xl:py-3 bg-[#140C07] hover:bg-[#2A1C14] text-[#FAF7F2] text-[10px] 2xl:text-[11px] font-bold uppercase tracking-[0.18em] 2xl:tracking-[0.2em] border border-[#B88B58]/50 shadow-xs hover:shadow-md transition-all hover:border-[#B88B58] group cursor-pointer rounded-xl whitespace-nowrap"
              >
                <span>Reserve a Table</span>
                <span className="text-[#B88B58] group-hover:translate-x-1 transition-transform duration-300">→</span>
              </MagneticButton>
            </div>

            {/* Mobile / Tablet (Mini & Plus) Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2.5 rounded-xl border border-[#E8DFD5] text-[#140C07] hover:bg-[#F3EDE4] transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Navigation Drawer with Overlay */}
        {isOpen && (
          <>
            {/* Backdrop overlay for touch click outside */}
            <div
              className="fixed inset-0 top-[110px] sm:top-[128px] bg-black/40 backdrop-blur-xs z-40 xl:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            
            <div className="xl:hidden relative z-50 bg-[#FAF7F2] border-b border-[#E8DFD5] px-6 py-8 shadow-2xl max-h-[calc(100vh-120px)] overflow-y-auto animate-in fade-in duration-200">
              <div className="max-w-md mx-auto flex flex-col gap-4 text-center">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xs font-semibold uppercase tracking-[0.22em] text-[#140C07] hover:text-[#B88B58] py-2.5 border-b border-[#E8DFD5]/40 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#reservation"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 py-3.5 px-6 rounded-xl bg-[#140C07] text-[#FAF7F2] text-xs uppercase tracking-[0.22em] font-bold border border-[#B88B58]/40 shadow-sm hover:bg-[#2A1C14] transition-colors"
                >
                  Reserve a Table →
                </a>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}
