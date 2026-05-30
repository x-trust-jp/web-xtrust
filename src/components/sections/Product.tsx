import { product } from "@/content/content";
import { Eyebrow } from "@/components/Eyebrow";
import { Sec } from "./Sec";

const RING_TAGS = ["レンタル", "フルマネージド", "LLM更新", "テンプレート更新", "返却時初期化"];

// 06 — Product (light, central device + feature list).
export function Product() {
  return (
    <Sec id="product" tone="light" variant="product" label="06 Product">
      <Eyebrow num="06" label="Product" ja="軽量LLM入りの端末をレンタル" />
      <div className="top-row">
        <h2 className="h-jp">{product.headline}</h2>
        <p className="lead">{product.body}</p>
      </div>

      <div className="pwrap">
        <div className="pdevice">
          <span className="ring outer" aria-hidden="true" />
          <span className="ring" aria-hidden="true" />
          <span className="ring inner" aria-hidden="true" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/product.png" alt="XTRUST Local AI Device" />
          {RING_TAGS.map((t, i) => (
            <span className={`tag t${i + 1}`} key={t}>
              {t}
            </span>
          ))}
        </div>

        <ul className="features">
          {product.bullets.map((b, i) => (
            <li key={b}>
              <span className="ix">{`0${i + 1}`}</span>
              <span className="ft">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </Sec>
  );
}
