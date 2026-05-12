const pillars = [
  {
    title: "No central authority",
    blurb: "Records are distributed across nodes — no single point of failure or control.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="4"  cy="6"  r="2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="20" cy="6"  r="2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="4"  cy="18" r="2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="20" cy="18" r="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M6 7l4 3.5M18 7l-4 3.5M6 17l4-3.5M18 17l-4-3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Unwavering security",
    blurb: "Each block is cryptographically hashed and chained — making historical records mathematically impossible to alter.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M12 3l8 4v5c0 4.8-3.4 8.8-8 9.5C7.4 20.8 4 16.8 4 12V7l8-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Complete transparency",
    blurb: "All participants see the same ledger — enabling real-time auditing without waiting for periodic reports.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M2 12C2 12 5 5 12 5s10 7 10 7-3 7-10 7S2 12 2 12z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Tamper-proof records",
    blurb: "Transaction records are grouped, hashed and uploaded daily to the blockchain — without centralised storage.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function BlockchainHowItWorks() {
  return (
    <section className="bg-navy-deep py-24">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 min-[960px]:grid-cols-2 gap-16 items-center">

        {/* Left — text */}
        <div>
          <span className="inline-block text-tan text-[11px] font-semibold uppercase tracking-[0.14em] mb-4">
            How it works
          </span>
          <h2 className="font-serif italic font-normal text-white text-[clamp(28px,3.5vw,42px)] leading-[1.2] m-0 mb-5">
            How blockchain works in share trading
          </h2>
          <p className="text-[16px] leading-[1.7] text-white/65 m-0 mb-12">
            FloatX uses distributed ledger technology to create tamper-proof transaction records.
            Each trade is grouped, cryptographically hashed multiple times, then uploaded to the
            blockchain daily — with no centralised storage and no single point of vulnerability.
          </p>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-5">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-white/[0.06] border border-white/[0.08] rounded-[14px] p-5 hover:bg-white/[0.09] transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded-[8px] bg-tan/20 text-tan flex items-center justify-center mb-3">
                  {p.icon}
                </div>
                <p className="font-semibold text-white text-[14px] m-0 mb-1.5">{p.title}</p>
                <p className="text-[13px] leading-[1.6] text-white/55 m-0">{p.blurb}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — blockchain diagram SVG */}
        <div className="flex items-center justify-center">
          <svg
            viewBox="0 0 420 380"
            className="w-full max-w-[420px]"
            aria-label="Blockchain distributed ledger diagram"
            role="img"
          >
            {/* Background glow */}
            <defs>
              <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(175,125,67,0.15)" />
                <stop offset="100%" stopColor="rgba(175,125,67,0)" />
              </radialGradient>
              <filter id="blockShadow">
                <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="rgba(0,0,0,0.4)" />
              </filter>
            </defs>

            <ellipse cx="210" cy="190" rx="180" ry="160" fill="url(#bgGlow)" />

            {/* Chain connector lines */}
            <line x1="90" y1="120" x2="150" y2="120" stroke="rgba(175,125,67,0.5)" strokeWidth="2" strokeDasharray="4 3" />
            <line x1="230" y1="120" x2="290" y2="120" stroke="rgba(175,125,67,0.5)" strokeWidth="2" strokeDasharray="4 3" />

            {/* Block 1 */}
            <g filter="url(#blockShadow)">
              <rect x="20" y="90" width="130" height="120" rx="12" fill="#1E3060" stroke="rgba(175,125,67,0.4)" strokeWidth="1" />
              <rect x="20" y="90" width="130" height="28" rx="12" fill="rgba(175,125,67,0.25)" />
              <rect x="20" y="106" width="130" height="12" fill="rgba(175,125,67,0.25)" />
              <text x="85" y="110" textAnchor="middle" fontSize="9" fill="#AF7D43" fontWeight="700" fontFamily="monospace">BLOCK #1</text>
              <text x="35" y="140" fontSize="7.5" fill="rgba(255,255,255,0.5)" fontFamily="monospace">Hash:</text>
              <text x="35" y="152" fontSize="6.5" fill="rgba(255,255,255,0.35)" fontFamily="monospace">0x4a2f...8c1e</text>
              <text x="35" y="167" fontSize="7.5" fill="rgba(255,255,255,0.5)" fontFamily="monospace">Prev:</text>
              <text x="35" y="179" fontSize="6.5" fill="rgba(255,255,255,0.35)" fontFamily="monospace">0x0000...0000</text>
              <text x="35" y="194" fontSize="7.5" fill="rgba(255,255,255,0.5)" fontFamily="monospace">Tx:</text>
              <text x="35" y="206" fontSize="6.5" fill="#2EA3F2" fontFamily="monospace">Trade confirmed ✓</text>
            </g>

            {/* Arrow head 1→2 */}
            <polygon points="150,115 162,120 150,125" fill="rgba(175,125,67,0.6)" />

            {/* Block 2 */}
            <g filter="url(#blockShadow)">
              <rect x="160" y="90" width="130" height="120" rx="12" fill="#162347" stroke="rgba(175,125,67,0.7)" strokeWidth="1.5" />
              <rect x="160" y="90" width="130" height="28" rx="12" fill="rgba(175,125,67,0.35)" />
              <rect x="160" y="106" width="130" height="12" fill="rgba(175,125,67,0.35)" />
              <text x="225" y="110" textAnchor="middle" fontSize="9" fill="#AF7D43" fontWeight="700" fontFamily="monospace">BLOCK #2</text>
              <text x="175" y="140" fontSize="7.5" fill="rgba(255,255,255,0.6)" fontFamily="monospace">Hash:</text>
              <text x="175" y="152" fontSize="6.5" fill="rgba(255,255,255,0.45)" fontFamily="monospace">0x9d1a...3f7b</text>
              <text x="175" y="167" fontSize="7.5" fill="rgba(255,255,255,0.6)" fontFamily="monospace">Prev:</text>
              <text x="175" y="179" fontSize="6.5" fill="rgba(255,255,255,0.45)" fontFamily="monospace">0x4a2f...8c1e</text>
              <text x="175" y="194" fontSize="7.5" fill="rgba(255,255,255,0.6)" fontFamily="monospace">Tx:</text>
              <text x="175" y="206" fontSize="6.5" fill="#2EA3F2" fontFamily="monospace">Share transfer ✓</text>
            </g>

            {/* Arrow head 2→3 */}
            <polygon points="290,115 302,120 290,125" fill="rgba(175,125,67,0.6)" />

            {/* Block 3 */}
            <g filter="url(#blockShadow)">
              <rect x="300" y="90" width="100" height="120" rx="12" fill="#1E3060" stroke="rgba(175,125,67,0.3)" strokeWidth="1" />
              <rect x="300" y="90" width="100" height="28" rx="12" fill="rgba(175,125,67,0.2)" />
              <rect x="300" y="106" width="100" height="12" fill="rgba(175,125,67,0.2)" />
              <text x="350" y="110" textAnchor="middle" fontSize="8.5" fill="#AF7D43" fontWeight="700" fontFamily="monospace">BLOCK #3</text>
              <text x="315" y="140" fontSize="7" fill="rgba(255,255,255,0.4)" fontFamily="monospace">Hash:</text>
              <text x="315" y="152" fontSize="6" fill="rgba(255,255,255,0.3)" fontFamily="monospace">0x2b8e...d4f0</text>
              <text x="315" y="167" fontSize="7" fill="rgba(255,255,255,0.4)" fontFamily="monospace">Prev:</text>
              <text x="315" y="179" fontSize="6" fill="rgba(255,255,255,0.3)" fontFamily="monospace">0x9d1a...3f7b</text>
              <text x="315" y="196" fontSize="6.5" fill="rgba(255,255,255,0.25)" fontFamily="monospace">Pending...</text>
            </g>

            {/* Distributed nodes below */}
            {[70, 170, 270, 370].map((x, i) => (
              <g key={i}>
                <line x1={x} y1="250" x2="225" y2="240" stroke="rgba(46,163,242,0.2)" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx={x} cy="265" r="18" fill="rgba(22,35,71,0.8)" stroke="rgba(46,163,242,0.3)" strokeWidth="1" />
                <circle cx={x} cy="265" r="5" fill="rgba(46,163,242,0.5)" />
              </g>
            ))}
            <text x="210" y="308" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.35)" fontFamily="sans-serif">Distributed nodes — no central authority</text>

            {/* Verified stamp on block 2 */}
            <g transform="translate(255,65)">
              <circle r="20" fill="rgba(26,163,92,0.2)" stroke="rgba(26,163,92,0.6)" strokeWidth="1.5" />
              <path d="M-7 0l5 5 9-9" stroke="#1AA35C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </g>
          </svg>
        </div>

      </div>
    </section>
  );
}
