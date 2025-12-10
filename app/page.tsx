import Link from 'next/link';
import { featuredProjects } from '@/lib/projects';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  return (
    <>
      <StructuredData />
      <main className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <section className="section-spacing px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Large Headline */}
            <div className="lg:col-span-8">
              <h1 className="text-display font-light leading-tight">
                Building AI-fueled systems that upgrade humans. Market Intelligence at Cognizant by day, AI product builder by night.
              </h1>
            </div>

            {/* About Me Circle + Extra Info */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <p className="text-sm text-muted leading-relaxed">
                  The combination of my passion for AI, code & product design positions me in a unique place in the tech world.
                </p>
                <Link href="/about">
                  <div className="btn-circle-large bg-foreground text-background hover:opacity-90 transition-opacity">
                    About me
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Work Section */}
        <section className="section-spacing px-6 md:px-12 lg:px-24 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-muted mb-16">
              RECENT WORK
            </p>

            <div className="space-y-0">
              {featuredProjects.slice(0, 3).map((project) => (
                <Link
                  key={project.id}
                  href={`/work/${project.slug}`}
                  className="block border-t border-border"
                >
                  <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:opacity-60 transition-opacity">
                    <div className="md:col-span-6">
                      <h2 className="text-title font-light">{project.title}</h2>
                    </div>
                    <div className="md:col-span-6 flex justify-between items-center">
                      <span className="text-sm text-muted">
                        {project.services?.[0] || 'AI Development'}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-16">
              <Link href="/work" className="btn-circle bg-foreground text-background">
                More work →
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-border">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="text-sm text-muted">© 2024 Abhishai Vardhan</p>
              <p className="text-xs text-muted mt-1">AI Builder + Market Intelligence Specialist</p>
            </div>
            <div className="flex gap-6">
              <a
                href="https://linkedin.com/in/abhishaivardhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:opacity-60 transition-opacity"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/abhishaiv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:opacity-60 transition-opacity"
              >
                Twitter
              </a>
              <a
                href="https://github.com/abhishaiv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:opacity-60 transition-opacity"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
