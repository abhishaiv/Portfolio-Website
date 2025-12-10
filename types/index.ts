// Common TypeScript types for the portfolio

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  year?: number;
  location?: string;
  services?: string[];
  category?: 'design' | 'development' | 'both';
  slug?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  proficiency?: number;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}
