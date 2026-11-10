"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  isTransitioning: boolean;
  toggleTheme: (originX?: number, originY?: number) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  isTransitioning: false,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("sp_theme") as Theme | null;
      if (stored === "light" || stored === "dark") {
        if (stored === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        document.documentElement.classList.add("dark");
      }
    } catch {
      document.documentElement.classList.add("dark");
    }
    // Set mounted in a macrotask/microtask or after paint
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = useCallback(
    (originX?: number, originY?: number) => {
      if (isTransitioning) return; // Prevent double trigger

      // Check if user prefers reduced motion
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        const nextTheme = theme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
        localStorage.setItem("sp_theme", nextTheme);
        if (nextTheme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        return;
      }

      // Dispatch custom event to trigger the canvas symbiote engine
      const x = originX ?? window.innerWidth - 80;
      const y = originY ?? 40;

      window.dispatchEvent(
        new CustomEvent("sp:symbiote-trigger", {
          detail: {
            originX: x,
            originY: y,
            targetTheme: theme === "dark" ? "light" : "dark",
            onCovered: () => {
              const nextTheme = theme === "dark" ? "light" : "dark";
              setTheme(nextTheme);
              localStorage.setItem("sp_theme", nextTheme);
              if (nextTheme === "dark") {
                document.documentElement.classList.add("dark");
              } else {
                document.documentElement.classList.remove("dark");
              }
            },
          },
        })
      );
    },
    [theme, isTransitioning]
  );

  useEffect(() => {
    const handleStart = () => setIsTransitioning(true);
    const handleEnd = () => setIsTransitioning(false);

    window.addEventListener("sp:symbiote-start", handleStart);
    window.addEventListener("sp:symbiote-complete", handleEnd);

    return () => {
      window.removeEventListener("sp:symbiote-start", handleStart);
      window.removeEventListener("sp:symbiote-complete", handleEnd);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, isTransitioning, toggleTheme }}>
      <div style={{ visibility: mounted ? "visible" : "hidden" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
