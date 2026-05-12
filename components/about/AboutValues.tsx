const values = [
  {
    title: "Trust",
    blurb: "30 years of trading, investment and diversified financial services — built on relationships and accountability.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M12 3l8 4v5c0 4.8-3.4 8.8-8 9.5C7.4 20.8 4 16.8 4 12V7l8-4z"
          stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    blurb: "An innovative and creative approach to designing investment solutions — leveraging AI and blockchain for the next generation of private markets.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M12 2a7 7 0 0 1 7 7c0 2.8-1.6 5.2-4 6.3V17a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1.7A7 7 0 0 1 12 2z"
          stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9 21h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M12 6v4M10 10h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Discipline",
    blurb: "A disciplined and prudent investment approach that has sustained our group of companies for over three decades through multiple market cycles.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8 12h8M8 8h5M8 16h3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function AboutValues() {
  return (
    <section className="bg-page-bg py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-tan text-[11px] font-semibold uppercase tracking-[0.14em] mb-3">
            Our Values
          </span>
          <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.5vw,42px)] leading-[1.2] m-0">
            What drives everything we do
          </h2>
        </div>

        <div className="grid grid-cols-1 min-[700px]:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white rounded-[20px] p-8 shadow-[0_6px_24px_-10px_rgba(22,35,71,0.10)] border border-line/50"
            >
              <div className="w-11 h-11 rounded-[12px] bg-tan/10 text-tan flex items-center justify-center mb-5">
                {v.icon}
              </div>
              <h3 className="font-sans font-bold text-navy text-[20px] leading-[1.25] m-0 mb-3">
                {v.title}
              </h3>
              <p className="text-[15px] leading-[1.65] text-ink/70 m-0">{v.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
