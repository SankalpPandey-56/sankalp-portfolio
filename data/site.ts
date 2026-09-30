import type { SiteConfig } from "@/types";

/**
 * Central site configuration.
 * Update the URL after the first deployment (e.g. https://sankalp.vercel.app
 * or a custom domain) so SEO tags, sitemap and canonical links stay correct.
 */
export const SITE: SiteConfig = {
  name: "Sankalp Pandey",
  shortName: "Sankalp",
  role: "Software Developer / Product Builder",
  // PLACEHOLDER — replace with the real email before shipping.
  email: "hello@sankalppandey.dev",
  location: "India",
  // PLACEHOLDER — update after the first deploy (Vercel URL or custom domain).
  url: "https://sankalp-portfolio.vercel.app",
  socials: [
    // Verified real handle (from the project repos' git remotes).
    { label: "GitHub", href: "https://github.com/SankalpPandey-56", external: true },
    // PLACEHOLDER — verify/replace with the real LinkedIn handle.
    { label: "LinkedIn", href: "https://linkedin.com/in/sankalppandey", external: true },
    { label: "Email", href: "mailto:hello@sankalppandey.dev", external: true },
  ],
};
