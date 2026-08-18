# Monishka Yadav — Portfolio

A premium, product-grade personal portfolio for **Monishka Yadav** — a B.Tech CSE (AI & ML) student, software developer, and problem solver.

Built to feel like a modern SaaS product (à la Linear / Vercel / Framer): aurora backgrounds, soft glass surfaces, smooth motion, a `⌘K` command palette, and fully accessible, SEO-ready, static output.

---

## ✨ Highlights

- **Sticky floating navigation** with an active-section indicator (shared-layout pill) and a scroll progress bar.
- **Command palette (`⌘K` / `Ctrl+K`)** — jump to any section, open links, or toggle the theme, fully keyboard-driven.
- **Animated hero** — rotating role titles, cursor spotlight, floating glass shapes, and an animated scroll indicator.
- **Light / dark theme** with no flash (system-aware, persisted).
- **Lenis smooth scrolling** with a custom event bridge (`scrollToSection`) so any component can drive it.
- **Sections:** Hero · About · Skills (bento) · Projects (expandable case studies) · Learning Journey (scroll-driven timeline) · Coding Profiles (live GitHub stats) · Certifications · Contact (working `mailto:` form) · Footer.
- **Accessibility:** semantic HTML, skip link, visible focus rings, keyboard support, `prefers-reduced-motion` respected everywhere.
- **Performance & SEO:** 100% static output, `next/font`, JSON-LD structured data, sitemap, robots, web manifest, OG/Twitter metadata.

## 🎨 Two styles, one project

- **`/`** (main) — a techno-brutalist design: giant display type
  (filled first name / orange-outlined last name), Orbitron techno labels, corner brackets, a
  keyword marquee, big numbered project rows, and an **original hand-built SVG anime character**
  (`src/components/neo/anime-character.tsx` — swap it for a real illustration anytime).
- **`/classic`** — the premium SaaS aesthetic (Linear/Vercel style): aurora backgrounds, glass,
  ⌘K command palette, expandable project case studies, live GitHub stats.

Both share the same data in `src/data/`. To swap which one is the homepage, move the two
`page.tsx` files between `src/app/` and `src/app/classic/`.

## 🧱 Tech Stack

| Concern            | Choice                                   |
| ------------------ | ---------------------------------------- |
| Framework          | Next.js 14 (App Router)                  |
| Language           | TypeScript                               |
| Styling            | Tailwind CSS (CSS-variable design tokens)|
| Animation          | Framer Motion                            |
| Smooth scroll      | Lenis                                    |
| Icons              | lucide-react                             |
| Theming            | next-themes                              |

> Three.js was intentionally **not** used — the aurora/mesh visuals are pure CSS, keeping the main thread free and Lighthouse scores high.

## 🚀 Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

## 🗂️ Project Structure

```
src/
├─ app/                     # App Router: layout, page, SEO routes (sitemap/robots/manifest), icon
│  ├─ globals.css           # Design tokens + reusable utilities (.glass, .hairline, aurora, grid)
│  ├─ layout.tsx            # Fonts, metadata, providers
│  └─ page.tsx              # Section composition + JSON-LD
├─ components/
│  ├─ providers/            # theme-provider, smooth-scroll (Lenis + scrollToSection)
│  ├─ navigation/           # floating-nav, command-palette, scroll-progress
│  ├─ sections/             # hero, about, skills, projects, journey, coding-profiles,
│  │                        # certifications, contact, footer
│  └─ ui/                   # button, reveal, section-heading, spotlight-card,
│                           # aurora-background, theme-toggle
├─ data/                    # ← Edit content here (site, skills, projects, timeline, certifications, about)
├─ hooks/                   # use-active-section (IntersectionObserver scroll-spy)
└─ lib/                     # utils (cn)
```

## ✏️ Customizing Content

All copy and data live in **`src/data/`** — no need to touch components:

- `site.ts` — name, role, email, **social URLs**, GitHub username, résumé path.
- `skills.ts`, `projects.ts`, `timeline.ts`, `certifications.ts`, `about.ts` — section content (`/`).
- `neo.ts` — content for the main techno homepage (project rows, marquee, skill blocks).

**Before deploying, update:**

1. `site.ts` → replace the placeholder `socials`, `githubUsername`, and `url`.
2. `public/resume.pdf` → replace the placeholder with your real résumé.
3. Coding Profiles stats render live from your `githubUsername` via public, keyless image services.

## ☁️ Deploy (Vercel)

1. Push this repo to GitHub.
2. Import it in [Vercel](https://vercel.com/new) — zero config; it detects Next.js.
3. Deploy. Update `site.url` in `src/data/site.ts` to your final domain for correct metadata & sitemap.

---

Built with Next.js, Tailwind CSS & Framer Motion.
