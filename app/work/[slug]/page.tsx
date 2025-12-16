import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { allProjects } from '@/lib/projects';
import ProjectPageClient from './ProjectPageClient';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} - Abhishai Vardhan`,
      description: project.description,
      type: 'article',
      images: project.image ? [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} - Abhishai Vardhan`,
      description: project.description,
      images: project.image ? [project.image] : [],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return <ProjectPageClient project={project} nextProject={nextProject} />;
}
