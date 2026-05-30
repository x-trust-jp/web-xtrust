import { Eyebrow } from "@/components/Eyebrow";
import { Placeholder } from "@/components/Placeholder";

const Arr = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

// 06 — Use Case 01 · 多言語会議サポート (light). 1:1 port of Hero.html.
export function S06UseCaseMeeting() {
  return (
    <section className="sec light" id="sec-06" data-screen-label="06 Use Case 01">
      <Eyebrow num="06" label="Use Case 01" ja="多言語会議を、AIで支援する" />
      <div className="top-row">
        <h2 className="h-jp">
          多言語会議を、
          <br />
          AIで支援する。
        </h2>
        <p className="body-jp">
          音声とAIで、会議中の翻訳・整理から、会議後の議事録出力までをスムーズにサポート。
          <strong style={{ color: "#0e0d14", fontWeight: 600 }}>
            AIホワイトボード / AI議事録
          </strong>
          として、会議そのものを前に進めます。
        </p>
      </div>

      <Placeholder
        style={{ marginTop: 48, minHeight: 300 }}
        ariaLabel="会議シーン画像プレースホルダー"
        tag="IMAGE · 16:6"
      >
        <b>多言語会議のシーン</b>
        <br />
        端末を囲んで議論する参加者／リアルタイム字幕が映る画面
        <br />
        （後ほど実写・イラストを差し込みます）
      </Placeholder>

      <div className="steps3">
        <div className="conn" style={{ left: "33.33%" }}>
          <Arr />
        </div>
        <div className="conn" style={{ left: "66.66%" }}>
          <Arr />
        </div>

        <div className="step-card">
          <div className="sh">
            <span className="sn">1</span>
            <h3>会議中：リアルタイム翻訳・表示</h3>
          </div>
          <div className="sb">
            <div className="mini-panel">
              <div className="mh">
                <span className="dot" />
                発言内容 / 翻訳 / 要点
              </div>
              <ul>
                <li>山田：新製品の仕様について</li>
                <li>John：Could you explain the specs?</li>
                <li>李：关于新产品的规格</li>
                <li className="chk">要点：仕様・価格・市場投入時期</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="step-card">
          <div className="sh">
            <span className="sn">2</span>
            <h3>会議中：論点整理・次アクション抽出</h3>
          </div>
          <div className="sb">
            <div className="mini-panel">
              <div className="mh">
                <span className="dot" />
                論点整理
              </div>
              <ul>
                <li>新製品の仕様 / 価格・見積り</li>
                <li>市場投入時期 / パートナー連携</li>
              </ul>
            </div>
            <div className="mini-panel">
              <div className="mh">
                <span className="dot" />
                次のアクション
              </div>
              <ul>
                <li className="chk">見積りを共有する（山田）</li>
                <li className="chk">価格案を検討する（John）</li>
                <li className="chk">市場調査データを共有（李）</li>
              </ul>
              <span className="stamp">次回：5/20 10:00</span>
            </div>
          </div>
        </div>

        <div className="step-card">
          <div className="sh">
            <span className="sn">3</span>
            <h3>会議後：議事録をその場で出力</h3>
          </div>
          <div className="sb">
            <div className="mini-panel">
              <div className="mh">
                <span className="dot" />
                会議要約
              </div>
              <ul>
                <li>仕様・価格・市場投入時期を協議</li>
                <li>見積り共有と各確認を次回までに合意</li>
              </ul>
            </div>
            <div className="mini-panel">
              <div className="mh">
                <span className="dot" />
                決定事項 / ToDo
              </div>
              <ul>
                <li className="chk">主要仕様の方向性を合意</li>
                <li className="chk">市場投入はQ3を目指す</li>
              </ul>
              <span className="stamp">その場で紙出力も可能（オプション）</span>
            </div>
          </div>
        </div>
      </div>

      <div className="banner">
        <span className="mk">Output</span>
        <span>
          音声とAIで <b>AIホワイトボード / AI議事録</b>{" "}
          として会議をサポート。会議後には、必要に応じて議事録を紙で出力できます。
        </span>
      </div>
      <p className="note-s" style={{ marginTop: 18 }}>
        ※ サーマルプリンターによる紙出力はオプションです（サーマルプリンターセットの場合）。
      </p>
    </section>
  );
}
