export type NavLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  previewImage?: string;
  featured: boolean;
  year: string;
  role: string;
  category: "Vision & AI" | "Full-Stack SaaS" | "Design Engineering" | "Mobile PWA";
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    keyContributions: string[];
    architecture: {
      title: string;
      description: string;
    }[];
    highlights: string[];
    challenges: string[];
    lessonsLearned: string[];
  };
};

export type OpenSourceContribution = {
  id: string;
  repository: string;
  repoUrl: string;
  prNumber: number;
  prUrl: string;
  title: string;
  simpleExplanation: string;
  status: "merged" | "open" | "reviewed";
  date: string;
  tags: string[];
  impactScore?: string;
};

export type SkillCategory = {
  title: string;
  description: string;
  level: "worked-with" | "actively-learning" | "project-verified";
  skills: {
    name: string;
    icon?: string;
    highlight?: boolean;
    usage?: string;
  }[];
};

export type TimelineEvent = {
  id: string;
  period: string;
  title: string;
  organization: string;
  type: "robotics" | "hackathon" | "open-source" | "education";
  status?: "past" | "upcoming";
  description: string;
  highlights: string[];
  badge?: string;
};

export type ProfileData = {
  name: string;
  headline: string;
  subheadline: string;
  bio: string[];
  email: string;
  location: string;
  education: {
    institution: string;
    degree: string;
    year: string;
  };
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
};
