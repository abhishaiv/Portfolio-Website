# Technical Specifications
## Portfolio Website - Technical Implementation Guide

**Project:** Abhishai Vardhan Portfolio Website
**Version:** 1.0
**Date:** December 9, 2024
**Tech Stack:** Next.js 14+ • TypeScript • Tailwind CSS v4

---

## 1. Architecture Overview

### 1.1 Technology Stack

```
Frontend Framework:   Next.js 14.x (App Router)
Language:            TypeScript 5.x
Styling:             Tailwind CSS v4
Fonts:               Geist Sans, Geist Mono (Google Fonts)
Deployment:          Vercel
Version Control:     Git/GitHub
Package Manager:     npm
```

### 1.2 Project Structure

```
portfolio-website/
├── .bmad/                    # BMAD Core framework
├── .claude/                  # Claude Code commands
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   └── favicon.ico          # Favicon
├── components/              # React components
│   ├── Navigation.tsx       # Header navigation
│   ├── HeroSection.tsx      # Hero/landing section
│   ├── WorkSection.tsx      # Projects showcase
│   ├── ProjectCard.tsx      # Individual project card
│   ├── AboutSection.tsx     # About/contact section
│   ├── Footer.tsx           # Site footer
│   ├── LocalTime.tsx        # Real-time clock component
│   └── ui/                  # Base UI components
│       ├── Button.tsx
│       └── Card.tsx
├── sections/                # Legacy section components (to be removed)
├── lib/                     # Utility functions
│   ├── utils.ts            # Helper functions
│   └── constants.ts        # Constants and config
├── types/                   # TypeScript definitions
│   └── index.ts            # Shared type definitions
├── public/                  # Static assets
│   ├── images/             # Image assets
│   └── icons/              # Icon files
├── docs/                    # Documentation
│   ├── PRD.md              # Product Requirements
│   ├── TECH_SPECS.md       # This document
│   └── DESIGN_SYSTEM.md    # Design system guide
├── .gitignore              # Git ignore rules
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── tailwind.config.ts      # Tailwind config (if needed)
├── next.config.ts          # Next.js configuration
└── README.md               # Project readme
```

---

## 2. Component Specifications

### 2.1 Navigation Component

**File:** `components/Navigation.tsx`
**Type:** Client Component (`'use client'`)
**Purpose:** Fixed header navigation with mobile menu

#### Props Interface
```typescript
// No external props - self-contained component
```

#### State Management
```typescript
const [isScrolled, setIsScrolled] = useState<boolean>(false);
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
```

#### Key Features
- Fixed positioning (z-index: 50)
- Scroll detection with useEffect
- Background blur when scrolled
- Mobile hamburger menu animation
- Smooth scroll to anchor links

#### Implementation Details
```typescript
// Scroll detection
useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// Navigation links
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];
```

#### Styling Classes
```
Base:        fixed top-0 left-0 right-0 z-50
Scrolled:    bg-background/80 backdrop-blur-md border-b border-border
Desktop:     hidden md:flex items-center gap-8
Mobile:      md:hidden
```

#### Responsive Behavior
- **Desktop (≥768px):** Horizontal menu visible
- **Mobile (<768px):** Hamburger menu, dropdown panel

---

### 2.2 Hero Section Component

**File:** `components/HeroSection.tsx`
**Type:** Client Component
**Purpose:** Landing section with animated greetings

#### State Management
```typescript
const greetings = [
  { lang: 'French', text: 'Bonjour' },
  { lang: 'Hindi', text: 'नमस्ते' },
  { lang: 'Italian', text: 'Ciao' },
  { lang: 'Portuguese', text: 'Olá' },
  { lang: 'Japanese', text: 'こんにちは' },
  { lang: 'Swedish', text: 'Hej' },
  { lang: 'German', text: 'Hallo' },
  { lang: 'Dutch', text: 'Hallo' },
  { lang: 'Spanish', text: 'Hola' },
  { lang: 'English', text: 'Hello' },
];

const [currentGreeting, setCurrentGreeting] = useState<number>(0);
```

#### Animation Logic
```typescript
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentGreeting((prev) => (prev + 1) % greetings.length);
  }, 2000); // Change every 2 seconds

  return () => clearInterval(interval);
}, []);
```

