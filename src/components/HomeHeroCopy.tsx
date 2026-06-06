import Image from "next/image";

export function HomeHeroCopy() {
  return (
    <div className="home__copy is-ready">
      <h1 className="home__headline">
        <span className="home__headline-line">ローカルで、</span>
        <span className="home__headline-line home__headline-line--accent">
          オフラインな{" "}
          <span className="home__headline-ai" aria-label="AI">
            <Image
              src="/images/icon_ai.png"
              alt=""
              aria-hidden="true"
              width={512}
              height={512}
            />
          </span>
        </span>
      </h1>
      <p className="home__sub">
        「通信機能ゼロ」のローカルデバイスがゼロリスクAI環境を実現！
        <br />
        財務、戦略、人事、契約、特許、法務、M&amp;A、顧客情報など
        <br />
        高機密データを、1バイトも外部に漏らさずAI活用可能。
        <br />
        これまで諦めていた現場のAIXが、いよいよ始まります。
      </p>
    </div>
  );
}
