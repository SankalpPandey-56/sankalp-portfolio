"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { openCommandPalette } from "../ui/commandBus";
import { MobileNav } from "./MobileNav";

const LINKS = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Playground", href: "/#playground" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      // Hide while descending past the hero, return on any upward intent.
      setHidden(y > 400 && y > lastY);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
        hidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div
        className={cn(
          "absolute inset-0 -z-10 border-b transition-colors duration-500",
          scrolled ? "border-ink-line bg-ink/80 backdrop-blur-md" : "border-transparent"
        )}
        aria-hidden="true"
      />
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10"
      >
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-paper"
          aria-label="Sankalp Pandey — home"
        >
          Sankalp Pandey<span className="text-ember">.</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-line font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-paper-dim transition-colors hover:text-paper"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/SankalpPandey-56"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-paper-dim transition-colors hover:text-paper"
          >
            GitHub
          </a>
          <button
            type="button"
            onClick={openCommandPalette}
            aria-label="Open command menu (Command K)"
            className="hidden items-center gap-2 rounded-sm border border-ink-line px-2.5 py-1 font-mono text-[0.6875rem] tracking-[0.1em] text-paper-dim transition-colors hover:border-paper-dim hover:text-paper md:flex"
          >
            <kbd className="font-mono">⌘K</kbd>
          </button>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
