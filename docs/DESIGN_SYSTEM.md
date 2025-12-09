# Design System & Style Guide
## Portfolio Website Design Language

**Project:** Abhishai Vardhan Portfolio Website
**Style Reference:** Dennis Snellenberg Portfolio
**Design Philosophy:** Minimal • Sophisticated • Cutting-edge

---

## 1. Design Principles

### 1.1 Core Values

**Minimalism**
- Remove unnecessary elements
- Focus on content and white space
- "Less is more" approach
- Clean, uncluttered layouts

**Sophistication**
- Professional aesthetic
- Refined typography
- Subtle interactions
- Premium feel

**Cutting-Edge**
- Modern design patterns
- Smooth animations
- Contemporary color palette
- Latest web technologies

**Clarity**
- Clear hierarchy
- Easy navigation
- Readable typography
- Obvious interactions

---

## 2. Color System

### 2.1 Primary Colors

```css
/* Dark Theme Palette */
--background: #0a0a0a    /* Near Black - Main background */
--foreground: #f5f5f5    /* Off White - Primary text */
--accent:     #ffffff    /* Pure White - Emphasis */
--muted:      #6b6b6b    /* Gray - Secondary text */
--border:     #1a1a1a    /* Dark Gray - Borders/dividers */
```

### 2.2 Color Usage

#### Background
```
Primary:    #0a0a0a (main background)
Cards:      #0a0a0a or subtle #0f0f0f
Overlays:   rgba(10, 10, 10, 0.8)
Blur:       background/80 with backdrop-blur
```

#### Text
```
Primary:    #f5f5f5 (headings, important text)
Secondary:  #6b6b6b (descriptions, meta info)
Links:      #6b6b6b → #f5f5f5 (hover)
Accent:     #ffffff (highlights, active states)
```

#### Interactive Elements
```
Buttons:
  Primary:   bg-foreground text-background
  Secondary: border-foreground text-foreground
  Hover:     opacity or color shift

Links:
  Default:   text-muted
  Hover:     text-accent
  Active:    text-accent
```

### 2.3 Color Contrast Ratios

```
Background / Foreground:  21:1 (AAA)
Background / Muted:       4.5:1 (AA)
Muted / Background:       4.5:1 (AA)
```

All combinations meet WCAG 2.1 AA standards.

---

## 3. Typography

### 3.1 Font Families

**Primary:** Geist Sans
- Weights: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- Usage: Body text, headings, UI elements
- Fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

**Monospace:** Geist Mono
- Weight: 400 (Regular)
- Usage: Code snippets, technical text (if needed)
- Fallback: 'Courier New', monospace

### 3.2 Type Scale

```
Display (Hero):
  text-8xl:  96px / 1.0     (Desktop hero)
  text-7xl:  72px / 1.1     (Desktop hero - medium)
  text-6xl:  60px / 1.2     (Tablet hero)
  text-5xl:  48px / 1.2     (Mobile hero)

Headings:
  h1 (text-6xl):  60px / 1.2    font-medium
  h2 (text-4xl):  36px / 1.3    font-medium
  h3 (text-2xl):  24px / 1.4    font-medium
  h4 (text-xl):   20px / 1.5    font-medium

Body:
  Large (text-lg):   18px / 1.75    font-normal
  Base (text-base):  16px / 1.6     font-normal
  Small (text-sm):   14px / 1.5     font-normal
```

### 3.3 Typography Usage

#### Hero Section
```css
Name:        text-5xl md:text-7xl lg:text-8xl font-medium
Title:       text-xl md:text-2xl lg:text-3xl text-muted
Description: text-base md:text-lg text-muted
Greeting:    text-sm md:text-base text-muted
```

#### Section Headings
```css
Main:        text-4xl md:text-6xl font-medium mb-8
Subsection:  text-2xl md:text-3xl font-medium mb-4
```

#### Body Text
```css
Paragraph:   text-base md:text-lg leading-relaxed
Caption:     text-sm text-muted
Link:        text-base hover:text-accent
```

#### Buttons & CTAs
```css
Primary:     text-base font-medium
Secondary:   text-sm font-medium
```

### 3.4 Line Height

```
Tight:    leading-tight    (1.25)    - Large headings
Snug:     leading-snug     (1.375)   - Headings
Normal:   leading-normal   (1.5)     - UI elements
Relaxed:  leading-relaxed  (1.625)   - Body text
Loose:    leading-loose    (2.0)     - Spacious text
```

