import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: React.ReactNode;
  className?: string;
};

/** Marker row (01 — WORK) + large editorial title, separated by a hairline. */
export function SectionHeading({ index, label, title, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-16 md:mb-24", className)}>
      <Reveal>
        <div className="flex items-baseline gap-4">
          <span className="label text-ember">{index}</span>
          <span className="label">{label}</span>
          <span className="rule hidden flex-1 sm:block" aria-hidden="true" />
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="display-2 mt-10 text-paper">{title}</h2>
      </Reveal>
    </div>
  );
}
