import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

type Node = {
  label: string;
  angleDeg: number;
  delay: number;
  color: string;
};

const HUB_X = 160;
const HUB_Y = 160;
const HUB_R = 26;
const NODE_R = 11;
const ORBIT_RADIUS = 108;
const PARTICLES_PER_LINK = 2;
const FLOW_DURATION = 2.6;

const nodes: Node[] = [
  { label: "IFAs", angleDeg: -90, delay: 0.4, color: "#162347" },
  { label: "Brokers", angleDeg: -30, delay: 0.55, color: "#293A66" },
  { label: "Family Offices", angleDeg: 30, delay: 0.7, color: "#5A5163" },
  { label: "Wealth", angleDeg: 90, delay: 0.85, color: "#8C6D4F" },
  { label: "Accountants", angleDeg: 150, delay: 1.0, color: "#AF7D43" },
  { label: "RIAs", angleDeg: -150, delay: 1.15, color: "#293A66" },
];

function nodePos(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: HUB_X + Math.cos(rad) * ORBIT_RADIUS,
    y: HUB_Y + Math.sin(rad) * ORBIT_RADIUS,
  };
}

function linkPath(angleDeg: number): string {
  const { x, y } = nodePos(angleDeg);
  return `M ${HUB_X} ${HUB_Y} L ${x} ${y}`;
}

