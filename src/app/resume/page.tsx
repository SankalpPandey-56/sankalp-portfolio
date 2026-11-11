import React from "react";
import Link from "next/link";
import { ArrowLeft, FileDown, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume · Sankalp Pandey",
  description: "Curriculum Vitae of Sankalp Pandey — Software Developer, Robotics Enthusiast & Open-Source Contributor",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen py-24 px-6 sm:px-8 max-w-4xl mx-auto">
      {/* Back button */}
      <div className="mb-12 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Portfolio</span>
        </Link>

        {/* Primary Download Action */}
        <a
          href="/resume.pdf"
          download="Sankalp_Pandey_Resume.pdf"
          className="px-5 py-2.5 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-mono text-xs uppercase tracking-wider font-bold inline-flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-md"
        >
          <FileDown className="w-4 h-4" />
          <span>Download PDF Resume</span>
        </a>
      </div>

      {/* Notice Banner */}
      <div className="mb-12 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 font-mono text-xs text-neutral-600 dark:text-neutral-400 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
          <span>Single Source of Truth · Direct PDF download ready via <code className="text-neutral-950 dark:text-white">/public/resume.pdf</code></span>
        </div>
      </div>

      {/* Web Document Layout */}
      <div className="p-8 sm:p-12 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-sm space-y-12">
        {/* Document Header */}
        <header className="border-b border-neutral-200 dark:border-neutral-800 pb-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-neutral-950 dark:text-white">
                Sankalp Pandey
              </h1>
              <p className="font-mono text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                Developer · Robotics Enthusiast · Open-Source Contributor
              </p>
            </div>

            <div className="font-mono text-xs text-neutral-500 dark:text-neutral-400 space-y-1 sm:text-right">
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <a href="mailto:sankalppandey.56@gmail.com" className="hover:underline">
                  sankalppandey.56@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs">
            <a
              href="https://github.com/SankalpPandey-56"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-neutral-700 dark:text-neutral-300 hover:underline"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>github.com/SankalpPandey-56</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sankalp-pandey-20361b41a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-neutral-700 dark:text-neutral-300 hover:underline"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>linkedin.com/in/sankalp-pandey-20361b41a</span>
            </a>
          </div>
        </header>

        {/* Executive Summary */}
        <section className="space-y-3">
          <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-bold">
            Executive Summary
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
            First-year B.Tech CSE (AI/ML) scholar with a grounded background in physical robotics and software development. Creator of the Beyond 2D architectural vision engine and active builder of Project Orbit for Construct 2.0. Contributor to major open-source ecosystems (Supabase, Kestra) with 26 audited pull requests.
          </p>
        </section>

        {/* Education */}
        <section className="space-y-4">
          <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-bold">
            Education
          </h2>
          <div className="border-l-2 border-neutral-200 dark:border-neutral-800 pl-4 space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="font-mono font-bold text-sm text-neutral-950 dark:text-white">
                Newton School of Technology, Ajeenkya DY Patil University, Pune
              </h3>
              <span className="font-mono text-xs text-neutral-500">2026 – 2030</span>
            </div>
            <p className="font-mono text-xs text-neutral-600 dark:text-neutral-400">
              Bachelor of Technology in Computer Science and Engineering (Artificial Intelligence & Machine Learning) · First Year
            </p>
          </div>
        </section>

        {/* Key Projects */}
        <section className="space-y-6">
          <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-bold">
            Featured Engineering Projects
          </h2>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="font-mono font-bold text-sm text-neutral-950 dark:text-white">
                  Beyond 2D · Architectural Vision Engine
                </h3>
                <span className="font-mono text-xs text-neutral-500">Python · FastAPI · OpenCV · Gemini AI</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-mono">
                <li>Automated deterministic conversion of 2D floor plans into watertight 3D models in &lt;3s.</li>
                <li>Eliminated 21-room fragmentation bug via OpenCV morphological closing passes.</li>
                <li>Built mobile-first interactive touch navigation (virtual D-pad and pinch zoom).</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="font-mono font-bold text-sm text-neutral-950 dark:text-white">
                  Orbit · Upcoming Hackathon Project (Construct 2.0)
                </h3>
                <span className="font-mono text-xs text-neutral-500">Python · FastAPI · React · Tailwind CSS</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-mono">
                <li>Currently under active development for the Construct 2.0 hackathon competition.</li>
                <li>Engineered for high-concurrency event handling, modular API routes, and responsive UI.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Robotics & Leadership */}
        <section className="space-y-4">
          <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-bold">
            Robotics Experience & Leadership
          </h2>
          <div className="border-l-2 border-neutral-200 dark:border-neutral-800 pl-4 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="font-mono font-bold text-sm text-neutral-950 dark:text-white">
                School Robotics Club · 3-Year Core Competitor & Lead
              </h3>
              <span className="font-mono text-xs text-neutral-500">3-Year Tenure</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Designed, built, and programmed autonomous and line-follower robots using microcontrollers, sensor arrays, and motor controllers. Won multiple interschool robotics competitions and mentored junior pit crews in circuit troubleshooting under match pressure.
            </p>
          </div>
        </section>

        {/* Technical Profile Summary */}
        <section className="space-y-4">
          <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-bold">
            Technical Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            <div>
              <span className="font-bold text-neutral-950 dark:text-white block mb-1">Languages:</span>
              <span className="text-neutral-600 dark:text-neutral-400">Python, C, C++, JavaScript, Rust (exploring)</span>
            </div>
            <div>
              <span className="font-bold text-neutral-950 dark:text-white block mb-1">Web & Frontend:</span>
              <span className="text-neutral-600 dark:text-neutral-400">React, HTML5, CSS3, Tailwind CSS</span>
            </div>
            <div>
              <span className="font-bold text-neutral-950 dark:text-white block mb-1">Backend & Databases:</span>
              <span className="text-neutral-600 dark:text-neutral-400">FastAPI, Django, PostgreSQL, Supabase, Docker, Vercel, Git</span>
            </div>
            <div>
              <span className="font-bold text-neutral-950 dark:text-white block mb-1">Hardware & Robotics:</span>
              <span className="text-neutral-600 dark:text-neutral-400">Arduino, Microcontrollers, Sensors, ROS (Robot Operating System)</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
