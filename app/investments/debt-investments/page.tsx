import { DebtHero } from "@/components/debt-investments/DebtHero";
import { DebtTypes } from "@/components/debt-investments/DebtTypes";
import { DebtBenefits } from "@/components/debt-investments/DebtBenefits";
import { DebtComingSoon } from "@/components/debt-investments/DebtComingSoon";
import { DebtClosing } from "@/components/debt-investments/DebtClosing";

export const metadata = {
  title: "Debt Investments — FloatX",
  description:
    "Alternative-asset debt and property-mortgage investments through FloatX — contractual income with capital protection from real underlying collateral.",
};

export default function DebtInvestmentsPage() {
  return (
    <>
      <DebtHero />
      <DebtTypes />
      <DebtBenefits />
      <DebtComingSoon />
      <DebtClosing />
    </>
  );
}
