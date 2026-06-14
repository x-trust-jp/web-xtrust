import Link from "next/link";
import { HomeMobileMenu } from "@/components/HomeMobileMenu";
import { Logo } from "@/components/Logo";
import "./SiteHeader.css";

export function SiteHeader({
  overlay = false,
  theme = "dark",
  productOverviewHref = "/#home-product-light",
}: {
  overlay?: boolean;
  theme?: "light" | "dark";
  productOverviewHref?: string;
}) {
  return (
    <header
      className={`home__header home__header--${theme}${overlay ? "" : " siteHeader--stacked"}`}
    >
      <Link href="/" className="home__logo" aria-label="XTRUST">
        <Logo fill={theme === "dark" ? "#14131a" : "#ffffff"} />
      </Link>
      <nav className="home__nav" aria-label="Primary">
        <Link href={productOverviewHref}>製品概要</Link>
        <Link href="/about">会社概要</Link>
        <Link href="/download">資料請求</Link>
        <Link href="/contact" className="home__nav-cta">
          お問い合わせ
        </Link>
      </nav>
      <div className="home__menu">
        <HomeMobileMenu theme={theme} productOverviewHref={productOverviewHref} />
      </div>
    </header>
  );
}
