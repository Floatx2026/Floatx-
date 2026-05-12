import { WhyHero } from "@/components/why/WhyHero";
import { ComparisonTable } from "@/components/why/ComparisonTable";
import { WhyBlurbs } from "@/components/why/WhyBlurbs";
import { EarlyAccess } from "@/components/why/EarlyAccess";
import { ContactClosing } from "@/components/contact/ContactClosing";

export const metadata = {
  title: "Why FloatX — Your All-in-One Private Markets Platform",
  description:
    "FloatX is the only platform combining private trading, capital raising, fund investments, debt, property, digital wallets, AI and blockchain in one place.",
};

export default function WhyFloatXPage() {
  return (
    <>
      <WhyHero />
      <ComparisonTable />
      <WhyBlurbs />
      <EarlyAccess />
      <ContactClosing />
    </>
  );
}
