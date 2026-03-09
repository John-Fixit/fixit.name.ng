export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  isPresent?: boolean;
  description: string;
  tags: string[];
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link?: string;
  repo?: string;
  progress?: number;
  progressLabel?: string;
  objectShape?: "object-cover" | "object-contain";
  layout: "large" | "small" | "wide" | "tall";
}

export interface StatCard {
  value: string;
  label: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: "linkedin" | "github" | "mail" | "twitter" | "dribbble" | "medium";
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface CaseStudySection {
  title: string;
  description: string;
  icon: string;
}

export interface CaseStudyData {
  projectTitle: string;
  client: string;
  duration: string;
  role: string;
  team: string;
  overview: string;
  problem: CaseStudySection;
  approach: CaseStudySection;
  impact: CaseStudySection;
  impactStats: string[];
  techStack: string[];
  contributions?: { title: string; items: string[] }[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
}

export interface ResumeData {
  contact: {
    phone: string;
    email: string;
    location: string;
    portfolio: string;
    linkedin: string;
    github: string;
  };
  summary: string;
  skills: { category: string; items: string[] }[];
  education: EducationEntry[];
  experience: ExperienceEntry[];
  availability?: string;
  language?: string;
}

export interface BlogPostTeaser {
  id: string;
  title: string;
  category: string;
  comingSoon: boolean;
}
