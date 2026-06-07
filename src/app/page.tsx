import "./home.css";
import { ProductLandingPage } from "@/components/ProductLandingPage";

export default function Home() {
  return (
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
  );
}
