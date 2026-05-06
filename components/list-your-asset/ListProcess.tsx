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
        <hr className="border-0 border-t border-line mb-14" />

        <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[1024px]:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.number} className="relative">
              <div className="text-[clamp(40px,5vw,56px)] font-serif italic font-normal text-navy/10 leading-none mb-4 select-none">
                {s.number}
              </div>
              <h3 className="font-sans font-bold text-navy text-[17px] leading-[1.3] m-0 mb-2.5 -tracking-[0.005em]">
                {s.title}
              </h3>
              <p className="text-[14px] leading-[1.65] text-ink/70 m-0">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
