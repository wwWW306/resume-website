import Section from "./Section";
import SectionTitle from "./SectionTitle";
import FadeInSection from "./FadeInSection";
import AssetImg from "./AssetImg";
import { resumeData } from "@/data/resume";

export default function About() {
  const { basics } = resumeData;

  return (
    <Section id="about" num="02">
      <FadeInSection>
        <SectionTitle num="02">About</SectionTitle>
      </FadeInSection>

      <div className="grid md:grid-cols-[3fr_2fr] gap-12 md:gap-20 items-start">
        {/* 左侧文字 */}
        <div>
          <FadeInSection delay={100}>
            <p className="drop-cap text-base leading-relaxed text-text-p2 mb-6">
              {basics.summary}
            </p>
          </FadeInSection>

          <FadeInSection delay={200}>
            <p className="text-base leading-relaxed text-text-p3 mb-8">
              在校期间积极参与动画创作与竞赛。获即梦创作者大赛优秀奖、大学生心理大赛市级奖项、中国好创意大赛学院级奖项。对三维动画、AI 创作与前端开发交叉领域有浓厚兴趣。
            </p>
          </FadeInSection>

          <FadeInSection delay={300}>
            <blockquote className="pull-quote max-w-md">
              好的代码和好的设计一样——都是关于如何组织复杂性。
            </blockquote>
          </FadeInSection>

          <FadeInSection delay={400}>
            <div className="flex gap-16 mt-10">
              {[
                { n: resumeData.projects.length, l: "Projects" },
                { n: resumeData.experience.length, l: "Experience" },
                { n: resumeData.skills.reduce((s, g) => s + g.items.length, 0), l: "Skills" },
              ].map(({ n, l }) => (
                <div key={l}>
                  <p
                    className="font-display text-4xl sm:text-5xl font-extrabold leading-none"
                    style={{
                      background: "linear-gradient(160deg, #391214, #52423D)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {n}
                  </p>
                  <p className="font-mono text-[0.6rem] tracking-[0.25em] text-text-p4 uppercase mt-2">
                    {l}
                  </p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>

        {/* 右侧 — 照片 + 装饰 */}
        <FadeInSection delay={150}>
          <div className="relative">
            {/* 照片卡片 */}
            <div
              className="aspect-[3/4] rounded-sm overflow-hidden relative"
              style={{
                background: "linear-gradient(160deg, #EBE5DF 0%, #F5F3F1 100%)",
                border: "1px solid rgba(22,15,12,0.06)",
                boxShadow:
                  "0 1px 2px rgba(22,15,12,0.03), 0 4px 8px rgba(22,15,12,0.03), 0 12px 28px rgba(22,15,12,0.06)",
              }}
            >
              <AssetImg
                src="/photo-warm.jpg"
                alt={basics.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* 装饰：菱形 */}
            <div className="absolute -top-3 -left-3">
              <span className="decorative-diamond" />
            </div>

            {/* 装饰：圆环 */}
            <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full border border-accent/10 pointer-events-none" />

            {/* 装饰：竖排标签 */}
            <div className="absolute -right-6 top-0">
              <span className="vertical-label text-[0.6rem]">ABOUT ME</span>
            </div>
          </div>
        </FadeInSection>
      </div>
    </Section>
  );
}
