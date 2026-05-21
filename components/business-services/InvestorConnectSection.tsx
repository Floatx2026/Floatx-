import { FadeUp } from "@/components/ui/FadeUp";

const pillars = [
  {
    title: "Content Creation",
    body: "Multimedia content crafted to build investor confidence — digital assets, short videos, webinars, press releases, newsletters, thought leadership and podcasts.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M10 9l5 3-5 3V9z" fill="currentColor" opacity="0.6" />
      </svg>
    ),
    items: ["Digital Assets", "Short Videos", "Webinars", "Press Releases", "Newsletters", "Podcasts"],
  },
  {
    title: "Global Distribution",
    body: "Connect your business with global investors and media efficiently through our integrated communication channels and dedicated investor base.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
        <path d="M2 12h20M12 2c-3 3.5-4.5 6.5-4.5 10S9 18.5 12 22M12 2c3 3.5 4.5 6.5 4.5 10S15 18.5 12 22" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
    items: ["Journalists & Media", "Social Platforms", "Research Reports", "Partner Networks", "Dedicated Investor Base"],
  },
  {
    title: "Curated Events",
    body: "Gain direct access to targeted global investors and drive engagement through curated, end-to-end event management — from intimate roundtables to global roadshows.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M16 3v4M8 3v4M3 10h18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    items: ["Investor Round Tables", "Webinars", "Roadshows", "Conferences", "Bespoke Investor Events"],
  },
];

export function InvestorConnectSection() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-4">
            <p className="font-sans font-medium text-tan text-[13px] tracking-[1.6px] uppercase mb-4">
              Investor Connect
            </p>
            <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.4vw,40px)] leading-[1.15] m-0 mb-4">
              Fast-track your growth with FloatX.
            </h2>
            <p className="text-[16px] leading-[1.65] text-ink/[0.72] max-w-[560px] mx-auto m-0">
              Investor &amp; Media insights, connections and opportunities — delivered through three integrated service pillars.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={80}>
        <div className="grid grid-cols-1 min-[700px]:grid-cols-3 gap-6 mt-14">
          {pillars.map((p) => (
            <div key={p.title}
              className="bg-navy rounded-[20px] p-7 flex flex-col transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-12px_rgba(22,35,71,0.32)]">
              <div className="w-11 h-11 rounded-[12px] bg-tan/20 text-tan flex items-center justify-center mb-5">
                {p.icon}
              </div>
              <h3 className="font-sans font-bold text-white text-[18px] leading-[1.3] m-0 mb-3 -tracking-[0.005em]">
                {p.title}
              </h3>
              <p className="text-[14px] leading-[1.6] text-white/65 m-0 mb-5">{p.body}</p>
              <ul className="m-0 p-0 list-none mt-auto flex flex-col gap-2">
                {p.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[13.5px] text-white/75">
                    <span className="w-1 h-1 rounded-full bg-tan flex-none" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        </FadeUp>
      </div>
    </section>
  );
}
