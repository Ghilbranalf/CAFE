# ☕ The Heritage & Roast — Mayfair, London
### *Artisan Speciality Coffee Roastery & Modern Classic Parlour*

An editorial, luxury modern-classic landing page designed for British & international patrons. Built with **React 19**, **Vite 6**, **Tailwind CSS v4**, and **Lucide Icons**.

---

## 🏛️ Modern Classic Aesthetic & British Craftsmanship

- 👑 **Editorial Typography & Palette:** Cormorant Garamond & Playfair Display typography paired with deep roasted espresso (`#140C07`), antique gilded brass (`#B88B58`), and warm linen cream (`#FAF7F2`).
- 🇬🇧 **British & International Localization:**
  - British Sterling pricing (`£3.90` – `£12.80`).
  - London Mayfair heritage setting (*42 Mount Street, Mayfair, London W1K 2RN*).
  - Authentic British coffee culture: *SCA 87+ micro-lots, hand-laminated French Viennoiserie, Geisha pour-overs, and oat milk without surcharge*.
- 🛎️ **Digital Concierge & Table Reservations:**
  - **In-Page Table Reservation System:** Dedicated booking ledger generating instant guest confirmation cards with unique booking reference codes (Party size, Date, Time, Setting preference, and Dietary notes).
  - **Menu Presentation:** Interactive tasting guide for each single-origin coffee, tea, and artisanal viennoiserie offering.
  - **Live Opening Status:** Real-time indicator calibrated to GMT (`🟢 Welcoming Guests • Open until 22:30 GMT` vs `🔴 Salon Resting`).
- 💼 **Sanctuary for Focus & Remote Work:**
  - Dedicated 150 Mbps commercial fibre broadband.
  - Discreet recessed brass power sockets and USB-C ports at every solid oak and marble table.
  - Calm acoustic zoning with curated vinyl jazz.
- 🐾 **Politely Dog-Friendly:** Warmly welcomes well-behaved companions in both the main salon and heated Victorian courtyard.
- 🏛️ **The Private Parlour:** Dedicated booking showcase for board meetings, private dining, and tasting flights.

---

## 📁 Project Architecture

```text
D:\PROJECT\CAFE\
├── index.html                   # High-fashion editorial typography & metadata
├── package.json                 # React 19, Tailwind CSS v4, Lucide Icons
├── vite.config.js               # Optimized Vite bundling
├── src/
│   ├── main.jsx                 # React root
│   ├── App.jsx                  # Main page flow
│   ├── index.css                # Tailwind CSS v4 tokens & serif classes
│   ├── data/
│   │   ├── menuData.js          # Speciality items, notes, prices (£), and images
│   │   ├── reviewsData.js       # Authentic London guest reviews
│   │   ├── facilitiesData.js    # Salon amenities & boardroom hire
│   │   └── faqData.js           # FAQ regarding remote work, dietary, & dogs
│   └── components/
│       ├── Navbar.jsx           # Heritage ribbon, live status, & mobile menu
│       ├── Hero.jsx             # Editorial headline, metrics, & imagery
│       ├── Values.jsx           # Philosophy of craft & single origin
│       ├── MenuSection.jsx      # Filterable menu with in-salon tasting CTAs
│       ├── Facilities.jsx       # Amenities & Private Parlour booking
│       ├── Gallery.jsx          # Salon atmosphere & courtyard photography
│       ├── Reviews.jsx          # 4.9★ Google guest reviews
│       ├── ReservationForm.jsx  # Table booking form with instant digital confirmation
│       ├── FaqSection.jsx       # Accordion FAQ
│       ├── LocationSection.jsx  # Mayfair map & transit instructions
│       └── Footer.jsx           # Legal, VAT, and company details
```

---

## 🛠️ How to Run

### 1. Local Development:
```bash
npm run dev
```
Open **`http://localhost:5173`** in your browser.

### 2. Production Build:
```bash
npm run build
```
Optimized static files will be produced in the `dist/` directory, ready for deployment on Vercel, Netlify, or any high-performance host.
