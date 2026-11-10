"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Open Source", href: "#open-source" },
  { label: "Robotics", href: "#robotics" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-neutral-50/80 dark:bg-[#060606]/80 backdrop-blur-xl border-b border-neutral-200/80 dark:border-neutral-800/80 shadow-xs"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <Link
            href="/"
            className="group flex items-center gap-2 font-mono text-sm tracking-wider uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-white group-hover:scale-150 transition-transform duration-300" />
            <span className="font-semibold text-neutral-900 dark:text-white">
              Sankalp<span className="text-neutral-400 font-normal">.dev</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-neutral-100/60 dark:bg-neutral-900/60 p-1.5 rounded-full border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-md">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-1.5 rounded-full text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/resume"
              className="hidden sm:inline-flex items-center gap-1 px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-800 text-xs font-mono text-neutral-800 dark:text-neutral-200 hover:border-neutral-900 dark:hover:border-white transition-all duration-200 hover:scale-102"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Symbiote Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-neutral-50/95 dark:bg-[#060606]/95 backdrop-blur-2xl flex flex-col justify-center px-8 md:hidden">
          <nav className="flex flex-col gap-6 text-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-mono tracking-tight text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-col items-center gap-4">
              <Link
                href="/resume"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-mono text-sm"
              >
                <span>View Resume</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
