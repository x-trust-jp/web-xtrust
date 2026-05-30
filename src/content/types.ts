// Types describing the fields the web implementation consumes from
// content.yaml (the farm-managed source of truth). The YAML carries
// additional governance metadata (grounding, status, notes) that the
// site does not render; those are typed loosely on purpose.

export type CtaAction =
  | "beta_signup"
  | "download_deck"
  | "book_meeting";

export interface CtaPrimary {
  label: string;
  action: CtaAction;
}

export interface CtaSecondary {
  label: string;
  action: CtaAction;
}

export interface CtaConfig {
  primary: CtaPrimary;
  secondary: CtaSecondary[];
}

export interface Brand {
  name: string;
  product_category: string;
  target_audience: string;
}

export interface HeroSection {
  id: "hero";
  name: string;
  eyebrow: string;
  headline: string;
  subhead: string;
  cta: string[];
  visual_hint?: string;
}

export interface ProblemSection {
  id: "problem_1" | "problem_2" | "problem_3";
  name: string;
  headline: string;
  body?: string;
  bullets?: string[];
  closing?: string;
  cards?: { title: string; body: string }[];
  visual_hint?: string;
}

export interface SolutionSection {
  id: "solution";
  name: string;
  headline: string;
  body: string;
  visual_hint?: string;
}

export interface ProductSection {
  id: "product";
  name: string;
  headline: string;
  body: string;
  bullets: string[];
  visual_hint?: string;
}

export interface CoreValueSection {
  id: "core_value";
  name: string;
  headline: string;
  body: string;
  visual_hint?: string;
}

export interface UseCaseItem {
  id: string;
  title: string;
  body: string;
  guard?: string;
  note?: string;
}

export interface UseCasesSection {
  id: "use_cases";
  name: string;
  headline: string;
  layout_hint?: string;
  items: UseCaseItem[];
}

export interface HowItWorksSection {
  id: "how_it_works";
  name: string;
  headline: string;
  steps: string[];
  visual_hint?: string;
}

export interface PricingPlan {
  base_monthly: string;
  initial_fee: string;
  min_term: string;
  options: string[];
  includes: string[];
  note?: string;
}

export interface PricingSection {
  id: "pricing";
  name: string;
  headline: string;
  plan: PricingPlan;
  visual_hint?: string;
}

export interface BetaOfferSection {
  id: "beta_offer";
  name: string;
  headline: string;
  full_access_copy: string;
  full_access_list: string[];
  cooperation_note: string;
  cta: string[];
  current_soil_offer?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqSection {
  id: "faq";
  name: string;
  items: FaqItem[];
  note?: string;
}

export interface FinalCtaSection {
  id: "final_cta";
  name: string;
  headline: string;
  cta: string[];
}

export interface FooterSection {
  id: "footer";
  name: string;
  items: string[];
  note?: string;
}

export type Section =
  | HeroSection
  | ProblemSection
  | SolutionSection
  | ProductSection
  | CoreValueSection
  | UseCasesSection
  | HowItWorksSection
  | PricingSection
  | BetaOfferSection
  | FaqSection
  | FinalCtaSection
  | FooterSection;

export interface Content {
  brand: Brand;
  cta: CtaConfig;
  sections: Section[];
}
