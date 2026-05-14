"use client";

import { useEffect, useState } from "react";

const FADE_MS = 450;
const LOOP_MS = 14000;

type Period = "D" | "M" | "3M" | "YTD" | "Y" | "MAX";
type DisplayMode = "%" | "$";

type AxisStop = { pct: string; dollar: string };
type Value = { pct: string; dollar: string };

const DATA: Record<Period, {
  total: { line: string; area: string };
  companies: { line: string };
  aims: { line: string };
  dates: string[];
  tooltip: { total: Value; companies: Value; aims: Value };
  dots: { aims: number; companies: number; total: number };
  profitLoss: Value;
  vsIdx: Value;
  yAxis: { top: AxisStop; mid: AxisStop };
}> = {
  "D": {
    total: {
      line: "M 5 190 C 80 189 160 187 240 182 C 300 178 340 176 360 175",
      area: "M 5 190 C 80 189 160 187 240 182 C 300 178 340 176 360 175 L 360 195 L 5 195 Z",
    },
    companies: { line: "M 5 190 C 80 189 160 188 240 185 C 300 182 340 180 360 179" },
    aims:      { line: "M 5 190 C 80 190 160 189 240 188 C 300 187 340 186 360 185" },
    dates: ["9:30", "11:00", "12:30", "2:00", "3:30"],
    tooltip: {
      total:     { pct: "+0.3%", dollar: "+$25K" },
      companies: { pct: "+0.2%", dollar: "+$17K" },
      aims:      { pct: "+0.1%", dollar: "+$8K" },
    },
    dots: { aims: 185, companies: 179, total: 175 },
    profitLoss: { pct: "+0.3%", dollar: "+$25K" },
    vsIdx:      { pct: "+0.1% vs idx", dollar: "+$8K vs idx" },
    yAxis: {
      top: { pct: "+0.4%", dollar: "+$34K" },
      mid: { pct: "+0.2%", dollar: "+$17K" },
    },
  },
  "M": {
    total: {
      line: "M 5 190 C 80 188 160 178 240 155 C 300 135 340 122 360 119",
      area: "M 5 190 C 80 188 160 178 240 155 C 300 135 340 122 360 119 L 360 195 L 5 195 Z",
    },
    companies: { line: "M 5 190 C 80 188 160 182 240 168 C 300 156 340 149 360 147" },
    aims:      { line: "M 5 190 C 80 189 160 186 240 182 C 300 178 340 175 360 173" },
    dates: ["Apr 14", "Apr 21", "Apr 28", "May 5", "May 12"],
    tooltip: {
      total:     { pct: "+2.1%", dollar: "+$176K" },
      companies: { pct: "+1.4%", dollar: "+$98K" },
      aims:      { pct: "+0.6%", dollar: "+$42K" },
    },
    dots: { aims: 173, companies: 147, total: 119 },
    profitLoss: { pct: "+2.1%", dollar: "+$176K" },
    vsIdx:      { pct: "+0.4% vs idx", dollar: "+$28K vs idx" },
    yAxis: {
      top: { pct: "+3%",   dollar: "+$252K" },
      mid: { pct: "+1.5%", dollar: "+$126K" },
    },
  },
  "3M": {
    total: {
      line: "M 5 190 C 60 188 120 182 180 168 C 240 150 300 128 360 100",
      area: "M 5 190 C 60 188 120 182 180 168 C 240 150 300 128 360 100 L 360 195 L 5 195 Z",
    },
    companies: { line: "M 5 190 C 60 188 120 184 180 175 C 240 162 300 145 360 130" },
    aims:      { line: "M 5 190 C 80 188 160 184 240 178 C 300 172 340 168 360 165" },
    dates: ["Feb", "Mar", "Apr", "May"],
    tooltip: {
      total:     { pct: "+5.8%", dollar: "+$485K" },
      companies: { pct: "+3.9%", dollar: "+$327K" },
      aims:      { pct: "+1.8%", dollar: "+$152K" },
    },
    dots: { aims: 165, companies: 130, total: 100 },
    profitLoss: { pct: "+5.8%", dollar: "+$485K" },
    vsIdx:      { pct: "+1.2% vs idx", dollar: "+$98K vs idx" },
    yAxis: {
      top: { pct: "+8%", dollar: "+$672K" },
      mid: { pct: "+4%", dollar: "+$336K" },
    },
  },
  "YTD": {
    total: {
      line: "M 5 190 C 60 188 120 180 180 162 C 240 140 300 100 360 69",
      area: "M 5 190 C 60 188 120 180 180 162 C 240 140 300 100 360 69 L 360 195 L 5 195 Z",
    },
    companies: { line: "M 5 190 C 60 188 120 181 180 168 C 240 152 300 125 360 106" },
    aims:      { line: "M 5 190 C 80 188 160 183 240 174 C 300 165 340 158 360 153" },
    dates: ["Jan", "Feb", "Mar", "Apr", "May"],
    tooltip: {
      total:     { pct: "+9.4%", dollar: "+$789K" },
      companies: { pct: "+6.5%", dollar: "+$546K" },
      aims:      { pct: "+3.1%", dollar: "+$260K" },
    },
    dots: { aims: 153, companies: 106, total: 69 },
    profitLoss: { pct: "+9.4%", dollar: "+$789K" },
    vsIdx:      { pct: "+2.1% vs idx", dollar: "+$176K vs idx" },
    yAxis: {
      top: { pct: "+12%", dollar: "+$1.01M" },
      mid: { pct: "+6%",  dollar: "+$504K" },
    },
  },
  "Y": {
    total: {
      line: "M 5 190 C 60 188 120 178 180 158 C 240 132 300 96 360 60",
      area: "M 5 190 C 60 188 120 178 180 158 C 240 132 300 96 360 60 L 360 195 L 5 195 Z",
    },
    companies: { line: "M 5 190 C 60 188 120 180 180 168 C 240 148 300 118 360 92" },
    aims:      { line: "M 5 190 C 80 188 160 182 240 172 C 300 162 340 152 360 148" },
    dates: ["May 25", "Aug 25", "Nov 25", "Feb 26", "May 26"],
    tooltip: {
      total:     { pct: "+22%", dollar: "+$1.85M" },
      companies: { pct: "+15%", dollar: "+$1.26M" },
      aims:      { pct: "+7%",  dollar: "+$588K" },
    },
    dots: { aims: 148, companies: 92, total: 60 },
    profitLoss: { pct: "+22%", dollar: "+$1.85M" },
    vsIdx:      { pct: "+5.4% vs idx", dollar: "+$453K vs idx" },
    yAxis: {
      top: { pct: "+25%", dollar: "+$2.1M" },
      mid: { pct: "+12%", dollar: "+$1.0M" },
    },
  },
  "MAX": {
    total: {
      line: "M 5 190 C 50 189 100 185 150 175 C 200 162 250 132 300 88 C 330 64 348 56 360 54",
      area: "M 5 190 C 50 189 100 185 150 175 C 200 162 250 132 300 88 C 330 64 348 56 360 54 L 360 195 L 5 195 Z",
    },
    companies: { line: "M 5 190 C 50 188 100 183 150 170 C 200 156 250 130 300 105 C 330 92 348 88 360 87" },
    aims:      { line: "M 5 190 C 80 188 160 182 240 170 C 300 160 340 143 360 138" },
    dates: ["2022", "2023", "2024", "2025", "2026"],
    tooltip: {
      total:     { pct: "+73%", dollar: "+$3.55M" },
      companies: { pct: "+55%", dollar: "+$2.68M" },
      aims:      { pct: "+28%", dollar: "+$1.36M" },
    },
    dots: { aims: 138, companies: 87, total: 54 },
    profitLoss: { pct: "+73%", dollar: "+$3.55M" },
    vsIdx:      { pct: "+18% vs idx", dollar: "+$875K vs idx" },
    yAxis: {
      top: { pct: "+75%", dollar: "+$6.3M" },
      mid: { pct: "+37%", dollar: "+$3.1M" },
    },
  },
};

