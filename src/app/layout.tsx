import type { Metadata } from "next";
import "./globals.css";

// The ported mockup CSS references the fonts by literal family name
// ('Inter' / 'Noto Sans JP' / 'IBM Plex Mono'), so we load them via the
// Google Fonts stylesheet exactly as the mockup did, keeping every
// font-family rule resolvable. (Can migrate to next/font later.)
const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Noto+Sans+JP:wght@300;400;500;600;700;900&family=IBM+Plex+Mono:wght@400;500&display=swap";

const SITE_URL = "https://x-trust.jp";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "XTRUST — オフラインAIで、機密業務を安全に。",
  description:
    "通信機能0のローカルAI搭載ノートPCレンタルサービス。契約・財務・人事・医療など高機密データを1バイトも外部に漏らさず、AIで処理。エックストラスト株式会社。",
  openGraph: {
    title: "XTRUST — オフラインAIで、機密業務を安全に。",
    description:
      "通信機能0のローカルAI搭載ノートPCレンタルサービス。契約・財務・人事・医療など高機密データを1バイトも外部に漏らさず、AIで処理。",
    url: SITE_URL,
    siteName: "XTRUST",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XTRUST — オフラインAIで、機密業務を安全に。",
    description:
      "通信機能0のローカルAI搭載ノートPCレンタルサービス。契約・財務・人事・医療など高機密データを1バイトも外部に漏らさず、AIで処理。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={FONTS_HREF} />
      </head>
      <body>{children}</body>
    </html>
  );
}
