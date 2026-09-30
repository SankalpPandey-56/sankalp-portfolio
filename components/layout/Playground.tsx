import { PLAYGROUND } from "@/data/playground";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { ArrowLink } from "../ui/ArrowLink";

export function Playground() {
  return (
    <section id="playground" aria-label="Playground experiments" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          label="Playground"
          title={
            <>
              Experiments,
              <br />
              <span className="font-display italic text-paper-dim">unfinished on purpose.</span>
            </>
          }
        />

        <div className="grid gap-px border border-ink-line bg-ink-line md:grid-cols-2">
          {PLAYGROUND.map((item, i) => {
            const live = item.href !== "";
            return (
              <Reveal key={item.slug} delay={i * 0.08}>
                <article className="flex h-full flex-col justify-between bg-ink p-8 transition-colors duration-300 hover:bg-ink-soft md:p-10">
                  <div>
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-display text-3xl text-paper">{item.title}</h3>
                      <span className="label">{item.tag}</span>
                    </div>
                    <p className="mt-5 max-w-[46ch] text-sm leading-relaxed text-paper-dim">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-10">
                    {live ? (
                      <ArrowLink href={item.href} external={item.external}>
                        Try it ↗
                      </ArrowLink>
                    ) : (
                      <span className="label">In the oven — soon</span>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-[52ch] text-sm leading-relaxed text-paper-dim">
            This section only holds things that actually run. If it&apos;s listed, you can
            click it; if it isn&apos;t here yet, it&apos;s still in a notes file somewhere.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
