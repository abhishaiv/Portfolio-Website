'use client';

import Link from 'next/link';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.slug}`}>
      <div className="group cursor-pointer">
        {/* Project Image */}
        <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg bg-border">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted">
              <span className="text-4xl">🎨</span>
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-foreground text-sm">View Project →</span>
          </div>
        </div>

        {/* Project Info */}
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl md:text-2xl font-medium group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            {project.year && (
              <span className="text-sm text-muted mt-1 flex-shrink-0">
                {project.year}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between text-sm text-muted">
            <span>{project.technologies.join(', ')}</span>
          </div>

          <p className="text-sm text-muted line-clamp-2">{project.description}</p>
        </div>
      </div>
    </Link>
  );
}
