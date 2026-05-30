import { faq } from "@/content/content";
import { Eyebrow } from "@/components/Eyebrow";
import { Sec } from "./Sec";

// 12 — FAQ (light, native <details> accordion).
export function Faq() {
  return (
    <Sec id="faq" tone="light" variant="faq" label="12 FAQ">
      <Eyebrow num="12" label="FAQ" ja="よくあるご質問" />
      <div className="top-row">
        <h2 className="h-jp">よくあるご質問</h2>
      </div>

      <div className="qlist">
        {faq.items.map((item, i) => (
          <details key={item.q}>
            <summary>
              <span className="qix">{`Q0${i + 1}`}</span>
              <span style={{ flex: 1 }}>{item.q}</span>
              <span className="qmark" aria-hidden="true" />
            </summary>
            <div className="qbody">{item.a}</div>
          </details>
        ))}
      </div>
    </Sec>
  );
}
