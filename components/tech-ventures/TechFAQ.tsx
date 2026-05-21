"use client";

import { useState } from "react";
import { FadeUp } from "@/components/ui/FadeUp";

const faqs = [
  {
    q: "Why FloatX?",
    a: "Backed by over 33 years of investment experience and $4B+ in assets under management, FloatX provides founders with comprehensive infrastructure and investment services to support business growth. Our private trading platform connects your startup with global accredited investors — giving you access to the kind of demand typically reserved for later-stage companies.",
  },
  {
    q: "What does FloatX Ventures offer?",
    a: null,
    list: [
      { label: "Investment", detail: "Fund your business growth with equity at the right stage" },
      { label: "Global Investor Network", detail: "Connect with accredited investors across AU and APAC" },
      { label: "Expert Guidance", detail: "Learn from experienced directors and industry leaders" },
      { label: "Strategic Partnerships", detail: "Collaborate with co-investors who bring more than capital" },
      { label: "Resources", detail: "Access tools, infrastructure, legal, accounting and templates" },
    ],
  },
  {
    q: "Who is FloatX backed by?",
    a: "Since 1999, AIMS Financial Group — the parent of FloatX — has raised over $4 billion in capital markets and acquired investment assets valued at approximately $4.1 billion. That track record underpins everything FloatX Ventures does for founders.",
  },
];

export function TechFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-24">
      <div className="max-w-[800px] mx-auto px-6">
        <FadeUp>
          <p className="text-[11.5px] uppercase tracking-[0.14em] font-semibold text-ink/45 mb-4">
            Frequently asked questions
          </p>
          <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.4vw,40px)] leading-[1.15] m-0 mb-3">
            Got questions? We can help.
          </h2>
          <p className="text-[16px] leading-[1.65] text-ink/65 m-0 mb-12">
            If you don&apos;t see an answer below, don&apos;t hesitate to get in touch.
          </p>
        </FadeUp>

        <FadeUp delay={80}>
        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className="border border-line rounded-[16px] overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer bg-transparent"
                aria-expanded={open === i}
              >
                <span className="font-sans font-semibold text-navy text-[16px] leading-[1.35]">
                  {f.q}
                </span>
                <span
                  aria-hidden="true"
                  className={`flex-none w-7 h-7 rounded-full border border-line flex items-center justify-center transition-transform duration-200 ${open === i ? "rotate-45 border-navy" : ""}`}
                >
                  <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5 text-navy">
                    <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
              </button>

              {open === i && (
                <div className="px-6 pb-6">
                  {f.a && (
                    <p className="text-[15px] leading-[1.7] text-ink/72 m-0">{f.a}</p>
                  )}
                  {f.list && (
                    <ul className="m-0 p-0 list-none flex flex-col gap-3 mt-1">
                      {f.list.map((item) => (
                        <li key={item.label} className="flex items-start gap-3">
                          <span className="text-tan mt-1 flex-none" aria-hidden="true">·</span>
                          <span className="text-[15px] leading-[1.65] text-ink/72">
                            <strong className="font-semibold text-navy">{item.label}:</strong>{" "}
                            {item.detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        </FadeUp>
      </div>
    </section>
  );
}
