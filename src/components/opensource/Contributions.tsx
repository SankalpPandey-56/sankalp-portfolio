"use client";

import React, { useState } from "react";
import { CONTRIBUTIONS } from "@/data/contributions";
import { ContributionCard } from "./ContributionCard";
import { GitPullRequest, GitMerge } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function Contributions() {
  const [filter, setFilter] = useState<string>("all");

  const filtered = CONTRIBUTIONS.filter((item) => {
    if (filter === "all") return true;
    if (filter === "merged") return item.status === "merged";
    if (filter === "open") return item.status === "open";
    if (filter === "supabase") return item.repository.includes("supabase");
    if (filter === "safety") return item.repository.includes("squidbrake");
    return true;
  });

  const mergedCount = CONTRIBUTIONS.filter((c) => c.status === "merged").length;
  const totalCount = 26; // Total verified across full GitHub account

  return (
    <section id="open-source" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
            04 / Public Engineering
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-neutral-950 dark:text-white">
            Open-Source Contributions
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-base sm:text-lg">
            Direct code contributions across public developer ecosystems including Supabase, Kestra, and AI safety tools. Every entry links to the verified pull request with a simple one-line explanation.
          </p>
        </div>

        {/* Aggregate GitHub Stats */}
        <div className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 font-mono text-xs">
          <div className="flex items-center gap-2">
            <GitMerge className="w-4 h-4 text-purple-500" />
            <div>
              <span className="font-bold text-neutral-950 dark:text-white">{mergedCount}</span>
              <span className="text-neutral-400"> Merged PRs</span>
            </div>
          </div>
          <span className="text-neutral-300 dark:text-neutral-700">|</span>
          <div className="flex items-center gap-2">
            <GitPullRequest className="w-4 h-4 text-emerald-500" />
            <div>
              <span className="font-bold text-neutral-950 dark:text-white">{totalCount}</span>
              <span className="text-neutral-400"> Total Authored</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {[
          { id: "all", label: "All Audited PRs" },
          { id: "merged", label: "Merged Only" },
          { id: "open", label: "Open Only" },
          { id: "supabase", label: "Supabase" },
          { id: "safety", label: "Squidbrake Safety" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`px-4 py-1.5 rounded-full font-mono text-xs transition-colors ${
              filter === tab.id
                ? "bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-bold"
                : "border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <ContributionCard key={item.id} item={item} />
        ))}
      </div>

      {/* GitHub Profile Callout */}
      <div className="mt-12 text-center">
        <a
          href="https://github.com/SankalpPandey-56"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-800 text-xs font-mono font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200 hover:border-neutral-900 dark:hover:border-white transition-all duration-200"
        >
          <GithubIcon className="w-4 h-4" />
          <span>View All 26 Public Pull Requests on GitHub</span>
        </a>
      </div>
    </section>
  );
}
