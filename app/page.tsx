import { Hero } from "@/components/layout/Hero";
import { Work } from "@/components/layout/Work";
import { About } from "@/components/layout/About";
import { Playground } from "@/components/layout/Playground";
import { Contact } from "@/components/layout/Contact";
import { DragZone } from "@/components/3d/DragZone";
import { Ticker } from "@/components/ui/Ticker";
import { SITE } from "@/data/site";

const TICKER_ITEMS = [
  "TypeScript", "React", "Next.js", "PostgreSQL", "Prisma",
  "Three.js", "AI/ML", "Tailwind CSS", "Python", "Framer Motion",
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    url: SITE.url,
    email: SITE.email.replace("mailto:", ""),
    jobTitle: "Software Developer / Product Builder",
    sameAs: [SITE.socials[0].href, SITE.socials[1].href],
  };

  return (
    <>
      <DragZone />
      <Hero />
      <Ticker items={TICKER_ITEMS} />
      <Work />
      <About />
      <Playground />
      <Contact />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
