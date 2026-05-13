import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function FundsHero() {
  return (
    <section className="bg-cream pt-36 pb-20 text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <Eyebrow>Fund Investments</Eyebrow>
        <h1 className="font-serif italic font-normal text-navy text-[clamp(44px,6vw,72px)] leading-[1.05] mt-5 mb-5 max-w-[18ch] mx-auto">
          Private funds, on a single platform.
        </h1>
        <p className="text-[18px] leading-[1.6] max-w-[640px] mx-auto text-ink/[0.75] mb-9">
          Discover, evaluate, and allocate to institutional-grade private funds — curated for serious investors and managed end-to-end through FloatX.
        </p>
        <Button href="https://app.floatx.com/signup?tier=sophisticated" variant="primary" shape="pill">
          Get Started
        </Button>
      </div>
    </section>
  );
}
