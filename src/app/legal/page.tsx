import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "特定商取引法に基づく表記 | XTRUST" };

export default function Page() {
  return <ComingSoon title="特定商取引法に基づく表記" />;
}
