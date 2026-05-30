import { coreValue } from "@/content/content";
import { Eyebrow } from "@/components/Eyebrow";
import { Sec } from "./Sec";

const INPUTS = ["会議の音声", "議事録", "乱雑なメモ", "PDF / PPT / Excel"];
const OUTPUTS = ["要約", "論点", "ToDo", "フォーマット変換", "下書き"];

// 07 — Core Value (dark, input → device → output).
export function CoreValue() {
  return (
    <Sec id="core_value" tone="dark" variant="core" label="07 Core Value">
      <Eyebrow num="07" label="Core Value" ja="非構造データの理解と整理" />
      <div className="top-row">
        <h2 className="h-jp">{coreValue.headline}</h2>
        <p className="lead">{coreValue.body}</p>
      </div>

      <div className="diagram">
        <div className="col">
          <div className="col-head">
            <span className="tag">非構造データ</span>
          </div>
          {INPUTS.map((t) => (
            <div className="item" key={t}>
              <span className="bullet" />
              {t}
            </div>
          ))}
        </div>

        <div className="center">
          <div className="device-frame">
            <span className="ring outer" aria-hidden="true" />
            <span className="ring" aria-hidden="true" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/product-vertical.png" alt="XTRUST Local AI Device" />
          </div>
          <div className="device-label">
            <strong>Local AI Device</strong> — Offline
          </div>
        </div>

        <div className="col right">
          <div className="col-head">
            <span className="tag">構造化アウトプット</span>
          </div>
          {OUTPUTS.map((t) => (
            <div className="item" key={t}>
              <span className="bullet" />
              {t}
            </div>
          ))}
        </div>
      </div>
    </Sec>
  );
}
