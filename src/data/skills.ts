import { SkillCategory } from "@/types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Core Technologies",
    description: "Technologies utilized in project development and daily engineering.",
    level: "project-verified",
    skills: [
      { name: "Python", highlight: true, usage: "FastAPI engines, OpenCV pipelines, Beyond 2D" },
      { name: "React", highlight: true, usage: "Component architecture, interactive UI state" },
      { name: "FastAPI", highlight: true, usage: "Lightweight API services & AI proxy endpoints" },
      { name: "Tailwind CSS", highlight: true, usage: "Minimalist layout systems, responsive design" },
      { name: "PostgreSQL", highlight: true, usage: "Relational database modeling & queries" },
      { name: "Git & GitHub", highlight: true, usage: "Version control, pull requests, open-source workflow" },
    ],
  },
  {
    title: "Worked With & Built In",
    description: "Languages, backends, and platforms practiced in coursework, club projects, or OSS.",
    level: "worked-with",
    skills: [
      { name: "C", usage: "Systems programming fundamentals, memory concepts" },
      { name: "C++", usage: "Object-oriented programming, data structures practice" },
      { name: "JavaScript", usage: "DOM manipulation, asynchronous web routines" },
      { name: "Django", usage: "Full-stack Python web development" },
      { name: "Supabase", usage: "Database hosting, authentication, SQL queries" },
      { name: "Linux", usage: "Command-line environment, Bash scripting, system utilities" },
      { name: "Docker", usage: "Containerization and reproducible environments" },
      { name: "Vercel", usage: "Production web hosting and edge deployments" },
      { name: "Arduino", usage: "Microcontroller circuit design, sensors, motor control" },
      { name: "ROS", usage: "Robot Operating System fundamentals from robotics club" },
    ],
  },
  {
    title: "Currently Learning & Exploring",
    description: "Areas of active study, problem solving, and deliberate practice.",
    level: "actively-learning",
    skills: [
      { name: "Vibecoding & AI Tools", usage: "AI-assisted rapid prototyping and development workflows" },
      { name: "Data Structures & Algorithms", usage: "Problem solving, algorithm analysis, optimization" },
      { name: "Python Mastery", usage: "Deeper language internals and software patterns" },
      { name: "Rust", usage: "Exploring memory safety and systems concepts" },
    ],
  },
];
