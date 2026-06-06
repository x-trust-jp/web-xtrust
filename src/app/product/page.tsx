import type { Metadata } from "next";
import { ProductLandingPage } from "@/components/ProductLandingPage";

export const metadata: Metadata = {
  title: "製品概要 | XTRUST — オフラインAI端末レンタルサービス",
  description:
    "通信機能0のローカルAI搭載ノートPCを月5万円～レンタル可能。契約・財務・人事・医療・監査・投資判断など高機密業務のAI化を、1バイトも外部に漏らさず実現。",
};

export default function ProductPage() {
  return <ProductLandingPage />;
}
