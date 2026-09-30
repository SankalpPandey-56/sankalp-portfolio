/**
 * Resume — single source of truth for the /resume page and the PDF.
 *
 * Every claim here is verifiable from the project repositories (inspected
 * directly) or was provided by Sankalp. No invented metrics, users,
 * ratings, or technologies. Keep projects in sync with data/projects.ts.
 */

export type ResumeLink = { label: string; href: string };

export type ResumeProject = {
  name: string;
  meta: string;
  links: ResumeLink[];
  bullets: string[];
  tech: string;
};

export const RESUME = {
  name: "Sankalp Pandey",
  title: "B.Tech CSE (AI/ML) · Software Developer / Product Builder",
  location: "Pune, Maharashtra, India",
  email: "sankalppandey.56@gmail.com",
  links: {
    github: { label: "github.com/SankalpPandey-56", href: "https://github.com/SankalpPandey-56" },
    linkedin: { label: "linkedin.com/in/sankalp-pandey-20361b41a", href: "https://www.linkedin.com/in/sankalp-pandey-20361b41a/" },
    portfolio: { label: "sankalp-portfolio-eta.vercel.app", href: "https://sankalp-portfolio-eta.vercel.app/" },
    phone: { label: "+91 7905817014", href: "tel:+917905817014" },
  },

  summary:
    "First-year B.Tech CSE (AI/ML) student who builds real software products — three shipped full-stack and frontend projects, plus a background in robotics. Learns new technologies independently while building, and is developing toward software engineering and AI/ML.",

  education: {
    school: "Newton School of Technology, Ajeenkya DY Patil University, Pune",
    degree: "B.Tech in Computer Science and Engineering (AI/ML)",
    period: "2026 – 2030 · First Year",
  },

  skills: {
    Languages: "Python (basics, actively developing), JavaScript, HTML, CSS",
    "Web & UI": "React, Next.js, TypeScript, Tailwind CSS, Framer Motion",
    "Backend & Data": "Prisma ORM, PostgreSQL, REST route handlers, server actions, JWT auth",
    "Tools & Platform": "Git, GitHub, Vercel, Docker, Android (Capacitor packaging)",
  },

  projects: [
    {
      name: "CampusHub",
      meta: "Verified student community platform — full-stack",
      links: [
        { label: "GitHub", href: "https://github.com/SankalpPandey-56/campushub" },
        { label: "Live", href: "https://campushub-fluktiyo.vercel.app" },
      ],
      bullets: [
        "Architected and built a campus-scoped community platform: feeds, events, deals, resources, study groups, marketplace, lost-and-found and direct messaging — backed by a 24+ model PostgreSQL schema designed in Prisma.",
        "Implemented OTP-based campus email verification with role-based authorization (student / moderator / admin), plus reporting and moderation flows spanning posts, comments and listings.",
        "Shipped a responsive Next.js web app and packaged the same product for Android via Capacitor; deployed to production on Vercel with PostgreSQL.",
      ],
      tech: "Next.js · TypeScript · PostgreSQL · Prisma · Capacitor (Android) · Zod · Nodemailer",
    },
    {
      name: "NOVA",
      meta: "Productivity workspace with an assistant interface — full-stack",
      links: [
        { label: "GitHub", href: "https://github.com/SankalpPandey-56/nova" },
        { label: "Live", href: "https://nova-dun-one.vercel.app" },
      ],
      bullets: [
        "Built a multi-tenant SaaS workspace with projects, tasks, documents and a persisted AI-assistant conversation model (9-model Prisma schema), designed around multi-user membership.",
        "Implemented email/password authentication with JWT sessions (bcrypt hashing), React Server Components for reads and server actions for writes, keeping the client bundle lean.",
        "Designed the product UX around a dashboard: projects, tasks, documents, analytics and assistant views built with reusable Radix UI–based components.",
      ],
      tech: "Next.js · TypeScript · PostgreSQL · Prisma · JWT auth · Radix UI · Tailwind CSS",
    },
    {
      name: "EMBER",
      meta: "Premium restaurant & café website — frontend/product",
      links: [
        { label: "GitHub", href: "https://github.com/SankalpPandey-56/ember-restaurant" },
        { label: "Live", href: "https://ember-restaurant-one.vercel.app" },
      ],
      bullets: [
        "Designed and built a multi-page restaurant experience (menu, about, contact) with a component-based Next.js + TypeScript architecture and Tailwind CSS design system.",
        "Used Framer Motion for restrained, purposeful animation — section reveals and interaction feedback — while keeping visual hierarchy and mobile usability first.",
        "Deployed to production on Vercel; documented design rationale in the repository.",
      ],
      tech: "Next.js · TypeScript · Tailwind CSS · Framer Motion",
    },
  ],

  hardware: {
    intro: "Hands-on engineering background — designing, building and debugging physical systems before college.",
    items: [
      { name: "Robotic Arm", detail: "Multi-joint arm for pick-and-place manipulation." },
      { name: "CNC Pen Plotter", detail: "2-axis plotting machine executing programmed drawing paths." },
      { name: "Line Follower Robot", detail: "Autonomous robot tracking a path using onboard sensors." },
    ],
  },
} as const;
