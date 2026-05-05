import { CashPlusHero } from "@/components/cash-plus/CashPlusHero";
import { CashPlusFeatures } from "@/components/cash-plus/CashPlusFeatures";
import { HowCashPlusWorks } from "@/components/cash-plus/HowCashPlusWorks";
import { CashPlusCalculator } from "@/components/cash-plus/CashPlusCalculator";
import { CashPlusDisclosure } from "@/components/cash-plus/CashPlusDisclosure";
import { FundsClosing } from "@/components/funds/FundsClosing";

export const metadata = {
  title: "Cash Plus — FloatX",
  description:
    "FloatX Cash Plus targets RBA cash rate plus 2% p.a. for wholesale investors, with daily accruals and instant liquidity.",
};

export default function CashPlusPage() {
  return (
    <>
      <CashPlusHero />
      <CashPlusFeatures />
      <CashPlusCalculator />
      <HowCashPlusWorks />
      <FundsClosing />
      <CashPlusDisclosure />
    </>
  );
}
