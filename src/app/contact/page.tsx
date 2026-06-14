import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "../download/download.css";
import "./contact.css";

export const metadata: Metadata = {
  title: "お問い合わせ | XTRUST",
  description:
    "XTRUSTへのお問い合わせページ。製品・POCのご相談、メディア取材、投資家IRのお問い合わせはこちらから。",
};

export default function ContactPage() {
  return (
    <main className="dl">
      <SiteHeader theme="dark" />

      <div className="dl__container">
        {/* Left: contact info */}
        <section className="dl__left">
          <span className="dl__badge">お問い合わせ</span>
          <h1 className="dl__title">
            お気軽に
            <br />
            ご相談ください
          </h1>
          <p className="dl__lead">
            製品のご質問からPOCのご相談まで、どんなことでもお受けしております。
            <br />
            メディア取材・投資家の方からのお問い合わせもこちらからどうぞ。
          </p>

          <div className="ct__categories">
            <div className="ct__category">
              <div className="ct__category-icon">🏢</div>
              <div className="ct__category-body">
                <p className="ct__category-title">製品・POCのご相談</p>
                <p className="ct__category-desc">
                  XTRUSTの導入をご検討中の企業様、概念実証（POC）のご相談など、
                  お気軽にご連絡ください。
                </p>
              </div>
            </div>

            <div className="ct__category">
              <div className="ct__category-icon">📰</div>
              <div className="ct__category-body">
                <p className="ct__category-title">取材・メディアのお問い合わせ</p>
                <p className="ct__category-desc">
                  報道機関・メディアの方からの取材依頼、インタビューのお申し込みはこちらから。
                </p>
              </div>
            </div>

            <div className="ct__category">
              <div className="ct__category-icon">📈</div>
              <div className="ct__category-body">
                <p className="ct__category-title">投資家・IRのお問い合わせ</p>
                <p className="ct__category-desc">
                  株式・資本政策・IR全般に関するご質問は、担当部門へお繋ぎいたします。
                </p>
              </div>
            </div>
          </div>

          <p className="ct__response-note">
            担当者より通常2営業日以内にご返信いたします。<br />
            お急ぎの場合はその旨をお問い合わせ内容にご記載ください。
          </p>
        </section>

        {/* Right: contact form */}
        <section className="dl__right">
          <ContactForm />
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
