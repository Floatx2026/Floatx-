"use client";

import { LogoAvatar } from "@/components/shared/LogoAvatar";

type Stock = {
  rank: number;
  name: string;
  logo: string;
  logoBg?: string;
  price: number;
  change: number;
  bid: number;
  ask: number;
  cap: string;
  pts: number[];
};

const stocks: Stock[] = [
  {
    rank: 1, name: "Anthropic", logo: "anthropic.com", logoBg: "#F0EEE6",
    price: 120.50, change: 8.2, bid: 122.00, ask: 118.00, cap: "$61.4B",
    pts: [30,32,28,35,33,40,38,42,45,43,50,52,48,55,58,56,62,65,63,68],
  },
  {
    rank: 2, name: "OpenAI", logo: "openai.com",
    price: 210.00, change: 5.7, bid: 212.00, ask: 208.00, cap: "$157B",
    pts: [42,40,44,48,46,52,50,55,53,58,56,60,62,60,65,68,66,70,72,75],
  },
  {
    rank: 3, name: "Anduril", logo: "anduril.com", logoBg: "#000000",
    price: 85.20, change: 12.4, bid: 87.00, ask: 83.50, cap: "$28.1B",
    pts: [20,22,25,23,28,32,30,35,38,42,40,45,50,48,55,60,58,65,70,75],
  },
  {
    rank: 4, name: "Perplexity AI", logo: "perplexity.ai",
    price: 38.90, change: 24.5, bid: 40.00, ask: 37.50, cap: "$14.0B",
    pts: [15,18,16,22,25,28,24,32,38,35,42,48,45,55,60,58,68,72,70,80],
  },
  {
    rank: 5, name: "Neuralink", logo: "neuralink.com", logoBg: "#000000",
    price: 52.30, change: -3.8, bid: 54.00, ask: 50.50, cap: "$8.9B",
    pts: [70,72,68,75,73,70,68,65,70,66,62,65,60,58,55,60,56,52,54,50],
  },
  {
    rank: 6, name: "Kalshi", logo: "kalshi.com",
    price: 28.60, change: 4.2, bid: 29.50, ask: 27.80, cap: "$2.1B",
    pts: [40,38,42,40,44,42,46,44,48,46,50,48,52,50,54,52,56,54,58,56],
  },
  {
    rank: 7, name: "ByteDance", logo: "tiktok.com", logoBg: "#010101",
    price: 185.40, change: -1.2, bid: 187.00, ask: 183.00, cap: "$268B",
    pts: [60,62,58,65,63,60,65,62,58,62,60,55,58,55,52,55,50,52,48,50],
  },
  {
    rank: 8, name: "Lambda", logo: "lambdalabs.com",
    price: 45.80, change: 6.1, bid: 47.00, ask: 44.50, cap: "$5.8B",
    pts: [35,33,38,36,40,38,43,41,45,43,48,46,50,48,52,55,53,57,55,60],
  },
  {
    rank: 9, name: "Kraken", logo: "kraken.com",
    price: 32.54, change: 2.7, bid: 36.00, ask: 31.00, cap: "$10.8B",
    pts: [45,48,44,50,47,52,49,54,51,56,53,58,55,60,57,62,59,64,61,66],
  },
  {
    rank: 10, name: "Epic Games", logo: "epicgames.com",
    price: 67.20, change: -0.8, bid: 68.50, ask: 66.00, cap: "$31.5B",
    pts: [65,68,64,70,68,66,70,68,64,68,65,62,65,62,60,63,60,58,61,58],
  },
];

