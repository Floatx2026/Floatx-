import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/ui/FadeUp";

const pillars = [
  {
    title: "Exclusive Deal Flow",
    body: "Tap into private opportunities and off-market trades typically reserved for institutions.",
  },
  {
    title: "Proven Performance",
    body: "A disciplined, data-driven approach delivering consistent above-market results, powered by AI insights.",
  },
  {
    title: "Swift Execution",
    body: "Best-in-class technology and blockchain infrastructure for fast, transparent execution.",
  },
];

export function Advantage() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp>
          <div className="mb-10 max-w-[640px]">
            <Eyebrow>Why FloatX</Eyebrow>
            <h2 className="font-sans font-bold text-navy text-[clamp(32px,4vw,48px)] leading-[1.1] -tracking-[0.02em] mt-3 mb-4">
              The FloatX advantage
            </h2>
          </div>
        </FadeUp>

        <FadeUp delay={80}>
        <div className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-page-bg border border-line rounded-[18px] p-8"
            >
              <h3 className="font-sans font-bold text-navy text-[22px] m-0 mb-3 -tracking-[0.01em]">
                {p.title}
              </h3>
              <p className="text-ink/75 leading-[1.65] m-0 text-[15px]">{p.body}</p>
            </div>
          ))}
        </div>
        </FadeUp>
      </div>
    </section>
  );
}
