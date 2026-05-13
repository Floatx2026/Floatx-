import { ClosingActions } from "@/components/ui/ClosingActions";

export function ContactClosing() {
  return (
    <section className="relative bg-navy py-10 overflow-hidden">

      <div className="relative max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="font-serif italic font-normal text-white text-[clamp(24px,2.8vw,38px)] leading-[1.1] m-0 mb-8">
          Unlock your investment potential
        </h2>
        <ClosingActions />
      </div>
    </section>
  );
}
