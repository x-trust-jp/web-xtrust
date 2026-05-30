import { pricing } from "@/content/content";
import { Eyebrow } from "@/components/Eyebrow";
import { Sec } from "./Sec";

// 10 — Pricing (light). Price card + plan conditions.
export function Pricing() {
  const { plan } = pricing;
  return (
    <Sec id="pricing" tone="light" variant="pricing" label="10 Pricing">
      <Eyebrow num="10" label="Pricing" ja="月額50,000円から（フルマネージド）" />
      <div className="top-row">
        <h2 className="h-jp">{pricing.headline}</h2>
        <p className="lead">
          本体・FeliCaカードリーダー同梱。セキュリティ・LLM・テンプレート更新まで、
          フルマネージドで提供します。
        </p>
      </div>

      <div className="pwrap">
        <div className="ptext">
          <ul className="deflist">
            <li>
              <span className="k">FEE</span>
              <span className="v">
                導入初期費用
                <small>{plan.initial_fee}</small>
              </span>
            </li>
            <li>
              <span className="k">TERM</span>
              <span className="v">
                最短契約期間
                <small>{plan.min_term}</small>
              </span>
            </li>
            <li>
              <span className="k">OPT</span>
              <span className="v">
                オプション
                {plan.options.map((o) => (
                  <small key={o}>{o}</small>
                ))}
              </span>
            </li>
          </ul>
          {plan.note && <p className="note">{plan.note}</p>}
        </div>

        <div className="pcard">
          <span className="pl-eb">Plan</span>
          <span className="pl-name">Local AI Device</span>
          <div className="pl-price">
            <span className="yen">
              <sup>¥</sup>50,000
            </span>
            <span className="unit">/ 月（税別）〜</span>
          </div>
          <ul className="pl-includes">
            {plan.includes.map((inc) => (
              <li key={inc}>{inc}</li>
            ))}
          </ul>
          <p className="pl-disclaimer">{plan.base_monthly}</p>
        </div>
      </div>
    </Sec>
  );
}
