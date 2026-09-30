"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

export function Footer() {
  const [year, setYear] = useState<number | null>(null);
  const [mode, setMode] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  // Easter egg #1 — Konami code flips the site to a warm "paper" inversion
  // for the session. Discovered, not advertised.
  useEffect(() => {
    let progress: string[] = [];
    const onKey = (e: KeyboardEvent) => {
      progress = [...progress, e.key].slice(-KONAMI.length);
      if (progress.join(",") === KONAMI.join(",")) {
        setMode((m) => !m);
        progress = [];
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.paper = mode ? "on" : "";
  }, [mode]);

  return (
    <footer className="border-t border-ink-line px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-baseline gap-3">
          <p className="font-display text-lg text-paper">Sankalp Pandey<span className="text-ember">.</span></p>
          <p className="label">© {year ?? ""}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-7 gap-y-2">
          <a href={SITE.socials[2].href} className="label transition-colors hover:text-paper">
            Email
          </a>
          <a href={SITE.socials[0].href} target="_blank" rel="noopener noreferrer" className="label transition-colors hover:text-paper">
            GitHub
          </a>
          <a href={SITE.socials[1].href} target="_blank" rel="noopener noreferrer" className="label transition-colors hover:text-paper">
            LinkedIn
          </a>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="label transition-colors hover:text-paper"
          >
            Back to top ↑
          </button>
        </nav>
      </div>

      {/* The whisper row — tiny, ignorable, rewarding */}
      <p className={cn("mx-auto mt-8 max-w-6xl font-mono text-[0.5625rem] tracking-[0.18em] text-paper-dim/40 uppercase")}>
        ↑↑↓↓←→←→BA · you found the quiet part of the page
      </p>
    </footer>
  );
}
