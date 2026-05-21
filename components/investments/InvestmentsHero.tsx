import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

type AssetCard = {
  id: string;
  label: string;
  desc: string;
  color: string;
  icon: React.ReactNode;
};

const assetCards: AssetCard[] = [
  {
    id: "private-trading",
    label: "Private Trading",
    desc: "Secondary equity market",
    color: "#162347",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ width: 16, height: 16 }}>
        <path d="M3 14l4-4 3 3 6-8" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 6h5v5" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "company",
    label: "Company",
    desc: "Primary equity raises",
    color: "#293A66",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ width: 16, height: 16 }}>
        <path d="M10 3v14M4 10l6-6 6 6" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "fund",
    label: "Fund",
    desc: "Institutional fund access",
    color: "#5A5163",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ width: 16, height: 16 }}>
        <path d="M3 17h14M4 17V9m4 8V5m4 12V8m4 9V3" stroke="white" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "debt",
    label: "Debt",
    desc: "Private credit positions",
    color: "#8C6D4F",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ width: 16, height: 16 }}>
        <rect x="2" y="5" width="16" height="10" rx="2" stroke="white" strokeWidth="1.7" />
        <circle cx="10" cy="10" r="2" stroke="white" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    id: "property",
    label: "Property",
    desc: "Real asset investments",
    color: "#AF7D43",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ width: 16, height: 16 }}>
        <path d="M3 9l7-6 7 6v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9z" stroke="white" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function CardStackAnim() {
  return (
    <div
      className="relative w-full aspect-[4/3] max-w-[480px] mx-auto select-none"
      aria-hidden="true"
    >
      <style>{`
        @keyframes csFan0 {
          from { opacity:0; transform:translateY(18px) scale(1); }
          to   { opacity:1; transform:translateY(0px)  scale(1); }
        }
        @keyframes csFan1 {
          from { opacity:0; transform:translateY(0px) scale(1); }
          to   { opacity:0.94; transform:translateY(-18px) scale(0.955); }
        }
        @keyframes csFan2 {
          from { opacity:0; transform:translateY(0px) scale(1); }
          to   { opacity:0.88; transform:translateY(-36px) scale(0.910); }
        }
        @keyframes csFan3 {
          from { opacity:0; transform:translateY(0px) scale(1); }
          to   { opacity:0.80; transform:translateY(-54px) scale(0.865); }
        }
        @keyframes csFan4 {
          from { opacity:0; transform:translateY(0px) scale(1); }
          to   { opacity:0.72; transform:translateY(-72px) scale(0.820); }
        }
        @keyframes csFloat {
          0%,100% { transform:translateY(0px)  scale(1); }
          50%     { transform:translateY(-6px) scale(1); }
        }

        .cs-card {
          position: absolute;
          width: 100%;
          background: white;
          border-radius: 16px;
          padding: 15px 18px;
          display: flex;
          align-items: center;
          gap: 14px;
          border: 1px solid rgba(22,35,71,0.08);
          transform-origin: center bottom;
        }
        .cs-card-4 {
          z-index:1;
          box-shadow: 0 2px 8px rgba(22,35,71,0.05);
          opacity:0;
          animation: csFan4 0.55s cubic-bezier(0.34,1.2,0.64,1) 1.0s both;
        }
        .cs-card-3 {
          z-index:2;
          box-shadow: 0 4px 14px rgba(22,35,71,0.07);
          opacity:0;
          animation: csFan3 0.55s cubic-bezier(0.34,1.2,0.64,1) 0.82s both;
        }
        .cs-card-2 {
          z-index:3;
          box-shadow: 0 6px 18px rgba(22,35,71,0.09);
          opacity:0;
          animation: csFan2 0.55s cubic-bezier(0.34,1.2,0.64,1) 0.64s both;
        }
        .cs-card-1 {
          z-index:4;
          box-shadow: 0 8px 24px rgba(22,35,71,0.11);
          opacity:0;
          animation: csFan1 0.55s cubic-bezier(0.34,1.2,0.64,1) 0.46s both;
        }
        .cs-card-0 {
          z-index:5;
          box-shadow: 0 14px 36px -4px rgba(22,35,71,0.18), 0 0 0 1px rgba(22,35,71,0.04);
          opacity:0;
          animation: csFan0 0.55s cubic-bezier(0.34,1.3,0.64,1) 0.28s both,
                     csFloat 4.2s ease-in-out infinite 2.2s;
        }
        @media (prefers-reduced-motion:reduce) {
          .cs-card   { animation:none !important; }
          .cs-card-0 { opacity:1    !important; transform:translateY(0px)   scale(1)     !important; }
          .cs-card-1 { opacity:0.94 !important; transform:translateY(-18px) scale(0.955) !important; }
          .cs-card-2 { opacity:0.88 !important; transform:translateY(-36px) scale(0.910) !important; }
          .cs-card-3 { opacity:0.80 !important; transform:translateY(-54px) scale(0.865) !important; }
          .cs-card-4 { opacity:0.72 !important; transform:translateY(-72px) scale(0.820) !important; }
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8EDF7] via-[#EEEFF6] to-[#F5EEE0] rounded-[28px]" />

      {/* Stack anchor — card front sits at 64% from top, centered */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "64%",
          transform: "translateX(-50%)",
          width: "74%",
          height: "72px",
        }}
      >
        {/* Render back-to-front so front card is on top in DOM */}
        {[...assetCards].reverse().map((card, revIdx) => {
          const idx = assetCards.length - 1 - revIdx;
          return (
            <div key={card.id} className={`cs-card cs-card-${idx}`}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: card.color,
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {card.icon}
              </div>
              <div style={{ minWidth: 0 }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: "#162347", margin: 0, letterSpacing: "-0.2px", lineHeight: 1.2 }}>
                  {card.label}
                </p>
                <p style={{ fontSize: 11, color: "rgba(13,12,34,0.50)", margin: 0, marginTop: 3, lineHeight: 1 }}>
                  {card.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <p
        style={{
          position: "absolute",
          bottom: 18,
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: 10,
          fontWeight: 600,
          color: "rgba(22,35,71,0.48)",
          letterSpacing: "0.6px",
          margin: 0,
        }}
      >
        ONE PLATFORM · FIVE ASSET CLASSES
      </p>
    </div>
  );
}

export function InvestmentsHero() {
  return (
    <section className="bg-cream pt-36 pb-16 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-[1.1fr_1fr] gap-12 min-[900px]:gap-16 items-center">
          <div className="text-center min-[900px]:text-left">
            <Eyebrow>Investments</Eyebrow>
            <h1 className="font-serif italic font-normal text-navy text-[clamp(44px,6vw,72px)] leading-[1.05] mt-5 mb-5 max-w-[14ch] mx-auto min-[900px]:mx-0">
              Opportunities.
            </h1>
            <p className="text-[18px] leading-[1.6] max-w-[520px] text-ink/[0.75] m-0 mb-8 mx-auto min-[900px]:mx-0">
              One platform, five allocation paths — late-stage trading, primary equity, funds, debt and property, all wholesale-verified.
            </p>
            <Button href="#opportunities" variant="primary" shape="pill">
              Browse opportunities
            </Button>
          </div>
          <div>
            <CardStackAnim />
          </div>
        </div>
      </div>
    </section>
  );
}
