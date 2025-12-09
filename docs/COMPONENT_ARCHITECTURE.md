# Component Architecture
## Portfolio Website Component System

**Project:** Abhishai Vardhan Portfolio Website
**Framework:** Next.js 14+ with App Router
**Version:** 1.0
**Date:** December 9, 2024

---

## 1. Architecture Overview

### 1.1 Component Hierarchy

```
App Root (layout.tsx)
│
├── Navigation (fixed, global)
│
└── Page (page.tsx)
     │
     ├── HeroSection
     │    └── (animated greetings)
     │
     ├── WorkSection
     │    └── ProjectCard (x4+)
     │         ├── Image
     │         ├── Title
     │         ├── Meta
     │         └── Description
     │
     ├── AboutSection
     │    ├── Bio Content
     │    ├── Contact Info
     │    └── Social Links
     │
     └── Footer
          ├── LocalTime
          ├── Navigation Links
          └── Social Links
```

### 1.2 Component Types

```
Server Components (default):
- AboutSection
- Footer
- (Future: Project detail pages)

Client Components ('use client'):
- Navigation (scroll detection, mobile menu)
- HeroSection (greeting animation)
- WorkSection (hover interactions)
- ProjectCard (interactive hover)
- LocalTime (real-time updates)
```

---

## 2. Component Specifications

### 2.1 Navigation Component

**File:** `components/Navigation.tsx`
**Type:** Client Component
**Purpose:** Global navigation with scroll behavior

#### Interface
```typescript
// Self-contained, no props
export default function Navigation(): JSX.Element
```

#### Internal State
```typescript
const [isScrolled, setIsScrolled] = useState<boolean>(false);
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
```

#### Data Structure
```typescript
const navLinks: NavLink[] = [
  { name: string, href: string }
];
```

#### Behavior
- Fixed position (z-index: 50)
- Transparent when scrolled < 50px
- Solid background with blur when scrolled > 50px
- Mobile menu toggles on hamburger click
- Smooth scroll to anchor links
- Auto-close mobile menu on link click

#### Dependencies
```typescript
import Link from 'next/link';
import { useState, useEffect } from 'react';
```

#### Styling Approach
- Tailwind utility classes
- Conditional classes based on scroll state
- CSS transitions for smooth state changes

---

### 2.2 Hero Section Component

**File:** `components/HeroSection.tsx`
**Type:** Client Component
**Purpose:** Landing section with animated content

#### Interface
```typescript
export default function HeroSection(): JSX.Element
```

#### Internal State
```typescript
const greetings: Greeting[] = [
  { lang: string, text: string }
];
const [currentGreeting, setCurrentGreeting] = useState<number>(0);
```

#### Behavior
- Cycle through greetings every 2 seconds
- Infinite loop (wraps around)
- Fade transition between greetings
- Full viewport height on desktop
- Responsive text scaling
- Two CTA buttons with smooth scrolling

#### Animation Logic
```typescript
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentGreeting((prev) => (prev + 1) % greetings.length);
  }, 2000);
  return () => clearInterval(interval);
}, []);
```

#### Content Areas
1. **Greeting** - Animated, rotating
2. **Name** - Large, bold heading
3. **Title** - Professional role
4. **Description** - Value proposition (2 paragraphs)
5. **CTAs** - Primary and secondary buttons

---

### 2.3 Work Section Component

**File:** `components/WorkSection.tsx`
**Type:** Client Component
**Purpose:** Display project portfolio

#### Interface
```typescript
export default function WorkSection(): JSX.Element
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
  }
];
```

#### Layout
- Section header with title and subtitle
- Grid: 2 columns (desktop), 1 column (mobile)
- Gap: 48-64px between cards
- "More work" link at bottom

#### Composition
```tsx
<section>
  <SectionHeader />
  <ProjectGrid>
    {projects.map(project => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </ProjectGrid>
  <MoreWorkLink />
</section>
```

---

### 2.4 Project Card Component

**File:** `components/ProjectCard.tsx`
**Type:** Client Component
**Purpose:** Individual project showcase

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

#### Structure
```
Link (group, cursor-pointer)
  ├── ImageContainer (aspect-[4/3])
  │    ├── Image (or placeholder)
  │    └── Overlay (hover effect)
  │         └── "View Project →"
  └── InfoContainer
       ├── Title (h3, hover:text-accent)
       ├── Technologies (comma-separated)
       └── Description (line-clamp-2)
```

