/** Shared motion language — one vocabulary used across the whole site. */

/** Editorial ease: fast start, long settle. */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

/** Snappier ease for small UI moves. */
export const EASE_SNAP = [0.65, 0, 0.35, 1] as const;

/** Standard reveal: rise + fade. */
export const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: EASE_OUT },
};

/** Staggered children container. */
export const stagger = (delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren } },
});

export const staggerChild = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};
