import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export function BusinessServicesHero() {
  return (
    <section className="bg-cream pt-36 pb-20 relative overflow-hidden">
      <div className="max-w-[860px] mx-auto px-6 text-center">
        <Eyebrow>Business Services</Eyebrow>
        <h1 className="font-serif italic font-normal text-navy text-[clamp(44px,6vw,72px)] leading-[1.05] mt-5 mb-5">
          Accelerate your growth.
        </h1>
        <p className="text-[18px] leading-[1.6] text-ink/[0.75] m-0 mb-8 max-w-[580px] mx-auto">
          An integrated suite of investor relations, marketing, capital markets and operational services — exclusively designed to connect private companies and fund managers with qualified investors and global media.
        </p>
        <Button href="/contact" variant="primary" shape="pill">
          Get in touch
        </Button>
      </div>
    </section>
  );
}
