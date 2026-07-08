interface Props {
  children: React.ReactNode;
  id: string;
  className?: string;
  alt?: boolean;
  /** 板块序号，用于装饰大数字 */
  num?: string;
}

export default function Section({ children, id, className = "", alt = false, num }: Props) {
  return (
    <section
      id={id}
      className={`relative py-32 md:py-40 px-4 sm:px-8 ${
        alt ? "bg-bg-alt/30" : ""
      } ${className}`}
    >
      {/* 顶部过渡线 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />

      {/* 装饰：右侧大数字 */}
      {num && (
        <div
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 section-number hidden lg:block"
          style={{ fontSize: "clamp(6rem, 8vw, 9rem)" }}
        >
          {num}
        </div>
      )}

      <div className="max-w-5xl mx-auto relative">{children}</div>
    </section>
  );
}
