<div align="center">

<img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white" />
<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
<img src="https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white" />
<img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />

<br/><br/>

<img src="public/icon.svg" width="80" height="80" alt="AR Soap Logo" />

# 🌿 AR Soap & Detergent

### *Pure Cleanliness, Naturally.*

**A modern, eco-friendly soap and detergent e-commerce website built with Next.js 16, featuring smooth animations, video-rich product showcases, and a fully functional shopping cart.**

<br/>

[🛍️ Shop Now](#-pages--features) · [📦 Products](#-product-catalog) · [📬 Contact](#-contact--socials) · [🚀 Deploy](#-getting-started)

<br/>

---

</div>

## ✨ Live Preview

> The site features full-screen video backgrounds, animated product cards, and a seamless shopping experience across all devices.

<div align="center">

| 🏠 Home | 🛒 Products | 🧴 Product Detail |
|--------|------------|------------------|
| Hero video slideshow with 5 rotating clips | Category-filtered video backgrounds | Full ingredient list & add to cart |
| Feature highlights & testimonials | Search, sort & filter | Related product suggestions |
| Bestsellers carousel | Grid & list view toggle | Video product preview |

</div>

---

## 🗂️ Pages & Features

### 🏠 Home Page
- Full-screen hero with **5 auto-rotating product videos**
- Animated feature badges (Natural · Biodegradable · Sustainable · Cruelty Free)
- Bestsellers carousel with smooth scroll
- Customer testimonials section
- About preview with video background
- CTA section

### 🧴 Products Page
- **12 products** across 4 categories: Soaps · Detergents · Laundry Aids · Specialty Items
- Live search with instant filtering
- Category video backgrounds that change per selection
- Sort by: Featured · Price · Rating · Name
- Grid and list view toggle
- Mobile-friendly filter panel

### 📄 Product Detail Page
- Full product video autoplay
- Ingredients list
- Add to cart with animated feedback
- Star ratings & review count

### 🛒 Cart Page
- Animated item add/remove
- Promo code support (`ECO10` for 10% off)
- Free shipping threshold indicator ($35+)
- ✅ **Success toast on checkout**

### 👥 About Page
- Company story & mission with video grid
- Core values cards
- Interactive timeline (2015 → 2024)
- Team member profiles
- Certifications showcase

### 📬 Contact Page
- Contact form with animated success state
- FAQ accordion
- Social media links
- Newsletter signup

---

## 🛍️ Product Catalog

<div align="center">

| # | Product | Category | Price | Bestseller |
|---|---------|----------|-------|------------|
| 1 | 🌸 Lavender Soap Bar | Soaps | $5.00 | ⭐ Yes |
| 2 | 🌿 Eco-Friendly Liquid Detergent | Detergents | $12.00 | ⭐ Yes |
| 3 | 🍊 Citrus Burst Hand Soap | Soaps | $7.00 | — |
| 4 | 🧶 Wool & Delicates Wash | Laundry Aids | $15.00 | — |
| 5 | 💧 Stain Remover Spray | Laundry Aids | $9.00 | ⭐ Yes |
| 6 | 🌲 Eucalyptus Dish Soap | Specialty Items | $8.00 | — |
| 7 | 🌼 Concentrated Fabric Softener | Laundry Aids | $14.00 | — |
| 8 | 🌿 Tea Tree Antiseptic Bar | Soaps | $6.00 | ⭐ Yes |
| 9 | 🧹 All-Purpose Surface Cleaner | Specialty Items | $10.00 | — |
| 10 | 📦 Powder Laundry Detergent | Detergents | $18.00 | — |
| 11 | 🌾 Oatmeal Soothing Soap | Soaps | $6.00 | — |
| 12 | 🪟 Glass & Mirror Cleaner | Specialty Items | $8.00 | — |

</div>

---

## 🏗️ Tech Stack

```
ar-soap-website/
├── app/                    # Next.js App Router pages
│   ├── page.jsx            # Home
│   ├── about/              # About Us
│   ├── products/           # Product listing + [id] detail
│   ├── cart/               # Shopping cart
│   ├── contact/            # Contact form
│   └── layout.tsx          # Root layout
├── components/
│   ├── Header.jsx          # Sticky nav with search & cart
│   ├── Footer.jsx          # Links, socials, contact
│   ├── ProductCard.jsx     # Video/image card with add-to-cart
│   ├── ProductCarousel.jsx # Embla-powered scroll carousel
│   └── ui/                 # shadcn/ui component library
├── context/
│   └── CartContext.jsx     # Global cart state
├── lib/
│   └── data.js             # Products, testimonials, team data
└── public/
    ├── videos/             # 22 product & hero videos
    └── team/               # Team member photos
```

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19 + Tailwind CSS 4 |
| Animations | Framer Motion 12 |
| Components | shadcn/ui + Radix UI |
| Icons | Lucide React |
| Carousel | Embla Carousel |
| State | React Context API |
| Fonts | Serif + System UI |
| Deployment | Vercel |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/ezedinmoh/ar-soap-website.git
cd ar-soap-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## 🌍 Deployment (Vercel)

The fastest way to deploy:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → "Add New Project"
3. Import your GitHub repo
4. Click **Deploy** — Vercel auto-detects Next.js

Every push to `main` triggers an automatic redeploy.

---

## 🎨 Design Highlights

- **Dark/Light mode** support via `next-themes`
- **Fully responsive** — mobile, tablet, desktop
- **Video-first** product presentation — every product has a dedicated video
- **Smooth animations** on scroll, hover, and page transitions
- **Accessible** — semantic HTML, ARIA labels, keyboard navigation
- **Performance** — lazy loading, optimized assets, Turbopack build

---

## 📬 Contact & Socials

<div align="center">

| Platform | Link |
|----------|------|
| 📧 Email | [ezedinmoh1@gmail.com](mailto:ezedinmoh1@gmail.com) |
| 📍 Location | Kombolcha, Ethiopia |
| 📞 Phone | [+251983029638](tel:+251983029638) |
| 💼 LinkedIn | [@ezedinmoh](https://www.linkedin.com/in/ezedinmoh) |
| 🐙 GitHub | [@ezedinmoh](https://github.com/ezedinmoh) |
| 📸 Instagram | [@ezedin__moh](https://www.instagram.com/ezedin__moh) |
| 🎵 TikTok | [@ezedinmoh](https://www.tiktok.com/@ezedinmoh) |
| 🐦 Twitter/X | [@ezedinmoh](https://x.com/ezedinmoh) |
| 📘 Facebook | [ezedinmoh](https://www.facebook.com/ezedinmoh) |
| 💬 Telegram | [@ezedinmoh](https://t.me/ezedinmoh) |
| 🎬 YouTube | [@ezedin_moh](https://www.youtube.com/@ezedin_moh) |

</div>

---

## 📜 License

© 2024 AR Soap and Detergent. All rights reserved.

---

<div align="center">

Made with 🌿 in Ethiopia

*Pure Cleanliness, Naturally.*

</div>
