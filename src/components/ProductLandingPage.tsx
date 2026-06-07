import { SectionMap } from "@/components/SectionMap";
import { HomeProductSection } from "@/components/HomeProductSection";
import { HomeLifecycleSection } from "@/components/HomeLifecycleSection";
import { SiteFooter } from "@/components/SiteFooter";
import { S01Hero } from "@/components/sections/S01Hero";
import { S02Problem } from "@/components/sections/S02Problem";
import { S03Product } from "@/components/sections/S03Product";
import { S04Solution } from "@/components/sections/S04Solution";
import { S05BaseAbility } from "@/components/sections/S05BaseAbility";
import { S06UseCaseMeeting } from "@/components/sections/S06UseCaseMeeting";
import { S07UseCaseTranscribe } from "@/components/sections/S07UseCaseTranscribe";
import { S08UseCaseReview } from "@/components/sections/S08UseCaseReview";
import { S09UseCasePMIDD } from "@/components/sections/S09UseCasePMIDD";
import { S10UseCaseMaster } from "@/components/sections/S10UseCaseMaster";
import { S11Lifecycle } from "@/components/sections/S11Lifecycle";
import { S12Poc } from "@/components/sections/S12Poc";
import { S13FinalCta } from "@/components/sections/S13FinalCta";
import { S14Footer } from "@/components/sections/S14Footer";

export function ProductLandingPage({
  useOfficialHeroHeader = false,
  useAnimatedHeroCopy = false,
  showTopIntroSection = false,
  showTopCaseSection = false,
  showTopLifecycleSection = false,
  showTopFooter = false,
  topCaseSectionVariant = "teal",
  showLegacySections = true,
}: {
  useOfficialHeroHeader?: boolean;
  useAnimatedHeroCopy?: boolean;
  showTopIntroSection?: boolean;
  showTopCaseSection?: boolean;
  showTopLifecycleSection?: boolean;
  showTopFooter?: boolean;
  topCaseSectionVariant?: "teal" | "case-light";
  showLegacySections?: boolean;
}) {
  return (
    <>
      {showLegacySections ? <SectionMap /> : null}
      <S01Hero
        useOfficialHeader={useOfficialHeroHeader}
        useAnimatedCopy={useAnimatedHeroCopy}
      />
      {showTopIntroSection ? (
        <HomeProductSection
          variant="light"
          sectionId="home-product-light"
          titleId="home-product-light-title"
        />
      ) : null}
      {showTopCaseSection ? (
        <HomeProductSection
          variant={topCaseSectionVariant}
          sectionId="home-product-teal"
          titleId="home-product-teal-title"
        />
      ) : null}
      {showTopLifecycleSection ? <HomeLifecycleSection variant="dark" /> : null}
      {showTopFooter ? <SiteFooter /> : null}
      {showLegacySections ? (
        <>
          <S02Problem />
          <S03Product />
          <S04Solution />
          <S05BaseAbility />
          <S06UseCaseMeeting />
          <S07UseCaseTranscribe />
          <S08UseCaseReview />
          <S09UseCasePMIDD />
          <S10UseCaseMaster />
          <S11Lifecycle />
          <S12Poc />
          <S13FinalCta />
          <S14Footer />
        </>
      ) : null}
    </>
  );
}
