import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "../news.css";

export const metadata: Metadata = {
  title: "コンセプト動画公開 | ニュース | XTRUST",
  description:
    "XTRUSTの製品・サービスを解説するコンセプトムービーを公式チャンネルにて公開しました。",
};

export default function ArticlePage() {
  return (
    <main className="nw-art">
      <SiteHeader theme="light" overlay />

      <div className="nw-art__header">
        <Link href="/news" className="nw-art__back">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          ニュース一覧に戻る
        </Link>
        <div className="nw-art__meta">
          <span className="nw-art__tag">お知らせ</span>
          <span className="nw-art__date">2026年5月20日</span>
        </div>
        <h1 className="nw-art__title">
          XTRUSTの製品・サービスを解説する<br />
          コンセプト動画を公開
        </h1>
      </div>

      <div className="nw-art__body">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/concept-banner.jpg"
          alt="XTRUSTコンセプトムービー サムネイル"
          className="nw-art__thumb"
        />

        <p>
          エックストラスト株式会社は本日、XTRUSTの製品コンセプトと機密業務における
          ローカルAIの活用イメージをまとめたコンセプトムービーを公開しました。
        </p>

        <h2>動画の内容</h2>
        <p>
          本動画では、クラウドAIやネットワーク接続型AIを業務に使いたくても
          「機密漏洩のリスク」で踏み出せない現場の課題と、
          XTRUSTが提供する「通信機能ゼロのオフラインAI」というアプローチを約2分でご紹介しています。
        </p>
        <ul>
          <li>なぜ機密業務にクラウドAIを使えないのか</li>
          <li>XTRUSTのデバイス構成と「データが外に出ない」仕組み</li>
          <li>契約・財務・人事・医療・M&amp;A等での想定ユースケース</li>
          <li>PoC（概念実証）からの導入プロセス</li>
        </ul>

        <h2>視聴方法</h2>
        <p>
          動画は当社の公式YouTubeチャンネルおよびウェブサイトのトップページ・会社概要ページにて
          ご覧いただけます。ご関心のある方はぜひご視聴ください。
        </p>

        <h2>今後の予定</h2>
        <p>
          今後は業種別・ユースケース別の詳細解説動画の公開を予定しております。
          更新情報は公式SNSアカウントでもお知らせします。
        </p>

        <div className="nw-art__cta">
          <p className="nw-art__cta-text">
            製品についてのご相談・資料請求はこちら
          </p>
          <Link href="/download" className="nw-art__cta-btn">
            資料請求
          </Link>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
