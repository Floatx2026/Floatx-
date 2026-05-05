import { Eyebrow } from "@/components/ui/Eyebrow";

export function InsightsHero() {
  return (
    <section className="bg-cream pt-36 pb-20 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <Eyebrow>Insights</Eyebrow>
        <h1 className="font-serif italic font-normal text-navy text-[clamp(44px,6vw,72px)] leading-[1.05] mt-5 mb-5 max-w-[18ch] mx-auto">
          Notes on private capital.
        </h1>
        <p className="text-[18px] leading-[1.6] max-w-[640px] mx-auto text-ink/[0.75] m-0">
          Original commentary from the FloatX team — alongside selected news on the companies running through our platform.
        </p>
      </div>
    </section>
  );
}
