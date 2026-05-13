"use client";

import { HubSpotForm } from "@/components/ui/HubSpotForm";

const ASSET_TYPES = [
  "Private Trading",
  "Company Investment",
  "Fund Investments",
  "Debt Investments",
  "Property",
];

const TICKER = [
  { action: "BUY",  type: "Private Trading",    amount: "$180,000", time: "2s ago"  },
  { action: "SELL", type: "Fund Investment",     amount: "$240,000", time: "8s ago"  },
  { action: "BUY",  type: "Property Trust",      amount: "$500,000", time: "14s ago" },
  { action: "BUY",  type: "Company Investment",  amount: "$1.2M",    time: "21s ago" },
  { action: "SELL", type: "Debt Note",           amount: "$75,000",  time: "35s ago" },
  { action: "BUY",  type: "Private Equity",      amount: "$420,000", time: "1m ago"  },
  { action: "SELL", type: "Property Trust",      amount: "$310,000", time: "2m ago"  },
  { action: "BUY",  type: "Fund Investment",     amount: "$850,000", time: "3m ago"  },
  { action: "SELL", type: "Company Investment",  amount: "$2.1M",    time: "4m ago"  },
  { action: "BUY",  type: "Debt Instrument",     amount: "$95,000",  time: "5m ago"  },
];

