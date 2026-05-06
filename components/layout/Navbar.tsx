"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";

const investmentsItems = [
  { href: "/investments", label: "All Opportunities" },
  { href: "/investments/cash-plus", label: "Cash Plus" },
  { href: "/investments/company-investment", label: "Company Investment" },
  { href: "/investments/fund-investments", label: "Fund Investments" },
  { href: "/investments/property-investments", label: "Property Investments" },
  { href: "/investments/debt-investments", label: "Debt Investments" },
  { href: "/tech-ventures", label: "Tech Ventures" },
];

const links = [
  { href: "/investments/private-trading", label: "Private Trading" },
  { href: "/investors", label: "Investors" },
  { href: "/list-your-asset", label: "List Your Asset" },
  { href: "/insights", label: "Insights" },
  { href: "/distribution-partners", label: "Distribution Partners" },
];

const chipBase =
  "text-navy bg-cream px-4 py-[9px] rounded-full border border-transparent shadow-[0_1px_2px_rgba(22,35,71,0.04)] transition-all duration-200 font-sans font-medium text-[14px] cursor-pointer inline-flex items-center gap-1.5 leading-none";
const chipHover =
  "hover:bg-white hover:-translate-y-[2px] hover:shadow-[0_8px_16px_-4px_rgba(22,35,71,0.14)] hover:border-line";
const chipActive =
  "bg-navy! text-white! shadow-[0_4px_10px_-2px_rgba(22,35,71,0.20)] border-transparent! hover:bg-navy-deep!";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (itemRef.current && !itemRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const investmentsActive = pathname?.startsWith("/investments");

  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="max-w-[1200px] mx-auto px-6 py-[22px] flex items-center justify-between gap-6">
        <Link href="/" className="brand inline-flex items-center">
          <Logo />
        </Link>

        <nav className="hidden min-[900px]:flex gap-2.5 text-[14px] items-center" aria-label="Primary">
          <div
            ref={itemRef}
            className={`relative inline-flex group ${open ? "is-open" : ""}`}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOpen((v) => !v);
              }}
              aria-haspopup="true"
              aria-expanded={open}
              className={`${chipBase} ${chipHover} group-hover:bg-white group-hover:-translate-y-[2px] group-hover:shadow-[0_8px_16px_-4px_rgba(22,35,71,0.14)] group-hover:border-line ${
                investmentsActive ? chipActive : ""
              }`}
            >
              Investments
              <svg
                width="10"
                height="10"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
                className={`transition-transform duration-200 ${open ? "rotate-180" : ""} group-hover:rotate-180`}
              >
                <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div
              role="menu"
              className={`absolute top-[calc(100%+8px)] left-0 min-w-[220px] bg-white border border-line rounded-[14px] shadow-[0_18px_40px_-12px_rgba(22,35,71,0.18),0_4px_10px_-4px_rgba(22,35,71,0.08)] p-2 flex flex-col gap-0.5 transition-all duration-200 z-40 ${
                open
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-1.5 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
              }`}
            >
              {investmentsItems.map((it) => {
                const isFeatured = it.label === "All Opportunities";
                return (
                  <Link
                    key={it.href}
                    role="menuitem"
                    href={it.href}
                    className={`rounded-lg px-3.5 text-navy text-left hover:bg-cream inline-flex items-center gap-2 ${
                      isFeatured ? "py-3 text-[16px] font-semibold" : "py-2.5 font-medium"
                    }`}
                  >
                    {isFeatured && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        className="w-[18px] h-[18px] flex-none text-tan"
                      >
                        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
                        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
                        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
                        <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                    )}
                    {it.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {links.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`${chipBase} ${chipHover} ${isActive ? chipActive : ""}`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/login" variant="outlineInk" shape="rect">
            Log In
          </Button>
          <button
            type="button"
            aria-label="Language"
            className="hidden min-[900px]:inline-flex items-center gap-1.5 text-[14px] text-ink/80 bg-transparent border-0"
          >
            <span aria-hidden="true" className="text-base">🇦🇺</span>
            <span>En</span>
            <span aria-hidden="true" className="text-[10px] opacity-70">▾</span>
          </button>
        </div>
      </div>
    </header>
  );
}
