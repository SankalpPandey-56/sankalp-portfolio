import { SkillCategory } from "@/types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Shipped in Production Projects",
    description: "Technologies utilized extensively in completed and live applications.",
    level: "project-verified",
    skills: [
      { name: "Python", highlight: true, usage: "FastAPI engines, OpenCV pipelines, Beyond 2D" },
      { name: "TypeScript", highlight: true, usage: "Next.js App Router, CampusHub, Nova" },
      { name: "React / Next.js", highlight: true, usage: "App Router, SSR, Server Actions, Ember" },
      { name: "FastAPI", highlight: true, usage: "Microservices, AI proxying, Beyond 2D engine" },
      { name: "PostgreSQL", highlight: true, usage: "Relational modeling, Prisma ORM, migrations" },
      { name: "Tailwind CSS", highlight: true, usage: "Responsive design systems, theme transitions" },
      { name: "Three.js / WebGL", highlight: true, usage: "Interactive 3D viewports, spatial extrusions" },
      { name: "Git & GitHub", highlight: true, usage: "Version control, multi-contributor PR workflows" },
      { name: "Vercel", highlight: true, usage: "Production CI/CD, edge deployment, environment config" },
    ],
  },
  {
    title: "Worked With & Built Systems In",
    description: "Languages, backends, and databases practiced in academic, club, or OSS contexts.",
    level: "worked-with",
    skills: [
      { name: "C", usage: "Systems programming, memory management fundamentals" },
      { name: "C++", usage: "Object-oriented architectures, algorithmic problem solving" },
      { name: "Rust", usage: "Explored in open-source terminal tooling (Termlens PRs)" },
      { name: "JavaScript", usage: "Core web standards, DOM, event loops" },
      { name: "Django", usage: "Backend architectures, ORM, REST conventions" },
      { name: "Supabase", usage: "Postgres extensions, realtime subscriptions, auth" },
      { name: "Linux", usage: "Bash scripting, terminal environment, systemctl" },
      { name: "Docker", usage: "Containerization, reproducible microservice setups" },
      { name: "Arduino & Microcontrollers", usage: "Sensor integration, motor drivers, PWM control" },
      { name: "ROS (Robot Operating System)", usage: "Nodes, publisher/subscriber paradigms, robotics club" },
    ],
  },
  {
    title: "Actively Developing & Exploring",
    description: "Areas of daily study, deliberate practice, and forward-looking exploration.",
    level: "actively-learning",
    skills: [
      { name: "AI-Assisted Engineering (Vibecoding)", usage: "Accelerated prototyping, agentic tool workflows" },
      { name: "Data Structures & Algorithms", usage: "Algorithmic efficiency, graph traversal, dynamic programming" },
      { name: "Deep Python & Internals", usage: "Metaclasses, asynchronous concurrency, profiling" },
      { name: "Spatial & Autonomous Robotics", usage: "SLAM, computer vision sensor fusion, hardware kinematics" },
    ],
  },
];
