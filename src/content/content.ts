import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import type {
  Content,
  Section,
  HeroSection,
  ProblemSection,
  SolutionSection,
  ProductSection,
  CoreValueSection,
  UseCasesSection,
  HowItWorksSection,
  PricingSection,
  BetaOfferSection,
  FaqSection,
  FinalCtaSection,
  FooterSection,
} from "./types";

// content.yaml is the farm-managed source of truth, synced one-way into
// the repo. It is read once at build time (server-side) and shared.
const file = path.join(process.cwd(), "src/content/content.yaml");
const raw = fs.readFileSync(file, "utf8");

export const content = yaml.load(raw) as Content;

// Typed lookups by section id. Throws at build time if the source of
// truth drops a section the site expects, so drift is caught early.
function section<T extends Section>(id: T["id"]): T {
  const found = content.sections.find((s) => s.id === id);
  if (!found) {
    throw new Error(`content.yaml: section "${id}" not found`);
  }
  return found as T;
}

export const brand = content.brand;
export const cta = content.cta;

export const hero = section<HeroSection>("hero");
export const problem1 = section<ProblemSection>("problem_1");
export const problem2 = section<ProblemSection>("problem_2");
export const problem3 = section<ProblemSection>("problem_3");
export const solution = section<SolutionSection>("solution");
export const product = section<ProductSection>("product");
export const coreValue = section<CoreValueSection>("core_value");
export const useCases = section<UseCasesSection>("use_cases");
export const howItWorks = section<HowItWorksSection>("how_it_works");
export const pricing = section<PricingSection>("pricing");
export const betaOffer = section<BetaOfferSection>("beta_offer");
export const faq = section<FaqSection>("faq");
export const finalCta = section<FinalCtaSection>("final_cta");
export const footer = section<FooterSection>("footer");
