# XTRUST 製品ページ (web-xtrust)

オフラインAI端末レンタルサービス「XTRUST」の製品ページ。縦スクロール型の情報網羅型LP。

## 技術スタック

- **Next.js 16 (App Router) + TypeScript** — 完全静的（SSG）生成
- **Tailwind CSS v4** — デザイントークンを `@theme` に定義
- **デザインシステム** — v002 モックアップ（`farm-xtrust/60_harvest/lp/v002`）を忠実移植
  - `src/app/mockup-base.css` / `src/app/mockup-sections.css` がモックアップCSSの移植版
  - フォントは Google Fonts（Inter / Noto Sans JP / IBM Plex Mono）を `<link>` で読み込み
- **デプロイ** — Vercel（`x-trust-jp/web-xtrust`）

## コンテンツ運用（farm → web 一方向同期）

訴求コピーの正本は farm 側の `content.yaml`。web リポジトリへは一方向に同期する。

- 正本: `farm-xtrust/60_harvest/lp/v002/content.yaml`
- web 側の受け口: `src/content/content.yaml`
- ビルド時に `src/content/content.ts` が読み込み・型付けして各セクションへ供給

訴求を変更するときは farm 側を更新し、`content.yaml` を web へコピーする。

## 構成

```
src/
  app/
    layout.tsx              # フォント読込・SEO/OGP メタデータ
    page.tsx                # 14セクションを縦に並べる
    globals.css             # Tailwind + @theme トークン + 移植CSS
    mockup-base.css         # 移植: 基盤・hero・各セクション
    mockup-sections.css     # 移植: 再利用ブロック
  components/
    Logo / Cta / Eyebrow / Placeholder / SectionMap
    sections/               # Hero 〜 Footer の14セクション
  content/
    content.yaml            # 正本（farm から同期）
    content.ts              # 読込・型付け・セクション別 export
    types.ts                # コンテンツ型
    links.ts                # CTA リンク先（v1 はスタブ）
public/
  images/                   # ロゴ・端末画像
  downloads/                # 営業資料 PDF
```

## 開発

```bash
npm run dev      # 開発サーバ
npm run build    # 本番ビルド（SSG）
npm run start    # 本番サーバ
```

## 公開前の TODO（content.yaml: soil_alignment_needed）

正本が `status: draft` のため、以下は soil 確定後にコピーを差し替える。

- **beta_offer** — ベータ訴求。旧「実質月額0円」ではなく確定オファー「初期費用無料」を採用中。最終コピー要確定。
- **problem_3** — 攻撃事例の出典（SQLite / OpenSSL）が claim 未登録。公開前に出典確認。
- **faq** — 暫定回答。soil と照合して磨く。
- **footer / legal** — 運営会社・特商法表記・問い合わせ方式が未確定（farm-014）。リンクはプレースホルダ。
- **CTA リンク先** — `src/content/links.ts` の `beta_signup` / `book_meeting` はスタブ。確定後に差し替え。
- **画像** — Use Case 等の図解はプレースホルダ。実写・イラストを後差し込み。
