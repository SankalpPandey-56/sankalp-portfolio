import React from "react";
import { TIMELINE } from "@/data/experience";
import { Trophy, Bot, Calendar, Sparkles, Award } from "lucide-react";

export function RoboticsTimeline() {
  return (
    <section id="robotics" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
          05 / Hardware & Arenas
        </div>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-neutral-950 dark:text-white">
          Robotics Tenure & Hackathons
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-base sm:text-lg">
          Three full years of hands-on robotics competition leadership, national hackathon sprints, and open-source milestones.
        </p>
      </div>

      {/* Robotics Hero Feature Callout */}
      <div className="mb-16 p-8 sm:p-12 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 text-white dark:bg-neutral-950 dark:border-neutral-800 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 font-mono text-xs uppercase tracking-widest">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>3-Year Club Leadership · Multiple Interschool Champions</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-tight">
            The School Robotics Club Legacy
          </h3>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            For three consecutive years, I served at the helm of my school’s robotics club. We designed autonomous navigation chassis, wired high-current motor drivers, calibrated PID line-following and ultrasonic obstacle loops, and represented our institution across intense competitive arenas.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 font-mono text-xs">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="block font-bold text-white text-sm">Hardware Mastery</span>
              <span className="text-neutral-400">Microcontrollers, PWM, H-bridge drivers, sensor calibration.</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="block font-bold text-white text-sm">Competitive Wins</span>
              <span className="text-neutral-400">Multiple podium finishes in interschool robotics arenas.</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="block font-bold text-white text-sm">Pit Crew Leadership</span>
              <span className="text-neutral-400">High-pressure field debugging and team coordination.</span>
            </div>
          </div>
        </div>

        {/* Ambient watermark icon */}
        <Bot className="absolute -right-8 -bottom-8 w-80 h-80 text-white/5 pointer-events-none" />
      </div>

      {/* Chronological Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l border-neutral-200 dark:border-neutral-800 space-y-12">
        {TIMELINE.map((item) => (
          <div key={item.id} className="relative group">
            {/* Timeline bullet node */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-neutral-900 dark:border-white bg-white dark:bg-neutral-950 group-hover:scale-125 transition-transform" />

            <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/30 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest">
                  {item.period}
                </span>

                {item.badge && (
                  <span className="self-start sm:self-auto px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                    {item.badge}
                  </span>
                )}
              </div>

              <h4 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-neutral-950 dark:text-white">
                {item.title}
              </h4>
              <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 mb-3">
                {item.organization}
              </p>

              <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1.5 font-mono text-xs text-neutral-600 dark:text-neutral-400">
                {item.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
