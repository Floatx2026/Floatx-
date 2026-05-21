import { FadeUp } from "@/components/ui/FadeUp";

const benefits = [
  {
    title: "Enhanced security",
    blurb: "Investment records are protected on the blockchain — immutable, tamper-proof and permanently auditable by all authorised parties.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M12 3l8 4v5c0 4.8-3.4 8.8-8 9.5C7.4 20.8 4 16.8 4 12V7l8-4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "On-chain verification",
    blurb: "Every transaction is cryptographically signed and verifiable on-chain — confirming authenticity without relying on any single trusted intermediary.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="12" cy="16" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Increased transparency",
    blurb: "Track share ownership and transaction history with fully auditable on-chain records — giving investors and regulators complete visibility at any time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.7" />
        <path d="M2 12C2 12 5 5 12 5s10 7 10 7-3 7-10 7S2 12 2 12z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function BlockchainBenefits() {
  return (
    <section className="bg-page-bg py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-14">
            <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.5vw,42px)] leading-[1.2] m-0">
              The benefits are clear for both sides of the trade
            </h2>
          </div>
        </FadeUp>

        <FadeUp delay={80}>
        <div className="grid grid-cols-1 min-[700px]:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-white rounded-[20px] p-8 shadow-[0_6px_24px_-10px_rgba(22,35,71,0.10)] border border-line/50 hover:-translate-y-1 hover:shadow-[0_16px_32px_-10px_rgba(22,35,71,0.15)] transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-[12px] bg-tan/10 text-tan flex items-center justify-center mb-5">
                {b.icon}
              </div>
              <h3 className="font-sans font-bold text-navy text-[19px] leading-[1.25] m-0 mb-3">
                {b.title}
              </h3>
              <p className="text-[15px] leading-[1.65] text-ink/70 m-0">{b.blurb}</p>
            </div>
          ))}
        </div>
        </FadeUp>
      </div>
    </section>
  );
}
