"use client";

import { useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** 最大倾斜角度 (deg)，默认 4 */
  maxTilt?: number;
  /** 是否也在 hover 时微升 */
  lift?: boolean;
}

export default function TiltCard({ children, className = "", style, maxTilt = 4, lift = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * maxTilt}deg) rotateX(${-y * maxTilt}deg)${lift ? " translateY(-2px)" : ""}`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0px)";
  };

  return (
    <div
      ref={ref}
      className={`tilt-card transition-[transform] duration-150 ease-out ${className}`}
      style={{ willChange: "transform", ...style }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}
