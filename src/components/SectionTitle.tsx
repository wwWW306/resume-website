interface Props {
  children: React.ReactNode;
  /** 序号，如 "02" */
  num?: string;
}

export default function SectionTitle({ children, num }: Props) {
  return (
    <div className="mb-20">
      {/* 序号 + 标题行 */}
      <div className="flex items-baseline gap-4">
        {num && (
          <span className="font-display text-xl font-bold text-accent/35 tabular-nums">
            {num}
          </span>
        )}
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-p1 tracking-tight">
          {children}
        </h2>
        <span className="flex-1 h-px bg-border ml-4" />
      </div>
    </div>
  );
}
