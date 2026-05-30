import type { CSSProperties, ReactNode } from "react";

// Image placeholder matching the mockup's `.ph` block. Real photography
// / illustration is dropped in later ("後ほど実写・イラストを差し込みます").
export function Placeholder({
  tag,
  children,
  style,
  ariaLabel,
}: {
  tag?: string;
  children?: ReactNode;
  style?: CSSProperties;
  ariaLabel?: string;
}) {
  return (
    <div className="ph" style={style} aria-label={ariaLabel}>
      {tag && <span className="ph-tag">{tag}</span>}
      {children && <span className="ph-c">{children}</span>}
    </div>
  );
}
