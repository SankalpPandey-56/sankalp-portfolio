"use client";

import React from "react";
import { OpenSourceContribution } from "@/types";
import { GitPullRequest, GitMerge, ExternalLink, Calendar, Tag } from "lucide-react";

export function ContributionCard({ item }: { item: OpenSourceContribution }) {
  const isMerged = item.status === "merged";
  const isOpen = item.status === "open";

  return (
    <div className="group relative p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800/80 bg-white/70 dark:bg-neutral-950/50 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Repo header & Status pill */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-800 dark:text-neutral-200">
            {isMerged ? (
              <GitMerge className="w-4 h-4 text-purple-500 shrink-0" />
            ) : (
              <GitPullRequest className="w-4 h-4 text-emerald-500 shrink-0" />
            )}
            <span className="truncate">{item.repository}</span>
            <span className="text-neutral-400 font-normal">#{item.prNumber}</span>
          </div>

          <span
            className={`px-2.5 py-0.5 rounded-full font-mono text-[10px] uppercase font-bold tracking-wider ${
              isMerged
                ? "bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800"
                : isOpen
                ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
            }`}
          >
            {item.status}
          </span>
        </div>

        {/* Original PR Title */}
        <h4 className="font-mono text-sm font-semibold text-neutral-950 dark:text-white line-clamp-2 mb-3 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
          {item.title}
        </h4>

        {/* Simple 1-Line Explanation */}
        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans mb-4">
          {item.simpleExplanation}
        </p>
      </div>

      {/* Footer tags and link */}
      <div className="pt-4 border-t border-neutral-100 dark:border-neutral-850 flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 font-mono text-[10px]"
            >
              #{tag}
            </span>
          ))}
        </div>

        <a
          href={item.prUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-neutral-900 dark:text-white hover:underline underline-offset-2 shrink-0 ml-2"
        >
          <span>PR #{item.prNumber}</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
