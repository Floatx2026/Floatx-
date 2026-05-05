import { Eyebrow } from "@/components/ui/Eyebrow";
import { TierCard } from "./TierCard";

const tiers = [
  {
    eyebrow: "For High-Net-Worth",
    title: "Sophisticated Investor",
    tagline: "Full access to private and wholesale markets.",
    bullets: [
      "A$2.5M+ net assets, or A$250K+ income",
      "Accountant's certificate (valid 2 years)",
      "Private and wholesale offers",
      "Bespoke mandates and institutional deal flow",
      "Dedicated investor coverage",
    ],
    ctaLabel: "Apply as Sophisticated",
    ctaHref: "/apply?tier=sophisticated",
  },
  {
    eyebrow: "Knowledge-Based Access",
    title: "Experienced Investor",
    tagline: "Wholesale access through demonstrated experience.",
    bullets: [
      "Demonstrable investing experience and knowledge",
      "Understanding of wholesale-investment risks",
      "No Sophisticated thresholds required",
      "Curated wholesale opportunities",
      "Research and advisory support",
    ],
    ctaLabel: "Apply as Experienced",
    ctaHref: "/apply?tier=experienced",
  },
  {
    eyebrow: "Open to All Investors",
    title: "Retail Investor",
    tagline: "Regulated access with full investor protections.",
    bullets: [
      "No wealth or experience prerequisites",
      "Retail-approved products only",
      "Product Disclosure Statement (PDS)",
      "Target Market Determination (TMD)",
      "Full consumer safeguards apply",
    ],
    ctaLabel: "Apply As Retail",
    ctaHref: "/apply?tier=retail",
  },
];

export function Classifications() {
  return (
    <section className="bg-page-bg pt-8 pb-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12">
          <Eyebrow>Investor Classifications</Eyebrow>
          <h2 className="font-sans font-bold text-navy text-[clamp(30px,3.6vw,44px)] leading-[1.1] -tracking-[0.02em] mt-3 mb-4">
            Choose your path to be an Accredited Member for Full Access
          </h2>
          <p className="text-[16px] text-ink/75 m-0 leading-[1.6]">
            FloatX tailors access to opportunities based on your investor classification under Australian regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <TierCard key={t.title} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
