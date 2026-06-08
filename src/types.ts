export interface Skill {
  id: string;
  name: string;
  iconName: string; // lucide-react icon name or class name for rendering
  category: 'frontend' | 'backend' | 'tooling' | 'database';
  level: 'Expert' | 'Advanced' | 'Intermediate';
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  period: string; // e.g. "May 2026"
  verified: boolean;
  tags: string[];
  description: string;
  demoUrl?: string;
  githubUrl?: string;
  details: {
    overview: string;
    keyFeatures: string[];
    technicalArchitecture: string[];
    roleAndImpact: string;
  };
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  duration?: string;
  bullets: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  location: string;
  specialization?: string;
  details?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}
