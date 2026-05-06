import { Button } from "@/components/ui/Button";

export function PropertyComingSoon() {
  return (
    <section id="early-access" className="bg-cream py-24 scroll-mt-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="bg-white border border-line rounded-[28px] shadow-[0_18px_40px_-22px_rgba(22,35,71,0.16)] p-10 min-[900px]:p-14">
          <div className="grid grid-cols-1 min-[900px]:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-[10.5px] uppercase tracking-[0.14em] font-semibold text-tan border border-tan/40 px-3 py-1 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-tan animate-pulse" aria-hidden="true" />
                Coming soon
              </span>
              <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.4vw,40px)] leading-[1.15] m-0 mb-4 max-w-[20ch]">
                Property investments are coming to FloatX.
              </h2>
              <p className="text-[15px] leading-[1.65] text-ink/[0.78] m-0 max-w-[58ch]">
                We&apos;re onboarding a curated set of mortgage and property-fund managers. Register early access to be notified when the first allocations open to wholesale members.
              </p>
            </div>
            <div className="text-left min-[900px]:text-right">
              <Button
                href="/apply?tier=sophisticated&interest=property"
                shape="pill"
                variant="primary"
              >
                Get early access
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
