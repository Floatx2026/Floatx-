"use client";

import { useState } from "react";
import { ChartPanel } from "./ChartPanel";

export function Hero() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-page-bg pt-36 pb-24">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 min-[900px]:grid-cols-[1.05fr_1fr] gap-14 min-[900px]:gap-16 items-center">
        <div className="min-w-0">
          <span className="inline-block bg-line-soft text-ink rounded-full px-4 py-1.5 text-[14px] font-medium">
            Investor Portal
          </span>
          <h1 className="font-serif italic font-normal text-navy text-[clamp(40px,6vw,64px)] leading-[1.05] my-6 max-w-[14ch]">
            Invest in the extraordinary
          </h1>
          <p className="text-[18px] leading-[1.65] max-w-[620px] text-ink/[0.78] mb-8">
            A global private investment and trading ecosystem supported by AI and Blockchain — curated opportunities and institutional-grade execution for serious investors.
          </p>

          <div className="max-w-[440px]">
            <p className="font-serif italic text-ink/70 text-[15px] m-0 mb-4">
              Just your name, email and phone number.
            </p>

            {submitted ? (
              <div className="bg-cream border border-line rounded-2xl px-6 py-5">
                <p className="font-sans font-bold text-navy text-[15px] m-0 mb-1">
                  Thanks — request received.
                </p>
                <p className="text-[14px] text-ink/70 m-0">
                  A FloatX representative will be in touch shortly to complete your wholesale-investor verification.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="flex flex-col gap-3"
                noValidate
              >
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Full name"
                  className="bg-white border border-line rounded-xl px-4 py-3 text-[15px] text-navy placeholder:text-ink/45 focus:outline-none focus:border-navy"
                />
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="Email address"
                  className="bg-white border border-line rounded-xl px-4 py-3 text-[15px] text-navy placeholder:text-ink/45 focus:outline-none focus:border-navy"
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  autoComplete="tel"
                  placeholder="Phone number"
                  className="bg-white border border-line rounded-xl px-4 py-3 text-[15px] text-navy placeholder:text-ink/45 focus:outline-none focus:border-navy"
                />
                <button
                  type="submit"
                  className="mt-1 self-start inline-flex items-center justify-center font-sans font-medium text-[15px] rounded-full px-7 py-[13px] bg-navy text-white border border-navy hover:bg-navy-deep transition-all duration-150 cursor-pointer"
                >
                  Become a Member
                  <span aria-hidden="true" className="ml-1.5">→</span>
                </button>
                <p className="text-[11.5px] text-ink/55 leading-[1.5] m-0 mt-1">
                  By submitting, you agree to be contacted by FloatX about wholesale-investor verification. Cash Plus and other products are offered to wholesale investors only.
                </p>
              </form>
            )}
          </div>
        </div>

        <div className="hidden min-[900px]:block">
          <ChartPanel />
        </div>
      </div>
    </section>
  );
}
