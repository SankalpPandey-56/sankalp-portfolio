"use client";

import { useRef } from "react";
import { lattice } from "./latticeStore";

/**
 * A fixed, invisible strip over the hero (right side on desktop, top on
 * mobile) where the Lattice lives. Pointer drags here spin the structure;
 * everything passes through except when actually dragging, so links and
 * text selection elsewhere stay untouched.
 */
export function DragZone() {
  const last = useRef<{ x: number; y: number } | null>(null);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[5] h-[42vh] md:left-1/2 md:right-0 md:h-screen md:w-1/2"
      style={{ cursor: lattice.dragging ? "grabbing" : "grab", touchAction: "pan-y" }}
      onPointerDown={(e) => {
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
        last.current = { x: e.clientX, y: e.clientY };
        lattice.dragging = true;
      }}
      onPointerMove={(e) => {
        if (!lattice.dragging || !last.current) return;
        lattice.dragDX += e.clientX - last.current.x;
        lattice.dragDY += e.clientY - last.current.y;
        last.current = { x: e.clientX, y: e.clientY };
      }}
      onPointerUp={() => {
        lattice.dragging = false;
        last.current = null;
      }}
      onPointerCancel={() => {
        lattice.dragging = false;
        last.current = null;
      }}
    />
  );
}
