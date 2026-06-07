import Link from "next/link";
import { Logo } from "@/components/Logo";

export function TopHeader() {
  return (
    <header className="topbar">
      <Link href="/" className="logo" aria-label="XTRUST">
        <Logo fill="#ffffff" />
      </Link>
      <nav className="nav" aria-label="Primary">
        <Link href="/#home-product-light">製品概要</Link>
        <Link href="/about">会社概要</Link>
        <Link href="/download" className="btn btn-ghost topbar-btn">
          資料請求
        </Link>
        <a href="/product#sec-13" className="btn btn-primary topbar-btn">
          お問い合わせ
        </a>
      </nav>
    </header>
  );
}
