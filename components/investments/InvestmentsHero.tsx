import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const chartLines = [
  { id: "private-trading", label: "Private Trading", color: "#162347", endY: 52,  d: "M 55 222 C 100 218, 195 78,  265 52"  },
  { id: "company",         label: "Company",         color: "#293A66", endY: 90,  d: "M 55 222 C 100 218, 195 112, 265 90"  },
  { id: "fund",            label: "Fund",            color: "#5A5163", endY: 130, d: "M 55 222 C 100 220, 195 148, 265 130" },
  { id: "debt",            label: "Debt",            color: "#8C6D4F", endY: 163, d: "M 55 222 C 100 221, 195 172, 265 163" },
  { id: "property",        label: "Property",        color: "#AF7D43", endY: 190, d: "M 55 222 C 100 222, 195 192, 265 190" },
];

function ChartAnim() {
  return (
    <div className="relative w-full aspect-[4/3] max-w-[480px] mx-auto select-none" aria-hidden="true">
      <style>{`
        @keyframes chLineIn {
          from { stroke-dashoffset: 1; opacity: 0; }
          8%   { opacity: 1; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes chDotPop {
          0%  { opacity: 0; transform: scale(0.2); }
          65% { transform: scale(1.35); }
          100%{ opacity: 1; transform: scale(1); }
        }
        @keyframes chLabelIn {
          from { opacity: 0; transform: translateX(-5px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes chOriginPulse {
          0%,100% { r: 5;   opacity: 0.9; }
          50%     { r: 6.5; opacity: 1;   }
        }
        @keyframes chAreaIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .ch-line {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: chLineIn 1.3s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        .ch-dot {
          transform-box: fill-box;
          transform-origin: center;
          animation: chDotPop 0.45s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        .ch-label { animation: chLabelIn 0.4s ease-out both; }
        .ch-area  { animation: chAreaIn  0.8s ease-out both; }
        @media (prefers-reduced-motion:reduce) {
          .ch-line  { animation:none !important; stroke-dashoffset:0 !important; opacity:1 !important; }
          .ch-dot   { animation:none !important; opacity:1 !important; transform:none !important; }
          .ch-label { animation:none !important; opacity:1 !important; transform:none !important; }
          .ch-area  { animation:none !important; opacity:1 !important; }
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8EDF7] via-[#EEEFF6] to-[#F5EEE0] rounded-[28px]" />

      <svg viewBox="0 0 400 280" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          {/* Gradient fill under top line */}
          <linearGradient id="ch-fill-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#162347" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#162347" stopOpacity="0"    />
          </linearGradient>
        </defs>

        {/* Horizontal grid */}
        {[80, 120, 160, 200].map((y) => (
          <line key={y} x1="55" y1={y} x2="268" y2={y}
            stroke="#162347" strokeWidth="0.6" opacity="0.07" strokeDasharray="3 5" />
        ))}

        {/* Axes */}
        <line x1="55" y1="38" x2="55"  y2="226" stroke="#162347" strokeWidth="0.8" opacity="0.14" />
        <line x1="55" y1="226" x2="268" y2="226" stroke="#162347" strokeWidth="0.8" opacity="0.14" />

        {/* Y-axis labels */}
        <text x="49" y="230" textAnchor="end" fontSize="7" fill="#162347" opacity="0.42" fontWeight="600">0%</text>
        <text x="49" y="165" textAnchor="end" fontSize="7" fill="#162347" opacity="0.42" fontWeight="600">+10%</text>
        <text x="49" y="84"  textAnchor="end" fontSize="7" fill="#162347" opacity="0.42" fontWeight="600">+20%</text>

        {/* X-axis labels */}
        <text x="55"  y="238" textAnchor="middle" fontSize="7" fill="#162347" opacity="0.38" fontWeight="500">Today</text>
        <text x="265" y="238" textAnchor="middle" fontSize="7" fill="#162347" opacity="0.38" fontWeight="500">5 yr</text>

        {/* Subtle area fill under Private Trading line */}
        <path
          d="M 55 222 C 100 218, 195 78, 265 52 L 265 226 L 55 226 Z"
          fill="url(#ch-fill-grad)"
          className="ch-area"
          style={{ animationDelay: "0.3s" }}
        />

        {/* Performance lines — back to front */}
        {[...chartLines].reverse().map((line, i) => {
          const delay = 0.2 + (chartLines.length - 1 - i) * 0.18;
          return (
            <path
              key={line.id}
              d={line.d}
              fill="none"
              stroke={line.color}
              strokeWidth={line.id === "private-trading" ? 2.4 : 1.7}
              strokeLinecap="round"
              pathLength="1"
              className="ch-line"
              style={{ animationDelay: `${delay}s` }}
            />
          );
        })}

        {/* Endpoint dots + labels */}
        {chartLines.map((line, i) => {
          const lineDelay = 0.2 + i * 0.18;
          return (
            <g key={`end-${line.id}`}>
              <circle
                cx={265} cy={line.endY}
                r={line.id === "private-trading" ? 5 : 3.8}
                fill={line.color}
                stroke="white" strokeWidth="1.5"
                className="ch-dot"
                style={{ animationDelay: `${lineDelay + 1.1}s` }}
              />
              <text
                x={273} y={line.endY + 3.5}
                fontSize="7.5" fontWeight="700"
                fill={line.color} letterSpacing="0.35"
                className="ch-label"
                style={{ animationDelay: `${lineDelay + 1.25}s` }}
              >
                {line.label.toUpperCase()}
              </text>
            </g>
          );
        })}

        {/* Origin dot — pulsing */}
        <circle cx="55" cy="222" r="5"
          fill="#162347" stroke="rgba(175,125,67,0.55)" strokeWidth="1.5"
          className="ch-dot" style={{ animationDelay: "0.1s" }} />
        <text x="55" y="215" textAnchor="middle"
          fontSize="6.5" fontWeight="700" fill="#162347" opacity="0.5" letterSpacing="0.2">
          FloatX
        </text>

        {/* Footer */}
        <text x="160" y="268" textAnchor="middle"
          fontSize="10" fontWeight="600" fill="#162347" opacity="0.45" letterSpacing="0.6">
          ONE PLATFORM · FIVE ASSET CLASSES
        </text>
      </svg>
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
            <ChartAnim />
          </div>
        </div>
      </div>
    </section>
  );
}
