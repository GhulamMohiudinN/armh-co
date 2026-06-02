# ARMH & Co Website

A production-ready Next.js 14 website for ARMH & Co, a professional accounting and compliance firm serving the United Kingdom and United Arab Emirates markets.

## Features

- **Dual-Market Architecture**: Separate `/uk` and `/uae` sections with market-specific content
- **Country Selector**: Root page with dramatic country selection
- **Strict Path Isolation**: All internal links stay within their respective market
- **localStorage Persistence**: Remembers user's country preference
- **Responsive Design**: Mobile-first with breakpoints at 375px, 768px, 1280px
- **Micro-Animations**: Subtle Framer Motion animations
- **Custom Color Palette**: Charcoal and emerald theme
- **SEO Optimized**: Unique meta tags for each page

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: Inter (Google Fonts)
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Project Structure

```
/app
  /page.tsx                 → Root country selector
  /uk
    /page.tsx               → UK homepage (12 sections)
    /layout.tsx             → UK layout with Navbar/Footer
  /uae
    /page.tsx               → UAE homepage (14 sections)
    /layout.tsx             → UAE layout with Navbar/Footer
/components
  /shared
    Navbar.tsx
    Footer.tsx
    ServiceCard.tsx
    PricingCard.tsx
    FAQAccordion.tsx
    Ticker.tsx
    StatsBar.tsx
    CredentialBadge.tsx
    TestimonialCard.tsx
/lib
  /data
    uk-services.ts
    uae-services.ts
    uk-faq.ts
    uae-faq.ts
    credentials.ts
/public
  /flags
    uk.svg
    uae.svg
```

## Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd "ARMH&Co Website project"
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Build the project for production:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Key Implementation Details

### Country Selection Logic

- Root `/` page shows country selector only
- Selection is saved to `localStorage` with key `armh_market`
- On subsequent visits, user is redirected to their selected market
- Navbar includes country switcher to return to root

### Path Isolation

- All `/uk` internal links point to `/uk/*` paths
- All `/uae` internal links point to `/uae/*` paths
- No cross-market navigation links

### Pricing Strategy

- **UK**: Shows "Custom / month" with quote CTAs
- **UAE**: Shows specific AED pricing (e.g., "AED 1,999/mo")
- UAE pricing includes "All prices exclude 5% UAE VAT" disclaimer

### Regional Vocabulary

- **UK**: HMRC, Companies House, Corporation Tax, MTD
- **UAE**: FTA, Corporate Tax (9%), WPS, ESR, UBO

### Color Palette

- `charcoal-950` (#0D0F0E) - Hero backgrounds
- `charcoal-900` (#141716) - Section backgrounds
- `charcoal-800` (#1E2320) - Card backgrounds
- `charcoal-700` (#2A2F2C) - Borders
- `emerald-600` (#059669) - Primary accent
- `emerald-500` (#10B981) - Hover states
- `off-white` (#F5F7F6) - Light page background

## Pages

### Root (/)
- Dramatic country selector
- UK and UAE flag cards
- Credential badges

### UK Homepage (/uk)
1. Hero with ticker
2. Credential strip
3. Why ARMH & Co (3 features)
4. Services grid (9 services)
5. Stats bar
6. How it works (4 steps)
7. Software logos
8. Testimonials (3 cards)
9. Pricing (3 tiers - custom pricing)
10. FAQ (6 questions)
11. CTA strip
12. Footer

### UAE Homepage (/uae)
1. Hero with ticker
2. Credential strip
3. Why ARMH & Co (3 features)
4. UAE compliance coverage (4 cards)
5. Services grid (9 services)
6. Free zone coverage
7. Stats bar
8. How it works (5 steps)
9. Software logos
10. Testimonials (3 cards)
11. Pricing (3 tiers - AED pricing)
12. FAQ (6 questions)
13. CTA strip
14. Footer

## Quality Checklist

- [x] Root `/` shows country selector only
- [x] `/uk` navbar links all point to `/uk/...` paths
- [x] `/uae` navbar links all point to `/uae/...` paths
- [x] Credential strip visible on both market homepages
- [x] SECP Recognized badge included
- [x] Mobile menu works on both market sites
- [x] No placeholder "(Demo)" or "XXXX" text
- [x] UAE pricing shows AED figures
- [x] UK pricing shows "Custom / month"
- [x] localStorage country preference persists
- [x] All pages have unique meta title and description
- [x] Framer Motion animations respect `prefers-reduced-motion`

## Deployment

This project is Vercel-compatible. Deploy by:

1. Push to GitHub
2. Import project in Vercel
3. Deploy

## License

© 2025 ARMH & Co. All rights reserved.
