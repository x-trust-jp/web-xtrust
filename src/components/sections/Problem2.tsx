import { problem2 } from "@/content/content";
import { Eyebrow } from "@/components/Eyebrow";
import { Sec } from "./Sec";

// 03 — Problem 2 (dark, shadow AI).
export function Problem2() {
  return (
    <Sec id="problem_2" tone="dark" variant="problem-2" label="03 Problem 2">
      <Eyebrow num="03" label="Problem 02" ja="禁止するとシャドウAIが増える" />
      <div className="top-row">
        <h2 className="h-jp">{problem2.headline}</h2>
        {problem2.body && <p className="lead">{problem2.body}</p>}
      </div>

      <div className="diag">
        <div className="block left">
          <span className="tag">禁止</span>
          <h3>会社がAI利用を禁止する</h3>
          <p>承認の壁を立て、業務でのAI利用をルールで止めようとする。</p>
        </div>

        <div className="arrow">
          <svg width="40" height="12" viewBox="0 0 40 12" fill="none" aria-hidden="true">
            <path
              d="M0 6h36M30 1l6 5-6 5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Shadow AI
        </div>

        <div className="block right">
          <span className="tag">実態</span>
          <h3>私用デバイスで使い続ける</h3>
          <p>会社からは見えない場所で、機密情報がAIに入力され続ける。</p>
        </div>
      </div>

      <ul className="shadow-bullets">
        {problem2.bullets?.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </Sec>
  );
}
