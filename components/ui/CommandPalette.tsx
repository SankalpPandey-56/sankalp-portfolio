"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";
import { EASE_OUT } from "@/lib/motion";

type Command = {
  id: string;
  label: string;
  hint?: string;
  group: string;
  run: () => void;
};

/** Global ⌘K / Ctrl-K command interface — navigation plus project jumps. */
export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Refs mirroring state so the global key handler always sees fresh values
  // without re-binding listeners.
  const openRef = useRef(open);
  openRef.current = open;
  const commandsRef = useRef<Command[]>([]);
  const activeRef = useRef(active);
  activeRef.current = active;
  const closeRef = useRef(() => {});

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);
  closeRef.current = close;

  useEffect(() => {
    const onOpen = () => {
      setOpen(true);
      // Let the overlay mount before stealing focus.
      requestAnimationFrame(() => inputRef.current?.focus());
    };
    window.addEventListener("sankalp:command-open", onOpen);

    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => {
          if (!o) requestAnimationFrame(() => inputRef.current?.focus());
          return !o;
        });
        return;
      }
      if (!openRef.current) return;

      if (e.key === "Escape") {
        closeRef.current();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        const total = commandsRef.current.length;
        setActive((a) => (a + 1) % Math.max(total, 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const total = commandsRef.current.length;
        setActive((a) => (a - 1 + total) % Math.max(total, 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const c = commandsRef.current[activeRef.current];
        c?.run();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("sankalp:command-open", onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const commands = useMemo<Command[]>(() => {
    // Section navigation: smooth-scroll on home, route home first otherwise.
    const goSection = (hash: string) => () => {
      close();
      if (window.location.pathname !== "/") {
        router.push(`/${hash}`);
      } else {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }
    };
    // Page navigation (case studies, home).
    const goPage = (path: string) => () => {
      close();
      router.push(path);
    };
    const external = (href: string) => () => {
      close();
      window.open(href, "_blank", "noopener,noreferrer");
    };
    const toTop = () => {
      close();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return [
      { id: "work", label: "Work", hint: "Selected projects", group: "Navigate", run: goSection("#work") },
      { id: "about", label: "About", hint: "Who I am", group: "Navigate", run: goSection("#about") },
      { id: "playground", label: "Playground", hint: "Experiments", group: "Navigate", run: goSection("#playground") },
      { id: "contact", label: "Contact", hint: "Say hello", group: "Navigate", run: goSection("#contact") },
      ...PROJECTS.map((p) => ({
        id: `project-${p.slug}`,
        label: p.title,
        hint: p.tagline,
        group: "Projects",
        run: goPage(`/work/${p.slug}`),
      })),
      { id: "github", label: "GitHub", hint: "@SankalpPandey-56", group: "Elsewhere", run: external(SITE.socials[0].href) },
      { id: "linkedin", label: "LinkedIn", hint: "Sankalp Pandey", group: "Elsewhere", run: external(SITE.socials[1].href) },
      { id: "email", label: "Email", hint: SITE.email, group: "Elsewhere", run: external(`mailto:${SITE.email}`) },
      { id: "top", label: "Back to top", group: "Navigate", run: toTop },
    ];
  }, [close, router]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) =>
      `${c.label} ${c.hint ?? ""} ${c.group}`.toLowerCase().includes(q)
    );
  }, [commands, query]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  // Mirror the filtered list for the global key handler.
  useEffect(() => {
    commandsRef.current = filtered;
  }, [filtered]);

  useEffect(() => {
    if (!open) return;
    const el = listRef.current?.querySelector<HTMLElement>(`[data-index="${active}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [active, open]);

  const runCommand = useCallback(
    (c: Command) => {
      c.run();
    },
    []
  );

  const grouped = useMemo(() => {
    const groups: { name: string; items: { c: Command; index: number }[] }[] = [];
    let groupIndex = 0;
    for (const c of filtered) {
      const g = groups.find((x) => x.name === c.group);
      const entry = { c, index: groupIndex++ };
      if (g) g.items.push(entry);
      else groups.push({ name: c.group, items: [entry] });
    }
    return { groups, total: groupIndex };
  }, [filtered]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[14vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Scrim */}
          <button
            aria-label="Close command menu"
            onClick={close}
            className="absolute inset-0 cursor-default bg-ink/70 backdrop-blur-sm"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command menu"
            className="relative w-full max-w-lg border border-ink-line bg-ink-soft shadow-2xl shadow-black/60"
            initial={{ opacity: 0, y: 12, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.99 }}
            transition={{ duration: 0.28, ease: EASE_OUT }}
          >
            {/* Prompt row */}
            <div className="flex items-center gap-3 border-b border-ink-line px-5 py-4">
              <span className="font-mono text-sm text-ember" aria-hidden="true">
                &gt;
              </span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command…"
                aria-label="Search commands"
                className="w-full bg-transparent font-mono text-sm text-paper placeholder:text-paper-dim/60 focus:outline-none"
              />
              <span className="caret font-mono text-sm text-ember" aria-hidden="true">
                ▍
              </span>
              <kbd className="label shrink-0 border border-ink-line px-1.5 py-0.5">esc</kbd>
            </div>

            {/* Results */}
            <div ref={listRef} className="max-h-[46vh] overflow-y-auto p-2" role="listbox" aria-label="Commands">
              {grouped.total === 0 && (
                <p className="px-4 py-6 font-mono text-sm text-paper-dim">
                  nothing matches “{query}”
                </p>
              )}
              {grouped.groups.map((g) => (
                <div key={g.name} className="mb-1">
                  <p className="label px-3 pb-1 pt-3">{g.name}</p>
                  {g.items.map(({ c, index }) => (
                    <button
                      key={c.id}
                      data-index={index}
                      role="option"
                      aria-selected={index === active}
                      onMouseEnter={() => setActive(index)}
                      onClick={() => runCommand(c)}
                      className={cn(
                        "flex w-full items-center justify-between gap-4 px-3 py-2.5 text-left font-mono text-sm transition-colors",
                        index === active ? "bg-ink-line/60 text-paper" : "text-paper-dim hover:text-paper"
                      )}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className={cn("text-ember", index === active ? "opacity-100" : "opacity-0")} aria-hidden="true">
                          &gt;
                        </span>
                        {c.label}
                      </span>
                      {c.hint && <span className="label normal-case tracking-normal">{c.hint}</span>}
                    </button>
                  ))}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-ink-line px-5 py-2.5">
              <span className="label">SANKALP OS v1.0</span>
              <span className="label">↑↓ navigate · ↵ run</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
