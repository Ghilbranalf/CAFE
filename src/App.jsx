import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Values from './components/Values';
import MenuSection from './components/MenuSection';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import ReservationForm from './components/ReservationForm';
import FaqSection from './components/FaqSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import WaveDivider from './components/WaveDivider';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1F1915] overflow-x-hidden">
      {/* 1. Top Header & Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* ==============================================================
            SECTION 1: HERO (LIGHT THEME)
            Cream / Linen Background with Dark Espresso & Brass Text
           ============================================================== */}
        <Hero />

        {/* 🌊 Wave transition: Light Hero -> Dark The Craft */}
        <WaveDivider fill="#140C07" flipX={false} />

        {/* ==============================================================
            SECTION 2: THE CRAFT & PHILOSOPHY (DARK THEME)
            Deep Heritage Espresso with Ivory / Gilded Text
           ============================================================== */}
        <Values />

        {/* 🌊 Wave transition: Dark The Craft -> Light Menu */}
        <WaveDivider fill="#FAF7F2" flipX={true} />

        {/* ==============================================================
            SECTION 3: CURATED SPECIALITY MENU (LIGHT THEME)
            Linen Background with Dark Text & Light Menu Cards
           ============================================================== */}
        <MenuSection />

        {/* 🌊 Wave transition: Light Menu -> Dark Parlour & Facilities */}
        <WaveDivider fill="#160E08" flipX={false} />

        {/* ==============================================================
            SECTION 4: THE PARLOUR & AMENITIES (DARK THEME)
            Deep Roast Espresso with Ivory Text & Brass Accents
           ============================================================== */}
        <Facilities />

        {/* 🌊 Wave transition: Dark Parlour -> Light Gallery & Reviews */}
        <WaveDivider fill="#FAF7F2" flipX={true} />

        {/* ==============================================================
            SECTION 5: ATMOSPHERE & GUEST JOURNAL (LIGHT THEME)
            Linen Background with Dark Editorial Typography
           ============================================================== */}
        <Gallery />
        <Reviews />

        {/* 🌊 Wave transition: Light Reviews -> Dark Table Reservation */}
        <WaveDivider fill="#140C07" flipX={false} />

        {/* ==============================================================
            SECTION 6: TABLE RESERVATION & ENQUIRIES (DARK THEME)
            Deep Espresso Background with High-Contrast Luxury Booking Form
           ============================================================== */}
        <ReservationForm />

        {/* 🌊 Wave transition: Dark Reservation -> Light FAQ & Location */}
        <WaveDivider fill="#FAF7F2" flipX={true} />

        {/* ==============================================================
            SECTION 7: FAQ & MAYFAIR LOCATION (LIGHT THEME)
            Linen Background with Dark Accordion & Interactive Map
           ============================================================== */}
        <FaqSection />
        <LocationSection />

        {/* 🌊 Wave transition: Light Location -> Dark Footer */}
        <WaveDivider fill="#140C07" flipX={false} />
      </main>

      {/* ==============================================================
          SECTION 8: FOOTER (DARK THEME)
          Heritage Obsidian Dark with Gold & Linen Text
         ============================================================== */}
      <Footer />
    </div>
  );
}
