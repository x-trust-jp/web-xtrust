# XTRUST サイト (web-xtrust)

エックストラスト株式会社のコーポレートサイト兼製品LPリポジトリ。

## 本番URL

**https://x-trust.jp**（Vercel にて稼働中）

## サイト構成

| URL | 状態 | 内容 |
|-----|------|------|
| `/` | ✅ 稼働中 | トップページ。新KVのHero（100vh）＋ 共通フッター |
| `/product` | ✅ 稼働中 | XTRUSTデバイスレンタルの製品LP（S01Hero〜S14Footer） |
| `/download` | ✅ 稼働中 | 資料請求ページ。フォーム送信は mailto 方式（暫定） |
| `/about`・`/news`・`/careers`・`/contact` | 🚧 ダミー | 「準備中」プレースホルダ（`ComingSoon`） |
| `/privacy`・`/terms`・`/security`・`/legal` | 🚧 ダミー | 規約・ポリシー系の「準備中」プレースホルダ |

### トップページについて（/）

新キービジュアルでリブランディング。`src/app/page.tsx` が本体。
Hero（`section.home`・100vh・背景は `hero-visual_woman_002.jpg`）＋ 共通フッター（`SiteFooter`）の構成。
ヘッダーは白背景バーではなく、透明背景にロゴ＋ナビが乗るシームレス仕様。
スタイルは `/product` の mockup CSS とは分離した `src/app/home.css`（`.home` スコープ）。
今後、Hero とフッターの間にセクションを積み増していく想定。

### 資料請求ページについて（/download）

`src/app/download/` 配下。左に資料情報、右に入力フォームの2カラム。
フォーム（`RequestForm`・client component）の送信は `matsumotokaya@gmail.com` 宛の **mailto 方式（暫定）**。
届いたメールに手動で資料を返信する運用。後で Resend 等のサーバー送信に差し替え可能。
スタイルはトップに合わせた `src/app/download/download.css`（`.dl` スコープ）。

### ダミーページ・共通フッターについて

フッター（`SiteFooter`）のリンク切れ防止に、未着手ルートは `ComingSoon`（「準備中」表示）でダミー掲載。
`SiteFooter` は3カラムリンク＋ソーシャル（X / YouTube / note / Facebook / LinkedIn）。
ソーシャルのリンク先は公式アカウント確定まで `#`。

### 製品LPについて（/product）

`src/app/product/page.tsx` が本体。S01Hero〜S14Footer の14セクション構成。
セクションコンポーネントは `src/components/sections/` 以下。

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
    page.tsx                # / トップページ（Hero + SiteFooter）
    home.css                # トップ専用スタイル（.home スコープ）
    globals.css             # Tailwind + @theme トークン + CSS
    mockup-base.css         # 基盤・hero・shells・footer（/product 用）
    mockup-sections.css     # 各セクションの構成ブロック（/product 用）
    product/
      page.tsx              # /product 製品LP本体
    download/
      page.tsx              # /download 資料請求ページ
      RequestForm.tsx       # 入力フォーム（client・mailto送信）
      download.css          # 資料請求ページ用スタイル（.dl スコープ）
    about/ news/ careers/ contact/      # ダミーページ（ComingSoon）
    privacy/ terms/ security/ legal/    # ダミーページ（規約・ポリシー系）
  components/
    TopHeader.tsx           # 製品LP用グローバルナビ（資料請求は /download へ）
    SiteFooter.tsx (+ .css) # サイト共通フッター（3カラム + ソーシャル）
    ComingSoon.tsx (+ .css) # 「準備中」プレースホルダページ
    Logo / Eyebrow / Placeholder / SectionMap
    sections/               # S01Hero 〜 S14Footer（製品LP用14セクション）
public/
  images/                   # ロゴ・端末画像・トップ背景（hero-visual_woman_002.jpg 等）
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

### トップページ（/）
- **本文セクション** — Hero とフッターの間に、製品詳細などのセクションを移植・追加していく。

### 資料請求ページ（/download）
- **送信方式** — 現状は mailto（暫定）。Resend 等のサーバー送信に差し替え予定。
- **資料本体** — 実資料が未確定。サムネはロゴ入りプレースホルダ。確定後に差し替え。

### 製品LP（/product）
- **CTA リンク先** — 「お問い合わせ」は仮（`/product#sec-13`）。予約URL確定後に差し替え。
- **法人表記（Footer）** — 運営会社・所在地・連絡先・特商法表記はプレースホルダ。確定後に掲載。
- **画像** — Use Case / Lifecycle の図解は `.ph` プレースホルダ。実写・イラストを後差し込み。

### 共通
- **ダミーページ** — `/about`・`/news`・`/careers`・`/contact`・`/privacy`・`/terms`・`/security`・`/legal` は `ComingSoon` の仮ページ。各コンテンツを順次作成。
- **ソーシャルリンク** — フッターの X / YouTube / note / Facebook / LinkedIn は公式アカウント確定後に URL を設定（現状 `#`）。
