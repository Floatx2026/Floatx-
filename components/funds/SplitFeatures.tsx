import { Button } from "@/components/ui/Button";

const features = [
  {
    title: "Discover institutional pricing",
    body: "See live NAV and subscription terms across hundreds of fund opportunities, refreshed daily.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M3 21h18M5 18V9m4 9V6m4 12v-9m4 9V3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Allocate directly to managers",
    body: "Skip the broker chain. Subscribe straight to GPs through verified, legally-prepared documents.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <path d="M4 12h6l2-3 3 6 2-3h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Automate your subscriptions",
    body: "Standard subscription templates, electronic execution, and clean cap-table delivery — no chasing PDFs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Manage commitments with FloatX",
    body: "Track capital calls, distributions and reporting in one consolidated investor portal.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 10h10M7 14h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function SplitFeatures() {
  return (
    <section className="bg-page-bg py-20">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 min-[900px]:grid-cols-2 gap-12">
        <div className="bg-cream rounded-[24px] p-10 flex flex-col">
          <h2 className="font-serif italic font-normal text-navy text-[clamp(30px,3.4vw,40px)] leading-[1.15] m-0 mb-5 max-w-[16ch]">
            Private funds, made transparent.
          </h2>
          <p className="text-[16px] leading-[1.65] text-ink/[0.78] mb-8 max-w-[44ch]">
            Allocating to private funds the traditional way is slow, opaque, and relationship-bound. FloatX gives qualified investors a single, verified venue for fund discovery, subscription, and ongoing reporting.
          </p>
          <div className="mb-8">
            <Button href="/apply?tier=sophisticated" variant="primary" shape="pill">
              Get Started
            </Button>
          </div>
          <div className="mt-auto rounded-[16px] overflow-hidden border border-line bg-white aspect-[16/10] flex items-center justify-center">
            <span className="text-ink/45 text-[14px]">Portal preview placeholder</span>
          </div>
        </div>

        <div className="flex flex-col gap-10 justify-center">
          {features.map((f) => (
            <div key={f.title} className="grid grid-cols-[44px_1fr] gap-4">
              <div className="w-11 h-11 rounded-[12px] bg-tan/10 text-tan flex items-center justify-center">
                {f.icon}
              </div>
              <div>
                <h3 className="font-sans font-bold text-navy text-[18px] leading-[1.3] m-0 mb-2 -tracking-[0.005em]">
                  {f.title}
                </h3>
                <p className="text-[15px] leading-[1.6] text-ink/75 m-0">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
