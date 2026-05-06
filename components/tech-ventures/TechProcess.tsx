const services = [
  {
    title: "Investment",
    body: "FloatX Ventures provides equity investment and funding at the right stage — structured for long-term growth, not just a quick cheque.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Ecosystem",
    body: "Resources, infrastructure and operational support so founders can focus on building — not on navigating legal, accounting or admin.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="4.5" cy="7" r="2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="19.5" cy="7" r="2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="4.5" cy="17" r="2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="19.5" cy="17" r="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6.5 7.8l3.6 2.8M13.9 10.8l3.6-2.8M6.5 16.2l3.6-2.8M13.9 13.2l3.6 2.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Strategic Guidance",
    body: "Corporate advisory services and access to experienced directors — people who have built, scaled and exited businesses across technology sectors.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M12 3l8 4v5c0 4.5-3.4 8.4-8 9-4.6-.6-8-4.5-8-9V7l8-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Customer Acceleration",
    body: "Accelerate your growth with FloatX's global network of 60,000+ accredited investors, distribution partners and strategic co-investors across AU and APAC.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 7v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function TechProcess() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[52ch] mb-14">
          <p className="text-[11.5px] uppercase tracking-[0.14em] font-semibold text-ink/45 mb-4">
            Process
          </p>
          <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.4vw,40px)] leading-[1.15] m-0 mb-4">
            How we help.
          </h2>
          <p className="text-[16px] leading-[1.65] text-ink/70 m-0">
            FloatX supports entrepreneurs by providing investment funding and the necessary ecosystem support to grow your business — from first cheque to global scale.
          </p>
        </div>

        <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[1024px]:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-[20px] p-7 flex flex-col transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-12px_rgba(22,35,71,0.16)]"
            >
              <div className="w-11 h-11 rounded-[12px] bg-tan/10 text-tan flex items-center justify-center mb-5 flex-none">
                {s.icon}
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
