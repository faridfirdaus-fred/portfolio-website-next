# Portfolio Website (Next.js 15)

An earlier iteration of my personal portfolio website, built with Next.js 15 and Tailwind CSS.

This version has since been superseded by [portfolio-website](https://github.com/faridfirdaus-fred/portfolio-website), which moved to a content-driven architecture with Next.js 16. It is kept public as a record of the earlier approach.

## Features

- **Single-page layout** with hero, about, skills, projects, and contact sections
- **Project cards** linking to live demos and repositories
- **Contact form** integrated with EmailJS
- **Responsive design** with dark mode support

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| UI library | NextUI |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion, GSAP, AOS |
| Email | EmailJS |

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Deployment

Deployed on Vercel at https://portfolio-website-next-coral.vercel.app.
