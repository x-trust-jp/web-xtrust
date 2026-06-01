import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "会社概要 | XTRUST" };

export default function Page() {
  return <ComingSoon title="会社概要" />;
}
