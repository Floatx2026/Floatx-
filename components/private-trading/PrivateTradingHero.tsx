import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { TradingTicker } from "@/components/private-trading/TradingTicker";

export function PrivateTradingHero() {
  return (
    <section className="bg-cream pt-36 pb-16 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-[1.1fr_1fr] gap-12 min-[900px]:gap-16 items-center">
          <div className="text-center min-[900px]:text-left">
            <Eyebrow>Private Trading</Eyebrow>
            <h1 className="font-serif italic font-normal text-navy text-[clamp(44px,6vw,72px)] leading-[1.05] mt-5 mb-5 max-w-[14ch] mx-auto min-[900px]:mx-0">
              Private Trading.
            </h1>
            <p className="text-[18px] leading-[1.6] max-w-[520px] text-ink/[0.75] m-0 mb-8 mx-auto min-[900px]:mx-0">
              Buy and sell shares in global private companies and funds — with multi-currency settlement and a verified wholesale member base.
            </p>
            <Button href="/apply?tier=sophisticated" variant="primary" shape="pill">
              Get Started
            </Button>
          </div>
          <div className="relative w-full mx-auto">
            <TradingTicker />
          </div>
        </div>
      </div>
    </section>
  );
}
