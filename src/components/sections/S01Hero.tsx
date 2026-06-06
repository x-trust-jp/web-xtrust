import { Logo } from "@/components/Logo";

// 01 — Hero (light top hero). 1:1 port of Hero.html.
export function S01Hero() {
  return (
    <section className="hero" id="sec-01" data-screen-label="01 Hero">
      <header className="topbar">
        <div className="logo" aria-label="XTRUST">
          <Logo fill="#ffffff" />
        </div>

        <nav className="nav" aria-label="Primary">
          <a href="#sec-03">Product</a>
          <a href="#sec-06">Use Cases</a>
          <a href="#sec-12">Pricing</a>
          <a href="#sec-13">Contact</a>
        </nav>

        <button className="menu-btn" aria-label="Open menu">
          <span className="label">Menu</span>
          <span className="bars" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </header>

      <div className="bg-x" aria-hidden="true">
        X
      </div>

      <div className="eyebrow" aria-label="対象業務">
        <span className="line" />
        <span className="ja">ローカルAI搭載PCを「月5万円～」レンタル可能</span>
      </div>

      <div className="copy">
        <h1 className="headline">
          オフラインAIで
          <br />
          すべての業務に
          <br />
          ゼロリスク環境を
        </h1>
        <p className="sub">
          「通信機能ゼロ」のローカルLLM搭載PCで実現する、圧倒的に低リスクなAI環境。財務、戦略、人事、契約、法務、顧客情報などの高機密データを、1バイトも外部に漏らさずAI活用可能。
          <br />
          これまで諦めていた現場のAIトランスフォーメーションが、いよいよ始まります。
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#sec-12">
            お問い合わせ
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
          <a className="btn btn-ghost" href="#sec-13">
            資料ダウンロード
          </a>
        </div>
      </div>

      <div className="product-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/laptop_001.png" alt="XTRUST 端末" />
      </div>

      <div className="bottom-logo" aria-hidden="true">
        <Logo preserveAspectRatio="xMidYMid meet" />
      </div>
    </section>
  );
}
