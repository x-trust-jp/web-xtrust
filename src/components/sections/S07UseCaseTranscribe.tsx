import { Eyebrow } from "@/components/Eyebrow";
import { Placeholder } from "@/components/Placeholder";

// 07 — Use Case 02 · 文字起こし・翻訳・議事録化 (dark). 1:1 port of Hero.html.
export function S07UseCaseTranscribe() {
  return (
    <section className="sec dark" id="sec-07" data-screen-label="07 Use Case 02">
      <Eyebrow num="07" label="Use Case 02" ja="文字起こし・翻訳・議事録化" />
      <div className="top-row">
        <h2 className="h-jp">
          多言語会議を、文字起こし・
          <br />
          翻訳・議事録化。
        </h2>
        <p className="body-jp">
          さまざまな言語が飛び交う会議でも、全員が同じ情報を見ながら進められます。会議音声を文字起こしし、必要に応じて翻訳し、決定事項・ToDo・議事録の下書きとして整理します。
        </p>
      </div>

      <div
        className="grid-2"
        style={{
          marginTop: 56,
          gridTemplateColumns: "1.05fr 1fr",
          alignItems: "stretch",
        }}
      >
        <Placeholder
          style={{ minHeight: 380 }}
          ariaLabel="多言語会議シーン画像プレースホルダー"
          tag="IMAGE · 4:3"
        >
          <b>多言語会議のイラスト</b>
          <br />
          「確認お願いします」「Let&apos;s review this」「请确认一下」
          <br />
          中央にオフラインAI端末（ローカル処理）
        </Placeholder>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div className="mini-panel">
            <div className="mh">
              <span className="dot" />
              リアルタイム字幕{" "}
              <span
                style={{
                  marginLeft: "auto",
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  fontWeight: 400,
                  opacity: 0.6,
                }}
              >
                10:24
              </span>
            </div>
            <ul>
              <li>確認お願いします</li>
              <li>Let&apos;s review this</li>
              <li>请确认一下</li>
            </ul>
          </div>
          <div className="mini-panel">
            <div className="mh">
              <span className="dot" />
              翻訳（日本語 / English）
            </div>
            <ul>
              <li>確認お願いします</li>
              <li>Please confirm.</li>
            </ul>
          </div>
          <div className="mini-panel">
            <div className="mh">
              <span className="dot" />
              決定事項
            </div>
            <ul>
              <li>新製品の発売日は6月15日に決定</li>
              <li>価格はA案（¥29,800）で進行</li>
            </ul>
          </div>
          <div className="mini-panel">
            <div className="mh">
              <span className="dot" />
              議事録（下書き）
            </div>
            <ul>
              <li>日時：2024年5月15日（水）10:00–11:00</li>
              <li>参加者：田中・鈴木・山田・Chen・佐藤</li>
              <li className="chk">概要・決定事項・ToDo・次回会議を自動整理</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="foot-line">
        <span className="tag">会議音声 → 文字起こし → 翻訳 → 整理 → 持ち帰る</span>
        <span>会議理解と記録を支援する下書き・補助ツール。</span>
      </div>
      <p className="note-s" style={{ marginTop: 14 }}>
        ※ 最終判断・合意はご参加者にてお願いいたします。
      </p>
    </section>
  );
}
