import { TechHero } from "@/components/tech-ventures/TechHero";
import { TechStats } from "@/components/tech-ventures/TechStats";
import { TechProcess } from "@/components/tech-ventures/TechProcess";
import { TechFAQ } from "@/components/tech-ventures/TechFAQ";
import { TechForm } from "@/components/tech-ventures/TechForm";
import { TechClosing } from "@/components/tech-ventures/TechClosing";

export const metadata = {
  title: "Tech Ventures — FloatX",
  description:
    "FloatX Ventures provides investment and a complete ecosystem of services to grow your startup — funding, infrastructure, strategic guidance and global accredited investors.",
};

export default function TechVenturesPage() {
  return (
    <>
      <TechHero />
      <TechStats />
      <TechProcess />
      <TechFAQ />
      <TechForm />
      <TechClosing />
    </>
  );
}
