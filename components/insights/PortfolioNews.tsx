"use client";

import { useState } from "react";
import { portfolioNews, type PortfolioNewsItem } from "@/lib/portfolio-news";

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function NewsAvatar({ n }: { n: PortfolioNewsItem }) {
  const [failed, setFailed] = useState(false);

  const logoSrc = n.logo
    ? n.logo.startsWith("/")
      ? n.logo
      : `https://www.google.com/s2/favicons?domain=${n.logo}&sz=256`
    : null;

  if (logoSrc && !failed) {
    return (
      <div
        className="flex-none w-10 h-10 rounded-full border border-line overflow-hidden"
        style={{ backgroundColor: n.logoBg ?? "#ffffff" }}
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt=""
          className="w-full h-full object-cover rounded-full"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div
      className="flex-none w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-sans font-bold text-[12px] -tracking-[0.01em]"
      aria-hidden="true"
    >
      {n.initials}
    </div>
  );
}

export function PortfolioNews() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="max-w-[640px] mb-12">
          <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.4vw,40px)] leading-[1.15] m-0 mb-3">
            Latest from the platform.
          </h2>
          <p className="text-[16px] leading-[1.65] text-ink/[0.78] m-0">
            Selected public news on companies currently active across FloatX. Sourced from third-party publications — not FloatX commentary or endorsement.
          </p>
        </div>

        <div className="bg-white border border-line rounded-[20px] overflow-hidden shadow-[0_10px_28px_-16px_rgba(22,35,71,0.10)]">
          {portfolioNews.map((n, i) => (
            <a
              key={`${n.company}-${i}`}
              href={n.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-5 px-6 py-5 border-b border-line last:border-b-0 hover:bg-cream/60 transition-colors"
            >
              <NewsAvatar n={n} />

              <div className="flex-1 min-w-0">
                <span className="text-[10.5px] uppercase tracking-[0.10em] font-semibold text-tan block mb-1.5">
                  {n.company}
                </span>
                <h3 className="font-sans font-medium text-navy text-[16px] leading-[1.35] m-0 mb-1.5 -tracking-[0.005em] group-hover:text-navy-deep">
                  {n.headline}
                </h3>
                <p className="text-[12px] text-ink/55 m-0">
                  {n.source} · {formatDate(n.date)}
                </p>
              </div>

              <span
                className="flex-none text-ink/40 text-[14px] mt-1 transition-all duration-200 group-hover:text-navy group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
          ))}
        </div>

        <p className="text-[11.5px] text-ink/55 leading-[1.6] mt-6 max-w-[760px]">
          News items are aggregated from third-party publications for context only. FloatX does not endorse, verify, or guarantee their accuracy and they should not be construed as financial advice.
        </p>
      </div>
    </section>
  );
}
