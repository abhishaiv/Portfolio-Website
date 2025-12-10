'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProjectFilter from '@/components/ProjectFilter';
import WorkProjectCard from '@/components/WorkProjectCard';
import { allProjects } from '@/lib/projects';

const greetings = [
  'Hello', 'Hola', 'Bonjour', 'Ciao', 'Hallo',
  'こんにちは', '안녕하세요', 'Olá', 'Привет', 'नमस्ते'
];

export default function WorkPage() {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [activeFilter, setActiveFilter] = useState<'all' | 'design' | 'development'>('all');

  // Rotate greetings
  useState(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(interval);
  });

  // Filter projects
  const filteredProjects = activeFilter === 'all'
    ? allProjects
    : allProjects.filter(project =>
        project.category === activeFilter || project.category === 'both'
      );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="py-12 md:py-20">
            {/* Animated Greeting */}
            <div className="mb-8 overflow-hidden">
              <span className="text-muted text-lg md:text-xl inline-block animate-fade">
                {greetings[currentGreeting]}
              </span>
            </div>

            {/* Page Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium mb-6">
              Building next-level
              <br />
              AI products
            </h1>

            <p className="text-lg md:text-xl text-muted max-w-2xl">
              AI-fuelled systems that upgrade humans. From intelligent automation to data-driven insights,
              each project removes friction and amplifies what's possible.
            </p>
          </div>

          {/* Filter Navigation */}
          <ProjectFilter
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            projectCounts={{
              all: allProjects.length,
              design: allProjects.filter(p => p.category === 'design' || p.category === 'both').length,
              development: allProjects.filter(p => p.category === 'development' || p.category === 'both').length,
            }}
          />

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 py-16">
            {filteredProjects.map((project) => (
              <WorkProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Archive Link - Placeholder for future */}
          <div className="py-16 text-center border-t border-border">
            <p className="text-muted text-lg">
              More projects coming soon
            </p>
          </div>

          {/* CTA Section */}
          <section className="py-20 md:py-32 border-t border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left Column */}
              <div>
                <h2 className="text-4xl md:text-6xl font-medium mb-8">
                  Let's build something cooler.
                </h2>
                <p className="text-lg text-muted leading-relaxed mb-6">
                  I like working with people who enjoy solving real problems — the kind that require thinking, not templates.
                  If you're building something in AI, market intelligence, productivity, or just want to talk systems that think — I'd love to hear from you.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
                >
                  Get in touch
                  <span>→</span>
                </a>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm text-muted uppercase mb-4">Contact</h3>
                  <div className="space-y-2">
                    <a
                      href="mailto:abhishaivardhan21@gmail.com"
                      className="block text-lg hover:text-accent transition-colors"
                    >
                      abhishaivardhan21@gmail.com
                    </a>
                    <a
                      href="tel:+918919451220"
                      className="block text-lg hover:text-accent transition-colors"
                    >
                      +91 89194 51220
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm text-muted uppercase mb-4">Socials</h3>
                  <div className="space-y-2">
                    <a
                      href="https://github.com/abhishaiv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-lg hover:text-accent transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://linkedin.com/in/abhishaivardhan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-lg hover:text-accent transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://twitter.com/abhishaiv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-lg hover:text-accent transition-colors"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
