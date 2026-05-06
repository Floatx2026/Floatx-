import { PropertyHero } from "@/components/property-investments/PropertyHero";
import { PropertyBenefits } from "@/components/property-investments/PropertyBenefits";
import { PropertyComingSoon } from "@/components/property-investments/PropertyComingSoon";
import { PropertyClosing } from "@/components/property-investments/PropertyClosing";

export const metadata = {
  title: "Property Investments — FloatX",
  description:
    "Diversified property exposure through professionally-managed mortgage and fund strategies on FloatX — risk-adjusted returns secured by real assets. Register for early access.",
};

export default function PropertyInvestmentsPage() {
  return (
    <>
      <PropertyHero />
      <PropertyBenefits />
      <PropertyComingSoon />
      <PropertyClosing />
    </>
  );
}
