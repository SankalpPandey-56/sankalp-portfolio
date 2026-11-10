"use client";

import React, { useEffect, useRef } from "react";

interface SymbioteEventDetail {
  originX: number;
  originY: number;
  targetTheme: "light" | "dark";
  onCovered: () => void;
}

interface Tendril {
  angle: number;
  speed: number;
  length: number;
  maxLength: number;
  wiggleFreq: number;
  wiggleAmp: number;
  thickness: number;
  branches: {
    relativeStart: number;
    angleOffset: number;
    length: number;
    maxLength: number;
  }[];
}

interface Droplet {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  maxRadius: number;
}

export function SymbioteTransition() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isRunningRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const startSymbiote = (e: Event) => {
      const customEvent = e as CustomEvent<SymbioteEventDetail>;
      const { originX, originY, targetTheme, onCovered } = customEvent.detail;

      if (isRunningRef.current) return;
      isRunningRef.current = true;
      window.dispatchEvent(new Event("sp:symbiote-start"));

      const width = canvas.width;
      const height = canvas.height;

      // Color based on target theme:
      // When going to dark, the symbiote is black.
      // When going to light, the symbiote is bright ivory white.
      const fluidColor = targetTheme === "dark" ? "#0a0a0a" : "#fafafa";
      const tendrilStroke = targetTheme === "dark" ? "#000000" : "#ffffff";

      // Maximum distance from origin to any screen corner
      const maxDistance = Math.hypot(
        Math.max(originX, width - originX),
        Math.max(originY, height - originY)
      ) * 1.35;

      // Generate 26 directional tendrils with fractal branches
      const tendrils: Tendril[] = [];
      const numTendrils = 28;
      for (let i = 0; i < numTendrils; i++) {
        const baseAngle = (i / numTendrils) * Math.PI * 2 + (Math.random() - 0.5) * 0.2;
        const branchCount = Math.floor(Math.random() * 3) + 1;
        const branches = [];
        for (let b = 0; b < branchCount; b++) {
          branches.push({
            relativeStart: 0.3 + Math.random() * 0.4,
            angleOffset: (Math.random() - 0.5) * 0.9,
            length: 0,
            maxLength: (0.4 + Math.random() * 0.5) * maxDistance,
          });
        }

        tendrils.push({
          angle: baseAngle,
          speed: 1.2 + Math.random() * 1.6,
          length: 0,
          maxLength: maxDistance * (1.05 + Math.random() * 0.3),
          wiggleFreq: 3 + Math.random() * 5,
          wiggleAmp: 25 + Math.random() * 35,
          thickness: 16 + Math.random() * 24,
          branches,
        });
      }

      // Generate autonomous fluid scouts / droplets
      const droplets: Droplet[] = [];
      for (let i = 0; i < 40; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 4 + Math.random() * 10;
        droplets.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 2,
          maxRadius: 18 + Math.random() * 24,
        });
      }

      let startTime: number | null = null;
      const expandDuration = 680; // ms to complete 100% coverage
      const holdDuration = 100; // ms held at full black/white
      const retractDuration = 620; // ms to dissolve/retract
      let themeSwitched = false;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;

        ctx.clearRect(0, 0, width, height);

        if (elapsed < expandDuration) {
          // --- PHASE 1: SPREAD & TENDRILLIC CONSUMPTION ---
          const progress = Math.min(1, elapsed / expandDuration);
          const easeProgress = Math.pow(progress, 1.8); // Accelerates outward like a predatory organism

          // 1. Draw organic spreading tendrils
          ctx.strokeStyle = tendrilStroke;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";

          tendrils.forEach((tendril) => {
            tendril.length = tendril.maxLength * easeProgress;
            const steps = 30;
            const stepLen = tendril.length / steps;

            ctx.beginPath();
            ctx.lineWidth = tendril.thickness * (1 - easeProgress * 0.2);

            let currX = originX;
            let currY = originY;
            ctx.moveTo(currX, currY);

            for (let s = 1; s <= steps; s++) {
              const currentDist = s * stepLen;
              const wiggle =
                Math.sin(s * 0.3 + elapsed * 0.015 * tendril.speed) *
                tendril.wiggleAmp *
                (currentDist / tendril.maxLength);

              const normalAngle = tendril.angle + Math.PI / 2;
              const posX =
                originX +
                Math.cos(tendril.angle) * currentDist +
                Math.cos(normalAngle) * wiggle;
              const posY =
                originY +
                Math.sin(tendril.angle) * currentDist +
                Math.sin(normalAngle) * wiggle;

              ctx.lineTo(posX, posY);
              currX = posX;
              currY = posY;

              // Check branches
              tendril.branches.forEach((branch) => {
                const branchTriggerDist = tendril.maxLength * branch.relativeStart;
                if (currentDist >= branchTriggerDist && easeProgress > branch.relativeStart) {
                  const branchProgress =
                    (easeProgress - branch.relativeStart) / (1 - branch.relativeStart);
                  branch.length = branch.maxLength * branchProgress;

                  ctx.save();
                  ctx.lineWidth = tendril.thickness * 0.55;
                  ctx.beginPath();
                  ctx.moveTo(posX, posY);

                  const bAngle = tendril.angle + branch.angleOffset;
                  const bEndX = posX + Math.cos(bAngle) * branch.length;
                  const bEndY = posY + Math.sin(bAngle) * branch.length;
                  ctx.lineTo(bEndX, bEndY);
                  ctx.stroke();

                  // Droplet at branch tip
                  ctx.fillStyle = fluidColor;
                  ctx.beginPath();
                  ctx.arc(bEndX, bEndY, 12 * branchProgress, 0, Math.PI * 2);
                  ctx.fill();
                  ctx.restore();
                }
              });
            }
            ctx.stroke();

            // Bulbous amoeba head on tendril
            ctx.fillStyle = fluidColor;
            ctx.beginPath();
            ctx.arc(currX, currY, (tendril.thickness * 0.75) * (0.8 + 0.3 * Math.sin(elapsed * 0.02)), 0, Math.PI * 2);
            ctx.fill();
          });

          // 2. Autonomous droplets flying outward
          ctx.fillStyle = fluidColor;
          droplets.forEach((d) => {
            d.x += d.vx * (1 + easeProgress * 1.5);
            d.y += d.vy * (1 + easeProgress * 1.5);
            d.radius = Math.min(d.maxRadius, d.radius + 0.5);

            ctx.beginPath();
            ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
            ctx.fill();
          });

          // 3. Central Amoebic Blob expanding organically
          const coreRadius = maxDistance * easeProgress;
          ctx.fillStyle = fluidColor;
          ctx.beginPath();
          const points = 72;
          for (let p = 0; p <= points; p++) {
            const angle = (p / points) * Math.PI * 2;
            const noise =
              Math.sin(angle * 5 + elapsed * 0.008) * 0.18 +
              Math.cos(angle * 8 - elapsed * 0.012) * 0.12 +
              Math.sin(angle * 13 + elapsed * 0.02) * 0.08;

            const r = Math.max(0, coreRadius * (1 + noise));
            const x = originX + Math.cos(angle) * r;
            const y = originY + Math.sin(angle) * r;

            if (p === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.fill();

          requestAnimationFrame(animate);
        } else if (elapsed < expandDuration + holdDuration) {
          // --- PHASE 2: 100% FULL OCCLUSION & CLEAN THEME SWAP ---
          // Draw solid rectangle covering every single pixel to eliminate any microscopic gap
          ctx.fillStyle = fluidColor;
          ctx.fillRect(0, 0, width, height);

          if (!themeSwitched) {
            themeSwitched = true;
            onCovered(); // Switches theme seamlessly behind total occlusion
          }

          requestAnimationFrame(animate);
        } else if (elapsed < expandDuration + holdDuration + retractDuration) {
          // --- PHASE 3: ORGANIC RETRACTION & CELLULAR DISSOLUTION ---
          const retractElapsed = elapsed - (expandDuration + holdDuration);
          const retractProgress = Math.min(1, retractElapsed / retractDuration);
          const dissolveAlpha = 1 - Math.pow(retractProgress, 1.4);

          // Render retracting symbiote with dissolving cellular opacity
          ctx.save();
          ctx.globalAlpha = Math.max(0, dissolveAlpha);
          ctx.fillStyle = fluidColor;

          // Expanding hole at origin, creating an iris dissolve with liquid boundaries
          const innerHoleRadius = maxDistance * Math.pow(retractProgress, 1.2);
          
          ctx.beginPath();
          ctx.rect(0, 0, width, height);

          // Cut out organic center hole
          ctx.moveTo(originX + innerHoleRadius, originY);
          const holePoints = 64;
          for (let p = 0; p <= holePoints; p++) {
            const angle = (p / holePoints) * Math.PI * 2;
            const noise =
              Math.sin(angle * 6 + retractElapsed * 0.01) * 0.16 +
              Math.cos(angle * 9 - retractElapsed * 0.015) * 0.12;
            const r = innerHoleRadius * (1 + noise);
            const x = originX + Math.cos(angle) * r;
            const y = originY + Math.sin(angle) * r;
            ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.fill("evenodd"); // Cuts out the center hole cleanly revealing the new theme!
          ctx.restore();

          requestAnimationFrame(animate);
        } else {
          // --- COMPLETED ---
          ctx.clearRect(0, 0, width, height);
          isRunningRef.current = false;
          window.dispatchEvent(new Event("sp:symbiote-complete"));
        }
      };

      requestAnimationFrame(animate);
    };

    window.addEventListener("sp:symbiote-trigger", startSymbiote as EventListener);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("sp:symbiote-trigger", startSymbiote as EventListener);
    };
  }, []);

  return (
    <>
      {/* SVG gooey & biological turbulence displacement filter */}
      <svg
        className="pointer-events-none fixed -top-full -left-full w-0 h-0"
        aria-hidden="true"
      >
        <defs>
          <filter id="symbiote-viscous" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 26 -9"
              result="goo"
            />
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.035"
              numOctaves="2"
              result="turbulence"
            />
            <feDisplacementMap
              in="goo"
              in2="turbulence"
              scale="14"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            <feComposite in="SourceGraphic" in2="displaced" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* The full-screen canvas running the fluid simulation */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[999999]"
        style={{
          filter: "url(#symbiote-viscous)",
        }}
      />
    </>
  );
}

