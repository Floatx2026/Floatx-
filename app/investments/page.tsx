import { InvestmentsHero } from "@/components/investments/InvestmentsHero";
import { ProductSelector } from "@/components/investments/ProductSelector";
import { InvestmentsClosing } from "@/components/investments/InvestmentsClosing";

export const metadata = {
  title: "Opportunities — FloatX",
  description:
    "Invest and trade across global private opportunities on FloatX — late-stage technology and fintech leaders, plus Australian company investments.",
};

export default function InvestmentsPage() {
  return (
    <>
      <InvestmentsHero />
      <ProductSelector />
      <InvestmentsClosing />
    </>
  );
}
