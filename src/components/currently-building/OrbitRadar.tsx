"use client";

import React from "react";
import { Radio, Lock, ShieldCheck } from "lucide-react";

export function OrbitRadar() {
  return (
    <section className="py-16 px-6 sm:px-8 max-w-7xl mx-auto border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800/80 bg-neutral-100/50 dark:bg-neutral-900/40 p-8 sm:p-12 overflow-hidden">
        {/* Radar Background Glow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-neutral-400/10 dark:bg-neutral-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/60 dark:bg-neutral-950/60 font-mono text-xs text-neutral-800 dark:text-neutral-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Sprint in Progress · Construct 2.0 Hackathon</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-neutral-950 dark:text-white">
              Project Orbit
            </h3>

            <p className="text-neutral-600 dark:text-neutral-300 text-base max-w-2xl leading-relaxed">
              Currently engineering a confidential, high-velocity software system purpose-built for the Construct 2.0 Hackathon. Designed for robust concurrency, low latency, and intuitive interaction. Full release and technical post-mortem will be published following hackathon submission.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs text-neutral-500 dark:text-neutral-400">
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" />
                <span>Stealth Mode</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
                <span>Active Sprints</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Construct 2.0 Bound</span>
              </div>
            </div>
          </div>

          {/* Radar Animation Graphic */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-neutral-300 dark:border-neutral-700/80 flex items-center justify-center">
              {/* Concentric rings */}
              <div className="absolute w-36 h-36 rounded-full border border-dashed border-neutral-300 dark:border-neutral-800" />
              <div className="absolute w-20 h-20 rounded-full border border-neutral-300 dark:border-neutral-800" />
              
              {/* Radar sweep beam */}
              <div
                className="absolute inset-0 rounded-full border-t border-r border-emerald-500/40 animate-spin"
                style={{ animationDuration: "4s" }}
              />

              {/* Center blip */}
              <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
              <span className="absolute bottom-4 font-mono text-[10px] tracking-widest uppercase text-neutral-400">
                ORBIT_ACTIVE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