const PERIODS: Period[] = ["D", "M", "3M", "YTD", "Y", "MAX"];
const DISPLAY_MODES: DisplayMode[] = ["%", "$"];

export function ChartPanel() {
  const [period, setPeriod] = useState<Period>("MAX");
  const [displayMode, setDisplayMode] = useState<DisplayMode>("%");
  const [key, setKey] = useState(0);
  const [fading, setFading] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    if (userInteracted) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tick = () => {
      setFading(true);
      window.setTimeout(() => {
        setPeriod((p) => {
          const idx = PERIODS.indexOf(p);
          return PERIODS[(idx + 1) % PERIODS.length];
        });
        setDisplayMode((m) => (m === "%" ? "$" : "%"));
        setKey((k) => k + 1);
        setFading(false);
      }, FADE_MS);
    };
    const id = window.setInterval(tick, LOOP_MS);
    return () => window.clearInterval(id);
  }, [userInteracted]);

  function selectPeriod(p: Period) {
    setUserInteracted(true);
    if (p === period) return;
    setFading(true);
    window.setTimeout(() => { setPeriod(p); setKey((k) => k + 1); setFading(false); }, FADE_MS);
  }

  function selectDisplayMode(m: DisplayMode) {
    setUserInteracted(true);
    if (m === displayMode) return;
    setFading(true);
    window.setTimeout(() => { setDisplayMode(m); setKey((k) => k + 1); setFading(false); }, FADE_MS);
  }

  const d = DATA[period];
  const pl = displayMode === "%" ? d.profitLoss.pct : d.profitLoss.dollar;
  const vs = displayMode === "%" ? d.vsIdx.pct : d.vsIdx.dollar;
  const tt = (k: "total" | "companies" | "aims") =>
    displayMode === "%" ? d.tooltip[k].pct : d.tooltip[k].dollar;
  const yTop = displayMode === "%" ? d.yAxis.top.pct : d.yAxis.top.dollar;
  const yMid = displayMode === "%" ? d.yAxis.mid.pct : d.yAxis.mid.dollar;
  const yBase = displayMode === "%" ? "0%" : "$0";

  return (
    <div
      key={key}
      className="chart-panel"
      style={{
        opacity: fading ? 0 : undefined,
        transition: fading ? `opacity ${FADE_MS}ms ease` : undefined,
      }}
      role="img"
      aria-label="Portfolio returns chart"
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
          animation: lineLoop 10s linear 300ms infinite;
        }
        .price-line  { animation-duration: 10s !important; }
        .volume-line { animation-duration: 10s !important; animation-delay: 500ms !important; }
        .chart-tab:hover:not(.is-active) { color: #2EA3F2; }
        .chart-period-tabs {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 4px;
          padding: 10px 4px 4px;
        }
        .chart-period-tab {
          cursor: pointer;
          background: none;
          border: none;
          font-family: inherit;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: #AF7D43;
          padding: 6px 14px;
          border-radius: 9999px;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .chart-period-tab:hover:not(.is-active) {
          background: rgba(175,125,67,0.14);
        }
        .chart-period-tab.is-active {
          background: #AF7D43;
          color: #fff;
        }
        @media (prefers-reduced-motion: reduce) {
          .aims-line { animation: none !important; opacity: 1 !important; stroke-dashoffset: 0 !important; }
        }
      `}</style>

      {/* Stat cards — Portfolio Value left, Total Profit/Loss right */}
      <div className="chart-cards">
        <div className="chart-card">
          <span className="chart-card-label">Portfolio Value</span>
          <div className="chart-card-row">
            <span className="chart-card-value">$8.4M</span>
            <span className="chart-card-pill">{period}</span>
          </div>
        </div>
        <div className="chart-card">
          <span className="chart-card-label">Total Profit/Loss</span>
          <div className="chart-card-row">
            <span className="chart-card-value">{pl}</span>
            <span className="chart-card-pill">{period}</span>
          </div>
        </div>
      </div>

      {/* $ / % segmented toggle */}
      <div style={{
        display: "inline-flex",
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.14)",
        borderRadius: "9999px",
        padding: "3px",
        marginBottom: "18px",
        gap: "2px",
      }}>
        {DISPLAY_MODES.map((m) => (
          <button
            key={m}
            onClick={() => selectDisplayMode(m)}
            aria-label={m === "%" ? "Show percent" : "Show dollar"}
            style={{
              cursor: "pointer",
              border: "none",
              fontFamily: "inherit",
              fontSize: "13px",
              fontWeight: 700,
              padding: "5px 18px",
              borderRadius: "9999px",
              transition: "background 0.2s, color 0.2s",
              background: m === displayMode ? "#fff" : "transparent",
              color: m === displayMode ? "#1a2340" : "rgba(255,255,255,0.55)",
            }}
          >
            {m}
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
            <text x="398" y="53">{yTop}</text>
            <text x="398" y="123">{yMid}</text>
            <text x="398" y="193">{yBase}</text>
          </g>

          <path className="volume-area" d={d.total.area} fill="url(#totalGrad)" />
          <path className="aims-line" d={d.aims.line} />
          <path className="volume-line" d={d.companies.line} />
          <path className="price-line" d={d.total.line} pathLength={1} />

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
          Total Investment: <strong>{tt("total")}</strong>
          <br />
          Private Companies: <strong>{tt("companies")}</strong>
          <br />
          AIMS Fund: <strong>{tt("aims")}</strong>
        </div>
      </div>

      {/* X-axis date labels — update per selected period */}
      <div className="chart-dates">
        {d.dates.map((dt) => <span key={dt}>{dt}</span>)}
      </div>

      {/* Period selector pills — D · M · 3M · YTD · Y · MAX */}
      <div className="chart-period-tabs">
        {PERIODS.map((p) => (
          <button
            key={p}
            onClick={() => selectPeriod(p)}
            className={`chart-period-tab${p === period ? " is-active" : ""}`}
          >
            {p}
          </button>
        ))}
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
