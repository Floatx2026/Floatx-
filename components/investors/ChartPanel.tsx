"use client";

import { useEffect, useState } from "react";

const FADE_MS = 450;
const LOOP_MS = 8000;

type Period = "1Y" | "3Y" | "5Y";

// SVG paths per period (viewBox 400×215, y=190 = 0%, y=50 ≈ +100%)
// Y scale: 0% = y 190, 75% = y 50 (140px range). 1% = 1.867px
// y = 190 - (pct / 75) * 140
const DATA: Record<Period, {
  total: { line: string; area: string };
  companies: { line: string };
  aims: { line: string };
  dates: string[];
  tooltip: { total: string; companies: string };
  dots: { aims: number; companies: number; total: number };
}> = {
  "1Y": {
    // Total ~38% → y119, Companies ~23% → y147, AIMS ~9% → y173
    total: {
      line: "M 5 190 C 80 188 160 178 240 155 C 300 135 340 122 360 119",
      area: "M 5 190 C 80 188 160 178 240 155 C 300 135 340 122 360 119 L 360 195 L 5 195 Z",
    },
    companies: { line: "M 5 190 C 80 188 160 182 240 168 C 300 156 340 149 360 147" },
    aims:      { line: "M 5 190 C 80 189 160 186 240 182 C 300 178 340 175 360 173" },
    dates: ["2025", "2026"],
    tooltip: { total: "+38%", companies: "+23%" },
    dots: { aims: 173, companies: 147, total: 119 },
  },
  "3Y": {
    // Total ~65% → y69, Companies ~45% → y106, AIMS ~20% → y153
    total: {
      line: "M 5 190 C 60 188 120 180 180 162 C 240 140 300 100 360 69",
      area: "M 5 190 C 60 188 120 180 180 162 C 240 140 300 100 360 69 L 360 195 L 5 195 Z",
    },
    companies: { line: "M 5 190 C 60 188 120 181 180 168 C 240 152 300 125 360 106" },
    aims:      { line: "M 5 190 C 80 188 160 183 240 174 C 300 165 340 158 360 153" },
    dates: ["2023", "2024", "2025", "2026"],
    tooltip: { total: "+65%", companies: "+45%" },
    dots: { aims: 153, companies: 106, total: 69 },
  },
  "5Y": {
    // Total ~73% → y54, Companies ~55% → y87, AIMS ~28% → y138
    total: {
      line: "M 5 190 C 50 189 100 185 150 175 C 200 162 250 132 300 88 C 330 64 348 56 360 54",
      area: "M 5 190 C 50 189 100 185 150 175 C 200 162 250 132 300 88 C 330 64 348 56 360 54 L 360 195 L 5 195 Z",
    },
    companies: { line: "M 5 190 C 50 188 100 183 150 170 C 200 156 250 130 300 105 C 330 92 348 88 360 87" },
    aims:      { line: "M 5 190 C 80 188 160 182 240 170 C 300 160 340 143 360 138" },
    dates: ["2022", "2023", "2024", "2025", "2026"],
    tooltip: { total: "+73%", companies: "+55%" },
    dots: { aims: 138, companies: 87, total: 54 },
  },
};

const PERIODS: Period[] = ["1Y", "3Y", "5Y"];

