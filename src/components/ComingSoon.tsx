import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./ComingSoon.css";

export function ComingSoon({ title }: { title: string }) {
  return (
    <>
      <main className="cs">
        <SiteHeader theme="dark" />
        <div className="cs__body">
          <p className="cs__eyebrow">XTRUST</p>
          <h1 className="cs__title">{title}</h1>
          <p className="cs__msg">
            このページは現在準備中です。
            <br />
            公開までいましばらくお待ちください。
          </p>
          <Link href="/" className="cs__back">
            トップへ戻る
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
