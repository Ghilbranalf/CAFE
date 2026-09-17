import React, { useState } from 'react';
import { Send, Phone, Clock, ShieldCheck, HeartHandshake, CheckCircle2, RotateCcw } from 'lucide-react';
import Reveal from './Reveal';

export default function ReservationForm() {
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2 Guests (Conversation / Meeting)',
    date: today,
    time: '14:30',
    seating: 'Main Coffee Lounge (Quiet & Plugs)',
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
      guests: '2 Guests (Conversation / Meeting)',
      date: today,
      time: '14:30',
      seating: 'Main Coffee Lounge (Quiet & Plugs)',
      notes: '',
    });
  };

  return (
    <section id="reservation" className="py-20 md:py-28 bg-[#140C07] text-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Narrative Text (Dark Theme) */}
          <Reveal effect="right" className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88B58] block mb-2.5">
              Guest Bookings
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white mb-4">
              Reserve Your Table in Advance
            </h2>
            <p className="font-sans text-base text-[#D4C7BC] leading-relaxed mb-8 font-light">
              We warmly recommend securing your preferred seating for afternoon tea, breakfast meetings, or weekend brunch. Regular table bookings are entirely complimentary with zero minimum spend.
            </p>

            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-3.5 group">
                <div className="w-9 h-9 rounded-full bg-[#2A1C14] border border-[#B88B58]/40 text-[#B88B58] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#B88B58] group-hover:text-[#140C07] transition-all duration-300">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-white">Prompt Table Preparation</h4>
                  <p className="text-xs text-[#C8B6A6] font-light">Our maître d' registers your arrival time and prepares your curated seating.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 group">
                <div className="w-9 h-9 rounded-full bg-[#2A1C14] border border-[#B88B58]/40 text-[#B88B58] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#B88B58] group-hover:text-[#140C07] transition-all duration-300">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-white">Complimentary Regular Bookings</h4>
                  <p className="text-xs text-[#C8B6A6] font-light">No deposit required for parties up to 8 guests in our main lounge.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 group">
                <div className="w-9 h-9 rounded-full bg-[#2A1C14] border border-[#B88B58]/40 text-[#B88B58] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#B88B58] group-hover:text-[#140C07] transition-all duration-300">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-white">15-Minute Courtesy Hold</h4>
                  <p className="text-xs text-[#C8B6A6] font-light">Your table is attentively preserved for 15 minutes past arrival time.</p>
                </div>
              </div>
            </div>

            {/* Direct Telephone Concierge */}
            <div className="bg-[#1F140D] rounded-2xl p-6 border border-[#B88B58]/30 flex items-center gap-4 shadow-xl hover:border-[#B88B58]/70 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#2A1C14] border border-[#B88B58]/40 text-[#B88B58] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[#C8B6A6] block font-light">Prefer telephone assistance or parties &gt; 8?</span>
                <a
                  href="tel:+442079460912"
                  className="font-serif text-lg font-bold text-white hover:text-[#B88B58] transition-colors"
                >
                  +44 (0) 20 7946 0912
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right Form Card (High Contrast White & Dark Classic) */}
          <Reveal effect="left" delay={150} className="lg:col-span-7">
            <div className="bg-white text-[#140C07] rounded-3xl p-8 sm:p-12 border border-[#E8DFD5] shadow-2xl">
              
              {!isSubmitted ? (
                <>
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#140C07] mb-2">
                    Table Reservation Request
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#6E6259] mb-8 font-light">
                    Kindly complete your details below to place your booking directly with our front desk.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#140C07] mb-2">
                        Full Name <span className="text-[#B88B58]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Lord Alexander Hastings / Lady Eleanor Vance / Mr James Sterling"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-[#E8DFD5] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:border-[#140C07] focus:ring-2 focus:ring-[#B88B58]/20 transition-all font-sans"
                      />
                    </div>

                    {/* Phone & Party */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#140C07] mb-2">
                          Contact Telephone (UK / International) <span className="text-[#B88B58]">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="e.g. 020 7946 0912 or 07700 900077"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-[#E8DFD5] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:border-[#140C07] focus:ring-2 focus:ring-[#B88B58]/20 transition-all font-sans"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#140C07] mb-2">
                          Party Size <span className="text-[#B88B58]">*</span>
                        </label>
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-[#E8DFD5] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:border-[#140C07] focus:ring-2 focus:ring-[#B88B58]/20 transition-all font-sans"
                        >
                          <option value="1 Guest (Quiet Work / Reading)">1 Guest (Quiet Work / Reading)</option>
                          <option value="2 Guests (Conversation / Meeting)">2 Guests (Conversation / Meeting)</option>
                          <option value="3 - 4 Guests (Small Gathering)">3 - 4 Guests (Small Gathering)</option>
                          <option value="5 - 8 Guests (Group Brunch)">5 - 8 Guests (Group Brunch)</option>
                          <option value="9+ Guests (Private Parlour Hire)">9+ Guests (Private Parlour Hire)</option>
                        </select>
                      </div>
                    </div>

                    {/* Date & Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#140C07] mb-2">
                          Date of Visit <span className="text-[#B88B58]">*</span>
                        </label>
                        <input
                          type="date"
                          name="date"
                          min={today}
                          required
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-[#E8DFD5] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:border-[#140C07] focus:ring-2 focus:ring-[#B88B58]/20 transition-all font-sans"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#140C07] mb-2">
                          Preferred Time <span className="text-[#B88B58]">*</span>
                        </label>
                        <input
                          type="time"
                          name="time"
                          required
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-[#E8DFD5] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:border-[#140C07] focus:ring-2 focus:ring-[#B88B58]/20 transition-all font-sans"
                        />
                      </div>
                    </div>

                    {/* Seating preference */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#140C07] mb-2">
                        Seating Preference <span className="text-[#B88B58]">*</span>
                      </label>
                      <select
                        name="seating"
                        value={formData.seating}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-[#E8DFD5] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:border-[#140C07] focus:ring-2 focus:ring-[#B88B58]/20 transition-all font-sans"
                      >
                        <option value="Main Coffee Lounge (Quiet & Plugs)">
                          Main Coffee Lounge (Quiet Atmosphere &amp; Plugs)
                        </option>
                        <option value="Library Mezzanine (Window View)">
                          Library Mezzanine (Reading Armchairs &amp; Natural Light)
                        </option>
                        <option value="Heated Garden Veranda">
                          Heated Garden Veranda (Victorian Courtyard)
                        </option>
                        <option value="The Private Parlour Boardroom">
                          The Private Parlour Boardroom (Enclosed &amp; AV Setup)
                        </option>
                      </select>
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#140C07] mb-2">
                        Dietary Requirements or Special Requests
                      </label>
                      <textarea
                        name="notes"
                        rows="2"
                        placeholder="e.g. Gluten-free pastries requested, bringing well-behaved dog, anniversary celebration..."
                        value={formData.notes}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-[#E8DFD5] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:border-[#140C07] focus:ring-2 focus:ring-[#B88B58]/20 transition-all font-sans"
                      ></textarea>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="shimmer-btn w-full py-4 rounded-xl bg-[#140C07] hover:bg-[#2A1C14] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer border border-[#B88B58]/40 hover:-translate-y-0.5"
                    >
                      <Send className="w-3.5 h-3.5 text-[#B88B58]" />
                      <span>Confirm Table Reservation</span>
                    </button>

                    <p className="text-[11px] text-center text-[#8A7C72]">
                      🔒 Guest privacy guaranteed. Your booking is held with our Mount Street maître d'.
                    </p>
                  </form>
                </>
              ) : (
                /* Elegant Luxury In-Page Confirmation Card */
                <div className="py-6 text-center space-y-6 animate-entrance">
                  <div className="w-16 h-16 rounded-full bg-[#B88B58]/15 border border-[#B88B58] text-[#B88B58] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-[11px] font-mono tracking-widest text-[#B88B58] uppercase block mb-1">
                      Booking Reference: {bookingRef}
                    </span>
                    <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#140C07] mb-2">
                      Your Table is Reserved
                    </h3>
                    {(() => {
                      const formattedBookingDate = new Date(formData.date + 'T12:00:00Z').toLocaleDateString('en-GB', {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      });
                      return (
                        <p className="font-sans text-sm text-[#6E6259] max-w-md mx-auto leading-relaxed">
                          Thank you, <span className="font-semibold text-[#140C07]">{formData.name}</span>. We have secured your table for <span className="font-semibold text-[#140C07]">{formData.guests}</span> on <span className="font-semibold text-[#140C07]">{formattedBookingDate}</span> at <span className="font-semibold text-[#140C07]">{formData.time} London Time</span>.
                        </p>
                      );
                    })()}
                  </div>

                  <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#E8DFD5] text-left text-xs space-y-2.5 max-w-md mx-auto">
                    <div className="flex justify-between border-b border-[#E8DFD5] pb-2">
                      <span className="text-[#8C7A6B]">Seating Area:</span>
                      <span className="font-semibold text-[#140C07]">{formData.seating}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E8DFD5] pb-2">
                      <span className="text-[#8C7A6B]">Arrival Window:</span>
                      <span className="font-semibold text-[#140C07]">15-minute courtesy hold</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E8DFD5] pb-2">
                      <span className="text-[#8C7A6B]">Location:</span>
                      <span className="font-semibold text-[#140C07]">No. 42 Mount Street, Mayfair, London W1K 2RN</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8C7A6B]">Nearest Tube:</span>
                      <span className="font-semibold text-[#140C07]">Bond Street (Elizabeth &amp; Jubilee Lines)</span>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#140C07]/30 hover:border-[#140C07] text-xs font-semibold uppercase tracking-wider text-[#140C07] hover:bg-[#140C07] hover:text-[#FAF7F2] transition-all cursor-pointer shadow-xs"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Make Another Reservation</span>
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