function Sparkline({ pts, up }: { pts: number[]; up: boolean }) {
  const W = 80, H = 28;
  const min = Math.min(...pts);
  const max = Math.max(...pts);
  const range = max - min || 1;
  const d = pts
    .map((p, i) => {
      const x = ((i / (pts.length - 1)) * W).toFixed(1);
      const y = (H - ((p - min) / range) * (H - 4) - 2).toFixed(1);
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");
  const color = up ? "#16A34A" : "#DC2626";
  return (
    <svg width="80" height={H} viewBox={`0 0 ${W} ${H}`} fill="none" aria-hidden="true">
      <path d={d} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Row({ s }: { s: Stock }) {
  const up = s.change >= 0;
  return (
    <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06] hover:bg-white/[0.04] transition-colors">
      <span className="w-4 text-[11px] font-semibold text-white/30 text-center flex-none tabular-nums">
        {s.rank}
      </span>
      <LogoAvatar name={s.name} initials={s.name.slice(0, 2).toUpperCase()} logo={s.logo} logoBg={s.logoBg} size={30} />
      <div className="flex-1 min-w-0">
        <p className="text-[13px] font-semibold text-white leading-none truncate">{s.name}</p>
      </div>
      <div className="text-right flex-none w-[72px]">
        <p className="text-[13px] font-semibold text-white tabular-nums">${s.price.toFixed(2)}</p>
        <p className={`text-[11px] font-semibold tabular-nums ${up ? "text-green-400" : "text-red-400"}`}>
          {up ? "+" : ""}{s.change.toFixed(1)}%
        </p>
      </div>
      <div className="text-right flex-none w-[64px]">
        <p className="text-[13px] font-semibold text-white/80 tabular-nums">{s.cap}</p>
        <p className="text-[10px] text-white/30 uppercase tracking-[0.06em]">Cap</p>
      </div>
      <div className="flex-none w-[80px]">
        <Sparkline pts={s.pts} up={up} />
      </div>
    </div>
  );
}

const doubled = [...stocks, ...stocks];

export function TradingTicker() {
  return (
    <div className="w-full max-w-[520px] mx-auto">
      <style>{`
        .ticker-track {
          animation: tickerScroll 28s linear infinite;
          will-change: transform;
        }
        .ticker-wrap:hover .ticker-track {
          animation-play-state: paused;
        }
        @keyframes tickerScroll {
          from { transform: translateY(0); }
          to   { transform: translateY(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-track { animation: none; }
        }
      `}</style>

      <div
        className="rounded-[22px] overflow-hidden"
        style={{
          background: "#162347",
          boxShadow: "0 30px 60px -25px rgba(22,35,71,0.45), 0 0 0 1px rgba(255,255,255,0.04) inset",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.07]">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-[12px] font-semibold text-white/90 uppercase tracking-[0.1em]">
              Live Private Markets
            </span>
          </div>
          <span className="text-[10.5px] text-white/35 font-medium">Indicative only</span>
        </div>

        {/* Column headers */}
        <div className="flex items-center gap-3 px-4 py-2 border-b border-white/[0.07]" style={{ background: "rgba(255,255,255,0.03)" }}>
          <span className="w-4 flex-none" />
          <span className="w-[30px] flex-none" />
          <span className="flex-1 text-[10px] uppercase tracking-[0.1em] font-semibold text-white/35">Company</span>
          <span className="flex-none text-right text-[10px] uppercase tracking-[0.1em] font-semibold text-white/35 w-[72px]">Price / 24H</span>
          <span className="flex-none text-right text-[10px] uppercase tracking-[0.1em] font-semibold text-white/35 w-[64px]">Mkt Cap</span>
          <span className="flex-none w-[80px] text-[10px] uppercase tracking-[0.1em] font-semibold text-white/35">Trend</span>
        </div>

        {/* Scrolling rows */}
        <div
          className="ticker-wrap overflow-hidden"
          style={{ height: `${6 * 56}px` }}
          aria-label="Private market stock ticker"
        >
          <div className="ticker-track">
            {doubled.map((s, i) => (
              <Row key={`${s.name}-${i}`} s={s} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 border-t border-white/[0.07] flex items-center justify-between" style={{ background: "rgba(255,255,255,0.03)" }}>
          <span className="text-[10.5px] text-white/30">Indicative prices only — not financial advice</span>
          <a
            href="#opportunities"
            className="text-[11px] font-semibold text-white/50 hover:text-white/90 transition-colors uppercase tracking-[0.08em]"
          >
            View all →
          </a>
        </div>
      </div>
    </div>
  );
}
