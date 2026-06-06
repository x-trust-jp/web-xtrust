import type { Metadata } from "next";
import { ProductPageV2 } from "@/components/ProductPageV2";

export const metadata: Metadata = {
  title: "製品ページ案2 | XTRUST",
  description:
    "XTRUST の新しいトップページ案。新キービジュアルと製品紹介セクションを段階的に組み替えていくための検討用ページ。",
};

export default function ProductPage2() {
  return <ProductPageV2 />;
}
