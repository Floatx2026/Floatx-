"use client";

import { useState } from "react";
import { FadeUp } from "@/components/ui/FadeUp";

const faqs = [
  {
    q: "Who is eligible to invest in Cash Plus?",
    a: "Cash Plus is offered only to wholesale, sophisticated and professional investors as defined under section 708 of the Corporations Act. During account setup, FloatX will verify your status — typically via an accountant's certificate or evidence of professional investor classification.",
  },
  {
    q: "How is the target return achieved?",
    a: "The fund runs an active short-duration mandate, allocating across cash deposits, government bonds, investment-grade corporate credit and selected senior private credit. The portfolio aims to capture yield above the RBA cash rate while keeping interest-rate and credit risk tightly managed. Past performance is not a reliable indicator of future returns.",
  },
  {
    q: "What does the target return mean?",
    a: "It is an objective, not a guarantee. The fund aims to deliver distributions equal to the RBA cash rate plus 2% p.a., net of fees and expenses. If the target is not met in a given period, the manager has features in place that aim to make up for the shortfall over time — the PDS explains how.",
  },
  {
    q: "What fees apply?",
    a: "A management fee is deducted from fund earnings before distribution and is reflected in the net target return. There are no entry fees, exit fees, performance fees or platform fees on Cash Plus. The PDS contains the complete fee schedule.",
  },
  {
    q: "How quickly can I withdraw?",
    a: "Withdrawal requests submitted on any business day are processed the same day. Funds settle to your nominated AUD account on T+1. There are no lock-up periods, holding-period requirements or exit fees.",
  },
  {
    q: "Are returns guaranteed?",
    a: "No. Cash Plus is a managed investment product, not a bank deposit, and capital is not guaranteed. The target return is an objective the fund aims to achieve, not a promise. All investments carry risk — please read the PDS and TMD before investing.",
  },
  {
    q: "How are earnings taxed?",
    a: "Distributions are paid as fund income and reported each financial year via your annual investor statement. The tax treatment of distributions depends on your individual circumstances — speak with a registered tax adviser about how Cash Plus fits into your structure.",
  },
];

export function CashPlusFaqs() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-page-bg py-24">
      <div className="max-w-[860px] mx-auto px-6">
        <FadeUp>
          <h2 className="font-serif italic font-normal text-navy text-[clamp(32px,4vw,48px)] leading-[1.15] text-center mb-12">
            Cash Plus FAQs
          </h2>
        </FadeUp>

        <FadeUp delay={80}>
        <div className="rounded-[20px] border border-line bg-white overflow-hidden">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={i !== faqs.length - 1 ? "border-b border-line" : ""}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-7 py-5 cursor-pointer hover:bg-cream/50 transition-colors"
                >
                  <span className="font-sans font-medium text-navy text-[16px] leading-[1.4] -tracking-[0.005em]">
                    {f.q}
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                    className={`flex-none transition-transform duration-200 text-navy/60 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-7 pb-6 pt-0 text-[14.5px] leading-[1.7] text-ink/75 m-0 max-w-[68ch]">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </FadeUp>
      </div>
    </section>
  );
}
