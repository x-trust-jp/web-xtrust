import { Eyebrow } from "@/components/Eyebrow";
import { Placeholder } from "@/components/Placeholder";

// Small XTRUST glyph used in the review/master "stage" tiles (single path).
const deviceBoxStyle = {
  position: "relative",
  zIndex: 1,
  width: 120,
  height: 120,
  borderRadius: 18,
  background: "linear-gradient(160deg,#1b1a2e,#0c0b16)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 24px 50px rgba(20,16,40,0.28)",
  border: "1px solid rgba(160,150,210,0.3)",
} as const;

const Glyph = () => (
  <svg viewBox="0 0 473.2 40.9" style={{ width: 64 }} aria-hidden="true">
    <path
      fill="#fff"
      d="M20.4,20.6L3.3,2.5h14.5l11.6,13,11.8-13h14.2l-17,18,18.2,18.2h-15l-12.1-13-12.2,13H2.4l18-18.1Z"
    />
  </svg>
);

// 08 — Use Case 03 · 配布前レビュー (light). 1:1 port of Hero.html.
export function S08UseCaseReview() {
  return (
    <section className="sec light" id="sec-08" data-screen-label="08 Use Case 03">
      <Eyebrow
        num="08"
        label="Use Case 03"
        ja="資料・チラシ・提案書を、配布前にレビュー"
      />
      <div className="top-row">
        <h2 className="h-jp">
          資料・チラシ・提案書を、
          <br />
          配布前にレビュー。
        </h2>
        <p className="body-jp">
          外注ラフや提案資料を、配布前に多面的にチェックできます。XTRUST
          は人間の最終確認を支援する“第二の目”として、配布前の確認ポイントを整理します。
        </p>
      </div>

      <div className="checkrow">
        <span>
          <i />
          誤字脱字
        </span>
        <span>
          <i />
          表記揺れ
        </span>
        <span>
          <i />
          条件違い
        </span>
        <span>
          <i />
          価格・数字の言い違い
        </span>
        <span>
          <i />
          不自然な表現
        </span>
      </div>

      <div className="io">
        <div className="io-col">
          <div className="io-cap">
            Before — <b>配布前の資料ラフ</b>
          </div>
          <Placeholder style={{ minHeight: 90 }}>
            <b>チラシ案</b> / クラウドで業務をもっとスマートに
          </Placeholder>
          <Placeholder style={{ minHeight: 90 }}>
            <b>提案書案</b> / 導入条件・スケジュール表
          </Placeholder>
          <Placeholder style={{ minHeight: 90 }}>
            <b>営業資料案</b> / プラン・月額費用・導入社数
          </Placeholder>
        </div>

        <div className="stage">
          <span className="glow" />
          <div style={deviceBoxStyle}>
            <Glyph />
          </div>
          <span className="cap" style={{ marginTop: 6 }}>
            配布前レビューを整理
          </span>
          <div
            className="chips"
            style={{ justifyContent: "center", marginTop: 6 }}
          >
            <span className="chip" style={{ paddingLeft: 16 }}>
              文章を点検
            </span>
            <span className="chip" style={{ paddingLeft: 16 }}>
              数字・条件を照合
            </span>
            <span className="chip" style={{ paddingLeft: 16 }}>
              不自然表現を検出
            </span>
          </div>
        </div>

        <div className="io-col r">
          <div className="io-cap" style={{ justifyContent: "flex-end" }}>
            レビュー結果 — <b>指摘と修正案</b>
          </div>
          <div className="diff">
            <span className="from">お申込み締切 5/31</span>
            <span className="ar">→</span>
            <span className="to">お申込み締切は5月31日です</span>
            <span className="flag">表記</span>
          </div>
          <div className="diff">
            <span className="from">税込 / 税別の表記差異</span>
            <span className="ar">→</span>
            <span className="to">条件・表記の統一を確認</span>
            <span className="flag">条件</span>
          </div>
          <div className="diff">
            <span className="from">月額・初期費用・導入社数</span>
            <span className="ar">→</span>
            <span className="to">価格・数字の整合を見直し</span>
            <span className="flag">数字</span>
          </div>
          <div className="tallies">
            <span className="t">
              誤字 <b>2</b> 件
            </span>
            <span className="t">
              表記 <b>3</b> 件
            </span>
            <span className="t">
              数字 <b>1</b> 件
            </span>
            <span className="t">
              表現 <b>2</b> 件
            </span>
          </div>
        </div>
      </div>

      <div className="banner soft" style={{ marginTop: 40 }}>
        <span className="mk">Assist</span>
        <span>配布前の資料を多面的に見直し、確認漏れを減らす支援イメージ。</span>
      </div>
      <p className="note-s" style={{ marginTop: 16 }}>
        ※
        レビュー結果は配布前確認の補助です。ミスゼロを保証するものではありません。法務レビューや監査の代替ではなく、最終確認・最終判断は人が行います。
      </p>
    </section>
  );
}
