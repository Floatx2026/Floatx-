import { AboutHero } from "@/components/about/AboutHero";
import { AboutMission } from "@/components/about/AboutMission";
import { AboutStats } from "@/components/about/AboutStats";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutTeam } from "@/components/about/AboutTeam";
import { AboutBacking } from "@/components/about/AboutBacking";
import { ContactClosing } from "@/components/contact/ContactClosing";

export const metadata = {
  title: "About Us — FloatX",
  description:
    "FloatX is backed by AIMS Financial Group — 30 years of financial heritage, $4B+ raised, operating across Australia, China, Hong Kong and Singapore.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutStats />
      <AboutValues />
      <AboutTeam />
      <AboutBacking />
      <ContactClosing />
    </>
  );
}
