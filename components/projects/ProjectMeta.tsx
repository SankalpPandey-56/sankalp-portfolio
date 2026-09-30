import { cn } from "@/lib/utils";
import type { Project } from "@/types";

type ProjectMetaProps = {
  project: Project;
  className?: string;
  compact?: boolean;
};

/** Numbered meta block for a project — the editorial caption to the preview. */
export function ProjectMeta({ project, className, compact = false }: ProjectMetaProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-ember">{project.number}</span>
        <h3
          className={cn(
            "font-display leading-none tracking-[-0.02em] text-paper",
            compact ? "text-3xl md:text-4xl" : "text-5xl md:text-6xl"
          )}
        >
          {project.title}
        </h3>
      </div>

      <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-paper/80">
        {project.description}
      </p>

      {!compact && (
        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-ink-line pt-6 text-sm sm:max-w-md">
          <div>
            <dt className="label">Year</dt>
            <dd className="mt-1 font-mono text-paper/90">{project.year}</dd>
          </div>
          <div>
            <dt className="label">Status</dt>
            <dd className="mt-1 font-mono capitalize text-paper/90">{project.status}</dd>
          </div>
          <div className="col-span-2">
            <dt className="label">Role</dt>
            <dd className="mt-1 font-mono text-paper/90">{project.role}</dd>
          </div>
        </dl>
      )}

      <ul className={cn("flex flex-wrap gap-2", compact ? "mt-5" : "mt-8")} aria-label="Technologies">
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="border border-ink-line px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-paper-dim"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
