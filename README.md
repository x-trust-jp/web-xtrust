# XTRUST サイト (web-xtrust)

エックストラスト株式会社のコーポレートサイト兼製品LPリポジトリ。

## 本番URL

**https://x-trust.jp**（Vercel にて稼働中）

## サイト構成

| URL | 状態 | 内容 |
|-----|------|------|
| `/` | ✅ 稼働中 | 既存の製品LPをトップへ配置した現行トップ（S01Hero〜S14Footer） |
| `/product` | ✅ 稼働中 | `/` と同内容の製品LPエイリアス |
| `/product-2` | 🚧 調整中 | 新KVベースの次期トップ案。今後こちらへ順次移植予定 |
| `/download` | ✅ 稼働中 | 資料請求ページ。フォーム送信は mailto 方式（暫定） |
| `/contact` | ✅ 稼働中 | お問い合わせページ（製品・POC／メディア取材／投資家IR の3種別） |
| `/about` | ✅ 稼働中 | 会社概要。全画面動画ヒーロー＋コンセプト動画セクション |
| `/news` | ✅ 稼働中 | ニュース一覧＋記事2本（ダミーコンテンツ） |
| `/privacy` | ✅ 稼働中 | プライバシーポリシー |
| `/terms` | ✅ 稼働中 | 利用規約 |
| `/security` | ✅ 稼働中 | 情報セキュリティ方針 |
| `/legal` | ✅ 稼働中 | 特定商取引法に基づく表記（登記完了後に一部更新予定） |
| `/careers` | 🚧 ダミー | 「準備中」プレースホルダ（`ComingSoon`） |

### トップページについて（/）

現時点では、`/` は既存の製品LPをそのままトップへ配置したページ。
本体は `src/components/ProductLandingPage.tsx`。`src/app/page.tsx` と `src/app/product/page.tsx` の両方から共有利用している。

### 資料請求ページについて（/download）

`src/app/download/` 配下。左に資料情報、右に入力フォームの2カラム。
フォーム（`RequestForm`・client component）の送信は `matsumotokaya@gmail.com` 宛の **mailto 方式（暫定）**。
届いたメールに手動で資料を返信する運用。後で Resend 等のサーバー送信に差し替え可能。
スタイルはトップに合わせた `src/app/download/download.css`（`.dl` スコープ）。

### お問い合わせページについて（/contact）

`src/app/contact/` 配下。ダウンロードページと同一レイアウト（`.dl` CSS を共有）。
フォーム（`ContactForm`・client component）の送信は mailto 方式（暫定）。
お問い合わせ種別（製品・POC のご相談 / 取材・メディア / 投資家・IR / その他）を先頭に配置。
追加スタイルは `src/app/contact/contact.css`（`.ct__*` クラス）。

### 会社概要について（/about）

`src/app/about/` 配下。
ヒーローセクション：`public/videos/hero-handshake.mp4` を全画面ループ再生（黒オーバーレイ付き）。
元素材（154MB）を ffmpeg で圧縮済み（401KB）。SiteHeader は overlay モードで重ねる。
コンセプト動画セクション：`VideoSection`（client component）で `public/videos/concept.mp4` をモーダル再生。
スタイルは `src/app/about/about.css`（`.ab` スコープ）。

### ニュースについて（/news）

`src/app/news/` 配下。2カラムカードグリッドで記事一覧を表示。
記事は静的サブルートとして管理（`/news/[slug]/page.tsx`）。
現在の記事：
- `/news/xtrust-ai-beta` — XTRUST AI ベータ版公開（2026-06-13）
- `/news/concept-video` — コンセプト動画公開（2026-05-20）
スタイルは `src/app/news/news.css`（`.nw` / `.nw-art` スコープ）。

### ポリシー系ページについて（/privacy・/terms・/security・/legal）

共通スタイルは `src/app/policy.css`（`.pol` スコープ）。ダークグラデーションヒーロー＋白地本文エリア。
- `/privacy` — プライバシーポリシー（デバイス上データの取扱いセクションを含む）
- `/terms` — 利用規約（デバイスレンタルサービス向け）
- `/security` — 情報セキュリティ方針（オフラインアーキテクチャの構造的安全性を明記）
- `/legal` — 特定商取引法に基づく表記（登記完了後に更新が必要な箇所は `.pol__placeholder` で明示）

### ダミーページ・共通コンポーネントについて

未着手の `/careers` は `ComingSoon`（「準備中」表示）でダミー掲載。
`SiteHeader` はすべてのページで共有。お問い合わせリンク先は `/contact`（PC ナビ・モバイルメニュー両方）。
`SiteFooter` は3カラムリンク＋ソーシャル（X / YouTube / note / Facebook / LinkedIn）。
ソーシャルリンクはすべて公式アカウントに設定済み（`target="_blank"` / `rel="noopener noreferrer"`）。

### 製品LPについて（/product）

`/` と同内容。`src/components/ProductLandingPage.tsx` を共有利用。
セクションコンポーネントは `src/components/sections/` 以下。

### 次期トップ案について（/product-2）

旧トップの新KV案を `src/app/product-2/page.tsx` へ退避。
本体は `src/components/ProductPageV2.tsx`。スタイルは `src/app/home.css`（`.home` スコープ）。
今後はこちらをベースに、既存 `/product` の要素を順次差し替えていく想定。

## 技術スタック

- **Next.js 16 (App Router) + TypeScript** — 完全静的（SSG）生成
- **Tailwind CSS v4** — デザイントークンを `@theme` に定義
- **フォント** — Google Fonts（Inter / Noto Sans JP / IBM Plex Mono）を `<link>` で読み込み
- **デプロイ** — Vercel（`x-trust-jp/web-xtrust`）

