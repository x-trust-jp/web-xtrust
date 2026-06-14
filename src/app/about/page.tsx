import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { VideoSection } from "./VideoSection";
import "./about.css";

export const metadata: Metadata = {
  title: "会社概要 | XTRUST",
  description:
    "エックストラスト株式会社の会社概要。すべての現場に、AIを。オフラインAIで機密業務に安全なゼロリスク環境を提供します。",
};

export default function AboutPage() {
  return (
    <main className="ab">
      <SiteHeader theme="light" overlay />

      {/* Hero — full-screen video background */}
      <section className="ab__hero">
        <video
          className="ab__hero-video"
          src="/videos/hero-handshake.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="ab__hero-overlay" aria-hidden="true" />
        <div className="ab__hero-content">
          <h1 className="ab__hero-tagline">
            すべての現場に、
            <em>AIを。</em>
          </h1>
          <p className="ab__hero-sub">XTRUST — Local &amp; Offline AI</p>
        </div>
      </section>

      {/* Concept video section */}
      <VideoSection />

      <SiteFooter />
    </main>
  );
}
