import Link from "next/link";
import { HomeHeroCopy } from "@/components/HomeHeroCopy";
import { HomeLifecycleSection } from "@/components/HomeLifecycleSection";
import { HomeMobileMenu } from "@/components/HomeMobileMenu";
import { HomeProductSection } from "@/components/HomeProductSection";
import { Logo } from "@/components/Logo";
import { SiteFooter } from "@/components/SiteFooter";
import "./home.css";

export default function Home() {
  return (
    <>
      <main>
        <section className="home">
          <div className="home__bg" aria-hidden="true" />

          <header className="home__header">
            <Link href="/" className="home__logo" aria-label="XTRUST">
              <Logo fill="#ffffff" />
            </Link>
            <nav className="home__nav" aria-label="Primary">
              <Link href="/product">製品概要</Link>
              <Link href="/about">会社概要</Link>
              <Link href="/download">資料請求</Link>
              <a href="/product#sec-13" className="home__nav-cta">
                お問い合わせ
              </a>
            </nav>
            <div className="home__menu">
              <HomeMobileMenu />
            </div>
          </header>

          <HomeHeroCopy />
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
