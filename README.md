# AI-Harness Marketing Website

The public marketing and product website for **AI-Harness** ,  the enterprise platform for deploying, governing, and scaling a unified workforce of humans and AI agents.

Built with React 19, Vite 6, TypeScript, TailwindCSS v4, React Router 7, and Lucide Icons.

## Getting started

```bash
npm install
npm run dev       # start dev server at http://localhost:5173
npm run build     # type-check + production build to ./dist
npm run preview   # preview the production build
```

> Requirements: Node.js 20+

## Pages

| Route | Description |
|---|---|
| `/` | Home ,  hero, value props, platform pillars, how-it-works, industries preview, outcomes, testimonial, CTA |
| `/platform` | Deep-dive into the product: agents, workflows, governance, integrations, architecture |
| `/solutions` | Use cases by workflow (Ops, Customer, Engineering, Marketing, Legal, Finance, HR, SecOps) + value by role |
| `/industries` | Financial Services, Healthcare, Legal, Insurance, Professional Services, Tech/SaaS, Manufacturing, Retail, Public Sector, Media |
| `/security` | Security & governance pillars, compliance posture, data handling, agent governance, trust center |
| `/pricing` | Starter / Business / Enterprise tiers, monthly/yearly toggle, compare table, FAQ |
| `/resources` | Library (docs, guides, customer stories, webinars, changelog), newsletter |
| `/about` | Story, beliefs, leadership, investors, careers |
| `/contact` | Contact form + inboxes for sales, support, press, security |
| `/signup` | Product-style free signup flow |
| `/login` | Sign-in screen |
| `/demo` | Book a demo flow |
| `*` | 404 |

## Project structure

```
src/
  App.tsx              # Router and layout
  main.tsx             # React entry
  index.css            # Tailwind v4 theme + utilities
  lib/cn.ts            # Class-name helper
  components/          # Navbar, Footer, Button, Container, Eyebrow, SectionHeading, FeatureCard, LogoCloud, Logo, CTASection
  pages/               # Route-level page components
public/
  hero.png             # AI-generated hero visual
  governance.png       # Security section visual
  workflow.png         # Workflow board visual
  industries.png       # Industries section visual
  lifecycle.png        # Agent lifecycle visual
  screenshot-dashboard.png   # Placeholder product screenshot (replace with real screenshots when available)
  favicon.svg
```

## Replacing product screenshots

Every app-screenshot placeholder in the site points to `/screenshot-dashboard.png`. Replace that file (and add any additional `public/screenshot-*.png` assets) as real product captures become available.

## Design system

- **Brand**: violet / indigo gradient (`--color-brand-*`, `#5B21B6` → `#A855F7`)
- **Neutrals**: slate-based ink scale (`--color-ink-*`)
- **Fonts**: Inter (UI) + Instrument Serif (editorial accents)
- **Tokens** live in `src/index.css` under the `@theme` block

## Notes

- The site has no external analytics or tracking baked in ,  add your provider of choice (e.g. Segment, PostHog, GA) in `main.tsx` or `App.tsx`.
- Forms (Contact, Sign Up, Demo, Newsletter) are wired for UX but do not POST anywhere yet ,  connect them to your CRM / marketing platform.
- All CTAs use SaaS-standard patterns: "Start free" (primary) and "Book a demo" (secondary), with "Talk to sales" on Enterprise.
