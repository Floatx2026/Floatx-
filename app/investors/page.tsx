import { Hero } from "@/components/investors/Hero";
import { StatsStrip } from "@/components/investors/StatsStrip";
import { Classifications } from "@/components/investors/Classifications";
import { Advantage } from "@/components/investors/Advantage";
import { ClosingCta } from "@/components/investors/ClosingCta";

export const metadata = {
  title: "Investors — FloatX",
  description: "Investor classifications and access to private market opportunities.",
};

export default function InvestorsPage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Classifications />
      <Advantage />
      <ClosingCta />
    </>
  );
}
