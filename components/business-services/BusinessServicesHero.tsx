import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const VB_W = 410;
const VB_H = 320;
const HUB_X = VB_W / 2;
const HUB_Y = VB_H / 2;
const HUB_R = 26;
const NODE_R = 11;
const ORBIT_RADIUS = 108;
const PARTICLES_PER_LINK = 2;
const FLOW_DURATION = 2.6;

type ServiceNode = {
  id: string;
  label: string;
  angleDeg: number;
  delay: number;
  color: string;
};

const nodes: ServiceNode[] = [
  { id: "media-ir",    label: "Media & IR",  angleDeg: -90,  delay: 0.40, color: "#162347" },
  { id: "accounting",  label: "Accounting",  angleDeg: -18,  delay: 0.55, color: "#293A66" },
  { id: "advisory",    label: "Advisory",    angleDeg:  54,  delay: 0.70, color: "#5A5163" },
  { id: "financing",   label: "Financing",   angleDeg:  126, delay: 0.85, color: "#8C6D4F" },
  { id: "office",      label: "Office",      angleDeg: -162, delay: 1.00, color: "#AF7D43" },
];

function nodePos(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: HUB_X + Math.cos(rad) * ORBIT_RADIUS, y: HUB_Y + Math.sin(rad) * ORBIT_RADIUS };
}

function linkPath(angleDeg: number): string {
  const { x, y } = nodePos(angleDeg);
  return `M ${HUB_X} ${HUB_Y} L ${x} ${y}`;
}

