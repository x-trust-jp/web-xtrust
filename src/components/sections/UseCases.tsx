"use client";

import { useState } from "react";
import type { UseCasesSection } from "@/content/types";
import { Eyebrow } from "@/components/Eyebrow";

// 08 — Use Cases (light, tabbed). Client component for tab switching.
// Receives data as a prop so the YAML stays read server-side.
export function UseCases({ data }: { data: UseCasesSection }) {
  const [active, setActive] = useState(0);
  const items = data.items;

  return (
    <section className="sec light usecases" id="sec-use_cases" data-screen-label="08 Use Cases">
      <Eyebrow num="08" label="Use Cases" ja="5つの活用シーン" />
      <div className="top-row">
        <h2 className="h-jp">{data.headline}</h2>
      </div>

      <div className="uc-wrap">
        <div className="uc-nav" role="tablist" aria-label="活用シーン">
          {items.map((it, i) => (
            <button
              key={it.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={i === active ? "active" : undefined}
              onClick={() => setActive(i)}
            >
              <span className="ix">{`0${i + 1}`}</span>
              <span className="tl">{it.title}</span>
            </button>
          ))}
        </div>

        {items.map((it, i) => (
          <div
            key={it.id}
            role="tabpanel"
            className={`uc-panel${i === active ? " active" : ""}`}
            hidden={i !== active}
          >
            <span className="uc-eb">{`Use Case 0${i + 1}`}</span>
            <h3>{it.title}</h3>
            <p>{it.body}</p>
            <div className="ph" aria-hidden="true" style={{ minHeight: 140 }}>
              <span className="ph-tag">IMAGE · 16:6</span>
              <div className="ph-c">
                before / after の小図解（後ほど差し込み）
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
