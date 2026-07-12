# DAKSHYA — Next.js + Framer Motion rebuild

Full conversion of the original static Tailwind/Alpine.js site into a Next.js 14
(App Router) project with Framer Motion animation throughout.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. This sandbox has no network access, so the
install/build has **not** been run here — do that first thing on your machine.

## What changed vs. the original site

- **Stack**: static HTML + Alpine.js → Next.js App Router, one route per page
  (`app/page.js`, `app/about/page.js`, `app/workshops/page.js`,
  `app/gallery/page.js`, `app/team/page.js`, `app/contact/page.js`).
- **Data**: `data.js` → `lib/data.js` (same shape, now an ES module import).
- **Icons**: `lucide` CDN script → `lucide-react` components.
- **Animation**: all interactions now run on Framer Motion springs
  (`stiffness: 100/260, damping: 20-22, mass: ~1`) instead of CSS transitions:
  - `components/Reveal.js` / `StaggerGroup.js` — staggered fade-in-up on
    scroll (`staggerChildren: 0.1`), used on every section.
  - `components/MagneticButton.js` — magnetic pull on primary CTAs, disabled
    on touch devices.
  - `components/Shimmer.js` — organic skeleton loading state (Workshops and
    Gallery fetch-simulate for ~800ms before revealing real content).
  - `components/Counter.js` — spring count-up for the stat numbers.
  - Gallery lightbox and the workshop registration modal use `layoutId`
    "magic move" transitions from the grid card into the overlay.
  - The homepage nav underline uses a shared `layoutId` across route changes.
- **Signature element**: the homepage hero is now a dark "control deck" panel
  (`deckBg`/`deckPanel` tokens) with a drifting mesh gradient and a glass
  terminal readout — it leans into the club's existing "telemetry" /
  "transmit" copy voice instead of introducing an unrelated visual style.
- **Accessibility**: focus-visible outlines, aria-labels on icon-only
  buttons/links, `prefers-reduced-motion` is respected globally
  (`app/globals.css`), and the mobile drawer/modals trap Escape-to-close.

## Structure

```
app/                route pages (App Router)
components/         shared UI + motion primitives
lib/data.js         content (stats, workshops, media, team)
lib/motion.js       every spring/variant/stagger config, in one place
```

## Notes

- Images are pulled from the original Unsplash URLs; `next.config.mjs`
  whitelists `images.unsplash.com` for `next/image` if you switch the plain
  `<img>` tags over later.
- The registration and contact forms simulate a network call with
  `setTimeout` (same as the original Alpine version) — wire them to a real
  endpoint when ready.
