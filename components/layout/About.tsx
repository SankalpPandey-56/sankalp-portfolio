import { SKILLS } from "@/data/skills";
import { JOURNEY } from "@/data/journey";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

export function About() {
  return (
    <section id="about" aria-label="About Sankalp" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          label="Who I am"
          title={
            <>
              Student of cs,
              <br />
              student of <span className="font-display italic text-paper-dim">feel.</span>
            </>
          }
        />

        <div className="grid gap-16 lg:grid-cols-12">
          {/* Editorial intro */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="max-w-[52ch] text-xl leading-relaxed text-paper/90 md:text-2xl">
                I&apos;m Sankalp — a computer science undergrad who learns by shipping. Most of
                what I know about software came from building real things and watching where
                they creak.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10 max-w-[54ch] space-y-5 text-base leading-relaxed text-paper-dim">
                <p>
                  My work sits between engineering and product: full-stack builds where the
                  data model and the interaction model get equal attention. I like software
                  that feels considered — fast where it should be fast, quiet where it should
                  be quiet.
                </p>
                <p>
                  Right now that means full-stack products, an increasing amount of AI/ML,
                  and the occasional descent into Three.js when a page deserves a third
                  dimension.
                </p>
                <p className="text-paper/70">
                  No grand unifying theory. Just projects, one after another, each one a
                  little more honest than the last.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Skills — typographic, no badges, no bars */}
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.15}>
              <p className="label mb-8">Tools I reach for</p>
              <dl className="flex flex-col gap-7">
                {SKILLS.map((group) => (
                  <div key={group.group} className="border-t border-ink-line pt-4">
                    <dt className="label mb-3">{group.group}</dt>
                    <dd className="text-sm leading-7 text-paper/85">
                      {group.items.join(" · ")}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        {/* Journey */}
        <div className="mt-24 md:mt-32">
          <Reveal>
            <p className="label mb-10">Journey so far</p>
          </Reveal>
          <ol className="flex flex-col">
            {JOURNEY.map((entry, i) => (
              <Reveal key={entry.period} delay={i * 0.06} as="li">
                <div className="group grid grid-cols-[4.5rem_1fr] items-baseline gap-6 border-t border-ink-line py-6 transition-colors hover:bg-ink-soft/50 md:grid-cols-[8rem_16rem_1fr] md:gap-10">
                  <span className="font-mono text-sm text-ember">{entry.period}</span>
                  <span className="text-lg text-paper">{entry.title}</span>
                  <span className="col-start-2 text-sm text-paper-dim md:col-start-3">
                    {entry.detail}
                  </span>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
