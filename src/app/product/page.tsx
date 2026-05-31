import type { Metadata } from "next";
import { SectionMap } from "@/components/SectionMap";
import { S01Hero } from "@/components/sections/S01Hero";
import { S02Problem } from "@/components/sections/S02Problem";
import { S03Product } from "@/components/sections/S03Product";
import { S04Solution } from "@/components/sections/S04Solution";
import { S05BaseAbility } from "@/components/sections/S05BaseAbility";
import { S06UseCaseMeeting } from "@/components/sections/S06UseCaseMeeting";
import { S07UseCaseTranscribe } from "@/components/sections/S07UseCaseTranscribe";
import { S08UseCaseReview } from "@/components/sections/S08UseCaseReview";
import { S09UseCasePMIDD } from "@/components/sections/S09UseCasePMIDD";
import { S10UseCaseMaster } from "@/components/sections/S10UseCaseMaster";
import { S11Lifecycle } from "@/components/sections/S11Lifecycle";
import { S12Poc } from "@/components/sections/S12Poc";
import { S13FinalCta } from "@/components/sections/S13FinalCta";
import { S14Footer } from "@/components/sections/S14Footer";

export const metadata: Metadata = {
  title: "製品概要 | XTRUST — オフラインAI端末レンタルサービス",
  description:
    "通信機能0のローカルAI搭載ノートPCを月5万円～レンタル可能。契約・財務・人事・医療・監査・投資判断など高機密業務のAI化を、1バイトも外部に漏らさず実現。",
};

export default function ProductPage() {
  return (
    <>
      <SectionMap />
      <S01Hero />
      <S02Problem />
      <S03Product />
      <S04Solution />
      <S05BaseAbility />
      <S06UseCaseMeeting />
      <S07UseCaseTranscribe />
      <S08UseCaseReview />
      <S09UseCasePMIDD />
      <S10UseCaseMaster />
      <S11Lifecycle />
      <S12Poc />
      <S13FinalCta />
      <S14Footer />
    </>
  );
}
