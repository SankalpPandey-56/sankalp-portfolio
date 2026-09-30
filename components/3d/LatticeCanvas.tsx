"use client";

import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { lattice, setLatticeSection, type LatticeSection } from "./latticeStore";

// R3F is heavy — keep it out of the initial JS payload entirely.
const Lattice = dynamic(() => import("./Lattice").then((m) => m.Lattice), {
  ssr: false,
});

/**
 * Fixed full-viewport canvas behind the page content.
 * Pointer + drag events flow through latticeStore so the scene never
 * re-renders React and DOM scroll stays untouched.
 */
export function LatticeCanvas() {
  const [dpr, setDpr] = useState<[number, number]>([1, 1.5]);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const small = window.matchMedia("(max-width: 768px)").matches;
    setMobile(small);
    setDpr(small ? [1, 1] : [1, 1.75]);
    const onPointer = (e: PointerEvent) => {
      lattice.pointerX = (e.clientX / window.innerWidth) * 2 - 1;
      lattice.pointerY = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onPointer, { passive: true });
    return () => window.removeEventListener("pointermove", onPointer);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
      style={{ cursor: lattice.dragging ? "grabbing" : undefined }}
      data-testid="lattice-canvas"
    >
      <Canvas
        dpr={dpr}
        camera={{ position: [0, 0, 11], fov: 40 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <Suspense fallback={null}>
          <Lattice count={mobile ? 70 : undefined} />
        </Suspense>
      </Canvas>
    </div>
  );
}

/** Re-export for layout components that report scroll position to the scene. */
export { setLatticeSection };
export type { LatticeSection };
