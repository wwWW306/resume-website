"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { resumeData } from "@/data/resume";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const ids = NAV_ITEMS.map((i) => i.href.replace("#", ""));
      for (const id of ids.reverse()) {
        const el = document.getElementById(id);
        if (el?.getBoundingClientRect().top && el.getBoundingClientRect().top < 140) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-bg/92 backdrop-blur-xl border-b border-border shadow-[0_1px_4px_rgba(22,15,12,0.02)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        {/* 左侧：小字 + 菱形 */}
        <div className="flex items-center gap-3">
          <span className="decorative-diamond" style={{ width: 6, height: 6 }} />
          <Link
            href="/"
            className="font-mono text-xs tracking-[0.25em] text-text-p3 hover:text-accent transition-colors uppercase"
          >
            {resumeData.basics.name}
          </Link>
        </div>

        {/* 右侧：导航 */}
        <div className="hidden sm:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`relative text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-200 py-1 ${
                  isActive ? "text-accent" : "text-text-p3 hover:text-text-p2"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
