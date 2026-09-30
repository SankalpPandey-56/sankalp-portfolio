"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { lattice, LATTICE_STATES } from "./latticeStore";

const COUNT = 140;

type Piece = {
  pos: THREE.Vector3;
  rot: THREE.Euler;
  scale: number;
  axis: THREE.Vector3;
  speed: number;
  phase: number;
};

/**
 * The Lattice — a hand-placed constellation of fluted cubes.
 * Ordered when you arrive; it loosens as you move through the work,
 * and settles again when you reach out.
 */
export function Lattice({ count }: { count?: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const group = useRef<THREE.Group>(null);
  const scramble = useRef(LATTICE_STATES.home.scramble);
  const spread = useRef(LATTICE_STATES.home.spread);
  const speed = useRef(LATTICE_STATES.home.speed);
  const tilt = useRef({ x: 0, y: 0 });
  const spinVel = useRef({ x: 0.0, y: 0.12 });
  const dragSpin = useRef({ x: 0, y: 0 });

  const pieceCount = count ?? COUNT;

  // Piece count is fixed per mount (fewer on mobile). The seeded PRNG keeps
  // the structure identical across loads regardless of count.
  const pieces = useMemo<Piece[]>(() => {
    const rng = mulberry32(1907);
    const list: Piece[] = [];
    for (let i = 0; i < pieceCount; i++) {
      const pos = latticePosition(rng, i);
      const rot = new THREE.Euler(
        rng() * Math.PI * 2,
        rng() * Math.PI * 2,
        rng() * Math.PI * 2
      );
      const scale = 0.55 + rng() * 0.9;
      const axis = new THREE.Vector3(rng() - 0.5, rng() - 0.5, rng() - 0.5).normalize();
      const speed = 0.2 + rng() * 0.8;
      list.push({ pos, rot, scale, axis, speed, phase: rng() * Math.PI * 2 });
    }
    return list;
  }, [pieceCount]);

  useFrame((state, delta) => {
    const m = mesh.current;
    const g = group.current;
    if (!m || !g) return;

    const target = LATTICE_STATES[lattice.section] ?? LATTICE_STATES.home;
    const d = Math.min(delta, 0.05);

    // Ease all state toward the current section's character.
    scramble.current = THREE.MathUtils.damp(scramble.current, target.scramble, 2.2, d);
    spread.current = THREE.MathUtils.damp(spread.current, target.spread, 2.2, d);
    speed.current = THREE.MathUtils.damp(speed.current, target.speed, 2.2, d);
    tilt.current.x = THREE.MathUtils.damp(tilt.current.x, target.tiltX, 2.2, d);
    tilt.current.y = THREE.MathUtils.damp(tilt.current.y, target.tiltY, 2.2, d);

    // Drag-to-spin: velocity from accumulated pointer deltas.
    if (lattice.dragDX !== 0 || lattice.dragDY !== 0) {
      dragSpin.current.y += lattice.dragDX * 0.004;
      dragSpin.current.x += lattice.dragDY * 0.002;
      spinVel.current.y = lattice.dragDX * 0.14;
      spinVel.current.x = lattice.dragDY * 0.07;
      lattice.dragDX = 0;
      lattice.dragDY = 0;
    } else if (!lattice.dragging) {
      // No drag: momentum decays back toward the idle rotation.
      spinVel.current.x = THREE.MathUtils.damp(spinVel.current.x, 0, 1.6, d);
      spinVel.current.y = THREE.MathUtils.damp(spinVel.current.y, 0, 1.6, d);
      dragSpin.current.x = THREE.MathUtils.damp(dragSpin.current.x, 0, 0.55, d);
      dragSpin.current.y = THREE.MathUtils.damp(dragSpin.current.y, 0, 0.55, d);
    }

    // Pointer parallax on the whole group (subtle).
    const px = lattice.pointerX;
    const py = lattice.pointerY;
    g.rotation.x = THREE.MathUtils.damp(
      g.rotation.x,
      tilt.current.x + py * 0.06 + dragSpin.current.x,
      3,
      d
    );
    g.rotation.y = THREE.MathUtils.damp(
      g.rotation.y,
      tilt.current.y + px * 0.1 + dragSpin.current.y,
      3,
      d
    );
    g.rotation.z = THREE.MathUtils.damp(g.rotation.z, 0, 3, d);

    const t = state.clock.elapsedTime;
    const s = scramble.current;
    const sp = spread.current;

    const dummy = new THREE.Object3D();
    for (let i = 0; i < pieceCount; i++) {
      const p = pieces[i];
      // Base lattice position + live scramble offset per piece.
      const wob = Math.sin(t * p.speed + p.phase) * 0.16;
      dummy.position.set(
        p.pos.x * sp + Math.sin(p.phase * 3.1 + t * 0.3) * s * 1.6,
        p.pos.y * sp + wob * s + Math.cos(p.phase * 2.3 + t * 0.24) * s * 1.2,
        p.pos.z * sp + Math.sin(p.phase * 1.7 + t * 0.21) * s * 1.6
      );
      // Idle tumble per piece + group breath.
      const tumble = lattice.reducedMotion ? 0 : t * 0.14 * p.speed;
      dummy.rotation.set(
        p.rot.x + tumble,
        p.rot.y + tumble * 1.3,
        p.rot.z + tumble * 0.6
      );
      const breathe = lattice.reducedMotion ? 1 : 1 + Math.sin(t * 0.8 + p.phase) * 0.03;
      dummy.scale.setScalar(p.scale * breathe);
      dummy.updateMatrix();
      m.setMatrixAt(i, dummy.matrix);
    }
    m.instanceMatrix.needsUpdate = true;
    void pieces.length;
  });

  return (
    <group ref={group}>
      <instancedMesh ref={mesh} args={[undefined, undefined, pieceCount]} frustumCulled={false}>
        <boxGeometry args={[0.24, 0.36, 0.24]} />
        <meshStandardMaterial
          color="#d8d4c8"
          roughness={0.42}
          metalness={0.22}
        />
      </instancedMesh>
      {/* Soft key + rim lighting, warm so it sits in the palette */}
      <ambientLight intensity={0.55} />
      <directionalLight position={[6, 8, 4]} intensity={1.35} color="#fff6ea" />
      <directionalLight position={[-6, -4, -6]} intensity={0.5} color="#e4572e" />
    </group>
  );
}

/**
 * Deterministic hand-tuned lattice: three interleaved shells around the
 * origin — a core, a mid shell and an outer halo — so the structure reads
 * as designed from every angle rather than as a random cloud.
 */
function latticePosition(rng: () => number, i: number): THREE.Vector3 {
  const shell = i % 3;
  if (shell === 0) {
    // core: tight 4x4x3 block, slightly jittered
    const x = (i / 3) % 4;
    const y = Math.floor(i / 12) % 3;
    const z = Math.floor(i / 36) % 4;
    return new THREE.Vector3(
      (x - 1.5) * 0.55 + (rng() - 0.5) * 0.12,
      (y - 1) * 0.6 + (rng() - 0.5) * 0.12,
      (z - 1.5) * 0.55 + (rng() - 0.5) * 0.12
    );
  }
  // shells: points on interleaved spherical bands
  const golden = Math.PI * (3 - Math.sqrt(5));
  const k = Math.floor(i / 3);
  const y = 1 - (2 * (k % 26)) / 25;
  const r = Math.sqrt(Math.max(0, 1 - y * y));
  const theta = golden * k + (shell === 1 ? 0 : 0.6);
  const radius = shell === 1 ? 2.6 : 4.1;
  return new THREE.Vector3(
    Math.cos(theta) * r * radius,
    y * radius * 0.82,
    Math.sin(theta) * r * radius
  );
}

/** Small deterministic PRNG so the structure is identical every load. */
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
