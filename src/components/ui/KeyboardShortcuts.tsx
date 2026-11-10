"use client";

import { useEffect } from "react";
import { useTheme } from "@/components/theme/ThemeProvider";

export function KeyboardShortcuts() {
  const { toggleTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is currently typing in an input, textarea, or contentEditable element
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }

      // 't' or 'T' triggers the signature symbiote fluid transition
      if (e.key === "t" || e.key === "T") {
        toggleTheme();
      }

      // 'c' or 'C' scrolls smoothly to contact / terminal
      if (e.key === "c" || e.key === "C") {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleTheme]);

  return null;
}

