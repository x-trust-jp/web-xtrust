"use client";

import { useEffect, useRef, useState } from "react";

type Entry = { id: string; label: string; light: boolean };

// Right-side sticky section map. Mirrors the mockup behaviour:
// appears once the hero is scrolled past, highlights the section
// nearest the viewport centre, and flips to dark dots over light
// sections. Uses scroll position (rAF-throttled) for the centre
// match, which is simpler and more accurate here than IO thresholds.
const ENTRIES: Entry[] = [
  { id: "hero", label: "Hero", light: true },
  { id: "problem_1", label: "Problem 1", light: true },
  { id: "problem_2", label: "Problem 2", light: false },
  { id: "problem_3", label: "Problem 3", light: true },
  { id: "solution", label: "Solution", light: false },
  { id: "product", label: "Product", light: true },
  { id: "core_value", label: "Core Value", light: false },
  { id: "use_cases", label: "Use Cases", light: true },
  { id: "how_it_works", label: "How it Works", light: false },
  { id: "pricing", label: "Pricing", light: true },
  { id: "beta_offer", label: "Beta", light: false },
  { id: "faq", label: "FAQ", light: true },
  { id: "final_cta", label: "Apply", light: false },
  { id: "footer", label: "Footer", light: false },
];

export function SectionMap() {
  const navRef = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const [onLight, setOnLight] = useState(false);

  useEffect(() => {
    const sections = ENTRIES.map((e) =>
      document.getElementById(`sec-${e.id}`),
    );
    const hero = document.getElementById("sec-hero");
    let ticking = false;

    const update = () => {
      ticking = false;
      const vh = window.innerHeight;

      const heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
      setVisible(heroBottom < vh * 0.3);

      const mid = vh * 0.4;
      let bestIdx = 0;
      let bestScore = -Infinity;
      sections.forEach((sec, i) => {
        if (!sec) return;
        const r = sec.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        const score = -Math.abs(r.top - mid);
        if (score > bestScore) {
          bestScore = score;
          bestIdx = i;
        }
      });
      setCurrent(bestIdx);
      setOnLight(ENTRIES[bestIdx].light);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`section-map${visible ? " visible" : ""}${onLight ? " on-light" : ""}`}
      aria-label="ページ内ナビ"
    >
      {ENTRIES.map((e, i) => (
        <a
          key={e.id}
          href={`#sec-${e.id}`}
          className={i === current ? "current" : undefined}
          aria-label={e.label}
        >
          <span className="lbl">{e.label}</span>
        </a>
      ))}
    </nav>
  );
}
