# XTRUST 製品ページ (web-xtrust)

オフラインAI端末レンタルサービス「XTRUST」の製品ページ。縦スクロール型の情報網羅型LP。

## 技術スタック

- **Next.js 16 (App Router) + TypeScript** — 完全静的（SSG）生成
- **Tailwind CSS v4** — デザイントークンを `@theme` に定義
- **デザイン／コンテンツの正本** — v002 モックアップ `Hero.html`
  （`farm-xtrust/60_harvest/lp/v002/Hero.html`）を忠実に移植
  - `src/app/mockup-base.css` / `src/app/mockup-sections.css` がモックアップCSSの移植版
  - フォントは Google Fonts（Inter / Noto Sans JP / IBM Plex Mono）を `<link>` で読み込み
- **デプロイ** — Vercel（`x-trust-jp/web-xtrust`）

## 正本について

レイアウト・コピーともに **`Hero.html`（現行モックアップ）が唯一の正本**。
各セクションコンポーネントは `Hero.html` の DOM を 1:1 で移植している。
訴求を変えるときは、まず farm 側の `Hero.html` を更新し、その差分を本実装へ反映する。

> 旧 `content.yaml`／旧 `Hero (old dummy).html` は廃止済み（構成が古かったため）。

## 構成

```
src/
  app/
    layout.tsx              # フォント読込・SEO/OGP メタデータ
    page.tsx                # 14セクションを縦に並べる
    globals.css             # Tailwind + @theme トークン + 移植CSS
    mockup-base.css         # 移植: 基盤・hero・shells・footer
    mockup-sections.css     # 移植: 各セクションの構成ブロック
  components/
    Logo / Eyebrow / Placeholder / SectionMap
    sections/               # S01Hero 〜 S14Footer（Hero.html の14セクション）
public/
  images/                   # ロゴ・端末画像
  downloads/                # 営業資料 PDF
```

### セクション対応（Hero.html → コンポーネント）

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

## 公開前の TODO

- **CTA リンク先** — 「営業資料」は `/downloads/xtrust-sales-deck.pdf` に接続済み。
  「商談予約」は仮（`#sec-13`）。予約URL確定後に差し替え。
- **法人表記（Footer）** — 運営会社・所在地・連絡先・特商法表記は「公開前」プレースホルダ。確定後に掲載。
- **画像** — Use Case / Lifecycle の図解は `.ph` プレースホルダ。実写・イラストを後差し込み。
- **SITE_URL** — `layout.tsx` の `SITE_URL` は仮（`web-xtrust.vercel.app`）。本番URL確定後に差し替え。
