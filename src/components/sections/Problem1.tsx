import { problem1 } from "@/content/content";
import { Eyebrow } from "@/components/Eyebrow";
import { Sec } from "./Sec";

// 02 — Problem 1 (light, positioning map).
export function Problem1() {
  return (
    <Sec id="problem_1" tone="light" variant="problem-1" label="02 Problem 1">
      <Eyebrow num="02" label="Problem 01" ja="機密情報ほどクラウドAIに渡せない" />
      <div className="top-row">
        <h2 className="h-jp">{problem1.headline}</h2>
        {problem1.body && <p className="lead">{problem1.body}</p>}
      </div>

      <div className="pm-wrap">
        <div>
          <ul className="pm-bullets">
            {problem1.bullets?.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          {problem1.closing && <p className="pm-closing">{problem1.closing}</p>}
        </div>

        {/* Positioning map: x = クラウドに出しにくさ / y = AIで処理したい必要性 */}
        <div className="pmap" aria-hidden="true">
          <span className="axis-y" />
          <span className="axis-x" />
          <span className="lbl-y">
            AIで処理したい
            <small>Need</small>
          </span>
          <span className="lbl-y-low">Low</span>
          <span className="lbl-x">
            クラウドに出しにくい
            <small>Sensitivity</small>
          </span>
          <span className="lbl-x-low">Low</span>

          <span className="hot" style={{ right: "10%", top: "12%", width: "34%", height: "40%" }} />
          <span className="hot-label" style={{ right: "10%", top: "6%" }}>
            XTRUST
          </span>

          <span className="plot" style={{ left: "30%", top: "70%" }}>
            一般的な社内文書
          </span>
          <span className="plot" style={{ left: "62%", top: "40%" }}>
            会議音声・議事録
          </span>
          <span className="plot" style={{ left: "78%", top: "26%" }}>
            M&A / DD 資料
          </span>
          <span className="plot" style={{ left: "72%", top: "58%" }}>
            人事・財務情報
          </span>
        </div>
      </div>
    </Sec>
  );
}
