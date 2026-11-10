import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    slug: "beyond-2d",
    number: "01",
    title: "Beyond 2D",
    tagline: "Deterministic Architectural 2D-to-3D Floor Plan Workspace & Vision Engine",
    description:
      "Converts static 2D blueprint drawings into watertight, photorealistic 3D architectural models in seconds using OpenCV, Gemini Vision AI, and Three.js.",
    technologies: ["Python", "FastAPI", "OpenCV", "Three.js", "Gemini Vision AI", "Shapely", "WebGL"],
    githubUrl: "https://github.com/SankalpPandey-56/Beyond-2D",
    liveUrl: "https://beyond-2-d.vercel.app",
    featured: true,
    year: "2025",
    role: "Computer Vision & 3D Engineering",
    category: "Vision & AI",
    caseStudy: {
      overview:
        "Reading traditional 2D architectural blueprints is challenging for non-specialists. Understanding spatial flow, daylighting, volume, and clearance from flat line drawings often leads to costly miscommunication between homeowners and builders. Beyond 2D resolves this by automating the conversion of flat blueprint images into interactive 3D spaces in real time.",
      problem:
        "Traditional 3D architectural modeling requires hours of manual drafting in software like Revit or Blender. Existing automated tools frequently create non-manifold meshes, hallucinate walls where text annotations exist, and fail to distinguish doors and windows from solid structural elements.",
      solution:
        "A hybrid pipeline combining deterministic computer vision and multimodal intelligence. OpenCV performs image preprocessing, edge extraction, and morphological closing to clean blueprint noise. Gemini Vision AI semantically parses room classifications and opening locations, while Shapely generates watertight planar topology extruded into an interactive Three.js WebGL viewport.",
      keyContributions: [
        "Eliminated a critical 21-room fragmentation bug by applying morphological dilation/closing passes and realistic room polygon filters.",
        "Engineered parametric 3D door and window placement logic, preventing exterior window hallucinations and honoring actual blueprint openings.",
        "Built full mobile responsiveness with sliding drawer sheets, touch D-pad navigation, and gesture-driven pinch zoom in the 3D viewport.",
        "Engineered the deployment architecture with GitHub Actions CI, FastAPI backend, and static Form Studio frontend on Vercel.",
      ],
      architecture: [
        {
          title: "Pre-processing & Cleanse",
          description:
            "Blueprint image inputs are normalized, converted to grayscale, and filtered using adaptive Gaussian thresholding and OpenCV morphological operators to eliminate dimension lines and text noise.",
        },
        {
          title: "Multimodal Semantic Analysis",
          description:
            "Gemini 3.1 Flash Lite analyzes the blueprint to identify room classifications (kitchen, bedroom, balcony) and door swings with high precision.",
        },
        {
          title: "Planar Topology & 3D Extrusion",
          description:
            "Shapely converts vector contours into 2D polygon manifolds with interior holes, which Three.js extrudes into textured, watertight 3D walls with dynamic lighting.",
        },
      ],
      highlights: [
        "Deterministic watertight mesh generation in under 3 seconds",
        "Zero-dependency mobile touch controls with virtual D-pad and pinch zoom",
        "Dual-pipeline validation ensuring zero hallucinated structural walls",
      ],
      challenges: [
        "Handling low-resolution or hand-drawn blueprints where lines are broken or non-orthogonal.",
        "Maintaining 60 FPS Three.js rendering performance across low-power mobile devices with multiple interior rooms.",
      ],
      lessonsLearned: [
        "Pure generative AI often hallucinates geometric tolerances; combining deterministic CV algorithms with LLM semantic understanding creates the most reliable architecture.",
        "Mesh optimization and custom vertex generation save far more frame time than simply downscaling textures.",
      ],
    },
  },
  {
    slug: "campushub",
    number: "02",
    title: "CampusHub",
    tagline: "Verified College Student Community & Campus Infrastructure",
    description:
      "A campus platform gated by institutional email allowlisting—unifying feeds, student marketplace, event registries, academic resources, and direct messaging.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Capacitor", "Tailwind CSS"],
    githubUrl: "https://github.com/SankalpPandey-56/campushub",
    liveUrl: "https://campushub-fluktiyo.vercel.app",
    featured: true,
    year: "2024–2025",
    role: "Full-Stack Architecture & Product",
    category: "Full-Stack SaaS",
    caseStudy: {
      overview:
        "Campus social life is fragmented across countless WhatsApp groups, Telegram channels, and bulletin boards. CampusHub provides a single, trusted digital commons exclusively accessible to verified students of a university campus.",
      problem:
        "Open social platforms suffer from spam, non-student infiltration, and scams in student housing and marketplaces. Existing campus platforms are typically outdated administrative portals with zero community engagement.",
      solution:
        "A secure, real-time platform with automated domain verification, role-based access control (student, moderator, admin), peer-to-peer marketplace with safe buyer-seller channels, event ticketing, and community feeds.",
      keyContributions: [
        "Designed and normalized a 24-model relational database schema in Prisma backed by PostgreSQL.",
        "Implemented OTP-based institutional email verification ensuring 100% verified campus membership.",
        "Packaged the Next.js web application for native Android distribution via Capacitor.",
        "Engineered real-time direct messaging threads and community moderation reporting workflows.",
      ],
      architecture: [
        {
          title: "Verification Engine",
          description:
            "Validates user signups against institutional email regex patterns and delivers cryptographic one-time passwords for instant authorization.",
        },
        {
          title: "Relational Data Mesh",
          description:
            "PostgreSQL stores community interactions, listings, events, and audit logs with strict cascading deletes and indexing on hot query paths.",
        },
        {
          title: "Cross-Platform Delivery",
          description:
            "A unified Next.js App Router codebase deployed to Vercel and compiled to native Android APK via Capacitor for low-latency push notifications.",
        },
      ],
      highlights: [
        "24+ relational models in Prisma with zero database corruption",
        "Dual deployment: Web PWA and Native Android APK",
        "Domain-isolated data security protecting student identity",
      ],
      challenges: [
        "Cold-start adoption: driving initial campus density requires immediate utility like textbook exchange and exam schedules.",
        "Managing concurrent uploads for high-resolution item listings on student marketplaces.",
      ],
      lessonsLearned: [
        "Verification is not just a security feature; it is the fundamental moat that enables trust among community members.",
        "Single-API architectures servicing both mobile wrappers and web browsers drastically reduce maintenance overhead.",
      ],
    },
  },
  {
    slug: "nova",
    number: "03",
    title: "NOVA",
    tagline: "Unified Multi-Tenant Workspace with Inline Contextual Intelligence",
    description:
      "A fast productivity workspace with projects, tasks, and documents where AI assistance is woven into the editor canvas rather than bolted on as a chat sidebar.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Radix UI", "JWT Auth", "Tailwind CSS"],
    githubUrl: "https://github.com/SankalpPandey-56/nova",
    liveUrl: "https://nova-dun-one.vercel.app",
    featured: true,
    year: "2025",
    role: "Full-Stack Engineering & Design Systems",
    category: "Full-Stack SaaS",
    caseStudy: {
      overview:
        "Most productivity tools either treat AI as a disconnected sidebar assistant or overwhelm users with bloated feature sets. Nova was built as an agile, keyboard-first workspace that puts drafting, summarization, and task management at the user's cursor.",
      problem:
        "Switching back and forth between document editors and external AI chat windows breaks flow state, causes clipboard fatigue, and loses contextual references.",
      solution:
        "Nova embeds AI as inline verbs: draft, summarize, expand, tighten, and extract action items directly within the active document without disrupting layout or requiring a separate chat tab.",
      keyContributions: [
        "Architected a multi-tenant workspace data model with project hierarchies, task boards, and markdown documents.",
        "Implemented secure JWT authentication with bcrypt password hashing and React Server Component route protection.",
        "Designed a custom component design system based on Radix UI primitives with full dark/light theme fidelity.",
        "Engineered smooth optimistic UI updates for instantaneous task reordering and checkbox interactions.",
      ],
      architecture: [
        {
          title: "Server Components & Action Pipeline",
          description:
            "Server Components handle high-throughput reads while Server Actions and optimistic hooks execute state mutations with zero layout shift.",
        },
        {
          title: "Inline AI Transformation",
          description:
            "Streams token responses into structured document blocks with sentence-boundary commit buffers to maintain clean undo/redo states.",
        },
        {
          title: "Multi-Tenant Data Layer",
          description:
            "Prisma schema enforces tenant isolation across users, workspaces, and permission roles.",
        },
      ],
      highlights: [
        "Sub-100ms keyboard navigation and command palette search",
        "Context-preserving inline document AI assistance",
        "Zero-bloat multi-tenant team management",
      ],
      challenges: [
        "Preventing token streams from clashing with active user typing in controlled text areas.",
        "Designing an auth lifecycle that survives flaky mobile network drops gracefully.",
      ],
      lessonsLearned: [
        "AI feels most natural when it behaves like a text-editing command rather than a conversation partner.",
        "Server Components dramatically simplify authentication state management when architected cleanly.",
      ],
    },
  },
  {
    slug: "ember",
    number: "04",
    title: "EMBER",
    tagline: "A Contemporary Fire-Grilled Restaurant Experience Typeset Like Tactile Print",
    description:
      "A restaurant website engineered to feel like a high-end printed menu—combining warm monochrome typography, restrained motion, and purposeful hospitality UX.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Motion", "Vercel"],
    githubUrl: "https://github.com/SankalpPandey-56/ember-restaurant",
    liveUrl: "https://ember-restaurant-one.vercel.app",
    featured: true,
    year: "2025",
    role: "UI/UX & Creative Engineering",
    category: "Design Engineering",
    caseStudy: {
      overview:
        "Restaurant websites are notoriously cluttered with PDF downloads, auto-playing music, and slow image carousels. Ember reimagines hospitality web design as an exquisite, tactile print menu brought to life digitally.",
      problem:
        "Guests wanting to inspect food menus, check seasonal specials, or verify operating hours on their phones are regularly forced to download 20MB unreadable PDFs.",
      solution:
        "A fast, mobile-optimized experience with typography-driven menu hierarchies, dietary filtering, interactive reservations, and silky section reveals powered by Framer Motion.",
      keyContributions: [
        "Designed a custom typographic design system based on warm off-black ink and high-contrast editorial hierarchy.",
        "Implemented smooth, accessible page transitions and entrance animations with reduced-motion fallbacks.",
        "Built responsive menu filtering allowing guests to toggle vegetarian, signature, and beverage collections instantly.",
        "Optimized image delivery and typography loading for instant First Contentful Paint.",
      ],
      architecture: [
        {
          title: "Component-Driven Design System",
          description:
            "Modular React components representing menu courses, specials, reservation forms, and venue stories.",
        },
        {
          title: "Choreographed Motion Layer",
          description:
            "Framer Motion staggered entrance timelines synced with viewport scroll progress for seamless storytelling.",
        },
      ],
      highlights: [
        "100/100 Lighthouse performance and accessibility scores",
        "Instant zero-PDF responsive menu navigation",
        "Warm tactile aesthetic with deliberate typographic tension",
      ],
      challenges: [
        "Balancing high-fashion editorial spacing with dense nutritional and pricing data.",
      ],
      lessonsLearned: [
        "Restraint in animation creates far more luxury than constant moving elements.",
      ],
    },
  },
  {
    slug: "folio",
    number: "05",
    title: "Folio",
    tagline: "Minimalist Mobile-First AI Reading Companion PWA",
    description:
      "A lightweight, offline-first reading logger and guided literary reflection engine powered by Gemini AI synthesis and Cloud Firestore.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Python", "FastAPI", "Firebase", "Gemini API"],
    githubUrl: "https://github.com/SankalpPandey-56/folio",
    featured: false,
    year: "2025",
    role: "Architecture & Frontend",
    category: "Mobile PWA",
    caseStudy: {
      overview:
        "Folio is an offline-first mobile web companion designed for one-handed phone use, enabling readers to track physical books, measure reading sessions, capture deep reflections, and synthesize reading notes with Gemini AI.",
      problem:
        "Commercial reading trackers are bloated with social feeds, advertisements, and gamification badges that distract from the quiet act of reading.",
      solution:
        "A distraction-free, black-and-white editorial aesthetic with local-first session timers, literary reflection prompts, and automated synthesis into permanent digital notes.",
      keyContributions: [
        "Built a lightweight vanilla JS and CSS architecture with zero framework overhead.",
        "Implemented Firestore synchronization with granular user isolation rules.",
        "Created an AI synthesis route using Python FastAPI and Google Gemini REST API.",
      ],
      architecture: [
        {
          title: "Local-First Client",
          description:
            "Persistent localStorage and IndexedDB caching ensuring instant offline launch without network latency.",
        },
        {
          title: "Synthesis Gateway",
          description:
            "FastAPI backend proxying Gemini requests while keeping API credentials strictly server-side.",
        },
      ],
      highlights: [
        "Instant offline launch with zero JavaScript bundle bloat",
        "One-handed mobile ergonomics designed for bedtime readers",
      ],
      challenges: ["Synchronizing offline timestamps cleanly upon reconnect."],
      lessonsLearned: ["Vanilla web standards are extraordinarily capable when architected with care."],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
