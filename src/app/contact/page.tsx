import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "お問い合わせ | XTRUST" };

export default function Page() {
  return <ComingSoon title="お問い合わせ" />;
}
