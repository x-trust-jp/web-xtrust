import { Eyebrow } from "@/components/Eyebrow";

// 09 — Use Case 04 · PMI / DD 統一フォーマット (dark). 1:1 port of Hero.html.
export function S09UseCasePMIDD() {
  return (
    <section className="sec dark" id="sec-09" data-screen-label="09 Use Case 04">
      <Eyebrow
        num="09"
        label="Use Case 04"
        ja="投資先 PMI / DD 資料を、統一フォーマットへ"
      />
      <div className="top-row">
        <h2 className="h-jp">
          投資先 PMI / DD 資料を、
          <br />
          統一フォーマットへ。
        </h2>
        <p className="body-jp">
          形式の違う資料を、レビュー可能な PMI / DD
          下書きへ変換します。会社概要、主要KPI、重要論点、リスク、優先対応事項などの指定フォーマットへ整理。最終判断は人が行う、人間レビュー前提の下書きです。
        </p>
      </div>

      <div className="io">
        <div className="io-col">
          <div className="io-cap">
            Input — <b>形式の違う資料</b>
          </div>
          <div className="doc-tile">
            <span className="ico">PPT</span>DD資料<small>提案・分析スライド</small>
          </div>
          <div className="doc-tile">
            <span className="ico">XLS</span>財務レポート / KPI資料
            <small>数表・グラフ</small>
          </div>
          <div className="doc-tile">
            <span className="ico">MEMO</span>会議メモ / 組織図
            <small>論点・リスク・次アクション</small>
          </div>
          <div className="doc-tile">
            <span className="ico">LIST</span>課題一覧
            <small>未整理のチェックリスト</small>
          </div>
        </div>

        <div className="stage">
          <span className="glow" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/laptop.png" alt="XTRUST オフラインAI 端末" />
          <span className="cap">
            オフラインで安全に処理
            <small>外部にデータを出さず、社内環境で完結。</small>
          </span>
        </div>

        <div className="io-col r">
          <div className="io-cap" style={{ justifyContent: "flex-end" }}>
            Output — <b>統一フォーマット（下書き）</b>
          </div>
          <div className="io-out">
            <div className="or">
              <span className="lab">会社概要</span>
              <span className="bars">
                <i />
                <i />
                <i />
              </span>
            </div>
            <div className="or">
              <span className="lab">主要KPI</span>
              <span className="bars">
                <i />
                <i />
                <i />
              </span>
            </div>
            <div className="or">
              <span className="lab">重要論点</span>
              <span className="bars">
                <i />
                <i />
                <i />
              </span>
            </div>
            <div className="or">
              <span className="lab">リスク</span>
              <span className="bars">
                <i />
                <i />
                <i />
              </span>
              <span className="pr">高 / 中 / 低</span>
            </div>
            <div className="or">
              <span className="lab">優先対応事項</span>
              <span className="bars">
                <i />
                <i />
                <i />
              </span>
              <span className="pr">優先度</span>
            </div>
          </div>
          <p className="note-s" style={{ marginTop: 14 }}>
            人間レビュー前提の下書き／最終判断は人が行います。
          </p>
        </div>
      </div>

      <div className="banner soft" style={{ marginTop: 40 }}>
        <span className="mk">Offline</span>
        <span>
          書式も粒度も違うインプットを、
          <b>レビュー可能な共通フォーマット</b>
          の下書きへ。判断のための材料を読むことに集中できます。
        </span>
      </div>
    </section>
  );
}
