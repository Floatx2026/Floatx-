type Dot = {
  radius: number;
  size: number;
  startAngle: number;
  duration: number;
  reverse?: boolean;
  color?: string;
};

const cx = 50;
const cy = 50;

const rings = [16, 24, 32, 40, 48];

const dots: Dot[] = [
  { radius: 16, size: 0.7, startAngle: 0,   duration: 14, color: "var(--color-navy, #162347)" },
  { radius: 16, size: 0.4, startAngle: 200, duration: 14, color: "var(--color-tan, #AF7D43)" },
  { radius: 24, size: 1.0, startAngle: 60,  duration: 22, color: "var(--color-tan, #AF7D43)" },
  { radius: 24, size: 0.6, startAngle: 240, duration: 22, color: "var(--color-navy, #162347)" },
  { radius: 32, size: 0.5, startAngle: 30,  duration: 36, reverse: true, color: "var(--color-navy, #162347)" },
  { radius: 32, size: 0.9, startAngle: 180, duration: 36, reverse: true, color: "var(--color-tan, #AF7D43)" },
  { radius: 40, size: 1.2, startAngle: 100, duration: 52, color: "var(--color-navy, #162347)" },
  { radius: 40, size: 0.6, startAngle: 290, duration: 52, color: "var(--color-tan, #AF7D43)" },
  { radius: 48, size: 0.5, startAngle: 150, duration: 70, reverse: true, color: "var(--color-navy, #162347)" },
  { radius: 48, size: 0.8, startAngle: 330, duration: 70, reverse: true, color: "var(--color-tan, #AF7D43)" },
];

export function OrbitField() {
  return (
    <div className="orbit-field absolute inset-0 pointer-events-none" aria-hidden="true">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        <style>{`
          .orbit-dot {
            animation-name: cpOrbit;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            transform-origin: 50px 50px;
            transform-box: view-box;
            will-change: transform;
          }
          @keyframes cpOrbit {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          @media (prefers-reduced-motion: reduce) {
            .orbit-dot { animation: none; }
          }
        `}</style>
        <defs>
          <radialGradient id="orbit-fade" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="55%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0.15" />
          </radialGradient>
          <mask id="orbit-mask">
            <rect width="100" height="100" fill="url(#orbit-fade)" />
          </mask>
        </defs>

        <g mask="url(#orbit-mask)">
          {rings.map((r) => (
            <circle
              key={r}
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              stroke="var(--color-navy, #162347)"
              strokeOpacity="0.07"
              strokeWidth="0.12"
            />
          ))}
          {dots.map((d, i) => (
            <g
              key={i}
              className="orbit-dot"
              style={{
                transformOrigin: `${cx}px ${cy}px`,
                transformBox: "view-box",
                animationDuration: `${d.duration}s`,
                animationDirection: d.reverse ? "reverse" : "normal",
                animationDelay: `${-(d.duration * (d.startAngle / 360))}s`,
              }}
            >
              <circle
                cx={cx + d.radius}
                cy={cy}
                r={d.size}
                fill={d.color}
                opacity={0.85}
              />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
