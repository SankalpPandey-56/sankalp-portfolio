"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { EASE_OUT } from "@/lib/motion";
import { useReducedMotion } from "framer-motion";

const LINKS = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Playground", href: "/#playground" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/#contact" },
];

/**
 * Mobile-only compact nav: hamburger on the left (away from the wordmark),
 * full-screen ink sheet, oversized serif links. The command palette stays
 * the desktop power-user layer; this is the touch layer.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  // Lock scroll while the sheet is open.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // Escape closes the sheet.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5 border border-ink-line"
      >
        <span
          className="h-px w-4 bg-paper transition-transform duration-300"
          style={{ transform: open ? "translateY(3.5px) rotate(45deg)" : undefined }}
        />
        <span
          className="h-px w-4 bg-paper transition-transform duration-300"
          style={{ transform: open ? "translateY(-3.5px) rotate(-45deg)" : undefined }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-ink"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.25 }}
          >
            <div className="flex-1" />
            <nav aria-label="Mobile" className="flex flex-col gap-2 px-6 pb-10">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={reduced ? undefined : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.06 + i * 0.06, ease: EASE_OUT }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="display-2 flex items-baseline gap-4 text-paper"
                  >
                    <span className="font-mono text-xs text-ember">0{i + 1}</span>
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="flex items-center justify-between border-t border-ink-line px-6 py-5">
              <span className="label">Sankalp Pandey</span>
              <a
                href="https://github.com/SankalpPandey-56"
                target="_blank"
                rel="noopener noreferrer"
                className="label hover:text-paper"
              >
                GitHub ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
