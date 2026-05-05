import { InvestmentsHero } from "@/components/investments/InvestmentsHero";
import { ProductCategories } from "@/components/investments/ProductCategories";
import { OpportunityExplorer } from "@/components/investments/OpportunityExplorer";
import { InvestmentsClosing } from "@/components/investments/InvestmentsClosing";

export const metadata = {
  title: "Opportunities — FloatX",
  description:
    "Invest and trade across global private opportunities on FloatX — late-stage technology and fintech leaders, plus Australian capital raises.",
};

export default function InvestmentsPage() {
  return (
    <>
      <InvestmentsHero />
      <ProductCategories />
      <OpportunityExplorer />
      <InvestmentsClosing />
    </>
  );
}
