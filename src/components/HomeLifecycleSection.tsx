import Image from "next/image";

export function HomeLifecycleSection() {
  return (
    <section
      className="home-product home-product--light home-lifecycle"
      id="home-lifecycle"
      aria-labelledby="home-lifecycle-title"
    >
      <div className="home-product__inner">
        <div className="home-product__eyebrow" aria-hidden="true">
          <span className="home-product__eyebrow-num">03</span>
          <span className="home-product__eyebrow-line" />
          <span className="home-product__eyebrow-ja">利用開始から、返却までの流れ</span>
        </div>

        <div className="home-product__top-row">
          <h2 className="home-product__headline" id="home-lifecycle-title">
            導入はカンタン。返却もカンタン。メンテナンスも不要。
          </h2>
          <p className="home-product__body">
            ご利用にあたって特別な準備は必要ありません。レンタル開始日に作業員が導入に伺います。貴社の会議室あるいは執務室に設置して、ご利用いただけます。
          </p>
        </div>

        <div className="home-case__cards">
          <section className="home-case__card">
            <div className="home-case__card-num">01</div>
            <div className="home-case__card-visual">
              <Image
                src="/images/cases/lifecycle-installation.png"
                alt="導入・初期設定のイメージ"
                width={570}
                height={518}
                className="home-case__card-image"
              />
            </div>
            <h3 className="home-case__card-title">導入・初期設定</h3>
            <p className="home-case__card-description">
              作業員が現地へ搬入し、オプション機器とあわせて会議室で初期設定を実施します。
            </p>
          </section>

          <section className="home-case__card">
            <div className="home-case__card-num">02</div>
            <div className="home-case__card-visual">
              <Image
                src="/images/cases/lifecycle-ready.png"
                alt="すぐ使える状態のイメージ"
                width={678}
                height={572}
                className="home-case__card-image"
              />
            </div>
            <h3 className="home-case__card-title">すぐ使える</h3>
            <p className="home-case__card-description">
              社員証をタッチするだけで利用開始。AIが議事録や文書レビューなどをオフラインで高速に処理します。
            </p>
          </section>

          <section className="home-case__card">
            <div className="home-case__card-num">03</div>
            <div className="home-case__card-visual">
              <div className="home-case__card-placeholder">
                LIFECYCLE 03
                <br />
                定期メンテナンスイメージ
              </div>
            </div>
            <h3 className="home-case__card-title">定期的なメンテナンス</h3>
            <p className="home-case__card-description">
              定期的に現地へ訪問し、ローカルLLMの更新、ハーネスや設定のチューニングを実施。必要に応じて機材を交換します。
            </p>
          </section>

          <section className="home-case__card">
            <div className="home-case__card-num">04</div>
            <div className="home-case__card-visual">
              <Image
                src="/images/cases/lifecycle-sanitize.png"
                alt="回収・サニタイズのイメージ"
                width={528}
                height={440}
                className="home-case__card-image"
              />
            </div>
            <h3 className="home-case__card-title">回収・サニタイズ</h3>
            <p className="home-case__card-description">
              現地でデータをサニタイズし、証明書を発行。お客様の確認・サイン後、機材を回収します。
            </p>
            <p className="home-case__card-note">
              ※NIST SP 800-88 Rev.2に準拠したサニタイズ
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
