import { cn } from "@/lib/utils";

type TickerProps = {
  items: string[];
  className?: string;
};

/** Infinite horizontal rail. Duplicated track, CSS-only motion, pauses for reduced motion. */
export function Ticker({ items, className }: TickerProps) {
  const row = [...items, ...items];
  return (
    <div
      className={cn("relative overflow-hidden border-y border-ink-line bg-ink-soft py-3", className)}
      aria-hidden="true"
    >
      <div className="marquee-track">
        {row.map((item, i) => (
          <span
            key={i}
            className="label flex shrink-0 items-center gap-6 whitespace-nowrap px-6 text-paper-dim"
          >
            {item}
            <span className="inline-block size-1 rounded-full bg-ember" />
          </span>
        ))}
      </div>
    </div>
  );
}
