import { Button } from "@/components/ui/Button";

const personas = [
  {
    title: "Investors",
    blurb:
      "For family offices, professional investors and HNW allocators looking for diversified access to private capital across the region.",
    bullets: [
      "Single dashboard across asset classes",
      "Curated, due-diligence-ready opportunities",
      "Consolidated reporting and tax documentation",
    ],
    href: "/investors",
    cta: "For investors",
  },
  {
    title: "Companies & Funds",
    blurb:
      "For private companies raising primary capital, and for fund managers distributing to qualified Australian and Asia-Pacific allocators.",
    bullets: [
      "Reach verified wholesale investors directly",
      "Compliant subscription and capital-raise workflow",
      "Faster time-to-close, fewer manual handoffs",
    ],
    href: "/list-your-asset",
    cta: "List a deal",
  },
  {
    title: "Advisors",
    blurb:
      "For consultants, accountants and licensees placing client capital across private investments.",
    bullets: [
      "Bulk subscription and reporting tools",
      "Whitelisted client management",
      "Independent research and market commentary",
    ],
    href: "/apply?tier=experienced",
    cta: "For advisors",
  },
];

export function HomePersonas() {
  return (
    <section className="bg-page-bg py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14 max-w-[680px] mx-auto">
          <h2 className="font-serif italic font-normal text-navy text-[clamp(32px,4vw,48px)] leading-[1.15] m-0 mb-4">
            Built for the way you allocate.
          </h2>
          <p className="text-[16px] leading-[1.65] text-ink/[0.78] m-0">
            Whether you&apos;re putting capital to work, raising it, or advising on it — FloatX adapts to your role.
          </p>
        </div>

        <div className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-6">
          {personas.map((p) => (
            <div
              key={p.title}
              className="bg-cream rounded-[20px] p-8 flex flex-col"
            >
              <h3 className="font-sans font-bold text-navy text-[22px] m-0 mb-3 -tracking-[0.01em]">
                {p.title}
              </h3>
              <p className="text-[15px] leading-[1.6] text-ink/[0.78] m-0 mb-5">
                {p.blurb}
              </p>
              <ul className="m-0 mb-7 flex-1">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 mb-2.5 last:mb-0 text-[14px] text-ink/85 leading-[1.5]">
                    <svg viewBox="0 0 20 20" className="w-4 h-4 mt-1 flex-none text-tan" aria-hidden="true">
                      <path d="m4 10 3.5 3.5L16 5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Button href={p.href} variant="outlineNavy" shape="pill" className="self-start text-[14px]! px-6! py-2.5!">
                {p.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
