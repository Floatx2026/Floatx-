import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

type Stream = {
  label: string;
  color: string;
  endY: number;
  width: number;
  delay: number;
  tilt: number;
};

const streams: Stream[] = [
  { label: "Trading", color: "#162347", endY: 70, width: 7, delay: 0.4, tilt: -22 },
  { label: "Company", color: "#293A66", endY: 115, width: 5.5, delay: 0.6, tilt: 18 },
  { label: "Fund", color: "#5A5163", endY: 158, width: 4.5, delay: 0.8, tilt: -10 },
  { label: "Debt", color: "#8C6D4F", endY: 205, width: 3.5, delay: 1.0, tilt: 28 },
  { label: "Property", color: "#AF7D43", endY: 250, width: 3.5, delay: 1.2, tilt: -18 },
];

const SOURCE_X = 58;
const SOURCE_Y = 164;
const DEST_X = 222;
const SOURCE_R = 26;
const DEST_R = 11;
const MID_X = (SOURCE_X + DEST_X) / 2;
const PARTICLES_PER_STREAM = 3;
const FLOW_DURATION = 2.4;
const SOURCE_RING_RX = SOURCE_R + 14;
const SOURCE_RING_RY = (SOURCE_R + 14) * 0.52;
const DEST_RING_RX = DEST_R + 8;
const DEST_RING_RY = (DEST_R + 8) * 0.55;

function streamPath(endY: number): string {
  return `M ${SOURCE_X} ${SOURCE_Y} C ${MID_X} ${SOURCE_Y}, ${MID_X} ${endY}, ${DEST_X} ${endY}`;
}

