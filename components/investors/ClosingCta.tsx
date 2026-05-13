import { Button } from "@/components/ui/Button";

export function ClosingCta() {
  return (
    <section className="bg-navy py-24 text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-serif italic font-normal text-white text-[clamp(36px,5vw,56px)] leading-[1.1] m-0 mb-5">
          Join our network
        </h2>
        <p className="text-white/85 text-[17px] leading-[1.6] max-w-[620px] mx-auto mb-8">
          Become part of an exclusive community of investors who trust FloatX for private market access and intelligent trading execution.
        </p>
        <Button href="https://app.floatx.com/signup" variant="outlineWhite" shape="pill">
          Apply Now
        </Button>
      </div>
    </section>
  );
}
