import { SectionHeading } from "../ui/SectionHeading";
import { ProjectShowcase } from "../projects/ProjectShowcase";

export function Work() {
  return (
    <section id="work" aria-label="Selected work" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          label="Selected work"
          title={
            <>
              Built, shipped,
              <br />
              <span className="font-display italic text-paper-dim">still standing.</span>
            </>
          }
        />
        <ProjectShowcase />
      </div>
    </section>
  );
}
