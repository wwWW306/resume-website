import { resumeData } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        {/* 装饰线 + 菱形 */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-border" />
          <span className="decorative-diamond" style={{ width: 4, height: 4 }} />
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[0.65rem] text-text-p4 tracking-wider">
            &copy; {new Date().getFullYear()} {resumeData.basics.name}
          </p>
          <p className="font-mono text-[0.65rem] text-text-p4 tracking-wider">
            Designed & Built with care
          </p>
        </div>
      </div>
    </footer>
  );
}
