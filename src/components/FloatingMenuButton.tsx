"use client";

import { useEffect, useState } from "react";
import { HomeMobileMenu } from "@/components/HomeMobileMenu";
import "./FloatingMenuButton.css";

// Show the floating button once the hero has scrolled away.
const REVEAL_VH = 0.72;

export function FloatingMenuButton({
  productOverviewHref = "/#home-product-light",
}: {
  productOverviewHref?: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setVisible(window.scrollY > window.innerHeight * REVEAL_VH);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`floatingMenu${visible ? " is-visible" : ""}`}>
      <HomeMobileMenu
        theme="dark"
        productOverviewHref={productOverviewHref}
        dialogId="home-mobile-menu-float"
      />
    </div>
  );
}
