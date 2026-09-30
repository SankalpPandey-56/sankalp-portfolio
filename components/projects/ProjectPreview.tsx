"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BrowserFrame } from "./BrowserFrame";
import { cn } from "@/lib/utils";

type ProjectPreviewProps = {
  url?: string;
  previewImage?: string;
  title: string;
  className?: string;
  priority?: boolean;
};

/**
 * Project preview inside the browser chrome.
 * - With a liveUrl: sandboxed live iframe, screenshot fallback if framing is blocked.
 * - With a previewImage only: the screenshot.
 * - With neither: a designed "awaiting link" state — never a fabricated image.
 */
export function ProjectPreview({ url, previewImage, title, className, priority = false }: ProjectPreviewProps) {
  const [mode, setMode] = useState<"iframe" | "image" | "empty">(url ? "iframe" : previewImage ? "image" : "empty");
  const [ready, setReady] = useState(false);

  // If the iframe never reports load (blocked framing, dead URL), fall back.
  useEffect(() => {
    if (mode !== "iframe") return;
    const t = setTimeout(() => {
      setReady((r) => {
        if (!r) setMode(previewImage ? "image" : "empty");
        return r;
      });
    }, 6000);
    return () => clearTimeout(t);
  }, [mode, previewImage]);

  // Real URL in the pill when one exists; otherwise just the project name —
  // never a fabricated address.
  const hostname = url
    ? url.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : title.toLowerCase();

  return (
    <BrowserFrame url={hostname} className={className}>
      {mode === "iframe" && url && (
        <iframe
          src={url}
          title={`${title} — live preview`}
          loading="lazy"
          onLoad={() => setReady(true)}
          onError={() => setMode(previewImage ? "image" : "empty")}
          sandbox="allow-scripts allow-same-origin allow-forms"
          referrerPolicy="no-referrer-when-downgrade"
          className={cn(
            "absolute inset-0 h-full w-full border-0 transition-opacity duration-700",
            ready ? "opacity-100" : "opacity-0"
          )}
        />
      )}

      {mode === "image" && previewImage && (
        <Image
          src={previewImage}
          alt={`${title} website preview`}
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          priority={priority}
          className="object-cover object-top transition-transform duration-700 ease-out group-hover/frame:scale-[1.015]"
        />
      )}

      {mode === "empty" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-ink-soft">
          {/* Quiet blueprint placeholder — intentional, not broken-looking */}
          <div className="flex gap-1.5" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <span key={i} className="size-2 border border-paper-dim/50" style={{ opacity: 1 - i * 0.25 }} />
            ))}
          </div>
          <p className="label">{title} — link goes here</p>
          <p className="max-w-[36ch] text-center font-mono text-[0.625rem] leading-relaxed text-paper-dim/70">
            Add liveUrl / githubUrl in data/projects.ts and this window shows the real site.
          </p>
        </div>
      )}

      {/* Loading veil */}
      {mode === "iframe" && !ready && (
        <div className="absolute inset-0 grid place-items-center bg-ink-soft" aria-hidden="true">
          <span className="label animate-pulse">loading live preview…</span>
        </div>
      )}
    </BrowserFrame>
  );
}
