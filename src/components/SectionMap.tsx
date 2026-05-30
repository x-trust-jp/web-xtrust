"use client";

import { useEffect, useRef, useState } from "react";

type Entry = { id: string; label: string; light: boolean };

// Right-side sticky section map. Ported from the mockup's inline script:
// appears once the hero is scrolled past, highlights the section nearest
// the viewport centre, and flips to dark dots over light sections.
const ENTRIES: Entry[] = [
  { id: "sec-01", label: "01 Hero", light: false },
  { id: "sec-02", label: "02 Problem", light: true },
  { id: "sec-03", label: "03 Product", light: false },
  { id: "sec-04", label: "04 Solution", light: true },
  { id: "sec-05", label: "05 Ability", light: false },
  { id: "sec-06", label: "06 Meeting", light: true },
  { id: "sec-07", label: "07 Transcribe", light: false },
  { id: "sec-08", label: "08 Review", light: true },
  { id: "sec-09", label: "09 PMI / DD", light: false },
  { id: "sec-10", label: "10 Meeting Master", light: true },
  { id: "sec-11", label: "11 Lifecycle", light: false },
  { id: "sec-12", label: "12 PoC", light: true },
  { id: "sec-13", label: "13 Apply", light: false },
  { id: "sec-14", label: "14 Footer", light: false },
];

export function SectionMap() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const [onLight, setOnLight] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const sections = ENTRIES.map((e) => document.getElementById(e.id));
    const hero = document.getElementById("sec-01");

    const update = () => {
      ticking.current = false;
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
      if (ticking.current) return;
      ticking.current = true;
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
      className={`section-map${visible ? " visible" : ""}${onLight ? " on-light" : ""}`}
      aria-label="ページ内ナビ"
    >
      {ENTRIES.map((e, i) => (
        <a
          key={e.id}
          href={`#${e.id}`}
          className={i === current ? "current" : undefined}
          aria-label={e.label}
        >
          <span className="lbl">{e.label}</span>
        </a>
      ))}
    </nav>
  );
}
