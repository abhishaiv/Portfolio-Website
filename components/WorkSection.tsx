'use client';

import ProjectCard from './ProjectCard';
import { Project } from '@/types';

// Sample projects - these will be replaced with your real projects
const projects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    description: 'Design & Development',
    image: '',
    technologies: ['Next.js', 'TypeScript', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '2',
    title: 'Project Two',
    description: 'Interaction & Development',
    image: '',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '3',
    title: 'Project Three',
    description: 'Design & Development',
    image: '',
    technologies: ['Vue.js', 'Firebase', 'CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '4',
    title: 'Project Four',
    description: 'Full Stack Development',
    image: '',
    technologies: ['React Native', 'Express', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="py-20 md:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-medium mb-4">Recent Work</h2>
          <p className="text-muted text-lg">
            A selection of projects I've worked on recently
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* More Work Link */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-block text-muted hover:text-foreground transition-colors"
          >
            More work <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
