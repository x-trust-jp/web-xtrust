import { Eyebrow } from "@/components/Eyebrow";

// 05 — Base Ability (dark). 1:1 port of Hero.html.
export function S05BaseAbility() {
  return (
    <section className="sec dark" id="sec-05" data-screen-label="05 Base Ability">
      <Eyebrow num="05" label="Base Ability" ja="非構造情報を、理解し・構造化する" />
      <div className="top-row">
        <h2 className="h-jp">
          XTRUSTは、現場の業務を
          <br />
          AIで早く、正確にする。
        </h2>
        <p className="body-jp">
          XTRUSTの中核は、会話・文書・PDF・手書きメモなどの非構造情報を理解し、整理し、業務成果物へ変換するベース機能です。まずこの基盤機能で現場の生産性を大きく引き上げ、その先に
          AI × クラウド連携を重ねることで、活用範囲をさらに拡張できます。
        </p>
      </div>

      <div className="ba-wrap">
        <div>
          <div className="ba-callout">
            <h4>まず使えるのは、AIのベース機能。</h4>
            <p>
              議事録、要約、翻訳、比較、論点整理、レビュー、タスク抽出など、現場の中間業務を直接ブーストします。その先の
              AI × クラウド領域は、要個別開発・接続拡張として段階的に重ねられます。
            </p>
          </div>
        </div>

        <div className="ba-core" aria-label="BASE ABILITY 理解・構造化">
          <span className="ring r1" />
          <span className="ring r2" />
          <div className="disc">
            <span className="eb">Base Ability</span>
            <span className="sub">理解 / 構造化</span>
            <div className="pills">
              <span className="lead">XTRUSTですぐ使える</span>
              <span>議事録</span>
              <span>要約</span>
              <span>翻訳</span>
              <span>契約レビュー</span>
              <span>論点整理</span>
              <span>タスク抽出</span>
              <span>ドキュメント比較</span>
              <span>WB要約</span>
              <span>非構造データの構造化</span>
            </div>
          </div>
          <span
            className="olabel"
            style={{ left: "50%", top: "-2%", transform: "translateX(-50%)" }}
          >
            AI × クラウド領域 — 要個別開発・接続拡張
          </span>
          <span className="olabel" style={{ left: "-2%", top: "24%" }}>
            ワークフロー
          </span>
          <span className="olabel" style={{ left: "-2%", top: "50%" }}>
            社内DB / ERP
          </span>
          <span className="olabel" style={{ left: "-2%", top: "74%" }}>
            CRM / SFA
          </span>
          <span className="olabel" style={{ right: "-2%", top: "24%" }}>
            レポート生成
          </span>
          <span className="olabel" style={{ right: "-2%", top: "50%" }}>
            Teams / Slack
          </span>
          <span className="olabel" style={{ right: "-2%", top: "74%" }}>
            API連携 / 顧客別実装
          </span>
        </div>
      </div>

      <div className="dept-grid">
        <div className="dept">
          <p className="dept-head">代替・支援できる業務の例</p>
          <h4>経営企画</h4>
          <div className="cols">
            <span>予算会議の議事録</span>
            <span>事業計画の比較整理</span>
            <span>予実差異の論点整理</span>
            <span>経営会議ToDo抽出</span>
            <span>稟議ドラフト作成</span>
            <span>PMI課題整理</span>
            <span>投資判断メモ</span>
            <span>DD資料要約</span>
          </div>
        </div>
        <div className="dept">
          <p className="dept-head">&nbsp;</p>
          <h4>人事</h4>
          <div className="cols">
            <span>面談記録の要約</span>
            <span>相談記録ドラフト</span>
            <span>評価コメント整理</span>
            <span>1on1のアクション抽出</span>
            <span>採用面接メモ</span>
            <span>規程レビュー補助</span>
            <span>事実経過の時系列整理</span>
            <span>引継ぎメモ作成</span>
          </div>
        </div>
        <div className="dept">
          <p className="dept-head">&nbsp;</p>
          <h4>法務</h4>
          <div className="cols">
            <span>契約書要約</span>
            <span>交渉履歴の整理</span>
            <span>条項差分比較</span>
            <span>レビュー履歴の蓄積</span>
            <span>リスク論点の抽出</span>
            <span>稟議前確認事項</span>
            <span>修正案の整理</span>
            <span>社内説明用メモ</span>
          </div>
        </div>
      </div>
    </section>
  );
}
