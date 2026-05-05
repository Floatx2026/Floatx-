"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  opportunities,
  regionLabel,
  sectors,
  type Opportunity,
  type Sector,
} from "@/lib/opportunities";

type TypeFilter = "All" | "Private Trading" | "Unicorn Trading" | "Capital Raising";
type SectorFilter = "All" | Sector;

const typeFilters: TypeFilter[] = [
  "All",
  "Private Trading",
  "Unicorn Trading",
  "Capital Raising",
];

const sectorFilters: SectorFilter[] = ["All", ...sectors];

function matches(o: Opportunity, type: TypeFilter, sector: SectorFilter) {
  const typeOk =
    type === "All" ||
    (type === "Unicorn Trading" ? !!o.isUnicorn : o.type === type);
  const sectorOk = sector === "All" || o.sector === sector;
  return typeOk && sectorOk;
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-[13px] font-medium px-4 py-2 rounded-full border transition-all duration-150 cursor-pointer ${
        active
          ? "bg-navy text-white border-navy"
          : "bg-white text-ink border-line hover:border-navy hover:text-navy"
      }`}
    >
      {children}
    </button>
  );
}

function Card({ o }: { o: Opportunity }) {
  return (
    <Link
      href={o.href}
      className="group bg-white rounded-[20px] border border-line p-6 flex flex-col hover:border-navy/40 hover:shadow-[0_18px_36px_-12px_rgba(22,35,71,0.16)] hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-14 h-14 rounded-full bg-navy text-white flex items-center justify-center font-sans font-bold text-[16px] -tracking-[0.01em]"
          aria-hidden="true"
        >
          {o.initials}
        </div>
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

export function OpportunityExplorer() {
  const [type, setType] = useState<TypeFilter>("All");
  const [sector, setSector] = useState<SectorFilter>("All");

  const filtered = useMemo(
    () => opportunities.filter((o) => matches(o, type, sector)),
    [type, sector],
  );

  return (
    <section id="opportunities" className="bg-white py-20 scroll-mt-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-[11px] uppercase tracking-[0.12em] font-semibold text-ink/55 mr-2">
              Type
            </span>
            {typeFilters.map((t) => (
              <FilterChip key={t} active={type === t} onClick={() => setType(t)}>
                {t}
              </FilterChip>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] uppercase tracking-[0.12em] font-semibold text-ink/55 mr-2">
              Sector
            </span>
            {sectorFilters.map((s) => (
              <FilterChip
                key={s}
                active={sector === s}
                onClick={() => setSector(s)}
              >
                {s}
              </FilterChip>
            ))}
          </div>
          <p className="text-[12px] text-ink/55 mt-5 m-0">
            Showing {filtered.length} of {opportunities.length} opportunities
          </p>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[960px]:grid-cols-3 min-[1240px]:grid-cols-4 gap-5">
            {filtered.map((o) => (
              <Card key={o.name} o={o} />
            ))}
          </div>
        ) : (
          <div className="bg-cream border border-line rounded-[20px] p-10 text-center">
            <p className="font-serif italic text-navy text-[22px] m-0 mb-2">
              No opportunities match these filters.
            </p>
            <p className="text-[14px] text-ink/65 m-0">
              Try clearing a filter or selecting a broader category.
            </p>
            <button
              type="button"
              onClick={() => {
                setType("All");
                setSector("All");
              }}
              className="mt-5 text-[13px] font-semibold text-navy underline underline-offset-4 cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
