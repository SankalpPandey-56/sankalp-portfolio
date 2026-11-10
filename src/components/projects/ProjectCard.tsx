"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Project } from "@/types";
import { ArrowUpRight, ExternalLink, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({
      x: -(y / rect.height) * 6,
      y: (x / rect.width) * 6,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      className="group relative rounded-2xl border border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/30 overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors duration-300 flex flex-col justify-between"
    >
      {/* Top Banner / Number */}
      <div className="p-8 pb-4">
        <div className="flex items-center justify-between font-mono text-xs text-neutral-400 dark:text-neutral-500 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-neutral-900 dark:text-white">#{project.number}</span>
            <span>/</span>
            <span className="uppercase">{project.category}</span>
          </div>
          <span>{project.year}</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950 dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
          {project.title}
        </h3>
        <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400 mt-1">
          {project.tagline}
        </p>

        <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed mt-4">
          {project.description}
        </p>

        {/* Key Contribution Highlight */}
        <div className="mt-6 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/80 dark:bg-neutral-950/50 font-mono text-xs">
          <div className="flex items-center gap-1.5 font-bold text-neutral-900 dark:text-white mb-1.5">
            <Code2 className="w-3.5 h-3.5" />
            <span>Key Engineering Contribution:</span>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 leading-normal">
            {project.caseStudy.keyContributions[0]}
          </p>
        </div>

        {/* Tech Stack Chips */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/60 font-mono text-[11px] text-neutral-700 dark:text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-8 pt-4 border-t border-neutral-200 dark:border-neutral-800/80 mt-6 flex items-center justify-between">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider font-bold text-neutral-950 dark:text-white hover:underline underline-offset-4"
        >
          <span>View Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>

        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub Repository`}
              className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} Live Application`}
              className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
