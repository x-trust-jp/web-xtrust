import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "../policy.css";

export const metadata: Metadata = {
  title: "プライバシーポリシー | XTRUST",
  description: "エックストラスト株式会社のプライバシーポリシー。個人情報の収集・利用目的・第三者提供・デバイス上のデータの取扱いについて説明します。",
};

export default function PrivacyPage() {
  return (
    <main className="pol">
      <SiteHeader theme="light" overlay />

      <div className="pol__hero">
        <span className="pol__hero-label">Privacy Policy</span>
        <h1 className="pol__hero-title">プライバシーポリシー</h1>
        <p className="pol__hero-updated">制定日：2026年6月14日</p>
      </div>

      <div className="pol__body">
        <p className="pol__lead">
          エックストラスト株式会社（以下「当社」）は、お客様の個人情報の保護を重要な責務と認識し、
          適切な取扱いと保護に努めます。本ポリシーは、当社が提供するサービスを通じて取得する
          個人情報の収集・利用・管理に関する方針を定めるものです。
        </p>

        <div className="pol__section">
          <h2 className="pol__h2">1. 収集する個人情報</h2>
          <p className="pol__p">当社は、以下の場合に個人情報を収集します。</p>
          <h3 className="pol__h3">お問い合わせ・資料請求時</h3>
          <ul className="pol__ul">
            <li>氏名（姓・名）</li>
            <li>会社名・団体名</li>
            <li>勤務先メールアドレス</li>
            <li>電話番号</li>
            <li>部署名・役職</li>
            <li>お問い合わせ内容</li>
          </ul>
          <h3 className="pol__h3">サービス契約・ご利用時</h3>
          <ul className="pol__ul">
            <li>上記に加え、請求先住所・支払い情報等の契約締結に必要な情報</li>
            <li>導入担当者の連絡先情報</li>
          </ul>
        </div>

        <div className="pol__section">
          <h2 className="pol__h2">2. 個人情報の利用目的</h2>
          <p className="pol__p">収集した個人情報は、以下の目的のために利用します。</p>
          <ul className="pol__ul">
            <li>お問い合わせ・資料請求への対応</li>
            <li>サービスの提供および契約管理</li>
            <li>新サービス・アップデート情報のご案内（同意をいただいた場合）</li>
            <li>サポート・障害対応等のアフターサービス</li>
            <li>統計的分析によるサービス改善（個人を特定しない形で実施）</li>
            <li>法令に基づく義務の履行</li>
          </ul>
        </div>

        <div className="pol__section">
          <h2 className="pol__h2">3. 第三者への提供</h2>
          <p className="pol__p">
            当社は、以下の場合を除き、お客様の個人情報を第三者に提供・開示しません。
          </p>
          <ul className="pol__ul">
            <li>お客様ご本人の同意がある場合</li>
            <li>法令に基づき開示が求められる場合</li>
            <li>サービス提供のために必要な業務委託先（メール送信サービス等）への提供。
                この場合、委託先と守秘義務契約を締結したうえで、必要最小限の情報のみを提供します。</li>
          </ul>
        </div>

        <div className="pol__section">
          <h2 className="pol__h2">4. デバイス上のデータの取扱い</h2>
          <p className="pol__p">
            当社の提供するオフラインAI搭載デバイスは、通信機能を持ちません。
            デバイス上でAI処理されるデータ（文書・音声・画像等）は、
            デバイス外に送信されることは一切なく、当社がアクセスすることもありません。
          </p>
          <p className="pol__p">
            お客様がデバイス上で処理した機密情報は、お客様の管理下に置かれ続けます。
            当社のサポート対応においても、デバイス内部のデータへのアクセスは行いません。
          </p>
        </div>

        <div className="pol__section">
          <h2 className="pol__h2">5. Cookieおよびアクセス解析</h2>
          <p className="pol__p">
            当社のウェブサイトでは、サービス改善のためにアクセス解析ツールを使用することがあります。
            これらのツールはCookieを用いてアクセス情報を収集しますが、個人を特定する情報は含みません。
            ブラウザの設定によりCookieを無効にすることができますが、一部の機能が制限される場合があります。
          </p>
        </div>

        <div className="pol__section">
          <h2 className="pol__h2">6. 個人情報の管理・保管</h2>
          <p className="pol__p">
            当社は、個人情報への不正アクセス・紛失・破損・改ざん・漏洩等を防止するため、
            合理的な技術的・組織的安全管理措置を講じます。
            保有期間は利用目的達成後または契約終了後から5年間とし、期間経過後は適切に廃棄します。
          </p>
        </div>

        <div className="pol__section">
          <h2 className="pol__h2">7. 開示・訂正・削除等のご請求</h2>
          <p className="pol__p">
            お客様は、当社が保有する自己の個人情報について、開示・訂正・追加・削除・利用停止等を
            ご請求いただけます。ご本人確認のうえ、合理的な期間内に対応いたします。
            ご請求は下記の問い合わせ窓口までご連絡ください。
          </p>
        </div>

        <div className="pol__section">
          <h2 className="pol__h2">8. ポリシーの変更</h2>
          <p className="pol__p">
            本ポリシーは、法令の改正やサービス変更に伴い、予告なく変更することがあります。
            変更後のポリシーは本ページに掲載した時点より効力を生じるものとします。
            重要な変更の場合は、ウェブサイト上でお知らせします。
          </p>
        </div>

        <div className="pol__contact">
          <p className="pol__contact-title">個人情報に関するお問い合わせ窓口</p>
          <p>
            エックストラスト株式会社 個人情報担当<br />
            メール：<a href="mailto:matsumotokaya@gmail.com">matsumotokaya@gmail.com</a><br />
            受付時間：平日 10:00〜18:00（土日祝・年末年始を除く）
          </p>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
