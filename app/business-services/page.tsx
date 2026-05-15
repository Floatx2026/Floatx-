import { BusinessServicesHero } from "@/components/business-services/BusinessServicesHero";
import { BusinessServicesOffering } from "@/components/business-services/BusinessServicesOffering";
import { InvestorConnectSection } from "@/components/business-services/InvestorConnectSection";
import { BusinessStats } from "@/components/business-services/BusinessStats";
import { WhoWeHelp } from "@/components/business-services/WhoWeHelp";
import { BusinessDifference } from "@/components/business-services/BusinessDifference";
import { BusinessCTA } from "@/components/business-services/BusinessCTA";

export const metadata = {
  title: "Business Services — FloatX",
  description:
    "FloatX Business Services offers integrated investor relations, marketing, media, capital markets strategy and operational services for private companies and fund managers.",
};

export default function BusinessServicesPage() {
  return (
    <>
      <BusinessServicesHero />
      <BusinessServicesOffering />
      <InvestorConnectSection />
      <BusinessStats />
      <WhoWeHelp />
      <BusinessDifference />
      <BusinessCTA />
    </>
  );
}
