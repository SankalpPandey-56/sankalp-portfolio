import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS, getProjectBySlug } from "@/data/projects";
import { ArrowLeft, ArrowUpRight, ExternalLink, CheckCircle2, AlertTriangle, Lightbulb, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found · Sankalp Pandey" };
  }

  return {
    title: `${project.title} — Case Study · Sankalp Pandey`,
    description: project.tagline,
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <article className="min-h-screen py-24 px-6 sm:px-8 max-w-5xl mx-auto">
      {/* Back button */}
      <div className="mb-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Selected Works</span>
        </Link>
      </div>

      {/* Header */}
      <header className="space-y-6 border-b border-neutral-200 dark:border-neutral-800 pb-12">
        <div className="flex items-center gap-3 font-mono text-xs text-neutral-500">
          <span className="font-bold text-neutral-950 dark:text-white">#{project.number}</span>
          <span>/</span>
          <span className="uppercase">{project.category}</span>
          <span>/</span>
          <span>{project.year}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-neutral-950 dark:text-white leading-[0.95]">
          {project.title}
        </h1>

        <p className="font-mono text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl">
          {project.tagline}
        </p>

        {/* Action Links & Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-bold uppercase tracking-wider inline-flex items-center gap-1.5 hover:scale-105 transition-transform"
              >
                <span>Launch Live Studio</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 uppercase tracking-wider inline-flex items-center gap-1.5 hover:border-neutral-950 dark:hover:border-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          <div className="font-mono text-xs text-neutral-500">
            Role: <span className="text-neutral-950 dark:text-white font-semibold">{project.role}</span>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/60 font-mono text-xs text-neutral-800 dark:text-neutral-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </header>

      {/* Main Case Study Body */}
      <div className="py-12 space-y-16 text-neutral-700 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
        {/* Overview & Problem */}
        <section className="space-y-6">
          <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            01 / Executive Overview
          </h2>
          <p>{caseStudy.overview}</p>

          <div className="p-6 rounded-2xl border border-red-200/60 dark:border-red-950/60 bg-red-50/30 dark:bg-red-950/10 space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              <span>The Problem Statement</span>
            </div>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
              {caseStudy.problem}
            </p>
          </div>
        </section>

        {/* The Solution */}
        <section className="space-y-6">
          <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            02 / Engineered Solution
          </h2>
          <p>{caseStudy.solution}</p>
        </section>

        {/* Key Engineering Contributions */}
        <section className="space-y-6">
          <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            03 / Direct Technical Contributions
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {caseStudy.keyContributions.map((contrib, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 flex items-start gap-3"
              >
                <Code2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 font-mono">
                  {contrib}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture Breakdown */}
        {caseStudy.architecture && caseStudy.architecture.length > 0 && (
          <section className="space-y-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              04 / Technical Architecture
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudy.architecture.map((arch, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 space-y-3"
                >
                  <span className="font-mono text-xs text-neutral-400 font-bold">
                    LAYER 0{i + 1}
                  </span>
                  <h3 className="font-mono text-sm font-bold text-neutral-950 dark:text-white uppercase tracking-wider">
                    {arch.title}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                    {arch.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Challenges & Lessons Learned */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-950 dark:text-white uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <span>Engineering Hurdles</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-mono">
              {caseStudy.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-neutral-400">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-950 dark:text-white uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 text-emerald-500" />
              <span>Key Lessons Learned</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-mono">
              {caseStudy.lessonsLearned.map((l, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-neutral-400">•</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* Footer Navigation */}
      <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between font-mono text-xs">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Projects</span>
        </Link>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-bold text-neutral-950 dark:text-white hover:underline underline-offset-4"
          >
            <span>Launch {project.title}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </article>
  );
}
