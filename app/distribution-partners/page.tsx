import { PartnersHero } from "@/components/distribution-partners/PartnersHero";
import { PartnersBenefits } from "@/components/distribution-partners/PartnersBenefits";
import { PartnersWho } from "@/components/distribution-partners/PartnersWho";
import { PartnersForm } from "@/components/distribution-partners/PartnersForm";
import { PartnersClosing } from "@/components/distribution-partners/PartnersClosing";

export const metadata = {
  title: "Distribution Partners — FloatX",
  description:
    "Partner with FloatX to bring curated wholesale alts to your clients — revenue share, white-glove onboarding and institutional execution.",
};

export default function DistributionPartnersPage() {
  return (
    <>
      <PartnersHero />
      <PartnersBenefits />
      <PartnersWho />
      <PartnersForm />
      <PartnersClosing />
    </>
  );
}
