const steps = [
  {
    number: "01",
    title: "Initial screening",
    body: "Choose your listing type — private trading, company growth, or debt and property — and meet your dedicated FloatX account manager to confirm eligibility.",
  },
  {
    number: "02",
    title: "Onboarding",
    body: "Provide your company or asset details. Our team handles compliance checks and has your opportunity live on the FloatX platform within 48 hours.",
  },
  {
    number: "03",
    title: "Set your rules",
    body: "Define investor qualification criteria, minimum investment thresholds, trading parameters and any transfer restrictions — you retain full control.",
  },
  {
    number: "04",
    title: "Open to investors",
    body: "FloatX promotes your opportunity to 60,000+ global accredited investors across the platform, digital channels and our network of distribution partners.",
  },
];

export function ListProcess() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[52ch] mb-14">
          <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.4vw,40px)] leading-[1.15] m-0 mb-4">
            Live in 48 hours. Here&apos;s how.
          </h2>
          <p className="text-[16px] leading-[1.65] text-ink/70 m-0">
            A simple four-step process from initial screening to open for investment.
          </p>
        </div>
        <div className="flex items-center mb-14">
          <div className="flex-1 h-px bg-line" />
          <svg viewBox="0 0 8 12" fill="none" aria-hidden="true" className="w-2 h-3 flex-none ml-1 text-line">
            <path d="M1 1l6 5-6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Desktop: circles + dashed connectors */}
        <div className="hidden min-[900px]:grid grid-cols-4 gap-0">
          {steps.map((s, i) => (
            <div key={s.number} className="relative flex flex-col items-center px-4">
              {i > 0 && (
                <div className="absolute right-1/2 top-5 left-0 border-t border-dashed border-navy/25" />
              )}
              {i < steps.length - 1 && (
                <div className="absolute left-1/2 right-0 top-5 border-t border-dashed border-navy/25" />
              )}
              <div className="relative z-10 w-10 h-10 rounded-full border border-navy/35 bg-cream flex items-center justify-center mb-5 flex-none">
                <span className="font-serif font-normal text-navy text-[15px] leading-none">{i + 1}</span>
              </div>
              <h3 className="font-sans font-bold text-navy text-[16px] leading-[1.3] m-0 mb-2.5 -tracking-[0.005em] text-center">
                {s.title}
              </h3>
              <p className="text-[13.5px] leading-[1.65] text-ink/70 m-0 text-center">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical stepper */}
        <div className="min-[900px]:hidden flex flex-col">
          {steps.map((s, i) => (
            <div key={s.number} className="flex gap-5">
              <div className="flex flex-col items-center flex-none">
                <div className="w-9 h-9 rounded-full border border-navy/35 bg-cream flex items-center justify-center flex-none">
                  <span className="font-serif font-normal text-navy text-[14px] leading-none">{i + 1}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex-1 border-l border-dashed border-navy/25 my-2" />
                )}
              </div>
              <div className={i < steps.length - 1 ? "pb-7" : ""}>
                <h3 className="font-sans font-bold text-navy text-[16px] leading-[1.3] m-0 mb-2 mt-1.5 -tracking-[0.005em]">
                  {s.title}
                </h3>
                <p className="text-[13.5px] leading-[1.65] text-ink/70 m-0">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