function BusinessAnim() {
  return (
    <div className="relative w-full aspect-[41/32] max-w-[600px] mx-auto">
      <style>{`
        @keyframes bsLinkReveal {
          from { stroke-dashoffset: 130; stroke-opacity: 0; }
          to   { stroke-dashoffset: 0;   stroke-opacity: 0.32; }
        }
        @keyframes bsNodePop {
          0%   { opacity: 0; transform: scale(0.4); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes bsHubPulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.05); }
        }
        @keyframes bsHubGlow {
          0%, 100% { opacity: 0.18; transform: scale(1); }
          50%       { opacity: 0.42; transform: scale(1.2); }
        }
        @keyframes bsLabelFade {
          0%   { opacity: 0; transform: translateY(2px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .bs-link { stroke-dasharray: 130; stroke-opacity: 0; animation: bsLinkReveal 1.0s cubic-bezier(0.22,0.61,0.36,1) forwards; }
        .bs-node { transform-box: fill-box; transform-origin: center; animation: bsNodePop 0.55s cubic-bezier(0.34,1.56,0.64,1) both; }
        .bs-hub-core { transform-box: fill-box; transform-origin: center; animation: bsNodePop 0.55s cubic-bezier(0.34,1.56,0.64,1) 0.05s both, bsHubPulse 3.4s ease-in-out infinite 0.6s; }
        .bs-hub-glow { transform-box: fill-box; transform-origin: center; animation: bsHubGlow 3.4s ease-in-out infinite; }
        .bs-label { transform-box: fill-box; animation: bsLabelFade 0.55s ease-out both; }
        @media (prefers-reduced-motion: reduce) {
          .bs-link, .bs-node, .bs-hub-core, .bs-hub-glow, .bs-label {
            animation: none !important; opacity: 1 !important;
            stroke-opacity: 0.32 !important; stroke-dashoffset: 0 !important; transform: none !important;
          }
          .bs-hub-glow { opacity: 0.25 !important; }
        }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-br from-[#E8EDF7] via-[#EEEFF6] to-[#F5EEE0] rounded-[28px]" aria-hidden="true" />

      <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          <radialGradient id="bs-hub-grad" cx="35%" cy="35%" r="75%">
            <stop offset="0%"   stopColor="#4A5C8A" />
            <stop offset="55%"  stopColor="#293A66" />
            <stop offset="100%" stopColor="#0A1530" />
          </radialGradient>
          <radialGradient id="bs-hub-glow-grad">
            <stop offset="0" stopColor="#AF7D43" stopOpacity="0.5" />
            <stop offset="1" stopColor="#AF7D43" stopOpacity="0" />
          </radialGradient>
          {nodes.map((n) => (
            <linearGradient key={`bs-link-grad-${n.id}`} id={`bs-link-grad-${n.id}`} gradientUnits="userSpaceOnUse"
              x1={HUB_X} y1={HUB_Y} x2={nodePos(n.angleDeg).x} y2={nodePos(n.angleDeg).y}>
              <stop offset="0" stopColor="#162347" />
              <stop offset="1" stopColor={n.color} />
            </linearGradient>
          ))}
          {nodes.map((n) => (
            <radialGradient key={`bs-node-grad-${n.id}`} id={`bs-node-grad-${n.id}`} cx="35%" cy="35%" r="75%">
              <stop offset="0%"   stopColor="rgba(255,255,255,0.55)" />
              <stop offset="55%"  stopColor={n.color} />
              <stop offset="100%" stopColor={n.color} stopOpacity="0.85" />
            </radialGradient>
          ))}
          {nodes.map((n) => (
            <path key={`bs-def-path-${n.id}`} id={`bs-link-path-${n.id}`} d={linkPath(n.angleDeg)} fill="none" />
          ))}
        </defs>

        {nodes.map((n) => (
          <path key={`bs-link-${n.id}`} d={linkPath(n.angleDeg)} stroke={`url(#bs-link-grad-${n.id})`}
            strokeWidth="2.2" fill="none" strokeLinecap="round" className="bs-link"
            style={{ animationDelay: `${n.delay}s` }} />
        ))}

        {nodes.map((n) =>
          Array.from({ length: PARTICLES_PER_LINK }, (_, i) => (
            <circle key={`bs-particle-${n.id}-${i}`} r="2.4" fill={n.color} stroke="rgba(255,255,255,0.65)" strokeWidth="0.5">
              <animateMotion dur={`${FLOW_DURATION}s`} repeatCount="indefinite"
                begin={`${n.delay + 0.7 + (i * FLOW_DURATION) / PARTICLES_PER_LINK}s`} rotate="auto">
                <mpath href={`#bs-link-path-${n.id}`} />
              </animateMotion>
            </circle>
          ))
        )}

        <ellipse cx={HUB_X} cy={HUB_Y} rx={HUB_R + 18} ry={HUB_R + 14}
          fill="url(#bs-hub-glow-grad)" className="bs-hub-glow" />
        <circle cx={HUB_X} cy={HUB_Y} r={HUB_R} fill="url(#bs-hub-grad)"
          stroke="rgba(175,125,67,0.45)" strokeWidth="1" className="bs-hub-core" />
        <text x={HUB_X} y={HUB_Y + 4} textAnchor="middle" fontSize="11" fontWeight="700"
          fill="white" letterSpacing="-0.2" className="bs-label" style={{ animationDelay: "0.3s" }}>
          FloatX
        </text>

        {nodes.map((n) => {
          const { x, y } = nodePos(n.angleDeg);
          const rad = (n.angleDeg * Math.PI) / 180;
          const cx = Math.cos(rad);
          const cy = Math.sin(rad);
          const isVertical = Math.abs(cx) <= 0.3;
          const labelGap = NODE_R + 8;
          const lx = isVertical ? x : x + cx * labelGap;
          const ly = isVertical ? y + (cy < 0 ? -labelGap : labelGap + 4) : y + cy * labelGap + 4;
          const anchor: "start" | "middle" | "end" = isVertical ? "middle" : cx > 0 ? "start" : "end";
          return (
            <g key={`bs-node-group-${n.id}`}>
              <circle cx={x} cy={y} r={NODE_R} fill={`url(#bs-node-grad-${n.id})`}
                stroke="rgba(0,0,0,0.10)" strokeWidth="0.5" className="bs-node"
                style={{ animationDelay: `${n.delay + 0.6}s` }} />
              <text x={lx} y={ly} textAnchor={anchor} fontSize="9.5" fontWeight="700"
                fill="#162347" opacity="0.82" letterSpacing="0.7" className="bs-label"
                style={{ animationDelay: `${n.delay + 0.85}s` }}>
                {n.label.toUpperCase()}
              </text>
            </g>
          );
        })}

        <text x={HUB_X} y={VB_H - 14} textAnchor="middle" fontSize="10" fontWeight="600"
          fill="#162347" opacity="0.55" letterSpacing="0.6">
          ONE PLATFORM · FIVE BUSINESS SERVICES
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
            <BusinessAnim />
          </div>
        </div>
      </div>
    </section>
  );
}
