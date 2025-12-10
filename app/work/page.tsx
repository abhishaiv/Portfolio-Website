import Link from 'next/link';
import { allProjects } from '@/lib/projects';

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero/Intro */}
      <section className="section-spacing px-6 md:px-12 lg:px-24 pt-32">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-muted mb-8">
            SELECTED WORK
          </p>
          <h1 className="text-display font-light max-w-4xl">
            Building AI products that upgrade human capabilities.
          </h1>
        </div>
      </section>

      {/* Projects Table */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto">
          {allProjects.map((project) => (
            <Link
              key={project.id}
              href={`/work/${project.slug}`}
              className="project-row"
            >
              <div>
                <h2 className="text-2xl md:text-4xl font-light">{project.title}</h2>
              </div>
              <div>
                <p className="text-sm text-muted">{project.location || 'Global'}</p>
              </div>
              <div>
                <p className="text-sm text-muted">{project.services?.[0] || 'AI Development'}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted">{project.year || '2024'}</p>
              </div>
            </Link>
          ))}

          {/* Archive Button */}
          <div className="mt-20 flex justify-center">
            <button className="btn-circle bg-foreground text-background px-12">
              Archive <sup className="text-xs">66</sup>
            </button>
          </div>
        </div>
      </section>

      {/* Curved Footer Section */}
      <div className="relative mt-32 h-48 bg-foreground rounded-t-[100%] flex items-end justify-center pb-12">
        <p className="text-background text-sm">© 2024 Abhishai Vardhan</p>
      </div>
    </main>
  );
}
