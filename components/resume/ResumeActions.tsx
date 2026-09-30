"use client";

import { Download, Printer } from "lucide-react";

/** Download + print actions for the resume page (client island). */
export function ResumeActions() {
  return (
    <div className="flex items-center gap-3">
      <a
        href="/resume.pdf"
        download="Sankalp-Pandey-Resume.pdf"
        className="inline-flex items-center gap-2 bg-ember px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink transition-opacity hover:opacity-85"
      >
        <Download size={13} strokeWidth={2} aria-hidden="true" />
        Download PDF
      </a>
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 border border-ink-line px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-dim transition-colors hover:border-paper-dim hover:text-paper"
      >
        <Printer size={13} strokeWidth={1.5} aria-hidden="true" />
        Print
      </button>
    </div>
  );
}
