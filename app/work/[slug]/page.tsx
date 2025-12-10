import { notFound } from 'next/navigation';
import Link from 'next/link';
import { allProjects } from '@/lib/projects';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = allProjects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = allProjects.findIndex((p) => p.slug === params.slug);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Back Link */}
      <div className="px-6 md:px-12 lg:px-24 pt-32 pb-8">
        <Link
          href="/work"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          ← Back to Work
        </Link>
      </div>

      {/* Project Header */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-display font-light mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-muted max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Metadata */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-border">
            {project.year && (
              <div>
                <p className="text-xs uppercase tracking-widest text-muted mb-2">Year</p>
                <p className="text-lg">{project.year}</p>
              </div>
            )}
            {project.location && (
              <div>
                <p className="text-xs uppercase tracking-widest text-muted mb-2">Location</p>
                <p className="text-lg">{project.location}</p>
              </div>
            )}
            {project.services && project.services[0] && (
              <div>
                <p className="text-xs uppercase tracking-widest text-muted mb-2">Service</p>
                <p className="text-lg">{project.services[0]}</p>
              </div>
            )}
            {project.technologies && project.technologies[0] && (
              <div>
                <p className="text-xs uppercase tracking-widest text-muted mb-2">Tech</p>
                <p className="text-lg">{project.technologies[0]}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Image Placeholder */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[16/9] bg-muted/10 rounded-lg flex items-center justify-center">
            <p className="text-muted">[Project Image]</p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-spacing px-6 md:px-12 lg:px-24 border-t border-border">
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-lg text-muted leading-relaxed">
            This project showcases the intersection of AI technology and practical application.
            By focusing on user needs and technical excellence, it delivers a solution that
            truly upgrades human capabilities.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            Built with modern tools and best practices, the system is designed to scale
            while maintaining performance and reliability.
          </p>
        </div>
      </section>

      {/* Links */}
      {(project.liveUrl && project.liveUrl !== '#') && (
        <section className="px-6 md:px-12 lg:px-24 py-16">
          <div className="max-w-7xl mx-auto flex gap-6">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-circle bg-foreground text-background"
            >
              View Live →
            </a>
            {project.githubUrl && project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-circle border border-foreground"
              >
                GitHub →
              </a>
            )}
          </div>
        </section>
      )}

      {/* Next Project */}
      <section className="px-6 md:px-12 lg:px-24 py-32 border-t border-border">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/work"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            ← All Projects
          </Link>
          <Link
            href={`/work/${nextProject.slug}`}
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Next: {nextProject.title} →
          </Link>
        </div>
      </section>
    </main>
  );
}
