"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;

    if (window.matchMedia("(pointer: coarse)").matches) {
      ring.style.display = "none";
      return;
    }

    let rafId: number;

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const onHover = (e: Event) => {
      const el = (e.target as HTMLElement).closest(
        "a, button, [role='button'], .tilt-card, .magnetic, .cursor-pointer"
      );
      if (el) {
        ring.style.width = "24px";
        ring.style.height = "24px";
        ring.style.borderColor = "rgba(57,18,20,0.5)";
        ring.style.backgroundColor = "rgba(57,18,20,0.06)";
      } else {
        ring.style.width = "36px";
        ring.style.height = "36px";
        ring.style.borderColor = "rgba(57,18,20,0.20)";
        ring.style.backgroundColor = "transparent";
      }
    };

    const animate = () => {
      // 更快跟随 — 0.25 系数减少延迟感
      pos.current.x += (target.current.x - pos.current.x) * 0.25;
      pos.current.y += (target.current.y - pos.current.y) * 0.25;

      const size = parseInt(ring.style.width) || 36;
      ring.style.transform = `translate3d(${pos.current.x - size / 2}px, ${pos.current.y - size / 2}px, 0)`;

      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onHover, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onHover);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={ringRef}
      className="fixed top-0 left-0 rounded-full pointer-events-none transition-[width,height,border-color,background-color] duration-150 ease-out"
      style={{
        width: "36px",
        height: "36px",
        border: "1.5px solid rgba(57,18,20,0.20)",
        willChange: "transform",
        zIndex: 99999,
      }}
    />
  );
}
