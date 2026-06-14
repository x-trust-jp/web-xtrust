"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function VideoSection() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const dialog = dialogRef.current;
    const video = videoRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) dialog.showModal();
      document.body.style.overflow = "hidden";
      video?.play().catch(() => {});
    } else {
      if (dialog.open) dialog.close();
      document.body.style.overflow = "";
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const onClose = () => setOpen(false);
    const onCancel = (e: Event) => { e.preventDefault(); closeModal(); };
    const onClick = (e: MouseEvent) => { if (e.target === dialog) closeModal(); };

    dialog.addEventListener("close", onClose);
    dialog.addEventListener("cancel", onCancel);
    dialog.addEventListener("click", onClick);
    return () => {
      dialog.removeEventListener("close", onClose);
      dialog.removeEventListener("cancel", onCancel);
      dialog.removeEventListener("click", onClick);
    };
  }, [closeModal]);

  return (
    <section className="ab__video-section">
      <span className="ab__video-label">Concept Movie</span>
      <h2 className="ab__video-title">XTRUSTが目指す世界</h2>

      <div className="ab__video-frame">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/concept-banner.jpg"
          alt="コンセプトムービーサムネイル"
          className="ab__video-poster"
        />
        <button
          type="button"
          className="ab__video-btn"
          onClick={openModal}
          aria-label="コンセプトムービーを再生"
        >
          <span className="ab__video-play" aria-hidden="true">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="ab__video-btn-label">PLAY</span>
        </button>
      </div>

      <dialog ref={dialogRef} className="ab__modal" aria-label="コンセプトムービー">
        <div className="ab__modal-inner">
          <button
            type="button"
            className="ab__modal-close"
            onClick={closeModal}
            aria-label="動画を閉じる"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
          <video
            ref={videoRef}
            className="ab__modal-video"
            src="/videos/concept.mp4"
            poster="/images/concept-banner.jpg"
            controls
            playsInline
            preload="none"
          />
        </div>
      </dialog>
    </section>
  );
}
