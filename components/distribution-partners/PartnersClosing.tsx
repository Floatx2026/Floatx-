import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/FadeUp";

export function PartnersClosing() {
  return (
    <section className="bg-navy pt-20 pb-24">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <FadeUp>
          <h2 className="font-serif italic font-normal text-white text-[clamp(28px,3.6vw,40px)] leading-[1.15] m-0 mb-6 max-w-[20ch] mx-auto">
            A platform built for the people who advise.
          </h2>
          <p className="text-white/70 text-[16px] leading-[1.65] m-0 mb-10 max-w-[58ch] mx-auto">
            Curated wholesale alts, transparent revenue share and a partnerships team that actually picks up the phone — start the conversation today.
          </p>
          <Button href="#apply" variant="outlineWhite" shape="pill">
            Apply to partner
          </Button>
        </FadeUp>
      </div>
    </section>
  );
}
