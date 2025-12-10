'use client';

import ProjectCard from './ProjectCard';
import { featuredProjects } from '@/lib/projects';

export default function WorkSection() {
  return (
    <section id="work" className="py-20 md:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-medium mb-4">What I'm Building</h2>
          <p className="text-muted text-lg">
            AI-fuelled systems that remove friction, amplify humans, and quietly push the world forward
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* More Work Link */}
        <div className="mt-16 text-center">
          <a
            href="/work"
            className="inline-block text-muted hover:text-foreground transition-colors"
          >
            More work <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
