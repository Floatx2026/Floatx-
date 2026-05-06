import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

type Building = {
  x: number;
  w: number;
  top: number;
  pillX: number;
  pillLabel: string;
  delay: number;
  highlight?: boolean;
};

const baseline = 270;

const buildings: Building[] = [
  { x: 38, w: 50, top: 188, pillX: 63, pillLabel: "5.8%", delay: 0.25 },
  { x: 100, w: 52, top: 138, pillX: 126, pillLabel: "6.4%", delay: 0.45 },
  { x: 164, w: 50, top: 168, pillX: 189, pillLabel: "7.1%", delay: 0.65 },
  { x: 226, w: 52, top: 108, pillX: 252, pillLabel: "8.2%", delay: 0.85, highlight: true },
];

function buildingWindows(b: Building) {
  const cols = 2;
  const wSize = 7;
  const colGap = 12;
  const rowGap = 16;
  const padTop = 14;
  const padBottom = 12;
  const padX = (b.w - cols * wSize - (cols - 1) * colGap) / 2;
  const buildingH = baseline - b.top;
  const usable = buildingH - padTop - padBottom;
  const rows = Math.max(2, Math.floor(usable / rowGap));
  const positions: { x: number; y: number; key: string }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      positions.push({
        x: b.x + padX + c * (wSize + colGap),
        y: b.top + padTop + r * rowGap,
        key: `${r}-${c}`,
      });
    }
  }
  return { positions, wSize };
}

function PropertySkylineAnim() {
  return (
    <div className="relative w-full aspect-square max-w-[520px] mx-auto">
      <style>{`
        @keyframes pBldgRise {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pWinFade {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes pPillFade {
          0% { opacity: 0; transform: translateY(4px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pBaseDraw {
          from { stroke-dashoffset: 600; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes pHighlightPulse {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 1; }
        }
        .p-bldg { transform-box: fill-box; animation: pBldgRise 0.9s cubic-bezier(0.22, 0.61, 0.36, 1) both; }
        .p-window { animation: pWinFade 0.55s ease-out both; }
        .p-pill { transform-box: fill-box; animation: pPillFade 0.6s ease-out both; }
        .p-base { stroke-dasharray: 600; animation: pBaseDraw 1.4s ease-out 0.1s both; }
        .p-pulse { animation: pHighlightPulse 2.6s ease-in-out infinite 1.8s; }
        @media (prefers-reduced-motion: reduce) {
          .p-bldg, .p-window, .p-pill, .p-base, .p-pulse {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
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
          <linearGradient id="p-highlight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#AF7D43" />
            <stop offset="1" stopColor="#8C6234" />
          </linearGradient>
        </defs>

        <path
          d="M 18 270 L 302 270"
          stroke="rgba(22,35,71,0.18)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          className="p-base"
        />

        {buildings.map((b) => {
          const { positions, wSize } = buildingWindows(b);
          const fill = b.highlight ? "url(#p-highlight)" : "rgba(22, 35, 71, 0.85)";
          return (
            <g key={b.x} className="p-bldg" style={{ animationDelay: `${b.delay}s` }}>
              <rect
                x={b.x}
                y={b.top}
                width={b.w}
                height={baseline - b.top}
                rx={3}
                fill={fill}
              />
              {positions.map((p, i) => (
                <rect
                  key={p.key}
                  x={p.x}
                  y={p.y}
                  width={wSize}
                  height={wSize}
                  rx={1.2}
                  fill="rgba(255, 240, 210, 0.65)"
                  className="p-window"
                  style={{ animationDelay: `${b.delay + 0.4 + i * 0.06}s` }}
                />
              ))}
            </g>
          );
        })}

        {buildings.map((b) => (
          <g
            key={`pill-${b.x}`}
            className={`p-pill ${b.highlight ? "p-pulse" : ""}`}
            style={{ animationDelay: `${b.delay + 0.7}s` }}
          >
            <rect
              x={b.pillX - 22}
              y={b.top - 28}
              width={44}
              height={20}
              rx={10}
              fill="white"
              stroke={b.highlight ? "rgba(175, 125, 67, 0.65)" : "rgba(22, 35, 71, 0.18)"}
              strokeWidth={1}
            />
            <text
              x={b.pillX}
              y={b.top - 14}
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill={b.highlight ? "#AF7D43" : "#162347"}
              letterSpacing="0.3"
            >
              {b.pillLabel}
            </text>
          </g>
        ))}

        <text
          x="160"
          y="298"
          textAnchor="middle"
          fontSize="10"
          fontWeight="600"
          fill="#162347"
          opacity="0.55"
          letterSpacing="0.6"
        >
          INDICATIVE TARGET YIELD
        </text>
      </svg>
    </div>
  );
}

export function PropertyHero() {
  return (
    <section className="bg-cream pt-36 pb-16 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-[1.1fr_1fr] gap-12 min-[900px]:gap-16 items-center">
          <div className="text-center min-[900px]:text-left">
            <Eyebrow>Property Investments</Eyebrow>
            <h1 className="font-serif italic font-normal text-navy text-[clamp(44px,6vw,72px)] leading-[1.05] mt-5 mb-5 max-w-[14ch] mx-auto min-[900px]:mx-0">
              Property investments.
            </h1>
            <p className="text-[18px] leading-[1.6] max-w-[520px] text-ink/[0.75] m-0 mb-8 mx-auto min-[900px]:mx-0">
              Diversified property exposure through professionally-managed mortgage and fund strategies — risk-adjusted returns secured by real assets.
            </p>
            <Button href="#early-access" variant="primary" shape="pill">
              Get early access
            </Button>
          </div>
          <div>
            <PropertySkylineAnim />
          </div>
        </div>
      </div>
    </section>
  );
}
