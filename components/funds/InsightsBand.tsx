import Link from "next/link";
import { FadeUp } from "@/components/ui/FadeUp";

const commentary = [
  "Why Australian family offices are over-allocating to private credit",
  "The case for vintage diversification in venture",
  "Co-investment access: still a privilege, soon a baseline",
];

const reports = [
  "FloatX Private Funds Outlook — H1 2026",
  "Fund Liquidity Report: secondary pricing trends",
  "APAC Allocator Survey: where capital is rotating",
];

export function InsightsBand() {
  return (
    <section className="bg-navy py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-14">
            <h2 className="font-serif italic font-normal text-white text-[clamp(32px,4vw,48px)] leading-[1.15] m-0 mb-4">
              Your edge in private fund markets.
            </h2>
            <p className="text-white/75 text-[16px] leading-[1.6] max-w-[640px] mx-auto m-0">
              From original research to plain-language commentary on the issues shaping private capital — written for allocators, not press releases.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={80}>
        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-12 items-start">
          <div className="grid grid-cols-[44px_1fr] gap-5">
            <div className="w-11 h-11 rounded-[12px] bg-tan/20 text-tan flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-5 h-5">
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </div>
            <div>
              <h3 className="font-sans font-bold text-white text-[18px] m-0 mb-1">Commentary</h3>
              <Link href="/insights" className="inline-block text-[13px] text-tan mb-5">View all articles →</Link>
              <ul className="m-0">
                {commentary.map((c) => (
                  <li key={c} className="mb-3 last:mb-0">
                    <Link href="/insights" className="text-white/90 text-[15px] leading-[1.5] hover:text-white">
                      {c} <span className="text-tan">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-[44px_1fr] gap-5 min-[900px]:border-l min-[900px]:border-white/10 min-[900px]:pl-12">
            <div className="w-11 h-11 rounded-[12px] bg-tan/20 text-tan flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-5 h-5">
                <path d="M5 21V5l4-2 6 2 4-2v16l-4 2-6-2-4 2zM9 3v18M15 5v18" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h3 className="font-sans font-bold text-white text-[18px] m-0 mb-1">Market reports</h3>
              <Link href="/insights" className="inline-block text-[13px] text-tan mb-5">View all reports →</Link>
              <ul className="m-0">
                {reports.map((r) => (
                  <li key={r} className="mb-3 last:mb-0">
                    <Link href="/insights" className="text-white/90 text-[15px] leading-[1.5] hover:text-white">
                      {r} <span className="text-tan">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </FadeUp>
      </div>
    </section>
  );
}
