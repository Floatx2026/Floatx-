import { Button } from "@/components/ui/Button";

export function BusinessCTA() {
  return (
    <section className="bg-navy py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <p className="font-sans font-medium text-tan text-[13px] tracking-[1.6px] uppercase mb-4">
              Get Started
            </p>
            <h2 className="font-serif italic font-normal text-white text-[clamp(28px,3.4vw,44px)] leading-[1.15] m-0 mb-4 max-w-[22ch]">
              Partner with us to unlock your investor network.
            </h2>
            <p className="text-[16px] leading-[1.6] text-white/65 m-0 max-w-[480px]">
              Get your custom growth package — our team will work with you to build the right combination of services for your business stage and goals.
            </p>
          </div>

          <div className="flex min-[900px]:items-end">
            <Button href="/contact" variant="outlineWhite" shape="pill" className="whitespace-nowrap border-white hover:bg-white hover:text-navy">
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
