import { HomeHeroCopy } from "@/components/HomeHeroCopy";
import { HomeLifecycleSection } from "@/components/HomeLifecycleSection";
import { HomeProductSection } from "@/components/HomeProductSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "@/app/home.css";

export function ProductPageV2() {
  return (
    <>
      <main>
        <section className="home">
          <div className="home__bg" aria-hidden="true" />

          <SiteHeader overlay theme="light" />

          <div className="home__hero">
            <HomeHeroCopy />
          </div>
        </section>

        <HomeProductSection
          variant="light"
          sectionId="home-product-light"
          titleId="home-product-light-title"
        />
        <HomeProductSection
          sectionId="home-product-teal"
          titleId="home-product-teal-title"
        />
        <HomeLifecycleSection />
      </main>
      <SiteFooter />
    </>
  );
}
