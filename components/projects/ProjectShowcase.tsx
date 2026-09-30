import { PROJECTS } from "@/data/projects";
import type { Project } from "@/types";
import { ProjectMeta } from "./ProjectMeta";
import { ProjectLinks } from "./ProjectLinks";
import { ProjectPreview } from "./ProjectPreview";
import { Reveal } from "../ui/Reveal";

/**
 * Work section. Each project gets its own composition — no repeated card
 * grids. Layout variants are keyed by slug so adding Project 04 is a data
 * change plus (optionally) a new variant here.
 */
export function ProjectShowcase() {
  return (
    <div className="flex flex-col gap-28 md:gap-40">
      {PROJECTS.map((project) => (
        <ProjectExhibit key={project.slug} project={project} />
      ))}
    </div>
  );
}

type LayoutVariant = "offset" | "horizon" | "duo";

const VARIANTS: Record<string, LayoutVariant> = {
  ember: "offset",
  nova: "horizon",
  campushub: "duo",
};

function ProjectExhibit({ project }: { project: Project }) {
  const variant = VARIANTS[project.slug] ?? "offset";

  return (
    <article
      aria-labelledby={`project-${project.slug}`}
      className="group relative"
    >
      {/* Oversized ghost numeral behind the exhibit */}
      <span
        aria-hidden="true"
        className="text-outline pointer-events-none absolute -top-10 right-0 select-none font-display text-[7rem] leading-none opacity-30 md:-top-16 md:text-[11rem]"
      >
        {project.number}
      </span>

      {variant === "offset" && <OffsetLayout project={project} />}
      {variant === "horizon" && <HorizonLayout project={project} />}
      {variant === "duo" && <DuoLayout project={project} />}
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* EMBER — large preview, information offset to one side               */
/* ------------------------------------------------------------------ */

function OffsetLayout({ project }: { project: Project }) {
  return (
    <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-8">
      <Reveal className="lg:col-span-7">
        <ProjectPreview
          url={project.liveUrl}
          previewImage={project.previewImage}
          title={project.title}
          priority
          className="transition-transform duration-700 ease-out lg:hover:-translate-y-1.5"
        />
      </Reveal>
      <div className="lg:col-span-5 lg:pl-6 lg:pt-10">
        <Reveal delay={0.12}>
          <ProjectMeta project={project} />
          <div className="mt-8">
            <ProjectLinks
              caseStudyHref={`/work/${project.slug}`}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              androidUrl={project.androidUrl || undefined}
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* NOVA — wide horizontal preview with floating metadata row           */
/* ------------------------------------------------------------------ */

function HorizonLayout({ project }: { project: Project }) {
  return (
    <div className="flex flex-col">
      <Reveal>
        <ProjectPreview
          url={project.liveUrl}
          previewImage={project.previewImage}
          title={project.title}
          className="lg:-mr-16 transition-transform duration-700 ease-out lg:hover:translate-x-2"
        />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="grid gap-8 border-b border-ink-line pb-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <ProjectMeta project={project} compact />
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <div className="flex flex-col items-start gap-5">
              <p className="font-display text-2xl italic text-paper-dim">{project.tagline}</p>
              <ProjectLinks
                caseStudyHref={`/work/${project.slug}`}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                androidUrl={project.androidUrl || undefined}
              />
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* CAMPUSHUB — tall preview + mobile panel composition                 */
/* ------------------------------------------------------------------ */

function DuoLayout({ project }: { project: Project }) {
  return (
    <div className="grid items-end gap-10 lg:grid-cols-12">
      <div className="order-2 lg:order-1 lg:col-span-4">
        <Reveal delay={0.1}>
          {/* Mobile panel — the Android companion, hinted not faked */}
          <div className="mx-auto w-48 overflow-hidden rounded-2xl border border-ink-line bg-ink-soft sm:w-56 lg:w-full lg:max-w-56">
            <div className="border-b border-ink-line px-3 py-1.5 text-center">
              <span className="font-mono text-[0.5rem] uppercase tracking-[0.2em] text-paper-dim">
                Android companion
              </span>
            </div>
            <div className="relative aspect-[9/16] bg-ink">
              <div className="absolute inset-0 grid place-items-center p-6 text-center">
                <p className="font-mono text-[0.625rem] leading-relaxed text-paper-dim">
                  Same API.
                  <br />
                  Pocket-sized.
                  <br />
                  <span className="text-ember">↗ Android</span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <ProjectMeta project={project} compact />
            <div className="mt-6">
              <ProjectLinks
                caseStudyHref={`/work/${project.slug}`}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                androidUrl={project.androidUrl || undefined}
              />
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal className="order-1 lg:order-2 lg:col-span-8">
        <ProjectPreview
          url={project.liveUrl}
          previewImage={project.previewImage}
          title={project.title}
          className="transition-transform duration-700 ease-out lg:hover:-translate-y-1.5"
        />
        {/* Integrated tagline band */}
        <div className="mt-6 flex items-baseline justify-between gap-6 border-t border-ink-line pt-4">
          <p className="font-display text-xl italic text-paper-dim md:text-2xl">{project.tagline}</p>
          <span className="label shrink-0">{project.year}</span>
        </div>
      </Reveal>
    </div>
  );
}
