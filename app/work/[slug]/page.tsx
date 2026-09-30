import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS, getProject } from "@/data/projects";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { ProjectPreview } from "@/components/projects/ProjectPreview";
import { Reveal } from "@/components/ui/Reveal";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.tagline}`,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${project.tagline}`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const cs = project.caseStudy;
  const next = PROJECTS[(PROJECTS.findIndex((p) => p.slug === slug) + 1) % PROJECTS.length];

  return (
    <article className="px-6 pb-28 pt-32 md:px-10 md:pt-40">
      <div className="mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <Reveal>
          <Link
            href="/#work"
            className="link-line font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-paper-dim transition-colors hover:text-paper"
          >
            ← All work
          </Link>
        </Reveal>

        {/* Header */}
        <header className="mt-10">
          <Reveal>
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-sm text-ember">{project.number}</span>
              <span className="label">{project.status} · {project.year}</span>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="display-1 mt-6 text-paper">{project.title}</h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-[52ch] font-display text-xl italic text-paper-dim md:text-2xl">
              {project.tagline}
            </p>
          </Reveal>
        </header>

        {/* Live preview */}
        <Reveal delay={0.18} className="mt-14 block">
          <ProjectPreview
            url={project.liveUrl ?? ""}
            previewImage={project.previewImage}
            title={project.title}
            priority
          />
        </Reveal>

        {/* Links */}
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            {project.liveUrl && <ArrowLink href={project.liveUrl}>Live ↗</ArrowLink>}
            {project.githubUrl && <ArrowLink href={project.githubUrl}>GitHub ↗</ArrowLink>}
            {project.androidUrl && <ArrowLink href={project.androidUrl}>Android ↗</ArrowLink>}
          </div>
        </Reveal>

        {/* Body */}
        <div className="mt-20 flex flex-col gap-16 md:mt-28 md:gap-24">
          <Block label="Overview">
            <p className="max-w-[60ch] text-lg leading-relaxed text-paper/90">{cs.overview}</p>
            <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-paper-dim">{cs.purpose}</p>
          </Block>

          <Block label="What I built">
            <ul className="flex flex-col">
              {cs.built.map((item, i) => (
                <li
                  key={i}
                  className="flex items-baseline gap-5 border-t border-ink-line py-4 text-base text-paper/85"
                >
                  <span className="font-mono text-xs text-paper-dim">{String(i + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="border border-ink-line px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-paper-dim"
                >
                  {t}
                </span>
              ))}
            </div>
          </Block>

          <Block label="Key features">
            <ul className="grid gap-3 sm:grid-cols-2">
              {cs.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-base text-paper/85">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-ember" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </Block>

          <Block label="Technical decisions">
            <div className="flex flex-col gap-8">
              {cs.decisions.map((d, i) => (
                <div key={i} className="grid gap-3 border-t border-ink-line pt-6 md:grid-cols-[14rem_1fr] md:gap-10">
                  <h3 className="font-display text-xl text-paper">{d.title}</h3>
                  <p className="max-w-[58ch] text-base leading-relaxed text-paper-dim">{d.detail}</p>
                </div>
              ))}
            </div>
          </Block>

          <Block label="Challenges">
            <div className="flex flex-col gap-8">
              {cs.challenges.map((c, i) => (
                <div key={i} className="grid gap-3 border-t border-ink-line pt-6 md:grid-cols-[14rem_1fr] md:gap-10">
                  <h3 className="font-display text-xl text-paper">{c.title}</h3>
                  <p className="max-w-[58ch] text-base leading-relaxed text-paper-dim">{c.detail}</p>
                </div>
              ))}
            </div>
          </Block>

          <Block label="What I learned">
            <ul className="flex flex-col gap-4">
              {cs.learned.map((l, i) => (
                <li key={i} className="max-w-[60ch] text-lg leading-relaxed text-paper/85">
                  <span className="font-display italic text-ember">— </span>
                  {l}
                </li>
              ))}
            </ul>
          </Block>
        </div>

        {/* Next project */}
        <footer className="mt-24 border-t border-ink-line pt-10 md:mt-32">
          <p className="label mb-4">Next project</p>
          <Link
            href={`/work/${next.slug}`}
            className="group flex items-baseline gap-4"
          >
            <span className="font-mono text-sm text-ember">{next.number}</span>
            <span className="display-2 text-paper transition-colors group-hover:text-ember">
              {next.title}
              <span className="ml-3 inline-block font-mono text-sm text-paper-dim transition-transform group-hover:translate-x-1">→</span>
            </span>
          </Link>
        </footer>
      </div>
    </article>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-6 md:grid-cols-[10rem_1fr] md:gap-12">
      <Reveal>
        <h2 className="label sticky top-24">{label}</h2>
      </Reveal>
      <Reveal delay={0.08}>
        <div>{children}</div>
      </Reveal>
    </section>
  );
}
