import { PrivateTradingHero } from "@/components/private-trading/PrivateTradingHero";
import { TradingCategories } from "@/components/private-trading/TradingCategories";
import { TradingBenefits } from "@/components/private-trading/TradingBenefits";
import { TradingOpportunities } from "@/components/private-trading/TradingOpportunities";
import { TradingClosing } from "@/components/private-trading/TradingClosing";

export const metadata = {
  title: "Private Trading — FloatX",
  description:
    "Buy and sell shares in global private companies and funds through FloatX — a verified wholesale secondary market with multi-currency settlement.",
};

export default function PrivateTradingPage() {
  return (
    <>
      <PrivateTradingHero />
      <TradingCategories />
      <TradingBenefits />
      <TradingOpportunities />
      <TradingClosing />
    </>
  );
}
