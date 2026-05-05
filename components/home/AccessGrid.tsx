import Link from "next/link";

type Access = {
  title: string;
  href: string;
  blurb: string;
  badge?: string;
  icon: React.ReactNode;
};

const accesses: Access[] = [
  {
    title: "Cash Plus",
    href: "/investments/cash-plus",
    blurb: "Wholesale cash strategy targeting RBA cash rate + 2% p.a., with daily accruals and instant access.",
    badge: "New",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <ellipse cx="12" cy="6.5" rx="6.5" ry="2.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M5.5 6.5v4c0 1.2 2.9 2.2 6.5 2.2s6.5-1 6.5-2.2v-4M5.5 10.5v4c0 1.2 2.9 2.2 6.5 2.2s6.5-1 6.5-2.2v-4M5.5 14.5v3c0 1.2 2.9 2.2 6.5 2.2s6.5-1 6.5-2.2v-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Private Trading",
    href: "/investments/private-trading",
    blurb: "Secondary market access to pre-IPO equity in established private companies, with verified counterparties.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M3 17l5-5 4 4 8-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 7h6v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Capital Raising",
    href: "/investments/capital-raising",
    blurb: "Primary equity rounds in private companies — sourced, due-diligenced, and structured for wholesale allocators.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M12 4v16M5 12l7-7 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Fund Investments",
    href: "/investments/fund-investments",
    blurb: "Subscribe directly to institutional-grade private funds — covering venture, growth, credit and real assets.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M3 21h18M5 18V9m4 9V6m4 12v-9m4 9V3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Debt Investments",
    href: "/investments/debt-investments",
    blurb: "Senior and mezzanine private credit positions, with transparent terms and disciplined credit selection.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Property Investments",
    href: "/investments/property-investments",
    blurb: "Direct property and single-asset loans across Australia and the Asia-Pacific, with full diligence packs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-9z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function AccessGrid() {
  return (
    <section className="bg-[#E5ECF8] py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14 max-w-[680px] mx-auto">
          <h2 className="font-serif italic font-normal text-navy text-[clamp(32px,4vw,48px)] leading-[1.15] m-0 mb-4">
            What you can access on FloatX.
          </h2>
          <p className="text-[16px] leading-[1.65] text-ink/[0.78] m-0">
            Six distinct asset classes, one verified venue. Subscribe, allocate and report on every position from a single dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 min-[700px]:grid-cols-2 min-[1024px]:grid-cols-3 gap-6">
          {accesses.map((a) => (
            <Link
              key={a.title}
              href={a.href}
              className="group relative bg-white rounded-[20px] p-7 flex flex-col shadow-[0_8px_24px_-12px_rgba(22,35,71,0.10)] hover:shadow-[0_18px_36px_-12px_rgba(22,35,71,0.18)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-[12px] bg-tan/10 text-tan flex items-center justify-center">
                  {a.icon}
                </div>
                {a.badge && (
                  <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-tan bg-tan/10 px-2.5 py-1 rounded-full">
                    {a.badge}
                  </span>
                )}
              </div>
              <h3 className="font-sans font-bold text-navy text-[20px] leading-[1.25] m-0 mb-2.5 -tracking-[0.005em]">
                {a.title}
              </h3>
              <p className="text-[14.5px] leading-[1.6] text-ink/75 m-0 mb-6 flex-1">
                {a.blurb}
              </p>
              <span className="text-[13px] font-medium text-navy inline-flex items-center gap-1.5">
                Explore
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
