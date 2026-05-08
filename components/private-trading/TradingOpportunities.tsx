"use client";

import { useMemo, useState } from "react";
import { opportunities } from "@/lib/opportunities";
import { OpportunityCard } from "@/components/investments/OpportunityCard";

export function TradingOpportunities() {
  const allItems = useMemo(
    () => opportunities.filter((o) => o.type === "Private Trading"),
    [],
  );
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allItems;
    return allItems.filter((o) =>
      [o.name, o.sector, o.blurb].some((field) => field.toLowerCase().includes(q)),
    );
  }, [allItems, query]);

  return (
    <section id="opportunities" className="bg-white py-24 scroll-mt-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div className="max-w-[640px]">
            <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.6vw,42px)] leading-[1.15] m-0 mb-3">
              Discover our opportunities.
            </h2>
            <p className="text-[16px] leading-[1.65] text-ink/[0.78] m-0">
              A current snapshot of late-stage private companies available to trade through FloatX.
            </p>
          </div>

          <div className="relative w-full min-[600px]:w-auto min-[600px]:min-w-[320px]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/45 pointer-events-none"
            >
              <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.7" />
              <path d="M16 16l4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
            <label htmlFor="opportunities-search" className="sr-only">
              Search companies
            </label>
            <input
              id="opportunities-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search companies, sectors..."
              className="w-full bg-white border border-line rounded-full pl-11 pr-4 py-2.5 text-[14px] text-navy placeholder:text-ink/45 focus:outline-none focus:border-navy/45 focus:ring-2 focus:ring-navy/10 transition-colors"
            />
          </div>
        </div>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[960px]:grid-cols-3 min-[1240px]:grid-cols-4 gap-5">
            {items.map((o) => (
              <OpportunityCard key={o.name} o={o} />
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-line rounded-[20px] py-16 text-center">
            <p className="text-[15px] text-ink/65 m-0">
              No companies match &ldquo;{query}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => setQuery("")}
              className="mt-3 text-[13px] uppercase tracking-[0.10em] font-semibold text-navy hover:text-tan transition-colors cursor-pointer"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
