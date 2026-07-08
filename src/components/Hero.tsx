"use client";

import { useEffect, useRef, useState } from "react";
import { resumeData } from "@/data/resume";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";
import AssetImg from "./AssetImg";

const iconMap: Record<string, React.ReactNode> = {
  github: <GithubIcon size={18} />,
  linkedin: <LinkedinIcon size={18} />,
  mail: <MailIcon size={18} />,
};

export default function Hero() {
  const { basics } = resumeData;
  const [mounted, setMounted] = useState(false);
  const ring1Ref = useRef<HTMLDivElement>(null);
  const ring2Ref = useRef<HTMLDivElement>(null);
  const diamondRef = useRef<HTMLDivElement>(null);

  // 加载完成后触发文字交错动画
  useEffect(() => {
    setMounted(true);
  }, []);

  // 滚动视差 — 装饰元素以不同速度移动
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (ring1Ref.current) ring1Ref.current.style.transform = `translateY(${scrollY * 0.04}px)`;
      if (ring2Ref.current) ring2Ref.current.style.transform = `translateY(${scrollY * -0.03}px)`;
      if (diamondRef.current) diamondRef.current.style.transform = `translateY(${scrollY * 0.06}px) rotate(45deg)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 逐字延迟
  const nameChars = basics.name.split("");

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-4 sm:px-8 relative overflow-hidden"
    >
      {/* 超大背景数字 */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 section-number select-none"
        style={{ fontSize: "clamp(12rem, 25vw, 22rem)", color: "rgba(57,18,20,0.025)" }}
      >
        01
      </div>

      {/* 竖排标签 */}
      <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 hidden sm:block">
        <span className="vertical-label">INTRO</span>
      </div>

      {/* 装饰：圆环 — 带视差 */}
      <div ref={ring1Ref} className="absolute top-1/4 right-[15%] w-16 h-16 rounded-full border border-accent/8 pointer-events-none transition-transform duration-100 ease-linear" />
      <div ref={ring2Ref} className="absolute bottom-1/4 left-[10%] w-10 h-10 rounded-full border border-accent/6 pointer-events-none transition-transform duration-100 ease-linear" />

      {/* 装饰：菱形 — 带视差 */}
      <div ref={diamondRef} className="absolute top-[18%] left-[22%] pointer-events-none transition-transform duration-100 ease-linear">
        <span className="decorative-diamond" style={{ width: 7, height: 7, opacity: 0.2 }} />
      </div>

      {/* 顶部线条 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-accent/20 to-transparent" />

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-center">
          {/* 左侧文字 */}
          <div>
            {/* 加载后显示 */}
            <p
              className={`font-mono text-[0.65rem] tracking-[0.4em] text-accent/50 uppercase mb-8 transition-all duration-600 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              — Frontend Developer
            </p>

            {/* 姓名 — 逐字交错 */}
            <h1
              className="font-display font-extrabold leading-[0.9] mb-4"
              style={{
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                background: "linear-gradient(160deg, #391214 0%, #52423D 55%, #887D77 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {nameChars.map((char, i) => (
                <span
                  key={i}
                  className="inline-block transition-all duration-500"
                  style={{
                    transitionDelay: mounted ? `${200 + i * 60}ms` : "0ms",
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? "translateY(0)" : "translateY(16px)",
                    filter: mounted ? "blur(0px)" : "blur(4px)",
                  }}
                >
                  {char === " " ? " " : char}
                </span>
              ))}
            </h1>

            {/* 职位 */}
            <div
              className={`flex items-center gap-4 mb-8 transition-all duration-500 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: mounted ? `${200 + nameChars.length * 60 + 100}ms` : "0ms" }}
            >
              <div className="w-12 h-px bg-accent/25" />
              <p className="text-lg font-body text-text-p2 italic tracking-wide">{basics.label}</p>
            </div>

            {/* 简介 */}
            <p
              className={`text-base text-text-p3 max-w-sm leading-relaxed mb-10 font-body transition-all duration-500 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: mounted ? `${200 + nameChars.length * 60 + 200}ms` : "0ms" }}
            >
              {basics.summary}
            </p>

            {/* 社交 */}
            <div
              className={`flex items-center gap-5 transition-all duration-500 ${
                mounted ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: mounted ? `${200 + nameChars.length * 60 + 300}ms` : "0ms" }}
            >
              <span className="decorative-bracket">&#123;</span>
              {basics.profiles.map((profile) => (
                <a
                  key={profile.network}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-p3 hover:text-accent transition-colors duration-200 cursor-pointer"
                  title={profile.network}
                >
                  {iconMap[profile.icon] ?? profile.network}
                </a>
              ))}
              <span className="decorative-bracket">&#125;</span>
            </div>
          </div>

          {/* 右侧装饰 */}
          <div className="hidden md:flex flex-col items-center gap-8">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-accent/20 to-accent/20" />
            <span className="decorative-diamond" />
            <span className="decorative-diamond" style={{ width: 12, height: 12, opacity: 0.15 }} />
            <div className="w-px h-24 bg-gradient-to-b from-accent/20 via-accent/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