#### Layout Structure
```
Section (min-h-screen, centered)
  └── Container (max-w-6xl)
        ├── Animated Greeting (text-sm, text-muted)
        ├── Main Heading (text-5xl md:text-7xl lg:text-8xl)
        ├── Subtitle (text-xl md:text-2xl lg:text-3xl)
        ├── Description Paragraphs
        └── CTA Buttons (flex gap-4)
```

#### Typography Scale
```
Greeting:     text-sm md:text-base
Heading:      text-5xl md:text-7xl lg:text-8xl
Subtitle:     text-xl md:text-2xl lg:text-3xl
Description:  text-base md:text-lg
```

---

### 2.3 Work Section Component

**File:** `components/WorkSection.tsx`
**Type:** Client Component
**Purpose:** Display portfolio projects in grid

#### Props Interface
```typescript
// Uses imported Project type from @/types
```

#### Data Structure
```typescript
const projects: Project[] = [
  {
    id: string;
    title: string;
    description: string;
    image?: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
  },
  // ... more projects
];
```

#### Grid Layout
```
Desktop (≥768px):  grid-cols-2 gap-12 md:gap-16
Mobile (<768px):   grid-cols-1
```

#### Component Composition
```
Section
  └── Container (max-w-7xl)
        ├── Section Header
        │     ├── Title: "Recent Work"
        │     └── Subtitle
        ├── Projects Grid
        │     └── ProjectCard (mapped)
        └── "More work" Link
```

---

### 2.4 Project Card Component

**File:** `components/ProjectCard.tsx`
**Type:** Client Component
**Purpose:** Individual project tile with hover effects

#### Props Interface
```typescript
interface ProjectCardProps {
  project: Project;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}
```

#### Hover Effects
```css
/* Image scaling */
.group:hover img {
  transform: scale(1.05);
  transition: transform 500ms;
}

/* Overlay appearance */
.group:hover .overlay {
  opacity: 1;
  transition: opacity 300ms;
}

/* Title color change */
.group:hover h3 {
  color: var(--accent);
}
```

#### Structure
```
Link (group)
  ├── Image Container (aspect-[4/3])
  │     ├── Image
  │     └── Overlay ("View Project →")
  └── Info Container
        ├── Title (h3)
        ├── Meta (technologies)
        └── Description
```

---

### 2.5 About Section Component

**File:** `components/AboutSection.tsx`
**Type:** Server Component
**Purpose:** About and contact information

#### Layout
```
Section (py-20 md:py-32, border-t)
  └── Container (max-w-7xl)
        └── Grid (grid-cols-1 lg:grid-cols-2)
              ├── Left Column
              │     ├── Heading
              │     └── Bio Paragraphs
              └── Right Column
                    ├── Contact Info
                    │     ├── Email (mailto:)
                    │     └── Phone (tel:)
                    └── Social Links
```

#### Link Styling
```
Base:   text-lg hover:text-accent
Effect: transition-colors
```

---

### 2.6 Local Time Component

**File:** `components/LocalTime.tsx`
**Type:** Client Component
**Purpose:** Real-time clock display

#### State Management
```typescript
const [time, setTime] = useState<string>('');
```

#### Time Update Logic
```typescript
useEffect(() => {
  const updateTime = () => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Kolkata', // IST
      hour12: true,
    };
    const timeString = now.toLocaleTimeString('en-US', options);
    setTime(timeString);
  };

  updateTime(); // Initial call
  const interval = setInterval(updateTime, 1000); // Update every second

  return () => clearInterval(interval); // Cleanup
}, []);
```

#### Display Format
```
Output: "11:30 PM IST"
```

---

### 2.7 Footer Component

**File:** `components/Footer.tsx`
**Type:** Server Component
**Purpose:** Site footer with metadata

#### Structure
```
Footer (border-t py-12)
  └── Container (max-w-7xl)
        ├── Grid (3 columns)
        │     ├── Column 1: Version & Time
        │     │     ├── "2024 © Edition"
        │     │     └── <LocalTime />
        │     ├── Column 2: Navigation Links
        │     └── Column 3: Social Links
        └── Bottom Bar
              ├── Copyright
              └── Tech Stack
```

