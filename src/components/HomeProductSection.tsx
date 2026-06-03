import Image from "next/image";
import { HomeCaseCarousel } from "@/components/HomeCaseCarousel";

export function HomeProductSection({
  variant = "teal",
  sectionId = "home-product",
  titleId = "home-product-title",
}: {
  variant?: "teal" | "light";
  sectionId?: string;
  titleId?: string;
}) {
  if (variant === "teal") {
    return <HomeCaseCarousel sectionId={sectionId} titleId={titleId} />;
  }

  return (
    <section
      className={`home-product home-product--${variant}`}
      id={sectionId}
      aria-labelledby={titleId}
    >
      <div className="home-product__inner">
        <div className="home-product__eyebrow" aria-hidden="true">
          <span className="home-product__eyebrow-num">01</span>
          <span className="home-product__eyebrow-line" />
          <span className="home-product__eyebrow-ja">製品について</span>
        </div>

        <div className="home-product__top-row">
          <h2 className="home-product__headline" id={titleId}>
            「ローカルAI搭載＋通信OFF」の
            <br className="home-product__headline-break" />
            フルマネージドPCが、月額5万円〜で利用可能に
          </h2>
          <p className="home-product__body">
            通信ゼロ、リスクゼロのAI環境が、いつでも、どこでも利用可能。機密情報を取り扱う業務でも、これなら導入できない理由はありません。これまで諦めていた現場に、ようやくAIがやってきます。
          </p>
        </div>

        <div className="home-product__hub">
          <div className="home-product__side">
            <div className="home-product__column-title">
              通信機能OFF、データ出力0
            </div>
            <ul className="home-product__deflist">
              <li>
                <span className="home-product__key">01</span>
                <span className="home-product__value">
                  通信機能なし
                  <small>Wi-Fi・Bluetooth非搭載</small>
                </span>
              </li>
              <li>
                <span className="home-product__key">02</span>
                <span className="home-product__value">
                  外部送信なし
                  <small>データは外に出ません</small>
                </span>
              </li>
              <li>
                <span className="home-product__key">03</span>
                <span className="home-product__value">
                  USB物理ロック
                  <small>物理的にロック</small>
                </span>
              </li>
              <li>
                <span className="home-product__key">04</span>
                <span className="home-product__value">
                  クラウド接続なし
                  <small>クラウドに依存しない設計</small>
                </span>
              </li>
              <li>
                <span className="home-product__key">05</span>
                <span className="home-product__value">
                  保存先依存なし
                  <small>外部ストレージ不使用</small>
                </span>
              </li>
            </ul>
          </div>

          <div className="home-product__stage">
            <span className="home-product__glow" aria-hidden="true" />
            <Image
              src="/images/laptop.png"
              alt="XTRUST ラップトップ"
              width={1342}
              height={916}
              className="home-product__device"
            />
          <div className="home-product__chips">
            <span className="home-product__chip">ガバナンス</span>
            <span className="home-product__chip">セキュリティ</span>
            <span className="home-product__chip">コンプライアンス</span>
            <span className="home-product__chip">守秘義務</span>
            <span className="home-product__chip">ネットワーク分離</span>
            <span className="home-product__chip">高機密情報</span>
          </div>
        </div>

          <div className="home-product__side">
            <div className="home-product__column-title">AI機能 ◎</div>
            <ul className="home-product__deflist">
              <li>
                <span className="home-product__key">A</span>
                <span className="home-product__value">
                  ローカルLLM搭載
                  <small>高精度な理解・推論をローカルで実行</small>
                </span>
              </li>
              <li>
                <span className="home-product__key">B</span>
                <span className="home-product__value">
                  AI議事録
                  <small>音声情報をリアルタイムで理解＋整理</small>
                </span>
              </li>
              <li>
                <span className="home-product__key">C</span>
                <span className="home-product__value">
                  書類のレビュー
                  <small>リーガルチェック、誤字脱字の指摘など</small>
                </span>
              </li>
              <li>
                <span className="home-product__key">D</span>
                <span className="home-product__value">
                  翻訳・通訳
                  <small>あらゆる言語をリアルタイムで変換</small>
                </span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
