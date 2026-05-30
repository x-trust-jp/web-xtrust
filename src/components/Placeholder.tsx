// Image placeholder matching the mockup's `.ph` block. Real photography
// / illustration is dropped in later (content.yaml visual_hint copy:
// "後ほど実写・イラストを差し込みます").
export function Placeholder({
  tag,
  children,
  className,
  minHeight,
}: {
  tag?: string;
  children?: React.ReactNode;
  className?: string;
  minHeight?: number;
}) {
  return (
    <div
      className={`ph${className ? ` ${className}` : ""}`}
      style={minHeight ? { minHeight } : undefined}
    >
      {tag && <span className="ph-tag">{tag}</span>}
      {children && <div className="ph-c">{children}</div>}
    </div>
  );
}
