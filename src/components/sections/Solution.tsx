import { solution } from "@/content/content";
import { Eyebrow } from "@/components/Eyebrow";
import { Sec } from "./Sec";

// 05 — Solution (dark, before / after).
// Points restructure the section body (high-cost local LLM vs. XTRUST's
// lightweight device-rental model); no claims beyond content.yaml.
export function Solution() {
  return (
    <Sec id="solution" tone="dark" variant="solution" label="05 Solution">
      <Eyebrow num="05" label="Solution" ja="ゼロトラスト・スタンドアローン解" />
      <div className="top-row">
        <h2 className="h-jp">{solution.headline}</h2>
        <p className="lead">{solution.body}</p>
      </div>

      <div className="compare">
        <div className="col before">
          <div className="head">
            一般的なローカルLLM<span className="marker">Before</span>
          </div>
          <h3>高価なマシンと専門運用が前提</h3>
          <div className="mini">High-cost / Specialist Ops</div>
          <ul className="points">
            <li>超ハイスペックGPUマシンを一社に一台</li>
            <li>専門的な運用が必要</li>
            <li>高い維持費</li>
          </ul>
        </div>

        <div className="col after">
          <div className="head">
            XTRUST<span className="marker">After</span>
          </div>
          <h3>通信ゼロの端末を、必要な現場に配る</h3>
          <div className="mini">Standalone / Managed</div>
          <ul className="points">
            <li>軽量LLMを入れた通信機能ゼロのノートPC・タブレット</li>
            <li>デバイス単体で安全に完結</li>
            <li>必要な現場にそのまま配布</li>
          </ul>
        </div>
      </div>
    </Sec>
  );
}
