import { Button } from "@/components/ui/Button";
import { ChartPanel } from "@/components/investors/ChartPanel";

export function HomeHero() {
  return (
    <section className="bg-cream pt-36 pb-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 min-[1024px]:grid-cols-[1.05fr_1fr] gap-14 items-center">
        <div>
          <h1 className="font-serif italic font-normal text-navy text-[clamp(44px,6vw,76px)] leading-[1.02] mb-6 max-w-[14ch]">
            Invest in the Extraordinary
          </h1>
          <p className="text-[18px] leading-[1.6] max-w-[560px] text-ink/[0.78] mb-9">
            A global private investment and trading ecosystem supported by AI and Blockchain.
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <Button href="/apply?tier=sophisticated" variant="primary" shape="pill">
              Become a Member
            </Button>
            <Button href="/investments" variant="outlineNavy" shape="pill">
              View opportunities
            </Button>
          </div>
        </div>

        <div className="relative">
          <ChartPanel />
        </div>
      </div>
    </section>
  );
}
