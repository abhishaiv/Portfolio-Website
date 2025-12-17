# Portfolio Website - Quick Reference Guide

**Last Updated:** December 17, 2024  
**Site Status:** ✅ Production Live  
**Production URL:** https://portfolio-website-fpez1hldr-abhishai-vardhans-projects.vercel.app

---

## 🚀 Quick Commands

### Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Type check
npx tsc --noEmit

# Lint code
npm run lint
```

### Deployment
```bash
# Deploy to production (auto-deploys from GitHub)
git add .
git commit -m "Your message"
git push origin main

# Manual Vercel deployment
vercel --prod

# Check deployment status
vercel ls portfolio-website
```

---

## 📁 Project Structure

```
portfolio-website/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Homepage (hero with photo)
│   ├── about/page.tsx            # About page (vertical timeline)
│   ├── work/page.tsx             # Projects page (table layout)
│   ├── work/[slug]/page.tsx      # Project detail pages
│   ├── building/page.tsx         # Building page
│   ├── contact/page.tsx          # Contact page
│   └── layout.tsx                # Root layout
├── components/                   # React components
│   ├── Navigation.tsx            # Top navigation
│   ├── HamburgerMenu.tsx         # Mobile menu
│   └── ...
├── lib/
│   └── projects.ts               # Project data (IMPORTANT)
├── types/
│   └── index.ts                  # TypeScript types
├── public/
│   └── images/
│       ├── portfolio/
│       │   ├── hero.jpg          # Homepage hero photo
│       │   └── profile.jpg       # Footer profile photo
│       └── projects/             # Project screenshots
└── progress.md                   # Project documentation
```

---

## 🎨 Key Design Elements

### Hero Section (Homepage)
- **Location:** `app/page.tsx` lines 17-84
- **Image:** `public/images/portfolio/hero.jpg` (29KB)
- **Overlay:** `bg-black/30` for text readability
- **Elements:** Location badge, AI Builder text, name, scroll indicator

### Timeline (About Page)
- **Location:** `app/about/page.tsx` lines 85-184
- **Layout:** Vertical with left-margin years
- **Desktop:** Years at `-left-32` with blue bullets
- **Mobile:** Years above content, timeline hidden
- **Spacing:** `space-y-16` (64px between entries)

### Project Categories
- **Location:** `lib/projects.ts` lines 7-161
- **Types:** `types/index.ts` line 14
- **Current Categories:**
  - `productivity` → "Productivity"
  - `sports-intelligence` → "Sports Intelligence"
  - `health-tech` → "Health Tech"
  - `service-orchestration` → "Service Orchestration"
  - `both` → "Design & Development"
  - `design` → "Design"
  - `development` → "Development"

---

## ✏️ Common Updates

### Add New Project
**File:** `lib/projects.ts`

```typescript
{
  id: '12',
  title: 'Your Project Name',
  slug: 'your-project-name',
  description: 'Your project description...',
  image: '/images/projects/your-image.png',
  technologies: ['Tech1', 'Tech2'],
  services: ['Service1', 'Service2'],
  category: 'productivity', // or other category
  year: 2025,
  location: 'India',
  liveUrl: 'https://yoursite.com',
  githubUrl: 'https://github.com/yourusername/repo',
}
```

**Steps:**
1. Add project object to `allProjects` array
2. Add project image to `public/images/projects/`
3. Build and test: `npm run build`
4. Commit and push to deploy

### Update Hero Photo
**File:** `app/page.tsx` line 20

```typescript
<Image
  src="/images/portfolio/hero.jpg"  // Change this path
  alt="Abhishai Vardhan - AI Builder"
  fill
  priority
  className="object-cover object-center"
  quality={95}
