"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function HomeHeroCopy() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let revealTimer: number | null = null;
    let fallbackTimer: number | null = null;

    const reveal = () => {
      revealTimer = window.setTimeout(() => {
        if (!cancelled) {
          setIsReady(true);
        }
      }, 160);
    };

    const fontSet = document.fonts;
    if (!fontSet) {
      reveal();
      return () => {
        cancelled = true;
        if (revealTimer !== null) {
          window.clearTimeout(revealTimer);
        }
      };
    }

    fallbackTimer = window.setTimeout(reveal, 1200);

    fontSet.ready.then(() => {
      if (fallbackTimer !== null) {
        window.clearTimeout(fallbackTimer);
      }
      reveal();
    });

    return () => {
      cancelled = true;
      if (fallbackTimer !== null) {
        window.clearTimeout(fallbackTimer);
      }
      if (revealTimer !== null) {
        window.clearTimeout(revealTimer);
      }
    };
  }, []);

  return (
    <div className={`home__copy${isReady ? " is-ready" : ""}`}>
      <h1 className="home__headline">
        <span className="home__headline-line">ローカルで、</span>
        <span className="home__headline-line home__headline-line--accent">
          オフラインな{" "}
          <span className="home__headline-ai" aria-label="AI">
            <Image
              src="/images/icon_ai.svg"
              alt=""
              aria-hidden="true"
              width={207}
              height={239}
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
