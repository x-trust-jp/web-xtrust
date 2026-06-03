"use client";

import Image from "next/image";
import { useEffectEvent, useState } from "react";

type CaseCard = {
  step: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  placeholder?: string;
};

type CaseSlide = {
  eyebrow: string;
  headline: string;
  description: string;
  cards: CaseCard[];
};

const CASES: CaseSlide[] = [
  {
    eyebrow: "ケース1: AI議事録",
    headline: "多言語会議を、文字起こし・翻訳・議事録化",
    description:
      "会議音声を文字起こしし、必要に応じて翻訳し、決定事項・ToDo・議事録の下書きとして整理。さまざまな言語が飛び交う会議でも、全員が同じ情報を見ながら進められます。",
    cards: [
      {
        step: "01",
        title: "会議中：リアルタイム翻訳・表示",
        description:
          "複数言語の字幕をリアルタイム表示。日本語・英語・中国語などを同時に表示し、通訳待ちの時間をなくします。",
        imageSrc: "/images/cases/meeting-live-translation.png",
        imageAlt: "会議中のリアルタイム翻訳表示イメージ",
        imageWidth: 1008,
        imageHeight: 826,
      },
      {
        step: "02",
        title: "会議中：論点整理・次アクション抽出",
        description:
          "各言語でのラップアップを自動生成。決定事項、ToDo、要点を整理した議事録を複数言語で即時出力します。",
        imageSrc: "/images/cases/meeting-action-summary.png",
        imageAlt: "会議中の論点整理と次アクション抽出イメージ",
        imageWidth: 1044,
        imageHeight: 838,
      },
      {
        step: "03",
        title: "会議後：議事録をその場で出力",
        description:
          "会議終了後には、必要に応じて議事録を紙で出力できます。",
        imageSrc: "/images/cases/meeting-print-output.png",
        imageAlt: "会議後に議事録を出力するイメージ",
        imageWidth: 926,
        imageHeight: 908,
      },
    ],
  },
  {
    eyebrow: "ケース2: 機密文章レビュー",
    headline: "「AIレビュアー」でドキュメントの品質を最大化",
    description:
      "ドキュメントを見せるだけでクオリティを劇的に高めるAIレビューを実現",
    cards: [
      {
        step: "01",
        title: "あらゆる媒体を「見せるだけ」でチェック",
        description:
          "ファイルだけでなく、カメラで紙のチラシやホワイトボード、画面を写すだけで即座に分析。",
        imageSrc: "/images/cases/review-any-media.png",
        imageAlt: "媒体を見せるだけでチェックするAIレビューのイメージ",
        imageWidth: 814,
        imageHeight: 492,
      },
      {
        step: "02",
        title: "表記ミスから論理の矛盾まで深層レビュー",
        description:
          "誤字脱字、表記ゆれ、ブランドトーン、さらには法務リスクや論の飛躍まで多角的に指摘。",
        imageSrc: "/images/cases/review-deep-analysis.png",
        imageAlt: "深層レビューで文章を確認するAIのイメージ",
        imageWidth: 684,
        imageHeight: 520,
      },
      {
        step: "03",
        title: "成果に直結する「プレゼンリハーサル」",
        description:
          "経営会議や投資家向け資料のストーリー、突っ込まれそうな点をAIが事前に赤入れ。",
        imageSrc: "/images/cases/review-presentation-rehearsal.png",
        imageAlt: "プレゼンリハーサルをAIが支援するイメージ",
        imageWidth: 630,
        imageHeight: 496,
      },
    ],
  },
  {
    eyebrow: "ケース3: 財務諸表分析",
    headline: "財務諸表分析を、ローカルAIで高速化",
    description:
      "PL・BS・CFや試算表を外部に出さずに解析し、経営数値の確認や投資判断の下準備を安全に前倒しできます。",
    cards: [
      {
        step: "01",
        title: "決算資料を端末内で一括読込",
        description:
          "PL・BS・CFや試算表、注記資料までまとめて取り込み、分析の起点をローカルに集約します。",
        placeholder: "CASE 03 / 読込イメージ",
      },
      {
        step: "02",
        title: "増減要因と論点を整理",
        description:
          "主要KPIの変動や前年差異を洗い出し、確認すべき論点を先回りで一覧化します。",
        placeholder: "CASE 03 / 論点整理イメージ",
      },
      {
        step: "03",
        title: "会議前の比較分析を短時間で",
        description:
          "部門比較や期間比較も高速化し、経営会議や投資判断に向けた準備時間を短縮します。",
        placeholder: "CASE 03 / 比較分析イメージ",
      },
    ],
  },
];

