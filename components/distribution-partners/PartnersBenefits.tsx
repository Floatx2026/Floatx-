import { FadeUp } from "@/components/ui/FadeUp";

const benefits = [
  {
    title: "Revenue share, transparent terms",
    body: "Earn ongoing revenue on client allocations across trading, funds, debt and property — paid monthly, settled clean, with a single statement and no hidden splits.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M4 12h6m4 0h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 4v6m0 4v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Wholesale-only deal access",
    body: "Late-stage private trading, primary equity rounds, fund allocations, structured debt and property — all under s708, all verified, all curated for sophisticated clients.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M12 3l8 4v5c0 4.5-3.4 8.4-8 9-4.6-.6-8-4.5-8-9V7l8-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "White-glove onboarding",
    body: "Dedicated relationship manager, co-branded materials on request, and full s708 verification handled for your clients — so you stay focused on advice, not paperwork.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <circle cx="9" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3.5 19c.5-2.6 2.7-4.6 5.5-4.6s5 2 5.5 4.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16 6h6m-3-3v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function PartnersBenefits() {
  return (
    <section className="bg-page-bg py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp>
          <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.4vw,40px)] leading-[1.15] text-center mb-14 max-w-[22ch] mx-auto">
            A distribution partnership built around your clients.
          </h2>
        </FadeUp>
        <FadeUp delay={80}>
        <div className="grid grid-cols-1 min-[700px]:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-cream rounded-[20px] p-7 flex flex-col transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-12px_rgba(22,35,71,0.16)]"
            >
              <div className="w-11 h-11 rounded-[12px] bg-tan/10 text-tan flex items-center justify-center mb-5">
                {b.icon}
              </div>
              <h3 className="font-sans font-bold text-navy text-[18px] leading-[1.3] m-0 mb-2.5 -tracking-[0.005em]">
                {b.title}
              </h3>
              <p className="text-[14.5px] leading-[1.6] text-ink/75 m-0">{b.body}</p>
            </div>
          ))}
        </div>
        </FadeUp>
      </div>
    </section>
  );
}
