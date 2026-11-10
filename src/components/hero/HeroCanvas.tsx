"use client";

import React, { useEffect, useRef } from "react";

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    const mouse = { x: -1000, y: -1000, radius: 140 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Create an organized lattice grid of geometric nodes
    const cols = Math.floor(width / 44);
    const rows = Math.floor(height / 44);
    interface Node {
      originX: number;
      originY: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
    }

    const nodes: Node[] = [];
    const spacingX = width / cols;
    const spacingY = height / rows;

    for (let c = 1; c < cols; c++) {
      for (let r = 1; r < rows; r++) {
        const x = c * spacingX;
        const y = r * spacingY;
        nodes.push({
          originX: x,
          originY: y,
          x,
          y,
          vx: 0,
          vy: 0,
        });
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Check current theme by inspecting documentElement
      const isDark = document.documentElement.classList.contains("dark");
      const dotColor = isDark ? "rgba(255, 255, 255, 0.16)" : "rgba(0, 0, 0, 0.12)";
      const activeDotColor = isDark ? "rgba(255, 255, 255, 0.85)" : "rgba(0, 0, 0, 0.85)";
      const lineColor = isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.04)";

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Interaction with mouse
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 18;
          const angle = Math.atan2(dy, dx);
          node.vx -= Math.cos(angle) * force * 0.15;
          node.vy -= Math.sin(angle) * force * 0.15;
        }

        // Return to home position spring physics
        const homeDx = node.originX - node.x;
        const homeDy = node.originY - node.y;
        node.vx += homeDx * 0.04;
        node.vy += homeDy * 0.04;

        // Friction damping
        node.vx *= 0.86;
        node.vy *= 0.86;

        node.x += node.vx;
        node.y += node.vy;

        // Render point
        const displacement = Math.hypot(node.x - node.originX, node.y - node.originY);
        ctx.fillStyle = displacement > 2 ? activeDotColor : dotColor;
        ctx.beginPath();
        ctx.arc(node.x, node.y, displacement > 3 ? 1.8 : 1.1, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby displaced points with delicate filaments
        if (displacement > 3) {
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(node.originX, node.originY);
          ctx.lineTo(node.x, node.y);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none -z-10"
    />
  );
}
