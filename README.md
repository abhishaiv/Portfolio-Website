# Abhishai Vardhan - Portfolio Website

A modern, high-performance portfolio website showcasing AI products and professional work. Built with Next.js 14+, TypeScript, and Tailwind CSS v4.

[![Next.js](https://img.shields.io/badge/Next.js-14+-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8)](https://tailwindcss.com/)

## 🌟 Features

### Pages
- **Homepage** - Hero section, featured projects, about preview
- **Work** (`/work`) - 11 AI projects with filtering (All, Design, Development)
- **About** (`/about`) - Services, credentials, professional background
- **Contact** (`/contact`) - 6-field contact form with validation
- **Project Details** (`/work/[slug]`) - Individual pages for each project

### SEO & Performance
- ✅ Open Graph and Twitter Card metadata
- ✅ Dynamic sitemap.xml (20 pages)
- ✅ robots.txt for search engines
- ✅ JSON-LD structured data
- ✅ Optimized with Next.js App Router (SSG)
- ✅ 20 pages pre-rendered at build time

### Design & UX
- ✅ Dark theme (#0a0a0a background)
- ✅ Responsive design (mobile-first)
- ✅ Smooth scroll animations with Intersection Observer
- ✅ Custom animation system (fadeIn, slideIn, stagger delays)
- ✅ Geist Sans typography
- ✅ Real-time IST clock in footer

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/abhishaiv/Portfolio-Website.git
cd Portfolio-Website
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Run development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio-website/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage
│   ├── work/                # Work page + project details
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx  # Dynamic project pages
│   ├── about/page.tsx       # About page
│   ├── contact/page.tsx     # Contact page
│   ├── sitemap.ts           # Dynamic sitemap
│   ├── robots.ts            # Robots configuration
│   └── globals.css          # Global styles + animations
├── components/              # React components
│   ├── Navigation.tsx       # Header navigation
│   ├── HeroSection.tsx      # Homepage hero
│   ├── WorkSection.tsx      # Featured projects
│   ├── AboutSection.tsx     # Contact CTA
│   ├── Footer.tsx           # Site footer
│   ├── ProjectCard.tsx      # Project card component
│   ├── WorkProjectCard.tsx  # Enhanced work page card
│   ├── ProjectFilter.tsx    # Category filter
│   ├── FadeIn.tsx           # Scroll animation wrapper
│   ├── LocalTime.tsx        # Real-time clock
│   ├── StructuredData.tsx   # JSON-LD schema
│   └── ui/                  # Base UI components
├── lib/
│   └── projects.ts          # Project data (11 projects)
├── types/
│   └── index.ts             # TypeScript definitions
├── docs/                    # Documentation
│   ├── PRD.md              # Product requirements
│   ├── TECH_SPECS.md       # Technical specs
│   ├── DESIGN_SYSTEM.md    # Design guidelines
│   ├── COMPONENT_ARCHITECTURE.md
│   ├── IMPLEMENTATION_CHECKLIST.md
│   └── DEPLOYMENT_GUIDE.md
└── public/                  # Static assets
```

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 14+ (App Router) |
| **Language** | TypeScript 5.x |
| **Styling** | Tailwind CSS v4 |
| **Fonts** | Geist Sans, Geist Mono |
| **Animation** | Intersection Observer API |
| **SEO** | next/metadata, sitemap, robots |
| **Deployment** | Vercel (recommended) |

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start dev server on localhost:3000
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npx tsc --noEmit     # TypeScript type checking
```

## 🎨 Customization

### Update Personal Information

1. **Contact Details** - Update in:
   - `components/AboutSection.tsx`
   - `components/Footer.tsx`
   - `app/contact/page.tsx`

2. **Projects** - Edit `lib/projects.ts`:
```typescript
export const allProjects: Project[] = [
  {
    id: '1',
    title: 'Your Project',
    slug: 'your-project',
    description: '...',
    year: 2024,
    // ... more fields
  },
];
```

3. **Metadata** - Update `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: 'Your Name | Title',
  // ... more fields
};
```

### Add Project Images

1. Add images to `public/images/projects/`
2. Update project objects in `lib/projects.ts`:
```typescript
image: '/images/projects/your-project.jpg'
```

### Environment Variables

See `.env.example` for available configuration options.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import repository on [Vercel](https://vercel.com/new)
3. Configure:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. Deploy!

### After Deployment

1. Update `metadataBase` in `app/layout.tsx` to your domain
2. Update `baseUrl` in `app/sitemap.ts`
3. Submit sitemap to Google Search Console
4. Configure analytics (optional)

See `docs/DEPLOYMENT_GUIDE.md` for detailed instructions.

## 📊 Project Status

| Phase | Status | Completion |
|-------|--------|------------|
| **Core Pages** | ✅ Complete | 100% |
| **Project Details** | ✅ Complete | 100% |
| **SEO** | ✅ Complete | 100% |
| **Animations** | ✅ Complete | 100% |
| **Testing** | ⚠️ Pending | 0% |
| **Deployment** | ⚠️ Pending | 0% |

**Overall: 85% Complete** - Ready for testing and deployment

## ✅ Completed Features

- [x] 4 core pages (Home, Work, About, Contact)
- [x] 11 individual project detail pages
- [x] Project filtering by category
- [x] Responsive navigation with mobile menu
- [x] Contact form with validation
- [x] SEO optimization (metadata, sitemap, robots, JSON-LD)
- [x] Scroll animations
- [x] Real-time clock (IST)
- [x] Dark theme
- [x] TypeScript throughout
- [x] Build optimization (SSG)

## 🔜 Pending Tasks

- [ ] Add actual project images (currently placeholders)
- [ ] Implement contact form backend
- [ ] Cross-browser testing
- [ ] Mobile device testing
- [ ] Accessibility audit
- [ ] Performance testing (Lighthouse 90+)
- [ ] Production deployment

## 📝 Documentation

- [Product Requirements (PRD)](docs/PRD.md)
- [Technical Specifications](docs/TECH_SPECS.md)
- [Design System](docs/DESIGN_SYSTEM.md)
- [Component Architecture](docs/COMPONENT_ARCHITECTURE.md)
- [Implementation Checklist](docs/IMPLEMENTATION_CHECKLIST.md)
- [Deployment Guide](docs/DEPLOYMENT_GUIDE.md)

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and adapt for your own use.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Live Site**: Coming soon
- **Repository**: [github.com/abhishaiv/Portfolio-Website](https://github.com/abhishaiv/Portfolio-Website)
- **Author**: Abhishai Vardhan
- **Email**: abhishaivardhan21@gmail.com

## 🙏 Acknowledgments

- Design inspired by [Dennis Snellenberg](https://dennissnellenberg.com)
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Fonts by [Vercel](https://vercel.com/font)

---

**Built with** ❤️ **by Abhishai Vardhan**
