# John Adeoye — Portfolio

Production-ready personal portfolio for **John Adeoye**, Full-Stack Frontend Engineer. Built with Next.js 14 (App Router), TypeScript, TailwindCSS, and Framer Motion. Deploy-ready on Vercel.

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS** (custom theme: background, surface, accent, highlight, text-primary, text-muted)
- **Framer Motion** (scroll reveals, hero stagger, card hover + glow)
- **next/font**: Syne (headings), DM Sans (body)
- Single page with smooth scroll and hash navigation (#about, #experience, #projects, #contact)

## Features

- Light and dark mode (toggle in nav, persisted in `localStorage`)
- Glassmorphism UI (hero, cards, nav, contact)
- Mobile-first responsive layout (hamburger menu on small screens)
- Scroll-triggered animations (Framer Motion `useInView` + variants)
- Hero stagger animation; card hover lift + glow
- **SEO**: Rich metadata (title, description, keywords), Open Graph, Twitter cards, JSON-LD (Person, WebSite), sitemap.xml, robots.txt, canonical URL. Optimized for search terms like “John Adeoye”, “Adeoye John”, “Fixit”, “frontend developer”, “Node.js developer”, “Lagos Nigeria developer”.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Push the repo to GitHub/GitLab/Bitbucket.
2. Import the project in [Vercel](https://vercel.com).
3. Vercel will detect Next.js and use `npm run build` by default.
4. Set **Root Directory** to the repo root if needed.
5. Deploy.

**SEO (production):** Set `NEXT_PUBLIC_SITE_URL` to your live URL (e.g. `https://johnadeoye.dev`) so sitemap, robots, and Open Graph URLs are correct. Add `public/og-image.png` (1200×630) for social previews.

## Project structure

- `src/app/` — App Router layout, page, globals
- `src/components/sections/` — Nav, Hero, About, Experience, Projects, TechMarquee, Contact, Footer
- `src/components/ui/` — Button, GlassCard, SkillTag, ScrollReveal, Icons
- `src/components/providers/` — ThemeProvider (light/dark)
- `src/data/site.ts` — Copy, links, experience, projects, tech stack
- `src/types/index.ts` — TypeScript interfaces

## Content

Edit `src/data/site.ts` to update name, tagline, experience, projects, social links, and footer. Replace project image URLs and CV link as needed.
