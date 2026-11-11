"use client";

import React from "react";
import { HeroCanvas } from "./HeroCanvas";
import { ArrowDown, Mail, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 px-6 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Interactive geometric lattice canvas */}
      <HeroCanvas />

      {/* Top Status Pill */}
      <div className="flex items-center gap-2 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-800 bg-neutral-100/80 dark:bg-neutral-900/80 backdrop-blur-md text-xs font-mono text-neutral-700 dark:text-neutral-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>Currently Building: Orbit @ Construct 2.0</span>
        </div>
      </div>

      {/* Main Headline & Identity */}
      <div className="space-y-4 max-w-5xl">
        <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
          First-Year B.Tech CSE (AI/ML) · Pune, India
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase text-neutral-950 dark:text-white leading-[0.9]">
          Sankalp
          <br />
          <span className="text-neutral-400 dark:text-neutral-600 hover:text-neutral-950 dark:hover:text-white transition-colors duration-500">
            Pandey
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-mono text-neutral-700 dark:text-neutral-300 pt-2 tracking-tight">
          Developer <span className="text-neutral-400">|</span> Robotics Enthusiast{" "}
          <span className="text-neutral-400">|</span> Open-Source Contributor
        </p>

        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl font-normal leading-relaxed pt-2">
          Building deterministic architectural vision pipelines, high-trust student platforms, and resilient system software. Grounded by three years in competitive robotics and driven by active contributions to modern open-source ecosystems.
        </p>
      </div>

      {/* Actions and External Links */}
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="px-6 py-3.5 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-mono text-xs tracking-wider uppercase font-semibold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <span>Explore Projects</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </a>

        <a
          href="#open-source"
          className="px-6 py-3.5 rounded-full border border-neutral-300 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 text-neutral-800 dark:text-neutral-200 font-mono text-xs tracking-wider uppercase hover:border-neutral-950 dark:hover:border-white transition-all duration-200"
        >
          Open-Source PRs (26)
        </a>

        <a
          href="/resume.pdf"
          download="Sankalp_Pandey_Resume.pdf"
          className="px-5 py-3.5 rounded-full border border-neutral-300 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 text-neutral-800 dark:text-neutral-200 font-mono text-xs tracking-wider uppercase hover:border-neutral-950 dark:hover:border-white transition-all duration-200 inline-flex items-center gap-1.5"
        >
          <FileDown className="w-3.5 h-3.5" />
          <span>Resume (PDF)</span>
        </a>

        <div className="flex items-center gap-2 pl-2">
          <a
            href="https://github.com/SankalpPandey-56"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3 rounded-full border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-950 dark:hover:border-white transition-all duration-200 hover:scale-110"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/sankalp-pandey-20361b41a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 rounded-full border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-950 dark:hover:border-white transition-all duration-200 hover:scale-110"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:sankalppandey.56@gmail.com"
            aria-label="Email Sankalp"
            className="p-3 rounded-full border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-950 dark:hover:border-white transition-all duration-200 hover:scale-110"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Editorial Bottom Ticker */}
      <div className="mt-20 pt-8 border-t border-neutral-200 dark:border-neutral-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-xs text-neutral-500 dark:text-neutral-400">
        <div>
          <span className="block text-neutral-950 dark:text-white font-bold text-sm">3 Years</span>
          <span>Competitive Robotics</span>
        </div>
        <div>
          <span className="block text-neutral-950 dark:text-white font-bold text-sm">26 Pull Requests</span>
          <span>Supabase, Kestra, OSS</span>
        </div>
        <div>
          <span className="block text-neutral-950 dark:text-white font-bold text-sm">Beyond 2D</span>
          <span>Vision & Architecture</span>
        </div>
        <div>
          <span className="block text-neutral-950 dark:text-white font-bold text-sm">NST Pune</span>
          <span>B.Tech CSE (AI/ML)</span>
        </div>
      </div>
    </section>
  );
}
