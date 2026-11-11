import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    slug: "beyond-2d",
    number: "01",
    title: "Beyond 2D",
    tagline: "Deterministic Architectural 2D-to-3D Floor Plan Workspace & Vision Engine",
    description:
      "Converts static 2D blueprint drawings into watertight, interactive 3D architectural models in seconds using OpenCV and Gemini Vision AI.",
    technologies: ["Python", "FastAPI", "OpenCV", "Gemini Vision AI", "Computer Vision", "Tailwind CSS"],
    githubUrl: "https://github.com/SankalpPandey-56/Beyond-2D",
    liveUrl: "https://beyond-2-d.vercel.app",
    featured: true,
    year: "2025",
    role: "Computer Vision & Engineering",
    category: "Vision & AI",
    caseStudy: {
      overview:
        "Reading traditional 2D architectural blueprints is challenging for non-specialists. Understanding spatial flow, daylighting, volume, and clearance from flat line drawings often leads to costly miscommunication between homeowners and builders. Beyond 2D resolves this by automating the conversion of flat blueprint images into interactive 3D spaces in real time.",
      problem:
        "Converting paper or digital blueprints to 3D typically requires hours of manual drafting. Existing automated tools frequently create non-manifold geometry, hallucinate walls where annotations exist, and fail to distinguish doors and windows from solid structural elements.",
      solution:
        "A hybrid pipeline combining deterministic computer vision and multimodal intelligence. OpenCV performs image preprocessing, edge extraction, and morphological closing to clean blueprint noise. Gemini Vision AI semantically parses room classifications and opening locations, while geometry algorithms generate clean planar topology extruded into an interactive viewport.",
      keyContributions: [
        "Eliminated a critical 21-room fragmentation bug by applying morphological dilation/closing passes and realistic room polygon filters.",
        "Engineered parametric door and window placement logic, preventing exterior window hallucinations and honoring actual blueprint openings.",
        "Built full mobile responsiveness with sliding drawer sheets, touch D-pad navigation, and gesture-driven pinch zoom in the viewport.",
        "Engineered the deployment architecture with GitHub Actions CI, FastAPI backend, and static frontend on Vercel.",
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
            "Gemini Vision AI analyzes the blueprint to identify room classifications (kitchen, bedroom, balcony) and door swings with high precision.",
        },
        {
          title: "Planar Topology & Extrusion",
          description:
            "Converts vector contours into watertight 2D polygon manifolds with interior holes, which are extruded into textured 3D walls with dynamic lighting.",
        },
      ],
      highlights: [
        "Deterministic watertight model generation in under 3 seconds",
        "Mobile touch controls with virtual D-pad and pinch zoom",
        "Dual-pipeline validation ensuring zero hallucinated structural walls",
      ],
      challenges: [
        "Handling low-resolution blueprints where lines are broken or non-orthogonal.",
        "Maintaining high rendering performance across mobile devices with complex room geometry.",
      ],
      lessonsLearned: [
        "Combining deterministic computer vision algorithms with LLM semantic understanding creates the most reliable, hallucination-free architecture.",
      ],
    },
  },
  {
    slug: "orbit",
    number: "02",
    title: "Orbit",
    tagline: "Currently Working On Project for an Upcoming Hackathon (Construct 2.0)",
    description:
      "A software system currently under active development, engineered specifically to compete at the upcoming Construct 2.0 hackathon.",
    technologies: ["Python", "FastAPI", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/SankalpPandey-56",
    featured: true,
    year: "2025–2026",
    role: "System Design & Architecture",
    category: "Full-Stack SaaS",
    caseStudy: {
      overview:
        "Project Orbit is currently being engineered for the Construct 2.0 hackathon. Built from the ground up to solve complex real-world workflows, focusing on high concurrency, responsive user interaction, and resilient system architecture.",
      problem:
        "Under active sprint development. Detailed problem statements and core features remain confidential until initial hackathon submission.",
      solution:
        "A streamlined architecture leveraging high-performance backend microservices and modern minimalist UI paradigms.",
      keyContributions: [
        "Active sprint engineering for Construct 2.0 hackathon submission.",
        "Designing modular backend service architecture with FastAPI.",
        "Crafting a minimalist, high-velocity frontend interface with React.",
      ],
      architecture: [
        {
          title: "Core Service Engine",
          description: "High-throughput asynchronous backend designed for real-time data handling.",
        },
        {
          title: "Interactive Client",
          description: "Minimalist, responsive frontend focused on sub-second reaction times.",
        },
      ],
      highlights: [
        "Active development for Construct 2.0",
        "High-performance architecture",
        "Zero-bloat minimalist UX",
      ],
      challenges: [
        "Rapid sprint iteration under time-boxed hackathon preparation constraints.",
      ],
      lessonsLearned: [
        "Prioritizing core execution flow before adding peripheral features ensures reliable competition delivery.",
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
