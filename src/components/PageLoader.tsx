"use client";

import { useEffect, useState, useRef } from "react";

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<"loading" | "revealing" | "done">("loading");
  const curtainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("revealing"), 400);
    const t2 = setTimeout(() => setPhase("done"), 1200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <>
      {/* 开幕幕布 */}
      <div
        ref={curtainRef}
        className={`fixed inset-0 z-[9998] pointer-events-none transition-all duration-800 ${
          phase === "done" ? "opacity-0" : "opacity-100"
        }`}
        style={{
          background:
            phase === "loading"
              ? "#C0BAB3"
              : "transparent",
          transitionProperty: "opacity, background",
          transitionDuration: phase === "revealing" ? "0.8s" : "0.4s",
        }}
      >
        {/* 开幕线 — 从中心向两侧展开 */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700"
          style={{
            width: phase === "loading" ? "0px" : "60vw",
            maxWidth: "600px",
            height: "1px",
            background: "linear-gradient(90deg, transparent 0%, #391214 20%, #391214 80%, transparent 100%)",
            opacity: phase === "done" ? 0 : 1,
          }}
        />

        {/* 中心菱形 */}
        <div
          className="absolute top-1/2 left-1/2 transition-all duration-500"
          style={{
            transform: `translate(-50%, -50%) rotate(45deg) scale(${phase === "loading" ? 0 : phase === "revealing" ? 1 : 1.5})`,
            width: "12px",
            height: "12px",
            background: "#391214",
            opacity: phase === "done" ? 0 : phase === "loading" ? 0 : 0.4,
          }}
        />
      </div>

      {/* 内容 — loading 阶段隐藏 */}
      <div
        className={`transition-all duration-600 ${
          phase === "loading" ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}
