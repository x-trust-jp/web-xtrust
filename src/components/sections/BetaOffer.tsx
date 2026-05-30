import { betaOffer, cta } from "@/content/content";
import { Eyebrow } from "@/components/Eyebrow";
import { Cta } from "@/components/Cta";

// 11 — Beta Offer (gradient, main CTA).
// NOTE(soil-alignment, beta_offer_legacy_terms): content.yaml flags the
// legacy "月額実質0円" framing as outdated. The confirmed soil offer is
// "導入初期費用10万円を6か月以上契約で無料" — so the offer card below uses
// the *initial-fee waiver*, not the legacy monthly-0 calc. Revisit the
// headline copy with soil before publishing.
export function BetaOffer() {
  return (
    <section className="sec grad beta" id="sec-beta_offer" data-screen-label="11 Beta Offer">
      <Eyebrow num="11" label="Beta Offer" ja="ベータ版申し込み" />
      <div className="top-row">
        <h2 className="h-jp">{betaOffer.headline}</h2>
        <p className="lead">{betaOffer.full_access_copy}</p>
      </div>

      <div className="calc-wrap">
        <div className="calc">
          <div className="row">
            <span className="lbl">導入初期費用</span>
            <span className="val">¥100,000</span>
          </div>
          <div className="row discount">
            <span className="lbl">6か月以上のご契約で</span>
            <span className="val">−¥100,000</span>
          </div>
          <div className="row total">
            <span className="lbl">実質初期費用</span>
            <span className="val">
              <sup>¥</sup>0
            </span>
          </div>
          <p className="note">
            ※ ベータ条件は暫定です。最新の提供条件はお問い合わせください。
          </p>
        </div>

        <div className="checks">
          <h3>ベータ版でも、全機能をご利用いただけます。</h3>
          <ul>
            {betaOffer.full_access_list.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="cta-row">
        <Cta label={cta.primary.label} action={cta.primary.action} variant="primary" />
        <Cta label="30分の商談で相談する" action="book_meeting" variant="ghost" />
        <span className="meta">{betaOffer.cooperation_note}</span>
      </div>
    </section>
  );
}
