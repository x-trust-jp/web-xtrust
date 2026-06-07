"use client";

import { useEffect, useState } from "react";

export function FontReadyContainer({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let fallbackTimer: number | null = null;
    let frameA: number | null = null;
    let frameB: number | null = null;

    const markReady = () => {
      frameA = window.requestAnimationFrame(() => {
        frameB = window.requestAnimationFrame(() => {
          if (!cancelled) {
            setReady(true);
          }
        });
      });
    };

    const fontSet = document.fonts;
    if (!fontSet) {
      markReady();
      return () => {
        cancelled = true;
      };
    }

    fallbackTimer = window.setTimeout(() => {
      markReady();
    }, 1500);

    Promise.all([
      fontSet.load('400 1em "Noto Sans JP"'),
      fontSet.load('700 1em "Noto Sans JP"'),
      fontSet.load('900 1em "Noto Sans JP"'),
      fontSet.ready,
    ])
      .catch(() => undefined)
      .finally(() => {
        if (fallbackTimer !== null) {
          window.clearTimeout(fallbackTimer);
          fallbackTimer = null;
        }
        markReady();
      });

    return () => {
      cancelled = true;
      if (fallbackTimer !== null) {
        window.clearTimeout(fallbackTimer);
      }
      if (frameA !== null) {
        window.cancelAnimationFrame(frameA);
      }
      if (frameB !== null) {
        window.cancelAnimationFrame(frameB);
      }
    };
  }, []);

  return <div className={`${className}${ready ? " is-ready" : ""}`}>{children}</div>;
}
