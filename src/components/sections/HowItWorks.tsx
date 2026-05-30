import { howItWorks } from "@/content/content";
import { Eyebrow } from "@/components/Eyebrow";
import { Sec } from "./Sec";

// 09 — How it Works (dark, 5-step flow).
export function HowItWorks() {
  return (
    <Sec id="how_it_works" tone="dark" variant="howit" label="09 How it Works">
      <Eyebrow num="09" label="How it Works" ja="導入から返却までのライフサイクル" />
      <div className="top-row">
        <h2 className="h-jp">{howItWorks.headline}</h2>
      </div>

      <div className="flow">
        {howItWorks.steps.map((step, i) => (
          <div className="step" key={step}>
            <span className="ix">{`Step 0${i + 1}`}</span>
            <h3>{step}</h3>
          </div>
        ))}
      </div>
    </Sec>
  );
}
