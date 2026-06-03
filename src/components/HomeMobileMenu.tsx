"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";

const PRIMARY_LINKS = [
  { label: "製品概要", href: "/product" },
  { label: "会社概要", href: "/about" },
];

const ACTION_LINKS = [
  { label: "資料請求", href: "/download" },
  { label: "お問い合わせ", href: "/product#sec-13" },
];

const SOCIALS = [
  {
    label: "X",
    href: "#",
    svg: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "YouTube",
    href: "#",
    svg: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    label: "note",
    href: "#",
    text: "n",
  },
  {
    label: "Facebook",
    href: "#",
    svg: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
  },
];

export function HomeMobileMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const closeMenu = () => {
    if (closing) {
      return;
    }

    setClosing(true);
    closeTimerRef.current = window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
      closeTimerRef.current = null;
    }, 180);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    if (open) {
      if (!dialog.open) {
        dialog.showModal();
      }
      return;
    }

    if (dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    const handleClose = () => {
      setOpen(false);
      setClosing(false);
    };

    const handleCancel = (event: Event) => {
      event.preventDefault();
      closeMenu();
    };

    const handleClick = (event: MouseEvent) => {
      if (event.target === dialog) {
        closeMenu();
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
  }, [closing]);

  return (
    <>
      <button
        type="button"
        className={`home__menuBtn${open && !closing ? " is-open" : ""}`}
        aria-label={open && !closing ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={open && !closing}
        aria-controls="home-mobile-menu"
        onClick={() => {
          if (open) {
            closeMenu();
            return;
          }
          setOpen(true);
        }}
      >
        <span className="home__menuLabel">Menu</span>
        <span className="home__menuBars" aria-hidden="true">
          <i />
          <i />
        </span>
      </button>

      <dialog
        ref={dialogRef}
        id="home-mobile-menu"
        className={`homeMenuDialog${open && !closing ? " is-open" : ""}`}
        aria-label="モバイルメニュー"
      >
        <div className="homeMenuDialog__surface">
          <div className="homeMenuDialog__top">
            <Link
              href="/"
              className="homeMenuDialog__logo"
              aria-label="XTRUST"
              onClick={closeMenu}
            >
              <Logo fill="#ffffff" />
            </Link>
            <button
              type="button"
              className="homeMenuDialog__close"
              aria-label="メニューを閉じる"
              onClick={closeMenu}
            >
              <span />
              <span />
            </button>
          </div>

          <nav className="homeMenuDialog__nav" aria-label="Mobile Primary">
            {PRIMARY_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="homeMenuDialog__bottom">
            <div className="homeMenuDialog__actions">
              {ACTION_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="homeMenuDialog__action"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="homeMenuDialog__social" aria-label="Social links">
              {SOCIALS.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label}>
                  {"svg" in social ? (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d={social.svg} />
                    </svg>
                  ) : (
                    <span className="homeMenuDialog__socialNote">{social.text}</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
