import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "採用情報 | XTRUST" };

export default function Page() {
  return <ComingSoon title="採用情報" />;
}
