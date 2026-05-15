const services = [
  {
    title: "Marketing Services",
    body: "Digital marketing, media, IR and event management services to attract qualified investors through our global investor and media network.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M3 12h18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Financing Services",
    body: "Capital structure advisory and financing solutions to support your growth — from debt facilities to equity structuring.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Accounting Services",
    body: "Professional financial reporting, compliance and accounting support tailored for private companies and fund structures.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Board & Directors Support",
    body: "Strategic governance advisory, board composition support and directors services to strengthen leadership and investor confidence.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="17" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M3.5 18.5c.5-2.8 2.8-4.8 5.5-4.8s5 2 5.5 4.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M17 14c1.5.3 2.8 1.4 3.5 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Office Space",
    body: "Premium CBD workspace solutions in Sydney's financial district — fully serviced, flexible and ready to support your business.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M3 21h18M6 21V7l6-4 6 4v14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="9" y="13" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1.7" />
        <path d="M9 10h.01M12 10h.01M15 10h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function BusinessServicesOffering() {
  return (
    <section className="bg-page-bg py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.4vw,40px)] leading-[1.15] m-0 mb-4">
            Everything your business needs to grow.
          </h2>
          <p className="text-[16px] leading-[1.65] text-ink/[0.72] max-w-[560px] mx-auto m-0">
            From investor outreach to operational infrastructure — FloatX Business Services provides end-to-end support for private companies and fund managers.
          </p>
        </div>

        <div className="relative">
          {/* Orbital ring — on top of cards, pointer-events-none so cards remain interactive */}
          <div className="absolute inset-0 pointer-events-none z-[20]" aria-hidden="true">
            <style>{`
              @keyframes ringDash {
                from { stroke-dashoffset: 0; }
                to   { stroke-dashoffset: -110; }
              }
              .orbit-ring { animation: ringDash 28s linear infinite; }
            `}</style>
            <svg viewBox="0 0 1000 580" preserveAspectRatio="xMidYMid meet" className="w-full h-full">
              <ellipse cx="500" cy="290" rx="490" ry="268"
                fill="none" stroke="#162347" strokeWidth="1.5"
                strokeDasharray="7 13" opacity="0.22"
                className="orbit-ring" />
              <circle r="5.5" fill="#AF7D43" opacity="0.85">
                <animateMotion dur="20s" repeatCount="indefinite" rotate="auto"
                  path="M 990,290 A 490,268 0 1 0 10,290 A 490,268 0 1 0 990,290" />
              </circle>
              <circle r="10" fill="#AF7D43" opacity="0.2">
                <animateMotion dur="20s" repeatCount="indefinite" rotate="auto"
                  path="M 990,290 A 490,268 0 1 0 10,290 A 490,268 0 1 0 990,290" />
              </circle>
              <circle r="3.5" fill="#AF7D43" opacity="0.5">
                <animateMotion dur="20s" repeatCount="indefinite" rotate="auto" begin="-10s"
                  path="M 990,290 A 490,268 0 1 0 10,290 A 490,268 0 1 0 990,290" />
              </circle>
            </svg>
          </div>

          <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[1000px]:grid-cols-3 gap-6">
            {services.slice(0, 3).map((s) => (
              <div key={s.title}
                className="bg-cream rounded-[20px] p-7 flex flex-col transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-12px_rgba(22,35,71,0.16)]">
                <div className="w-11 h-11 rounded-[12px] bg-tan/10 text-tan flex items-center justify-center mb-5">
                  {s.icon}
                </div>
                <h3 className="font-sans font-bold text-navy text-[18px] leading-[1.3] m-0 mb-2.5 -tracking-[0.005em]">
                  {s.title}
                </h3>
                <p className="text-[14.5px] leading-[1.6] text-ink/75 m-0">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 min-[600px]:grid-cols-2 gap-6 mt-6 max-w-[840px] mx-auto">
            {services.slice(3).map((s) => (
              <div key={s.title}
                className="bg-cream rounded-[20px] p-7 flex flex-col transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-12px_rgba(22,35,71,0.16)]">
                <div className="w-11 h-11 rounded-[12px] bg-tan/10 text-tan flex items-center justify-center mb-5">
                  {s.icon}
                </div>
                <h3 className="font-sans font-bold text-navy text-[18px] leading-[1.3] m-0 mb-2.5 -tracking-[0.005em]">
                  {s.title}
                </h3>
                <p className="text-[14.5px] leading-[1.6] text-ink/75 m-0">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
