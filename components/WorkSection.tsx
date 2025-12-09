'use client';

import ProjectCard from './ProjectCard';
import { Project } from '@/types';

// AI Products & Projects
const projects: Project[] = [
  {
    id: '1',
    title: 'Tailr AI',
    description: 'Resume optimiser that beats ATS filters without inventing facts. Drop your resume + job link → Get tailored resume in under 30 seconds. Turning a 2-hour application into a 2-minute workflow.',
    image: '',
    technologies: ['AI', 'Gemini', 'Product Design', 'Automation'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '2',
    title: 'Recall',
    description: 'AI Study Assistant living inside WhatsApp & Telegram. Save lectures, PDFs, links → Recall organizes, tags, and generates instant audio/video explainers on command. Your study bookmarks, reimagined as a personal tutor.',
    image: '',
    technologies: ['AI', 'WhatsApp Bot', 'Telegram', 'Learning Tech'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '3',
    title: 'F1 Pitwall',
    description: 'Telemetry Reimagined for F1 fans. Talk to race data like an engineer. Get technical, data-backed answers: "Why is Lewis losing time in Sector 2?" The ultimate second-screen for the world\'s most data-rich sport.',
    image: '',
    technologies: ['AI', 'Gemini', 'Data Analytics', 'Sports Tech'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '4',
    title: 'Kathy',
    description: 'Personal Diet Specialist on WhatsApp with zero friction. Snap a meal photo → Kathy identifies food, estimates portions, calculates macros instantly. Like a nutritionist who texts back before you eat it.',
    image: '',
    technologies: ['AI', 'WhatsApp Bot', 'Computer Vision', 'Health Tech'],
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
          <h2 className="text-4xl md:text-6xl font-medium mb-4">What I'm Building</h2>
          <p className="text-muted text-lg">
            AI-fuelled systems that remove friction, amplify humans, and quietly push the world forward
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
