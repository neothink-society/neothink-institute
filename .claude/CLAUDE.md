# Neothink Institute

**Domain:** neothinkinstitute.com
**Repository:** https://github.com/neothink-society/neothink-institute
**Organization:** Neothink Society / Supercivilization

## Tech Stack

- **Runtime:** Node.js 24.11.1
- **Framework:** Next.js 16.1.1 (App Router, Turbopack)
- **React:** 19.2.3
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Icons:** Lucide React
- **Theming:** next-themes

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── about/page.tsx     # About page
│   ├── blog/              # Blog section
│   │   ├── page.tsx       # Blog listing
│   │   └── [slug]/page.tsx # Individual blog posts
│   └── contact/page.tsx   # Contact page
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── layout/            # Header, Footer, Navigation
│   └── sections/          # Page sections
└── lib/
    └── utils.ts           # Utility functions
```

## Development Commands

```bash
npm run dev          # Start dev server with Turbopack
npm run build        # Production build
npm run lint         # ESLint check
npm run lint:fix     # ESLint auto-fix
```

## Claude Code Optimizations

- Use shadcn/ui components for consistent design
- Follow App Router conventions (page.tsx, layout.tsx, loading.tsx)
- Responsive design with Tailwind breakpoints (sm, md, lg, xl)
- Server Components by default, Client Components only when needed
- Static generation for blog posts with generateStaticParams
