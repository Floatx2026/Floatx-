import type { ReactNode } from "react";

type Benefit = {
  title: string;
  body: string;
  icon: ReactNode;
};

const benefits: Benefit[] = [
  {
    title: "Higher return potential",
    body:
      "Private companies can offer materially higher return profiles than listed equivalents — at the cost of liquidity, which our verified secondary market is built to address.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-8 h-8">
        <path d="M4 18l5-5 4 3 7-9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 7h6v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Diversification",
    body:
      "Private trading has low correlation with traditional public markets, helping reduce portfolio-level risk by adding genuine alternative exposure.",
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
    title: "Multi-currency wallet",
    body:
      "Trade globally in multiple currencies. Cross-border settlement is handled inside the platform — quick, safe, and FX-aware.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-8 h-8">
        <rect x="3.5" y="6" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.5 10h17" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16.5" cy="14.5" r="1.4" fill="currentColor" />
      </svg>
    ),
  },
];

export function TradingBenefits() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[720px] mb-12">
          <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.6vw,42px)] leading-[1.15] m-0 mb-3">
            Better, diversified, multi-currency.
          </h2>
          <p className="text-[16px] leading-[1.65] text-ink/[0.78] m-0">
            Access to private trading that, until recently, was reserved for institutions and family offices.
          </p>
        </div>

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
      </div>
    </section>
  );
}
