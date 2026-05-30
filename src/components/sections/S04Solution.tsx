import { Eyebrow } from "@/components/Eyebrow";

const strong = { color: "#0e0d14", fontWeight: 600 } as const;

// 04 — Solution (light, capability × offline). 1:1 port of Hero.html.
export function S04Solution() {
  return (
    <section className="sec light" id="sec-04" data-screen-label="04 Solution">
      <Eyebrow num="04" label="Solution" ja="ローカルLLM × 完全オフライン" />
      <div className="top-row">
        <h2 className="h-jp">
          ローカルLLM × <br />
          完全オフライン。
        </h2>
        <p className="body-jp">
          機密情報を、外に出さずにAIで処理する。ローカルLLMの
          <strong style={strong}>進化</strong>と、オフラインの
          <strong style={strong}>防御</strong>
          を1台に統合した、最強の機密情報AIソリューションです。
        </p>
      </div>

      <div className="split3">
        <div className="side">
          <div className="side-h">
            <span className="pin">能力</span>
            <span className="ttl">
              ローカルLLM搭載
              <small>巨大なGPUサーバーがなくても、業務用AIは動く。</small>
            </span>
          </div>
          <ul className="rows">
            <li>
              <b>Gemma 4</b> などのローカルLLMが急速に進化
            </li>
            <li>
              <b>Qwen 3.6</b> など高性能モデルもローカル活用が進展
            </li>
            <li>
              スマホでも動く <b>1-Bit Model / Bonsai</b>{" "}
              などエッジ向けモデルが登場
            </li>
            <li>ノートPC 1台でも、議事録・要約・レビュー・論点整理を支援</li>
          </ul>
          <div
            className="banner soft"
            style={{ marginTop: 24, fontSize: 14, padding: "18px 22px" }}
          >
            ローカルLLMでも、十分に実務を支援できる時代へ。
          </div>
        </div>

        <div className="stage">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/laptop.png"
            alt="XTRUST AI Station — ダッシュボード搭載のオフラインAI端末"
          />
          <span className="cap">
            <b>XTRUST</b> AI STATION
          </span>
          <div className="arrows">
            <span>← 能力</span>
            <span>安全 →</span>
          </div>
        </div>

        <div className="side">
          <div className="side-h">
            <span className="pin">安全</span>
            <span className="ttl">
              完全オフライン / スタンドアローン
              <small>最後の防衛線は、つながらないこと。</small>
            </span>
          </div>
          <ul className="rows">
            <li>
              Wi-Fi / Bluetooth なし、<b>外部通信ゼロ</b>
            </li>
            <li>
              USBポートもロック済み、<b>持ち出し経路を遮断</b>
            </li>
            <li>
              高度AI時代にも、<b>攻撃面を最小化</b>
            </li>
            <li>
              情報流出・クラウド依存・外部攻撃から守る<b>最終手段</b>
            </li>
          </ul>
          <div
            className="banner soft"
            style={{ marginTop: 24, fontSize: 14, padding: "18px 22px" }}
          >
            高度な機密業務では、オフラインそのものが価値になる。
          </div>
        </div>
      </div>

      <div className="foot-line">
        <span className="tag">The XTRUST Resolve</span>
        <span>AIを使いたい。だが外に出せない。その矛盾を、XTRUSTが解く。</span>
      </div>
    </section>
  );
}