export function WhyHero() {
  return (
    <>
      <style>{`
        @keyframes whyFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes whyFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes whyFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(6px); }
        }
        @keyframes whyPulseRing {
          0%   { transform: scale(1);   opacity: 0.5; }
          100% { transform: scale(1.7); opacity: 0;   }
        }
        @keyframes whyTicker {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes whyBlink {
          0%, 100% { opacity: 1;   }
          50%       { opacity: 0.2; }
        }
        @keyframes whyDotMove {
          0%   { offset-distance: 0%;   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        @keyframes whyGlowGreen {
          0%, 100% { box-shadow: 0 0 0 0   rgba(34,197,94,0.6); }
          50%       { box-shadow: 0 0 0 5px rgba(34,197,94,0);   }
        }
        @keyframes whyShimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }

        .why-fade-up  { opacity:0; animation: whyFadeUp  0.75s cubic-bezier(0.16,1,0.3,1) forwards; }
        .why-fade-in  { opacity:0; animation: whyFadeIn  0.55s ease forwards; }
        .why-float    { animation: whyFloat    5.5s ease-in-out infinite; }
        .why-pulse    { animation: whyPulseRing 2.2s ease-out  infinite; }
        .why-ticker   { animation: whyTicker   24s  linear      infinite; }
        .why-blink    { animation: whyBlink    1.8s ease-in-out infinite; }
        .why-glow-green { animation: whyGlowGreen 1.8s ease-in-out infinite; }
      `}</style>

      <section className="bg-page-bg pt-28 pb-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div
            className="relative rounded-[28px] px-8 min-[860px]:px-14 py-14 grid grid-cols-1 min-[860px]:grid-cols-[1fr_360px] gap-8 items-center"
            style={{ background: "linear-gradient(135deg, #162347 0%, #1a2a52 60%, #162347 100%)", overflow:"clip" }}
          >
            {/* ── Background radial glows ── */}
            <div className="absolute inset-0 pointer-events-none select-none">
              <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 75% 40%, rgba(175,125,67,0.10) 0%, transparent 55%)" }} />
              <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 15% 85%, rgba(80,110,200,0.08) 0%, transparent 45%)" }} />
              {/* Subtle dot grid */}
              <svg width="100%" height="100%" style={{ position:"absolute", inset:0, opacity:0.06 }}>
                <defs>
                  <pattern id="why-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="white" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#why-dots)" />
              </svg>
            </div>

            {/* ── Left — copy + form ─────────────────────────────── */}
            <div className="relative z-10">

              {/* Eyebrow */}
              <div className="why-fade-up" style={{ animationDelay:"0ms" }}>
                <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] mb-6"
                  style={{ background:"rgba(255,255,255,0.07)", color:"rgba(255,255,255,0.65)", border:"1px solid rgba(255,255,255,0.10)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#AF7D43] why-glow-green" style={{ boxShadow:"0 0 0 0 rgba(175,125,67,0.6)" }} />
                  Private Markets Platform
                </span>
              </div>

              <h1
                className="why-fade-up font-serif italic font-normal text-white m-0 mb-4"
                style={{ fontSize:"clamp(36px,5vw,62px)", lineHeight:1.05, animationDelay:"90ms" }}
              >
                Why FloatX
              </h1>

              <p
                className="why-fade-up m-0 mb-8"
                style={{ fontSize:17, lineHeight:1.65, color:"rgba(255,255,255,0.62)", maxWidth:"38ch", animationDelay:"210ms" }}
              >
                Unmatched choice in private markets — your all-in-one solution for buying, selling and investing across every asset class.
              </p>

              <div className="why-fade-up" style={{ animationDelay:"350ms", maxWidth:420 }}>
                <HubSpotForm
                  portalId="45382735"
                  formId="13308193-8d0a-4f7e-ad33-d7dd4b1f944a"
                  region="na1"
                />
              </div>
            </div>

            {/* ── Right — Live market card ───────────────────────── */}
            <div className="hidden min-[860px]:block relative z-10">
              <div
                className="rounded-[18px] overflow-hidden"
                style={{
                  opacity: 0,
                  animation: "whyFadeUp 0.75s 220ms cubic-bezier(0.16,1,0.3,1) forwards, whyFloat 5.5s 1s ease-in-out infinite",
                  background:"#0b1328",
                  border:"1px solid rgba(255,255,255,0.10)",
                  boxShadow:"0 24px 60px -12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.07)",
                }}
              >
                {/* ── Card header ── */}
                <div className="flex items-center justify-between px-5 py-3"
                  style={{ borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#22c55e] why-glow-green" />
                    <span style={{ color:"rgba(255,255,255,0.5)", fontSize:10, fontWeight:600, letterSpacing:"0.14em", textTransform:"uppercase" }}>
                      Live Market
                    </span>
                  </div>
                  <span style={{ color:"rgba(255,255,255,0.22)", fontSize:10 }}>FloatX Exchange</span>
                </div>

                {/* ── Asset class pills ── */}
                <div className="px-5 py-3" style={{ borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
                  <p style={{ color:"rgba(255,255,255,0.28)", fontSize:9, textTransform:"uppercase", letterSpacing:"0.14em", margin:"0 0 8px" }}>
                    Asset classes
                  </p>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                    {ASSET_TYPES.map((t, i) => (
                      <span
                        key={t}
                        className="why-fade-in"
                        style={{
                          animationDelay:`${660 + i * 75}ms`,
                          fontSize:10,
                          fontWeight:500,
                          color:"rgba(255,255,255,0.55)",
                          border:"1px solid rgba(255,255,255,0.10)",
                          borderRadius:999,
                          padding:"3px 10px",
                          cursor:"default",
                          transition:"border-color 0.15s, color 0.15s",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ── Live ticker ── */}
                <div style={{ height:200, overflow:"hidden", position:"relative" }}>
                  {/* Top + bottom fades */}
                  <div style={{ position:"absolute", inset:"0 0 auto", height:18, background:"linear-gradient(to bottom, rgba(10,18,40,0.95), transparent)", zIndex:2, pointerEvents:"none" }} />
                  <div style={{ position:"absolute", inset:"auto 0 0", height:18, background:"linear-gradient(to top, rgba(10,18,40,0.95), transparent)", zIndex:2, pointerEvents:"none" }} />

                  <div className="why-ticker" style={{ paddingInline:20 }}>
                    {[...TICKER, ...TICKER].map((item, i) => (
                      <div key={i} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"5px 0", borderBottom:"1px solid rgba(255,255,255,0.04)" }}>
                        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                          <span style={{
                            fontSize:8, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.08em",
                            padding:"2px 5px", borderRadius:3,
                            background: item.action === "BUY" ? "rgba(34,197,94,0.15)" : "rgba(239,68,68,0.15)",
                            color:        item.action === "BUY" ? "#4ade80"             : "#f87171",
                          }}>
                            {item.action}
                          </span>
                          <span style={{ color:"rgba(255,255,255,0.58)", fontSize:11 }}>{item.type}</span>
                        </div>
                        <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                          <span style={{ color:"rgba(255,255,255,0.85)", fontSize:11, fontWeight:600 }}>{item.amount}</span>
                          <span style={{ color:"rgba(255,255,255,0.22)", fontSize:9 }}>{item.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
