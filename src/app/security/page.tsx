import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "../policy.css";

export const metadata: Metadata = {
  title: "情報セキュリティ方針 | XTRUST",
  description: "エックストラスト株式会社の情報セキュリティ方針。オフラインAIサービスにおける情報管理・セキュリティへの取り組みをご確認ください。",
};

export default function SecurityPage() {
  return (
    <main className="pol">
      <SiteHeader theme="light" overlay />

      <div className="pol__hero">
        <span className="pol__hero-label">Information Security Policy</span>
        <h1 className="pol__hero-title">情報セキュリティ方針</h1>
        <p className="pol__hero-updated">制定日：2026年6月14日</p>
      </div>

      <div className="pol__body">
        <p className="pol__lead">
          エックストラスト株式会社（以下「当社」）は、「通信機能ゼロのローカルAIで、
          あらゆる機密業務にゼロリスク環境を」というミッションのもと、
          情報セキュリティを事業の根幹と位置付けています。
          本方針は、当社が情報資産を適切に保護するための基本的な考え方と実践指針を定めます。
        </p>

        <div className="pol__section">
          <h2 className="pol__h2">1. 基本方針</h2>
          <p className="pol__p">
            当社は以下の原則に基づき情報セキュリティに取り組みます。
          </p>
          <ul className="pol__ul">
            <li>
              <strong>機密性（Confidentiality）</strong>：
              顧客情報および社内情報への不正アクセスを防止し、権限のある者のみがアクセスできる環境を維持します。
            </li>
            <li>
              <strong>完全性（Integrity）</strong>：
              情報の正確性・完全性を確保し、不正な改ざんや消失を防止します。
            </li>
            <li>
              <strong>可用性（Availability）</strong>：
              必要なときに必要な情報にアクセスできるよう、システムの安定稼働を維持します。
            </li>
          </ul>
        </div>

        <div className="pol__section">
          <h2 className="pol__h2">2. 適用範囲</h2>
          <p className="pol__p">本方針は、以下の範囲に適用されます。</p>
          <ul className="pol__ul">
            <li>当社の全役員・従業員・契約社員・業務委託先</li>
            <li>当社が保有・管理する情報資産（デジタル・物理を含む）</li>
            <li>当社が提供するXTRUSTオフラインAIサービスに関わるシステム・データ</li>
          </ul>
        </div>

        <div className="pol__section">
          <h2 className="pol__h2">3. オフラインAIアーキテクチャによるセキュリティ</h2>
          <p className="pol__p">
            当社のコアプロダクトは「通信機能ゼロ」の設計を採用しています。
            これにより、以下のセキュリティ上の利点が構造的に保証されます。
          </p>
          <ul className="pol__ul">
            <li>AI処理中のデータはデバイス外に一切送信されない（通信経路での漏洩リスクがゼロ）</li>
            <li>クラウドサーバーへのデータ蓄積が発生しない（サーバー側の侵害リスクがゼロ）</li>
            <li>インターネット非接続環境での運用が可能（外部攻撃面の最小化）</li>
            <li>サードパーティAIサービスへのデータ提供が構造的に不可能</li>
          </ul>
        </div>

        <div className="pol__section">
          <h2 className="pol__h2">4. 技術的セキュリティ対策</h2>
          <h3 className="pol__h3">デバイスセキュリティ</h3>
          <ul className="pol__ul">
            <li>ストレージの暗号化（フルディスク暗号化）</li>
            <li>セキュアブートおよびTPMによるデバイス認証</li>
            <li>BIOSレベルでの通信モジュール無効化</li>
            <li>定期的なファームウェア・OSのセキュリティアップデート（オフライン適用）</li>
          </ul>
          <h3 className="pol__h3">アクセス管理</h3>
          <ul className="pol__ul">
            <li>最小権限の原則に基づくアクセス制御</li>
            <li>多要素認証（MFA）の採用</li>
            <li>アクセスログの記録・定期監査</li>
          </ul>
          <h3 className="pol__h3">社内システム</h3>
          <ul className="pol__ul">
            <li>業務システムへのVPN接続の義務化</li>
            <li>エンドポイントセキュリティソフトの導入</li>
            <li>定期的な脆弱性スキャンとパッチ適用</li>
          </ul>
        </div>

        <div className="pol__section">
          <h2 className="pol__h2">5. 物理的セキュリティ対策</h2>
          <ul className="pol__ul">
            <li>重要設備・書類への入退室管理と施錠管理</li>
            <li>不要になった記録媒体・書類の適切な廃棄（物理破砕・専門業者委託）</li>
            <li>デバイスの盗難・紛失に備えたリモートワイプ対応（管理ツール経由）</li>
          </ul>
        </div>

        <div className="pol__section">
          <h2 className="pol__h2">6. 人的セキュリティ対策</h2>
          <ul className="pol__ul">
            <li>全従業員・業務委託先への情報セキュリティ教育の実施（入社時・定期）</li>
            <li>情報の持ち出しルール・クリアデスクポリシーの遵守</li>
            <li>守秘義務契約の締結（従業員・委託先）</li>
            <li>不審なメール・フィッシング対策訓練の定期実施</li>
          </ul>
        </div>

        <div className="pol__section">
          <h2 className="pol__h2">7. インシデント対応</h2>
          <p className="pol__p">
            情報セキュリティインシデントが発生または発覚した場合、以下の手順で対応します。
          </p>
          <ul className="pol__ul">
            <li>発見者による速やかな報告（社内窓口または管理者へ即時連絡）</li>
            <li>被害範囲の特定と拡大防止措置の実施</li>
            <li>法令に基づく個人情報保護委員会・関係当局への報告（必要な場合）</li>
            <li>影響を受けるお客様への通知</li>
            <li>原因分析・再発防止策の策定と実施</li>
          </ul>
        </div>

        <div className="pol__section">
          <h2 className="pol__h2">8. 継続的改善</h2>
          <p className="pol__p">
            当社は、情報セキュリティに関する技術・脅威の変化に対応するため、
            本方針および関連する規程・手順書を定期的に見直します。
            内部監査および外部審査を通じてセキュリティレベルの向上を継続します。
          </p>
        </div>

        <div className="pol__contact">
          <p className="pol__contact-title">情報セキュリティに関するお問い合わせ</p>
          <p>
            エックストラスト株式会社 情報セキュリティ担当<br />
            メール：<a href="mailto:matsumotokaya@gmail.com">matsumotokaya@gmail.com</a><br />
            セキュリティ上の懸念や脆弱性の報告も上記窓口にてお受けします。
          </p>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
