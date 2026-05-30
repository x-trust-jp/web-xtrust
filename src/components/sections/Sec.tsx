import { Eyebrow } from "@/components/Eyebrow";

// Generic section shell: `.sec light|dark` + an optional bespoke class
// (e.g. "problem-1") that the mockup CSS hangs section-specific layout on.
export function Sec({
  id,
  tone,
  variant,
  label,
  children,
}: {
  id: string;
  tone: "light" | "dark";
  variant?: string;
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`sec ${tone}${variant ? ` ${variant}` : ""}`}
      id={`sec-${id}`}
      data-screen-label={label}
    >
      {children}
    </section>
  );
}

// Eyebrow + two-column headline/lead row used by most sections.
export function SectionHead({
  num,
  eyebrowLabel,
  ja,
  headline,
  lead,
}: {
  num: string;
  eyebrowLabel: string;
  ja?: string;
  headline: string;
  lead?: string;
}) {
  return (
    <>
      <Eyebrow num={num} label={eyebrowLabel} ja={ja} />
      <div className="top-row">
        <h2 className="h-jp">{headline}</h2>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </>
  );
}
