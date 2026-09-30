import type { SiteConfig } from "@/types";

/**
 * Central site configuration — the single source of truth for identity,
 * contact links, and the production URL (drives SEO, sitemap, canonicals).
 */
export const SITE: SiteConfig = {
  name: "Sankalp Pandey",
  shortName: "Sankalp",
  role: "Software Developer / Product Builder",
  email: "sankalppandey.49@gmail.com",
  location: "Pune, India",
  // Live production URL (Vercel). Swap in a custom domain here if you add one.
  url: "https://sankalp-portfolio-eta.vercel.app",
  socials: [
    { label: "GitHub", href: "https://github.com/SankalpPandey-56", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sankalp-pandey-20361b41a/", external: true },
    { label: "Email", href: "mailto:sankalppandey.49@gmail.com", external: true },
  ],
};
