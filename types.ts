export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Job {
  company: string;
  role: string;
  location: string;
  period: string;
  details: string[];
}

export interface Degree {
  institution: string;
  degree: string;
  location: string;
  period: string;
}

export interface Project {
  title: string;
  techStack: string[];
  period: string;
  description: string[];
  links: {
    repo?: string;
    video?: string;
    site?: string;
  };
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  linkedin?: string;
  github?: string;
  website?: string;
}