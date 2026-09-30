/**
 * Shared mutable state between the DOM layer and the 3D scene.
 * Plain module singleton — read in useFrame, mutated by pointer handlers
 * and the scroll tracker. Zero React re-renders.
 */

export type LatticeSection =
  | "home"
  | "work"
  | "about"
  | "playground"
  | "contact";

export const LATTICE_STATES: Record<
  LatticeSection,
  { scramble: number; spread: number; speed: number; tiltX: number; tiltY: number }
> = {
  // home: an ordered, quietly rotating structure
  home: { scramble: 0.12, spread: 1, speed: 0.12, tiltX: 0, tiltY: 0 },
  // work: agitated — pieces drift apart as projects are examined
  work: { scramble: 0.5, spread: 1.18, speed: 0.22, tiltX: 0.14, tiltY: -0.22 },
  // about: loose and personal — the structure pulled apart
  about: { scramble: 0.72, spread: 0.92, speed: 0.15, tiltX: -0.1, tiltY: 0.26 },
  // playground: playful, wide, faster
  playground: { scramble: 0.32, spread: 1.3, speed: 0.4, tiltX: 0.2, tiltY: 0.12 },
  // contact: everything settles back into order
  contact: { scramble: 0.04, spread: 0.8, speed: 0.07, tiltX: 0, tiltY: 0 },
};

export const lattice = {
  section: "home" as LatticeSection,
  /** Pointer position, normalized -1..1 from viewport center. */
  pointerX: 0,
  pointerY: 0,
  /** Drag state written by DragZone, consumed in useFrame. */
  dragging: false,
  dragDX: 0,
  dragDY: 0,
  reducedMotion: false,
};

export function setLatticeSection(section: LatticeSection) {
  lattice.section = section;
}
