"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { CURRENT_TARGET_RATE } from "./CashPlusHero";

function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

function AnimatedNumber({
  to,
  duration = 1400,
  decimals = 0,
  prefix = "",
  suffix = "",
}: {
  to: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [ref, inView] = useInView<HTMLSpanElement>(0.4);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVal(to);
      return;
    }
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(eased * to);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return (
    <span ref={ref}>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const stages = [
  {
    title: "Deposit",
    body: "Move funds into Cash Plus from any verified AUD account. A$1,000 minimum to start.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-7 h-7">
        <path d="M12 4v11m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Accrue daily",
    body: "Earnings are calculated every business day at the prevailing target rate, net of fees.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-7 h-7">
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Compound monthly",
    body: "Distributions are reinvested at the end of each month by default — switch off any time to draw the income.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-7 h-7">
        <ellipse cx="12" cy="6" rx="6.5" ry="2.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M5.5 6v4c0 1.2 2.9 2.2 6.5 2.2s6.5-1 6.5-2.2V6M5.5 10v4c0 1.2 2.9 2.2 6.5 2.2s6.5-1 6.5-2.2v-4M5.5 14v4c0 1.2 2.9 2.2 6.5 2.2s6.5-1 6.5-2.2v-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Withdraw or reinvest",
    body: "Request a withdrawal any business day. Funds settle to your nominated account on T+1.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-7 h-7">
        <path d="M5 12h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 6L3 12l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity=".4" />
      </svg>
    ),
  },
];

const specs = [
  {
    label: "Target return",
    body: (
      <>
        RBA cash rate plus <strong>2.00% p.a.</strong>, net of fees and expenses. Currently <strong>{CURRENT_TARGET_RATE.toFixed(2)}% p.a.</strong>
      </>
    ),
  },
  {
    label: "Strategy",
    body: (
      <>
        An active short-duration mandate across cash, government bonds, investment-grade credit and selected senior private credit. Hedging may be used to manage duration and FX exposure.
      </>
    ),
  },
  {
    label: "Investments",
    body: (
      <>
        AUD-denominated cash deposits, government and semi-government bonds, investment-grade corporate bonds, and selected senior private credit positions.
      </>
    ),
  },
  {
    label: "Eligibility",
    body: (
      <>
        Wholesale, sophisticated and professional investors as defined under section 708 of the Corporations Act. Status verification is completed during account setup.
      </>
    ),
  },
];

export function HowCashPlusWorks() {
  const [specsRef, specsInView] = useInView<HTMLDivElement>(0.15);
  const [flowRef, flowInView] = useInView<HTMLDivElement>(0.25);

  return (
    <section className="bg-navy py-24 text-white relative overflow-hidden">
      <style>{`
        .cp-flow-line {
          stroke-dasharray: 4 4;
          animation: cpFlowDash 1.6s linear infinite;
        }
        .cp-flow-pulse {
          animation: cpFlowPulse 2.2s ease-in-out infinite;
        }
        @keyframes cpFlowDash {
          to { stroke-dashoffset: -16; }
        }
        @keyframes cpFlowPulse {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50%      { opacity: 1;    transform: scale(1.18); }
        }
        .cp-stage {
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 600ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 600ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .cp-stage.is-in {
          opacity: 1;
          transform: translateY(0);
        }
        .cp-spec {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 700ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 700ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .cp-spec.is-in {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .cp-flow-line, .cp-flow-pulse { animation: none; }
          .cp-stage, .cp-spec { opacity: 1 !important; transform: none !important; transition: none !important; }
        }
      `}</style>

      <div className="max-w-[1100px] mx-auto px-6 relative">
        <div className="text-center mb-16 max-w-[680px] mx-auto">
          <h2 className="font-serif italic font-normal text-white text-[clamp(32px,4vw,48px)] leading-[1.15] m-0 mb-4">
            How Cash Plus works.
          </h2>
          <p className="text-white/75 text-[16px] leading-[1.65] m-0">
            One mandate, one balance, four moments — from the second your funds arrive to the second you take them back out.
          </p>
        </div>

        <div className="grid grid-cols-1 min-[700px]:grid-cols-3 gap-3 mb-20">
          {[
            { value: CURRENT_TARGET_RATE, decimals: 2, suffix: "%", label: "Current target rate, p.a." },
            { value: 1, decimals: 0, prefix: "T+", suffix: "", label: "Settlement after withdrawal" },
            { value: 1000, decimals: 0, prefix: "A$", suffix: "", label: "Minimum to start" },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white/[0.04] border border-white/10 rounded-[18px] px-6 py-8 text-center"
            >
              <p className="font-sans font-bold text-white text-[clamp(36px,4vw,52px)] leading-none -tracking-[0.02em] m-0 tabular-nums">
                <AnimatedNumber
                  to={s.value}
                  decimals={s.decimals}
                  prefix={s.prefix}
                  suffix={s.suffix}
                />
              </p>
              <p className="text-white/65 text-[13px] mt-3 m-0">{s.label}</p>
            </div>
          ))}
        </div>

        <div ref={flowRef} className="mb-20">
          <div className="hidden min-[900px]:block relative h-3 mb-8">
            <svg
              viewBox="0 0 1000 6"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full"
              aria-hidden="true"
            >
              <line
                className="cp-flow-line"
                x1="80"
                y1="3"
                x2="920"
                y2="3"
                stroke="#AF7D43"
                strokeOpacity="0.55"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              {[230, 500, 770].map((x) => (
                <circle key={x} className="cp-flow-pulse" cx={x} cy="3" r="2.6" fill="#AF7D43" style={{ animationDelay: `${(x - 230) * 1.6}ms` }} />
              ))}
            </svg>
          </div>

          <div className="grid grid-cols-1 min-[700px]:grid-cols-2 min-[900px]:grid-cols-4 gap-5">
            {stages.map((s, i) => (
              <div
                key={s.title}
                className={`cp-stage ${flowInView ? "is-in" : ""} bg-white/[0.04] border border-white/10 rounded-[18px] p-6 flex flex-col`}
                style={{ transitionDelay: flowInView ? `${i * 110}ms` : "0ms" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-[10px] bg-tan/15 text-tan flex items-center justify-center flex-none">
                    {s.icon}
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-tan">
                    Step {i + 1}
                  </span>
                </div>
                <h3 className="font-sans font-bold text-white text-[18px] leading-[1.3] m-0 mb-2 -tracking-[0.005em]">
                  {s.title}
                </h3>
                <p className="text-white/70 text-[14px] leading-[1.6] m-0">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div ref={specsRef} className="grid grid-cols-1 min-[700px]:grid-cols-2 gap-4 mb-12">
          {specs.map((s, i) => (
            <div
              key={s.label}
              className={`cp-spec ${specsInView ? "is-in" : ""} rounded-[16px] border border-white/10 bg-white/[0.025] px-6 py-5`}
              style={{ transitionDelay: specsInView ? `${i * 90}ms` : "0ms" }}
            >
              <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-tan m-0 mb-2">
                {s.label}
              </p>
              <p className="text-white/82 text-[14.5px] leading-[1.6] m-0">{s.body}</p>
            </div>
          ))}
        </div>

        <p className="text-white/60 text-[13.5px] leading-[1.65] text-center max-w-[640px] mx-auto mb-8">
          Earnings accrue every business day. Auto-reinvestment can be turned off at any time — distributions will instead settle to your AUD balance.
        </p>

        <div className="flex justify-center">
          <Button
            href="#"
            variant="outlineWhite"
            shape="pill"
            className="bg-white! text-navy! border-white! hover:bg-white/90!"
          >
            View PDS
          </Button>
        </div>
      </div>
    </section>
  );
}
