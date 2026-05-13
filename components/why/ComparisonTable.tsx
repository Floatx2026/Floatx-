"use client";

import Image from "next/image";
import { useState } from "react";

const features = [
  { name: "Private trading — with market depth", floatx: true,  forge: false, carta: false, addx: false, npm: false },
  { name: "Company investment",                  floatx: true,  forge: false, carta: false, addx: true,  npm: true  },
  { name: "Fund investments",                    floatx: true,  forge: false, carta: false, addx: true,  npm: false },
  { name: "Debt investments",                    floatx: true,  forge: false, carta: false, addx: true,  npm: false },
  { name: "Property investments",                floatx: true,  forge: false, carta: false, addx: false, npm: false },
  { name: "Digital wallet services",             floatx: true,  forge: false, carta: false, addx: true,  npm: false },
  { name: "Global FX payments",                  floatx: true,  forge: false, carta: false, addx: false, npm: false },
  { name: "AI integrations",                     floatx: true,  forge: false, carta: false, addx: false, npm: false },
  { name: "Custodian services",                  floatx: true,  forge: false, carta: false, addx: true,  npm: false },
  { name: "Blockchain services",                 floatx: true,  forge: false, carta: false, addx: true,  npm: false },
];

const competitors = [
  {
    key:       "floatx",
    label:     "FloatX",
    logo:      null,
    highlight: true,
  },
  {
    key:       "forge",
    label:     "Forge",
    logo:      "https://www.google.com/s2/favicons?domain=forgeglobal.com&sz=128",
    highlight: false,
  },
  {
    key:       "carta",
    label:     "Carta",
    logo:      "https://www.google.com/s2/favicons?domain=carta.com&sz=128",
    highlight: false,
  },
  {
    key:       "addx",
    label:     "ADDX",
    logo:      "https://www.google.com/s2/favicons?domain=addx.co&sz=128",
    highlight: false,
  },
  {
    key:       "npm",
    label:     "NPM",
    logo:      "https://www.google.com/s2/favicons?domain=nasdaqprivatemarket.com&sz=128",
    highlight: false,
  },
] as const;

/* ── Competitor logo with fallback initials ─────────────────── */
function CompetitorLogo({ src, label }: { src: string; label: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
        <span className="text-white font-bold text-[13px] leading-none">
          {label.slice(0, 2).toUpperCase()}
        </span>
      </div>
    );
  }

  return (
    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={label}
        width={40}
        height={40}
        className="w-6 h-6 object-contain"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

/* ── Check / X icons ────────────────────────────────────────── */
function Check({ yes }: { yes: boolean }) {
  return yes ? (
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E6F6EE] transition-transform duration-200 group-hover:scale-110">
      <svg viewBox="0 0 20 20" className="w-4 h-4" aria-label="Yes">
        <path d="M4 10l4.5 4.5L16 6" stroke="#16A35A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </span>
  ) : (
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#FEF2F2]">
      <svg viewBox="0 0 20 20" className="w-4 h-4" aria-label="No">
        <path d="M6 6l8 8M14 6l-8 8" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    </span>
  );
}

/* ── Table ──────────────────────────────────────────────────── */
export function ComparisonTable() {
  return (
    <section className="bg-page-bg py-20">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-serif italic font-normal text-navy text-[clamp(26px,3.5vw,40px)] leading-[1.2] m-0 mb-3">
            Unmatched choice in private markets: compare investment options
          </h2>
          <p className="text-[16px] text-ink/65 m-0">
            Simplify your search: compare private investment platforms
          </p>
        </div>

        {/* Table — scrollable on mobile */}
        <div className="overflow-x-auto rounded-[20px] shadow-[0_12px_40px_-12px_rgba(22,35,71,0.18)]">
          <table className="w-full min-w-[680px] border-collapse">

            {/* ── Header ───────────────────────────────────────────── */}
            <thead>
              <tr className="bg-navy">
                {/* Feature label */}
                <th className="text-left text-white/60 text-[12px] font-medium px-7 py-6 rounded-tl-[20px] w-[34%] uppercase tracking-[0.08em]">
                  Feature
                </th>

                {competitors.map((c, i) => (
                  <th
                    key={c.key}
                    className={`text-center px-4 py-5 ${i === competitors.length - 1 ? "rounded-tr-[20px]" : ""}`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      {c.highlight ? (
                        /* FloatX — white SVG logo on navy background */
                        <Image
                          src="/floatx-logo-white.svg"
                          alt="FloatX"
                          width={100}
                          height={22}
                          className="h-5 w-auto"
                        />
                      ) : c.logo ? (
                        /* Competitor — favicon in circle */
                        <CompetitorLogo src={c.logo} label={c.label} />
                      ) : null}

                      {/* Label — competitors only */}
                      {!c.highlight && (
                        <span className="block text-[12px] font-semibold text-white/80">
                          {c.label}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* ── Rows ─────────────────────────────────────────────── */}
            <tbody>
              {features.map((f, i) => {
                const isLast = i === features.length - 1;
                return (
                  <tr
                    key={f.name}
                    className={`group border-b border-line/50 transition-colors duration-150 cursor-default
                      ${i % 2 === 0 ? "bg-white" : "bg-[#FAFBFE]"}
                      hover:bg-[#EEF3FF]
                      ${isLast ? "last-of-type:border-b-0" : ""}
                    `}
                  >
                    {/* Feature name */}
                    <td className={`px-7 py-4 text-[14px] text-navy/85 font-medium ${isLast ? "rounded-bl-[20px]" : ""}`}>
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                        {f.name}
                      </span>
                    </td>

                    {/* Check cells */}
                    {competitors.map((c, ci) => (
                      <td
                        key={c.key}
                        className={`px-4 py-4 text-center transition-colors duration-150
                          ${c.highlight ? "bg-tan/[0.04] group-hover:bg-tan/[0.09]" : ""}
                          ${ci === competitors.length - 1 && isLast ? "rounded-br-[20px]" : ""}
                        `}
                      >
                        <div className="flex justify-center">
                          <Check yes={f[c.key]} />
                        </div>
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>

          </table>
        </div>

        {/* Footnote */}
        <p className="text-center text-[12px] text-ink/40 mt-5 m-0">
          Based on publicly available platform information. FloatX comparison is indicative only.
        </p>
      </div>
    </section>
  );
}
