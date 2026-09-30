# SANKALP PANDEY — Portfolio

**Live: [sankalp-portfolio-eta.vercel.app](https://sankalp-portfolio-eta.vercel.app)**


Personal portfolio of **Sankalp Pandey** — software developer and product builder.
A designer's portfolio with an engineer's playground: minimal, editorial, and one
signature 3D system that evolves as you move through the site.

> Built, shipped, still standing.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSankalpPandey-56%2Fsankalp-portfolio)

---

## Design philosophy

- **One idea, carried all the way through.** The site is a single continuous
  piece — an "ink & paper" editorial system — not a stack of disconnected
  sections. Warm off-black ink, paper-white type, one ember accent.
- **The 3D is a character, not decoration.** A hand-placed lattice of ~140
  fluted cubes lives behind the content. It reorganizes itself as you travel:
  ordered at the hero, agitated in the work, loose in the about section,
  playful in the playground, and fully settled by the contact section.
- **Projects are exhibits, not cards.** Each project gets its own composition,
  a browser-window frame, and a case study.
- **Nothing is fake.** No invented stats, testimonials, clients, or metrics.
  Where a link or preview isn't available yet, the site says so, in its own voice.

## Technology stack

| Layer      | Tools                                                        |
| ---------- | ------------------------------------------------------------ |
| Framework  | Next.js 15 (App Router), React 19, TypeScript (strict)       |
| Styling    | Tailwind CSS, CSS custom properties, editorial primitives    |
| Motion     | Framer Motion (reveals, magnetic hover, palette, mobile nav) |
| 3D         | Three.js, React Three Fiber (instanced, lazy-loaded)         |
| Type       | Instrument Serif (display), Geist (text), Geist Mono (meta)  |
| Icons      | Lucide                                                       |

## Architecture

```
app/                  # routes: /, /work/[slug], 404, sitemap, robots, OG image
components/
  3d/                 # Lattice scene, canvas host, drag zone, scroll spy
  layout/             # Nav, MobileNav, Hero, Work, About, Playground, Contact, Footer
  projects/           # ProjectShowcase (varied layouts), BrowserFrame, ProjectPreview, meta, links
  ui/                 # Reveal, Magnetic, ArrowLink, SectionHeading, Ticker, CommandPalette
data/                 # site config, projects registry, skills, journey, playground
lib/                  # fonts, motion vocabulary, hooks, utils
types/                # shared TypeScript types
public/               # screenshots for project previews (optional)
```

All content lives in `data/` — presentation never hard-codes copy. Adding
Project 04 is a single object in `data/projects.ts` plus, optionally, a layout
variant in `ProjectShowcase.tsx`.

## The 3D system

`components/3d/latticeStore.ts` is a plain-module singleton read inside
`useFrame` — pointer position, drag deltas, active section, reduced-motion
flag. Nothing triggers React re-renders.

- **Lattice.tsx** — one `InstancedMesh`, ~140 boxes in three interleaved
  shells (core block + two golden-angle halos), deterministic via a seeded
  PRNG so the structure is identical on every load.
- **SectionReporter.tsx** — an IntersectionObserver watches each section and
  retargets the scene's character (scramble, spread, speed, tilt) which the
  scene eases toward.
- **DragZone.tsx** — an invisible fixed strip over the hero where dragging
  spins the structure with momentum; everything else passes through.
- Mobile drops to ~70 pieces at DPR 1; `prefers-reduced-motion` freezes
  tumble and breathing, and the canvas is never in the initial JS payload
  (lazy `dynamic()` import).

## Project showcase

The Work section renders each project through `ProjectPreview`:

1. If `liveUrl` is set → sandboxed **live iframe** inside the browser chrome.
2. Else if `previewImage` is set → optimized `next/image` screenshot.
3. Else → a designed "link goes here" state that explains exactly which field
   to fill in `data/projects.ts`. No fabricated imagery, ever.

Current projects: **EMBER**, **NOVA**, **CAMPUSHUB** — each with a case study
at `/work/<slug>` (overview, purpose, what was built, features, technical
decisions, challenges, lessons, next project).

## Local setup

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # strict TS, no emit
npm run lint       # eslint
```

No environment variables required — the site is fully static.

## Make it yours (checklist)

Everything personal is centralized in `data/`:

1. `data/site.ts` — real email, LinkedIn URL, production domain (`SITE.url`
   drives canonical tags, sitemap, robots, OG image metadata).
2. `data/projects.ts` — real `liveUrl` / `androidUrl` per project; NOVA's
   GitHub link is commented until that repo goes public.
3. `public/projects/*.png` — optional screenshots, used as iframe fallbacks.

## Deployment

Zero config on Vercel — Next.js is auto-detected. Either click the Deploy
button above, or:

```bash
npm i -g vercel && vercel --prod
```

The production domain is already set in `data/site.ts`; if you add a custom
domain later, update `SITE.url` there and redeploy so SEO metadata, the
sitemap and canonical URLs follow.

## Status

- Implemented: everything in this repo — home experience, 3D lattice,
  command palette (⌘K / Ctrl-K), case studies, playground, custom 404,
  easter eggs (Konami "paper mode" + the footer whisper), full SEO layer,
  mobile nav, reduced-motion support.
- Deployed: https://sankalp-portfolio-eta.vercel.app (Git integration on —
  pushes to main auto-deploy).
- Pending (needs the owner): real email, LinkedIn URL, project live URLs,
  optional screenshots, public NOVA repo.

---

© Sankalp Pandey. Built with more restraint than was comfortable.
