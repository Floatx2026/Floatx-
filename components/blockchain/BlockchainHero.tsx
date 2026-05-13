const bullets = [
  "Fraudulent trades are impossible",
  "Transactions are immutably recorded",
  "Audits can occur in real-time",
];

export function BlockchainHero() {
  return (
    <section className="bg-page-bg pt-28 pb-0">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="bg-navy rounded-[24px] overflow-hidden grid grid-cols-1 min-[900px]:grid-cols-2 gap-0 items-center">

          {/* Left — copy */}
          <div className="px-10 min-[900px]:px-16 py-16">
            <span className="inline-block bg-white/10 text-white/75 rounded-full px-4 py-1.5 text-[13px] font-medium mb-6">
              Technology
            </span>
            <h1 className="font-serif italic font-normal text-white text-[clamp(32px,4vw,52px)] leading-[1.05] m-0 mb-6 max-w-[16ch]">
              Revolutionising private trading through blockchain technology
            </h1>

            <p className="text-[16px] text-white/65 m-0 mb-5">Imagine a trading platform where:</p>

            <ul className="list-none m-0 p-0 flex flex-col gap-3 mb-10">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-tan/20 inline-flex items-center justify-center">
                    <svg viewBox="0 0 12 12" className="w-3 h-3" aria-hidden="true">
                      <path d="M2 6l3 3 5-5" stroke="#AF7D43" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </span>
                  <span className="text-[15px] text-white/80 leading-[1.5]">{b}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://app.floatx.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans font-medium text-[15px] rounded-full px-7 py-[13px] bg-tan text-white hover:bg-[#9A6D38] transition-colors duration-150"
            >
              Get early access
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Right — iPad frame with image */}
          <div className="hidden min-[900px]:flex items-center justify-center h-full bg-navy py-12 px-10">
            <div className="relative w-full max-w-[420px]">
              {/* iPad outer frame */}
              <div className="bg-[#1a1a2e] rounded-[28px] p-3 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
                {/* Top notch bar */}
                <div className="flex items-center justify-center mb-2">
                  <div className="w-16 h-[5px] rounded-full bg-[#333355]" />
                </div>
                {/* Screen */}
                <div className="rounded-[18px] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/blockchain-hero.png"
                    alt="Blockchain trading platform visualisation"
                    className="w-full h-auto object-cover block"
                  />
                </div>
                {/* Bottom home indicator */}
                <div className="flex items-center justify-center mt-2">
                  <div className="w-20 h-[4px] rounded-full bg-[#333355]" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
