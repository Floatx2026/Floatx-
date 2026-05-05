import { FundsHero } from "@/components/funds/FundsHero";
import { FundIndex } from "@/components/funds/FundIndex";
import { BigStats } from "@/components/funds/BigStats";
import { ExploreBand } from "@/components/funds/ExploreBand";
import { SplitFeatures } from "@/components/funds/SplitFeatures";
import { HowItWorksFunds } from "@/components/funds/HowItWorksFunds";
import { InsightsBand } from "@/components/funds/InsightsBand";
import { FundsClosing } from "@/components/funds/FundsClosing";

export const metadata = {
  title: "Fund Investments — FloatX",
  description:
    "Discover, evaluate and allocate to institutional-grade private funds through FloatX.",
};

export default function FundInvestmentsPage() {
  return (
    <>
      <FundsHero />
      <FundIndex />
      <BigStats />
      <ExploreBand />
      <SplitFeatures />
      <HowItWorksFunds />
      <InsightsBand />
      <FundsClosing />
    </>
  );
}