### 3.5 Font Weights

```
Normal:     font-normal    (400)    - Body text
Medium:     font-medium    (500)    - Emphasis
Semibold:   font-semibold  (600)    - Strong emphasis
Bold:       font-bold      (700)    - Rare use
```

---

## 4. Spacing System

### 4.1 Spacing Scale (8px base)

```
0:    0px
1:    4px    (0.25rem)
2:    8px    (0.5rem)
3:    12px   (0.75rem)
4:    16px   (1rem)
6:    24px   (1.5rem)
8:    32px   (2rem)
12:   48px   (3rem)
16:   64px   (4rem)
20:   80px   (5rem)
32:   128px  (8rem)
```

### 4.2 Component Spacing

#### Sections
```css
Vertical Padding:
  Mobile:   py-12  (48px)
  Tablet:   py-16  (64px)
  Desktop:  py-20 md:py-32  (80px - 128px)

Horizontal Padding:
  All:      px-6 lg:px-12  (24px - 48px)
```

#### Elements
```css
Between Sections:    mb-12 md:mb-16  (48px - 64px)
Heading to Content:  mb-6 md:mb-8    (24px - 32px)
Paragraphs:          mb-4            (16px)
List Items:          gap-2 md:gap-3  (8px - 12px)
```

#### Cards & Containers
```css
Card Padding:    p-6 md:p-8       (24px - 32px)
Card Gap:        gap-8 md:gap-12  (32px - 48px)
Grid Gap:        gap-12 md:gap-16 (48px - 64px)
```

### 4.3 Layout Containers

```css
Max Widths:
  Content:   max-w-7xl  (1280px)
  Text:      max-w-4xl  (896px)
  Narrow:    max-w-2xl  (672px)

Margins:
  Centered:  mx-auto
  Full:      w-full
```

---

## 5. Layout System

### 5.1 Grid System

#### Two-Column Layout
```css
Base:      grid grid-cols-1
Desktop:   md:grid-cols-2
Gap:       gap-8 md:gap-12 lg:gap-16
```

#### Three-Column Layout
```css
Base:      grid grid-cols-1
Tablet:    md:grid-cols-2
Desktop:   lg:grid-cols-3
Gap:       gap-6 md:gap-8
```

### 5.2 Flexbox Patterns

#### Horizontal Stack
```css
flex items-center gap-4
flex items-center justify-between
```

#### Vertical Stack
```css
flex flex-col gap-4
space-y-4
```

#### Center Everything
```css
flex items-center justify-center min-h-screen
```

### 5.3 Common Layouts

#### Full-Height Hero
```css
min-h-screen
flex items-center justify-center
px-6 lg:px-12
pt-20  /* Account for fixed nav */
```

#### Content Section
```css
py-20 md:py-32
px-6 lg:px-12
max-w-7xl mx-auto
```

#### Two-Column Content
```css
grid grid-cols-1 lg:grid-cols-2
gap-12 lg:gap-20
```

---

## 6. Components

### 6.1 Buttons

#### Primary Button
```css
Visual:   bg-foreground text-background
Size:     px-8 py-4
Shape:    rounded-full
Hover:    hover:bg-accent transition-colors
Text:     text-base font-medium text-center
```

#### Secondary Button
```css
Visual:   border border-foreground text-foreground
Size:     px-8 py-4
Shape:    rounded-full
Hover:    hover:bg-foreground hover:text-background
Text:     text-base font-medium text-center
```

#### Link Button
```css
Visual:   text-muted
Hover:    hover:text-foreground
Icon:     → (arrow)
```

### 6.2 Cards

#### Project Card
```css
Container:  group cursor-pointer
Image:      aspect-[4/3] rounded-lg overflow-hidden
Hover:      scale-105 (image)
Overlay:    bg-background/60 opacity-0 group-hover:opacity-100
Info:       space-y-2 mt-4
```

#### Content Card
```css
Background: bg-background or transparent
Border:     border border-border (optional)
Padding:    p-6 md:p-8
Radius:     rounded-lg
Shadow:     shadow-lg (optional)
```

### 6.3 Navigation

#### Desktop Navigation
```css
Container:  flex items-center gap-8
Link:       text-sm text-muted hover:text-foreground
Active:     text-foreground
```

