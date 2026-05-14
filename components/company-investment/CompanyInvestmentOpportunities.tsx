import type { Opportunity } from "@/lib/opportunities";
import { OpportunityCard } from "@/components/investments/OpportunityCard";

export function CompanyInvestmentOpportunities({ opportunities }: { opportunities: Opportunity[] }) {
  const items = opportunities.filter((o) => o.type === "Company Investment");

  return (
    <section id="opportunities" className="bg-cream py-24 scroll-mt-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[640px] mb-12">
          <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.6vw,42px)] leading-[1.15] m-0 mb-3">
            Discover our opportunities.
          </h2>
          <p className="text-[16px] leading-[1.65] text-ink/[0.78] m-0">
            Live company investments currently open to FloatX wholesale investors.
          </p>
        </div>

        <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[960px]:grid-cols-3 min-[1240px]:grid-cols-4 gap-5">
          {items.map((o) => (
            <OpportunityCard key={o.name} o={o} />
          ))}
        </div>
      </div>
    </section>
  );
}
