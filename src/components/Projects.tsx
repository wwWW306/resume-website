"use client";

import Link from "next/link";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import FadeInSection from "./FadeInSection";
import TiltCard from "./TiltCard";
import { GithubIcon, ExternalLinkIcon } from "./Icons";
import { resumeData } from "@/data/resume";

export default function Projects() {
  const { projects } = resumeData;
  if (projects.length === 0) return null;

  const [featured, ...rest] = projects;

  return (
    <Section id="projects" num="04">
      <FadeInSection>
        <SectionTitle num="04">Projects</SectionTitle>
      </FadeInSection>

      {/* Featured — 全宽 + 倾斜 */}
      {featured && (
        <FadeInSection delay={100}>
          <Link href={`/projects/${featured.slug}`} className="block mb-10 cursor-pointer">
            <TiltCard maxTilt={2} lift>
              <div
                className="group rounded-sm overflow-hidden"
                style={{
                  background: "linear-gradient(160deg, #F5F3F1 0%, #EBE5DF 100%)",
                  border: "1px solid rgba(22,15,12,0.06)",
                  boxShadow: "0 1px 2px rgba(22,15,12,0.03), 0 4px 6px rgba(22,15,12,0.03), 0 12px 28px rgba(22,15,12,0.07)",
                }}
              >
                <div className="grid md:grid-cols-[1fr_1fr]">
                  <div
                    className="aspect-video md:aspect-auto relative overflow-hidden"
                    style={{ background: "linear-gradient(150deg, #E0D9D2, #EBE5DF)" }}
                  >
                    {featured.image ? (
                      <img src={featured.image} alt={featured.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600" />
                    ) : (
                      <div className="w-full h-full min-h-[200px] flex items-center justify-center">
                        <span className="font-mono text-xs text-accent/12 tracking-[0.5em] uppercase">Featured</span>
                      </div>
                    )}
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <p className="font-mono text-[0.55rem] tracking-[0.3em] text-accent/40 uppercase mb-3">Featured Project</p>
                    <h3 className="font-display text-2xl font-bold text-text-p1 mb-3">{featured.name}</h3>
                    <p className="text-sm text-text-p3 leading-relaxed mb-4">{featured.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {featured.techStack.map((tech) => (
                        <span key={tech} className="font-mono text-[0.65rem] px-2.5 py-1 rounded-sm"
                          style={{ background: "rgba(57,18,20,0.04)", color: "#391214" }}
                        >{tech}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                      {featured.url && <span className="text-accent/50 flex items-center gap-1 cursor-pointer"><ExternalLinkIcon size={12} /> Demo</span>}
                      {featured.github && <span className="text-text-p3 flex items-center gap-1 cursor-pointer"><GithubIcon size={12} /> Code</span>}
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </Link>
        </FadeInSection>
      )}

      {/* 其余 — 2列网格 + 倾斜 */}
      <div className="grid sm:grid-cols-2 gap-5">
        {rest.map((project, idx) => (
          <FadeInSection key={project.slug} delay={idx * 100}>
            <Link href={`/projects/${project.slug}`} className="block cursor-pointer">
              <TiltCard maxTilt={4} lift>
                <div
                  className="group rounded-sm overflow-hidden"
                  style={{
                    background: "linear-gradient(160deg, #F5F3F1 0%, #EDEAE7 100%)",
                    border: "1px solid rgba(22,15,12,0.05)",
                    boxShadow: "0 1px 2px rgba(22,15,12,0.02), 0 3px 4px rgba(22,15,12,0.02), 0 8px 20px rgba(22,15,12,0.05)",
                  }}
                >
                  <div
                    className="aspect-[16/10] relative overflow-hidden"
                    style={{ background: "linear-gradient(150deg, #EBE5DF, #E0D9D2)" }}
                  >
                    {project.image ? (
                      <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="font-mono text-xs text-accent/10 tracking-widest">{project.name}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <span className="inline-block mb-3 decorative-diamond" style={{ width: 5, height: 5 }} />
                    <h3 className="font-semibold text-text-p1 text-sm mb-2">{project.name}</h3>
                    <p className="text-xs text-text-p3 leading-relaxed mb-3 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span key={tech} className="font-mono text-[0.6rem] px-2 py-0.5 rounded-sm"
                          style={{ background: "rgba(57,18,20,0.04)", color: "#391214" }}
                        >{tech}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 text-[0.65rem]">
                      {project.url && <span className="text-accent/45 flex items-center gap-1 cursor-pointer"><ExternalLinkIcon size={11} /> Demo</span>}
                      {project.github && <span className="text-text-p4 flex items-center gap-1 cursor-pointer"><GithubIcon size={11} /> Code</span>}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Link>
          </FadeInSection>
        ))}
      </div>
    </Section>
  );
}
