import type { Project } from "@/types";

/**
 * Project registry — the single source of truth for the Work section,
 * case study pages, command palette, sitemap and SEO.
 *
 * To add Project 04: append an entry here. The showcase auto-numbers and
 * picks its layout from `slug` (see components/projects/index.ts).
 *
 * All liveUrl values are verified reachable and frame-friendly (no
 * X-Frame-Options / frame-ancestors), so the browser-frame previews render
 * the real sites as live sandboxed iframes. previewImage stays optional:
 * drop a screenshot at public/projects/<slug>.png to use as a fallback.
 */
export const PROJECTS: Project[] = [
  {
    slug: "ember",
    number: "01",
    title: "EMBER",
    tagline: "A restaurant website that behaves like a print menu",
    description:
      "A premium site for a restaurant and café — menus, hours, reservations, all typeset like something you'd actually want to hold.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/SankalpPandey-56/ember-restaurant", // verified from the project's git remote
    liveUrl: "https://ember-restaurant-one.vercel.app", // verified reachable + frame-friendly
    previewImage: undefined, // ← optional: /projects/ember.png
    featured: true,
    year: "2025",
    role: "Design & development",
    status: "live",
    caseStudy: {
      overview:
        "Ember is a single-venue restaurant and café website built to feel editorial rather than commercial. Most restaurant sites bury the menu under animation; Ember leads with it.",
      purpose:
        "The owner needed a site that worked as a menu first — something a guest could open at the table and read without pinching and zooming. Everything else (atmosphere, reservations, location) supports that job.",
      built: [
        "Full menu system with categories, descriptions and pricing",
        "Reservation flow wired to the venue's booking link",
        "Hours, location and contact as first-class content",
        "Motion layer: reveals and parallax that stay out of the way",
        "Mobile layout designed first, desktop expanded from it",
      ],
      features: [
        "Menu-first information hierarchy",
        "Typography-led visual system",
        "Fast, mostly-static pages",
        "Reservation path reachable in one tap",
      ],
      decisions: [
        {
          title: "Static-first architecture",
          detail:
            "The site barely changes between visits, so it ships as mostly static pages with client islands only where motion matters. Cheap to host, fast on café wifi.",
        },
        {
          title: "Type as the interface",
          detail:
            "Instead of card grids, sections are composed with scale and alignment — the way a well-set menu works on paper.",
        },
      ],
      challenges: [
        {
          title: "Long menus on small screens",
          detail:
            "Menu lists get long. Solved with a sticky category rail and generous line-height rather than collapsing everything behind tabs.",
        },
      ],
      learned: [
        "Restraint is a feature: removing decoration made the food photography and type work harder",
        "Designing mobile-first forced better hierarchy everywhere",
      ],
    },
  },
  {
    slug: "nova",
    number: "02",
    title: "NOVA",
    tagline: "An AI workspace that gets out of the way",
    description:
      "A productivity platform with AI at the edges — drafting, summarizing and organizing — built so the interface stays quiet and the work stays visible.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    // Repo exists locally with remote github.com/SankalpPandey-56/nova but is
    // PRIVATE — uncomment once public so visitors don't hit a 404:
    // githubUrl: "https://github.com/SankalpPandey-56/nova",
    githubUrl: undefined,
    liveUrl: "https://nova-dun-one.vercel.app", // verified reachable + frame-friendly
    previewImage: undefined, // ← optional: /projects/nova.png
    featured: true,
    year: "2025",
    role: "Design, product & development",
    status: "live",
    caseStudy: {
      overview:
        "Nova is a full-stack productivity platform: projects, tasks, notes, with AI assistance woven in as drafting and summarizing rather than as a chat window bolted to the side.",
      purpose:
        "AI tools tend to add a second place to look. Nova's premise was the opposite — the AI acts inside the documents and tasks you already have open, then disappears.",
      built: [
        "Multi-tenant workspace model with projects, tasks and notes",
        "AI drafting and summarization inside the editor, not beside it",
        "Authentication and sessions",
        "PostgreSQL schema managed through Prisma migrations",
        "Optimistic UI for task and note mutations",
      ],
      features: [
        "Inline AI actions on any text surface",
        "Command-style navigation",
        "Keyboard-first task flows",
        "Per-workspace data isolation",
      ],
      decisions: [
        {
          title: "AI as a verb, not a panel",
          detail:
            "Summarize, draft, tighten — exposed as small actions where the cursor already is. No separate chat surface to maintain or context-switch into.",
        },
        {
          title: "Server-first data layer",
          detail:
            "Server Components handle reads; Route Handlers only where mutation or AI streaming needs them. Keeps the client bundle honest.",
        },
      ],
      challenges: [
        {
          title: "Streaming AI output into editable state",
          detail:
            "Token streams fight with controlled editors. Solved by buffering stream chunks and committing on sentence boundaries so the editor never fights the network.",
        },
      ],
      learned: [
        "Product design is mostly deciding what not to build",
        "Prisma migrations are a discipline, not a chore",
      ],
    },
  },
  {
    slug: "campushub",
    number: "03",
    title: "CAMPUSHUB",
    tagline: "A student community that requires proof of enrollment",
    description:
      "A verified community platform for students — college email verification, campus-scoped feeds, events and housing — shipped to real users.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Android"],
    githubUrl: "https://github.com/SankalpPandey-56/campushub", // verified from the project's git remote
    liveUrl: "https://campushub-fluktiyo.vercel.app", // verified reachable + frame-friendly
    androidUrl: undefined, // ← add the Play Store link when published (Android build scripts exist in the repo)
    previewImage: undefined, // ← optional: /projects/campushub.png
    featured: true,
    year: "2024–2025",
    role: "Product, design & development",
    status: "live",
    caseStudy: {
      overview:
        "CampusHub is a verified student community: sign up with a college email, get dropped into your campus's feed, events and housing board. Web app plus an Android companion.",
      purpose:
        "General-purpose social platforms dilute campus life. CampusHub's verification gate keeps the community small, real and local.",
      built: [
        "College email verification flow with domain allowlisting",
        "Campus-scoped feeds, events and housing listings",
        "Android companion app sharing the same API",
        "Moderation tools for report handling",
        "PostgreSQL + Prisma data layer",
      ],
      features: [
        "Verification-gated membership",
        "Campus isolation by email domain",
        "Event RSVPs and housing listings",
        "Shared REST API across web and Android",
      ],
      decisions: [
        {
          title: "Verify by domain, not by document",
          detail:
            "Email-domain allowlisting verifies thousands of students with zero manual review and no document uploads to store.",
        },
        {
          title: "One API, two clients",
          detail:
            "The Android app consumes the same REST API as the web app, so features land on both platforms from one backend change.",
        },
      ],
      challenges: [
        {
          title: "Cold-start community",
          detail:
            "A verified platform with zero verified users is an empty room. Seeded by hand-launching campus by campus, starting with my own.",
        },
      ],
      learned: [
        "Real users break assumptions faster than any test suite",
        "Verification is a product feature, not just a security control",
      ],
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
