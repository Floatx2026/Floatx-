import { InsightsHero } from "@/components/insights/InsightsHero";
import { FloatXArticles } from "@/components/insights/FloatXArticles";
import { PortfolioNews } from "@/components/insights/PortfolioNews";
import { InsightsClosing } from "@/components/insights/InsightsClosing";

export const metadata = {
  title: "Insights — FloatX",
  description:
    "Original commentary on private capital from the FloatX team, plus selected news on the companies currently running through our platform.",
};

export default function InsightsPage() {
  return (
    <>
      <InsightsHero />
      <FloatXArticles />
      <PortfolioNews />
      <InsightsClosing />
    </>
  );
}
