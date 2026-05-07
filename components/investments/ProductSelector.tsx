"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { opportunities, type OpportunityType } from "@/lib/opportunities";
import { OpportunityCard } from "./OpportunityCard";

type Status = "live" | "coming-soon" | "fund-index";

type Product = {
  id: string;
  label: string;
  href: string;
  description: string;
  icon: ReactNode;
  status: Status;
  type?: OpportunityType;
};

const products: Product[] = [
  {
    id: "private-trading",
    label: "Private Trading",
    href: "/investments/private-trading",
    description:
      "Late-stage privates and pre-IPO secondaries. Buy and sell shares in global private companies on FloatX's verified secondary market.",
    status: "live",
    type: "Private Trading",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-7 h-7">
        <path d="M3 8h13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M16 8l-3-3M16 8l-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 16H8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8 16l3-3M8 16l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "company-investment",
    label: "Company Investment",
    href: "/investments/company-investment",
    description:
      "Primary equity rounds in private companies — sourced, due-diligenced and structured for FloatX wholesale allocators.",
    status: "live",
    type: "Company Investment",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-7 h-7">
        <rect x="3.5" y="6" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 15l3-3 3 1.5 5-5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 8h4v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "fund-investments",
    label: "Fund Investments",
    href: "/investments/fund-investments",
    description:
      "Diversified exposure to top private funds — track our flagship FloatX Unicorn Fund Index alongside managed strategies.",
    status: "fund-index",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-7 h-7">
        <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M12 2.5v3.5M12 18v3.5M2.5 12H6M18 12h3.5M5.4 5.4l2.5 2.5M16.1 16.1l2.5 2.5M5.4 18.6l2.5-2.5M16.1 7.9l2.5-2.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "debt-investments",
    label: "Debt Investments",
    href: "/investments/debt-investments",
    description:
      "Alternative-asset debt and property-mortgage positions — contractual income with capital protection from real underlying collateral.",
    status: "coming-soon",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-7 h-7">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "property-investments",
    label: "Property Investments",
    href: "/investments/property-investments",
    description:
      "Diversified property exposure through professionally-managed mortgage and fund strategies, secured by real assets.",
    status: "coming-soon",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-7 h-7">
        <path d="M4 20V9l8-5 8 5v11" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M3 20h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M9.5 20v-5h5v5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function statusBadge(p: Product, count: number) {
  if (p.status === "live") {
    return (
      <span className="text-[10.5px] uppercase tracking-[0.10em] font-semibold text-tan border border-tan/40 px-2 py-0.5 rounded-full">
        {count} {count === 1 ? "live opportunity" : "live opportunities"}
      </span>
    );
  }
  if (p.status === "coming-soon") {
    return (
      <span className="inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.10em] font-semibold text-tan border border-tan/40 px-2 py-0.5 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-tan animate-pulse" aria-hidden="true" />
        Coming soon
      </span>
    );
  }
  return (
    <span className="text-[10.5px] uppercase tracking-[0.10em] font-semibold text-navy/70 border border-navy/20 px-2 py-0.5 rounded-full">
      View on Funds page
    </span>
  );
}

export function ProductSelector() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const selected = selectedId
    ? products.find((p) => p.id === selectedId) ?? null
    : null;

  const filtered = selected?.type
    ? opportunities.filter((o) => o.type === selected.type)
    : [];

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (selected && revealRef.current) {
      revealRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedId, selected]);

  return (
    <>
      <section
        id="opportunities"
        className="bg-white py-20 scroll-mt-24"
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[640px] mb-10">
            <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.4vw,40px)] leading-[1.15] m-0 mb-3">
              Pick a product.
            </h2>
            <p className="text-[16px] leading-[1.65] text-ink/[0.78] m-0">
              Choose a category to see live opportunities — or use the navigation above to dive into a product&apos;s full page.
            </p>
          </div>

          <div className="grid grid-cols-1 min-[700px]:grid-cols-2 gap-6">
            {products.map((p) => {
              const isSelected = p.id === selectedId;
              const count = p.type
                ? opportunities.filter((o) => o.type === p.type).length
                : 0;

              return (
                <div key={p.id} className="flex flex-col gap-4">
                  <div
                    className={`rounded-[24px] p-8 min-[700px]:p-10 flex flex-col gap-5 h-full transition-all duration-200 ${
                      isSelected
                        ? "bg-cream border-2 border-tan shadow-[0_18px_36px_-12px_rgba(175,125,67,0.20)]"
                        : "bg-white border border-line"
                    }`}
                  >
                    <div className="w-14 h-14 rounded-full bg-cream border border-tan/30 flex items-center justify-center text-tan">
                      {p.icon}
                    </div>
                    <h3 className="font-sans font-bold text-navy text-[20px] leading-[1.3] m-0 -tracking-[0.01em]">
                      {p.label}
                    </h3>
                    <p className="text-[15px] leading-[1.65] text-ink/70 m-0 flex-1">
                      {p.description}
                    </p>
                    <div>{statusBadge(p, count)}</div>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedId(isSelected ? null : p.id)
                    }
                    aria-pressed={isSelected}
                    aria-controls="selected-product-panel"
                    className={`w-full rounded-full px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.10em] transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-navy text-white hover:bg-navy-deep"
                        : "bg-white text-navy border border-navy hover:bg-navy hover:text-white"
                    }`}
                  >
                    {isSelected ? "Hide" : "See more"}
                    <span aria-hidden="true" className="ml-1.5">
                      {isSelected ? "↑" : "↓"}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {selected && (
        <section
          id="selected-product-panel"
          ref={revealRef}
          className="bg-cream py-20 scroll-mt-24"
        >
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
              <div className="max-w-[680px]">
                <span className="text-[10.5px] uppercase tracking-[0.14em] font-semibold text-tan mb-2 inline-block">
                  Showing
                </span>
                <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.4vw,40px)] leading-[1.15] m-0 mb-3">
                  {selected.label}.
                </h2>
                <p className="text-[15px] leading-[1.65] text-ink/[0.78] m-0">
                  {selected.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                className="text-[12.5px] font-semibold text-navy uppercase tracking-[0.10em] inline-flex items-center gap-1.5 hover:text-tan transition-colors cursor-pointer"
              >
                Close
                <span aria-hidden="true">×</span>
              </button>
            </div>

            {selected.status === "live" && filtered.length > 0 && (
              <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[960px]:grid-cols-3 min-[1240px]:grid-cols-4 gap-5">
                {filtered.map((o) => (
                  <OpportunityCard key={o.name} o={o} />
                ))}
              </div>
            )}

            {selected.status === "live" && filtered.length === 0 && (
              <div className="bg-white border border-line rounded-[20px] p-10 text-center">
                <p className="font-serif italic text-navy text-[22px] m-0">
                  No live opportunities right now.
                </p>
              </div>
            )}

            {selected.status === "coming-soon" && (
              <div className="bg-white border border-line rounded-[20px] p-10 min-[700px]:p-14 text-center">
                <span className="inline-flex items-center gap-2 text-[10.5px] uppercase tracking-[0.14em] font-semibold text-tan border border-tan/40 px-3 py-1 rounded-full mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-tan animate-pulse" aria-hidden="true" />
                  Coming soon
                </span>
                <p className="font-serif italic text-navy text-[clamp(22px,2.6vw,28px)] leading-[1.2] m-0 mb-3 max-w-[24ch] mx-auto">
                  {selected.label} are launching to wholesale members soon.
                </p>
                <p className="text-[14px] leading-[1.65] text-ink/65 m-0 mb-7 max-w-[55ch] mx-auto">
                  We&apos;re onboarding managers ahead of launch. Register early access to be notified when allocations open.
                </p>
                <Button
                  href={`${selected.href}#early-access`}
                  variant="primary"
                  shape="pill"
                >
                  Get early access
                </Button>
              </div>
            )}

            {selected.status === "fund-index" && (
              <div className="bg-white border border-line rounded-[20px] p-10 min-[700px]:p-14 text-center">
                <span className="inline-flex items-center gap-2 text-[10.5px] uppercase tracking-[0.14em] font-semibold text-navy/70 border border-navy/20 px-3 py-1 rounded-full mb-5">
                  Funds
                </span>
                <p className="font-serif italic text-navy text-[clamp(22px,2.6vw,28px)] leading-[1.2] m-0 mb-3 max-w-[26ch] mx-auto">
                  View our Funds.
                </p>
                <p className="text-[14px] leading-[1.65] text-ink/65 m-0 mb-7 max-w-[55ch] mx-auto">
                  Browse the full list of managed private funds on the dedicated Fund Investments page, including the FloatX Unicorn Fund Index and other curated strategies.
                </p>
                <Button href={selected.href} variant="primary" shape="pill">
                  View Funds
                </Button>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}