#### Hover States
- Image scales to 1.05x (500ms)
- Overlay fades in (300ms)
- Title changes to accent color (300ms)
- Cursor changes to pointer

#### Fallback
If no image provided, show emoji placeholder with neutral background.

---

### 2.5 About Section Component

**File:** `components/AboutSection.tsx`
**Type:** Server Component
**Purpose:** Bio and contact information

#### Interface
```typescript
export default function AboutSection(): JSX.Element
```

#### Layout
```
Section (border-top)
  └── Grid (2 columns desktop, 1 mobile)
       ├── LeftColumn
       │    ├── Heading: "Let's work together"
       │    └── Bio Paragraphs
       └── RightColumn
            ├── ContactInfo
            │    ├── Email (mailto:)
            │    └── Phone (tel:)
            └── SocialLinks
                 ├── GitHub
                 ├── LinkedIn
                 ├── Twitter
                 └── Instagram
```

#### Content Structure
- **Heading:** Large, impactful
- **Bio:** 2-3 paragraphs, conversational tone
- **Contact:** Clickable email/phone
- **Socials:** External links (open in new tab)

#### Responsive Behavior
- Two columns → Stacked on mobile
- Contact info remains easily accessible
- Touch-friendly link targets (44x44px min)

---

### 2.6 Local Time Component

**File:** `components/LocalTime.tsx`
**Type:** Client Component
**Purpose:** Real-time clock display

#### Interface
```typescript
export default function LocalTime(): JSX.Element
```

#### State
```typescript
const [time, setTime] = useState<string>('');
```

#### Logic
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
    setTime(now.toLocaleTimeString('en-US', options));
  };

  updateTime(); // Initial
  const interval = setInterval(updateTime, 1000);
  return () => clearInterval(interval);
}, []);
```

#### Display
```tsx
<div className="text-sm text-muted">
  {time} <span className="ml-1">IST</span>
</div>
```

#### Considerations
- Hydration: Initial render may show empty
- Solution: Use suppressHydrationWarning or accept brief flash
- Updates every second
- Lightweight, minimal re-renders

---

### 2.7 Footer Component

**File:** `components/Footer.tsx`
**Type:** Server Component
**Purpose:** Site footer with metadata

#### Interface
```typescript
export default function Footer(): JSX.Element
```

#### Data Structures
```typescript
const socialLinks: { name: string; url: string }[] = [...];
const navLinks: { name: string; href: string }[] = [...];
const currentYear = new Date().getFullYear();
```

#### Layout
```
Footer (border-top)
  └── Container
       ├── MainGrid (3 columns)
       │    ├── Column1: Version & LocalTime
       │    ├── Column2: Navigation
       │    └── Column3: Socials
       └── BottomBar
            ├── Copyright
            └── Tech Stack
```

#### Composition
- Imports LocalTime component
- Maps over link arrays
- Responsive grid (3 col → 1 col)

---

### 2.8 UI Components

#### Button Component

**File:** `components/ui/Button.tsx`
**Type:** Client Component

```typescript
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export default function Button(props: ButtonProps): JSX.Element
```

**Variants:**
- **Primary:** Solid background, high contrast
- **Secondary:** Muted background
- **Outline:** Border only, transparent fill

**Usage:**
```tsx
<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>
```

#### Card Component

**File:** `components/ui/Card.tsx`
**Type:** Server Component

```typescript
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card(props: CardProps): JSX.Element
```

**Purpose:** Reusable content wrapper with consistent styling

**Usage:**
```tsx
<Card>
  <h3>Title</h3>
  <p>Content</p>
</Card>
```

---

## 3. Data Flow

### 3.1 Static Data (Current Implementation)

```
Source: Hardcoded in components
Projects → WorkSection component
Social Links → AboutSection, Footer
Navigation Links → Navigation, Footer
```

### 3.2 Future: Dynamic Data

```
Source: API, CMS, or JSON files
Projects → lib/projects.ts → WorkSection
Content → lib/content.ts → Components
```

**Potential Setup:**
```typescript
// lib/projects.ts
export const projects: Project[] = [
  // Project data
];

// components/WorkSection.tsx
import { projects } from '@/lib/projects';
```

---

## 4. State Management

### 4.1 Component-Level State (Current)

```typescript
// Navigation
const [isScrolled, setIsScrolled] = useState(false);
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// HeroSection
const [currentGreeting, setCurrentGreeting] = useState(0);

