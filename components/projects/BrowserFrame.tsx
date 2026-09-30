import { cn } from "@/lib/utils";

type BrowserFrameProps = {
  url: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * A precise, minimal browser window. The chrome is drawn, not photographed —
 * hairline borders, monospace URL, no fake tabs.
 */
export function BrowserFrame({ url, children, className }: BrowserFrameProps) {
  return (
    <figure className={cn("group/frame relative", className)}>
      {/* Window chrome */}
      <div className="overflow-hidden border border-ink-line bg-ink-soft transition-colors duration-500 group-hover/frame:border-paper-dim/40">
        <div className="flex items-center gap-3 border-b border-ink-line px-4 py-2.5">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="size-2 rounded-full bg-ink-line ring-1 ring-paper-dim/30" />
            <span className="size-2 rounded-full bg-ink-line ring-1 ring-paper-dim/30" />
            <span className="size-2 rounded-full bg-ink-line ring-1 ring-paper-dim/30" />
          </div>
          <span className="mx-auto flex max-w-[70%] items-center gap-1.5 truncate rounded-sm border border-ink-line bg-ink px-3 py-0.5 font-mono text-[0.625rem] text-paper-dim">
            <span className="inline-block size-1.5 rounded-full bg-ember/80" aria-hidden="true" />
            {url}
          </span>
          <span className="w-10" aria-hidden="true" />
        </div>
        {/* Preview surface */}
        <div className="relative aspect-[16/10] overflow-hidden bg-ink">
          {children}
        </div>
      </div>
      <figcaption className="sr-only">{url}</figcaption>
    </figure>
  );
}
