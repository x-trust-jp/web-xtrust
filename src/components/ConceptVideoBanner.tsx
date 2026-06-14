"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import "./ConceptVideoBanner.css";

// Session-scoped dismissal: once the visitor closes the banner it stays
// hidden until the browser tab is closed (sessionStorage, not localStorage).
const DISMISS_KEY = "conceptVideoBannerDismissed";

// Reveal thresholds (scroll distance). Desktop shows once the hero has
// scrolled away. Mobile waits until the visitor is well into the page so the
// card never competes with the first view — expressed as a multiple of the
// viewport height (≈1.5 screens). We deliberately avoid any "distance from the
// page bottom" math: this page sets `body { overflow-x: hidden }`, which turns
// the body into a nested scroll container and makes scrollHeight / absolute
// bottom detection unreliable. A reachable scroll-distance threshold is robust.
const DESKTOP_REVEAL_PX = 560;
const MOBILE_REVEAL_VH = 0.85;
const MOBILE_DESKTOP_BREAKPOINT = 768;

export function ConceptVideoBanner({
  videoSrc = "/videos/concept.mp4",
  posterSrc = "/images/concept-banner.jpg",
  label = "Concept Movie",
  duration = "2:10",
}: {
  videoSrc?: string;
  posterSrc?: string;
  label?: string;
  duration?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [mounted, setMounted] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Restore the per-session dismissal once on mount.
  useEffect(() => {
    setMounted(true);
    try {
      if (sessionStorage.getItem(DISMISS_KEY) === "1") {
        setDismissed(true);
      }
    } catch {
      // sessionStorage can throw in private-mode edge cases — ignore.
    }
  }, []);

  // Decide whether the banner should be on screen, based on how far the
  // visitor has scrolled. Desktop reveals early (after the hero); mobile waits
  // ~1.5 screens so it appears only once the visitor is reading further down.
  useEffect(() => {
    if (dismissed) {
      setVisible(false);
      return;
    }

    const evaluate = () => {
      const isDesktop = window.matchMedia(
        `(min-width: ${MOBILE_DESKTOP_BREAKPOINT}px)`
      ).matches;
      const threshold = isDesktop
        ? DESKTOP_REVEAL_PX
        : window.innerHeight * MOBILE_REVEAL_VH;
      setVisible(window.scrollY > threshold);
    };

    evaluate();
    window.addEventListener("scroll", evaluate, { passive: true });
    window.addEventListener("resize", evaluate);
    return () => {
      window.removeEventListener("scroll", evaluate);
      window.removeEventListener("resize", evaluate);
    };
  }, [dismissed]);

  const dismiss = useCallback(() => {
    setVisible(false);
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // ignore
    }
  }, []);

  const openModal = useCallback(() => {
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  // Drive the native <dialog> + video playback from modalOpen.
  useEffect(() => {
    const dialog = dialogRef.current;
    const video = videoRef.current;
    if (!dialog) {
      return;
    }

    if (modalOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
      document.body.style.overflow = "hidden";
      video?.play().catch(() => {
        // Autoplay may be blocked — the visitor can press play manually.
      });
    } else {
      if (dialog.open) {
        dialog.close();
      }
      document.body.style.overflow = "";
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  // Native dialog close (Esc / backdrop) should sync React state back.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    const handleClose = () => setModalOpen(false);
    const handleCancel = (event: Event) => {
      event.preventDefault();
      closeModal();
    };
    const handleClick = (event: MouseEvent) => {
      if (event.target === dialog) {
        closeModal();
      }
    };

    dialog.addEventListener("close", handleClose);
    dialog.addEventListener("cancel", handleCancel);
    dialog.addEventListener("click", handleClick);
    return () => {
      dialog.removeEventListener("close", handleClose);
      dialog.removeEventListener("cancel", handleCancel);
      dialog.removeEventListener("click", handleClick);
    };
    // `mounted` is required: on the first render the component returns null, so
    // dialogRef is empty and the listeners can't attach. Re-run once mounted
    // flips true and the <dialog> actually exists.
  }, [closeModal, mounted]);

  if (!mounted || dismissed) {
    return null;
  }

  return (
    <>
      <div
        className={`cvb${visible ? " is-visible" : ""}`}
        role="complementary"
        aria-label="コンセプトムービー"
      >
        <button
          type="button"
          className="cvb__card"
          onClick={openModal}
          aria-label="コンセプトムービーを再生"
          style={{ backgroundImage: `url(${posterSrc})` }}
        >
          <span className="cvb__overlay" aria-hidden="true" />
          <span className="cvb__play" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="cvb__meta" aria-hidden="true">
            <span className="cvb__label">{label}</span>
            <span className="cvb__duration">{duration}</span>
          </span>
        </button>
        <button
          type="button"
          className="cvb__close"
          onClick={dismiss}
          aria-label="バナーを閉じる"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      <dialog ref={dialogRef} className="cvbModal" aria-label="コンセプトムービー">
        <button
          type="button"
          className="cvbModal__close"
          onClick={closeModal}
          aria-label="動画を閉じる"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <div className="cvbModal__frame">
          <video
            ref={videoRef}
            className="cvbModal__video"
            src={videoSrc}
            poster={posterSrc}
            controls
            playsInline
            preload="none"
          />
        </div>
      </dialog>
    </>
  );
}
