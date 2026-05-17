const features = [
  {
    title: "Above-cash benchmark",
    body: "Targets the RBA cash rate plus 2% p.a. through an actively-managed mandate across cash, government and investment-grade credit.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M3 17l5-5 4 4 8-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 7h6v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Daily accrual, monthly compounding",
    body: "Returns are calculated every business day. By default, distributions are reinvested each month — switch to cash if you'd rather receive the income.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M12 3a9 9 0 1 0 9 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Daily liquidity",
    body: "Withdraw any business day. No lock-ups, no exit fees, no minimum holding period. Funds settle to your nominated account on T+1.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M5 12h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Wholesale-grade structure",
    body: "Built for sophisticated and professional investors under s708 — with audited monthly NAV, transparent holdings, and clean tax reporting.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M12 3l8 4v5c0 4.5-3.4 8.4-8 9-4.6-.6-8-4.5-8-9V7l8-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function CashPlusFeatures() {
  return (
    <section className="bg-page-bg py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.6vw,46px)] leading-[1.15] text-center mb-14 whitespace-nowrap">
          A simpler way to put cash to work.
        </h2>
        <div className="grid grid-cols-1 min-[700px]:grid-cols-2 min-[1100px]:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-cream rounded-[20px] p-7 flex flex-col"
            >
              <div className="w-11 h-11 rounded-[12px] bg-tan/10 text-tan flex items-center justify-center mb-5">
                {f.icon}
              </div>
              <h3 className="font-sans font-bold text-navy text-[18px] leading-[1.3] m-0 mb-2.5 -tracking-[0.005em]">
                {f.title}
              </h3>
              <p className="text-[14.5px] leading-[1.6] text-ink/75 m-0">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
