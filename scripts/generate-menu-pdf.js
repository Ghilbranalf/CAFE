import fs from 'fs';
import PDFDocument from 'pdfkit';

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 36, bottom: 36, left: 40, right: 40 },
  autoFirstPage: true,
});

const stream = fs.createWriteStream('public/menu.pdf');
doc.pipe(stream);

// Colors
const BG_COLOR = '#FAF7F2';
const DARK_ESPRESSO = '#140C07';
const BRASS_GOLD = '#B88B58';
const TEXT_MUTED = '#5A4E45';
const LINE_COLOR = '#E4DACF';

// Background
doc.rect(0, 0, doc.page.width, doc.page.height).fill(BG_COLOR);

// Decorative border
doc.rect(20, 20, doc.page.width - 40, doc.page.height - 40)
   .lineWidth(1)
   .stroke(BRASS_GOLD);

doc.rect(23, 23, doc.page.width - 46, doc.page.height - 46)
   .lineWidth(0.5)
   .dash(3, { space: 2 })
   .stroke(BRASS_GOLD);
doc.undash();

// Header
doc.fillColor(BRASS_GOLD)
   .fontSize(9)
   .font('Helvetica-Bold')
   .text('MAYFAIR MICRO-ROASTERY • LONDON W1K', 40, 38, { align: 'center', characterSpacing: 2 });

doc.moveDown(0.3);
doc.fillColor(DARK_ESPRESSO)
   .fontSize(22)
   .font('Times-Bold')
   .text('THE HERITAGE & ROAST', { align: 'center', characterSpacing: 1.5 });

doc.moveDown(0.2);
doc.fillColor(TEXT_MUTED)
   .fontSize(8.5)
   .font('Helvetica')
   .text('Speciality Coffee Roastery, Hand-Laminated Viennoiserie & All-Day Dining', { align: 'center' });

doc.moveDown(0.2);
doc.fillColor(BRASS_GOLD)
   .fontSize(8)
   .font('Helvetica-Oblique')
   .text('No. 42 Mount Street, Mayfair, London W1K 2RN • Welcoming Guests Daily', { align: 'center' });

// Horizontal separator
doc.moveTo(60, doc.y + 6).lineTo(doc.page.width - 60, doc.y + 6).lineWidth(0.75).stroke(LINE_COLOR);

let currentY = doc.y + 16;

function drawSectionHeader(title, y) {
  doc.rect(45, y, doc.page.width - 90, 18).fill('#140C07');
  doc.fillColor('#FAF7F2')
     .font('Times-Bold')
     .fontSize(10)
     .text(title.toUpperCase(), 45, y + 4, { align: 'center', characterSpacing: 1.5 });
  return y + 26;
}

function drawMenuItem(name, price, desc, tags, x, y, width) {
  doc.fillColor(DARK_ESPRESSO)
     .font('Times-Bold')
     .fontSize(10)
     .text(name, x, y);

  const priceWidth = 45;
  doc.fillColor(BRASS_GOLD)
     .font('Times-Bold')
     .fontSize(10)
     .text(price, x + width - priceWidth, y, { width: priceWidth, align: 'right' });

  doc.fillColor(TEXT_MUTED)
     .font('Helvetica')
     .fontSize(7.5)
     .text(desc, x, y + 13, { width: width - 10, lineGap: 1.5 });

  if (tags) {
    doc.fillColor(BRASS_GOLD)
       .font('Helvetica-Oblique')
       .fontSize(7)
       .text(tags, x, doc.y + 1, { width: width - 10 });
  }

  return doc.y + 7;
}

// 2 Columns Layout
const colWidth = (doc.page.width - 105) / 2;
const col1X = 45;
const col2X = col1X + colWidth + 15;

// Column 1: Espresso Bar & Single Origin
let leftY = drawSectionHeader('I. Espresso Bar & Signatures', currentY);

leftY = drawMenuItem(
  'The Heritage Flat White', '£4.20',
  'Double ristretto of seasonal blend with velvety micro-textured Guernsey milk.',
  'SCA 87+ Blend • Notes of rich cocoa & toasted hazelnut', col1X, leftY, colWidth
);

leftY = drawMenuItem(
  'Maldon Sea Salt Caramel Macchiato', '£4.80',
  'Double extraction over house-churned golden caramel and flaked Maldon sea salt.',
  'Available hot or over hand-carved ice', col1X, leftY, colWidth
);

leftY = drawMenuItem(
  'Seville Orange Sparkling Espresso', '£4.60',
  'Chilled double espresso charged over Fever-Tree tonic & cold-pressed citrus oil.',
  'Vibrant, crisp & botanical', col1X, leftY, colWidth
);

