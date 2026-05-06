import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const VB_W = 500;
const VB_H = 320;
const SRC_X = 65;
const SRC_Y = 160;
const SRC_R = 22;
const HUB_X = 210;
const HUB_Y = 160;
const HUB_R = 28;
const DEST_X = 368;
const DEST_R = 13;
const MX = (HUB_X + DEST_X) / 2;
const FLOW_DUR = 2.4;
const PARTICLES = 2;

const dests = [
  { label: "INVESTORS", sub: "SOPHISTICATED", y: 78, color: "#162347", delay: 0.5 },
  { label: "FAMILY", sub: "OFFICES", y: 160, color: "#5A5163", delay: 0.65 },
  { label: "INSTITUTIONS", sub: "& FUNDS", y: 242, color: "#AF7D43", delay: 0.8 },
];

function destPath(y: number): string {
  return `M ${HUB_X} ${HUB_Y} C ${MX} ${HUB_Y} ${MX} ${y} ${DEST_X} ${y}`;
}

const srcPath = `M ${SRC_X} ${SRC_Y} L ${HUB_X} ${HUB_Y}`;

function ListingAnim() {
  return (
    <div className="relative w-full aspect-[25/16] max-w-[600px] mx-auto">
      <style>{`
        @keyframes laLinkReveal {
          from { stroke-dashoffset: 200; stroke-opacity: 0; }
          to { stroke-dashoffset: 0; stroke-opacity: 0.35; }
        }
        @keyframes laNodePop {
          0% { opacity: 0; transform: scale(0.4); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes laHubPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.04); }
        }
        @keyframes laHubGlow {
          0%, 100% { opacity: 0.18; transform: scale(1); }
          50% { opacity: 0.42; transform: scale(1.2); }
        }
        @keyframes laLabelFade {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .la-link {
          stroke-dasharray: 200;
          stroke-opacity: 0;
          animation: laLinkReveal 1.0s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
        }
        .la-node {
          transform-box: fill-box;
          transform-origin: center;
          animation: laNodePop 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        .la-hub-core {
          transform-box: fill-box;
          transform-origin: center;
          animation: laNodePop 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) 0.05s both,
            laHubPulse 3.2s ease-in-out infinite 0.6s;
        }
        .la-hub-glow {
          transform-box: fill-box;
          transform-origin: center;
          animation: laHubGlow 3.2s ease-in-out infinite;
        }
        .la-label {
          animation: laLabelFade 0.55s ease-out both;
        }
        @media (prefers-reduced-motion: reduce) {
          .la-link, .la-node, .la-hub-core, .la-hub-glow, .la-label {
            animation: none !important;
            opacity: 1 !important;
            stroke-opacity: 0.35 !important;
            stroke-dashoffset: 0 !important;
            transform: none !important;
          }
          .la-hub-glow { opacity: 0.25 !important; }
        }
      `}</style>

      <div
        className="absolute inset-0 bg-gradient-to-br from-[#E8EDF7] via-[#EEEFF6] to-[#F5EEE0] rounded-[28px]"
        aria-hidden="true"
      />

      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="la-hub-grad" cx="35%" cy="35%" r="75%">
            <stop offset="0%" stopColor="#4A5C8A" />
            <stop offset="55%" stopColor="#293A66" />
            <stop offset="100%" stopColor="#0A1530" />
          </radialGradient>
          <radialGradient id="la-hub-glow-grad">
            <stop offset="0" stopColor="#AF7D43" stopOpacity="0.5" />
            <stop offset="1" stopColor="#AF7D43" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="la-src-grad" cx="35%" cy="35%" r="75%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
            <stop offset="55%" stopColor="#162347" />
            <stop offset="100%" stopColor="#0A1530" stopOpacity="0.85" />
          </radialGradient>
          {dests.map((d) => (
            <linearGradient
              key={`la-dest-link-grad-${d.label}`}
              id={`la-dest-link-grad-${d.label}`}
              gradientUnits="userSpaceOnUse"
              x1={HUB_X}
              y1={HUB_Y}
              x2={DEST_X}
              y2={d.y}
            >
              <stop offset="0" stopColor="#162347" />
              <stop offset="1" stopColor={d.color} />
            </linearGradient>
          ))}
          {dests.map((d) => (
            <radialGradient
              key={`la-dest-grad-${d.label}`}
              id={`la-dest-grad-${d.label}`}
              cx="35%"
              cy="35%"
              r="75%"
            >
              <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
              <stop offset="55%" stopColor={d.color} />
              <stop offset="100%" stopColor={d.color} stopOpacity="0.85" />
            </radialGradient>
          ))}
          <path id="la-src-path" d={srcPath} fill="none" />
          {dests.map((d) => (
            <path
              key={`la-def-dest-${d.label}`}
              id={`la-dest-path-${d.label}`}
              d={destPath(d.y)}
              fill="none"
            />
          ))}
        </defs>

        {/* Source → Hub line */}
        <path
          d={srcPath}
          stroke="#162347"
          strokeWidth="4.5"
          fill="none"
          strokeLinecap="round"
          className="la-link"
          style={{ animationDelay: "0.2s" }}
        />

        {/* Hub → Dest lines */}
        {dests.map((d) => (
          <path
            key={`la-dest-line-${d.label}`}
            d={destPath(d.y)}
            stroke={`url(#la-dest-link-grad-${d.label})`}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            className="la-link"
            style={{ animationDelay: `${d.delay}s` }}
          />
        ))}

        {/* Source → Hub particles */}
        {Array.from({ length: PARTICLES }, (_, i) => (
          <circle
            key={`la-src-particle-${i}`}
            r="3"
            fill="#293A66"
            stroke="rgba(255,255,255,0.65)"
            strokeWidth="0.6"
          >
            <animateMotion
              dur={`${FLOW_DUR}s`}
              repeatCount="indefinite"
              begin={`${0.5 + (i * FLOW_DUR) / PARTICLES}s`}
            >
              <mpath href="#la-src-path" />
            </animateMotion>
          </circle>
        ))}

        {/* Hub → Dest particles */}
        {dests.map((d) =>
          Array.from({ length: PARTICLES }, (_, i) => (
            <circle
              key={`la-dest-particle-${d.label}-${i}`}
              r="2.5"
              fill={d.color}
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="0.5"
            >
              <animateMotion
                dur={`${FLOW_DUR}s`}
                repeatCount="indefinite"
                begin={`${d.delay + 0.5 + (i * FLOW_DUR) / PARTICLES}s`}
              >
                <mpath href={`#la-dest-path-${d.label}`} />
              </animateMotion>
            </circle>
          )),
        )}

        {/* Hub glow */}
        <ellipse
          cx={HUB_X}
          cy={HUB_Y}
          rx={HUB_R + 18}
          ry={HUB_R + 14}
          fill="url(#la-hub-glow-grad)"
          className="la-hub-glow"
        />

        {/* Source node */}
        <circle
          cx={SRC_X}
          cy={SRC_Y}
          r={SRC_R}
          fill="url(#la-src-grad)"
          stroke="rgba(175,125,67,0.35)"
          strokeWidth="1"
          className="la-node"
          style={{ animationDelay: "0.1s" }}
        />

        {/* Hub node */}
        <circle
          cx={HUB_X}
          cy={HUB_Y}
          r={HUB_R}
          fill="url(#la-hub-grad)"
          stroke="rgba(175,125,67,0.45)"
          strokeWidth="1"
          className="la-hub-core"
        />
        <text
          x={HUB_X}
          y={HUB_Y + 4}
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill="white"
          letterSpacing="-0.2"
          className="la-label"
          style={{ animationDelay: "0.3s" }}
        >
          FloatX
        </text>

        {/* Source labels (below circle) */}
        <text
          x={SRC_X}
          y={SRC_Y + SRC_R + 14}
          textAnchor="middle"
          fontSize="9"
          fontWeight="700"
          fill="#162347"
          opacity="0.82"
          letterSpacing="1"
          className="la-label"
          style={{ animationDelay: "0.2s" }}
        >
          YOUR
        </text>
        <text
          x={SRC_X}
          y={SRC_Y + SRC_R + 25}
          textAnchor="middle"
          fontSize="9"
          fontWeight="700"
          fill="#162347"
          opacity="0.82"
          letterSpacing="1"
          className="la-label"
          style={{ animationDelay: "0.25s" }}
        >
          ASSET
        </text>

        {/* Dest nodes and labels */}
        {dests.map((d) => (
          <g key={`la-dest-group-${d.label}`}>
            <circle
              cx={DEST_X}
              cy={d.y}
              r={DEST_R}
              fill={`url(#la-dest-grad-${d.label})`}
              stroke="rgba(0,0,0,0.10)"
              strokeWidth="0.5"
              className="la-node"
              style={{ animationDelay: `${d.delay + 0.6}s` }}
            />
            <text
              x={DEST_X + DEST_R + 8}
              y={d.y - 1}
              textAnchor="start"
              fontSize="9.5"
              fontWeight="700"
              fill="#162347"
              opacity="0.80"
              letterSpacing="0.9"
              className="la-label"
              style={{ animationDelay: `${d.delay + 0.85}s` }}
            >
              {d.label}
            </text>
            <text
              x={DEST_X + DEST_R + 8}
              y={d.y + 11}
              textAnchor="start"
              fontSize="8"
              fontWeight="600"
              fill="#162347"
              opacity="0.5"
              letterSpacing="0.8"
              className="la-label"
              style={{ animationDelay: `${d.delay + 0.9}s` }}
            >
              {d.sub}
            </text>
          </g>
        ))}

        <text
          x={VB_W / 2}
          y={VB_H - 14}
          textAnchor="middle"
          fontSize="9.5"
          fontWeight="600"
          fill="#162347"
          opacity="0.55"
          letterSpacing="0.6"
        >
          YOUR ASSET · FLOATX PLATFORM · GLOBAL INVESTORS
        </text>
      </svg>
    </div>
  );
}

export function ListHero() {
  return (
    <section className="bg-cream pt-36 pb-16 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-[1.1fr_1fr] gap-12 min-[900px]:gap-16 items-center">
          <div className="text-center min-[900px]:text-left">
            <Eyebrow>List Your Asset</Eyebrow>
            <h1 className="font-serif italic font-normal text-navy text-[clamp(44px,6vw,72px)] leading-[1.05] mt-5 mb-5 max-w-[14ch] mx-auto min-[900px]:mx-0">
              Reach capital. List on FloatX.
            </h1>
            <p className="text-[18px] leading-[1.6] max-w-[520px] text-ink/[0.75] m-0 mb-8 mx-auto min-[900px]:mx-0">
              List your company, fund or asset and gain access to 60,000+ global accredited investors — with dedicated support and go-live in as little as 48 hours.
            </p>
            <Button href="#list" variant="primary" shape="pill">
              List your opportunity
            </Button>
          </div>
          <div>
            <ListingAnim />
          </div>
        </div>
      </div>
    </section>
  );
}
