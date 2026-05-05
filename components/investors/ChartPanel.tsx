"use client";

import { useEffect, useState } from "react";

const LOOP_MS = 6000;
const FADE_MS = 450;

export function ChartPanel() {
  const [key, setKey] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const tick = () => {
      setFading(true);
      window.setTimeout(() => {
        setKey((k) => k + 1);
        setFading(false);
      }, FADE_MS);
    };
    const id = window.setInterval(tick, LOOP_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      key={key}
      className="chart-panel"
      style={{
        opacity: fading ? 0 : undefined,
        transition: fading ? `opacity ${FADE_MS}ms ease` : undefined,
      }}
      role="img"
      aria-label="Sample price and volume chart"
    >
      <div className="chart-cards">
        <div className="chart-card">
          <span className="chart-card-label">Last Price</span>
          <div className="chart-card-row">
            <span className="chart-card-value">$16.00</span>
            <span className="chart-card-pill">8.00%</span>
          </div>
        </div>
        <div className="chart-card">
          <span className="chart-card-label">Volume</span>
          <div className="chart-card-row">
            <span className="chart-card-value">2,105,340</span>
            <span className="chart-card-pill">56.00%</span>
          </div>
        </div>
      </div>

      <div className="chart-tabs">
        <span className="chart-tab is-active">1M</span>
        <span className="chart-tab">6M</span>
        <span className="chart-tab">1Y</span>
        <span className="chart-tab">YTD</span>
        <span className="chart-tab">MAX</span>
      </div>

      <div className="chart-area">
        <svg className="chart-svg" viewBox="0 0 400 215" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="volGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C5D3F5" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#C5D3F5" stopOpacity="0" />
            </linearGradient>
          </defs>

          <g className="y-axis" fontSize="9" fill="rgba(255,255,255,0.45)" fontFamily="inherit">
            <text x="365" y="14">900,000</text>
            <text x="365" y="38">800,000</text>
            <text x="365" y="62">700,000</text>
            <text x="365" y="86">600,000</text>
            <text x="365" y="110">500,000</text>
            <text x="365" y="134">400,000</text>
            <text x="365" y="158">300,000</text>
            <text x="365" y="182">200,000</text>
          </g>

          <path
            className="volume-area"
            d="M 5 132 C 22 117 38 112 58 124 C 78 136 92 164 118 162 C 144 160 162 140 184 132 C 206 124 224 160 248 152 C 272 144 290 102 312 110 C 326 115 344 56 360 24 L 360 195 L 5 195 Z"
            fill="url(#volGrad)"
          />
          <path
            className="volume-line"
            d="M 5 132 C 22 117 38 112 58 124 C 78 136 92 164 118 162 C 144 160 162 140 184 132 C 206 124 224 160 248 152 C 272 144 290 102 312 110 C 326 115 344 56 360 24"
            pathLength={1}
          />
          <path
            className="price-line"
            d="M 5 92 C 28 100 52 108 82 100 C 112 92 142 80 172 78 C 202 76 232 80 252 72 C 278 60 304 48 328 38 C 344 33 354 30 360 32"
            pathLength={1}
          />
          <line className="active-dot-fade" x1="360" y1="32" x2="360" y2="195" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeDasharray="3 3" />
          <circle className="active-dot-fade" cx="360" cy="32" r="5" fill="#AF7D43" stroke="#fff" strokeWidth="2" />
        </svg>

        <div className="chart-tooltip">
          Traded Value: <strong>$16.00</strong>
          <br />
          Volume: <strong>2,105,340</strong>
        </div>
      </div>

      <div className="chart-dates">
        <span className="nav-arrow">‹</span>
        <span>May 1st</span>
        <span>May 5th</span>
        <span>May 10th</span>
        <span className="nav-arrow">›</span>
      </div>

      <div className="chart-legend">
        <span className="legend-item"><i className="legend-dot legend-tan" /> Price</span>
        <span className="legend-item"><i className="legend-dot legend-blue" /> Volume</span>
      </div>
    </div>
  );
}
