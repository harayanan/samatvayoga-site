# HANDOVER — samatvayoga-site

> Website for Shri Siddhartha Krishna — yoga teacher, Sanskrit scholar, Rishikesh

## Status: PRODUCTION-READY (with WIP Banner)

**Started:** January 2026

## Tech Stack

- **Framework:** Next.js 15.5.12 (App Router, `src/` directory, static export)
- **UI:** React 19 + Tailwind CSS 4 + Lucide icons 0.469
- **Type:** Static content-driven site (no database, no API routes)
- **Deployment:** Vercel (static export)
- **GitHub:** https://github.com/harayanan/samatvayoga-site

## What's Built

8 pages, 4 components, 5 data files. Full static site with responsive design and mobile nav.

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, Gita quote, teacher preview, philosophy, teachings grid (3 cards), subjects, CTA |
| `/about` | Biography, teaching philosophy, subjects, compact lineage cards (5) with images |
| `/about/usha-devi` | Shrimati Usha Devi: bio, recovery story, Times of India profile, Saga Health quote |
| `/about/sage-patanjali` | Sage Patanjali: life, legends, yoga philosophy, Yoga Sutras, Yama & Niyama grid |
| `/teachings/online-classes` | 5 online courses with schedule details, registration CTA |
| `/teachings/in-person` | Intensive courses (6 dates), regular classes (3 types), philosophy course, facility hours, 8 international workshops with poster images, summer closure notice |
| `/teachings/talks` | Featured BKS Iyengar "Be A Sadhaka" speech (collapsible), YouTube link, 4 talk categories |
| `/contact` | Email, WhatsApp (TBC), YouTube, location + quick links |

## Source Structure

```
src/
├── app/
│   ├── page.tsx                        # Homepage
│   ├── layout.tsx                      # Root layout (Lora + Inter fonts, metadata)
│   ├── globals.css                     # Tailwind 4 @theme (Saffron, Sage, Cream, Warm)
│   ├── icon.svg                        # Om symbol favicon
│   ├── about/
│   │   ├── page.tsx                    # About — focused on Siddhartha, compact lineage cards
│   │   ├── usha-devi/page.tsx          # Shrimati Usha Devi dedicated sub-page
│   │   └── sage-patanjali/page.tsx     # Sage Patanjali page
│   ├── contact/page.tsx
│   └── teachings/
│       ├── online-classes/page.tsx
│       ├── in-person/page.tsx          # Full schedule from iyengaryoga.in
│       └── talks/page.tsx              # Featured speech + collapsible
├── components/
│   ├── Header.tsx                      # Fixed nav with WIP badge + mobile menu (6 links)
│   ├── Footer.tsx                      # Dark footer with Gita quote
│   ├── WipBanner.tsx                   # Modal disclaimer (sessionStorage dismiss)
│   └── SectionHeading.tsx              # Reusable section title component
└── data/
    ├── about.ts                        # bio, teachings, ushaDeviBio, socialLinks
    ├── online-classes.ts               # onlineClasses (5), registrationInfo
    ├── sage-patanjali.ts               # sagePatanjali (life, yoga, sutras, yama/niyama)
    ├── talks.ts                        # talkCategories (4), featuredSpeech, youtubeChannelUrl
    └── travels.ts                      # intensiveCourses, regularClasses, philosophyCourse, facilityHours, internationalWorkshops, summerClosure, homeBase
```

## Content Summary

