# XTRUST 製品ページ (web-xtrust)

オフラインAI端末レンタルサービス「XTRUST」の製品ページ。縦スクロール型の情報網羅型LP。

## 本番URL

**https://x-trust.jp**（Vercel にて稼働中）

## サイト構成

| ページ | 内容 |
|--------|------|
| `/`（トップ） | XTRUSTデバイスレンタルサービスの紹介LP（本リポジトリ） |
| `/about`（予定） | エックストラスト株式会社の会社概要（内容未定） |

## 技術スタック

- **Next.js 16 (App Router) + TypeScript** — 完全静的（SSG）生成
- **Tailwind CSS v4** — デザイントークンを `@theme` に定義
- **フォント** — Google Fonts（Inter / Noto Sans JP / IBM Plex Mono）を `<link>` で読み込み
- **デプロイ** — Vercel（`x-trust-jp/web-xtrust`）

## 構成

```
src/
  app/
    layout.tsx              # フォント読込・SEO/OGP メタデータ
    page.tsx                # 14セクションを縦に並べる
    globals.css             # Tailwind + @theme トークン + 移植CSS
    mockup-base.css         # 基盤・hero・shells・footer
    mockup-sections.css     # 各セクションの構成ブロック
  components/
    Logo / Eyebrow / Placeholder / SectionMap
    sections/               # S01Hero 〜 S14Footer（14セクション）
public/
  images/                   # ロゴ・端末画像
  downloads/                # 営業資料 PDF
```

### セクション一覧

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
- **会社概要ページ** — `/about` のコンテンツ未定。
