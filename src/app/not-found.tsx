import React from "react";
import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="space-y-6 max-w-md">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 font-mono text-xs text-neutral-600 dark:text-neutral-400">
          <Terminal className="w-3.5 h-3.5" />
          <span>Error 404 · Signal Lost</span>
        </div>

        <h1 className="text-7xl font-black font-mono tracking-tighter text-neutral-950 dark:text-white">
          404
        </h1>

        <p className="text-sm font-mono text-neutral-600 dark:text-neutral-400 leading-relaxed">
          The requested coordinate does not exist in this spatial reality or has been relocated.
        </p>

        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-mono text-xs uppercase tracking-wider font-bold hover:scale-105 transition-transform"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Base Coordinate</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

