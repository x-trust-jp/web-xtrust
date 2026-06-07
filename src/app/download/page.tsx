import type { Metadata } from "next";
import { Logo } from "@/components/Logo";
import { RequestForm } from "./RequestForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./download.css";

export const metadata: Metadata = {
  title: "資料請求 | XTRUST",
  description:
    "XTRUST サービス紹介資料の請求フォーム。ローカル×オフラインAIで機密業務を安全に処理する仕組み・ユースケース・レンタルプランをまとめた資料を無料でお送りします。",
};

export default function DownloadPage() {
  return (
    <main className="dl">
      <SiteHeader theme="dark" />

      <div className="dl__container">
        {/* Left: material info */}
        <section className="dl__left">
          <span className="dl__badge">お役立ち資料</span>
          <h1 className="dl__title">
            XTRUST サービス紹介資料
          </h1>
          <p className="dl__lead">
            ローカル×オフラインAIで、機密業務を安全に。
            <br />
            通信機能0のローカルAI搭載ノートPCレンタルの全体像をまとめました。
          </p>

          <div className="dl__thumb" aria-hidden="true">
            <Logo fill="#ffffff" />
            <span>SERVICE INTRODUCTION</span>
          </div>

          <div className="dl__points">
            <h2>この資料でわかること</h2>
            <ul>
              <li>XTRUSTの製品概要と、ローカル・オフラインAIの仕組み</li>
              <li>契約・財務・人事・医療・監査・研究開発・投資判断での想定ユースケース</li>
              <li>デバイスレンタルのプランと料金の概要</li>
              <li>導入時のセキュリティ要件とサポート体制</li>
            </ul>
          </div>

          <p className="dl__desc">
            高機密データを1バイトも外部に漏らすことなくAIで処理する——
            これまで諦めていた現場のAI活用をどう実現するか、検討に必要な情報を1冊にまとめています。
          </p>
        </section>

        {/* Right: request form */}
        <section className="dl__right">
          <RequestForm />
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
