import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const CURVE = "M 20 248 C 65 248 115 242 162 196 C 209 150 272 68 385 38";
const DASH = 460;
const FLOW_DUR = 3.4;

const milestones = [
  { cx: 20,  cy: 248, r: 5, color: "#8A9CC0", label: "PRE-SEED", anchor: "start",  labelY: 265, delay: 0.6  },
  { cx: 105, cy: 234, r: 5, color: "#5A74A0", label: "SEED",     anchor: "middle", labelY: 250, delay: 0.82 },
  { cx: 228, cy: 129, r: 5, color: "#162347", label: "SERIES A", anchor: "middle", labelY: 111, delay: 1.25 },
  { cx: 271, cy: 93,  r: 5, color: "#162347", label: "SERIES B", anchor: "middle", labelY: 75,  delay: 1.45 },
  { cx: 309, cy: 69,  r: 5, color: "#162347", label: "SERIES C", anchor: "middle", labelY: 51,  delay: 1.65 },
  { cx: 385, cy: 38,  r: 5, color: "#162347", label: "SCALE",    anchor: "end",    labelY: 24,  delay: 1.9  },
];

function VenturesAnim() {
  return (
    <div className="relative w-full aspect-[10/7] max-w-[580px] mx-auto">
      <style>{`
        @keyframes tvLineReveal {
          from { stroke-dashoffset: ${DASH}; opacity: 0; }
          to { stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes tvDotPop {
          0% { opacity: 0; transform: scale(0); }
          80% { opacity: 1; transform: scale(1.25); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes tvHubPop {
          0% { opacity: 0; transform: scale(0.4); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes tvHubPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }
        @keyframes tvHubGlow {
          0%, 100% { opacity: 0.14; }
          50% { opacity: 0.36; }
        }
        @keyframes tvFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .tv-line {
          stroke-dasharray: ${DASH};
          stroke-dashoffset: ${DASH};
          opacity: 0;
          animation: tvLineReveal 1.7s cubic-bezier(0.22, 0.61, 0.36, 1) 0.3s forwards;
        }
        .tv-dot {
          transform-box: fill-box;
          transform-origin: center;
          animation: tvDotPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        .tv-hub {
          transform-box: fill-box;
          transform-origin: center;
          animation: tvHubPop 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) 1.1s both,
            tvHubPulse 2.8s ease-in-out 1.65s infinite;
        }
        .tv-hub-glow {
          transform-box: fill-box;
          transform-origin: center;
          animation: tvHubGlow 2.8s ease-in-out 1.65s infinite;
        }
        .tv-fade { animation: tvFade 0.4s ease-out both; }
        @media (prefers-reduced-motion: reduce) {
          .tv-line, .tv-dot, .tv-hub, .tv-hub-glow, .tv-fade {
            animation: none !important;
            opacity: 1 !important;
            stroke-dashoffset: 0 !important;
            transform: none !important;
          }
          .tv-hub-glow { opacity: 0.2 !important; }
        }
      `}</style>

      <div
        className="absolute inset-0 bg-gradient-to-br from-[#E8EDF7] via-[#EEEFF6] to-[#F5EEE0] rounded-[28px]"
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 400 280"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="tv-curve-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#293A66" stopOpacity="0.65" />
            <stop offset="0.42" stopColor="#162347" />
            <stop offset="1" stopColor="#AF7D43" />
          </linearGradient>
          <radialGradient id="tv-hub-grad" cx="35%" cy="35%" r="75%">
            <stop offset="0%" stopColor="#4A5C8A" />
            <stop offset="55%" stopColor="#293A66" />
            <stop offset="100%" stopColor="#0A1530" />
          </radialGradient>
          <radialGradient id="tv-hub-glow-grad">
            <stop offset="0" stopColor="#AF7D43" stopOpacity="0.5" />
            <stop offset="1" stopColor="#AF7D43" stopOpacity="0" />
          </radialGradient>
          <path id="tv-curve-path" d={CURVE} fill="none" />
        </defs>

        {/* Grid lines */}
        {[82, 142, 200].map((y) => (
          <line
            key={y}
            x1="14"
            y1={y}
            x2="392"
            y2={y}
            stroke="#162347"
            strokeOpacity="0.05"
            strokeWidth="1"
            strokeDasharray="4 5"
          />
        ))}

        {/* Growth curve */}
        <path
          d={CURVE}
          stroke="url(#tv-curve-grad)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          className="tv-line"
        />

        {/* Particles */}
        {[0, 1, 2].map((i) => (
          <circle
            key={i}
            r="2.8"
            fill="#AF7D43"
            stroke="rgba(255,255,255,0.65)"
            strokeWidth="0.5"
          >
            <animateMotion
              dur={`${FLOW_DUR}s`}
              repeatCount="indefinite"
              begin={`${1.9 + (i * FLOW_DUR) / 3}s`}
            >
              <mpath href="#tv-curve-path" />
            </animateMotion>
          </circle>
        ))}

        {/* FloatX Ventures inflection badge */}
        <ellipse
          cx="162"
          cy="196"
          rx="50"
          ry="40"
          fill="url(#tv-hub-glow-grad)"
          className="tv-hub-glow"
        />
        <circle
          cx="162"
          cy="196"
          r="32"
          fill="url(#tv-hub-grad)"
          stroke="rgba(175,125,67,0.5)"
          strokeWidth="1.2"
          className="tv-hub"
        />
        <text
          x="162"
          y="191"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fill="white"
          letterSpacing="-0.1"
          className="tv-fade"
          style={{ animationDelay: "1.3s" }}
        >
          FLOATX
        </text>
        <text
          x="162"
          y="205"
          textAnchor="middle"
          fontSize="10"
          fontWeight="600"
          fill="rgba(255,255,255,0.7)"
          letterSpacing="0.5"
          className="tv-fade"
          style={{ animationDelay: "1.35s" }}
        >
          VENTURES
        </text>

        {/* Milestone dots + labels */}
        {milestones.map((m) => (
          <g key={m.label}>
            <circle
              cx={m.cx}
              cy={m.cy}
              r={m.r}
              fill={m.color}
              stroke="rgba(255,255,255,0.55)"
              strokeWidth="0.8"
              className="tv-dot"
              style={{ animationDelay: `${m.delay}s` }}
            />
            <text
              x={m.cx}
              y={m.labelY}
              textAnchor={m.anchor as "start" | "middle" | "end"}
              fontSize="8.5"
              fontWeight="700"
              fill="#162347"
              opacity="0.65"
              letterSpacing="0.8"
              className="tv-fade"
              style={{ animationDelay: `${m.delay + 0.2}s` }}
            >
              {m.label}
            </text>
          </g>
        ))}

        {/* Caption */}
        <text
          x="200"
          y="272"
          textAnchor="middle"
          fontSize="9"
          fontWeight="600"
          fill="#162347"
          opacity="0.42"
          letterSpacing="0.6"
        >
          STARTUP TRAJECTORY · FLOATX VENTURES ECOSYSTEM
        </text>
      </svg>
    </div>
  );
}

export function TechHero() {
  return (
    <section className="bg-cream pt-36 pb-16 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-[1.1fr_1fr] gap-12 min-[900px]:gap-16 items-center">
          <div className="text-center min-[900px]:text-left">
            <Eyebrow>FloatX Ventures</Eyebrow>
            <h1 className="font-serif italic font-normal text-navy text-[clamp(44px,6vw,72px)] leading-[1.05] mt-5 mb-5 max-w-[16ch] mx-auto min-[900px]:mx-0">
              Technology incubator.<br />Success made simple.
            </h1>
            <p className="text-[18px] leading-[1.6] max-w-[520px] text-ink/[0.75] m-0 mb-8 mx-auto min-[900px]:mx-0">
              FloatX Ventures provides investment alongside a complete ecosystem of services — funding, infrastructure, strategic guidance and a global network of accredited investors — to grow your startup.
            </p>
            <Button href="#pitch" variant="primary" shape="pill">
              Pitch your idea
            </Button>
          </div>
          <div>
            <VenturesAnim />
          </div>
        </div>
      </div>
    </section>
  );
}
