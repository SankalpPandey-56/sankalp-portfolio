import type { Metadata } from "next";
import "./print.css";
import { RESUME } from "@/data/resume";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { ResumeActions } from "@/components/resume/ResumeActions";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Résumé of Sankalp Pandey — B.Tech CSE (AI/ML) student and software developer. Projects: CampusHub, NOVA, EMBER.",
};

const CONTACT_LINKS = [
  { label: RESUME.links.github.label, href: RESUME.links.github.href },
  { label: RESUME.links.linkedin.label, href: RESUME.links.linkedin.href },
  { label: RESUME.links.portfolio.label, href: RESUME.links.portfolio.href },
];

type DocLinkPair = { label: string; href: string };

/** Light-document links (the page inverts the site's usual ink palette). */
function DocLink({ link, className }: { link: DocLinkPair; className?: string }) {
  const external = /^https?:/.test(link.href);
  return (
    <a
      href={link.href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`text-[13px] text-neutral-700 underline decoration-neutral-300 underline-offset-2 transition-colors hover:text-black hover:decoration-black print:text-black print:no-underline ${className ?? ""}`}
    >
      {link.label}
    </a>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-7 border-b border-neutral-300 pb-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-900 first:mt-0 print:mt-5">
      {children}
    </h2>
  );
}

export default function ResumePage() {
  return (
    <div className="resume-page min-h-screen bg-ink px-4 py-10 md:px-8 md:py-16 print:bg-white print:p-0">
      {/* Actions bar — hidden when printing */}
      <div className="mx-auto mb-6 flex max-w-[820px] items-center justify-between print:hidden">
        <ArrowLink href="/" external={false}>
          ← Back to portfolio
        </ArrowLink>
        <ResumeActions />
      </div>

      {/* The document */}
      <article className="resume-doc mx-auto max-w-[820px] bg-[#FCFBF8] px-8 py-10 text-neutral-900 shadow-2xl shadow-black/50 md:px-14 md:py-14 print:max-w-none print:bg-white print:p-0 print:shadow-none">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-[26px] font-semibold tracking-tight print:text-[24px]">
            {RESUME.name}
          </h1>
          <p className="mt-1 text-[13px] text-neutral-600">{RESUME.title}</p>
          <p className="mt-0.5 text-[13px] text-neutral-600">{RESUME.location}</p>
          <p className="mt-2 text-[13px]">
            <DocLink link={{ label: RESUME.email, href: `mailto:${RESUME.email}` }} />
            <span className="mx-1.5 text-neutral-400">·</span>
            <DocLink link={{ label: RESUME.links.phone.label, href: RESUME.links.phone.href }} />
          </p>
          <p className="mt-1 text-[13px]">
            {CONTACT_LINKS.map((link, i) => (
              <span key={link.href}>
                {i > 0 && <span className="mx-1.5 text-neutral-400">·</span>}
                <DocLink link={link} />
              </span>
            ))}
          </p>
        </header>

        {/* Summary */}
        <SectionTitle>Summary</SectionTitle>
        <p className="mt-2 text-[13.5px] leading-relaxed text-neutral-800">{RESUME.summary}</p>

        {/* Education */}
        <SectionTitle>Education</SectionTitle>
        <div className="mt-2 flex flex-wrap items-baseline justify-between gap-x-4">
          <h3 className="text-[14.5px] font-semibold">{RESUME.education.school}</h3>
          <span className="font-mono text-[12px] text-neutral-600">{RESUME.education.period}</span>
        </div>
        <p className="text-[13.5px] text-neutral-700">{RESUME.education.degree}</p>

        {/* Projects */}
        <SectionTitle>Projects</SectionTitle>
        <div className="flex flex-col gap-6">
          {RESUME.projects.map((project) => (
            <section key={project.name} aria-label={project.name}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-[15px] font-semibold tracking-tight">{project.name}</h3>
                <div className="flex items-baseline gap-4">
                  {project.links.map((link) => (
                    <DocLink key={link.href} link={link} />
                  ))}
                </div>
              </div>
              <p className="text-[13px] italic text-neutral-600">{project.meta}</p>
              <ul className="mt-1.5 flex flex-col gap-1.5">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2 text-[13.5px] leading-snug text-neutral-800">
                    <span aria-hidden="true" className="mt-[7px] size-1 shrink-0 rounded-full bg-neutral-500" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="mt-1.5 font-mono text-[11.5px] uppercase tracking-[0.06em] text-neutral-500">
                {project.tech}
              </p>
            </section>
          ))}
        </div>

        {/* Technical skills */}
        <SectionTitle>Technical Skills</SectionTitle>
        <dl className="mt-2 flex flex-col gap-1.5">
          {Object.entries(RESUME.skills).map(([group, items]) => (
            <div key={group} className="flex flex-col gap-x-4 text-[13.5px] sm:flex-row">
              <dt className="min-w-36 shrink-0 font-semibold text-neutral-900">{group}</dt>
              <dd className="text-neutral-700">{items}</dd>
            </div>
          ))}
        </dl>

        {/* Hardware & robotics */}
        <SectionTitle>Hardware &amp; Robotics Projects</SectionTitle>
        <p className="mt-2 text-[13px] italic text-neutral-600">{RESUME.hardware.intro}</p>
        <ul className="mt-1.5 flex flex-col gap-1.5">
          {RESUME.hardware.items.map((item) => (
            <li key={item.name} className="flex flex-wrap items-baseline gap-x-2 text-[13.5px] leading-snug text-neutral-800">
              <span className="font-semibold">{item.name}</span>
              <span className="text-neutral-600">— {item.detail}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
