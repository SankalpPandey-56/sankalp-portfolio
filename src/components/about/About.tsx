import React from "react";
import { Cpu, Terminal, GitPullRequest, Compass } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Editorial Heading */}
        <div className="lg:col-span-5 space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
            01 / Genesis & Philosophy
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-neutral-950 dark:text-white leading-tight">
            Code Meets
            <br />
            Physical Constraints
          </h2>
          <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Newton School of Technology, Ajeenkya DY Patil University, Pune
            <br />
            B.Tech Computer Science & Engineering (AI/ML) · 2026–2030
          </p>
        </div>

        {/* Right Column: The Story & Pillars */}
        <div className="lg:col-span-7 space-y-8 text-neutral-700 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
          <p>
            I am an engineer who discovered computing through physical hardware. Before writing full-stack software or optimizing computer vision pipelines, I spent <span className="font-semibold text-neutral-950 dark:text-white">three full years in my school’s robotics club</span>. That meant burning through solder, debugging sensor crosstalk on microcontrollers under match timers, and leading teams to victories across interschool competitions.
          </p>
          <p>
            When you build hardware, bugs don’t just trigger stack traces—they strip gears and burn out voltage regulators. That discipline taught me to write software that respects state, handles edge cases deterministically, and never relies on superficial assumptions.
          </p>
          <p>
            Today, I channel that mindset into software engineering: developing <span className="font-semibold text-neutral-950 dark:text-white">Beyond 2D</span> (transforming 2D architectural blueprints into watertight 3D models with OpenCV and Gemini Vision AI), contributing to industry-standard open-source repositories like <span className="font-semibold text-neutral-950 dark:text-white">Supabase</span> and <span className="font-semibold text-neutral-950 dark:text-white">Kestra</span>, and currently building <span className="font-semibold text-neutral-950 dark:text-white">Project Orbit</span> for the Construct 2.0 hackathon.
          </p>

          {/* Core Foundations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 font-mono text-xs">
            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 space-y-2">
              <div className="flex items-center gap-2 font-bold text-neutral-950 dark:text-white">
                <Cpu className="w-4 h-4" />
                <span>Physical Intuition</span>
              </div>
              <p className="text-neutral-500 dark:text-neutral-400">
                3 years of robotics taught me to build systems that can withstand real-world noise, battery dips, and physical timing limits.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 space-y-2">
              <div className="flex items-center gap-2 font-bold text-neutral-950 dark:text-white">
                <GitPullRequest className="w-4 h-4" />
                <span>Open-Source Rigor</span>
              </div>
              <p className="text-neutral-500 dark:text-neutral-400">
                26 pull requests submitted across public repositories. I solve real bug reports rather than inventing toy portfolios.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 space-y-2">
              <div className="flex items-center gap-2 font-bold text-neutral-950 dark:text-white">
                <Terminal className="w-4 h-4" />
                <span>Deterministic AI</span>
              </div>
              <p className="text-neutral-500 dark:text-neutral-400">
                Fusing classical algorithms (OpenCV, Shapely geometry) with LLMs to guarantee physical and geometric tolerances.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 space-y-2">
              <div className="flex items-center gap-2 font-bold text-neutral-950 dark:text-white">
                <Compass className="w-4 h-4" />
                <span>Continuous Growth</span>
              </div>
              <p className="text-neutral-500 dark:text-neutral-400">
                Actively learning and refining DSA, systems-level Python, and agentic vibecoding paradigms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

