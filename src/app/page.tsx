import { SectionMap } from "@/components/SectionMap";
import { Hero } from "@/components/sections/Hero";
import { Problem1 } from "@/components/sections/Problem1";
import { Problem2 } from "@/components/sections/Problem2";
import { Problem3 } from "@/components/sections/Problem3";
import { Solution } from "@/components/sections/Solution";
import { Product } from "@/components/sections/Product";
import { CoreValue } from "@/components/sections/CoreValue";
import { UseCases } from "@/components/sections/UseCases";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { BetaOffer } from "@/components/sections/BetaOffer";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { useCases } from "@/content/content";

export default function Home() {
  return (
    <>
      <SectionMap />
      <Hero />
      <Problem1 />
      <Problem2 />
      <Problem3 />
      <Solution />
      <Product />
      <CoreValue />
      <UseCases data={useCases} />
      <HowItWorks />
      <Pricing />
      <BetaOffer />
      <Faq />
      <FinalCta />
      <Footer />
    </>
  );
}
