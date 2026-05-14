import { PrivateTradingHero } from "@/components/private-trading/PrivateTradingHero";
import { TradingCategories } from "@/components/private-trading/TradingCategories";
import { TradingBenefits } from "@/components/private-trading/TradingBenefits";
import { TradingOpportunities } from "@/components/private-trading/TradingOpportunities";
import { TradingClosing } from "@/components/private-trading/TradingClosing";
import { getOpportunities } from "@/lib/opportunities";

export const metadata = {
  title: "Private Trading — FloatX",
  description:
    "Buy and sell shares in global private companies and funds through FloatX — a verified wholesale secondary market with multi-currency settlement.",
};

export default async function PrivateTradingPage() {
  const opportunities = await getOpportunities();
  return (
    <>
      <PrivateTradingHero />
      <TradingCategories />
      <TradingBenefits />
      <TradingOpportunities opportunities={opportunities} />
      <TradingClosing />
    </>
  );
}
