import { FadeUp } from "@/components/ui/FadeUp";

const audiences = [
  {
    title: "Scale-ups",
    body: "Agile, scalable marketing and IR solutions that open doors to qualified investors and media to support your next stage of growth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M3 17l4-8 4 4 4-6 4 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 17H4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Fund Managers",
    body: "Expand your distribution reach across APAC and global markets through our established investor network and curated media channels.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="7" cy="7" r="1.5" fill="currentColor" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        <circle cx="17" cy="17" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Private Companies",
    body: "Build investor confidence with bespoke capital markets narratives, financial expertise and tailored growth packages designed for your stage and sector.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M3 21h18M6 21V9l6-6 6 6v12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="9" y="14" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
];

export function WhoWeHelp() {
  return (
    <section className="bg-page-bg py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-14">
            <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.4vw,40px)] leading-[1.15] m-0 mb-4">
              Who we help grow.
            </h2>
            <p className="text-[16px] leading-[1.65] text-ink/[0.72] max-w-[480px] mx-auto m-0">
              Agile, scalable marketing and IR solutions that open doors to qualified investors and media to support your business growth.
            </p>
          </div>
        </FadeUp>
        <FadeUp delay={80}>
        <div className="grid grid-cols-1 min-[600px]:grid-cols-3 gap-6">
          {audiences.map((a) => (
            <div key={a.title}
              className="bg-cream rounded-[20px] p-6 flex flex-col transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-12px_rgba(22,35,71,0.16)]">
              <div className="w-11 h-11 rounded-[12px] bg-tan/10 text-tan flex items-center justify-center mb-5">
                {a.icon}
              </div>
              <h3 className="font-sans font-bold text-navy text-[17px] leading-[1.3] m-0 mb-2 -tracking-[0.005em]">
                {a.title}
              </h3>
              <p className="text-[14px] leading-[1.6] text-ink/70 m-0">{a.body}</p>
            </div>
          ))}
        </div>
        </FadeUp>
      </div>
    </section>
  );
}
