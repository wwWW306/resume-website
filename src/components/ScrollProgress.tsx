"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[1px] z-[9997] pointer-events-none">
      <div
        className="h-full transition-[width] duration-150 ease-out"
        style={{
          width: `${progress * 100}%`,
          background: "linear-gradient(90deg, #391214, #52423D)",
        }}
      />
      {/* 进度线末端的小菱形 */}
      <div
        className="absolute top-1/2 -translate-y-1/2 transition-all duration-150 ease-out"
        style={{
          left: `${progress * 100}%`,
          width: "5px",
          height: "5px",
          background: "#391214",
          transform: `translate(-50%, -50%) rotate(45deg)`,
          opacity: progress > 0.01 ? 0.6 : 0,
        }}
      />
    </div>
  );
}
