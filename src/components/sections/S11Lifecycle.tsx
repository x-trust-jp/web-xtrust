import { Eyebrow } from "@/components/Eyebrow";
import { Placeholder } from "@/components/Placeholder";

// 11 — Lifecycle (dark). 1:1 port of Hero.html.
export function S11Lifecycle() {
  return (
    <section className="sec dark" id="sec-11" data-screen-label="11 Lifecycle">
      <Eyebrow num="11" label="Lifecycle" ja="導入から回収まで、現地で完結" />
      <div className="top-row">
        <h2 className="h-jp">
          月額5万円から始められる、
          <br />
          オフラインAIレンタル。
        </h2>
        <p className="body-jp">
          通信ゼロで安心してお使いいただけるAIです。議事録生成や翻訳、契約書のレビュー、機密書類の整理、議論の壁打ちなどに活用でき、オフラインでもAIの情報処理能力で生産性が飛躍的に上がります。
        </p>
      </div>

      <div style={{ marginTop: 36 }}>
        <p className="dept-head" style={{ marginBottom: 14 }}>
          こんな業務に活用できます
        </p>
        <div className="chips">
          <span className="chip" style={{ paddingLeft: 16 }}>
            議事録生成
          </span>
          <span className="chip" style={{ paddingLeft: 16 }}>
            翻訳
          </span>
          <span className="chip" style={{ paddingLeft: 16 }}>
            契約書レビュー
          </span>
          <span className="chip" style={{ paddingLeft: 16 }}>
            機密書類の整理
          </span>
          <span className="chip" style={{ paddingLeft: 16 }}>
            議論の壁打ち
          </span>
        </div>
      </div>

      <div className="life">
        <div className="lstep">
          <div className="lh">
            <span className="ln">1</span>
            <h3>導入・初期設定</h3>
          </div>
          <Placeholder ariaLabel="導入シーン画像プレースホルダー" tag="IMAGE">
            <b>現地への搬入・初期設定</b>
          </Placeholder>
          <p>
            作業員が現地へ搬入し、オプション機器とあわせて会議室で初期設定を実施します。
            <span className="opt">
              オプション機器：ブックスキャナ / サーマルプリンター /
              カードリーダー（社員証タッチ用）
            </span>
          </p>
        </div>
        <div className="lstep hot">
          <div className="lh">
            <span className="ln">2</span>
            <h3>すぐ使える</h3>
          </div>
          <Placeholder ariaLabel="利用シーン画像プレースホルダー" tag="IMAGE">
            <b>社員証タッチで利用開始</b>
          </Placeholder>
          <p>
            社員証をタッチするだけで利用開始。AIが議事録や文書レビューなどをオフラインで高速に処理します。
          </p>
        </div>
        <div className="lstep">
          <div className="lh">
            <span className="ln">3</span>
            <h3>定期メンテナンス</h3>
          </div>
          <Placeholder ariaLabel="メンテナンス画像プレースホルダー" tag="IMAGE">
            <b>ローカルLLM更新・調整</b>
          </Placeholder>
          <p>
            定期的に現地へ訪問し、ローカルLLMの更新、設定のチューニングを実施。必要に応じて機材を交換します。
          </p>
        </div>
        <div className="lstep">
          <div className="lh">
            <span className="ln">4</span>
            <h3>回収・サニタイズ</h3>
          </div>
          <Placeholder ariaLabel="回収シーン画像プレースホルダー" tag="IMAGE">
            <b>サニタイズ・証明書発行</b>
          </Placeholder>
          <p>
            現地でデータをサニタイズし、証明書を発行。お客様の確認・サイン後、機材を回収します。
            <span className="opt">
              NIST SP 800-88 Rev.2 準拠の考え方に基づきサニタイズ。
            </span>
          </p>
        </div>
      </div>

      <div className="life-track">
        <span>導入から回収まで、現地で完結する安心のライフサイクル</span>
        <span className="seq">
          <span>搬入・設定</span>
          <span>利用</span>
          <span>定期メンテナンス</span>
          <span>サニタイズ回収</span>
        </span>
      </div>
    </section>
  );
}
