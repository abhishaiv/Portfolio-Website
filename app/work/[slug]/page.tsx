import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Back Link */}
          <div className="py-8">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors"
            >
              <span>←</span>
              Back to Work
            </Link>
          </div>

          {/* Project Header */}
          <div className="py-12 md:py-20 border-t border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left Column - Title */}
              <div>
                <h1 className="text-5xl md:text-7xl font-medium mb-6">
                  {project.title}
                </h1>
              </div>

              {/* Right Column - Meta Info */}
              <div className="space-y-8">
                {project.year && (
                  <div>
                    <h3 className="text-sm text-muted uppercase mb-2">Year</h3>
                    <p className="text-xl">{project.year}</p>
                  </div>
                )}

                {project.location && (
                  <div>
                    <h3 className="text-sm text-muted uppercase mb-2">Location</h3>
                    <p className="text-xl">{project.location}</p>
                  </div>
                )}

                {project.services && project.services.length > 0 && (
                  <div>
                    <h3 className="text-sm text-muted uppercase mb-2">Services</h3>
                    <div className="space-y-1">
                      {project.services.map((service, index) => (
                        <p key={index} className="text-xl">
                          {service}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {project.technologies && project.technologies.length > 0 && (
                  <div>
                    <h3 className="text-sm text-muted uppercase mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-border text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Project Image Placeholder */}
          <section className="py-12 border-t border-border">
            <div className="aspect-[16/9] bg-border rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-muted/10 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-muted text-lg mb-2">Project Hero Image</p>
                  <p className="text-muted/60 text-sm">Add project screenshot or demo</p>
                </div>
              </div>
            </div>
          </section>

          {/* Project Overview */}
          <section className="py-16 md:py-24 border-t border-border">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-medium mb-8">Overview</h2>
              <p className="text-xl text-muted leading-relaxed mb-6">
                {project.description}
              </p>
            </div>
          </section>

          {/* The Challenge */}
          <section className="py-16 md:py-24 border-t border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-medium mb-6">
                  The Challenge
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-muted leading-relaxed">
                  Building AI-powered solutions that actually solve real-world problems requires more than just
                  implementing the latest models. The challenge is creating systems that are intuitive, reliable,
                  and deliver genuine value to users.
                </p>
                <p className="text-lg text-muted leading-relaxed">
                  This project required careful consideration of user experience, technical architecture,
                  and the unique constraints of AI systems in production environments.
                </p>
              </div>
            </div>
          </section>

          {/* The Solution */}
          <section className="py-16 md:py-24 border-t border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-medium mb-6">
                  The Solution
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-muted leading-relaxed">
                  The solution focuses on simplicity and effectiveness. By leveraging cutting-edge AI capabilities
                  while maintaining a user-friendly interface, the system removes friction and amplifies human capability.
                </p>
                <p className="text-lg text-muted leading-relaxed">
                  Key technical decisions included optimizing for speed, ensuring reliability through proper error handling,
                  and creating an architecture that scales as usage grows.
                </p>
              </div>
            </div>
          </section>

          {/* Project Gallery Placeholder */}
          <section className="py-16 md:py-24 border-t border-border">
            <h2 className="text-3xl md:text-4xl font-medium mb-12">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="aspect-[4/3] bg-border rounded-lg overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-muted/10 flex items-center justify-center">
                    <p className="text-muted text-sm">Project Image {index}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Links */}
          {(project.liveUrl !== '#' || project.githubUrl !== '#') && (
            <section className="py-16 md:py-24 border-t border-border">
              <div className="flex flex-wrap gap-6">
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
                  >
                    View Live Site
                    <span>→</span>
                  </a>
                )}
                {project.githubUrl && project.githubUrl !== '#' && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full hover:border-foreground transition-colors"
                  >
                    View on GitHub
                    <span>→</span>
                  </a>
                )}
              </div>
            </section>
          )}

          {/* Next Project */}
          <section className="py-16 md:py-24 border-t border-border">
            <div className="flex justify-between items-center">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors"
              >
                <span>←</span>
                All Projects
              </Link>

              {(() => {
                const currentIndex = allProjects.findIndex((p) => p.slug === params.slug);
                const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
                return (
                  <Link
                    href={`/work/${nextProject.slug}`}
                    className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors"
                  >
                    Next Project
                    <span>→</span>
                  </Link>
                );
              })()}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