#### Mobile Menu
```css
Toggle:     w-6 h-5 (hamburger)
Menu:       max-h-0 → max-h-64 (animated)
Background: bg-background/95 backdrop-blur-md
Links:      block py-3
```

---

## 7. Interactions & Animations

### 7.1 Timing Functions

```css
Quick:      duration-200  (200ms)
Standard:   duration-300  (300ms)
Moderate:   duration-500  (500ms)
Slow:       duration-700  (700ms)
```

### 7.2 Easing

```css
Default:    ease-in-out
Smooth:     cubic-bezier(0.4, 0, 0.2, 1)
Bounce:     cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

### 7.3 Common Animations

#### Hover Effects
```css
Scale:       hover:scale-105
Lift:        hover:-translate-y-1
Color:       hover:text-accent
Opacity:     hover:opacity-80
```

#### Transitions
```css
Color:       transition-colors duration-300
Transform:   transition-transform duration-500
All:         transition-all duration-300
Opacity:     transition-opacity duration-200
```

#### Fade In
```css
opacity-0 animate-fade-in
/* Or custom animation */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

#### Slide Up
```css
transform: translateY(20px);
opacity: 0;
/* Animate to */
transform: translateY(0);
opacity: 1;
```

### 7.4 Scroll Animations

```css
Trigger:     Intersection Observer API
Effect:      fade-in, slide-up
Threshold:   0.1 (10% visible)
Once:        true (don't repeat)
```

---

## 8. Responsive Design

### 8.1 Breakpoint Strategy

```
Mobile First Approach:
1. Design for mobile (320px - 767px)
2. Enhance for tablet (768px - 1023px)
3. Optimize for desktop (1024px+)
```

### 8.2 Responsive Patterns

#### Typography
```css
/* Mobile → Desktop */
text-base md:text-lg lg:text-xl
text-4xl md:text-5xl lg:text-6xl
```

#### Spacing
```css
/* Mobile → Desktop */
px-4 md:px-6 lg:px-12
py-12 md:py-16 lg:py-20
gap-4 md:gap-6 lg:gap-8
```

#### Layout
```css
/* Mobile → Desktop */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
flex-col md:flex-row
```

#### Visibility
```css
/* Hide on mobile, show on desktop */
hidden md:block

/* Show on mobile, hide on desktop */
block md:hidden
```

---

## 9. Accessibility

### 9.1 Color Contrast

All text meets WCAG 2.1 AA standards:
- Large text: 3:1 minimum
- Normal text: 4.5:1 minimum
- UI components: 3:1 minimum

### 9.2 Focus States

```css
Visible:     focus:outline-none focus:ring-2 focus:ring-accent
Keyboard:    focus-visible:ring-2
Color:       focus:ring-accent
Offset:      focus:ring-offset-2
```

### 9.3 Interactive Elements

```
Minimum size:     44x44px (touch targets)
Spacing:          8px minimum between targets
Labels:           Visible or aria-label
States:           Hover, focus, active, disabled
```

### 9.4 Semantic HTML

```html
<header>     Navigation
<main>       Main content
<section>    Content sections
<article>    Standalone content
<nav>        Navigation links
<footer>     Footer content
<button>     Interactive buttons
<a>          Links
```

---

## 10. Imagery

### 10.1 Image Specifications

#### Project Thumbnails
```
Aspect Ratio:  4:3 (800x600px)
Format:        WebP (with JPG fallback)
Quality:       85%
Max Size:      500KB
Loading:       Lazy load below fold
Alt Text:      Descriptive, specific
```

#### Optimization
```
Tools:         ImageOptim, Squoosh, Sharp
Compression:   Lossy (85-90% quality)
Responsive:    Multiple sizes via next/image
```

### 10.2 Placeholder States

#### Loading
```css
Background:    bg-border
Animation:     pulse or shimmer
Aspect:        Maintain correct ratio
```

#### Empty State
```
Icon:          Relevant emoji or SVG
Text:          "No image available"
Background:    bg-border
```

---

## 11. Icons & Graphics

### 11.1 Icon Style

```
Style:        Minimalist, line icons
Weight:       1.5px - 2px stroke
Size:         16px, 20px, 24px
Color:        currentColor (inherits text color)
Library:      Heroicons, Lucide, or custom SVG
```

### 11.2 Usage

