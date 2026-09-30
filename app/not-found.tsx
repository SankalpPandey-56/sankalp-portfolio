import Link from "next/link";

export const metadata = {
  title: "404 — off the lattice",
};

/**
 * 404 — the lattice can't assemble this page.
 * On desktop, a decorative CSS constellation echoes the 3D language.
 */
export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center px-6 py-28 md:px-10">
      {/* Decorative scattered pieces */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {[
          { top: "12%", left: "8%", rot: "14deg", s: 14 },
          { top: "22%", left: "78%", rot: "-24deg", s: 20 },
          { top: "64%", left: "14%", rot: "-8deg", s: 10 },
          { top: "74%", left: "66%", rot: "32deg", s: 16 },
          { top: "38%", left: "88%", rot: "8deg", s: 12 },
          { top: "82%", left: "38%", rot: "-18deg", s: 18 },
          { top: "8%", left: "48%", rot: "22deg", s: 8 },
        ].map((p, i) => (
          <span
            key={i}
            className="absolute border border-paper-dim/40 bg-ink-soft"
            style={{
              top: p.top,
              left: p.left,
              width: p.s,
              height: p.s * 1.4,
              transform: `rotate(${p.rot})`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto w-full max-w-4xl">
        <p className="label">
          <span className="text-ember">404</span> — page not on the lattice
        </p>
        <h1 className="display-1 mt-8 text-paper">
          This page drifted<span className="text-ember">.</span>
        </h1>
        <p className="mt-8 max-w-[44ch] text-base leading-relaxed text-paper-dim">
          The structure is here, but this particular piece isn&apos;t. It may have been
          moved, renamed, or never built — the lattice keeps honest records.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3">
          <Link
            href="/"
            className="link-line font-mono text-sm uppercase tracking-[0.14em] text-paper"
          >
            ← Back to the lattice
          </Link>
          <Link
            href="/#work"
            className="link-line font-mono text-sm uppercase tracking-[0.14em] text-paper-dim transition-colors hover:text-paper"
          >
            See the work
          </Link>
        </div>
      </div>
    </section>
  );
}
