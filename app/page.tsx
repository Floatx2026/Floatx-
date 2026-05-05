import { HomeHero } from "@/components/home/HomeHero";
import { HomeStats } from "@/components/home/HomeStats";
import { AccessGrid } from "@/components/home/AccessGrid";
import { FeaturedOpportunities } from "@/components/home/FeaturedOpportunities";
import { HomePersonas } from "@/components/home/HomePersonas";
import { HomeInsights } from "@/components/home/HomeInsights";
import { HomeClosing } from "@/components/home/HomeClosing";

export const metadata = {
  title: "FloatX — The wholesale platform for private markets",
  description:
    "FloatX is the wholesale platform for private equity, fund subscriptions, debt, property and cash strategies — built for family offices, institutions and qualified investors across the Asia-Pacific.",
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <AccessGrid />
      <FeaturedOpportunities />
      <HomePersonas />
      <HomeInsights />
      <HomeClosing />
    </>
  );
}
