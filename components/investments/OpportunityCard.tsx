"use client";

import Link from "next/link";
import { useState } from "react";
import { regionLabel, type Opportunity } from "@/lib/opportunities";

function LogoAvatar({ o }: { o: Opportunity }) {
  const [failed, setFailed] = useState(false);

  const logoSrc = o.logo
    ? o.logo.startsWith("/")
      ? o.logo
      : `https://www.google.com/s2/favicons?domain=${o.logo}&sz=256`
    : null;

  if (logoSrc && !failed) {
    return (
      <div className="w-14 h-14 rounded-full bg-white border border-line flex items-center justify-center overflow-hidden flex-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt={`${o.name} logo`}
          className="w-10 h-10 object-contain"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div
      className="w-14 h-14 rounded-full bg-navy text-white flex items-center justify-center font-sans font-bold text-[16px] -tracking-[0.01em] flex-none"
      aria-hidden="true"
    >
      {o.initials}
    </div>
  );
}

export function OpportunityCard({ o }: { o: Opportunity }) {
  return (
    <Link
      href={o.href}
      className="group bg-white rounded-[20px] border border-line p-6 flex flex-col hover:border-navy/40 hover:shadow-[0_18px_36px_-12px_rgba(22,35,71,0.16)] hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-5">
        <LogoAvatar o={o} />
        <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-ink/55 bg-cream border border-line px-2 py-1 rounded-full">
          {regionLabel[o.region]}
        </span>
      </div>
      <h3 className="font-sans font-bold text-navy text-[18px] leading-[1.3] m-0 mb-3 -tracking-[0.005em]">
        {o.name}
      </h3>
      <div className="flex flex-wrap gap-1.5 mb-4">
        <span className="text-[10.5px] uppercase tracking-[0.10em] font-semibold text-tan border border-tan/40 px-2 py-0.5 rounded-full">
          {o.type}
        </span>
        {o.isUnicorn && (
          <span className="text-[10.5px] uppercase tracking-[0.10em] font-semibold text-tan border border-tan/40 px-2 py-0.5 rounded-full">
            Unicorn
          </span>
        )}
        <span className="text-[10.5px] uppercase tracking-[0.10em] font-semibold text-tan border border-tan/40 px-2 py-0.5 rounded-full">
          {o.sector}
        </span>
      </div>
      <p className="text-[13.5px] leading-[1.6] text-ink/75 m-0 mb-5 flex-1">
        {o.blurb}
      </p>
      <span className="text-[12.5px] font-semibold text-navy uppercase tracking-[0.10em] inline-flex items-center gap-1.5">
        Learn more
        <span
          className="transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        >
          →
        </span>
      </span>
    </Link>
  );
}
