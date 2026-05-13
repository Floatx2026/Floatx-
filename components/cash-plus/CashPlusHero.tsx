import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { WaveField } from "./WaveField";

export const CURRENT_TARGET_RATE = 6.10;

export function CashPlusHero() {
  return (
    <section className="bg-cream pt-36 pb-24 relative overflow-hidden">
      <WaveField />
      <div className="max-w-[1200px] mx-auto px-6 relative">
        <div className="max-w-[640px] mx-auto text-center">
          <Eyebrow>Cash Plus</Eyebrow>
          <h1 className="font-serif italic font-normal text-navy text-[clamp(44px,6vw,72px)] leading-[1.05] mt-5 mb-5 max-w-[16ch] mx-auto">
            Idle capital, working overnight.
          </h1>
          <p className="text-[18px] leading-[1.6] max-w-[560px] mx-auto text-ink/[0.75] mb-9">
            A wholesale cash strategy targeting RBA cash rate plus 2% p.a. — daily accruals, monthly compounding, and instant access whenever you need your money back.
          </p>

          <div className="inline-flex items-center gap-5 bg-white border border-line rounded-2xl px-8 py-5 mb-10 shadow-[0_10px_28px_-12px_rgba(22,35,71,0.12)]">
            <span className="inline-flex w-2.5 h-2.5 rounded-full bg-tan animate-pulse" aria-hidden="true" />
            <div className="text-left">
              <p className="text-[12px] uppercase tracking-[0.12em] text-ink/55 font-medium m-0">
                Current Target
              </p>
              <p className="font-sans font-bold text-navy text-[36px] leading-none m-0 mt-1.5 -tracking-[0.02em]">
                {CURRENT_TARGET_RATE.toFixed(2)}%
                <span className="text-[16px] font-medium text-ink/60 ml-1">p.a.</span>
              </p>
            </div>
            <div className="border-l border-line pl-5 text-left">
              <p className="text-[12px] uppercase tracking-[0.12em] text-ink/55 font-medium m-0">
                Benchmark
              </p>
              <p className="text-[15px] text-ink/80 font-medium m-0 mt-1.5">RBA cash + 2.00%</p>
            </div>
          </div>

          <div>
            <Button href="https://app.floatx.com/signup?tier=sophisticated&product=cash-plus" variant="primary" shape="pill">
              Open an Account
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
