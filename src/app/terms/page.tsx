import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "../policy.css";

export const metadata: Metadata = {
  title: "利用規約 | XTRUST",
  description: "エックストラスト株式会社のサービス利用規約。XTRUSTオフラインAI搭載デバイスレンタルサービスのご利用条件をご確認ください。",
};

export default function TermsPage() {
  return (
    <main className="pol">
      <SiteHeader theme="light" overlay />

      <div className="pol__hero">
        <span className="pol__hero-label">Terms of Service</span>
        <h1 className="pol__hero-title">利用規約</h1>
        <p className="pol__hero-updated">制定日：2026年6月14日</p>
      </div>

      <div className="pol__body">
        <p className="pol__lead">
          本規約は、エックストラスト株式会社（以下「当社」）が提供するオフラインAI搭載デバイスレンタルサービス
          「XTRUST」（以下「本サービス」）の利用条件を定めるものです。
          本サービスをご利用いただくことにより、本規約に同意いただいたものとみなします。
        </p>

        <div className="pol__section">
          <h2 className="pol__h2">第1条（定義）</h2>
          <ul className="pol__ul">
            <li>「本サービス」とは、当社が提供するオフラインAI搭載デバイスのレンタルおよびこれに付随するサポートサービスを指します。</li>
            <li>「お客様」とは、本規約に同意のうえ本サービスを利用する法人または個人を指します。</li>
            <li>「デバイス」とは、当社がレンタル提供するオフラインAI搭載ノートPC等の機器を指します。</li>
            <li>「オフラインAI」とは、ネットワーク接続を必要とせずデバイス内で完結するAI処理機能を指します。</li>
          </ul>
        </div>

        <div className="pol__section">
          <h2 className="pol__h2">第2条（サービスの内容）</h2>
          <p className="pol__p">
            当社は、お客様に対してオフラインAIを搭載したデバイスを一定期間レンタルし、
            その利用に必要な初期設定・技術サポートを提供します。
            デバイスのAI処理はすべてローカルで完結し、インターネット通信を行いません。
          </p>
        </div>

        <div className="pol__section">
          <h2 className="pol__h2">第3条（利用申込みと契約成立）</h2>
          <p className="pol__p">
            本サービスのご利用は、当社所定の申込みフォームまたは書面による申込みをもって開始します。
            当社が申込みを承諾した時点で契約が成立します。当社は、以下の場合に申込みをお断りすることがあります。
          </p>
          <ul className="pol__ul">
            <li>申込み情報に虚偽・誤記があった場合</li>
            <li>過去に本規約違反があった場合</li>
            <li>反社会的勢力に該当すると判断した場合</li>
            <li>その他、当社が不適切と判断した場合</li>
          </ul>
        </div>

        <div className="pol__section">
          <h2 className="pol__h2">第4条（利用料金・支払い）</h2>
          <p className="pol__p">
            利用料金は、当社が別途提示する料金プランに従います。
            お客様は、当社の指定する期日までに指定の方法でお支払いください。
            支払い遅延が生じた場合、年率14.6%の遅延損害金が発生します。
          </p>
        </div>

        <div className="pol__section">
          <h2 className="pol__h2">第5条（お客様の義務）</h2>
          <ul className="pol__ul">
            <li>デバイスを善良な管理者の注意をもって使用・管理すること</li>
            <li>デバイスの改造・分解・リバースエンジニアリングを行わないこと</li>
            <li>デバイスを第三者に転貸・譲渡しないこと</li>
            <li>デバイスの滅失・毀損・盗難等が生じた場合、直ちに当社に通知すること</li>
            <li>レンタル期間終了後、デバイスを当社の指定する方法で返却すること</li>
          </ul>
        </div>

        <div className="pol__section">
          <h2 className="pol__h2">第6条（禁止事項）</h2>
          <p className="pol__p">お客様は、以下の行為を行ってはなりません。</p>
          <ul className="pol__ul">
            <li>本サービスを違法な目的または違法な方法で使用すること</li>
            <li>デバイスのセキュリティ設定を無効化・迂回すること</li>
            <li>当社または第三者の知的財産権を侵害すること</li>
            <li>デバイスにウイルス等の有害なプログラムを導入すること</li>
            <li>当社の事業運営を妨害する行為</li>
            <li>反社会的勢力への利益供与その他の関与</li>
          </ul>
        </div>

        <div className="pol__section">
          <h2 className="pol__h2">第7条（デバイスの管理・返却）</h2>
          <p className="pol__p">
            レンタル期間中のデバイスの管理責任はお客様にあります。
            デバイスを紛失・盗難・故意または重大な過失による損傷が生じた場合、
            お客様はその修理費用または市場価格相当額を負担するものとします。
          </p>
          <p className="pol__p">
            契約終了時には、当社の指示に従いデバイスを返却してください。
            デバイス上のデータは返却前にお客様の責任で削除するか、
            当社が提供する初期化サービスをご利用ください。
          </p>
        </div>

        <div className="pol__section">
          <h2 className="pol__h2">第8条（サービスの変更・停止）</h2>
          <p className="pol__p">
            当社は、システムメンテナンス・障害対応・法令変更等の理由により、
            事前通知のうえサービスを変更または一時停止することがあります。
            緊急を要する場合は事後通知となる場合があります。
          </p>
        </div>

        <div className="pol__section">
          <h2 className="pol__h2">第9条（免責事項）</h2>
          <p className="pol__p">
            当社は、お客様が本サービスを利用したことにより生じた間接的・付随的・特別な損害について、
            当社に故意または重大な過失がない限り責任を負いません。
            当社の損害賠償責任は、原因を問わず、当該月の利用料金を上限とします。
          </p>
          <p className="pol__p">
            なお、デバイス上のAI処理の結果（文書要約・翻訳・分析等）の正確性・完全性・適法性について、
            当社はいかなる保証も行いません。最終的な判断は必ずお客様ご自身でお願いします。
          </p>
        </div>

        <div className="pol__section">
          <h2 className="pol__h2">第10条（準拠法・管轄裁判所）</h2>
          <p className="pol__p">
            本規約は日本法に準拠します。本サービスに関する紛争については、
            東京地方裁判所を第一審の専属的合意管轄裁判所とします。
          </p>
        </div>

        <div className="pol__contact">
          <p className="pol__contact-title">本規約に関するお問い合わせ</p>
          <p>
            エックストラスト株式会社<br />
            メール：<a href="mailto:matsumotokaya@gmail.com">matsumotokaya@gmail.com</a>
          </p>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
