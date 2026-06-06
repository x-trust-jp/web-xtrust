import "./home.css";
import { ProductLandingPage } from "@/components/ProductLandingPage";

export default function Home() {
  return (
    <ProductLandingPage
      showTopIntroSection
      showTopCaseSection
      showTopLifecycleSection
      showTopFooter
      topCaseSectionVariant="case-light"
      showLegacySections={false}
    />
  );
}
