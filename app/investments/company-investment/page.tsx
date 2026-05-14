import { CompanyInvestmentHero } from "@/components/company-investment/CompanyInvestmentHero";
import { CompanyInvestmentBenefits } from "@/components/company-investment/CompanyInvestmentBenefits";
import { CompanyInvestmentOpportunities } from "@/components/company-investment/CompanyInvestmentOpportunities";
import { CompanyInvestmentClosing } from "@/components/company-investment/CompanyInvestmentClosing";
import { getOpportunities } from "@/lib/opportunities";

export const metadata = {
  title: "Company Investment — FloatX",
  description:
    "Invest equity in global pre-IPO companies through FloatX, with a verified wholesale secondary market giving you a clear exit path post-investment.",
};

export default async function CompanyInvestmentPage() {
  const opportunities = await getOpportunities();
  return (
    <>
      <CompanyInvestmentHero />
      <CompanyInvestmentBenefits />
      <CompanyInvestmentOpportunities opportunities={opportunities} />
      <CompanyInvestmentClosing />
    </>
  );
}
