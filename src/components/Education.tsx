import Section from "./Section";
import SectionTitle from "./SectionTitle";
import FadeInSection from "./FadeInSection";
import { resumeData } from "@/data/resume";

export default function Education() {
  const { education } = resumeData;
  if (education.length === 0) return null;

  return (
    <Section id="education" alt={false}>
      <FadeInSection>
        <SectionTitle num="06">Education</SectionTitle>
      </FadeInSection>

      <div>
        {education.map((edu, idx) => (
          <FadeInSection key={idx} delay={idx * 80}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 py-8 border-b border-border last:border-0 group">
              <div className="flex items-baseline gap-4">
                {/* 装饰数字 */}
                <span className="font-display text-2xl text-accent/12 tabular-nums hidden sm:block">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-text-p1 text-lg">{edu.institution}</h3>
                  <p className="text-sm text-text-p3 mt-1">{edu.area} · {edu.studyType}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:ml-8">
                <span className="hidden sm:block w-8 h-px bg-accent/12" />
                <p className="font-mono text-xs text-accent/40 whitespace-nowrap tracking-wide">
                  {edu.startDate} — {edu.endDate}
                </p>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </Section>
  );
}
