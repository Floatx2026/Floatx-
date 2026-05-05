type Wave = {
  yBase: number;
  amplitude: number;
  period: number;
  color: string;
  opacity: number;
  duration: number;
  reverse?: boolean;
};

const waves: Wave[] = [
  { yBase: 60, amplitude: 11, period: 100, color: "var(--color-navy, #162347)", opacity: 0.05, duration: 110, reverse: true },
  { yBase: 70, amplitude: 9,  period: 100, color: "var(--color-navy, #162347)", opacity: 0.09, duration: 70 },
  { yBase: 78, amplitude: 7,  period: 100, color: "var(--color-tan, #AF7D43)",  opacity: 0.16, duration: 48, reverse: true },
  { yBase: 86, amplitude: 5,  period: 100, color: "var(--color-tan, #AF7D43)",  opacity: 0.22, duration: 32 },
  { yBase: 92, amplitude: 3,  period: 100, color: "var(--color-tan, #AF7D43)",  opacity: 0.30, duration: 22, reverse: true },
];

const SAMPLES = 96;

function buildWavePath({ yBase, amplitude, period }: Wave) {
  const startX = -period;
  const endX = period * 2;
  const span = endX - startX;
  const pts: string[] = [];
  for (let i = 0; i <= SAMPLES; i++) {
    const x = startX + (span * i) / SAMPLES;
    const y = yBase + amplitude * Math.sin((2 * Math.PI * x) / period);
    pts.push(`${i === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  pts.push(`L${endX} 100`);
  pts.push(`L${startX} 100`);
  pts.push("Z");
  return pts.join(" ");
}

function buildWaveStroke({ yBase, amplitude, period }: Wave) {
  const startX = -period;
  const endX = period * 2;
  const span = endX - startX;
  const pts: string[] = [];
  for (let i = 0; i <= SAMPLES; i++) {
    const x = startX + (span * i) / SAMPLES;
    const y = yBase + amplitude * Math.sin((2 * Math.PI * x) / period);
    pts.push(`${i === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  return pts.join(" ");
}

export function WaveField() {
  return (
    <div className="wave-field absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <style>{`
          .wave-layer {
            animation-name: cpWaveDrift;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            transform-box: view-box;
            will-change: transform;
          }
          @keyframes cpWaveDrift {
            from { transform: translateX(0); }
            to   { transform: translateX(-100px); }
          }
          @media (prefers-reduced-motion: reduce) {
            .wave-layer { animation: none; }
          }
        `}</style>

        <defs>
          <linearGradient id="cp-wave-mask" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="black" />
            <stop offset="35%" stopColor="black" />
            <stop offset="100%" stopColor="white" />
          </linearGradient>
          <mask id="cp-wave-fade">
            <rect width="100" height="100" fill="url(#cp-wave-mask)" />
          </mask>
        </defs>

        <g mask="url(#cp-wave-fade)">
          {waves.map((w, i) => (
            <g
              key={i}
              className="wave-layer"
              style={{
                animationDuration: `${w.duration}s`,
                animationDirection: w.reverse ? "reverse" : "normal",
              }}
            >
              <path d={buildWavePath(w)} fill={w.color} fillOpacity={w.opacity} />
              <path
                d={buildWaveStroke(w)}
                fill="none"
                stroke={w.color}
                strokeOpacity={Math.min(0.5, w.opacity + 0.15)}
                strokeWidth="0.18"
              />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
