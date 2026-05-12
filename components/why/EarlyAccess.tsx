"use client";

import { useState } from "react";

export function EarlyAccess() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-page-bg py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="relative bg-navy rounded-[24px] overflow-hidden py-20 px-6 flex flex-col items-center text-center">

          {/* Decorative grid background */}
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern id="earlyGrid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M48 0H0V48" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#earlyGrid)" />
          </svg>

          {/* Tan accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-tan rounded-full" />

          <div className="relative z-10 max-w-[560px]">
            <h2 className="font-serif italic font-normal text-white text-[clamp(30px,4vw,48px)] leading-[1.15] m-0 mb-10">
              Get early access
            </h2>

            {submitted ? (
              <div className="bg-white/10 border border-white/20 rounded-2xl px-8 py-6">
                <p className="font-bold text-white text-[16px] m-0 mb-1">You're on the list.</p>
                <p className="text-white/70 text-[14px] m-0">We'll reach out with early access details shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="flex items-center bg-white rounded-full pl-6 pr-2 py-2 max-w-[480px] mx-auto shadow-[0_8px_24px_-8px_rgba(0,0,0,0.35)]"
                noValidate
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email address*"
                  aria-label="Email address"
                  className="flex-1 border-0 outline-none bg-transparent text-[15px] text-navy placeholder:text-ink/40 py-1.5"
                />
                <button
                  type="submit"
                  aria-label="Submit"
                  className="w-10 h-10 rounded-full bg-navy inline-flex items-center justify-center hover:bg-navy-deep transition-colors cursor-pointer flex-shrink-0"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-[18px] h-[18px]">
                    <path d="M5 12h14m-5-5 5 5-5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
