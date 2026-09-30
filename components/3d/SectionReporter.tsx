"use client";

import { useEffect } from "react";
import { setLatticeSection, lattice, type LatticeSection } from "./latticeStore";

/**
 * Scroll spy that drives the 3D narrative: hero (ordered) → work (agitated)
 * → about (loose) → playground (playful) → contact (settled).
 * Also mirrors prefers-reduced-motion into the store.
 */
export function SectionReporter() {
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    lattice.reducedMotion = mq.matches;
    const onMq = (e: MediaQueryListEvent) => {
      lattice.reducedMotion = e.matches;
    };
    mq.addEventListener("change", onMq);

    const ids: LatticeSection[] = ["home", "work", "about", "playground", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setLatticeSection(entry.target.id as LatticeSection);
          }
        }
      },
      // A thin horizontal band at 40% viewport height decides the active section.
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    for (const s of sections) observer.observe(s);
    return () => {
      observer.disconnect();
      mq.removeEventListener("change", onMq);
    };
  }, []);

  return null;
}
