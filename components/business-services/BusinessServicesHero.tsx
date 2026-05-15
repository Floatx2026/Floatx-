import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const CX = 200;
const CY = 152;
const R = 112;
const LAT0 = 23 * (Math.PI / 180);

const SYDNEY = { x: 284, y: 224 };

type City = {
  id: string;
  label: string;
  x: number;
  y: number;
  delay: number;
  color: string;
  anchor: "start" | "end";
  lx: number;
  ly: number;
};

const cities: City[] = [
  { id: "singapore", label: "Singapore", x: 229, y: 186, delay: 1.3, color: "#293A66", anchor: "start", lx: 241, ly: 183 },
  { id: "hong-kong", label: "Hong Kong", x: 246, y: 146, delay: 1.5, color: "#5A5163", anchor: "start", lx: 258, ly: 143 },
  { id: "tokyo",     label: "Tokyo",     x: 270, y: 110, delay: 1.7, color: "#162347", anchor: "start", lx: 282, ly: 107 },
  { id: "london",    label: "London",    x: 127, y: 67,  delay: 1.9, color: "#8C6D4F", anchor: "end",   lx: 115, ly: 64  },
  { id: "dubai",     label: "Dubai",     x: 140, y: 136, delay: 2.1, color: "#AF7D43", anchor: "end",   lx: 128, ly: 133 },
];

function arcPath(to: { x: number; y: number }): string {
  const mx = (SYDNEY.x + to.x) / 2;
  const my = (SYDNEY.y + to.y) / 2;
  const cpx = Math.round(mx + (CX - mx) * 0.45);
  const cpy = Math.round(my + (CY - my) * 0.45);
  return `M ${SYDNEY.x} ${SYDNEY.y} Q ${cpx} ${cpy} ${to.x} ${to.y}`;
}

