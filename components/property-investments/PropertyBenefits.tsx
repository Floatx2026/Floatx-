import type { ReactNode } from "react";

type Benefit = {
  title: string;
  body: string;
  icon: ReactNode;
};

const benefits: Benefit[] = [
  {
    title: "Reliable risk-adjusted returns",
    body:
      "Mortgages provide a consistent and dependable income stream — a strategic asset allocation that complements equity and credit positions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-8 h-8">
        <path d="M3 18h18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M5 18v-6m4 6v-9m4 9v-5m4 5v-11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M5 12l4-3 4 1 4-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
      </svg>
    ),
  },
  {
    title: "Professional managers",
    body:
      "Hand-picked debt managers with deep track records ensure every risk factor is appraised and mitigated — giving you institutional-grade diligence on every position.",
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
  {
    title: "Capital stability",
    body:
      "Investments are backed by secured property assets — capital protection comes from real collateral, not just promise of repayment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-8 h-8">
        <path d="M4 20V9l8-5 8 5v11" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M3 20h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <rect x="9.5" y="13" width="5" height="7" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="9.5" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
];

export function PropertyBenefits() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[720px] mb-12">
          <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.6vw,42px)] leading-[1.15] m-0 mb-3">
            Secure, stable, returns.
          </h2>
          <p className="text-[16px] leading-[1.65] text-ink/[0.78] m-0">
            Single-asset positions and diversified fund strategies — both backed by real property collateral and managed by specialists.
          </p>
        </div>

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
      </div>
    </section>
  );
}
