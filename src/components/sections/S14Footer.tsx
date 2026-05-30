import { Logo } from "@/components/Logo";

// 14 — Footer. 1:1 port of Hero.html.
// NOTE: 運営会社・所在地・連絡先・特商法表記は公開前に確定して掲載する。
export function S14Footer() {
  return (
    <footer className="footer" id="sec-14" data-screen-label="14 Footer">
      <div className="ftop">
        <div>
          <div className="flogo" aria-label="XTRUST">
            <Logo fill="#f4f3f7" />
          </div>
          <p className="fnote">
            XTRUST は、通信機能ゼロのデバイスに軽量 LLM
            を搭載した、フルマネージドな端末レンタルサービスです。
            <br />
            運営会社・所在地・連絡先・特定商取引法に基づく表記は、公開前に確定し本フッターに掲載します。
          </p>
        </div>

        <div className="fcols">
          <div className="fcol">
            <h4>Product</h4>
            <a href="#sec-03">Product</a>
            <a href="#sec-04">Solution</a>
            <a href="#sec-05">Base Ability</a>
            <a href="#sec-06">Use Cases</a>
          </div>
          <div className="fcol">
            <h4>Get Started</h4>
            <a href="#sec-12">PoC 申込</a>
            <a href="#sec-13">営業資料</a>
            <a href="#sec-13">商談予約</a>
            <a href="#sec-11">ライフサイクル</a>
          </div>
          <div className="fcol">
            <h4>Legal</h4>
            <span>運営会社 ─ 公開前</span>
            <span>お問い合わせ ─ 公開前</span>
            <span>プライバシーポリシー ─ 公開前</span>
            <span>特定商取引法表記 ─ 公開前</span>
          </div>
        </div>
      </div>

      <div className="fbot">
        <span>© XTRUST</span>
        <span>Zero Trust · Offline AI · Fully Managed</span>
      </div>
    </footer>
  );
}