```tsx
/* Arrow icon for links */
<svg className="w-4 h-4 inline">
  <path d="M5 12h14m-7-7l7 7-7 7"/>
</svg>

/* Social icons */
<svg className="w-5 h-5">
  <!-- Icon path -->
</svg>
```

---

## 12. Motion & Animation Guidelines

### 12.1 When to Animate

**Do:**
- Page load (subtle fade-in)
- Hover states (color, scale)
- Navigation transitions
- Scroll reveals (sections)
- Interactive feedback

**Don't:**
- Excessive movement
- Long animations (> 1s)
- Distracting effects
- Autoplay without user control

### 12.2 Performance

```
Use:          transform, opacity (GPU accelerated)
Avoid:        width, height, margin (reflow)
FPS Target:   60fps
Will-change:  Use sparingly
Debounce:     Scroll listeners
```

### 12.3 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 13. Component Library

### 13.1 Available Components

```
✅ Navigation       - Fixed header with mobile menu
✅ HeroSection      - Landing section with greetings
✅ WorkSection      - Project grid
✅ ProjectCard      - Individual project tile
✅ AboutSection     - Contact and bio
✅ Footer           - Footer with clock
✅ LocalTime        - Real-time clock
✅ Button           - Primary/Secondary/Outline
✅ Card             - Content card wrapper
```

### 13.2 Component Checklist

When creating new components:
- [ ] TypeScript props interface defined
- [ ] Responsive across breakpoints
- [ ] Accessible (keyboard, screen reader)
- [ ] Loading/error states handled
- [ ] Hover/focus states included
- [ ] Performance optimized
- [ ] Documented with comments
- [ ] Follows design system

---

## 14. Design Tokens

### 14.1 CSS Variables

```css
/* Colors */
--background: #0a0a0a;
--foreground: #f5f5f5;
--accent: #ffffff;
--muted: #6b6b6b;
--border: #1a1a1a;

/* Typography */
--font-sans: var(--font-geist-sans);
--font-mono: var(--font-geist-mono);

/* Spacing (use Tailwind classes) */
/* Animation (use Tailwind classes) */
```

### 14.2 Tailwind Config

```typescript
// tailwind.config.ts (if extended)
export default {
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: 'var(--accent)',
        muted: 'var(--muted)',
        border: 'var(--border)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
};
```

---

## 15. Best Practices

### 15.1 Do's

✅ Use consistent spacing (8px grid)
✅ Maintain color contrast ratios
✅ Keep animations subtle and purposeful
✅ Test on multiple devices
✅ Optimize images before upload
✅ Use semantic HTML
✅ Follow accessibility guidelines
✅ Keep code DRY (reusable components)

### 15.2 Don'ts

❌ Mix different design patterns
❌ Use colors outside the palette
❌ Create overly complex animations
❌ Ignore mobile experience
❌ Use large, unoptimized images
❌ Skip accessibility features
❌ Hardcode values (use design tokens)
❌ Duplicate component logic

---

## 16. Design Checklist

### Before Launch
- [ ] All colors meet contrast requirements
- [ ] Typography scales correctly on all screens
- [ ] Spacing is consistent throughout
- [ ] All interactive elements have hover/focus states
- [ ] Images are optimized and have alt text
- [ ] Animations are smooth (60fps)
- [ ] Responsive on mobile, tablet, desktop
- [ ] Keyboard navigation works
- [ ] Screen reader tested
- [ ] Cross-browser tested
- [ ] Performance optimized (Lighthouse 90+)
- [ ] Loading states for dynamic content
- [ ] Error states handled gracefully

---

**Design System Version:** 1.0
**Last Updated:** December 9, 2024
**Maintained By:** Abhishai Vardhan
**Reference:** Dennis Snellenberg Portfolio

---

## Quick Reference Card

```
COLORS:
  BG:  #0a0a0a    FG:  #f5f5f5
  Accent: #fff    Muted: #6b6b6b

FONTS:
  Primary: Geist Sans
  Sizes: 14px, 16px, 18px, 24px, 36px, 60px, 96px

SPACING:
  Sections: py-20 md:py-32
  Elements: gap-4, gap-8, gap-12
  Padding: px-6 lg:px-12

ANIMATIONS:
  Duration: 200ms - 500ms
  Easing: ease-in-out
  Properties: transform, opacity

BREAKPOINTS:
  md: 768px    lg: 1024px    xl: 1280px
```
