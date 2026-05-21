import type { ReactNode } from "react";
import { FadeUp } from "@/components/ui/FadeUp";

type DebtType = {
  title: string;
  body: string;
  icon: ReactNode;
};

const types: DebtType[] = [
  {
    title: "Fixed income",
    body:
      "Corporate bonds, fixed and floating-rate notes, private credit positions — contractual income with defined maturity dates.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-9 h-9">
        <rect x="3.5" y="6" width="17" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.5 10h17" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="8.5" cy="14" r="1.4" fill="currentColor" />
        <path d="M12 13.5h5.5M12 15.5h3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Property loan",
    body:
      "Mortgage-secured debt positions where investor capital is backed by real property collateral — institutional diligence on every loan.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-9 h-9">
        <path d="M4 20V9l8-5 8 5v11" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M3 20h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path
          d="M9 20v-5h6v5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M12 11.5v-1.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function DebtTypes() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp>
          <div className="max-w-[640px] mb-10">
            <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.4vw,40px)] leading-[1.15] m-0 mb-3">
              Two routes into private debt.
            </h2>
            <p className="text-[16px] leading-[1.65] text-ink/[0.78] m-0">
              Choose the income-stream profile that fits your portfolio — both available to FloatX wholesale members at launch.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={80}>
        <div className="grid grid-cols-1 min-[800px]:grid-cols-2 gap-5">
          {types.map((t) => (
            <div
              key={t.title}
              className="bg-cream border border-line rounded-[20px] p-7 min-[800px]:p-9 flex flex-col gap-5"
            >
              <div className="w-16 h-16 rounded-full bg-white border border-tan/30 flex items-center justify-center text-tan">
                {t.icon}
              </div>
              <h3 className="font-sans font-bold text-navy text-[20px] leading-[1.3] m-0 -tracking-[0.005em]">
                {t.title}
              </h3>
              <p className="text-[15px] leading-[1.65] text-ink/75 m-0">{t.body}</p>
            </div>
          ))}
        </div>
        </FadeUp>
      </div>
    </section>
  );
}
