export type PlaygroundEntry = {
  slug: string;
  title: string;
  description: string;
  href: string;
  external: boolean;
  tag: string;
};

/**
 * Playground — only real experiments. The first entry is a live toy built
 * into this site. Add more as they're built; omit anything that doesn't exist.
 */
export const PLAYGROUND: PlaygroundEntry[] = [
  {
    slug: "lattice",
    title: "Lattice",
    description:
      "The structure floating on this site — a small physics toy. Drag it, spin it, throw it. A study in instancing and soft constraint.",
    href: "#top",
    external: false,
    tag: "Interactive",
  },
  {
    slug: "cursor-trails",
    title: "Ink trail",
    description: "A cursor study. Coming soon — this space is reserved for real experiments only.",
    href: "",
    external: false,
    tag: "Soon",
  },
];
