import React from "react";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function FeaturedProjects() {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
          03 / Selected Works
        </div>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-neutral-950 dark:text-white">
          Shipped Systems & Prototypes
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-base sm:text-lg">
          Deterministic computer vision engines, multi-tenant productivity SaaS, and verified student networks. Each project is accompanied by an in-depth architectural case study.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

