import Link from "next/link";
import { LogoAvatar } from "@/components/shared/LogoAvatar";

type Opportunity = {
  name: string;
  initials: string;
  logo?: string;
  logoBg?: string;
  tags: string[];
  blurb: string;
  href: string;
  region?: "AU" | "US" | "Global" | "China";
};

const opportunities: Opportunity[] = [
  {
    name: "OpenAI",
    initials: "OA",
    logo: "openai.com",
    tags: ["Private Trading", "Technology"],
    blurb: "AI research and deployment lab behind ChatGPT and the GPT model family.",
    href: "/investments/private-trading",
    region: "US",
  },
  {
    name: "ByteDance",
    initials: "BD",
    logo: "tiktok.com",
    logoBg: "#ffffff",
    tags: ["Private Trading", "Technology"],
    blurb: "Technology group behind TikTok, Douyin and a global suite of consumer applications.",
    href: "/investments/private-trading",
    region: "China",
  },
  {
    name: "Ripple",
    initials: "RP",
    logo: "ripple.com",
    tags: ["Private Trading", "Fintech"],
    blurb: "Blockchain infrastructure for cross-border payments and institutional digital-asset settlement.",
    href: "/investments/private-trading",
    region: "US",
  },
  {
    name: "Plaid",
    initials: "PL",
    logo: "plaid.com",
    tags: ["Private Trading", "Fintech"],
    blurb: "Financial data infrastructure connecting consumer apps to banks across North America and Europe.",
    href: "/investments/private-trading",
    region: "US",
  },
  {
    name: "Wealthfront",
    initials: "WF",
    logo: "wealthfront.com",
    tags: ["Private Trading", "Fintech"],
    blurb: "Digital wealth manager combining automated investing with high-yield cash strategies.",
    href: "/investments/private-trading",
    region: "US",
  },
  {
    name: "Epic Games",
    initials: "EG",
    logo: "epicgames.com",
    tags: ["Private Trading", "Technology"],
    blurb: "Maker of Fortnite and Unreal Engine — one of the largest privately-held games and 3D-tooling businesses.",
    href: "/investments/private-trading",
    region: "US",
  },
  {
    name: "ANAHAD",
    initials: "AH",
    tags: ["Company Investment", "Fintech"],
    blurb: "Australian fintech raising primary capital through FloatX.",
    href: "/investments/company-investment",
    region: "AU",
  },
  {
    name: "Oxygen Health Clinics",
    initials: "OX",
    tags: ["Company Investment", "Health"],
    blurb: "Australian health-services group raising primary capital through FloatX.",
    href: "/investments/company-investment",
    region: "AU",
  },
];

const regionLabel: Record<NonNullable<Opportunity["region"]>, string> = {
  AU: "AU",
  US: "US",
  Global: "Global",
  China: "CN",
};

function Card({ o }: { o: Opportunity }) {
  return (
    <Link
      href={o.href}
      className="group flex-none w-[320px] bg-white rounded-[20px] border border-line p-6 flex flex-col hover:border-navy/40 hover:shadow-[0_18px_36px_-12px_rgba(22,35,71,0.16)] hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-5">
        <LogoAvatar name={o.name} initials={o.initials} logo={o.logo} logoBg={o.logoBg} />
        {o.region && (
          <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-ink/55 bg-cream border border-line px-2 py-1 rounded-full">
            {regionLabel[o.region]}
          </span>
        )}
      </div>
      <h3 className="font-sans font-bold text-navy text-[18px] leading-[1.3] m-0 mb-3 -tracking-[0.005em]">
        {o.name}
      </h3>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {o.tags.map((t) => (
          <span
            key={t}
            className="text-[10.5px] uppercase tracking-[0.10em] font-semibold text-tan border border-tan/40 px-2 py-0.5 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
      <p className="text-[13.5px] leading-[1.6] text-ink/75 m-0 mb-5 flex-1">{o.blurb}</p>
      <span className="text-[12.5px] font-semibold text-navy uppercase tracking-[0.10em] inline-flex items-center gap-1.5">
        Learn more
        <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">→</span>
      </span>
    </Link>
  );
}

export function FeaturedOpportunities() {
  const doubled = [...opportunities, ...opportunities];

  return (
    <section className="bg-cream py-24 relative overflow-hidden">
      <style>{`
        .fo-track {
          animation: foScroll 70s linear infinite;
          width: max-content;
          will-change: transform;
        }
        .fo-marquee:hover .fo-track {
          animation-play-state: paused;
        }
        @keyframes foScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .fo-track { animation: none; }
        }
      `}</style>

      <div className="max-w-[1200px] mx-auto px-6 mb-12">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div className="max-w-[640px]">
            <h2 className="font-serif italic font-normal text-navy text-[clamp(32px,4vw,48px)] leading-[1.15] m-0 mb-3">
              Featured opportunities.
            </h2>
            <p className="text-[16px] leading-[1.65] text-ink/[0.78] m-0">
              A live snapshot of what&apos;s currently active across private trading and company investment on FloatX.
            </p>
          </div>
          <Link
            href="/investments"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-navy bg-white border border-line rounded-full px-5 py-2.5 hover:bg-navy hover:text-white transition-colors"
          >
            View all
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div
        className="fo-marquee relative w-full"
        aria-label="Scrolling list of featured opportunities"
      >
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-cream to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-cream to-transparent" aria-hidden="true" />

        <div className="fo-track flex gap-5 px-6">
          {doubled.map((o, i) => (
            <Card key={`${o.name}-${i}`} o={o} />
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-[11.5px] text-ink/55 leading-[1.6] mt-10 text-center max-w-[760px] mx-auto">
          Featured opportunities are a curated subset of what is currently open to FloatX members. Availability, terms, and eligibility vary by deal — see each listing for the full details.
        </p>
      </div>
    </section>
  );
}
