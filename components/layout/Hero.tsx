"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { RevealLines } from "../ui/Reveal";
import { EASE_OUT } from "@/lib/motion";

const META_ROWS = [
  { k: "Discipline", v: "Software / Product / AI-ML" },
  { k: "Status", v: "CSE undergrad, building products" },
  { k: "Currently", v: "CampusHub · Nova · Ember" },
];

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] flex-col justify-between px-6 pb-10 pt-28 md:px-10 md:pb-14"
    >
      {/* Top meta row */}
      <motion.div
        className="flex items-start justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <p className="label max-w-[26ch] leading-relaxed normal-case tracking-normal">
          Sankalp Pandey builds software for the web — and sweats the part you feel.
        </p>
        <p className="label hidden md:block">Portfolio / 2026</p>
      </motion.div>

      {/* Display block */}
      <div className="relative z-10 max-w-4xl">
        <RevealLines
          lines={[
            <span key="l1" className="block font-display italic text-paper-dim">I build things</span>,
            <span key="l2" className="block font-display text-paper">for the web<span className="text-ember">.</span></span>,
          ]}
          lineClassName="display-1"
        />

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: EASE_OUT }}
        >
          <p className="label normal-case tracking-normal text-paper-dim">
            Software / AI / Interactive — student, builder, perfectionist about feel.
          </p>
        </motion.div>
        <motion.div
          className="mt-4 h-px w-24 bg-ember/80"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.8, ease: EASE_OUT }}
          style={{ transformOrigin: "left" }}
          aria-hidden="true"
        />
      </div>

      {/* Bottom meta grid */}
      <motion.dl
        className="grid grid-cols-1 gap-6 sm:grid-cols-3"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.05, ease: EASE_OUT }}
      >
        {META_ROWS.map((row) => (
          <div key={row.k} className="border-t border-ink-line pt-3">
            <dt className="label">{row.k}</dt>
            <dd className="mt-1.5 text-sm text-paper/90">{row.v}</dd>
          </div>
        ))}
      </motion.dl>

      {/* Scroll cue */}
      <motion.button
        type="button"
        onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" })}
        className="absolute bottom-10 right-6 flex items-center gap-2 text-paper-dim transition-colors hover:text-paper md:right-10"
        aria-label="Scroll to work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="label">Scroll</span>
        <motion.span
          animate={reduced ? undefined : { y: [0, 4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} strokeWidth={1.5} aria-hidden="true" />
        </motion.span>
      </motion.button>
    </section>
  );
}
