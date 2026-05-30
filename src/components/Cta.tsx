import type { CtaAction } from "@/content/types";
import { ctaHref, ctaTarget } from "@/content/links";

const Arrow = () => (
  <svg className="arr" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function Cta({
  label,
  action,
  variant = "primary",
}: {
  label: string;
  action: CtaAction;
  variant?: "primary" | "ghost";
}) {
  const target = ctaTarget(action);
  return (
    <a
      className={`btn btn-${variant}`}
      href={ctaHref[action]}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {label}
      {variant === "primary" && <Arrow />}
    </a>
  );
}
