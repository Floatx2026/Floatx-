import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

type Point = {
  x: number;
  y: number;
  label: string;
  yieldPct: string;
  delay: number;
  highlight?: boolean;
};

const points: Point[] = [
  { x: 50, y: 252, label: "1Y", yieldPct: "5.4%", delay: 0.7 },
  { x: 100, y: 238, label: "2Y", yieldPct: "6.0%", delay: 1.0 },
  { x: 155, y: 200, label: "3Y", yieldPct: "6.8%", delay: 1.3 },
  { x: 211, y: 150, label: "5Y", yieldPct: "7.6%", delay: 1.6 },
  { x: 270, y: 100, label: "7Y", yieldPct: "8.3%", delay: 1.9, highlight: true },
];

const CURVE_PATH = "M 50 252 Q 100 250, 155 200 T 270 100";
const AREA_PATH = `${CURVE_PATH} L 270 270 L 50 270 Z`;

function YieldCurveAnim() {
  const target = points[points.length - 1];

  return (
    <div className="relative w-full aspect-square max-w-[520px] mx-auto">
      <style>{`
        @keyframes dCurveDraw {
          from { stroke-dashoffset: 600; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes dPointPop {
          0% { opacity: 0; transform: scale(0.3); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes dFade {
          0% { opacity: 0; transform: translateY(3px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes dAreaFade {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes dAxisDraw {
          from { stroke-dashoffset: 280; }
          to { stroke-dashoffset: 0; }
        }
        .d-curve {
          stroke-dasharray: 600;
          animation: dCurveDraw 2.6s ease-out 0.3s both;
        }
        .d-pt {
          transform-origin: center;
          transform-box: fill-box;
          animation: dPointPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        .d-fade {
          transform-box: fill-box;
          animation: dFade 0.5s ease-out both;
        }
        .d-area {
          animation: dAreaFade 1.4s ease-out 1.8s both;
        }
        .d-axis {
          stroke-dasharray: 280;
          animation: dAxisDraw 1.0s ease-out 0.1s both;
        }
        @media (prefers-reduced-motion: reduce) {
          .d-curve, .d-pt, .d-fade, .d-area, .d-axis {
            animation: none !important;
            stroke-dashoffset: 0 !important;
            opacity: 1 !important;
            transform: none !important;
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
          <linearGradient id="d-curve-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#162347" />
            <stop offset="1" stopColor="#AF7D43" />
          </linearGradient>
          <linearGradient id="d-area-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#AF7D43" stopOpacity="0.18" />
            <stop offset="1" stopColor="#AF7D43" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[100, 170, 240].map((y) => (
          <line
            key={y}
            x1="40"
            x2="290"
            y1={y}
            y2={y}
            stroke="rgba(22,35,71,0.07)"
            strokeWidth="1"
          />
        ))}

        <line
          x1="40"
          y1="270"
          x2="290"
          y2="270"
          stroke="rgba(22,35,71,0.18)"
          strokeWidth="1"
          className="d-axis"
        />

        <path d={AREA_PATH} fill="url(#d-area-grad)" className="d-area" />

        <path
          d={CURVE_PATH}
          stroke="url(#d-curve-grad)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          className="d-curve"
        />

        {points.map((pt) => (
          <circle
            key={pt.label}
            cx={pt.x}
            cy={pt.y}
            r={pt.highlight ? 6 : 4.5}
            fill={pt.highlight ? "#AF7D43" : "white"}
            stroke={pt.highlight ? "#AF7D43" : "#162347"}
            strokeWidth="1.8"
            className="d-pt"
            style={{ animationDelay: `${pt.delay}s` }}
          />
        ))}

        {points.map((pt) => (
          <text
            key={`xlabel-${pt.label}`}
            x={pt.x}
            y="288"
            textAnchor="middle"
            fontSize="10"
            fontWeight="600"
            fill="#162347"
            opacity="0.6"
            letterSpacing="0.4"
            className="d-fade"
            style={{ animationDelay: `${pt.delay + 0.15}s` }}
          >
            {pt.label}
          </text>
        ))}

        <g
          className="d-fade"
          style={{ animationDelay: `${target.delay + 0.4}s` }}
        >
          <rect
            x={target.x - 25}
            y={target.y - 30}
            width="50"
            height="20"
            rx="10"
            fill="white"
            stroke="rgba(175, 125, 67, 0.65)"
            strokeWidth="1"
          />
          <text
            x={target.x}
            y={target.y - 16}
            textAnchor="middle"
            fontSize="11"
            fontWeight="700"
            fill="#AF7D43"
          >
            {target.yieldPct}
          </text>
        </g>

        <text
          x="160"
          y="306"
          textAnchor="middle"
          fontSize="10"
          fontWeight="600"
          fill="#162347"
          opacity="0.55"
          letterSpacing="0.6"
        >
          INDICATIVE YIELD CURVE
        </text>
      </svg>
    </div>
  );
}

export function DebtHero() {
  return (
    <section className="bg-cream pt-36 pb-16 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-[1.1fr_1fr] gap-12 min-[900px]:gap-16 items-center">
          <div className="text-center min-[900px]:text-left">
            <Eyebrow>Debt Investments</Eyebrow>
            <h1 className="font-serif italic font-normal text-navy text-[clamp(44px,6vw,72px)] leading-[1.05] mt-5 mb-5 max-w-[14ch] mx-auto min-[900px]:mx-0">
              Debt investments.
            </h1>
            <p className="text-[18px] leading-[1.6] max-w-[520px] text-ink/[0.75] m-0 mb-8 mx-auto min-[900px]:mx-0">
              Alternative-asset debt and property-mortgage investments — contractual income with capital protection from real underlying collateral.
            </p>
            <Button href="#early-access" variant="primary" shape="pill">
              Get early access
            </Button>
          </div>
          <div>
            <YieldCurveAnim />
          </div>
        </div>
      </div>
    </section>
  );
}
