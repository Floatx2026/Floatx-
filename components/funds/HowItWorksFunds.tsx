import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/FadeUp";

const audiences = [
  {
    title: "Investors",
    blurb:
      "For family offices and HNW investors looking for diversified access to private fund managers.",
    bullets: [
      "Single dashboard for fund commitments",
      "Curated, due-diligence-ready opportunities",
      "Clean reporting and tax documentation",
    ],
    href: "https://app.floatx.com/signup?tier=sophisticated",
  },
  {
    title: "Fund Managers",
    blurb:
      "For GPs raising capital from qualified investors.",
    bullets: [
      "Distribute to verified wholesale investors",
      "Compliant subscription workflow",
      "Reduce admin and shrink time-to-close",
    ],
    href: "/list-your-asset",
  },
  {
    title: "Advisers",
    blurb:
      "For consultants and accountants placing client capital across private funds.",
    bullets: [
      "Bulk subscription and reporting tools",
      "Whitelisted client list management",
      "Independent research and fund commentary",
    ],
    href: "https://app.floatx.com/signup?tier=experienced",
  },
];

export function HowItWorksFunds() {
  return (
    <section className="bg-[#E5ECF8] py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp>
          <h2 className="font-serif italic font-normal text-navy text-[clamp(32px,4vw,48px)] leading-[1.15] text-center mb-14">
            How can FloatX Funds work for you?
          </h2>
        </FadeUp>

        <FadeUp delay={80}>
        <div className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-6">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="bg-white rounded-[20px] p-8 flex flex-col shadow-[0_8px_24px_-12px_rgba(22,35,71,0.10)]"
            >
              <h3 className="font-sans font-bold text-navy text-[22px] m-0 mb-3 -tracking-[0.01em]">
                {a.title}
              </h3>
              <p className="text-[15px] leading-[1.6] text-ink/[0.78] m-0 mb-5">
                {a.blurb}
              </p>
              <ul className="m-0 mb-7 flex-1">
                {a.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 mb-2.5 last:mb-0 text-[14px] text-ink/85 leading-[1.5]">
                    <svg viewBox="0 0 20 20" className="w-4 h-4 mt-1 flex-none text-tan" aria-hidden="true">
                      <path d="m4 10 3.5 3.5L16 5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Button href={a.href} variant="outlineNavy" shape="pill" className="self-start text-[14px]! px-6! py-2.5!">
                Learn more
              </Button>
            </div>
          ))}
        </div>
        </FadeUp>
      </div>
    </section>
  );
}
