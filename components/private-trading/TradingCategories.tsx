import Link from "next/link";
import type { ReactNode } from "react";

type Category = {
  href: string;
  label: string;
  description: string;
  current?: boolean;
  icon: ReactNode;
};

const categories: Category[] = [
  {
    href: "#opportunities",
    label: "Private trading",
    description: "Late-stage privates and pre-IPO secondaries.",
    current: true,
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
    href: "#opportunities",
    label: "Unicorn trading",
    description: "Billion-dollar private companies, curated.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-7 h-7">
        <path
          d="M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4L12 3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M5 19h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8 19l-1 2M16 19l1 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "#opportunities",
    label: "Funds trading",
    description: "Secondary trading of fund units.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-7 h-7">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 4v8h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 12L5 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "#opportunities",
    label: "Debt trading",
    description: "Private credit and structured debt notes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-7 h-7">
        <path d="M5 7l14 0M5 12h14M5 17h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="18" cy="17" r="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M18 15.5v3M16.5 17h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function TradingCategories() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[1024px]:grid-cols-4 gap-4">
          {categories.map((c) => (
            <Link
              key={c.label}
              href={c.href}
              aria-current={c.current ? "page" : undefined}
              className={`group rounded-[20px] border p-6 flex flex-col gap-4 transition-all duration-200 ${
                c.current
                  ? "bg-cream border-navy/30 shadow-[0_10px_28px_-16px_rgba(22,35,71,0.12)]"
                  : "bg-white border-line hover:border-navy/40 hover:shadow-[0_18px_36px_-12px_rgba(22,35,71,0.16)] hover:-translate-y-0.5"
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-cream border border-tan/30 flex items-center justify-center text-tan transition-transform duration-200 group-hover:scale-105">
                {c.icon}
              </div>
              <div>
                <h3 className="font-sans font-bold text-navy text-[16px] leading-[1.3] m-0 mb-1.5 -tracking-[0.005em]">
                  {c.label}
                </h3>
                <p className="text-[13px] leading-[1.55] text-ink/70 m-0">
                  {c.description}
                </p>
              </div>
              {c.current && (
                <span className="mt-auto text-[10.5px] uppercase tracking-[0.12em] font-semibold text-tan">
                  You are here
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
