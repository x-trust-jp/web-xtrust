import { Eyebrow } from "@/components/Eyebrow";

// 12 — PoC Pricing (light). 1:1 port of Hero.html.
export function S12Poc() {
  return (
    <section className="sec light" id="sec-12" data-screen-label="12 PoC">
      <Eyebrow num="12" label="PoC Offer" ja="初回 PoC は、実質無料でスタート" />
      <div className="top-row">
        <h2 className="h-jp">
          初回 PoC は『実質無料』で
          <br />
          スタートできます。
        </h2>
        <p className="body-jp">
          開発へのフィードバックにご協力いただくことで、初回の PoC
          費用を全額ディスカウントします。試しやすい条件で小さく始め、PoC
          で現場要件をすり合わせる提供イメージです。
        </p>
      </div>

      <div className="poc">
        <div className="pcard">
          <span className="ptag">通常</span>
          <span className="num">
            50,000<span className="u">円</span>
          </span>
          <span className="cap">月額利用料の目安</span>
        </div>
        <div className="op">−</div>
        <div className="pcard">
          <span className="ptag">開発協力による案件別ディスカウント</span>
          <span className="num">
            −50,000<span className="u">円</span>
          </span>
          <span className="cap">ヒアリング・実務フィードバック協力</span>
        </div>
        <div className="op">=</div>
        <div className="pcard accent">
          <span className="ptag">初回 PoC</span>
          <span className="num" style={{ whiteSpace: "nowrap" }}>
            <span className="pre">実質</span>0<span className="u">円</span>
          </span>
          <span className="cap">PoC 開始時の費用イメージ</span>
        </div>
      </div>

      <p
        className="dept-head"
        style={{
          color: "rgba(20,19,26,0.5)",
          margin: "40px 0 14px",
          textAlign: "center",
        }}
      >
        PoC で一緒に決めること
      </p>
      <div className="poc-decide">
        <div className="pd">
          <div className="k">入力資料</div>
          <div className="d">何を読み込ませるか</div>
        </div>
        <div className="pd">
          <div className="k">出力フォーマット</div>
          <div className="d">どの形で返すか</div>
        </div>
        <div className="pd">
          <div className="k">評価基準</div>
          <div className="d">何をもって有効とするか</div>
        </div>
        <div className="pd">
          <div className="k">オフライン範囲</div>
          <div className="d">どこまで開域で扱うか</div>
        </div>
      </div>

      <div className="poc-notes">
        <div className="banner soft" style={{ margin: 0 }}>
          <span className="mk">PoC</span>
          <span>
            試しやすい条件で小さく始め、PoC で現場要件をすり合わせる提供イメージ。
          </span>
        </div>
        <ul>
          <li>本条件は開発協力を前提とした案件別ディスカウントのイメージです。</li>
          <li>
            常設キャンペーンではなく、すべての案件で無償となるものではありません。
          </li>
          <li>正式条件は案件内容に応じて個別に調整します。</li>
        </ul>
      </div>
      <p className="note-s" style={{ marginTop: 24 }}>
        ※
        本内容はコンセプトイメージであり、今後の開発・提供条件を保証するものではありません。
      </p>
    </section>
  );
}
