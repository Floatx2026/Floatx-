import type { ReactNode } from "react";
import { FadeUp } from "@/components/ui/FadeUp";

type Benefit = {
  title: string;
  body: string;
  icon: ReactNode;
};

const benefits: Benefit[] = [
  {
    title: "Liquidity offering",
    body:
      "Equity investors get a clear exit path post-investment — secondary trading inside FloatX rather than waiting for an IPO.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-8 h-8">
        <path
          d="M3 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 9c2-2 4-2 6 0s4 2 6 0 4-2 6 0"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.55"
        />
      </svg>
    ),
  },
  {
    title: "Unlock superior returns",
    body:
      "Private companies can deliver materially higher returns by capturing growth before they reach public markets.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-8 h-8">
        <path d="M4 18l5-5 4 3 7-9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 7h6v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Discover hidden potential",
    body:
      "Participate in the trajectory of promising private companies before they cross over into public listings.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-8 h-8">
        <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.7" />
        <path d="M16 16l4.5 4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M11 8.5v5M8.5 11h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function CompanyInvestmentBenefits() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp>
          <div className="max-w-[720px] mb-12">
            <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.6vw,42px)] leading-[1.15] m-0 mb-3">
              Liquidity on your investment.
            </h2>
            <p className="text-[16px] leading-[1.65] text-ink/[0.78] m-0">
              Trade your equity online — exit when the timing is right for you, not when the company chooses to list.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={80}>
        <div className="grid grid-cols-1 min-[700px]:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-cream border border-line rounded-[20px] p-7 flex flex-col gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-white border border-tan/30 flex items-center justify-center text-tan">
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
