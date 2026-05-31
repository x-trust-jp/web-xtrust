# XTRUST サイト (web-xtrust)

エックストラスト株式会社のコーポレートサイト兼製品LPリポジトリ。

## 本番URL

**https://x-trust.jp**（Vercel にて稼働中）

## サイト構成

| URL | 状態 | 内容 |
|-----|------|------|
| `/` | 🚧 リブランディング中 | トップページ（現在は仮置き。次セッションで新規設計） |
| `/product` | ✅ 稼働中 | XTRUSTデバイスレンタルの製品LP（S01Hero〜S14Footer） |
| `/about` | 🔜 未着手 | エックストラスト株式会社の会社概要（コンテンツ未定） |

### トップページについて

`src/app/page.tsx` は現在プレースホルダ状態。
コンテンツ・デザインともに **次セッションで新規指定・設計予定**。
現行の `page.tsx` の内容は参考にしない。

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
    page.tsx                # / トップページ（🚧 リブランディング中）
    globals.css             # Tailwind + @theme トークン + CSS
    mockup-base.css         # 基盤・hero・shells・footer
    mockup-sections.css     # 各セクションの構成ブロック
    product/
      page.tsx              # /product 製品LP本体
  components/
    TopHeader.tsx           # グローバルナビ（ロゴ左・製品概要/会社概要/資料DL/お問い合わせ）
    Logo / Eyebrow / Placeholder / SectionMap
    sections/               # S01Hero 〜 S14Footer（製品LP用14セクション）
public/
  images/                   # ロゴ・端末画像（laptop_001.png 等）
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

### トップページ（次セッション着手）
- コンテンツ・デザインを新規指定して `src/app/page.tsx` を作り直す
- TopHeader（`src/components/TopHeader.tsx`）は流用可能

### 製品LP（/product）
- **CTA リンク先** — 「お問い合わせ」は仮（`/product#sec-13`）。予約URL確定後に差し替え。
- **法人表記（Footer）** — 運営会社・所在地・連絡先・特商法表記はプレースホルダ。確定後に掲載。
- **画像** — Use Case / Lifecycle の図解は `.ph` プレースホルダ。実写・イラストを後差し込み。

### 共通
- **会社概要ページ** — `/about` のコンテンツ未定。