## ファイル構成

```
src/
  app/
    layout.tsx              # フォント読込・SEO/OGP メタデータ（サイト共通）
    page.tsx                # / 現行トップ（既存製品LPを表示）
    globals.css             # Tailwind + @theme トークン + CSS
    home.css                # /product-2 用スタイル（.home スコープ）
    mockup-base.css         # 基盤・hero・shells・footer（/product 用）
    mockup-sections.css     # 各セクションの構成ブロック（/product 用）
    policy.css              # /privacy・/terms・/security・/legal 共通スタイル（.pol スコープ）
    product/
      page.tsx              # /product（/ と同内容の製品LP）
    product-2/
      page.tsx              # /product-2 次期トップ案
    download/
      page.tsx              # /download 資料請求ページ
      RequestForm.tsx       # 入力フォーム（client・mailto送信）
      download.css          # 資料請求ページ用スタイル（.dl スコープ）
    contact/
      page.tsx              # /contact お問い合わせページ
      ContactForm.tsx       # 入力フォーム（client・mailto送信）
      contact.css           # textarea・カテゴリカード追加スタイル（.ct__* クラス）
    about/
      page.tsx              # /about 会社概要
      VideoSection.tsx      # コンセプト動画セクション（client・モーダル再生）
      about.css             # 会社概要用スタイル（.ab スコープ）
    news/
      page.tsx              # /news ニュース一覧
      news.css              # ニュース共通スタイル（.nw / .nw-art スコープ）
      xtrust-ai-beta/
        page.tsx            # /news/xtrust-ai-beta 記事ページ
      concept-video/
        page.tsx            # /news/concept-video 記事ページ
    privacy/
      page.tsx              # /privacy プライバシーポリシー
    terms/
      page.tsx              # /terms 利用規約
    security/
      page.tsx              # /security 情報セキュリティ方針
    legal/
      page.tsx              # /legal 特定商取引法に基づく表記
    careers/                # ダミーページ（ComingSoon）
  components/
    ProductLandingPage.tsx  # / と /product で共有する製品LP本体
    ProductPageV2.tsx       # /product-2 用の新KVページ本体
    TopHeader.tsx           # 製品LP用グローバルナビ（資料請求は /download へ）
    SiteHeader.tsx (+ .css) # サイト共通ヘッダー（overlay / stacked 両対応）
    SiteFooter.tsx (+ .css) # サイト共通フッター（3カラム + ソーシャル）
    HomeMobileMenu.tsx      # モバイル用フルスクリーンメニュー（client）
    ConceptVideoBanner.tsx  # スクロール追従の動画バナー（トップページ用）
    ComingSoon.tsx (+ .css) # 「準備中」プレースホルダページ
    Logo / Eyebrow / Placeholder / SectionMap
    sections/               # S01Hero 〜 S14Footer（製品LP用14セクション）
public/
  images/                   # ロゴ・端末画像・トップ背景・ニュースサムネイル等
    news-xtrust-ai-beta.png # XTRUST AI ベータ版ニュース サムネイル
  videos/
    concept.mp4             # コンセプトムービー（バナー・会社概要ページで使用）
    hero-handshake.mp4      # 会社概要ヒーロー背景動画（元154MB → 圧縮401KB）
  downloads/                # 営業資料 PDF
```

### 製品LP セクション一覧（/product）

| # | Section | Component |
|---|---------|-----------|
| 01 | Hero | `S01Hero` |
| 02 | Problem | `S02Problem` |
| 03 | Product / Hub | `S03Product` |
| 04 | Solution | `S04Solution` |
| 05 | Base Ability | `S05BaseAbility` |
| 06 | Use Case 01 · 多言語会議 | `S06UseCaseMeeting` |
| 07 | Use Case 02 · 文字起こし/翻訳 | `S07UseCaseTranscribe` |
| 08 | Use Case 03 · 配布前レビュー | `S08UseCaseReview` |
| 09 | Use Case 04 · PMI / DD | `S09UseCasePMIDD` |
| 10 | Use Case 05 · 会議マスター | `S10UseCaseMaster` |
| 11 | Lifecycle | `S11Lifecycle` |
| 12 | PoC | `S12Poc` |
| 13 | Final CTA | `S13FinalCta` |
| 14 | Footer | `S14Footer` |

## 開発

```bash
npm run dev      # 開発サーバ
npm run build    # 本番ビルド（SSG）
npm run start    # 本番サーバ
```

## TODO

### 次期トップ案（/product-2）
- **差し替え作業** — `/` で使っている製品LPの構成要素を、必要な順で `/product-2` に順次移植・再設計していく。

### 資料請求・お問い合わせ（/download・/contact）
- **送信方式** — 現状は mailto（暫定）。Resend 等のサーバー送信に差し替え予定。
- **資料本体** — 実資料が未確定。サムネはロゴ入りプレースホルダ。確定後に差し替え。

### 製品LP（/product）
- **法人表記（Footer）** — 運営会社・所在地・連絡先はプレースホルダ。確定後に掲載。
- **画像** — Use Case / Lifecycle の図解は `.ph` プレースホルダ。実写・イラストを後差し込み。

### 特定商取引法（/legal）
- **登記完了後に更新** — 所在地・運営責任者・電話番号・支払い方法の詳細を更新する。

### 会社概要（/about）
- **コンテンツ拡充** — 現状はヒーロー＋動画セクションのみ。ミッション・チーム・沿革等を順次追加。

### ニュース（/news）
- **記事追加フロー** — `src/app/news/[slug]/page.tsx` を追加し、一覧の `ARTICLES` 配列に項目を追記する。

### 共通
- **ダミーページ** — `/careers` は `ComingSoon` の仮ページ。コンテンツ準備後に作成。
