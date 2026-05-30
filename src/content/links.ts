import type { CtaAction } from "./types";

// v1 CTA destinations — link/stub placeholders.
// The beta-signup form backend and the booking URL are undecided
// (content.yaml: legal_entity / farm-014). Swap these in one place
// once the real destinations are confirmed.
export const ctaHref: Record<CtaAction, string> = {
  // TODO(farm-014): replace with the real beta-signup form once the
  // operating entity / form method is decided. Stubbed to the beta section.
  beta_signup: "#sec-beta_offer",
  // Static sales deck shipped under /public/downloads.
  download_deck: "/downloads/xtrust-sales-deck.pdf",
  // TODO: replace with the real booking URL (Calendly / TimeRex / etc.).
  book_meeting: "#sec-final_cta",
};

// download_deck opens the PDF in a new tab; others are in-page for now.
export function ctaTarget(action: CtaAction): string | undefined {
  return action === "download_deck" ? "_blank" : undefined;
}
