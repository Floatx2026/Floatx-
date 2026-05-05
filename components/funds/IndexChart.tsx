"use client";

import { useState, useMemo } from "react";

type Range = "3M" | "6M" | "1Y" | "MAX";
const RANGES: Range[] = ["3M", "6M", "1Y", "MAX"];

// Placeholder normalised series per range. Each is an array of y-values 0..100.
const SERIES: Record<Range, number[]> = {
  "3M":  [62, 65, 63, 68, 71, 70, 74, 78, 76, 80, 84, 88],
  "6M":  [50, 52, 55, 53, 58, 60, 62, 65, 63, 68, 71, 70, 74, 78, 76, 80, 84, 88],
  "1Y":  [22, 24, 28, 26, 30, 32, 35, 34, 38, 42, 44, 46, 50, 52, 55, 53, 58, 60, 62, 65, 63, 68, 84, 88],
  "MAX": [10, 12, 14, 13, 16, 18, 20, 22, 24, 28, 26, 30, 32, 35, 34, 38, 42, 44, 46, 50, 52, 55, 53, 58, 60, 62, 65, 63, 68, 71, 70, 74, 78, 76, 80, 84, 86, 88],
};

const W = 720;
const H = 280;
const PAD_X = 10;
const PAD_Y = 20;

function buildPath(values: number[]): string {
  if (!values.length) return "";
  const step = (W - PAD_X * 2) / (values.length - 1);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  return values
    .map((v, i) => {
      const x = PAD_X + i * step;
      const y = PAD_Y + ((max - v) / range) * (H - PAD_Y * 2);
      return `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");
}

function buildArea(values: number[]): string {
  const line = buildPath(values);
  if (!line) return "";
  const step = (W - PAD_X * 2) / (values.length - 1);
  const lastX = PAD_X + (values.length - 1) * step;
  return `${line} L ${lastX.toFixed(2)} ${H - PAD_Y} L ${PAD_X} ${H - PAD_Y} Z`;
}

export function IndexChart() {
  const [range, setRange] = useState<Range>("MAX");
  const series = SERIES[range];
  const linePath = useMemo(() => buildPath(series), [series]);
  const areaPath = useMemo(() => buildArea(series), [series]);

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto block"
        role="img"
        aria-label="FloatX Fund Index performance chart"
      >
        <defs>
          <linearGradient id="fundIndexGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#162347" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#162347" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* horizontal reference lines */}
        {[0.25, 0.5, 0.75].map((t) => {
          const y = PAD_Y + t * (H - PAD_Y * 2);
          return (
            <line
              key={t}
              x1={PAD_X}
              x2={W - PAD_X}
              y1={y}
              y2={y}
              stroke="#E6E6E6"
              strokeWidth={1}
            />
          );
        })}

        <path d={areaPath} fill="url(#fundIndexGrad)" />
        <path
          d={linePath}
          fill="none"
          stroke="#162347"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="flex justify-end mt-3" role="tablist" aria-label="Chart timeframe">
        <div className="inline-flex rounded-full border border-line bg-white p-1">
          {RANGES.map((r) => (
            <button
              key={r}
              type="button"
              role="tab"
              aria-selected={r === range}
              onClick={() => setRange(r)}
              className={`px-4 py-1.5 text-[12px] font-medium rounded-full transition-colors ${
                r === range ? "bg-navy text-white" : "text-ink/65 hover:text-navy"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