#### Data Arrays
```typescript
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/abhishaiv' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/abhishaivardhan' },
  { name: 'Twitter', url: 'https://twitter.com/abhishaiv' },
  { name: 'Instagram', url: 'https://instagram.com/abhishaiv' },
];

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];
```

---

## 3. Styling System

### 3.1 Color Palette

#### CSS Custom Properties
```css
:root {
  --background: #0a0a0a;    /* Near black */
  --foreground: #f5f5f5;    /* Off white */
  --accent: #ffffff;         /* Pure white */
  --muted: #6b6b6b;         /* Gray */
  --border: #1a1a1a;        /* Dark gray */
}
```

#### Tailwind Theme Extension
```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-accent: var(--accent);
  --color-muted: var(--muted);
  --color-border: var(--border);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

#### Usage in Components
```tsx
className="bg-background text-foreground"
className="text-muted hover:text-accent"
className="border-border"
```

---

### 3.2 Typography

#### Font Configuration
```typescript
// app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
```

#### Type Scale
```
text-sm:    0.875rem (14px)
text-base:  1rem (16px)
text-lg:    1.125rem (18px)
text-xl:    1.25rem (20px)
text-2xl:   1.5rem (24px)
text-3xl:   1.875rem (30px)
text-4xl:   2.25rem (36px)
text-5xl:   3rem (48px)
text-6xl:   3.75rem (60px)
text-7xl:   4.5rem (72px)
text-8xl:   6rem (96px)
```

#### Font Weights
```
font-normal:  400
font-medium:  500
font-semibold: 600
font-bold:    700
```

---

### 3.3 Spacing System

#### Padding/Margin Scale
```
px-4:   1rem (16px)
px-6:   1.5rem (24px)
px-8:   2rem (32px)
px-12:  3rem (48px)
px-16:  4rem (64px)

py-12:  3rem (48px)
py-20:  5rem (80px)
py-32:  8rem (128px)
```

#### Container Max Widths
```
max-w-2xl:  42rem (672px)
max-w-4xl:  56rem (896px)
max-w-6xl:  72rem (1152px)
max-w-7xl:  80rem (1280px)
```

---

### 3.4 Responsive Breakpoints

```css
/* Tailwind default breakpoints */
sm:   640px   /* Small devices */
md:   768px   /* Tablets */
lg:   1024px  /* Laptops */
xl:   1280px  /* Desktops */
2xl:  1536px  /* Large desktops */
```

#### Usage Pattern
```tsx
className="text-base md:text-lg lg:text-xl"
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
className="px-6 lg:px-12"
```

---

### 3.5 Animation Utilities

#### Transitions
```css
transition-colors
transition-opacity
transition-transform
transition-all
```

#### Duration
```css
duration-200   /* 200ms - quick */
duration-300   /* 300ms - standard */
duration-500   /* 500ms - moderate */
duration-700   /* 700ms - slow */
```

#### Easing
```css
ease-in
ease-out
ease-in-out
```

#### Transforms
```css
hover:scale-105    /* 1.05x scale */
hover:-translate-y-1  /* Lift effect */
```

---

## 4. Type Definitions

### 4.1 Shared Types

**File:** `types/index.ts`

```typescript
// Project interface
export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

// Skill interface
export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  proficiency?: number; // 0-100
}

// Social link interface
export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

// Navigation link interface
export interface NavLink {
  name: string;
  href: string;
}

// Greeting interface
export interface Greeting {
  lang: string;
  text: string;
}
```

---

## 5. Performance Optimization

### 5.1 Image Optimization

#### Using next/image
```tsx
import Image from 'next/image';

<Image
  src="/images/project.jpg"
  alt="Project screenshot"
  width={800}
  height={600}
  loading="lazy"  // Lazy load
  quality={85}    // 85% quality
  placeholder="blur"  // Blur placeholder
/>
```

#### Image Formats
- Use WebP format when possible
- Provide fallbacks for older browsers
- Optimize images before upload (max 500KB per image)

### 5.2 Code Splitting

#### Dynamic Imports
```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false, // Disable SSR if needed
});
```

### 5.3 Font Optimization

```typescript
// Preload fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', // Font display strategy
  preload: true,
});
```

### 5.4 CSS Optimization

- Use Tailwind's purge feature (automatic in Next.js)
- Avoid unused CSS
- Use CSS custom properties for theme values
- Minimize animations on low-end devices

---

## 6. Build Configuration

### 6.1 next.config.ts

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ['image/webp'],
    domains: [], // Add external image domains
  },

  // Compression
  compress: true,

  // Strict mode
  reactStrictMode: true,

  // Experimental features
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
```