export function HomeCaseCarousel({
  sectionId,
  titleId,
}: {
  sectionId: string;
  titleId: string;
}) {
  const [trackIndex, setTrackIndex] = useState(1);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);

  const loopedCases = [CASES[CASES.length - 1], ...CASES, CASES[0]];
  const activeIndex = (trackIndex - 1 + CASES.length) % CASES.length;

  const goToNext = useEffectEvent(() => {
    setIsTransitionEnabled(true);
    setTrackIndex((current) => current + 1);
  });

  const goToPrev = useEffectEvent(() => {
    setIsTransitionEnabled(true);
    setTrackIndex((current) => current - 1);
  });

  const goToSlide = useEffectEvent((nextIndex: number) => {
    setIsTransitionEnabled(true);
    setTrackIndex(nextIndex + 1);
  });

  const handleTransitionEnd = useEffectEvent(() => {
    if (trackIndex === 0) {
      setIsTransitionEnabled(false);
      setTrackIndex(CASES.length);
      return;
    }

    if (trackIndex === loopedCases.length - 1) {
      setIsTransitionEnabled(false);
      setTrackIndex(1);
    }
  });

  return (
    <section
      className="home-product home-product--teal home-case"
      id={sectionId}
      aria-labelledby={titleId}
    >
      <div className="home-product__inner">
        <h2 className="home-case__sr-only" id={titleId}>
          {CASES[activeIndex].headline}
        </h2>

        <div className="home-product__eyebrow" aria-live="polite">
          <span className="home-product__eyebrow-num">02</span>
          <span className="home-product__eyebrow-line" />
          <span className="home-product__eyebrow-ja">{CASES[activeIndex].eyebrow}</span>
        </div>

        <div className="home-case__viewport">
          <div
            className="home-case__track"
            style={{
              transform: `translateX(-${trackIndex * 100}%)`,
              transitionDuration: isTransitionEnabled ? undefined : "0ms",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {loopedCases.map((slide, index) => (
              <article className="home-case__slide" key={`${slide.eyebrow}-${index}`}>
                <div className="home-product__top-row">
                  <h2 className="home-product__headline">{slide.headline}</h2>
                  <p className="home-product__body">{slide.description}</p>
                </div>

                <div className="home-case__cards">
                  {slide.cards.map((card) => (
                    <section className="home-case__card" key={`${slide.eyebrow}-${card.step}`}>
                      <div className="home-case__card-num">{card.step}</div>
                      <div className="home-case__card-visual">
                        {card.imageSrc ? (
                          <Image
                            src={card.imageSrc}
                            alt={card.imageAlt ?? card.title}
                            width={card.imageWidth ?? 800}
                            height={card.imageHeight ?? 500}
                            className="home-case__card-image"
                          />
                        ) : (
                          <div className="home-case__card-placeholder">{card.placeholder}</div>
                        )}
                      </div>
                      <h3 className="home-case__card-title">{card.title}</h3>
                      <p className="home-case__card-description">{card.description}</p>
                    </section>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="home-case__controls" aria-label="ケース切り替え">
          <button type="button" className="home-case__button" onClick={goToPrev}>
            Prev
          </button>
          <div className="home-case__dots">
            {CASES.map((slide, index) => (
              <button
                key={slide.eyebrow}
                type="button"
                className={`home-case__dot${index === activeIndex ? " is-active" : ""}`}
                aria-label={`${slide.eyebrow}を表示`}
                aria-pressed={index === activeIndex}
                onClick={() => goToSlide(index)}
              >
                0{index + 1}
              </button>
            ))}
          </div>
          <button type="button" className="home-case__button" onClick={goToNext}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
