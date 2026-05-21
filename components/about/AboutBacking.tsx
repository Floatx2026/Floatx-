import { FadeUp } from "@/components/ui/FadeUp";

const partners = [
  {
    initials: "AIMS",
    name: "AIMS Financial Group",
    desc: "FloatX's parent — a 30-year diversified financial services group spanning mortgage lending, securitisation, investment banking and funds management across Australia, China, Hong Kong and Singapore.",
  },
  {
    initials: "APP",
    name: "APP Securities Limited",
    desc: "FloatX operates as a Corporate Authorised Representative (CAR No. 1309999) of APP Securities Limited (AFSL 307706) — ensuring full regulatory compliance under Australian financial services law.",
  },
  {
    initials: "SSX",
    name: "Sydney Stock Exchange",
    desc: "Sydney Stock Exchange is an associated regulatory and exchange subsidiary supporting FloatX's investment and trading operations.",
  },
];

export function AboutBacking() {
  return (
    <section className="bg-navy py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp>
        <div className="text-center mb-14">
          <span className="inline-block text-white/60 text-[11px] font-semibold uppercase tracking-[0.14em] mb-3">
            Backing & Regulation
          </span>
          <h2 className="font-serif italic font-normal text-white text-[clamp(28px,3.5vw,42px)] leading-[1.2] m-0 mb-4">
            Backed by 30 years of financial heritage
          </h2>
          <p className="text-[16px] text-white/65 m-0 max-w-[56ch] mx-auto leading-[1.6]">
            FloatX is built on the foundations of AIMS Financial Group — with operations across
            Australia, China, Hong Kong and Singapore, having raised over $4 billion in funds
            and acquired close to $4.1 billion in investment assets since 1999.
          </p>
        </div>
        </FadeUp>

        <FadeUp delay={80}>
        <div className="grid grid-cols-1 min-[700px]:grid-cols-3 gap-6">
          {partners.map((p) => (
            <div
              key={p.name}
              className="bg-white/[0.06] border border-white/[0.08] rounded-[18px] p-7 hover:bg-white/[0.09] transition-colors"
            >
              <div className="w-12 h-12 rounded-[10px] bg-white/10 text-white flex items-center justify-center text-[11px] font-bold tracking-wide mb-5">
                {p.initials}
              </div>
              <h3 className="font-sans font-bold text-white text-[16px] leading-[1.3] m-0 mb-3">
                {p.name}
              </h3>
              <p className="text-[14px] leading-[1.65] text-white/60 m-0">{p.desc}</p>
            </div>
          ))}
        </div>
        </FadeUp>
      </div>
    </section>
  );
}
