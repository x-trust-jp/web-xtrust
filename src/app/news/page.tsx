import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./news.css";

export const metadata: Metadata = {
  title: "ニュース | XTRUST",
  description: "エックストラスト株式会社のニュース・お知らせ一覧。",
};

const ARTICLES = [
  {
    slug: "xtrust-ai-beta",
    title: "ローカルLLMで稼働するAI議事録アプリケーション XTRUST AI、ベータバージョンの公開を開始",
    excerpt: "オフライン環境で動作するAI議事録アプリケーション「XTRUST AI」のベータ版を本日より一部ユーザー向けに公開します。",
    date: "2026年6月13日",
    tag: "プロダクト",
    thumb: "/images/news-xtrust-ai-beta.png",
  },
  {
    slug: "concept-video",
    title: "XTRUSTの製品・サービスを解説するコンセプト動画を公開",
    excerpt: "XTRUSTのビジョンと製品の仕組みをわかりやすく伝えるコンセプトムービーを公式チャンネルにて公開しました。",
    date: "2026年5月20日",
    tag: "お知らせ",
    thumb: "/images/concept-banner.jpg",
  },
];

export default function NewsPage() {
  return (
    <main className="nw">
      <SiteHeader theme="light" overlay />

      <div className="nw__hero">
        <span className="nw__hero-label">News</span>
        <h1 className="nw__hero-title">ニュース</h1>
      </div>

      <div className="nw__list">
        {ARTICLES.map((a) => (
          <Link key={a.slug} href={`/news/${a.slug}`} className="nw__card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={a.thumb} alt={a.title} className="nw__card-thumb" />
            <div className="nw__card-body">
              <div className="nw__card-meta">
                <span className="nw__card-tag">{a.tag}</span>
                <span className="nw__card-date">{a.date}</span>
              </div>
              <p className="nw__card-title">{a.title}</p>
              <p className="nw__card-excerpt">{a.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>

      <SiteFooter />
    </main>
  );
}