### 6.2 tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## 7. Deployment

### 7.1 Vercel Deployment

#### Prerequisites
- GitHub repository connected
- Vercel account setup
- Environment variables configured

#### Build Settings
```
Framework Preset:     Next.js
Build Command:        npm run build
Output Directory:     .next
Install Command:      npm install
Development Command:  npm run dev
```

#### Environment Variables
```
# Add in Vercel dashboard
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX (if using analytics)
```

### 7.2 Custom Domain

1. Add domain in Vercel project settings
2. Configure DNS records:
   ```
   Type    Name    Value
   A       @       76.76.21.21
   CNAME   www     cname.vercel-dns.com
   ```
3. Enable HTTPS (automatic with Vercel)

---

## 8. Testing Strategy

### 8.1 Manual Testing Checklist

- [ ] All pages load correctly
- [ ] Navigation works (all links)
- [ ] Mobile menu functions
- [ ] Animations are smooth
- [ ] Images load and display
- [ ] Forms submit (if applicable)
- [ ] Links open correctly (internal/external)
- [ ] Responsive on all breakpoints
- [ ] Cross-browser testing
- [ ] Performance acceptable

### 8.2 Automated Testing

#### Lighthouse Audit
```bash
npm run build
npm run start
# Run Lighthouse in Chrome DevTools
```

**Target Scores:**
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

#### Type Checking
```bash
npx tsc --noEmit
```

#### Linting
```bash
npm run lint
```

---

## 9. Maintenance & Updates

### 9.1 Dependency Updates

```bash
# Check for outdated packages
npm outdated

# Update packages
npm update

# Update Next.js specifically
npm install next@latest react@latest react-dom@latest
```

### 9.2 Content Updates

#### Adding New Projects
1. Add project data to `components/WorkSection.tsx`
2. Add project images to `public/images/`
3. Optimize images before upload
4. Test display and links

#### Updating Personal Info
- Email/Phone: `components/AboutSection.tsx`
- Social Links: `components/AboutSection.tsx` and `components/Footer.tsx`
- Bio: `components/HeroSection.tsx` and `components/AboutSection.tsx`

---

## 10. Security Considerations

### 10.1 Best Practices

- No sensitive data in client-side code
- Use environment variables for API keys
- Validate all user inputs (if forms added)
- Keep dependencies updated
- Use HTTPS only (enforced by Vercel)
- Implement Content Security Policy headers

### 10.2 Headers Configuration

```typescript
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};
```

---

## 11. Troubleshooting

### 11.1 Common Issues

#### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

#### Type Errors
```bash
# Check types
npx tsc --noEmit

# Install missing types
npm install --save-dev @types/node @types/react
```

#### Styling Issues
```bash
# Rebuild Tailwind
npm run dev
# Styles should hot-reload
```

---

## 12. Documentation References

### 12.1 Official Documentation

- **Next.js:** https://nextjs.org/docs
- **React:** https://react.dev
- **TypeScript:** https://www.typescriptlang.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Vercel:** https://vercel.com/docs

### 12.2 Internal Documentation

- **PRD:** `/docs/PRD.md`
- **Design System:** `/docs/DESIGN_SYSTEM.md`
- **Component Architecture:** `/docs/COMPONENT_ARCHITECTURE.md`

---

## Appendix: Quick Reference

### Component Import Map
```typescript
// Page imports
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WorkSection from '@/components/WorkSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

// UI imports
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

// Type imports
import type { Project, NavLink } from '@/types';
```

### Color Variables Quick Reference
```css
bg-background      /* #0a0a0a */
text-foreground    /* #f5f5f5 */
text-accent        /* #ffffff */
text-muted         /* #6b6b6b */
border-border      /* #1a1a1a */
```

---

**Document Version:** 1.0
**Last Updated:** December 9, 2024
**Maintained By:** Abhishai Vardhan
