# Study Park Education Network — Website

Production-ready marketing website for **Study Park Education Network Pvt. Ltd.**,
a Kathmandu-based study-abroad consultancy. Built with React 19, Vite, and TypeScript.

## Tech stack

- React 19 + Vite (no Next.js)
- TypeScript (strict mode)
- Tailwind CSS (custom design tokens — no default palette)
- React Router DOM (route-based code splitting via `React.lazy`)
- React Helmet Async (per-page SEO metadata + JSON-LD)
- Framer Motion (restrained entrance/hover animation)
- Swiper (testimonial carousel)
- React Hook Form + Zod (contact form validation)
- Lucide React (icons)

## Getting started

```bash
npm install
cp .env.example .env   # fill in real values before deploying
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Environment variables

See `.env.example`. `VITE_CONTACT_ENDPOINT` is optional — if left empty, the
contact form falls back to a pre-filled `mailto:` link, so the site works
with zero backend out of the box.

## Project structure

```
src/
 ├── assets/          static images/illustrations
 ├── components/
 │    ├── common/     Seo, PageBanner, cards, forms, buttons shared site-wide
 │    ├── layout/     Navbar, Footer, Layout shell
 │    ├── sections/   page-specific section blocks (currently: home/*)
 │    └── ui/         low-level primitives (Button, Card, Input, Accordion)
 ├── pages/           one file per route
 ├── hooks/           useCounter, useScrollThreshold
 ├── lib/             siteConfig, schema.ts (JSON-LD), utils, validation
 ├── routes/          lazy-loaded route registry
 ├── types/           shared TypeScript interfaces
 ├── data/            all editable site content (services, destinations, FAQ, team...)
 └── styles/          Tailwind entry point
```

## Editing content

Almost everything on the site — services, destinations, team members, FAQs,
testimonials, success stories, statistics — lives in typed data files under
`src/data/`. Update those files; the UI re-renders automatically. There is
no content hardcoded inside page components.

## SEO

- Unique title, meta description, canonical URL, Open Graph, and Twitter
  Card tags per page via `src/components/common/Seo.tsx`.
- JSON-LD: `EducationalOrganization` + `LocalBusiness` on every page,
  `BreadcrumbList` on interior pages, `FAQPage` on the homepage
  (`src/lib/schema.ts`).
- `public/robots.txt` and `public/sitemap.xml` are included. Regenerate the
  sitemap with `npm run generate-sitemap` after adding routes.

## Accessibility

- Skip-to-content link, visible focus rings, semantic landmarks
  (`header`, `main`, `footer`, `nav`).
- Custom Accordion (FAQ) follows the WAI-ARIA accordion pattern with
  `aria-expanded` / `aria-controls`.
- All animations respect `prefers-reduced-motion`.
- Form fields use associated `<label>`s and `aria-live` error messages.

## Notes on this build

This project was generated in a sandboxed environment without npm registry
access, so dependencies could not be installed or the build verified end to
end. The code follows current React 19 / React Router 6 / Tailwind 3 APIs
and has been reviewed carefully for consistency, but run `npm install` and
`npm run build` locally as a first step to catch anything environment-specific
before deploying.
