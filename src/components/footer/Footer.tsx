"use client";

import React from "react";
import confetti from "canvas-confetti";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.9 },
      colors: ["#000000", "#555555", "#aaaaaa", "#ffffff"],
    });
  };

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800/80 py-12 px-6 sm:px-8 max-w-7xl mx-auto font-mono text-xs text-neutral-500 dark:text-neutral-400">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Copyright and identity */}
        <div className="flex items-center gap-3">
          <button
            onClick={triggerCelebration}
            className="w-2.5 h-2.5 rounded-full bg-neutral-950 dark:bg-white hover:scale-150 transition-transform cursor-pointer"
            title="Click for celebratory Easter egg"
            aria-label="Secret Easter egg"
          />
          <span>
            © 2026 Sankalp Pandey. Engineered with Next.js & Symbiote Fluidics.
          </span>
        </div>

        {/* Center: Social links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/SankalpPandey-56"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sankalp-pandey-20361b41a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sankalppandey.56@gmail.com"
            className="hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            Email
          </a>
        </div>

        {/* Right: Back to top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 hover:text-neutral-950 dark:hover:text-white transition-colors"
          aria-label="Scroll back to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
