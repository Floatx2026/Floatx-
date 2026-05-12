import { ClosingActions } from "@/components/ui/ClosingActions";

export function ContactClosing() {
  return (
    <section className="bg-navy-deep py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-serif italic font-normal text-white text-[clamp(30px,4vw,48px)] leading-[1.15] text-center m-0 mb-14">
          Unlock your investment potential
        </h2>
        <ClosingActions />
      </div>
    </section>
  );
}
