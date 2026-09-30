export type ProjectLink = {
  label: string;
  href: string;
  external: true;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  androidUrl?: string;
  previewImage?: string;
  featured?: boolean;
  year: string;
  role: string;
  status: "live" | "in-progress" | "archived";
  caseStudy: CaseStudy;
};

export type CaseStudy = {
  overview: string;
  purpose: string;
  built: string[];
  features: string[];
  decisions: { title: string; detail: string }[];
  challenges: { title: string; detail: string }[];
  learned: string[];
};

export type SocialLink = {
  label: string;
  href: string;
  external: true;
};

export type SiteConfig = {
  name: string;
  shortName: string;
  role: string;
  email: string;
  location: string;
  url: string;
  socials: SocialLink[];
};

export type JourneyEntry = {
  period: string;
  title: string;
  detail: string;
};
