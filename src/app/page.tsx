import Link from "next/link";
import { Logo } from "@/components/Logo";
import { SiteFooter } from "@/components/SiteFooter";
import "./home.css";

export default function Home() {
  return (
    <>
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
      </header>

      <div className="home__copy">
        <h1 className="home__headline">
          ローカルで、
          <br />
          オフラインな AI。
        </h1>
        <p className="home__sub">
          高機密データを、1バイトも外部に漏らすことなく、
          <br />
          AI で処理することが可能に。
          <br />
          これまで諦めていた現場の AIX が、いよいよ始まります。
        </p>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
