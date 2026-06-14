import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "../policy.css";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | XTRUST",
  description: "エックストラスト株式会社の特定商取引法に基づく表記。",
};

export default function LegalPage() {
  return (
    <main className="pol">
      <SiteHeader theme="light" overlay />

      <div className="pol__hero">
        <span className="pol__hero-label">Specified Commercial Transactions Act</span>
        <h1 className="pol__hero-title">特定商取引法に<br />基づく表記</h1>
        <p className="pol__hero-updated">更新日：2026年6月14日</p>
      </div>

      <div className="pol__body">
        <p className="pol__lead">
          特定商取引に関する法律第11条に基づき、以下のとおり表記します。
          現在、一部の情報は登記手続き・準備中のため順次更新予定です。
        </p>

        <div className="pol__section">
          <table className="pol__table">
            <tbody>
              <tr>
                <th>販売業者</th>
                <td>エックストラスト株式会社</td>
              </tr>
              <tr>
                <th>運営責任者</th>
                <td><span className="pol__placeholder">登記手続き完了後に掲載します</span></td>
              </tr>
              <tr>
                <th>所在地</th>
                <td><span className="pol__placeholder">登記手続き完了後に掲載します</span></td>
              </tr>
              <tr>
                <th>電話番号</th>
                <td>
                  <span className="pol__placeholder">準備中</span>
                  <br />
                  <small>お問い合わせは下記メールアドレスにてお受けしています</small>
                </td>
              </tr>
              <tr>
                <th>メールアドレス</th>
                <td>matsumotokaya@gmail.com</td>
              </tr>
              <tr>
                <th>サービス内容</th>
                <td>オフラインAI搭載デバイスのレンタルサービスおよびこれに付随するサポートサービス</td>
              </tr>
              <tr>
                <th>販売価格</th>
                <td>各プランのご契約時に個別にお見積もりをご提示します（税込）</td>
              </tr>
              <tr>
                <th>支払い方法</th>
                <td>銀行振込（請求書払い）<br /><span className="pol__placeholder">詳細は契約時にご案内します</span></td>
              </tr>
              <tr>
                <th>支払い時期</th>
                <td>当社発行の請求書に記載の期日までにお支払いください</td>
              </tr>
              <tr>
                <th>サービス開始時期</th>
                <td>契約成立・初期設定完了後、デバイス納品をもってサービスを開始します</td>
              </tr>
              <tr>
                <th>返品・キャンセル</th>
                <td>
                  デバイスの初期不良については、納品後7日以内にご連絡いただいた場合に限り交換対応します。
                  ご契約のキャンセルは、契約書記載の解約条件に従います。
                  お客様都合によるキャンセルの場合、違約金が発生することがあります。
                </td>
              </tr>
              <tr>
                <th>動作環境</th>
                <td>
                  デバイスはオフライン専用（インターネット接続不可）です。
                  使用にあたってのシステム要件は個別にご案内します。
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pol__contact">
          <p className="pol__contact-title">本表記に関するお問い合わせ</p>
          <p>
            エックストラスト株式会社<br />
            メール：<a href="mailto:matsumotokaya@gmail.com">matsumotokaya@gmail.com</a><br />
            ご不明な点がございましたらお気軽にご連絡ください。
          </p>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
