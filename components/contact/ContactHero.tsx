export function ContactHero() {
  return (
    <section className="bg-page-bg pt-28 pb-0">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="relative bg-navy rounded-[24px] overflow-hidden grid grid-cols-1 min-[800px]:grid-cols-[1fr_300px] items-stretch">
          <div className="px-10 min-[800px]:px-16 py-16">
            <h1 className="font-serif italic font-normal text-white text-[clamp(36px,4.5vw,56px)] leading-[1.1] m-0 mb-5">
              Contact us
            </h1>
            <p className="text-white/70 text-[18px] leading-[1.65] m-0 max-w-[34ch]">
              Get in touch, and invest in the extraordinary, starting today.
            </p>
          </div>

          {/* Glass building illustration */}
          <div className="hidden min-[800px]:block relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a2d5a] to-navy-deep" />
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 300 260"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              {/* Vertical columns */}
              {[0, 50, 100, 150, 200, 250, 300].map((x) => (
                <line key={`v${x}`} x1={x} y1="0" x2={x} y2="260" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
              ))}
              {/* Horizontal floors */}
              {Array.from({ length: 14 }, (_, i) => i * 20).map((y) => (
                <line key={`h${y}`} x1="0" y1={y} x2="300" y2={y} stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
              ))}
              {/* Highlight panes */}
              <rect x="50" y="0" width="50" height="80" fill="rgba(175,125,67,0.12)" />
              <rect x="150" y="40" width="50" height="60" fill="rgba(46,163,242,0.08)" />
              <rect x="0" y="100" width="50" height="40" fill="rgba(255,255,255,0.05)" />
              <rect x="200" y="0" width="50" height="100" fill="rgba(255,255,255,0.04)" />
              <rect x="100" y="120" width="50" height="80" fill="rgba(175,125,67,0.07)" />
              {/* Reflective sheen */}
              <rect x="0" y="0" width="300" height="260" fill="url(#sheen)" />
              <defs>
                <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="100%" stopColor="rgba(175,125,67,0.08)" />
                </linearGradient>
              </defs>
            </svg>
            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-navy/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
