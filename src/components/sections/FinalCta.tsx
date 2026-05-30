import { finalCta, cta } from "@/content/content";
import { Cta } from "@/components/Cta";

// 13 — Final CTA (dark).
export function FinalCta() {
  return (
    <section className="finalcta" id="sec-final_cta" data-screen-label="13 Final CTA">
      <h2 className="h-jp">{finalCta.headline}</h2>
      <div className="cta-row">
        <Cta label={cta.primary.label} action={cta.primary.action} variant="primary" />
        <Cta label="営業資料をダウンロード" action="download_deck" variant="ghost" />
        <Cta label="30分の商談で相談する" action="book_meeting" variant="ghost" />
      </div>
      <p className="micro">XTRUST — Offline AI for zero-risk AX</p>
    </section>
  );
}
