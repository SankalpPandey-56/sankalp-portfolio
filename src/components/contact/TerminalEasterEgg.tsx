"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "@/components/theme/ThemeProvider";
import { Terminal, Send, Check, CornerDownLeft } from "lucide-react";

interface TerminalLine {
  id: string;
  type: "input" | "output" | "system";
  text: string;
}

export function TerminalEasterEgg() {
  const { toggleTheme } = useTheme();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: "init-1",
      type: "system",
      text: "SANKALP PANDEY [CLI v2.4.0 — Reactive System]",
    },
    {
      id: "init-2",
      type: "system",
      text: "Type 'help' for available commands or 'symbiote' to trigger fluid transition.",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory: TerminalLine[] = [
      ...history,
      { id: Math.random().toString(), type: "input", text: `$ ${input}` },
    ];

    switch (cmd) {
      case "help":
        newHistory.push({
          id: Math.random().toString(),
          type: "output",
          text: "Commands: bio | projects | stack | prs | robotics | symbiote | contact | clear",
        });
        break;

      case "bio":
        newHistory.push({
          id: Math.random().toString(),
          type: "output",
          text: "Sankalp Pandey: First-Year B.Tech CSE (AI/ML) at Newton School of Tech, Pune. 3 years in competitive robotics, builder of Beyond 2D, active open-source contributor.",
        });
        break;

      case "projects":
        newHistory.push({
          id: Math.random().toString(),
          type: "output",
          text: "[1] Beyond 2D (CV & 3D Spatial Engine) | [2] CampusHub (Verified Student Platform) | [3] Nova (Contextual AI Workspace) | [4] Ember (Editorial Print Restaurant) | [5] Orbit (Construct 2.0)",
        });
        break;

      case "stack":
        newHistory.push({
          id: Math.random().toString(),
          type: "output",
          text: "Python (FastAPI, OpenCV) · TypeScript (Next.js, React) · PostgreSQL (Prisma) · Three.js · ROS · Arduino · Docker",
        });
        break;

      case "prs":
        newHistory.push({
          id: Math.random().toString(),
          type: "output",
          text: "Audited 26 PRs across Supabase, Kestra, Squidbrake, Termlens, Avenx-JS, MCP Servers, Lidtap, and Activist.",
        });
        break;

      case "robotics":
        newHistory.push({
          id: Math.random().toString(),
          type: "output",
          text: "Three full years in school robotics club. Won multiple interschool robotics championships. Microcontrollers, ultrasonic navigation, team pit-crew leadership.",
        });
        break;

      case "symbiote":
        newHistory.push({
          id: Math.random().toString(),
          type: "output",
          text: "METAMORPHOSIS ACTIVATED: Spreading liquid symbiote across the viewport...",
        });
        setTimeout(() => {
          toggleTheme();
        }, 150);
        break;

      case "contact":
        newHistory.push({
          id: Math.random().toString(),
          type: "output",
          text: "Email: sankalppandey.56@gmail.com | LinkedIn: sankalp-pandey-20361b41a | GitHub: SankalpPandey-56",
        });
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        newHistory.push({
          id: Math.random().toString(),
          type: "output",
          text: `Command not recognized: '${cmd}'. Type 'help' to inspect available system routines.`,
        });
        break;
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <div className="rounded-2xl border border-neutral-300 dark:border-neutral-800 bg-neutral-950 text-neutral-100 p-6 font-mono text-xs shadow-2xl flex flex-col h-80">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="text-neutral-400 font-bold ml-2 text-[11px]">
            sankalp@machine:~ (Interactive CLI)
          </span>
        </div>
        <span className="text-neutral-500 text-[10px]">zsh</span>
      </div>

      {/* Terminal Scroll Area */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-2 scrollbar-thin">
        {history.map((line) => (
          <div
            key={line.id}
            className={`${
              line.type === "input"
                ? "text-neutral-200 font-bold"
                : line.type === "system"
                ? "text-emerald-400"
                : "text-neutral-400"
            }`}
          >
            {line.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Command Input */}
      <form onSubmit={handleCommand} className="mt-3 pt-3 border-t border-neutral-800 flex items-center gap-2">
        <span className="text-emerald-400 font-bold">❯</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type 'help', 'projects', 'symbiote'..."
          className="flex-1 bg-transparent border-none outline-hidden text-neutral-100 placeholder:text-neutral-600 font-mono text-xs"
        />
        <button
          type="submit"
          className="p-1 rounded text-neutral-400 hover:text-white transition-colors"
          aria-label="Execute command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
