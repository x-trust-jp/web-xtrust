import { Eyebrow } from "@/components/Eyebrow";

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

// 10 — Use Case 05 · 会議マスター (light). 1:1 port of Hero.html.
export function S10UseCaseMaster() {
  return (
    <section className="sec light" id="sec-10" data-screen-label="10 Use Case 05">
      <Eyebrow
        num="10"
        label="Use Case 05"
        ja="定例会議の流れを覚える、会議マスター"
      />
      <div className="top-row">
        <h2 className="h-jp">
          定例会議の流れを覚える、
          <br />
          会議マスター。
        </h2>
        <p className="body-jp">
          特定の定例会議について、前回の流れ、未完了タスク、次アクションを把握した状態で支援します。毎回ゼロから状況を共有し直す必要がなくなり、本論から会議を始められます。
        </p>
      </div>

      <div className="checkrow">
        <span>
          <i />
          前回の論点を引き継ぐ
        </span>
        <span>
          <i />
          未完了タスクを確認する
        </span>
        <span>
          <i />
          次のアクションを整理する
        </span>
        <span>
          <i />
          継続的な会議の文脈を保つ
        </span>
      </div>

      <div className="io">
        <div className="io-col">
          <div className="io-cap">
            Past — <b>過去の会議履歴</b>
          </div>
          <div className="doc-tile">
            <span className="ico">4/08</span>第1回
            <small>現状共有・課題確認・スケジュール確認</small>
          </div>
          <div className="doc-tile">
            <span className="ico">4/22</span>第2回
            <small>進捗確認・試作レビュー・リスク確認</small>
          </div>
          <div className="doc-tile">
            <span className="ico">5/13</span>前回
            <small>仕様の一部見直し・担当分担の調整</small>
          </div>
        </div>

        <div className="stage">
          <span
            className="glow"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(110,150,230,0.22), transparent 66%)",
            }}
          />
          <div style={deviceBoxStyle}>
            <Glyph />
          </div>
          <span className="cap" style={{ marginTop: 6 }}>
            定例会議の文脈を整理
          </span>
          <div
            className="chips"
            style={{ justifyContent: "center", marginTop: 6 }}
          >
            <span className="chip" style={{ paddingLeft: 16 }}>
              論点・タスクを抽出・構造化
            </span>
            <span className="chip" style={{ paddingLeft: 16 }}>
              時系列でつなぎ直す
            </span>
            <span className="chip" style={{ paddingLeft: 16 }}>
              必要な情報を選別して提示
            </span>
          </div>
        </div>

        <div className="io-col r">
          <div className="io-cap" style={{ justifyContent: "flex-end" }}>
            Today — <b>今回の会議で確認</b>
          </div>
          <div className="mini-panel">
            <div className="mh">
              <span className="dot" />① 今日の確認論点
            </div>
            <ul>
              <li>前回保留の仕様確認</li>
              <li>担当分担の見直し / 顧客共有資料の更新</li>
            </ul>
          </div>
          <div className="mini-panel">
            <div className="mh">
              <span className="dot" />② 未完了タスク
            </div>
            <ul>
              <li>議事録ドラフト確認</li>
              <li>育成計画の反映 / 法務確認待ち</li>
            </ul>
          </div>
          <div className="mini-panel">
            <div className="mh">
              <span className="dot" />③ 次アクション
            </div>
            <ul>
              <li className="chk">修正版提出（Aさん）— 5/20まで</li>
              <li className="chk">顧客を招待する（Bさん）— 5/27まで</li>
              <li className="chk">次回会議で意見決定（全員）— 6/03</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="banner" style={{ marginTop: 40 }}>
        <span className="mk">Continuity</span>
        <span>継続的な会議の流れを整理し、毎回の確認漏れを減らす支援イメージ。</span>
      </div>
      <p className="note-s" style={{ marginTop: 16 }}>
        ※ XTRUST
        は会議の内容を理解・整理するための支援を行います。会議の整理・保存期間はプロジェクト単位で設定可能。必要な期間のみ文脈を保持し、目的外利用は行いません。
      </p>
    </section>
  );
}
