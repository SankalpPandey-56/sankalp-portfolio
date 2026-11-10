import React from "react";
import { SKILL_CATEGORIES } from "@/data/skills";
import { CheckCircle2, BookOpen, Layers } from "lucide-react";

export function TechStack() {
  return (
    <section id="stack" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
          02 / Technical Capability
        </div>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-neutral-950 dark:text-white">
          Honest Technical Profile
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-base sm:text-lg">
          No arbitrary 87% progress bars. Technologies organized transparently by where they have been applied—from production deployments to active learning journeys.
        </p>
      </div>

      <div className="space-y-12">
        {SKILL_CATEGORIES.map((category, idx) => (
          <div
            key={category.title}
            className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/30 space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  {idx === 0 && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                  {idx === 1 && <Layers className="w-4 h-4 text-sky-500" />}
                  {idx === 2 && <BookOpen className="w-4 h-4 text-amber-500" />}
                  <h3 className="font-mono text-base font-bold uppercase tracking-wider text-neutral-950 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  {category.description}
                </p>
              </div>

              <span className="self-start sm:self-auto px-3 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-[11px] font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                {category.level === "project-verified" && "Production Verified"}
                {category.level === "worked-with" && "Academic / OSS Systems"}
                {category.level === "actively-learning" && "Active Study"}
              </span>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-950/60 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200 hover:shadow-xs"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono font-bold text-sm text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {skill.name}
                    </span>
                    {skill.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    )}
                  </div>
                  {skill.usage && (
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono leading-relaxed">
                      {skill.usage}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
