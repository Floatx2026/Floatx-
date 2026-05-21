import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/FadeUp";

export function TechClosing() {
  return (
    <section className="bg-navy pt-20 pb-24">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <FadeUp>
          <h2 className="font-serif italic font-normal text-white text-[clamp(28px,3.6vw,40px)] leading-[1.15] m-0 mb-6 max-w-[20ch] mx-auto">
            Ready to accelerate your startup journey?
          </h2>
          <p className="text-white/70 text-[16px] leading-[1.65] m-0 mb-10 max-w-[54ch] mx-auto">
            Apply now and FloatX Ventures will contact you with next steps. Backed by 33 years of experience and $4B+ under management.
          </p>
        </FadeUp>
        <FadeUp delay={80}>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="#pitch" variant="outlineWhite" shape="pill">
            Pitch your idea
          </Button>
          <Button href="/insights" variant="outlineWhite" shape="pill">
            Read our insights
          </Button>
        </div>
        </FadeUp>
      </div>
    </section>
  );
}