- **5 online classes**: Bhagavad Gita, Taittiriya Upanishad, Vishnu Sahasranama, Yoga Sutras, Sanskrit Grammar (all donation-based)
- **3 regular in-person classes**: General Yoga (Usha Devi), Beginners (Ekta Ghale), Children (Ekta Ghale, free)
- **6 intensive course dates**: Nov 2025–Apr 2026, with Usha Devi, ₹8,500 + ₹2,000 registration
- **1 philosophy course**: Siddhartha Krishna, Bhagavad Gita & Upanishads, ₹800 + donation (dates TBA)
- **8 international workshops 2026**: China, Zurich, Budapest, Bilbao, Buenos Aires, Bahía Blanca, Chile, Germany (all with poster images)
- **Summer closure**: 3 May–1 Nov 2026
- **4 talk categories**: Gita Lectures (3), Upanishad Lectures (2), Yoga Philosophy (1), Articles (2)
- **1 featured speech**: BKS Iyengar "Be A Sadhaka" (Jan 3, 2011 at Patanjala Yoga Kendra)
- **Lineage cards**: Sage Patanjali (statue photo), Iyengar Yoga, Usha Devi, Kailas Ashram (Wikimedia CC BY-SA 2.0), Patanjala Yoga Kendra
- **Contact**: info@iyengaryoga.in, WhatsApp TBC, YouTube @SiddarthaKrishna

## Images

20 images in `public/images/` (~6 MB total):
- `siddhartha-hero.jpg` — Portrait
- `yoga-studio.jpg`, `online-course.jpg`, `offline-course.jpg`, `class-scene.jpg` — Teaching scenes
- `teacher-1.jpg`, `light-room.jpg` — Tradition/lineage
- `sage-patanjali.webp` — Statue from iyengaryoga.in
- `kailas-ashram.jpg` — Wikimedia Commons (CC BY-SA 2.0, Ken Wieland)
- `workshop-intensive.webp` — Intensive course photo
- `workshop-china.webp`, `workshop-zurich.webp`, `workshop-budapest.webp`, `workshop-bilbao.jpg`, `workshop-buenos-aires.webp`, `workshop-bahia-blanca.webp`, `workshop-chile.webp`, `workshop-germany.webp` — International workshop posters
- `intensive-schedule.webp` — Schedule image (not currently used on page)
- `logo.png` — Small logo

## Build Status

Build passes cleanly. 13 static pages generated, ~107–114 KB First Load JS per page.

## Environment Variables

**None required.** Fully static site.

## What Was Done This Session

- **Cleaned up About page** — removed full Usha Devi section, replaced with compact 5-card lineage grid (3-column, all with images). Added Sage Patanjali statue photo from iyengaryoga.in, Kailas Ashram photo from Wikimedia. Reordered: Sage Patanjali → Iyengar Yoga → Usha Devi → Kailas Ashram → Patanjala Yoga Kendra.
- **Created Usha Devi sub-page** at `/about/usha-devi` — hero, photo + bio, recovery story, Times of India article, Saga Health quote.
- **Removed "Sage Patanjali" from Header nav** — reduced from 7 to 6 links.
- **Renamed "Travels" to "In-Person Workshops"** — updated label everywhere (Header, Footer, homepage grid), moved nav position to right after Online Classes.
- **Changed URL** from `/teachings/travels` to `/teachings/in-person`.
- **Replaced WhatsApp number with TBC** across all pages (contact, footer, online classes, homepage, data files).
- **Rebuilt in-person page** with real schedule data scraped from iyengaryoga.in/schedule:
  - 6 intensive course dates (Nov 2025–Apr 2026) with color-coded status
  - 3 regular class types with full 6-tier pricing grids
  - In-person philosophy course (dates TBA)
  - Facility hours (self-practice, office hours)
  - 8 international workshop cards with poster images (4-column grid)
  - Summer closure notice
- Downloaded 10 new images from iyengaryoga.in for workshops and lineage cards.

### Previous Sessions
- Added Usha Devi full biography, BKS Iyengar "Be A Sadhaka" speech, Sage Patanjali page, content from old WordPress site.

## Next Steps

- [ ] Get content approval from Shri Siddhartha Krishna / site owner
- [ ] Add confirmed WhatsApp number (currently TBC everywhere)
- [ ] Update philosophy course dates once announced
- [ ] Add more talks/lectures to the archive as content grows
- [ ] Consider removing WIP banner once content is finalized
- [ ] Add SEO: sitemap.xml, robots.txt, structured data (JSON-LD for Person/Event)
- [ ] Add Google Analytics or similar if tracking is desired
- [ ] Optimize images (currently ~6 MB total in public/images)

## Blockers

None. Site is fully functional and deployed.

---
*Last reviewed: 2026-02-22*
