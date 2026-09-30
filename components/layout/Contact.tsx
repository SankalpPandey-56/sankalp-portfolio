import { SITE } from "@/data/site";
import { Reveal } from "../ui/Reveal";
import { ArrowLink } from "../ui/ArrowLink";

export function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="flex min-h-[85svh] flex-col justify-center px-6 py-28 md:px-10"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="label">
            <span className="text-ember">04</span> — Contact
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="display-2 mt-10 max-w-[14ch] text-paper">
            Let&apos;s build <span className="font-display italic text-paper-dim">something.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-8 max-w-[46ch] text-base leading-relaxed text-paper-dim">
            A project, an internship, a question about something I&apos;ve built — my inbox
            is open, and I actually answer it.
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-14 flex flex-col gap-1">
            <ArrowLink href={`mailto:${SITE.email}`} variant="block">
              {SITE.email}
            </ArrowLink>
            <ArrowLink href={SITE.socials[1].href} variant="block">
              LinkedIn
            </ArrowLink>
            <ArrowLink href={SITE.socials[0].href} variant="block">
              GitHub
            </ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