function GlobeAnim() {
  return (
    <div className="relative w-full aspect-[40/32] max-w-[560px] mx-auto">
      <style>{`
        @keyframes gFadeIn  { from { opacity: 0 } to { opacity: 1 } }
        @keyframes gArcDraw { from { stroke-dashoffset: 1 } to { stroke-dashoffset: 0 } }
        @keyframes gNodePop {
          0%   { opacity: 0; transform: scale(0.3); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes gHubPulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.06); }
        }
        @keyframes gHubGlow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50%       { opacity: 0.48; transform: scale(1.22); }
        }
        .g-outline { animation: gFadeIn 0.9s ease-out 0.15s both; }
        .g-grid    { animation: gFadeIn 0.9s ease-out 0.4s  both; }
        .g-arc {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: gArcDraw 1.4s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        .g-node  { transform-box: fill-box; transform-origin: center; animation: gNodePop 0.5s cubic-bezier(0.34,1.56,0.64,1) both; }
        .g-label { animation: gFadeIn 0.5s ease-out both; }
        .g-hub-core {
          transform-box: fill-box; transform-origin: center;
          animation: gNodePop 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.6s both,
                     gHubPulse 3.4s ease-in-out infinite 1.2s;
        }
        .g-hub-glow {
          transform-box: fill-box; transform-origin: center;
          animation: gHubGlow 3.4s ease-in-out infinite 0.6s;
        }
        @media (prefers-reduced-motion: reduce) {
          .g-outline, .g-grid, .g-arc, .g-node, .g-label, .g-hub-core, .g-hub-glow {
            animation: none !important;
            opacity: 1 !important;
            stroke-dashoffset: 0 !important;
            transform: none !important;
          }
          .g-hub-glow { opacity: 0.25 !important; }
        }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-br from-[#E8EDF7] via-[#EEEFF6] to-[#F5EEE0] rounded-[28px]" aria-hidden="true" />

      <svg viewBox="0 0 400 320" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          <clipPath id="globe-clip">
            <circle cx={CX} cy={CY} r={R} />
          </clipPath>
          <radialGradient id="globe-fill" cx="38%" cy="32%" r="72%">
            <stop offset="0%"   stopColor="#E8EDF7" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#162347" stopOpacity="0.06" />
          </radialGradient>
          <radialGradient id="g-hub-grad" cx="35%" cy="35%" r="75%">
            <stop offset="0%"   stopColor="#4A5C8A" />
            <stop offset="55%"  stopColor="#293A66" />
            <stop offset="100%" stopColor="#0A1530" />
          </radialGradient>
          <radialGradient id="g-hub-glow-grad">
            <stop offset="0" stopColor="#AF7D43" stopOpacity="0.55" />
            <stop offset="1" stopColor="#AF7D43" stopOpacity="0" />
          </radialGradient>
          {cities.map((c) => (
            <path key={`def-${c.id}`} id={`globe-arc-${c.id}`} d={arcPath(c)} fill="none" />
          ))}
        </defs>

        {/* Globe fill */}
        <circle cx={CX} cy={CY} r={R} fill="url(#globe-fill)" className="g-outline" />

        {/* Grid lines clipped to globe */}
        <g clipPath="url(#globe-clip)" className="g-grid">
          {/* Latitude lines — static */}
          {([-60, -30, 0, 30, 60] as number[]).map((lat) => {
            const latR = lat * (Math.PI / 180);
            const cyOff = -R * Math.sin(latR) * Math.cos(LAT0);
            const rx = R * Math.cos(latR);
            const ry = rx * Math.sin(LAT0);
            return (
              <ellipse key={`lat-${lat}`} cx={CX} cy={CY + cyOff} rx={rx} ry={ry}
                fill="none" stroke="#162347" strokeWidth="0.55" opacity="0.14" />
            );
          })}
          {/* Longitude lines — spinning */}
          <g>
            <animateTransform attributeName="transform" type="rotate"
              from={`0 ${CX} ${CY}`} to={`360 ${CX} ${CY}`}
              dur="24s" repeatCount="indefinite" />
            {([0, 36, 72, 108, 144] as number[]).map((angle) => (
              <ellipse key={`lon-${angle}`} cx={CX} cy={CY}
                rx={R} ry={R * Math.sin(LAT0)}
                fill="none" stroke="#162347" strokeWidth="0.55" opacity="0.14"
                transform={`rotate(${angle} ${CX} ${CY})`} />
            ))}
          </g>
        </g>

        {/* Globe outline ring */}
        <circle cx={CX} cy={CY} r={R} fill="none"
          stroke="#162347" strokeWidth="1" opacity="0.2" className="g-outline" />

        {/* Connection arcs from Sydney */}
        {cities.map((c) => (
          <path key={`arc-${c.id}`}
            d={arcPath(c)} fill="none"
            stroke={c.color} strokeWidth="1.3" strokeLinecap="round"
            opacity="0.55" pathLength="1"
            className="g-arc"
            style={{ animationDelay: `${c.delay}s` }}
          />
        ))}

        {/* Travelling particles */}
        {cities.map((c) => (
          <circle key={`particle-${c.id}`} r="2.4" fill={c.color} opacity="0.9">
            <animateMotion dur="3.2s" repeatCount="indefinite"
              begin={`${c.delay + 1.1}s`} rotate="auto">
              <mpath href={`#globe-arc-${c.id}`} />
            </animateMotion>
          </circle>
        ))}

        {/* City dots + pulse rings */}
        {cities.map((c) => (
          <g key={`city-${c.id}`}>
            <circle cx={c.x} cy={c.y} r="5" fill="none" stroke={c.color} strokeWidth="0.7">
              <animate attributeName="r"       values="5;20"     dur="2.6s" repeatCount="indefinite" begin={`${c.delay + 1.3}s`} />
              <animate attributeName="opacity" values="0.65;0"   dur="2.6s" repeatCount="indefinite" begin={`${c.delay + 1.3}s`} />
            </circle>
            <circle cx={c.x} cy={c.y} r="5"
              fill={c.color} stroke="rgba(255,255,255,0.55)" strokeWidth="0.8"
              className="g-node" style={{ animationDelay: `${c.delay + 0.5}s` }} />
            <text x={c.lx} y={c.ly} textAnchor={c.anchor}
              fontSize="8.5" fontWeight="700" fill="#162347" opacity="0.78" letterSpacing="0.5"
              className="g-label" style={{ animationDelay: `${c.delay + 0.9}s` }}>
              {c.label.toUpperCase()}
            </text>
          </g>
        ))}

        {/* Sydney hub */}
        <ellipse cx={SYDNEY.x} cy={SYDNEY.y} rx="24" ry="18"
          fill="url(#g-hub-glow-grad)" className="g-hub-glow" />
        <circle cx={SYDNEY.x} cy={SYDNEY.y} r="13"
          fill="url(#g-hub-grad)" stroke="rgba(175,125,67,0.5)" strokeWidth="1"
          className="g-hub-core" />
        <text x={SYDNEY.x} y={SYDNEY.y + 3} textAnchor="middle"
          fontSize="6.5" fontWeight="700" fill="white" letterSpacing="0.4"
          className="g-label" style={{ animationDelay: "0.9s" }}>
          SYDNEY
        </text>

        <text x="200" y="305" textAnchor="middle"
          fontSize="10" fontWeight="600" fill="#162347" opacity="0.55" letterSpacing="0.6">
          APAC · GLOBAL INVESTOR NETWORK
        </text>
      </svg>
    </div>
  );
}

export function BusinessServicesHero() {
  return (
    <section className="bg-cream pt-36 pb-16 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-[1.1fr_1fr] gap-12 min-[900px]:gap-16 items-center">
          <div className="text-center min-[900px]:text-left">
            <Eyebrow>Business Services</Eyebrow>
            <h1 className="font-serif italic font-normal text-navy text-[clamp(44px,6vw,72px)] leading-[1.05] mt-5 mb-5 max-w-[14ch] mx-auto min-[900px]:mx-0">
              Accelerate your growth.
            </h1>
            <p className="text-[18px] leading-[1.6] max-w-[520px] text-ink/[0.75] m-0 mb-8 mx-auto min-[900px]:mx-0">
              An integrated suite of investor relations, marketing, capital markets and operational services — exclusively designed to connect private companies and fund managers with qualified investors and global media.
            </p>
            <Button href="/contact" variant="primary" shape="pill">
              Get in touch
            </Button>
          </div>
          <div>
            <GlobeAnim />
          </div>
        </div>
      </div>
    </section>
  );
}
