import type { Metadata, Viewport } from "next";
import "./globals.css";
import { fontSans, fontMono, fontDisplay } from "@/lib/fonts";
import { SITE } from "@/data/site";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { LatticeCanvas } from "@/components/3d/LatticeCanvas";
import { SectionReporter } from "@/components/3d/SectionReporter";
import { CommandPalette } from "@/components/ui/CommandPalette";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Sankalp Pandey — Software Developer & Product Builder",
    template: "%s — Sankalp Pandey",
  },
  description:
    "Sankalp Pandey builds software for the web — full-stack products, AI experiments, and interfaces that feel considered. CSE student, product builder.",
  keywords: ["Sankalp Pandey", "software developer", "product builder", "full-stack", "AI/ML", "portfolio"],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: "Sankalp Pandey",
    title: "Sankalp Pandey — Software Developer & Product Builder",
    description:
      "Full-stack products, AI experiments, and interfaces that feel considered. Selected work: EMBER, NOVA, CAMPUSHUB.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Sankalp Pandey — portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sankalp Pandey — Software Developer & Product Builder",
    description: "Full-stack products, AI experiments, and interfaces that feel considered.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A0A08",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable} ${fontDisplay.variable}`}>
      <body className="grain">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-ember focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-ink"
        >
          Skip to content
        </a>
        {/* 3D layer + scroll narrative */}
        <LatticeCanvas />
        <SectionReporter />
        {/* Chrome */}
        <Nav />
        <CommandPalette />
        <main id="content" className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
