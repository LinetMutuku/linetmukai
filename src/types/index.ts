export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
  featured?: boolean;
  highlights?: string[];
}

export interface Skill {
  name: string;
  icon: string;
  level: 'Expert' | 'Advanced' | 'Intermediate';
  category: 'frontend' | 'backend' | 'tools';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
