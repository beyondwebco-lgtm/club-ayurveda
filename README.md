# Club Aayurveda — Official Website

A luxury, editorial-grade modern Ayurvedic wellness website created for **CLUB AAYURVEDA** featuring lead physician **Dr. Sayali M. Deshmukh** (BAMS, PGDCC, Ayurvedic Physician, Clinical Cosmetologist, Skin & Hair Specialist) and signature formulation **Shata Dhauta Ghrita**.

---

## 🌿 Brand & Visual Direction

- **Brand Name:** Club Aayurveda
- **Palette:** Warm Ivory (`#FAF8F5`, `#F3EFEA`), Deep Charcoal (`#1D2320`), Restrained Gold Accents (`#C5A059`, `#D8B268`), and Botanical Green with subtle lime leaf touches (`#789938`).
- **Typography:** Editorial Serif (*Cormorant Garamond*) + Modern Geometric Sans (*Plus Jakarta Sans*).
- **Core Product:** **Shata Dhauta Ghrita** (100 times washed pure ghee moisturizer prepared in copper vessels, 30 g, ₹699).

---

## 🏛️ Website Pages

1. **Home (`index.html`)**
   - High-impact luxury hero section with genuine product campaign photography.
   - Dual primary/secondary conversion paths (*Shop Shata Dhauta Ghrita* & *Book Consultation*).
   - Brand philosophy: *"A more personalised approach to Ayurveda"*.
   - Doctor introduction card featuring **Dr. Sayali M. Deshmukh** (BAMS, PGDCC, Ayurvedic Physician, Clinical Cosmetologist, Skin & Hair Specialist).
   - 5 Interactive Clinical Treatment Area Cards.
   - Featured Product spotlight with key benefits and fast cart trigger.
   - 4 Pillars of Club Aayurveda & Verified Client Testimonials.

2. **Treatments (`treatments.html`)**
   - 5 anchored editorial sections with large visual media, common concerns, and doctor-guided approach:
     1. Skin & Hair Care
     2. Digestive Disorders & Agni Balance
     3. Liver & Kidney Related Support (with medical coordination notice)
     4. Diet & Weight Management
     5. PCOD & PCOS Consultation
   - Context-aware consultation booking modal triggers that auto-select the chosen concern.

3. **Shata Dhauta Ghrita (`product.html`)**
   - 5-angle interactive product photography gallery.
   - Official product details (30 g, ₹699) and quantity selector.
   - **Add to Cart**, **Instant Buy Now**, and **WhatsApp Enquiry** buttons.
   - In-depth interactive accordions covering:
     - What is Shata Dhauta Ghrita? (100x copper wash process)
     - Key Ritual Benefits & Pitta-soothing action
     - How to Use / Evening Skincare Ritual
     - Pure Ingredients (Ghee, Purified Water, Copper trace elements)
     - Patch Test, Storage & Warnings
     - Artisanal Batch & Shipping info
   - Verified Client Reviews section.

4. **About Dr. Sayali & Club Aayurveda (`about.html`)**
   - Editorial profile of Dr. Sayali M. Deshmukh with official bio text.
   - Comprehensive qualifications & clinical background breakdown.
   - The 4-Step Consultation Journey (History, Prakriti Assessment, Tailored Plan, Guided Follow-Up).
   - Heritage & purity standards.

5. **Contact & Consultation (`contact.html`)**
   - Official details: Call & WhatsApp (+91 93246 35177), Haware Splendor, Sector 20, Kharghar, Navi Mumbai, Consultation Timings: 10:00 AM to 7:00 PM.
   - Direct WhatsApp Concierge and click-to-call links.

---

## 🛒 Interactive Demo Features

- **Slide-out Shopping Bag Drawer:** Add items, modify quantities, view subtotal, and proceed to WhatsApp order concierge.
- **Quick Consultation Modal:** Easily triggered from anywhere across all 5 pages.
- **Interactive Product Gallery:** Instant thumbnail switching with smooth opacity transitions.
- **WhatsApp Direct Integration:** Automatically formats consultation and purchase requests with pre-filled details.
- **Responsive Navigation:** Clean mobile drawer menu and sticky header with backdrop blur.

---

## 🚀 How to Run Locally

You can open any of the HTML files directly in your web browser, or launch a lightweight local HTTP server:

```bash
# Start local dev server
npm run dev
```

Then visit: [http://localhost:3000](http://localhost:3000)

---

## ⚡ Hosting on Vercel

The project is fully pre-configured for one-click deployment on **Vercel**:

### Option 1: Deploy via GitHub (Recommended)
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Deploy Club Aayurveda website to Vercel"
   git push origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import the `club-ayurveda` repository.
4. Click **Deploy**. Vercel will automatically deploy the static demo with fast Edge CDN caching and clean URLs configured in `vercel.json`.

### Option 2: Deploy via Vercel CLI
```bash
npx vercel
```
Follow the interactive prompts to deploy directly from your local terminal.

