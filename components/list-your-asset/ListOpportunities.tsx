const opportunities = [
  {
    title: "List for Private Trading",
    body: "List your company shares for secondary market trading. Sophisticated investors can buy and sell your shares privately through FloatX's regulated marketplace — giving your shareholders genuine liquidity without requiring an ASX listing.",
    who: ["Established private companies", "Founders seeking share liquidity", "Shareholders wanting exit options"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M7 16l-4-4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 8l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "List to Support Company Growth",
    body: "List your company or fund to raise primary equity from FloatX's global pool of accredited investors. Run targeted campaigns and connect with sophisticated investors — without the cost and complexity of traditional fundraising.",
    who: ["Growth-stage companies", "Fund managers raising new equity", "Property syndicates"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M12 20V4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M5 11l7-7 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 20h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "List a Debt or Property Opportunity",
    body: "List your structured debt instrument or property opportunity to connect with institutional and sophisticated investors seeking yield and alternative asset exposure across the AU/APAC region.",
    who: ["Property developers & syndicates", "Corporate debt issuers", "Alternative asset managers"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M3 21h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M5 21V9l7-6 7 6v12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="9" y="14" width="6" height="7" rx="0.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
];

export function ListOpportunities() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14 max-w-[52ch] mx-auto">
          <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.4vw,40px)] leading-[1.15] m-0 mb-4">
            Three ways to list on FloatX.
          </h2>
          <p className="text-[16px] leading-[1.65] text-ink/70 m-0">
            One platform, multiple listing paths — each designed to connect the right asset with the right investors.
          </p>
        </div>

        <div className="grid grid-cols-1 min-[700px]:grid-cols-3 gap-6">
          {opportunities.map((o) => (
            <div
              key={o.title}
              className="bg-cream rounded-[20px] p-7 flex flex-col transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-12px_rgba(22,35,71,0.16)]"
            >
              <div className="w-11 h-11 rounded-[12px] bg-tan/10 text-tan flex items-center justify-center mb-5 flex-none">
                {o.icon}
              </div>
              <h3 className="font-sans font-bold text-navy text-[18px] leading-[1.3] m-0 mb-3 -tracking-[0.005em]">
                {o.title}
              </h3>
              <p className="text-[14.5px] leading-[1.6] text-ink/75 m-0 mb-5 flex-1">{o.body}</p>
              <div>
                <p className="text-[11px] uppercase tracking-[0.10em] font-semibold text-tan mb-2">
                  Who this is for
                </p>
                <ul className="m-0 p-0 list-none space-y-1">
                  {o.who.map((w) => (
                    <li key={w} className="flex items-start gap-2 text-[13px] text-ink/70 leading-[1.5]">
                      <span className="text-tan mt-0.5 flex-none" aria-hidden="true">·</span>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
