"use client";

import Section from "./Section";
import SectionTitle from "./SectionTitle";
import FadeInSection from "./FadeInSection";
import { resumeData } from "@/data/resume";

export default function Experience() {
  const { experience } = resumeData;
  if (experience.length === 0) return null;

  return (
    <Section id="experience" alt num="03">
      <FadeInSection>
        <SectionTitle num="03">Experience</SectionTitle>
      </FadeInSection>

      <div className="relative">
        {/* 中心时间线 — 桌面端在中间 */}
        <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px"
          style={{
            background: "repeating-linear-gradient(to bottom, rgba(57,18,20,0.18) 0px, rgba(57,18,20,0.18) 2px, transparent 2px, transparent 8px)",
          }}
        />

        <div className="flex flex-col">
          {experience.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <FadeInSection key={idx} delay={idx * 150}>
                <div className={`relative md:w-1/2 ${isLeft ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"} mb-16 last:mb-0`}>
                  {/* 时间线节点 */}
                  <div className={`hidden md:block absolute top-6 ${isLeft ? "-right-[5px]" : "-left-[5px]"}`}>
                    <div
                      className={`w-[11px] h-[11px] rounded-full transition-all duration-300 ${
                        exp.current
                          ? "bg-accent border-2 border-accent shadow-[0_0_0_6px_rgba(57,18,20,0.06)]"
                          : "bg-bg-alt border-2 border-accent/25"
                      }`}
                    />
                  </div>

                  {/* 日期 — margin note 风格 */}
                  <p className="font-mono text-[0.7rem] tracking-[0.2em] text-accent/45 uppercase mb-2">
                    {exp.startDate} — {exp.endDate ?? "Present"}
                  </p>

                  {/* 卡片 */}
                  <div
                    className="p-6 rounded-sm transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: "linear-gradient(160deg, #F5F3F1 0%, #EDEAE7 100%)",
                      border: "1px solid transparent",
                      borderImage: exp.current
                        ? "linear-gradient(160deg, rgba(57,18,20,0.15) 0%, rgba(22,15,12,0.04) 100%) 1"
                        : "linear-gradient(160deg, rgba(22,15,12,0.05) 0%, rgba(22,15,12,0.02) 100%) 1",
                      boxShadow: exp.current
                        ? "0 1px 2px rgba(22,15,12,0.03), 0 4px 6px rgba(22,15,12,0.03), 0 10px 24px rgba(22,15,12,0.06)"
                        : "0 1px 2px rgba(22,15,12,0.02), 0 3px 4px rgba(22,15,12,0.02), 0 6px 16px rgba(22,15,12,0.04)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = "0 1px 3px rgba(22,15,12,0.04), 0 6px 12px rgba(22,15,12,0.04), 0 14px 32px rgba(22,15,12,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = exp.current
                        ? "0 1px 2px rgba(22,15,12,0.03), 0 4px 6px rgba(22,15,12,0.03), 0 10px 24px rgba(22,15,12,0.06)"
                        : "0 1px 2px rgba(22,15,12,0.02), 0 3px 4px rgba(22,15,12,0.02), 0 6px 16px rgba(22,15,12,0.04)";
                    }}
                  >
                    {/* 装饰角标 */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent/15" />

                    <h3 className="font-semibold text-text-p1 text-base mb-1.5">
                      {exp.position}
                    </h3>
                    <p className="text-sm text-accent/55 font-medium mb-3">{exp.company}</p>
                    <p className="text-sm text-text-p3 leading-relaxed mb-3">{exp.summary}</p>

                    {exp.highlights.length > 0 && (
                      <ul className="space-y-1.5">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="text-sm text-text-p3 pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-accent/30 before:text-xs">
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
