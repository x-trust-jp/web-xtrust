import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "../news.css";

export const metadata: Metadata = {
  title: "XTRUST AI ベータ版公開開始 | ニュース | XTRUST",
  description:
    "ローカルLLMで稼働するAI議事録アプリケーション「XTRUST AI」のベータバージョン公開のお知らせ。",
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
          <span className="nw-art__tag">プロダクト</span>
          <span className="nw-art__date">2026年6月13日</span>
        </div>
        <h1 className="nw-art__title">
          ローカルLLMで稼働するAI議事録アプリケーション<br />
          XTRUST AI、ベータバージョンの公開を開始
        </h1>
      </div>

      <div className="nw-art__body">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/news-xtrust-ai-beta.png"
          alt="XTRUST AI ベータ版 スクリーンショット"
          className="nw-art__thumb"
        />

        <p>
          エックストラスト株式会社は本日、通信機能を持たないオフライン環境で動作するAI議事録アプリケーション
          「XTRUST AI」のベータバージョンを、一部の法人ユーザー向けに公開を開始しました。
        </p>

        <h2>XTRUST AIとは</h2>
        <p>
          XTRUST AIは、ローカルLLM（Large Language Model）を搭載したXTRUSTデバイス上でのみ動作する
          AI議事録アプリケーションです。音声の録音・文字起こし・要約・翻訳のすべてをデバイス内で完結し、
          インターネット接続や外部サーバーへのデータ送信を一切行いません。
        </p>
        <p>
          これにより、機密情報を含む経営会議・取締役会・M&amp;Aデューデリジェンスの打ち合わせ・
          医療カンファレンスなど、これまでAI録音が困難だった場面でも、安心してご利用いただけます。
        </p>

        <h2>ベータ版の主な機能</h2>
        <ul>
          <li>リアルタイム音声録音・文字起こし（日本語・英語対応）</li>
          <li>AIによる議事録の自動生成（要点・決定事項・アクションアイテムを抽出）</li>
          <li>多言語翻訳（日本語↔英語）</li>
          <li>話者分離（複数名の発言を自動で区別）</li>
          <li>議事録のエクスポート（PDF・テキスト形式）</li>
          <li>完全オフライン動作・通信ゼロ</li>
        </ul>

        <h2>ベータ参加について</h2>
        <p>
          現在、ベータ版の利用は招待制となっております。
          ご興味をお持ちの企業様は、お問い合わせフォームよりご連絡ください。
          担当者より詳細をご案内いたします。
        </p>
        <p>
          正式リリース版では、さらに多くの言語への対応・議事録テンプレートのカスタマイズ機能・
          社内Wikiとの連携機能などを予定しております。
        </p>

        <h2>動作環境</h2>
        <p>
          XTRUST AIはXTRUSTデバイス（オフラインAI搭載ノートPC）専用のアプリケーションです。
          XTRUSTデバイス以外の環境では動作いたしません。
          デバイスのレンタルについては、資料請求またはお問い合わせよりご確認ください。
        </p>

        <div className="nw-art__cta">
          <p className="nw-art__cta-text">
            ベータ版のご利用・XTRUSTデバイスのご相談はお気軽に
          </p>
          <Link href="/contact" className="nw-art__cta-btn">
            お問い合わせ
          </Link>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
