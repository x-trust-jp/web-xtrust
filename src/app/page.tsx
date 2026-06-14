import "./home.css";
import { ProductLandingPage } from "@/components/ProductLandingPage";
import { ConceptVideoBanner } from "@/components/ConceptVideoBanner";
import { FloatingMenuButton } from "@/components/FloatingMenuButton";

export default function Home() {
  return (
    <>
      <ProductLandingPage
        useOfficialHeroHeader
        useAnimatedHeroCopy
        showTopIntroSection
        showTopCaseSection
        showTopLifecycleSection
        showTopFooter
        topCaseSectionVariant="case-light"
        showLegacySections={false}
      />
      <ConceptVideoBanner />
      <FloatingMenuButton productOverviewHref="/#home-product-light" />
    </>
  );
}
