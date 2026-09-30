import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Routed through CSS variables so the Konami “paper mode” easter egg
        // can invert the whole system at runtime.
        ink: {
          DEFAULT: "var(--ink)",
          soft: "var(--ink-soft)",
          line: "var(--ink-line)",
        },
        paper: {
          DEFAULT: "var(--paper)",
          dim: "var(--paper-dim)",
        },
        ember: "var(--ember)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.055em",
      },
    },
  },
  plugins: [],
};

export default config;
