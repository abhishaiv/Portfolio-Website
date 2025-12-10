'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { featuredProjects } from '@/lib/projects';

const greetings = [
  'Hello', 'Hola', 'Bonjour', 'Ciao', 'Hallo',
  'こんにちは', '안녕하세요', 'Olá', 'Привет', 'नमस्ते'
];

export default function AboutPage() {
  const [currentGreeting, setCurrentGreeting] = useState(0);

  // Rotate greetings
  useState(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(interval);
  });

  const services = [
    {
      number: '01',
      title: 'AI Development',
      description: 'Building intelligent systems that think, learn, and adapt. From conversational AI to computer vision, I create solutions that amplify human capability and remove friction from everyday tasks.',
    },
    {
      number: '02',
      title: 'Market Intelligence',
      description: 'Transforming complex global market data into actionable insights. Strategic analysis that helps businesses make confident decisions in rapidly changing environments.',
    },
    {
      number: '03',
      title: 'Full-Stack AI Solutions',
      description: 'End-to-end product development from concept to deployment. Combining AI capabilities with solid engineering to build systems that scale and deliver real value.',
    },
  ];

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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium mb-8">
              Building systems
              <br />
              that think
            </h1>

            <p className="text-lg md:text-xl text-muted max-w-2xl">
              Always exploring new ways AI can upgrade humans — from 1 to 10x.
            </p>
          </div>

          {/* Professional Statement */}
          <section className="py-16 md:py-24 border-t border-border">
            <div className="max-w-4xl">
              <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-8">
                I help companies and individuals build{' '}
                <span className="text-foreground">AI-powered solutions</span>{' '}
                that solve real problems.
              </p>
              <p className="text-xl md:text-2xl text-muted leading-relaxed">
                With each project, I push the boundaries of what's possible,{' '}
                always putting <span className="text-foreground">quality and impact first</span>.{' '}
                From India to global markets, I work with people who value{' '}
                systems that actually work.
              </p>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16 md:py-24 border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              {services.map((service) => (
                <div key={service.number} className="space-y-4">
                  <div className="text-sm text-muted">{service.number}</div>
                  <h3 className="text-2xl md:text-3xl font-medium">
                    {service.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Credentials Section */}
          <section className="py-16 md:py-24 border-t border-border">
            <div className="max-w-4xl">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-medium">
                  Market Intelligence @ Cognizant
                </h3>
                <p className="text-xl text-muted leading-relaxed">
                  By day, I decode global markets and competitive landscapes for enterprise clients.
                  Turning complex data into strategic clarity — helping Fortune 500 companies navigate
                  what's coming next.
                </p>
              </div>

              <div className="mt-12 space-y-6">
                <h3 className="text-3xl md:text-4xl font-medium">
                  AI Builder & Product Creator
                </h3>
                <p className="text-xl text-muted leading-relaxed">
                  By night, I build AI products that people actually use. From resume optimization
                  to F1 telemetry analysis, each project is an experiment in making complex technology
                  feel effortless. <span className="text-foreground">Founder energy — loading in the background.</span>
                </p>
              </div>
            </div>
          </section>

          {/* Featured Work Section */}
          <section className="py-16 md:py-24 border-t border-border">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-medium mb-4">Featured Work</h2>
              <p className="text-muted text-lg">
                Recent projects building the future, one system at a time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <Link
                  key={project.id}
                  href={`/work/${project.slug}`}
                  className="group block py-6 border-b border-border hover:border-foreground transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-medium group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted">
                        {project.services?.join(' • ')}
                      </p>
                    </div>
                    <span className="text-muted text-sm mt-1 flex-shrink-0">
                      {project.year}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors"
              >
                View all projects
                <span>→</span>
              </Link>
            </div>
          </section>

          {/* Contact CTA Section */}
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
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
                >
                  Get in touch
                  <span>→</span>
                </Link>
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
                    <p className="text-lg text-muted">
                      Based in India 🇮🇳
                    </p>
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
                    <a
                      href="https://instagram.com/abhishaiv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-lg hover:text-accent transition-colors"
                    >
                      Instagram
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