leftY = drawMenuItem(
  'Cortado Piccolo', '£3.80',
  'Equal parts intense ristretto and silky steamed textured milk in fluted glass.',
  'Bold & balanced extraction', col1X, leftY, colWidth
);

leftY += 6;
leftY = drawSectionHeader('II. Single-Origin Filter Brews', leftY);

leftY = drawMenuItem(
  'V60 Ethiopia Yirgacheffe G1', '£5.50',
  'Pure mineral water slow pour. White peach, bergamot & wild jasmine florals.',
  'Direct Trade Micro-Lot • Altitude 2,100m • Washed', col1X, leftY, colWidth
);

leftY = drawMenuItem(
  'V60 Colombia Geisha Reserve', '£6.80',
  'Prized botanical variety from Huila. Lemongrass, orange blossom & wildflower honey.',
  'SCA 90+ Score • Limited micro-harvest', col1X, leftY, colWidth
);

leftY = drawMenuItem(
  'Aeropress Kenya Nyeri Hill', '£5.20',
  'Blackcurrant vibrancy, grapefruit zest and sugarcane sweetness with clean finish.',
  'SL28 & SL34 Varietals • Fully Washed', col1X, leftY, colWidth
);

// Column 2: Viennoiserie, Kitchen & Botanical
let rightY = drawSectionHeader('III. Hand-Laminated Viennoiserie', currentY);

rightY = drawMenuItem(
  'AOP French Butter Croissant', '£3.90',
  'Slow-fermented for 72 hours with Charentes-Poitou AOP butter. Honeycombed interior.',
  'Baked fresh at 07:00 daily', col2X, rightY, colWidth
);

rightY = drawMenuItem(
  'Pistachio & Cardamom Cruffin', '£4.60',
  'Flaky cruffin filled with roasted Sicilian pistachio silk and spiced green cardamom.',
  "Baker's daily morning special", col2X, rightY, colWidth
);

rightY = drawMenuItem(
  'Valrhona Dark Chocolate Pain', '£4.20',
  'Double batons of 70% Guanaja Valrhona chocolate folded in layered golden pastry.',
  'Rich, buttery & decadent', col2X, rightY, colWidth
);

rightY += 6;
rightY = drawSectionHeader('IV. All-Day Kitchen & Savouries', rightY);

rightY = drawMenuItem(
  'Wild Woodland Mushroom Toast', '£11.50',
  'Pan-seared chanterelles on heritage sourdough, tarragon butter & poached Cacklebean egg.',
  'Vegetarian • Heritage grain sourdough', col2X, rightY, colWidth
);

rightY = drawMenuItem(
  'Scottish Smoked Salmon Tartine', '£12.80',
  'Loch Fyne oak-smoked salmon, dill ricotta, pickled cucumber & caperberries on seeded rye.',
  'Highland artisanal source', col2X, rightY, colWidth
);

rightY += 6;
rightY = drawSectionHeader('V. Botanical Teas & Infusions', rightY);

rightY = drawMenuItem(
  'Kyoto Uji Ceremonial Matcha', '£5.20',
  'First-harvest shade-grown green tea ground on granite stones in Uji, gently whisked.',
  'Silky Minor Figures oat milk pairing', col2X, rightY, colWidth
);

rightY = drawMenuItem(
  'Valrhona Single-Estate Cacao', '£4.90',
  '72% Venezuelan dark ganache steamed with Guernsey milk & Madagascan vanilla froth.',
  'Naturally gluten-free indulgence', col2X, rightY, colWidth
);

// Bottom Legal & Provenance Footer
const footerY = doc.page.height - 70;
doc.moveTo(45, footerY).lineTo(doc.page.width - 45, footerY).lineWidth(0.75).stroke(LINE_COLOR);

doc.fillColor(DARK_ESPRESSO)
   .font('Times-Bold')
   .fontSize(7.5)
   .text(
     'PROVENANCE & DIETARY HOSPITALITY',
     45, footerY + 6, { align: 'center', characterSpacing: 1 }
   );

doc.fillColor(TEXT_MUTED)
   .font('Helvetica')
   .fontSize(6.8)
   .text(
     'All prices are quoted in British Sterling (£) and inclusive of 20% UK VAT. A discretionary 12.5% service charge is added to table service.\n' +
     'Minor Figures Organic British Oat Milk is gladly served at zero surcharge. Swiss Water Process decaf available on all espresso drinks.\n' +
     "In compliance with Natasha's Law, our allergen register covers all 14 statutory allergens. Please notify our team of any severe intolerances.",
     45, footerY + 16, { align: 'center', lineGap: 2.2, width: doc.page.width - 90 }
   );

doc.end();

stream.on('finish', () => {
  console.log('PDF menu generated successfully at public/menu.pdf');
});
