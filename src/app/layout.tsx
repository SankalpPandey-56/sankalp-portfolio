import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { SymbioteTransition } from "@/components/theme/SymbioteTransition";
import { Navbar } from "@/components/nav/Navbar";
import { Footer } from "@/components/footer/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sankalp Pandey · Developer | Robotics Enthusiast | Open-Source Contributor",
  description:
    "Personal engineering portfolio of Sankalp Pandey — First-year B.Tech CSE (AI/ML) at Newton School of Technology, Pune. Three years in competitive robotics, builder of Beyond 2D architectural vision engine, and contributor to Supabase, Kestra, and open source.",
  keywords: [
    "Sankalp Pandey",
    "Robotics",
    "Developer",
    "Open Source Contributor",
    "Beyond 2D",
    "Computer Vision",
    "FastAPI",
    "Next.js",
    "Three.js",
    "Supabase",
    "Kestra",
    "Pune",
  ],
  authors: [{ name: "Sankalp Pandey", url: "https://github.com/SankalpPandey-56" }],
  creator: "Sankalp Pandey",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sankalppandey.vercel.app",
    title: "Sankalp Pandey · Developer | Robotics Enthusiast | Open-Source Contributor",
    description:
      "Deterministic computer vision pipelines, verified student platforms, 3-year robotics tenure, and 26 audited open-source contributions.",
    siteName: "Sankalp Pandey Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sankalp Pandey · Developer | Robotics Enthusiast | Open-Source Contributor",
    description:
      "Deterministic computer vision pipelines, verified student platforms, 3-year robotics tenure, and 26 audited open-source contributions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-900">
        <ThemeProvider>
          {/* Signature Feature: Venom-Inspired Liquid Symbiote Transition Engine */}
          <SymbioteTransition />

          {/* Precision Desktop Follower Cursor */}
          <CustomCursor />

          {/* Subtle Organic Film Grain Overlay */}
          <NoiseOverlay />

          {/* Inertia Smooth Scrolling */}
          <SmoothScroll>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
