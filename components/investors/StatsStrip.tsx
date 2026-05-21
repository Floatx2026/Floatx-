import type { ReactNode } from "react";
import { FadeUp } from "@/components/ui/FadeUp";

const tiles: { accent: string; rest: ReactNode }[] = [
  { accent: "40", rest: " Unicorns" },
  { accent: "Live", rest: " Market Depth" },
  { accent: "Global", rest: " Active Investors" },
  { accent: "Fund", rest: " Investment Access" },
];

const labelPrefix = ["Access to over ", "", "", ""];

export function StatsStrip() {
  return (
    <section className="bg-page-bg py-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp>
        <div className="grid grid-cols-2 min-[768px]:grid-cols-4 gap-5 min-[768px]:gap-6">
          {tiles.map((t, i) => (
            <div
              key={i}
              className="feature-tile bg-cream border border-line rounded-[18px] p-[22px] transition-all duration-200 hover:bg-white hover:border-navy hover:-translate-y-[3px] hover:shadow-[0_14px_28px_-10px_rgba(22,35,71,0.12)]"
            >
              <p className="text-[14px] text-ink/65 m-0">
                {labelPrefix[i]}
                <span className="block text-navy font-bold text-[clamp(28px,3.4vw,36px)] leading-none -tracking-[0.02em] mt-1.5">
                  {t.accent}
                </span>
                {t.rest}
              </p>
            </div>
          ))}
        </div>
        </FadeUp>
      </div>
    </section>
  );
}
