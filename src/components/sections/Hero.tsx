import { hero, cta } from "@/content/content";
import { Logo } from "@/components/Logo";
import { Cta } from "@/components/Cta";

// 01 — Hero (light top hero).
export function Hero() {
  return (
    <section className="hero" id="sec-hero" data-screen-label="01 Hero">
      <header className="topbar">
        <div className="logo" aria-label="XTRUST">
          <Logo height={18} />
        </div>
        <button className="menu-btn" type="button" aria-label="メニュー">
          <span className="bars" aria-hidden="true">
            <i />
            <i />
          </span>
          Menu
        </button>
      </header>

      <div className="bg-x" aria-hidden="true">
        X
      </div>

      <div className="eyebrow">
        <span className="num">01</span>
        <span className="line" />
        <span className="ja">{hero.eyebrow}</span>
      </div>

      <div className="copy">
        <h1 className="headline-jp">{hero.headline}</h1>
        <p className="sub">{hero.subhead}</p>
        <div className="cta-row">
          <Cta
            label={cta.primary.label}
            action={cta.primary.action}
            variant="primary"
          />
          <Cta label="営業資料をダウンロード" action="download_deck" variant="ghost" />
        </div>
      </div>

      <div className="product-wrap" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/product.png" alt="" />
      </div>

      <div className="bottom-logo" aria-hidden="true">
        <Logo />
      </div>
    </section>
  );
}
