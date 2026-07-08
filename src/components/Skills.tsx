"use client";

import Section from "./Section";
import SectionTitle from "./SectionTitle";
import FadeInSection from "./FadeInSection";
import Magnetic from "./Magnetic";
import { resumeData } from "@/data/resume";

export default function Skills() {
  const { skills } = resumeData;
  if (skills.length === 0) return null;

  return (
    <Section id="skills" alt num="05">
      <FadeInSection>
        <SectionTitle num="05">Skills</SectionTitle>
      </FadeInSection>

      <div className="space-y-12">
        {skills.map((group, groupIdx) => (
          <FadeInSection key={group.category} delay={groupIdx * 80}>
            <div className="grid grid-cols-[auto_1fr] gap-6 md:gap-12 items-baseline">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-accent/20 whitespace-nowrap leading-none pt-1">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <Magnetic key={item} strength={4}>
                    <span
                      className="inline-block px-3.5 py-2 text-sm rounded-sm cursor-default"
                      style={{
                        background: "#F5F3F1",
                        border: "1px solid rgba(22,15,12,0.05)",
                        color: "#52423D",
                        fontSize: "0.8rem",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "rgba(57,18,20,0.2)";
                        e.currentTarget.style.color = "#391214";
                        e.currentTarget.style.background = "#EBE5DF";
                        e.currentTarget.style.boxShadow = "0 2px 8px rgba(22,15,12,0.04)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(22,15,12,0.05)";
                        e.currentTarget.style.color = "#52423D";
                        e.currentTarget.style.background = "#F5F3F1";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      {item}
                    </span>
                  </Magnetic>
                ))}
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>

      <FadeInSection delay={300}>
        <div className="flex justify-center mt-16">
          <span className="decorative-bracket" style={{ fontSize: "1.5rem" }}>&#123;  ...  &#125;</span>
        </div>
      </FadeInSection>
    </Section>
  );
}
