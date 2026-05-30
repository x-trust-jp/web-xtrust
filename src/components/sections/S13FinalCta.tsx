// 13 — Final CTA (dark). 1:1 port of Hero.html.
export function S13FinalCta() {
  return (
    <section className="finalcta" id="sec-13" data-screen-label="13 Apply">
      <div className="eyebrow" style={{ color: "rgba(244,243,247,0.5)" }}>
        <span className="num" style={{ color: "#fff" }}>
          13
        </span>
        <span className="line" style={{ background: "rgba(244,243,247,0.25)" }} />
        <span>Apply</span>
        <span className="ja" style={{ color: "rgba(244,243,247,0.7)" }}>
          機密情報のまま、AI を使い始める
        </span>
      </div>

      <h2 className="h-jp" style={{ marginTop: 32 }}>
        機密情報のままAIを使える、
        <br />
        新しい選択肢を試してみませんか？
      </h2>

      <div className="cta-row">
        <a className="btn btn-primary" href="#sec-12">
          実質0円で試す
          <svg
            className="arr"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
        <a
          className="btn btn-ghost"
          href="/downloads/xtrust-sales-deck.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          営業資料をダウンロード
        </a>
        <a className="btn btn-ghost" href="#sec-13">
          30分の商談で相談する
        </a>
      </div>

      <p className="micro">通信機能ゼロ・フルマネージド・初回 PoC は実質0円</p>
    </section>
  );
}
