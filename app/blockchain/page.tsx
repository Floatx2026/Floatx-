import { BlockchainHero } from "@/components/blockchain/BlockchainHero";
import { BlockchainBenefits } from "@/components/blockchain/BlockchainBenefits";
import { BlockchainHowItWorks } from "@/components/blockchain/BlockchainHowItWorks";
import { ContactClosing } from "@/components/contact/ContactClosing";

export const metadata = {
  title: "Blockchain Technology — FloatX",
  description:
    "FloatX uses blockchain and distributed ledger technology to make private market trading immutably recorded, fraud-proof and auditable in real-time.",
};

export default function BlockchainPage() {
  return (
    <>
      <BlockchainHero />
      <BlockchainBenefits />
      <BlockchainHowItWorks />
      <ContactClosing />
    </>
  );
}
