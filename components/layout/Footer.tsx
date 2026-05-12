"use client";

import Image from "next/image";
import Link from "next/link";

const cols: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Get Started",
    links: [
      { label: "Get Started", href: "/apply" },
      { label: "Book demo", href: "#" },
      { label: "Contact", href: "/contact" },
      { label: "Insights", href: "/insights" },
      { label: "Why FloatX", href: "/why-floatx" },
    ],
  },
  {
    title: "Buy and Invest",
    links: [
      { label: "All opportunities", href: "/investments" },
      { label: "Private trading", href: "/investments/private-trading" },
      { label: "Company Investment", href: "/investments/company-investment" },
      { label: "Debt Investments", href: "/investments/debt-investments" },
      { label: "Property investing", href: "/investments/property-investments" },
      { label: "Fund investments", href: "/investments/fund-investments" },
    ],
  },
  {
    title: "Partner with Us",
    links: [
      { label: "List Your Asset", href: "/list-your-asset" },
      { label: "Sell and raise", href: "/list-your-asset" },
      { label: "Distribution Partners", href: "/distribution-partners" },
      { label: "Accredited Investor", href: "/investors" },
      { label: "About", href: "/about" },
      { label: "Ventures", href: "/tech-ventures" },
    ],
  },
  { title: "Technology", links: [{ label: "Blockchain", href: "#" }] },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-10 border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 min-[900px]:grid-cols-5 gap-10 min-[900px]:gap-8">
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-sans font-medium text-[16px] text-tan mb-4">{c.title}</h4>
              <ul>
                {c.links.map((l) => (
                  <li key={l.label} className="mb-2.5">
                    <Link href={l.href} className="text-white/85 text-[15px] hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-sans font-medium text-[16px] text-white mb-4">Sign up for Newsletter</h4>
            <form
              className="flex items-center bg-white rounded-full pl-5 pr-2 py-2 max-w-[460px]"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="you@example.com"
                aria-label="Email address"
                className="flex-1 border-0 outline-none bg-transparent text-[15px] text-ink py-1.5"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-navy text-white rounded-full w-10 h-10 inline-flex items-center justify-center"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="w-[18px] h-[18px]"
                >
                  <path
                    d="M5 12h14m-5-5l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <hr className="border-white/10 my-10" />

        <div className="flex flex-col min-[900px]:flex-row min-[900px]:items-center min-[900px]:justify-between gap-6">
          <div className="inline-flex items-center gap-3">
            <Link href="/" className="inline-flex items-center" aria-label="FloatX home">
              <Image
                src="/floatx-logo-white.svg"
                alt="FloatX"
                width={131}
                height={27}
                className="h-7 w-auto"
              />
            </Link>
            <span className="text-white/30">|</span>
            <Link
              href="/legal"
              className="text-white/80 text-[13px] hover:text-white transition-colors"
            >
              Legal
            </Link>
          </div>

          <p className="text-[11px] text-white/55 leading-relaxed text-left min-[900px]:text-center max-w-[600px]">
            Copyright © 2026 FloatX. All rights reserved. FloatX Pty Ltd
            <br />
            (ACN 101 231 172, a Corporate Authorised Representative (CAR No. 1309999) of APP Securities Limited (AFSL 307706))
          </p>

          <Link
            href="#"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-md bg-tan/[0.18] text-tan inline-flex items-center justify-center hover:bg-tan/[0.28] transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8.34 18V10H6v8zM7.17 8.92a1.36 1.36 0 1 0 0-2.72 1.36 1.36 0 0 0 0 2.72zM18 18v-4.4c0-2.13-1.15-3.12-2.69-3.12-1.24 0-1.8.68-2.11 1.16V10h-2.34c.03.66 0 8 0 8h2.34v-4.47c0-.21.02-.42.08-.57.16-.42.55-.86 1.18-.86.84 0 1.18.64 1.18 1.57V18z" />
            </svg>
          </Link>
        </div>

        <p className="mt-10 text-[11px] text-white/45 leading-relaxed max-w-[800px]">
          FloatX provides access to wholesale and retail investment products in accordance with Australian financial services regulations. Wholesale offers are restricted to investors qualifying as Sophisticated or otherwise eligible. This page is general information only and does not constitute financial advice.
        </p>
      </div>
    </footer>
  );
}
