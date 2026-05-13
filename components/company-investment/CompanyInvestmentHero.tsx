import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

function FundingRoundsAnim() {
  return (
    <div className="relative w-full aspect-square max-w-[520px] mx-auto">
      <style>{`
        @keyframes crBarRise { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        @keyframes crLabelFade {
          0% { opacity: 0; transform: translateY(4px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes crLineDraw {
          from { stroke-dashoffset: 800; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes crDotPulse {
          0%, 100% { opacity: 0.55; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        .cr-bar {
          transform-origin: center bottom;
          transform-box: fill-box;
          animation: crBarRise 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        .cr-label {
          transform-box: fill-box;
          animation: crLabelFade 0.6s ease-out both;
        }
        .cr-line {
          stroke-dasharray: 800;
          animation: crLineDraw 1.6s ease-out 1.4s both;
        }
        .cr-dot {
          transform-origin: center;
          transform-box: fill-box;
          opacity: 0;
          animation: crDotPulse 2.6s ease-in-out infinite 2.6s;
        }
        @media (prefers-reduced-motion: reduce) {
          .cr-bar, .cr-label, .cr-line, .cr-dot {
            animation: none !important;
            transform: none !important;
            opacity: 1 !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>

      <div
        className="absolute inset-0 bg-gradient-to-br from-[#E8EDF7] via-[#EEEFF6] to-[#F5EEE0] rounded-[28px]"
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 320 320"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cr-target" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#AF7D43" />
            <stop offset="1" stopColor="#8C6234" />
          </linearGradient>
        </defs>

        <line x1="36" y1="270" x2="284" y2="270" stroke="rgba(22,35,71,0.10)" strokeWidth="1" />

        <path
          d="M 60 230 L 120 200 L 180 160 L 240 110"
          stroke="rgba(175, 125, 67, 0.55)"
          strokeWidth="1.75"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="cr-line"
        />

        <rect x="44" y="230" width="32" height="40" fill="rgba(22, 35, 71, 0.85)" rx="3" className="cr-bar" style={{ animationDelay: "0.1s" }} />
        <rect x="104" y="200" width="32" height="70" fill="rgba(22, 35, 71, 0.85)" rx="3" className="cr-bar" style={{ animationDelay: "0.4s" }} />
        <rect x="164" y="160" width="32" height="110" fill="rgba(22, 35, 71, 0.85)" rx="3" className="cr-bar" style={{ animationDelay: "0.7s" }} />
        <rect x="224" y="110" width="32" height="160" fill="url(#cr-target)" rx="3" className="cr-bar" style={{ animationDelay: "1.0s" }} />

        <circle cx="240" cy="105" r="6" fill="#AF7D43" className="cr-dot" />

        <text x="60" y="294" textAnchor="middle" fontSize="10" fontWeight="600" fill="#162347" opacity="0.75" letterSpacing="0.6" className="cr-label" style={{ animationDelay: "0.6s" }}>SEED</text>
        <text x="120" y="294" textAnchor="middle" fontSize="10" fontWeight="600" fill="#162347" opacity="0.75" letterSpacing="0.6" className="cr-label" style={{ animationDelay: "0.9s" }}>SERIES A</text>
        <text x="180" y="294" textAnchor="middle" fontSize="10" fontWeight="600" fill="#162347" opacity="0.75" letterSpacing="0.6" className="cr-label" style={{ animationDelay: "1.2s" }}>SERIES B</text>
        <text x="240" y="294" textAnchor="middle" fontSize="10" fontWeight="700" fill="#AF7D43" letterSpacing="0.6" className="cr-label" style={{ animationDelay: "1.5s" }}>PRE-IPO</text>
      </svg>
    </div>
  );
}

export function CompanyInvestmentHero() {
  return (
    <section className="bg-cream pt-36 pb-16 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-[1.1fr_1fr] gap-12 min-[900px]:gap-16 items-center">
          <div className="text-center min-[900px]:text-left">
            <Eyebrow>Company Investment</Eyebrow>
            <h1 className="font-serif italic font-normal text-navy text-[clamp(44px,6vw,72px)] leading-[1.05] mt-5 mb-5 max-w-[14ch] mx-auto min-[900px]:mx-0">
              Company Investment<br />Opportunities.
            </h1>
            <p className="text-[18px] leading-[1.6] max-w-[520px] text-ink/[0.75] m-0 mb-8 mx-auto min-[900px]:mx-0">
              Invest equity in global pre-IPO companies — and exit through FloatX&apos;s verified secondary market when you&apos;re ready, not when the company lists.
            </p>
            <Button href="https://app.floatx.com/signup?tier=sophisticated" variant="primary" shape="pill">
              Get Started
            </Button>
          </div>
          <div>
            <FundingRoundsAnim />
          </div>
        </div>
      </div>
    </section>
  );
}
