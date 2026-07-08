"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { resumeData } from "@/data/resume";
import Footer from "@/components/Footer";
import { GithubIcon, ExternalLinkIcon } from "@/components/Icons";

interface Props {
  slug: string;
}

export default function ProjectDetailClient({ slug }: Props) {
  const project = resumeData.projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="text-center">
          <h1 className="font-display text-3xl text-text-p1 mb-4">项目未找到</h1>
          <Link href="/" className="text-accent hover:text-accent-hover transition-colors">返回首页</Link>
        </div>
      </div>
    );
  }

  const hasGallery = project.images && project.images.length > 0;
  const hasVideo = !!project.video;

  return (
    <div className="min-h-screen bg-bg relative">
      <div
        className="absolute top-0 left-0 right-0 h-64 -z-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(57,18,20,0.03) 0%, transparent 70%)" }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-8 py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-accent/50 hover:text-accent transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          返回首页
        </Link>

        {/* 图片画廊 */}
        {hasGallery && <ImageGallery images={project.images!} name={project.name} />}

        {/* 单图 */}
        {!hasGallery && !hasVideo && project.image && (
          <MediaBox>
            <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
          </MediaBox>
        )}

        {/* 视频 */}
        {hasVideo && (
          <div className="relative mb-6">
            <MediaBox>
              <video
                src={project.video}
                controls
                className="w-full h-full object-cover"
                poster={project.image}
                preload="metadata"
              />
            </MediaBox>
            <div
              className="absolute -bottom-4 -right-4 w-36 h-36 rounded-xl -z-10 opacity-8"
              style={{ background: "linear-gradient(135deg, #391214, transparent)" }}
            />
          </div>
        )}

        {/* 标题 */}
        <h1 className="font-display text-3xl font-bold text-text-p1 mb-5">{project.name}</h1>

        {/* 标签 */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-3 py-1.5 rounded-md"
              style={{
                background: "rgba(57,18,20,0.05)",
                color: "#391214",
                border: "1px solid rgba(57,18,20,0.08)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 详情 */}
        <div className="mb-10">
          <p className="text-base text-text-p2 leading-relaxed whitespace-pre-line">{project.detail}</p>
        </div>

        {/* 按钮 */}
        <div className="flex items-center gap-4 pt-6 border-t border-border">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #391214, #4E1B1F)",
                boxShadow: "0 2px 10px rgba(57,18,20,0.15)",
              }}
            >
              <ExternalLinkIcon /> Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "#F5F3F1",
                border: "1px solid rgba(22,15,12,0.08)",
                color: "#52423D",
                boxShadow: "0 1px 3px rgba(22,15,12,0.03)",
              }}
            >
              <GithubIcon /> 源代码
            </a>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

/* ====== 子组件 ====== */

function MediaBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="aspect-video rounded-xl overflow-hidden card-grain relative"
      style={{
        background: "linear-gradient(150deg, #F5F3F1 0%, #EBE5DF 100%)",
        border: "1px solid rgba(22,15,12,0.06)",
        boxShadow: "0 1px 2px rgba(22,15,12,0.03), 0 4px 8px rgba(22,15,12,0.03), 0 12px 28px rgba(22,15,12,0.06)",
      }}
    >
      {children}
    </div>
  );
}

function ImageGallery({ images, name }: { images: string[]; name: string }) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative mb-6">
      <MediaBox>
        <img
          src={images[idx]}
          alt={`${name} ${idx + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </MediaBox>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              background: "rgba(245,243,241,0.9)",
              border: "1px solid rgba(22,15,12,0.08)",
              boxShadow: "0 2px 8px rgba(22,15,12,0.06)",
            }}
          >
            <ChevronLeft size={18} color="#391214" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              background: "rgba(245,243,241,0.9)",
              border: "1px solid rgba(22,15,12,0.08)",
              boxShadow: "0 2px 8px rgba(22,15,12,0.06)",
            }}
          >
            <ChevronRight size={18} color="#391214" />
          </button>

          {/* 圆点指示器 */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className="w-2 h-2 rounded-full transition-all duration-200"
                style={{
                  background: i === idx ? "#391214" : "rgba(22,15,12,0.15)",
                }}
              />
            ))}
          </div>
        </>
      )}

      <p className="absolute top-3 right-3 font-mono text-xs px-2 py-1 rounded"
        style={{ background: "rgba(245,243,241,0.9)", color: "#887D77" }}>
        {idx + 1} / {images.length}
      </p>

      <div
        className="absolute -bottom-4 -right-4 w-36 h-36 rounded-xl -z-10 opacity-8"
        style={{ background: "linear-gradient(135deg, #391214, transparent)" }}
      />
    </div>
  );
}
