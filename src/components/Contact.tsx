"use client";

import Section from "./Section";
import SectionTitle from "./SectionTitle";
import FadeInSection from "./FadeInSection";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";
import { resumeData } from "@/data/resume";

const iconMap: Record<string, React.ReactNode> = {
  github: <GithubIcon size={16} />,
  linkedin: <LinkedinIcon size={16} />,
  mail: <MailIcon size={16} />,
};

export default function Contact() {
  const { basics } = resumeData;

  return (
    <Section id="contact" alt num="07">
      <FadeInSection>
        <SectionTitle num="07">Contact</SectionTitle>
      </FadeInSection>

      <FadeInSection delay={100}>
        <div className="max-w-lg">
          <p className="text-base text-text-p3 leading-relaxed mb-10">
            如果你对我的项目感兴趣，或者想聊聊技术——欢迎随时联系。
          </p>

          {/* 联系方式 — 编辑排版风格 */}
          <div className="space-y-5">
            {basics.profiles.map((profile) => (
              <a
                key={profile.network}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-3 border-b border-border transition-all duration-200 hover:border-accent/20"
              >
                <span className="text-text-p4 group-hover:text-accent transition-colors duration-200">
                  {iconMap[profile.icon]}
                </span>
                <span className="font-display text-lg font-semibold text-text-p2 group-hover:text-accent transition-colors duration-200">
                  {profile.network}
                </span>
                <span className="flex-1" />
                <span className="text-xs text-text-p4 font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  →
                </span>
              </a>
            ))}
          </div>

          {/* 装饰 */}
          <div className="flex items-center gap-3 mt-10">
            <span className="decorative-diamond" style={{ width: 5, height: 5 }} />
            <p className="font-mono text-[0.65rem] text-text-p4 tracking-wider">{basics.email}</p>
          </div>
        </div>
      </FadeInSection>
    </Section>
  );
}