function SankeyAnim() {
  return (
    <div className="relative w-full aspect-square max-w-[520px] mx-auto">
      <style>{`
        @keyframes sStreamReveal {
          from { stroke-dashoffset: 220; stroke-opacity: 0; }
          to { stroke-dashoffset: 0; stroke-opacity: 0.34; }
        }
        @keyframes sNodePop {
          0% { opacity: 0; transform: scale(0.4); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes sSourcePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.04); }
        }
        @keyframes sSourceGlow {
          0%, 100% { opacity: 0.18; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.18); }
        }
        @keyframes sLabelFade {
          0% { opacity: 0; transform: translateX(-3px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .s-stream {
          stroke-dasharray: 220;
          stroke-opacity: 0;
          animation: sStreamReveal 1.0s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
        }
        .s-node {
          transform-box: fill-box;
          transform-origin: center;
          animation: sNodePop 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        .s-source-core {
          transform-box: fill-box;
          transform-origin: center;
          animation: sNodePop 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) 0.05s both, sSourcePulse 3.2s ease-in-out infinite 0.6s;
        }
        .s-source-glow {
          transform-box: fill-box;
          transform-origin: center;
          animation: sSourceGlow 3.2s ease-in-out infinite;
        }
        .s-label {
          transform-box: fill-box;
          animation: sLabelFade 0.55s ease-out both;
        }
        @media (prefers-reduced-motion: reduce) {
          .s-stream, .s-node, .s-source-core, .s-source-glow, .s-label {
            animation: none !important;
            opacity: 1 !important;
            stroke-opacity: 0.34 !important;
            stroke-dashoffset: 0 !important;
            transform: none !important;
          }
          .s-source-glow { opacity: 0.25 !important; }
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
          <radialGradient id="s-source-grad" cx="35%" cy="35%" r="75%">
            <stop offset="0%" stopColor="#4A5C8A" />
            <stop offset="55%" stopColor="#293A66" />
            <stop offset="100%" stopColor="#0A1530" />
          </radialGradient>
          <radialGradient id="s-source-glow-grad">
            <stop offset="0" stopColor="#AF7D43" stopOpacity="0.45" />
            <stop offset="1" stopColor="#AF7D43" stopOpacity="0" />
          </radialGradient>
          {streams.map((s) => (
            <linearGradient
              key={`grad-${s.label}`}
              id={`s-stream-grad-${s.label}`}
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop offset="0" stopColor="#162347" />
              <stop offset="1" stopColor={s.color} />
            </linearGradient>
          ))}
          {streams.map((s) => (
            <radialGradient
              key={`dest-grad-${s.label}`}
              id={`s-dest-grad-${s.label}`}
              cx="35%"
              cy="35%"
              r="75%"
            >
              <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
              <stop offset="55%" stopColor={s.color} />
              <stop offset="100%" stopColor={s.color} stopOpacity="0.85" />
            </radialGradient>
          ))}
          {streams.map((s) => (
            <path
              key={`def-path-${s.label}`}
              id={`stream-path-${s.label}`}
              d={streamPath(s.endY)}
              fill="none"
            />
          ))}
        </defs>

        {streams.map((s) => (
          <path
            key={`stream-${s.label}`}
            d={streamPath(s.endY)}
            stroke={`url(#s-stream-grad-${s.label})`}
            strokeWidth={s.width}
            fill="none"
            strokeLinecap="round"
            className="s-stream"
            style={{ animationDelay: `${s.delay}s` }}
          />
        ))}

        {streams.map((s) =>
          Array.from({ length: PARTICLES_PER_STREAM }, (_, i) => (
            <circle
              key={`particle-${s.label}-${i}`}
              r="3"
              fill={s.color}
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="0.6"
            >
              <animateMotion
                dur={`${FLOW_DURATION}s`}
                repeatCount="indefinite"
                begin={`${s.delay + 0.6 + (i * FLOW_DURATION) / PARTICLES_PER_STREAM}s`}
                rotate="auto"
              >
                <mpath href={`#stream-path-${s.label}`} />
              </animateMotion>
            </circle>
          )),
        )}

        <ellipse
          cx={SOURCE_X}
          cy={SOURCE_Y}
          rx={SOURCE_RING_RX + 6}
          ry={SOURCE_RING_RY + 4}
          fill="url(#s-source-glow-grad)"
          className="s-source-glow"
          transform={`rotate(-15 ${SOURCE_X} ${SOURCE_Y})`}
        />
        <circle
          cx={SOURCE_X}
          cy={SOURCE_Y}
          r={SOURCE_R}
          fill="url(#s-source-grad)"
          stroke="rgba(175, 125, 67, 0.45)"
          strokeWidth="1"
          className="s-source-core"
        />
        <text
          x={SOURCE_X}
          y={SOURCE_Y + 4}
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill="white"
          letterSpacing="-0.2"
          className="s-label"
          style={{ animationDelay: "0.3s" }}
        >
          FloatX
        </text>

        {streams.map((s) => (
          <circle
            key={`dest-group-${s.label}`}
            cx={DEST_X}
            cy={s.endY}
            r={DEST_R}
            fill={`url(#s-dest-grad-${s.label})`}
            stroke="rgba(0,0,0,0.10)"
            strokeWidth="0.5"
            className="s-node"
            style={{ animationDelay: `${s.delay + 0.65}s` }}
          />
        ))}

        {streams.map((s) => (
          <g
            key={`dest-label-${s.label}`}
            className="s-label"
            style={{ animationDelay: `${s.delay + 0.9}s` }}
          >
            <text
              x={DEST_X + DEST_RING_RX + 4}
              y={s.endY - 1}
              textAnchor="start"
              fontSize="10"
              fontWeight="700"
              fill="#162347"
              opacity="0.78"
              letterSpacing="1.1"
            >
              {s.label.toUpperCase()}
            </text>
            <text
              x={DEST_X + DEST_RING_RX + 4}
              y={s.endY + 11}
              textAnchor="start"
              fontSize="8"
              fontWeight="600"
              fill="#162347"
              opacity="0.5"
              letterSpacing="0.9"
            >
              INVESTMENTS
            </text>
          </g>
        ))}

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
            <SankeyAnim />
          </div>
        </div>
      </div>
    </section>
  );
}
