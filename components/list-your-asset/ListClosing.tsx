import { Button } from "@/components/ui/Button";

export function ListClosing() {
  return (
    <section className="bg-navy pt-20 pb-24">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="font-serif italic font-normal text-white text-[clamp(28px,3.6vw,40px)] leading-[1.15] m-0 mb-6 max-w-[20ch] mx-auto">
          Your opportunity, in front of the right investors.
        </h2>
        <p className="text-white/70 text-[16px] leading-[1.65] m-0 mb-10 max-w-[54ch] mx-auto">
          List once. Reach global accredited investors across private trading, equity, funds, debt and property — with go-live in as little as 48 hours.
        </p>
        <Button href="#list" variant="outlineWhite" shape="pill">
          Get started
          <span aria-hidden="true" className="ml-1.5">→</span>
        </Button>
      </div>
    </section>
  );
}
