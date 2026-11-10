"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TerminalEasterEgg } from "./TerminalEasterEgg";
import { Mail, ArrowUpRight, Copy, Check, FileDown, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const email = "sankalppandey.56@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mailto fallback with populated parameters
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Outreach & Form */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
              06 / Transmission
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-neutral-950 dark:text-white leading-tight">
              Let’s Build
              <br />
              Something Real
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed">
              Open to ambitious engineering collaborations, robotics challenges, open-source initiatives, and summer internship opportunities.
            </p>
          </div>

          {/* Quick Copy Email Strip */}
          <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-2 text-neutral-900 dark:text-white font-semibold truncate mr-2">
              <Mail className="w-4 h-4 shrink-0 text-neutral-500" />
              <span className="truncate">{email}</span>
            </div>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white flex items-center gap-1.5 shrink-0 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Functional Contact Form */}
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-xs text-neutral-500 dark:text-neutral-400 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Ada Lovelace"
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white font-mono text-xs focus:outline-hidden focus:border-neutral-950 dark:focus:border-white transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-xs text-neutral-500 dark:text-neutral-400 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="ada@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white font-mono text-xs focus:outline-hidden focus:border-neutral-950 dark:focus:border-white transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-xs text-neutral-500 dark:text-neutral-400 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="What are we building together?"
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white font-mono text-xs focus:outline-hidden focus:border-neutral-950 dark:focus:border-white transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <span>Transmit Message</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Social and Resume Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 font-mono text-xs">
            <a
              href="https://github.com/SankalpPandey-56"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="https://www.linkedin.com/in/sankalp-pandey-20361b41a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white ml-auto"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Interactive Terminal Easter Egg */}
        <div className="lg:col-span-6 space-y-4">
          <div className="font-mono text-xs text-neutral-500 uppercase tracking-widest flex items-center gap-2">
            <span>Terminal Sandbox</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
              Interactive
            </span>
          </div>

          <TerminalEasterEgg />

          <p className="font-mono text-[11px] text-neutral-500 dark:text-neutral-400 leading-normal">
            Tip: Type <code className="text-neutral-900 dark:text-white">symbiote</code> into the terminal console to unleash the liquid metamorphosis effect directly from the CLI.
          </p>
        </div>
      </div>
    </section>
  );
}
