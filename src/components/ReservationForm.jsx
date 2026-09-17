import React, { useState } from 'react';
import { Send, Clock, CheckCircle2, RotateCcw, Calendar, Users, Phone } from 'lucide-react';
import Reveal from './Reveal';

export default function ReservationForm() {
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2 Guests',
    date: today,
    time: '14:30',
    seating: 'Main Coffee Lounge',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    setBookingRef(`HR-${randomCode}`);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      guests: '2 Guests',
      date: today,
      time: '14:30',
      seating: 'Main Coffee Lounge',
      notes: '',
    });
  };

  return (
    <section id="reservation" className="py-20 md:py-24 bg-[#140C07] text-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Narrative Text (Clean, Elegant & Minimalist) */}
          <Reveal effect="right" className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88B58] block mb-2">
              Guest Bookings
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white mb-4 leading-tight">
              Reserve Your Table
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#D4C7BC] leading-relaxed mb-8 font-light">
              Complimentary table bookings for morning brews, business meetings, and leisurely afternoon tea. Walk-ins are always welcomed daily.
            </p>

            {/* Clean Feature Highlights */}
            <div className="space-y-4 mb-8 pt-6 border-t border-[#B88B58]/20">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B88B58]" />
                <span className="font-serif text-sm text-white font-semibold">Zero Deposit Required</span>
                <span className="text-xs text-[#A8988C] font-light">• Complimentary bookings</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B88B58]" />
                <span className="font-serif text-sm text-white font-semibold">15-Minute Courtesy Hold</span>
                <span className="text-xs text-[#A8988C] font-light">• Preserved for your arrival</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B88B58]" />
                <span className="font-serif text-sm text-white font-semibold">Instant Digital Voucher</span>
                <span className="text-xs text-[#A8988C] font-light">• Immediate reference ID</span>
              </div>
            </div>

            {/* Direct Telephone Concierge (Subtle & Uncluttered) */}
            <div className="flex items-center gap-3 text-xs text-[#C8B6A6] font-light">
              <Phone className="w-3.5 h-3.5 text-[#B88B58] shrink-0" />
              <span>
                Parties &gt; 8 guests? Call desk directly:{' '}
                <a href="tel:+442079460912" className="text-white hover:text-[#B88B58] font-medium transition-colors">
                  +44 (0) 20 7946 0912
                </a>
              </span>
            </div>
          </Reveal>

          {/* Right Form Card (Airy, Light & Sophisticated) */}
          <Reveal effect="left" delay={120} className="lg:col-span-7">
            <div className="bg-white text-[#140C07] rounded-3xl p-6 sm:p-10 border border-[#E8DFD5] shadow-xl">
              
              {!isSubmitted ? (
                <>
                  <div className="mb-6">
                    <h3 className="font-serif font-bold text-2xl text-[#140C07] mb-1">
                      Table Reservation
                    </h3>
                    <p className="font-sans text-xs text-[#7A6D63] font-light">
                      Please enter your details to register directly with our front desk.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#140C07] mb-1.5">
                        Full Name <span className="text-[#B88B58]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#E8DFD5] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:border-[#140C07] focus:ring-1 focus:ring-[#B88B58] transition-all font-sans"
                      />
                    </div>

                    {/* Phone & Guests */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-[#140C07] mb-1.5">
                          Phone Number <span className="text-[#B88B58]">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="020 7946 0912"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#E8DFD5] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:border-[#140C07] focus:ring-1 focus:ring-[#B88B58] transition-all font-sans"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-[#140C07] mb-1.5">
                          Party Size <span className="text-[#B88B58]">*</span>
                        </label>
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#E8DFD5] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:border-[#140C07] focus:ring-1 focus:ring-[#B88B58] transition-all font-sans"
                        >
                          <option value="1 Guest">1 Guest</option>
                          <option value="2 Guests">2 Guests</option>
                          <option value="3 – 4 Guests">3 – 4 Guests</option>
                          <option value="5 – 8 Guests">5 – 8 Guests</option>
                          <option value="9+ Guests (Private Parlour)">9+ Guests (Private Parlour)</option>
                        </select>
                      </div>
                    </div>

                    {/* Date & Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-[#140C07] mb-1.5">
                          Date <span className="text-[#B88B58]">*</span>
                        </label>
                        <input
                          type="date"
                          name="date"
                          min={today}
                          required
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#E8DFD5] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:border-[#140C07] focus:ring-1 focus:ring-[#B88B58] transition-all font-sans"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-[#140C07] mb-1.5">
                          Time <span className="text-[#B88B58]">*</span>
                        </label>
                        <input
                          type="time"
                          name="time"
                          required
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#E8DFD5] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:border-[#140C07] focus:ring-1 focus:ring-[#B88B58] transition-all font-sans"
                        />
                      </div>
                    </div>

                    {/* Seating preference */}
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#140C07] mb-1.5">
                        Preferred Seating Area
                      </label>
                      <select
                        name="seating"
                        value={formData.seating}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#E8DFD5] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:border-[#140C07] focus:ring-1 focus:ring-[#B88B58] transition-all font-sans"
                      >
                        <option value="Main Coffee Lounge">Main Coffee Lounge</option>
                        <option value="Library Mezzanine">Library Mezzanine</option>
                        <option value="Heated Courtyard Terrace">Heated Courtyard Terrace</option>
                        <option value="The Private Parlour">The Private Parlour</option>
                      </select>
                    </div>

                    {/* Special notes (Clean, compact 1-line input) */}
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#140C07] mb-1.5">
                        Special Requests <span className="text-[#8C7A6B] font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        name="notes"
                        placeholder="e.g. Bringing polite dog, window seat preferred"
                        value={formData.notes}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#E8DFD5] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:border-[#140C07] focus:ring-1 focus:ring-[#B88B58] transition-all font-sans"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="shimmer-btn w-full py-3.5 rounded-xl bg-[#140C07] hover:bg-[#B88B58] text-[#FAF7F2] text-xs uppercase tracking-widest font-bold shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Confirm Table Reservation</span>
                      </button>
                    </div>

                    <p className="text-[10px] text-center text-[#8A7C72] font-light">
                      Free cancellation. No deposit required.
                    </p>
                  </form>
                </>
              ) : (
                /* Confirmation Card */
                <div className="py-6 text-center space-y-5 animate-entrance">
                  <div className="w-14 h-14 rounded-full bg-[#B88B58]/15 border border-[#B88B58] text-[#B88B58] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <div>
                    <span className="text-[11px] font-mono tracking-widest text-[#B88B58] uppercase block mb-1">
                      Booking Ref: {bookingRef}
                    </span>
                    <h3 className="font-serif font-bold text-2xl text-[#140C07] mb-2">
                      Table Reserved Successfully
                    </h3>
                    {(() => {
                      const formattedBookingDate = new Date(formData.date + 'T12:00:00Z').toLocaleDateString('en-GB', {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      });
                      return (
                        <p className="font-sans text-xs sm:text-sm text-[#6E6259] max-w-sm mx-auto leading-relaxed font-light">
                          Thank you, <span className="font-semibold text-[#140C07]">{formData.name}</span>. We look forward to welcoming you for <span className="font-semibold text-[#140C07]">{formData.guests}</span> on <span className="font-semibold text-[#140C07]">{formattedBookingDate}</span> at <span className="font-semibold text-[#140C07]">{formData.time} London Time</span>.
                        </p>
                      );
                    })()}
                  </div>

                  <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E8DFD5] text-left text-xs space-y-2 max-w-sm mx-auto">
                    <div className="flex justify-between">
                      <span className="text-[#8C7A6B]">Seating:</span>
                      <span className="font-semibold text-[#140C07]">{formData.seating}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8C7A6B]">Arrival Hold:</span>
                      <span className="font-semibold text-[#140C07]">15 minutes courtesy hold</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8C7A6B]">Location:</span>
                      <span className="font-semibold text-[#140C07]">42 Mount St, Mayfair W1K</span>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#140C07]/20 hover:border-[#140C07] text-xs font-semibold uppercase tracking-wider text-[#140C07] hover:bg-[#140C07] hover:text-[#FAF7F2] transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Make Another Booking</span>
                  </button>
                </div>
              )}

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