/>
```

**Steps:**
1. Add new image to `public/images/portfolio/`
2. Update the `src` path
3. Test locally: `npm run dev`
4. Commit and push to deploy

### Update Contact Information
**Files to update:**
- `app/page.tsx` (footer)
- `app/about/page.tsx` (footer)
- `app/work/page.tsx` (footer)

Search for: `abhishaivardhan21@gmail.com` or `+91 8919451220`

### Modify Timeline Entry
**File:** `app/about/page.tsx` lines 103-145

Find the timeline data array and edit:
```typescript
{
  years: "2025 - Current",
  title: "Your Job Title",
  company: "Company Name",
  points: [
    "Achievement 1",
    "Achievement 2"
  ]
}
```

---

## 🐛 Troubleshooting

### Build Errors

**TypeScript errors:**
```bash
npx tsc --noEmit
# Fix errors shown, then retry build
```

**Missing dependencies:**
```bash
npm install
npm run build
```

**Image optimization errors:**
- Ensure images are in `public/` directory
- Check image paths start with `/` (e.g., `/images/hero.jpg`)
- Verify image format (jpg, png, webp)

### Deployment Issues

**Vercel authentication (401 error):**
1. Go to Vercel Dashboard
2. Settings → Deployment Protection
3. Disable "Vercel Authentication"

**Build fails on Vercel:**
- Check Vercel deployment logs
- Verify build works locally: `npm run build`
- Check Node.js version matches (package.json `engines`)

**Changes not showing:**
- Clear browser cache (Cmd+Shift+R / Ctrl+Shift+F5)
- Check correct deployment URL
- Verify git push was successful

---

## 📊 Performance Optimization

### Image Optimization Checklist
- [ ] Use Next.js `<Image>` component (not `<img>`)
- [ ] Set `priority` for above-fold images
- [ ] Use WebP format when possible
- [ ] Compress images before uploading (< 200KB)
- [ ] Set appropriate `quality` prop (90-95 for photos)

### Current Image Stats
- Hero photo: 29KB ✅
- Profile photo: 29KB ✅
- Project images: 99KB-600KB (could optimize further)

### Build Performance
- Build time: ~2 seconds ✅
- Static pages: 21 ✅
- TypeScript check: < 1 second ✅

---

## 🔐 Environment & Secrets

### Local Development
No environment variables required for basic functionality.

### Production (Vercel)
Configure in Vercel Dashboard → Settings → Environment Variables

**Common variables:**
- `NEXT_PUBLIC_SITE_URL` - Your site URL
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID (if added)

---

## 📈 Analytics (Optional Future Setup)

### Google Analytics Setup
1. Create GA4 property at analytics.google.com
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to environment variables
4. Install package: `npm install @next/third-parties`
5. Add to `app/layout.tsx`

### Vercel Analytics
Already available in Vercel dashboard:
- Speed Insights
- Web Analytics
- No code changes required

---

## 🔄 Git Workflow

### Making Changes
```bash
# Create feature branch (optional)
git checkout -b feature/your-feature

# Make changes, then:
git add .
git commit -m "Description of changes"
git push origin main  # or your branch

# Vercel auto-deploys from main branch
```

### Commit Message Format
```
<type>: <subject>

<body>

Examples:
- feat: Add new project - AI Dashboard
- fix: Correct timeline spacing on mobile
- style: Update hero photo overlay opacity
- docs: Update README with new deployment steps
```

---

## 📞 Support Resources

### Documentation
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion
- Vercel: https://vercel.com/docs

### Common Issues
- TypeScript errors: Check `types/index.ts`
- Build failures: Run `npm run build` locally first
- Image issues: Verify paths and formats
- Routing issues: Check file structure in `app/` directory

### Contact
- GitHub Issues: https://github.com/abhishaiv/Portfolio-Website/issues
- Email: abhishaivardhan21@gmail.com

---

## 🎯 Quick Wins for Future

### Easy Improvements
- [ ] Add favicon and app icons
- [ ] Set up Google Analytics
- [ ] Add more project images
- [ ] Create project case studies
- [ ] Add testimonials section
- [ ] Set up custom domain
- [ ] Add blog section
- [ ] Implement contact form backend
- [ ] Add project tags/filters
- [ ] Create dark mode toggle

### Performance Improvements
- [ ] Optimize larger project images (> 200KB)
- [ ] Add image blur placeholders
- [ ] Implement progressive image loading
- [ ] Add service worker for offline support

---

## 📝 Recent Changes Log

### December 17, 2024 - Figma Redesign Implementation
- ✅ Integrated professional hero photo
- ✅ Updated project categories and years (2025)
- ✅ Restructured About page timeline (vertical layout)
- ✅ Enhanced project table category display
- ✅ Deployed to production
- ✅ Documentation updated

### December 10, 2024 - Initial Deployment
- ✅ Complete Dennis Snellenberg aesthetic redesign
- ✅ SEO optimization
- ✅ 20 static pages generated

---

**This reference guide should help with common tasks and troubleshooting!**
