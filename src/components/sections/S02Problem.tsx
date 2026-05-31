import { Eyebrow } from "@/components/Eyebrow";

// 02 — Problem (light). 1:1 port of Hero.html.
export function S02Problem() {
  return (
    <section className="sec light" id="sec-02" data-screen-label="02 Problem">
      <Eyebrow num="02" label="Problem" ja="機密情報ほど、AIに入れられない" />
      <div className="top-row">
        <h2 className="h-jp">
          重要なデータは、AIに入れられない。
        </h2>
        <p className="body-jp">
          顧客や人事に関わるデータ、契約書や特許に関する資料、株価に影響する情報をChat GPTに入力できますか？
          また、それらを自己判断で使っている現場や個人が存在するとしたら？
          AIを安全に運用するための監査や規定、セキュリティ整備には膨大な時間がかかるため、大手企業における機密情報のAI利用への壁は厚い。
        </p>
      </div>

      <div className="grid-3" style={{ marginTop: 60 }}>
        <div className="panel">
          <div className="panel-h">
            <span className="pn">1</span>
            <h3>AIに入れづらい情報</h3>
          </div>
          <div className="panel-b">
            <ul className="rows">
              <li>未公表の業績・経営会議メモ</li>
              <li>株価に関わるインサイダー情報</li>
              <li>M&amp;A / PMI / デューデリジェンス資料</li>
              <li>人事評価・採用候補者情報</li>
              <li>契約書・法務相談・係争情報</li>
              <li>顧客情報・価格交渉・取引条件</li>
              <li>特許・研究開発・技術戦略</li>
              <li>投資判断資料・重要な社内レポート</li>
            </ul>
          </div>
        </div>

        <div className="panel">
          <div className="panel-h">
            <span className="pn">2</span>
            <h3>現場で起きていること</h3>
          </div>
          <div className="panel-b">
            <ul className="rows">
              <li>AIは使いたい。だが正式ルールは曖昧</li>
              <li>便利だから、懸念を抱えたまま使っている</li>
              <li>部門ごとに判断基準がバラバラ</li>
              <li>
                <b>「今はOK」でも、後から止まる</b>可能性が高い
              </li>
              <li>SaaS審査ほど厳密に、AI利用は見られていない</li>
              <li>黎明期だからこそ成り立つ、なし崩しの運用</li>
            </ul>
          </div>
        </div>

        <div className="panel">
          <div className="panel-h">
            <span className="pn">3</span>
            <h3>この先さらに厳しくなる</h3>
          </div>
          <div className="panel-b">
            <ul className="rows">
              <li>AIガバナンス・監査・規程整備が進む</li>
              <li>保存先 / リージョン / 学習利用 / 委託管理の再点検</li>
              <li>「クラウドに出せない」業務が増える可能性</li>
              <li>
                禁止すると、現場では<b>シャドーAI</b>が広がる
              </li>
              <li>高性能AIの進化で、セキュリティ前提そのものが揺らぐ</li>
              <li>
                今のうちに、<b>安全に使える方法</b>を用意する必要がある
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="banner">
        <span className="mk">Insight</span>
        <span>
          AI活用は進んでいる。しかし、機密情報分野で
          <b>『安心して使える環境』</b>は、まだ圧倒的に足りていない。
        </span>
      </div>

      <div className="foot-line">
        <span className="tag">現場・情シス・法務・経営</span>
        <span>すべての立場が、すでにこの問題に直面している。</span>
      </div>
    </section>
  );
}
