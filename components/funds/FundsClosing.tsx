import { ClosingActions } from "@/components/ui/ClosingActions";

export function FundsClosing() {
  return (
    <section className="bg-navy pt-20 pb-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-serif italic font-normal text-white text-[clamp(32px,3.6vw,44px)] leading-[1.15] m-0 mb-16 text-center max-w-[18ch] mx-auto">
          A new standard for accessing private funds.
        </h2>
        <ClosingActions />
      </div>
    </section>
  );
}
