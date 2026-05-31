import { TopHeader } from "@/components/TopHeader";
import { Logo } from "@/components/Logo";

export default function Home() {
  return (
    <section className="hero beta" id="top">
      <TopHeader />

      <div className="bg-x" aria-hidden="true">X</div>

      <div className="copy">
        <h1 className="headline">
          ローカル×オフライン
          <br />
          すべての業務へ
          <br />
          安心・安全なAIを
        </h1>
        <p className="sub">
          通信機能0のローカルAI搭載ノートPCを月5万円～レンタル可能。
          <br />
          契約、財務、人事、医療、監査、投資判断、研究開発のような高機密データを、
          <br />
          1バイトも外部に漏らすことなくAIで処理することが可能に。
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="/product">
            製品詳細を見る
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
          <a className="btn btn-ghost" href="/downloads/xtrust-sales-deck.pdf">
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
