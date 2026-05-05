import Link from "next/link";
import type { ReactNode } from "react";

type Category = {
  href: string;
  label: string;
  icon: ReactNode;
};

const categories: Category[] = [
  {
    href: "/investments/private-trading",
    label: "Private Trading",
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
    href: "/investments/capital-raising",
    label: "Capital Raising",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-7 h-7">
        <rect x="3.5" y="6" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 15l3-3 3 1.5 5-5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 8h4v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/investments/debt-investments",
    label: "Debt Investments",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-7 h-7">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    href: "/investments/fund-investments",
    label: "Fund Investments",
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
    href: "/investments/property-investments",
    label: "Property Investments",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-7 h-7">
        <path d="M4 20V9l8-5 8 5v11" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M3 20h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M9.5 20v-5h5v5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function ProductCategories() {
  return (
    <section className="bg-cream pb-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="bg-white border border-line rounded-[28px] shadow-[0_18px_40px_-22px_rgba(22,35,71,0.16)] p-5 min-[900px]:p-6">
          <div className="grid grid-cols-2 min-[700px]:grid-cols-3 min-[1100px]:grid-cols-5 gap-2 min-[900px]:gap-3 items-center">
            {categories.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group flex items-center gap-3 px-3 py-3 rounded-[14px] hover:bg-cream transition-colors"
              >
                <div className="w-11 h-11 flex-none flex items-center justify-center rounded-full text-tan transition-transform duration-200 group-hover:scale-105">
                  {c.icon}
                </div>
                <span className="font-sans font-medium text-navy text-[14px] leading-[1.3] -tracking-[0.005em]">
                  {c.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
