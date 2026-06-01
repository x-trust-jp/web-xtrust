import Link from "next/link";
import { Logo } from "@/components/Logo";
import "./ComingSoon.css";

export function ComingSoon({ title }: { title: string }) {
  return (
    <main className="cs">
      <header className="cs__header">
        <Link href="/" aria-label="XTRUST">
          <Logo fill="#ffffff" />
        </Link>
      </header>
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
  );
}
