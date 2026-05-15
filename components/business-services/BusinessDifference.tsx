const differentiators = [
  {
    title: "Strategic APAC Gateway",
    body: "Deep APAC investor networks and market insight — built over three decades in the region's financial markets.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M7.5 4.5C5 6.5 3.5 9 3.5 12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Bespoke Capital Markets Expertise",
    body: "Decades of financial expertise crafting narratives that build investor confidence and facilitate pre-IPO readiness.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17 5.8 21.3l2.4-7.4L2 9.4h7.6z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "End-to-End Investor Access",
    body: "End-to-end content, precision PR and curated event solutions that turn investor awareness into meaningful engagement.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    title: "Scalable Partnership Solutions",
    body: "Flexible service packages designed to grow with your business — from early-stage scale-ups to pre-IPO unicorns.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M4 20V14a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="1.7" />
        <path d="M16 4l2 2-2 2M8 4L6 6l2 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function BusinessDifference() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.4vw,40px)] leading-[1.15] m-0 mb-4">
            The difference we deliver.
          </h2>
          <p className="text-[16px] leading-[1.65] text-ink/[0.72] max-w-[480px] mx-auto m-0">
            FloatX Business Services combines capital markets expertise, global networks and scalable execution in one integrated offering.
          </p>
        </div>
        <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[1000px]:grid-cols-4 gap-6">
          {differentiators.map((d) => (
            <div key={d.title}
              className="bg-page-bg rounded-[20px] p-6 flex flex-col border border-line/60 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-12px_rgba(22,35,71,0.12)]">
              <div className="w-11 h-11 rounded-[12px] bg-tan/10 text-tan flex items-center justify-center mb-5">
                {d.icon}
              </div>
              <h3 className="font-sans font-bold text-navy text-[17px] leading-[1.3] m-0 mb-2 -tracking-[0.005em]">
                {d.title}
              </h3>
              <p className="text-[14px] leading-[1.6] text-ink/70 m-0">{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
