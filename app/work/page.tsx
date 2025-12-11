'use client';

import { useState } from 'react';
import Link from 'next/link';
import { allProjects } from '@/lib/projects';
import TopNav from '@/components/TopNav';

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'design' | 'development'>('all');

  const filteredProjects = activeFilter === 'all'
    ? allProjects
    : allProjects.filter(p => p.category === activeFilter || p.category === 'both');

  const counts = {
    all: allProjects.length,
    design: allProjects.filter(p => p.category === 'design' || p.category === 'both').length,
    development: allProjects.filter(p => p.category === 'development' || p.category === 'both').length,
  };

  return (
    <>
      <TopNav />
      <main className="min-h-screen bg-background text-foreground pt-32">
        {/* Headline */}
        <section className="px-6 md:px-12 lg:px-24 py-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-display font-light max-w-4xl">
              Creating next level digital products
            </h1>
          </div>
        </section>

        {/* Filters */}
        <section className="px-6 md:px-12 lg:px-24 py-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex gap-4">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-6 py-3 rounded-full text-sm transition-colors ${
                  activeFilter === 'all'
                    ? 'bg-foreground text-background'
                    : 'bg-transparent border border-border text-foreground hover:border-foreground'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveFilter('design')}
                className={`px-6 py-3 rounded-full text-sm transition-colors ${
                  activeFilter === 'design'
                    ? 'bg-foreground text-background'
                    : 'bg-transparent border border-border text-foreground hover:border-foreground'
                }`}
              >
                Design <sup className="text-xs ml-1">{counts.design}</sup>
              </button>
              <button
                onClick={() => setActiveFilter('development')}
                className={`px-6 py-3 rounded-full text-sm transition-colors ${
                  activeFilter === 'development'
                    ? 'bg-foreground text-background'
                    : 'bg-transparent border border-border text-foreground hover:border-foreground'
                }`}
              >
                Development <sup className="text-xs ml-1">{counts.development}</sup>
              </button>
            </div>
            <div className="hidden md:flex gap-2">
              <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/>
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/>
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Table Headers + Projects */}
        <section className="px-6 md:px-12 lg:px-24 py-8">
          <div className="max-w-7xl mx-auto">
            {/* Table Headers */}
            <div className="grid grid-cols-12 gap-4 pb-4 border-b border-border text-xs uppercase tracking-widest text-muted">
              <div className="col-span-4">CLIENT</div>
              <div className="col-span-3">LOCATION</div>
              <div className="col-span-3">SERVICES</div>
              <div className="col-span-2 text-right">YEAR</div>
            </div>

            {/* Projects */}
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/work/${project.slug}`}
                className="grid grid-cols-12 gap-4 py-8 border-b border-border hover:opacity-60 transition-opacity group"
              >
                <div className="col-span-4">
                  <h2 className="text-2xl md:text-4xl font-light">{project.title}</h2>
                </div>
                <div className="col-span-3 flex items-center">
                  <p className="text-sm">{project.location || 'Global'}</p>
                </div>
                <div className="col-span-3 flex items-center">
                  <p className="text-sm">{project.services?.[0] || 'AI Development'}</p>
                </div>
                <div className="col-span-2 flex items-center justify-end">
                  <p className="text-sm">{project.year || '2024'}</p>
                </div>
              </Link>
            ))}

            {/* Archive Button */}
            <div className="mt-20 flex justify-center">
              <button className="px-12 py-4 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity">
                Archive <sup className="text-xs ml-1">66</sup>
              </button>
            </div>
          </div>
        </section>

        {/* Dark Footer - Let's work together */}
        <section className="bg-[#1a1a1a] text-white px-6 md:px-12 lg:px-24 py-32 mt-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 flex items-center gap-8">
                <div className="w-24 h-24 rounded-full bg-gray-600 flex-shrink-0 flex items-center justify-center text-gray-400">
                  [Photo]
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-light">
                  Let's work<br/>together
                </h2>
              </div>
              <div className="lg:col-span-6 flex flex-col items-start lg:items-end gap-8">
                <div className="flex flex-wrap gap-4">
                  <a href="mailto:abhishaivardhan21@gmail.com" className="badge-pill bg-white/10 text-white hover:bg-white/20 transition-colors">
                    abhishaivardhan21@gmail.com
                  </a>
                  <a href="tel:+918919451220" className="badge-pill bg-white/10 text-white hover:bg-white/20 transition-colors">
                    +91 89194 51220
                  </a>
                </div>
                <Link href="/contact">
                  <div className="w-48 h-48 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center text-xl font-light transition-all hover:scale-105">
                    Get in touch
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
