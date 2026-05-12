import { ClosingActions } from "@/components/ui/ClosingActions";

export function ContactClosing() {
  return (
    <section className="relative bg-navy-deep py-32 overflow-hidden">
      {/* Subtle grid pattern — matches live site */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      {/* Radial glow in centre */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(175,125,67,0.08),transparent)]" />

      <div className="relative max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="font-serif italic font-normal text-white text-[clamp(40px,6vw,68px)] leading-[1.1] m-0 mb-16">
          Unlock your investment potential
        </h2>
        <ClosingActions />
      </div>
    </section>
  );
}
