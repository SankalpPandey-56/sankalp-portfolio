"use client";

/** Open the command palette from anywhere. */
export function openCommandPalette() {
  window.dispatchEvent(new CustomEvent("sankalp:command-open"));
}
