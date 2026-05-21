import type { ReactNode } from "react";
import { FadeUp } from "@/components/ui/FadeUp";

type Benefit = {
  title: string;
  body: string;
  icon: ReactNode;
};

const benefits: Benefit[] = [
  {
    title: "Stable income distributions",
    body:
      "Private debt typically delivers predictable, contractual returns paid as periodic distributions — useful where stable cash flow matters.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-8 h-8">
        <path d="M3 16h18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M5 16v-3M9 16v-5M13 16v-2M17 16v-7M21 16v-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="5" cy="13" r="1.4" fill="currentColor" opacity="0.7" />
        <circle cx="13" cy="14" r="1.4" fill="currentColor" opacity="0.7" />
        <circle cx="21" cy="12" r="1.4" fill="currentColor" opacity="0.7" />
      </svg>
    ),
  },
  {
    title: "Investment diversification",
    body:
      "Diversify your portfolio across corporate bonds, fixed-rate notes, floating-rate notes, private credit and property-secured debt.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-8 h-8">
        <circle cx="12" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="5" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="19" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 8.5v3M12 11.5L6.5 16M12 11.5l5.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Robust capital returns",
    body:
      "Fixed-income positions diversify away from cyclical equity exposure — combining capital stability with regular income distributions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-8 h-8">
        <path
          d="M12 3l8 3.5v5.5c0 4.6-3.2 8.4-8 9.5-4.8-1.1-8-4.9-8-9.5V6.5L12 3z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M9 12.5l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function DebtBenefits() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp>
          <div className="max-w-[720px] mb-12">
            <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.6vw,42px)] leading-[1.15] m-0 mb-3">
              Liquidity on your investment.
            </h2>
            <p className="text-[16px] leading-[1.65] text-ink/[0.78] m-0">
              Trade your debt position on the FloatX secondary market — exit when the timing is right for you, not when the loan matures.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={80}>
        <div className="grid grid-cols-1 min-[700px]:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-white border border-line rounded-[20px] p-7 flex flex-col gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-cream border border-tan/30 flex items-center justify-center text-tan">
                {b.icon}
              </div>
              <h3 className="font-sans font-bold text-navy text-[18px] leading-[1.3] m-0 -tracking-[0.005em]">
                {b.title}
              </h3>
              <p className="text-[14px] leading-[1.65] text-ink/75 m-0">{b.body}</p>
            </div>
          ))}
        </div>
        </FadeUp>
      </div>
    </section>
  );
}
