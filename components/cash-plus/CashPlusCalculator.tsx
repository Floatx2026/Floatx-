"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { CURRENT_TARGET_RATE } from "./CashPlusHero";

type Frequency = "none" | "weekly" | "fortnightly" | "monthly";

const frequencyToMonthly: Record<Frequency, number> = {
  none: 0,
  weekly: 52 / 12,
  fortnightly: 26 / 12,
  monthly: 1,
};

const frequencyLabel: Record<Frequency, string> = {
  none: "no recurring",
  weekly: "weekly",
  fortnightly: "fortnightly",
  monthly: "monthly",
};

function formatAUD(value: number) {
  return value.toLocaleString("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  });
}

function buildSeries(
  startBalance: number,
  monthlyContribution: number,
  annualRatePct: number,
  years: number,
) {
  const months = Math.max(1, Math.round(years * 12));
  const monthlyRate = annualRatePct / 100 / 12;
  const series: { month: number; balance: number; contributed: number }[] = [];

  let balance = startBalance;
  let contributed = startBalance;

  series.push({ month: 0, balance, contributed });
  for (let m = 1; m <= months; m++) {
    balance = balance * (1 + monthlyRate) + monthlyContribution;
    contributed += monthlyContribution;
    series.push({ month: m, balance, contributed });
  }
  return series;
}

export function CashPlusCalculator() {
  const [startBalance, setStartBalance] = useState(25000);
  const [recurring, setRecurring] = useState(500);
  const [frequency, setFrequency] = useState<Frequency>("monthly");
  const [years, setYears] = useState(10);

  const monthlyContribution = recurring * frequencyToMonthly[frequency];
  const rate = CURRENT_TARGET_RATE;

  const series = useMemo(
    () => buildSeries(startBalance, monthlyContribution, rate, years),
    [startBalance, monthlyContribution, rate, years],
  );

  const final = series[series.length - 1];
  const earnings = final.balance - final.contributed;

  // SVG chart geometry
  const W = 520;
  const H = 220;
  const padX = 4;
  const padY = 8;
  const xs = (i: number) => padX + (i / (series.length - 1)) * (W - padX * 2);
  const maxY = Math.max(final.balance, 1);
  const ys = (v: number) => H - padY - (v / maxY) * (H - padY * 2);

  const linePath = series
    .map((p, i) => `${i === 0 ? "M" : "L"}${xs(i).toFixed(2)} ${ys(p.balance).toFixed(2)}`)
    .join(" ");
  const areaPath = `${linePath} L${xs(series.length - 1).toFixed(2)} ${H - padY} L${xs(0).toFixed(2)} ${H - padY} Z`;

  // contribution baseline (linear)
  const contribLinePath = series
    .map((p, i) => `${i === 0 ? "M" : "L"}${xs(i).toFixed(2)} ${ys(p.contributed).toFixed(2)}`)
    .join(" ");

  return (
    <section className="bg-page-bg py-24">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 min-[900px]:grid-cols-[1fr_1.2fr] gap-12 items-center">
        <div>
          <p className="eyebrow mb-4">Compound Calculator</p>
          <h2 className="font-serif italic font-normal text-navy text-[clamp(32px,3.6vw,44px)] leading-[1.15] m-0 mb-5 max-w-[18ch]">
            See what your idle cash could earn.
          </h2>
          <p className="text-[16px] leading-[1.65] text-ink/75 m-0 mb-3 max-w-[44ch]">
            Project how a Cash Plus balance could grow at the current target rate with monthly compounding and optional recurring top-ups.
          </p>
          <p className="italic text-[14px] text-ink/55 m-0 mb-7">Rate subject to change.</p>

          <div className="flex flex-col gap-5 mb-7">
            <div>
              <label className="text-[12px] uppercase tracking-[0.12em] text-ink/55 font-medium block mb-2">
                Starting balance
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/55 text-[15px]">A$</span>
                <input
                  type="number"
                  inputMode="numeric"
                  min={1000}
                  step={1000}
                  value={startBalance}
                  onChange={(e) => setStartBalance(Math.max(0, Number(e.target.value) || 0))}
                  className="w-full bg-white border border-line rounded-xl pl-10 pr-4 py-3 text-[16px] font-medium text-navy focus:outline-none focus:border-navy"
                />
              </div>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-3">
              <div>
                <label className="text-[12px] uppercase tracking-[0.12em] text-ink/55 font-medium block mb-2">
                  Recurring top-up
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/55 text-[15px]">A$</span>
                  <input
                    type="number"
                    inputMode="numeric"
                    min={0}
                    step={50}
                    value={recurring}
                    onChange={(e) => setRecurring(Math.max(0, Number(e.target.value) || 0))}
                    disabled={frequency === "none"}
                    className="w-full bg-white border border-line rounded-xl pl-10 pr-4 py-3 text-[16px] font-medium text-navy focus:outline-none focus:border-navy disabled:opacity-50"
                  />
                </div>
              </div>
              <div>
                <label className="text-[12px] uppercase tracking-[0.12em] text-ink/55 font-medium block mb-2">
                  Frequency
                </label>
                <select
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value as Frequency)}
                  className="bg-white border border-line rounded-xl px-4 py-3 text-[15px] font-medium text-navy focus:outline-none focus:border-navy h-[50px]"
                >
                  <option value="none">None</option>
                  <option value="weekly">Weekly</option>
                  <option value="fortnightly">Fortnightly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between mb-2">
                <label className="text-[12px] uppercase tracking-[0.12em] text-ink/55 font-medium">
                  Time horizon
                </label>
                <span className="text-[14px] font-medium text-navy">{years} {years === 1 ? "year" : "years"}</span>
              </div>
              <input
                type="range"
                min={1}
                max={30}
                step={1}
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full accent-tan"
              />
            </div>
          </div>

          <Button href="https://app.floatx.com/signup?tier=sophisticated&product=cash-plus" variant="primary" shape="pill">
            Open an Account
          </Button>
        </div>

        <div className="bg-navy text-white rounded-[24px] p-8 min-[900px]:p-10 shadow-[0_18px_40px_-12px_rgba(22,35,71,0.30)]">
          <p className="text-[11px] uppercase tracking-[0.12em] text-white/60 font-medium m-0">
            Projected balance in {years} {years === 1 ? "year" : "years"}
          </p>
          <p className="font-sans font-bold text-white text-[clamp(36px,5vw,52px)] leading-none -tracking-[0.02em] m-0 mt-2">
            {formatAUD(final.balance)}
          </p>

          <div className="grid grid-cols-2 gap-6 mt-7 mb-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.12em] text-white/55 font-medium m-0">Total contributed</p>
              <p className="font-sans font-medium text-white text-[20px] leading-none m-0 mt-2">{formatAUD(final.contributed)}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.12em] text-white/55 font-medium m-0">Total earnings</p>
              <p className="font-sans font-medium text-tan text-[20px] leading-none m-0 mt-2">+{formatAUD(earnings)}</p>
            </div>
          </div>

          <div className="bg-white/[0.04] rounded-[16px] p-4">
            <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" aria-hidden="true">
              <defs>
                <linearGradient id="cp-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#C28959" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#C28959" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d={areaPath} fill="url(#cp-area)" />
              <path d={contribLinePath} fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeDasharray="4 4" />
              <path d={linePath} fill="none" stroke="#C28959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex items-center gap-5 mt-3 text-[11px] text-white/70">
              <span className="inline-flex items-center gap-2">
                <span className="inline-block w-3 h-[2px] bg-tan" /> Balance
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="inline-block w-3 h-[2px] border-t border-dashed border-white/40" /> Contributed
              </span>
            </div>
          </div>

          <p className="text-[11px] text-white/55 leading-[1.6] mt-5 m-0">
            Based on {formatAUD(startBalance)} starting balance + {formatAUD(recurring)} {frequencyLabel[frequency]} top-ups at the current target rate of {rate.toFixed(2)}% p.a., compounded monthly. Illustrative only — past performance is not a reliable indicator of future returns and the target is not guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
}
