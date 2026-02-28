# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the homepage for **수디자인 (SooDesign)**, an interior design company specializing in apartment remodeling.

## Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v3
- **Language**: TypeScript
- **Font**: Noto Sans KR (via `next/font/google`)
- **Images**: `next/image` with picsum.photos as placeholder source (configured in `next.config.ts`)

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Header + Footer + MobileCTA)
│   ├── page.tsx            # Home page
│   ├── portfolio/page.tsx  # Portfolio page (client-side filter)
│   ├── service/page.tsx    # Services page
│   ├── about/page.tsx      # About / Company page
│   └── contact/page.tsx    # Contact / Consultation page
├── components/
│   ├── layout/             # Header, Footer, MobileCTA
│   └── sections/           # Page-specific section components
│       ├── home/           # Hero, FeaturedProjects, ServicesOverview, Process, Testimonials, HomeCTA
│       ├── portfolio/      # PortfolioClient (filter + grid, 'use client')
│       └── contact/        # ContactForm ('use client')
└── data/
    ├── portfolio.ts        # 9 placeholder portfolio items
    └── services.ts         # 5 service definitions
```

## Design Tokens (Tailwind extensions)

| Token         | Value     | Usage                    |
|---------------|-----------|--------------------------|
| `dark`        | `#1C1C1A` | Primary dark / hero bg   |
| `dark-soft`   | `#2C2A27` | Body text                |
| `muted`       | `#6B6460` | Secondary text           |
| `gold`        | `#C4A35A` | Accent / CTA highlight   |
| `warm-50`     | `#FAFAF8` | Page background          |
| `warm-100`    | `#F5F0E8` | Section alternates       |
| `border`      | `#E5DDD5` | All borders              |

## Conventions

- **Korean** is the primary UI language.
- Mobile-first responsive design; `md:` breakpoint is 768 px.
- A fixed bottom CTA bar (`MobileCTA`) is visible only on mobile (hidden `md:hidden`).
- The `<main>` tag has `pb-16 md:pb-0` to clear the mobile CTA bar.
- `container-main` utility = `mx-auto max-w-7xl px-4 md:px-8 lg:px-12`.
- `section-padding` = `py-20 md:py-28`; `section-padding-sm` = `py-14 md:py-20`.
- Placeholder images come from `https://picsum.photos/seed/{imageId}/{w}/{h}`.
- Real images should be added to `public/` and the `imageId`-based src replaced.

## Notes

- The contact form (`ContactForm.tsx`) currently simulates a 1.2 s API delay. Wire it to a real endpoint (e.g. Resend, EmailJS, or `/api/contact`) when ready.
- Portfolio filter state is held in `PortfolioClient` (client component); adding more items only requires editing `src/data/portfolio.ts`.
