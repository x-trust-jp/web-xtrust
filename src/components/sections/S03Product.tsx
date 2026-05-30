import { Eyebrow } from "@/components/Eyebrow";

// 03 — Product / Hub (dark). 1:1 port of Hero.html.
export function S03Product() {
  return (
    <section className="sec dark" id="sec-03" data-screen-label="03 Product">
      <Eyebrow num="03" label="Product" ja="導入できない理由を、すべて取り除く" />
      <div className="top-row">
        <h2 className="h-jp">
          導入できない理由を、
          <br />
          すべて取り除いたAI。
        </h2>
        <p className="body-jp">
          オフラインAI・ローカルLLM搭載。重要情報の
          <strong style={{ color: "#fff", fontWeight: 500 }}>源流</strong>
          を押さえ、既存の企業サービス群へつなぐ最初のハブに。XTRUSTは、企業独自のAXを始める起点になります。
        </p>
      </div>

      <div className="hub">
        <div className="side">
          <div className="col-tt">導入障壁を取り除く</div>
          <ul className="deflist">
            <li>
              <span className="k">01</span>
              <span className="v">
                通信機能なし<small>Wi-Fi・Bluetooth 非搭載</small>
              </span>
            </li>
            <li>
              <span className="k">02</span>
              <span className="v">
                外部送信なし<small>データは外に出ません</small>
              </span>
            </li>
            <li>
              <span className="k">03</span>
              <span className="v">
                USB物理ロック<small>持ち出し経路を物理的にロック</small>
              </span>
            </li>
            <li>
              <span className="k">04</span>
              <span className="v">
                クラウド前提なし<small>クラウドに依存しない設計</small>
              </span>
            </li>
            <li>
              <span className="k">05</span>
              <span className="v">
                保存先依存なし<small>外部ストレージ不要</small>
              </span>
            </li>
          </ul>
        </div>

        <div className="stage">
          <span className="glow" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/product.png" alt="XTRUST 端末" />
          <span className="cap">情報ハブとして機能</span>
        </div>

        <div className="side">
          <div className="col-tt">デバイスの中で稼働するローカルAI</div>
          <ul className="deflist">
            <li>
              <span className="k">A</span>
              <span className="v">
                オフラインAI搭載<small>外部接続なしでAIが動作</small>
              </span>
            </li>
            <li>
              <span className="k">B</span>
              <span className="v">
                ローカルLLM内蔵<small>高精度な理解・推論をローカルで実行</small>
              </span>
            </li>
            <li>
              <span className="k">C</span>
              <span className="v">
                ネットワーク非依存<small>つながらないことが、安全設計の核</small>
              </span>
            </li>
            <li>
              <span className="k">D</span>
              <span className="v">
                デバイス内で完結<small>高速・高精度な処理をその場で</small>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 44 }}>
        <p
          className="dept-head"
          style={{ color: "rgba(244,243,247,0.5)", marginBottom: 14 }}
        >
          導入懸念もオールグリーン
        </p>
        <div className="chips">
          <span className="chip">
            <i className="ck" />
            ガバナンス
          </span>
          <span className="chip">
            <i className="ck" />
            セキュリティ
          </span>
          <span className="chip">
            <i className="ck" />
            コンプライアンス
          </span>
          <span className="chip">
            <i className="ck" />
            守秘義務
          </span>
          <span className="chip">
            <i className="ck" />
            ネットワーク分離
          </span>
          <span className="chip">
            <i className="ck" />
            高機密情報
          </span>
        </div>
      </div>

      <div className="banner" style={{ marginTop: 44 }}>
        <span className="mk">Hub</span>
        <span>
          重要情報の源流を押さえ、既存サービス群につなぐ。<b>XTRUST</b>
          は、企業独自のAXを始める最初のハブになる。
        </span>
      </div>
    </section>
  );
}
