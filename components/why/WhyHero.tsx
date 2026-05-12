"use client";

import { useState } from "react";

export function WhyHero() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-page-bg pt-28 pb-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="bg-[#EDF1FA] rounded-[24px] px-10 min-[860px]:px-16 py-14 grid grid-cols-1 min-[860px]:grid-cols-[1fr_380px] gap-12 items-center overflow-hidden">

          {/* Left — copy + form */}
          <div>
            <h1 className="font-serif italic font-normal text-navy text-[clamp(36px,5vw,60px)] leading-[1.05] m-0 mb-4">
              Why FloatX
            </h1>
            <p className="text-[17px] leading-[1.6] text-ink/75 m-0 mb-8 max-w-[38ch]">
              Unmatched Choice in Private Markets: FloatX – Your All-in-One Solution
            </p>

            {submitted ? (
              <div className="bg-white border border-line rounded-2xl px-6 py-5 max-w-[400px]">
                <p className="font-bold text-navy text-[15px] m-0 mb-1">Thanks — you're on the list.</p>
                <p className="text-[14px] text-ink/70 m-0">We'll be in touch shortly with early access details.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="flex items-center gap-2 max-w-[400px]"
                noValidate
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email address*"
                  className="flex-1 bg-white border border-line rounded-xl px-4 py-3 text-[14px] text-navy placeholder:text-ink/45 focus:outline-none focus:border-navy"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 inline-flex items-center font-medium text-[14px] rounded-xl px-5 py-3 bg-navy text-white hover:bg-navy-deep transition-colors cursor-pointer"
                >
                  Request early access
                </button>
              </form>
            )}
          </div>

          {/* Right — Buyer→FloatX→Seller flow diagram */}
          <div className="hidden min-[860px]:flex items-center justify-center">
            <svg viewBox="0 0 380 160" className="w-full max-w-[380px]" aria-label="FloatX connects buyers and sellers" role="img">
              {/* Buyer card */}
              <rect x="0" y="45" width="90" height="70" rx="10" fill="white" filter="url(#cardShadow)" />
              <text x="45" y="72" textAnchor="middle" fontSize="9" fill="#162347" fontWeight="600" fontFamily="sans-serif">BUYER</text>
              {/* Person icon */}
              <circle cx="45" cy="90" r="8" fill="none" stroke="#162347" strokeWidth="1.4" />
              <path d="M31 108 Q45 100 59 108" fill="none" stroke="#162347" strokeWidth="1.4" strokeLinecap="round" />

              {/* Arrow right from Buyer */}
              <path d="M92 80 L138 80" stroke="#AF7D43" strokeWidth="1.8" strokeLinecap="round" markerEnd="url(#arrowTan)" />

              {/* FloatX central node */}
              <rect x="140" y="52" width="100" height="56" rx="12" fill="#162347" />
              <text x="190" y="77" textAnchor="middle" fontSize="8.5" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">Powered by</text>
              <text x="190" y="93" textAnchor="middle" fontSize="11" fill="white" fontWeight="700" fontFamily="sans-serif">FloatX</text>
              {/* Small dots decoration */}
              <circle cx="158" cy="100" r="2" fill="rgba(255,255,255,0.25)" />
              <circle cx="166" cy="100" r="2" fill="rgba(255,255,255,0.25)" />
              <circle cx="174" cy="100" r="2" fill="rgba(255,255,255,0.25)" />

              {/* Arrow right from FloatX */}
              <path d="M242 80 L288 80" stroke="#AF7D43" strokeWidth="1.8" strokeLinecap="round" markerEnd="url(#arrowTan)" />

              {/* Seller card */}
              <rect x="290" y="45" width="90" height="70" rx="10" fill="white" filter="url(#cardShadow)" />
              <text x="335" y="72" textAnchor="middle" fontSize="9" fill="#162347" fontWeight="600" fontFamily="sans-serif">SELLER</text>
              {/* Building icon */}
              <path d="M323 108V96l12-7 12 7v12M330 108v-5h10v5" fill="none" stroke="#162347" strokeWidth="1.4" strokeLinejoin="round" />

              {/* Connecting dots under arrows */}
              <circle cx="115" cy="80" r="3" fill="#AF7D43" />
              <circle cx="265" cy="80" r="3" fill="#AF7D43" />

              {/* Labels */}
              <text x="115" y="140" textAnchor="middle" fontSize="8" fill="#AF7D43" fontFamily="sans-serif">Verified</text>
              <text x="265" y="140" textAnchor="middle" fontSize="8" fill="#AF7D43" fontFamily="sans-serif">Settled</text>
              <line x1="115" y1="125" x2="115" y2="84" stroke="#AF7D43" strokeWidth="0.8" strokeDasharray="3 2" />
              <line x1="265" y1="125" x2="265" y2="84" stroke="#AF7D43" strokeWidth="0.8" strokeDasharray="3 2" />

              <defs>
                <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="130%">
                  <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="rgba(22,35,71,0.10)" />
                </filter>
                <marker id="arrowTan" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0 0 L6 3 L0 6 Z" fill="#AF7D43" />
                </marker>
              </defs>
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}