// LocalTime
const [time, setTime] = useState('');
```

**Rationale:** Simple, no global state needed for portfolio site.

### 4.2 Future: Global State (If Needed)

**Options:**
- React Context (for theme, user preferences)
- Zustand (lightweight state management)
- Redux Toolkit (complex applications)

**Example Use Cases:**
- Dark/Light mode toggle
- User language preference
- Analytics state
- Contact form state

---

## 5. Performance Optimizations

### 5.1 Component-Level

#### Memoization
```typescript
// Expensive calculations
const memoizedValue = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);

// Callback functions
const handleClick = useCallback(() => {
  // Handler logic
}, [dependencies]);
```

#### Lazy Loading
```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Spinner />,
  ssr: false, // Client-side only if needed
});
```

### 5.2 Image Optimization

```typescript
import Image from 'next/image';

<Image
  src="/images/project.jpg"
  alt="Project screenshot"
  width={800}
  height={600}
  loading="lazy"
  quality={85}
  placeholder="blur"
/>
```

### 5.3 Code Splitting

Next.js automatically splits code by route. Components are bundled efficiently.

**Manual Splitting:**
```typescript
// Only load heavy libraries when needed
const loadLibrary = async () => {
  const { default: lib } = await import('heavy-library');
  return lib;
};
```

---

## 6. Error Handling

### 6.1 Error Boundaries (Future)

```typescript
// components/ErrorBoundary.tsx
class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    // Log error
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}
```

### 6.2 Loading States

```typescript
// For async data
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);

if (isLoading) return <Spinner />;
if (error) return <Error message={error.message} />;
return <Content />;
```

---

## 7. Testing Strategy

### 7.1 Component Testing

**Tools:** React Testing Library, Jest

```typescript
// Example: Navigation.test.tsx
import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('renders navigation links', () => {
    render(<Navigation />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Work')).toBeInTheDocument();
  });

  it('toggles mobile menu', () => {
    render(<Navigation />);
    const button = screen.getByLabelText('Toggle menu');
    fireEvent.click(button);
    // Assert menu is visible
  });
});
```

### 7.2 Integration Testing

Test component interactions:
- Navigation scroll behavior
- Greeting animation cycles
- Project card hover effects
- Link navigation

### 7.3 Visual Regression Testing

**Tools:** Chromatic, Percy, or Playwright

Capture screenshots and compare across changes.

---

## 8. Accessibility Considerations

### 8.1 Component Requirements

#### Navigation
- Keyboard navigable (Tab, Enter)
- ARIA labels for mobile menu button
- Focus indicators visible
- Skip to content link (future)

#### Buttons & Links
- Adequate size (44x44px minimum)
- Clear focus states
- Descriptive text or aria-label
- External links indicate with icon or text

#### Images
- Alt text for all images
- Decorative images: alt=""
- Loading states with aria-live

#### Forms (Future)
- Labels for all inputs
- Error messages associated with inputs
- Required fields indicated
- Keyboard accessible

### 8.2 ARIA Usage

```tsx
// Navigation
<button aria-label="Toggle menu" aria-expanded={isOpen}>
  <span className="sr-only">Menu</span>
  {/* Icon */}
</button>

// Loading state
<div role="status" aria-live="polite">
  Loading...
</div>

// Alert
<div role="alert">
  Error occurred
</div>
```

---

## 9. Component Checklist

### When Creating New Components

- [ ] TypeScript interface defined for props
- [ ] Props validated with TypeScript
- [ ] Responsive design implemented
- [ ] Accessibility features included
- [ ] Loading states handled (if async)
- [ ] Error states handled (if async)
- [ ] Hover/focus states styled
- [ ] Mobile-tested
- [ ] Performance optimized (memoization if needed)
- [ ] Follows design system
- [ ] Reusable and composable
- [ ] Documented with comments
- [ ] Exported from component file
- [ ] Imported and used correctly

---

## 10. Component Dependencies

### 10.1 Dependency Graph

```
Navigation
  ├── Link (next/link)
  └── useState, useEffect (react)

HeroSection
  ├── useState, useEffect (react)
  └── (greetings array - internal)

WorkSection
  ├── ProjectCard
  └── Project[] (types)

ProjectCard
  ├── Link (next/link)
  └── Project (types)

AboutSection
  └── (no dependencies - static content)

Footer
  ├── Link (next/link)
  ├── LocalTime
  └── (arrays - internal)

LocalTime
  ├── useState, useEffect (react)
  └── Intl.DateTimeFormat (native)