function DistributionAnim() {
  return (
    <div className="relative w-full aspect-square max-w-[520px] mx-auto">
      <style>{`
        @keyframes dpLinkReveal {
          from { stroke-dashoffset: 130; stroke-opacity: 0; }
          to { stroke-dashoffset: 0; stroke-opacity: 0.32; }
        }
        @keyframes dpNodePop {
          0% { opacity: 0; transform: scale(0.4); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes dpHubPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes dpHubGlow {
          0%, 100% { opacity: 0.18; transform: scale(1); }
          50% { opacity: 0.42; transform: scale(1.2); }
        }
        @keyframes dpRingRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes dpNodeRingPulse {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 0.95; }
        }
        @keyframes dpLabelFade {
          0% { opacity: 0; transform: translateY(2px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .dp-link {
          stroke-dasharray: 130;
          stroke-opacity: 0;
          animation: dpLinkReveal 1.0s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
        }
        .dp-node {
          transform-box: fill-box;
          transform-origin: center;
          animation: dpNodePop 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        .dp-hub-core {
          transform-box: fill-box;
          transform-origin: center;
          animation: dpNodePop 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) 0.05s both, dpHubPulse 3.4s ease-in-out infinite 0.6s;
        }
        .dp-hub-glow {
          transform-box: fill-box;
          transform-origin: center;
          animation: dpHubGlow 3.4s ease-in-out infinite;
        }
        .dp-orbit {
          transform-box: fill-box;
          transform-origin: ${HUB_X}px ${HUB_Y}px;
          animation: dpNodePop 0.7s ease-out 0.05s both, dpRingRotate 36s linear infinite;
        }
        .dp-node-ring {
          transform-box: fill-box;
          transform-origin: center;
          animation: dpNodePop 0.7s ease-out both, dpNodeRingPulse 3s ease-in-out infinite;
        }
        .dp-label {
          transform-box: fill-box;
          animation: dpLabelFade 0.55s ease-out both;
        }
        @media (prefers-reduced-motion: reduce) {
          .dp-link, .dp-node, .dp-hub-core, .dp-hub-glow, .dp-orbit, .dp-node-ring, .dp-label {
            animation: none !important;
            opacity: 1 !important;
            stroke-opacity: 0.32 !important;
            stroke-dashoffset: 0 !important;
            transform: none !important;
          }
          .dp-hub-glow { opacity: 0.25 !important; }
          .dp-node-ring { opacity: 0.7 !important; }
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
          <radialGradient id="dp-hub-grad" cx="35%" cy="35%" r="75%">
            <stop offset="0%" stopColor="#4A5C8A" />
            <stop offset="55%" stopColor="#293A66" />
            <stop offset="100%" stopColor="#0A1530" />
          </radialGradient>
          <radialGradient id="dp-hub-glow-grad">
            <stop offset="0" stopColor="#AF7D43" stopOpacity="0.5" />
            <stop offset="1" stopColor="#AF7D43" stopOpacity="0" />
          </radialGradient>
          {nodes.map((n) => (
            <linearGradient
              key={`dp-link-grad-${n.label}`}
              id={`dp-link-grad-${n.label}`}
              gradientUnits="userSpaceOnUse"
              x1={HUB_X}
              y1={HUB_Y}
              x2={nodePos(n.angleDeg).x}
              y2={nodePos(n.angleDeg).y}
            >
              <stop offset="0" stopColor="#162347" />
              <stop offset="1" stopColor={n.color} />
            </linearGradient>
          ))}
          {nodes.map((n) => (
            <radialGradient
              key={`dp-node-grad-${n.label}`}
              id={`dp-node-grad-${n.label}`}
              cx="35%"
              cy="35%"
              r="75%"
            >
              <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
              <stop offset="55%" stopColor={n.color} />
              <stop offset="100%" stopColor={n.color} stopOpacity="0.85" />
            </radialGradient>
          ))}
          {nodes.map((n) => (
            <path
              key={`dp-def-path-${n.label}`}
              id={`dp-link-path-${n.label}`}
              d={linkPath(n.angleDeg)}
              fill="none"
            />
          ))}
        </defs>

        <ellipse
          cx={HUB_X}
          cy={HUB_Y}
          rx={ORBIT_RADIUS}
          ry={ORBIT_RADIUS * 0.96}
          fill="none"
          stroke="rgba(22, 35, 71, 0.10)"
          strokeWidth="1"
          strokeDasharray="2 4"
          className="dp-orbit"
        />

        {nodes.map((n) => (
          <path
            key={`dp-link-${n.label}`}
            d={linkPath(n.angleDeg)}
            stroke={`url(#dp-link-grad-${n.label})`}
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
            className="dp-link"
            style={{ animationDelay: `${n.delay}s` }}
          />
        ))}

        {nodes.map((n) =>
          Array.from({ length: PARTICLES_PER_LINK }, (_, i) => (
            <circle
              key={`dp-particle-${n.label}-${i}`}
              r="2.4"
              fill={n.color}
              stroke="rgba(255,255,255,0.65)"
              strokeWidth="0.5"
            >
              <animateMotion
                dur={`${FLOW_DURATION}s`}
                repeatCount="indefinite"
                begin={`${n.delay + 0.7 + (i * FLOW_DURATION) / PARTICLES_PER_LINK}s`}
                rotate="auto"
              >
                <mpath href={`#dp-link-path-${n.label}`} />
              </animateMotion>
            </circle>
          )),
        )}

        <ellipse
          cx={HUB_X}
          cy={HUB_Y}
          rx={HUB_R + 18}
          ry={HUB_R + 14}
          fill="url(#dp-hub-glow-grad)"
          className="dp-hub-glow"
        />
        <circle
          cx={HUB_X}
          cy={HUB_Y}
          r={HUB_R}
          fill="url(#dp-hub-grad)"
          stroke="rgba(175, 125, 67, 0.45)"
          strokeWidth="1"
          className="dp-hub-core"
        />
        <text
          x={HUB_X}
          y={HUB_Y + 4}
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill="white"
          letterSpacing="-0.2"
          className="dp-label"
          style={{ animationDelay: "0.3s" }}
        >
          FloatX
        </text>

        {nodes.map((n) => {
          const { x, y } = nodePos(n.angleDeg);
          const labelOffset = 22;
          const rad = (n.angleDeg * Math.PI) / 180;
          const lx = x + Math.cos(rad) * labelOffset;
          const ly = y + Math.sin(rad) * labelOffset;
          const anchor =
            Math.cos(rad) > 0.3 ? "start" : Math.cos(rad) < -0.3 ? "end" : "middle";
          return (
            <g key={`dp-node-group-${n.label}`}>
              <ellipse
                cx={x}
                cy={y}
                rx={NODE_R + 6}
                ry={(NODE_R + 6) * 0.6}
                fill="none"
                stroke={n.color}
                strokeWidth="1"
                strokeDasharray="2 3"
                className="dp-node-ring"
                style={{ animationDelay: `${n.delay + 0.65}s, ${n.delay + 1.3}s` }}
              />
              <circle
                cx={x}
                cy={y}
                r={NODE_R}
                fill={`url(#dp-node-grad-${n.label})`}
                stroke="rgba(0,0,0,0.10)"
                strokeWidth="0.5"
                className="dp-node"
                style={{ animationDelay: `${n.delay + 0.6}s` }}
              />
              <text
                x={lx}
                y={ly + 3}
                textAnchor={anchor}
                fontSize="10"
                fontWeight="700"
                fill="#162347"
                opacity="0.78"
                letterSpacing="0.9"
                className="dp-label"
                style={{ animationDelay: `${n.delay + 0.85}s` }}
              >
                {n.label.toUpperCase()}
              </text>
            </g>
          );
        })}

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
          ONE PLATFORM · DISTRIBUTED THROUGH PARTNERS
        </text>
      </svg>
    </div>
  );
}

export function PartnersHero() {
  return (
    <section className="bg-cream pt-36 pb-16 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-[1.1fr_1fr] gap-12 min-[900px]:gap-16 items-center">
          <div className="text-center min-[900px]:text-left">
            <Eyebrow>Distribution Partners</Eyebrow>
            <h1 className="font-serif italic font-normal text-navy text-[clamp(44px,6vw,72px)] leading-[1.05] mt-5 mb-5 max-w-[14ch] mx-auto min-[900px]:mx-0">
              Partner with us.
            </h1>
            <p className="text-[18px] leading-[1.6] max-w-[560px] text-ink/[0.75] m-0 mb-8 mx-auto min-[900px]:mx-0">
              Bring your wholesale clients to a curated platform of late-stage trading, primary equity, funds, debt and property — with institutional-grade execution and revenue share built in.
            </p>
            <Button href="#apply" variant="primary" shape="pill">
              Apply to partner
            </Button>
          </div>
          <div>
            <DistributionAnim />
          </div>
        </div>
      </div>
    </section>
  );
}
