import { problem3 } from "@/content/content";
import { Eyebrow } from "@/components/Eyebrow";
import { Sec } from "./Sec";

const yearOf = (title: string) => title.match(/(20\d{2})/)?.[1] ?? "";

// 04 — Problem 3 (light, fact cards).
export function Problem3() {
  const cards = problem3.cards ?? [];
  return (
    <Sec id="problem_3" tone="light" variant="problem-3" label="04 Problem 3">
      <Eyebrow num="04" label="Problem 03" ja="AIが最強の攻撃者になる時代" />
      <div className="top-row">
        <h2 className="h-jp">{problem3.headline}</h2>
        {problem3.body && <p className="lead">{problem3.body}</p>}
      </div>

      <div className="fact-grid">
        {cards.map((c, i) => (
          <div className="fact" key={c.title}>
            <span className="idx">{`Fact 0${i + 1}`}</span>
            <span className="yr">{yearOf(c.title)}</span>
            <h3>{c.title}</h3>
            <p>{c.body}</p>
          </div>
        ))}
      </div>

      {problem3.closing && (
        <div className="closing">
          <p className="ph">{problem3.closing}</p>
          <span className="meta">AI Offensive Capability</span>
        </div>
      )}
    </Sec>
  );
}