export function ChartPanel() {
  const [period, setPeriod] = useState<Period>("3Y");
  const [key, setKey] = useState(0);
  const [fading, setFading] = useState(false);

  // Auto-cycle
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tick = () => {
      setFading(true);
      window.setTimeout(() => { setKey((k) => k + 1); setFading(false); }, FADE_MS);
    };
    const id = window.setInterval(tick, LOOP_MS);
    return () => window.clearInterval(id);
  }, []);

  function selectPeriod(p: Period) {
    if (p === period) return;
    setFading(true);
    window.setTimeout(() => { setPeriod(p); setKey((k) => k + 1); setFading(false); }, FADE_MS);
  }

  const d = DATA[period];

  return (
    <div
      key={key}
      className="chart-panel"
      style={{
        opacity: fading ? 0 : undefined,
        transition: fading ? `opacity ${FADE_MS}ms ease` : undefined,
      }}
      role="img"
      aria-label="Fund investment returns chart"
    >
      <style>{`
        .aims-line {
          fill: none;
          stroke: rgba(255,255,255,0.45);
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          opacity: 0;
          animation: lineLoop 5s linear 300ms infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .aims-line { animation: none !important; opacity: 1 !important; stroke-dashoffset: 0 !important; }
        }
      `}</style>

      {/* Stat cards — Total Value left, Avg Net Return right */}
      <div className="chart-cards">
        <div className="chart-card">
          <span className="chart-card-label">Total Value</span>
          <div className="chart-card-row">
            <span className="chart-card-value">$8.4M</span>
            <span className="chart-card-pill">6 funds</span>
          </div>
        </div>
        <div className="chart-card">
          <span className="chart-card-label">Avg Net Return</span>
          <div className="chart-card-row">
            <span className="chart-card-value">14.2% p.a.</span>
            <span className="chart-card-pill">+3.1% vs idx</span>
          </div>
        </div>
      </div>

      {/* Interactive tabs */}
      <div className="chart-tabs">
        {PERIODS.map((p) => (
          <button
            key={p}
            onClick={() => selectPeriod(p)}
            className={`chart-tab${p === period ? " is-active" : ""}`}
            style={{ cursor: "pointer", background: "none", border: "none", fontFamily: "inherit", padding: 0 }}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="chart-area">
        <svg className="chart-svg" viewBox="0 0 400 215" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="totalGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#AF7D43" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#AF7D43" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Gridlines */}
          <g stroke="rgba(255,255,255,0.06)" strokeWidth="1">
            <line x1="5" y1="50" x2="365" y2="50" />
            <line x1="5" y1="120" x2="365" y2="120" />
            <line x1="5" y1="190" x2="365" y2="190" />
          </g>

          {/* Y-axis labels */}
          <g className="y-axis" fontSize="9" fill="rgba(255,255,255,0.38)" fontFamily="inherit" textAnchor="end">
            <text x="398" y="53">+75%</text>
            <text x="398" y="123">+37%</text>
            <text x="398" y="193">0%</text>
          </g>

          {/* Shaded area under Total Investment */}
          <path className="volume-area" d={d.total.area} fill="url(#totalGrad)" />

          {/* AIMS Fund line */}
          <path className="aims-line" d={d.aims.line} />

          {/* Private Companies line */}
          <path className="volume-line" d={d.companies.line} />

          {/* Total Investment line */}
          <path className="price-line" d={d.total.line} pathLength={1} />

          {/* End dots — positions driven by DATA[period].dots */}
          <circle cx="360" cy={d.dots.aims}      r="3" fill="rgba(255,255,255,0.5)" />
          <circle cx="360" cy={d.dots.companies} r="3" fill="#C5D3F5" />
          <line className="active-dot-fade"
            x1="360" y1={d.dots.total} x2="360" y2="193"
            stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="3 3"
          />
          <circle className="active-dot-fade"
            cx="360" cy={d.dots.total}
            r="5" fill="#AF7D43" stroke="#fff" strokeWidth="2"
          />
        </svg>

        <div className="chart-tooltip">
          Total Investment: <strong>{d.tooltip.total}</strong>
          <br />
          Private Companies: <strong>{d.tooltip.companies}</strong>
        </div>
      </div>

      {/* X-axis dates */}
      <div className="chart-dates">
        <span className="nav-arrow">‹</span>
        {d.dates.map((dt) => <span key={dt}>{dt}</span>)}
        <span className="nav-arrow">›</span>
      </div>

      {/* Legend */}
      <div className="chart-legend">
        <span className="legend-item"><i className="legend-dot legend-tan" /> Total Investment</span>
        <span className="legend-item"><i className="legend-dot legend-blue" /> Private Companies</span>
        <span className="legend-item"><i className="legend-dot" style={{ background: "rgba(255,255,255,0.45)" }} /> AIMS Fund</span>
      </div>
    </div>
  );
}
