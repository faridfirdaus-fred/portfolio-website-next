# Farid Firdaus | Portfolio Platform

Engineering-grade portfolio website showcasing Software Engineering and Application Security (AppSec) focus.

## Tech Stack & Architecture

- **Framework**: Next.js 15 (App Router) + React 19
- **Styling**: Tailwind CSS v3 with custom tactile editorial tokens
- **Animations**: Framer Motion 11 (snappy springs, hardware-accelerated scroll physics)
- **Email Service**: `@emailjs/browser` with honeypot bot defense
- **Icons**: `react-icons` (FontAwesome, SimpleIcons) & `@heroicons/react`

## Brand Identity & Design System

- **Primary Color**: `#201315` (warm dark espresso)
- **Secondary / Canvas**: `#E5E4E3` (editorial warm limestone / stone paper)
- **Typography**:
  - Headings & Accents: `Outfit` (`var(--font-outfit)`)
  - Body & Code: `Roboto` (`var(--font-roboto)`)
- **Tactile Texture**: Inline SVG fractal noise pattern on `body::before` (0 runtime overhead)
- **Buttons**: Tactile micro-interactions (subtle border, light shadow, quick 150ms hover/active response)

## Key Project Routes

- `/` (`app/page.tsx`): Hero intro, engineering manifesto scroll, interactive clip-path social matrix.
- `/work` (`app/work/page.tsx`): 2-column responsive project showcase with category filtering (AppSec, Algorithms, Fullstack).
- `/contact` (`app/contact/page.tsx`): 2-column contact hub with instant email copy, verified channel grid, and EmailJS form.
- `/robots.txt` (`app/robots.ts`): Automated search & AI crawler routing.
- `/sitemap.xml` (`app/sitemap.ts`): Dynamic route sitemap for SEO and AI indexers.

## Canonical Identity & Social Links

- **Email**: `faridfirdaus.mail@gmail.com`
- **GitHub**: `https://github.com/faridfirdaus-fred`
- **LinkedIn**: `https://www.linkedin.com/in/farid-firdaus/`
- **X (Twitter)**: `https://x.com/freddem4rco` (handle: `faridfred`)
- **Instagram**: `https://www.instagram.com/rid.fir` (Farid Firdaus)
- **Facebook**: `https://www.facebook.com/farid.forster.5` (Farid Fred)
- **Reddit**: `https://www.reddit.com/user/Miserable-Yard4496/`

## Development & Build Commands

```bash
npm run dev     # Start local development server on http://localhost:3000
npm run build   # Generate optimized production build
npm run start   # Run production build locally
npm run lint    # Run ESLint validation
```

## Guidelines for Future Contributions

1. **Performance First**: Keep animations snappy (150ms–350ms). Never reintroduce sluggish 1s+ transition locks.
2. **Scroll Handlers**: Never use unthrottled `window.addEventListener('scroll')` with frequent `setState`. Use `requestAnimationFrame` throttling or Framer Motion's `useScroll`.
3. **Asset Optimization**: Never import raw multi-megabyte PNGs. Convert assets to WebP (&lt;100KB) and supply explicit `width`, `height`, and `sizes` to `next/image`.
4. **App Router Conventions**: Never use `next/head` in `app/`. Always export metadata objects or generate metadata dynamically.
5. **Security & Cleanliness**: Maintain zero dead dependencies and honeypot spam protection on contact forms.
