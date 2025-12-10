'use client';

import { Project } from '@/types';
import Link from 'next/link';

interface WorkProjectCardProps {
  project: Project;
}

export default function WorkProjectCard({ project }: WorkProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block"
    >
      <div className="space-y-4">
        {/* Project Image Placeholder */}
        <div className="aspect-[4/3] bg-border rounded-lg overflow-hidden relative">
          <div className="absolute inset-0 bg-muted/10 group-hover:bg-muted/20 transition-colors duration-300 flex items-center justify-center">
            <span className="text-muted text-sm">Project Image</span>
          </div>
        </div>

        {/* Project Info */}
        <div className="space-y-2">
          {/* Title and Year */}
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-medium group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            {project.year && (
              <span className="text-muted text-sm mt-1 flex-shrink-0">
                {project.year}
              </span>
            )}
          </div>

          {/* Location */}
          {project.location && (
            <p className="text-sm text-muted">
              {project.location}
            </p>
          )}

          {/* Services */}
          {project.services && project.services.length > 0 && (
            <p className="text-sm text-muted">
              {project.services.join(' • ')}
            </p>
          )}

          {/* Description */}
          <p className="text-muted leading-relaxed pt-2">
            {project.description}
          </p>

          {/* View Project Link */}
          <div className="pt-2 flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            <span>View Project</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
