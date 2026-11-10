"use client";

import React, { useRef } from "react";
import { useTheme } from "@/components/theme/ThemeProvider";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, isTransitioning, toggleTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isTransitioning) return;
    const rect = buttonRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : e.clientX;
    const y = rect ? rect.top + rect.height / 2 : e.clientY;
    toggleTheme(x, y);
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      disabled={isTransitioning}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode (Symbiote transition)`}
      title={isTransitioning ? "Metamorphosing..." : `Toggle theme (${theme === "dark" ? "Light" : "Dark"})`}
      className={`relative group inline-flex items-center justify-center w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-800 bg-neutral-100/80 dark:bg-neutral-900/80 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      <span className="sr-only">Toggle theme</span>
      <div className="relative w-5 h-5 flex items-center justify-center">
        {theme === "dark" ? (
          <Sun className="w-4 h-4 text-neutral-200 transition-transform duration-500 rotate-0 group-hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-neutral-800 transition-transform duration-500 rotate-0 group-hover:-rotate-12" />
        )}
      </div>

      {/* Subtle organic pulse indicator on hover */}
      <span className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-neutral-400/20 dark:bg-neutral-600/20 -z-10 blur-sm" />
    </button>
  );
}