```

### 10.2 External Dependencies

```json
{
  "dependencies": {
    "next": "^16.0.8",
    "react": "^18.x",
    "react-dom": "^18.x",
    "typescript": "^5.x",
    "tailwindcss": "^4.x"
  },
  "devDependencies": {
    "@types/node": "^20.x",
    "@types/react": "^18.x",
    "eslint": "^8.x",
    "eslint-config-next": "^16.x"
  }
}
```

---

## 11. Future Enhancements

### 11.1 Planned Components

```
ProjectDetailPage
  ├── Hero with project title
  ├── Gallery of images
  ├── Description
  ├── Technologies used
  ├── Challenges & solutions
  └── Links (live, GitHub)

ContactForm
  ├── Input fields (name, email, message)
  ├── Validation
  ├── Submit handling
  └── Success/error feedback

BlogSection
  ├── Article list
  ├── Article card
  ├── Pagination
  └── Category filter

TestimonialsSection
  ├── Testimonial card
  ├── Client info
  └── Carousel navigation
```

### 11.2 Advanced Features

- Scroll-triggered animations (Framer Motion)
- Parallax effects
- Custom cursor
- Page transitions
- Dark/Light mode toggle
- Search functionality
- Blog with MDX
- CMS integration (Sanity, Contentful)

---

## 12. Migration Guide

### 12.1 From Current to Enhanced

**Step 1: Extract Data**
```typescript
// Before: Data in component
const projects = [/* ... */];

// After: Data in separate file
// lib/data/projects.ts
export const projects: Project[] = [/* ... */];

// components/WorkSection.tsx
import { projects } from '@/lib/data/projects';
```

**Step 2: Add CMS**
```typescript
// lib/cms.ts
export async function getProjects() {
  const response = await fetch('API_URL/projects');
  return response.json();
}

// components/WorkSection.tsx
const projects = await getProjects(); // Server Component
```

**Step 3: Implement Forms**
```typescript
// components/ContactForm.tsx
'use client';

export default function ContactForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit logic
  };

  return <form onSubmit={handleSubmit}>/* ... */</form>;
}
```

---

## 13. Best Practices

### 13.1 Component Design

✅ **Single Responsibility:** Each component does one thing well
✅ **Composition:** Build complex UIs from simple components
✅ **Reusability:** Design components to be used in multiple contexts
✅ **Props Interface:** Clear TypeScript interfaces for all props
✅ **Default Props:** Provide sensible defaults where appropriate

### 13.2 Performance

✅ **Lazy Load:** Load components only when needed
✅ **Memoize:** Use React.memo for expensive renders
✅ **Code Split:** Dynamic imports for heavy components
✅ **Optimize Images:** Always use next/image
✅ **Minimize Re-renders:** Careful with useState, useEffect

### 13.3 Code Quality

✅ **TypeScript:** Type everything
✅ **ESLint:** Follow linting rules
✅ **Comments:** Document complex logic
✅ **Naming:** Clear, descriptive names
✅ **Consistency:** Follow established patterns

---

## 14. Component Diagram

```
┌─────────────────────────────────────┐
│          App Layout (Root)          │
│  ┌───────────────────────────────┐  │
│  │       Navigation (fixed)      │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │        Page Component         │  │
│  │                               │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │     HeroSection         │  │  │
│  │  │  - Animated Greetings   │  │  │
│  │  └─────────────────────────┘  │  │
│  │                               │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │     WorkSection         │  │  │
│  │  │  ┌─────┐  ┌─────┐       │  │  │
│  │  │  │Card │  │Card │       │  │  │
│  │  │  └─────┘  └─────┘       │  │  │
│  │  │  ┌─────┐  ┌─────┐       │  │  │
│  │  │  │Card │  │Card │       │  │  │
│  │  │  └─────┘  └─────┘       │  │  │
│  │  └─────────────────────────┘  │  │
│  │                               │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │    AboutSection         │  │  │
│  │  │  - Bio                  │  │  │
│  │  │  - Contact              │  │  │
│  │  └─────────────────────────┘  │  │
│  │                               │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │          Footer               │  │
│  │  - LocalTime Component        │  │
│  │  - Links                      │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

---

**Architecture Version:** 1.0
**Last Updated:** December 9, 2024
**Maintained By:** Abhishai Vardhan

---

## Quick Component Reference

```typescript
// Import pattern
import ComponentName from '@/components/ComponentName';

// Client components (needs 'use client')
- Navigation
- HeroSection
- WorkSection
- ProjectCard
- LocalTime
- Button

// Server components (default)
- AboutSection
- Footer
- Card
- (Most static components)

// Types
import type { Project, NavLink } from '@/types';
```
