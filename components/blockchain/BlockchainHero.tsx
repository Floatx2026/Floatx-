import Image from "next/image";

const bullets = [
  "Fraudulent trades are impossible",
  "Transactions are immutably recorded",
  "Audits can occur in real-time",
];

export function BlockchainHero() {
  return (
    <section className="bg-navy pt-36 pb-0 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 min-[900px]:grid-cols-2 gap-12 items-end">

        {/* Left — copy */}
        <div className="pb-20">
          <span className="inline-block bg-white/10 text-white/75 rounded-full px-4 py-1.5 text-[13px] font-medium mb-6">
            Technology
          </span>
          <h1 className="font-serif italic font-normal text-white text-[clamp(36px,5vw,60px)] leading-[1.05] m-0 mb-6 max-w-[16ch]">
            Revolutionising private trading through blockchain technology
          </h1>

          <p className="text-[17px] text-white/65 m-0 mb-6">Imagine a trading platform where:</p>

          <ul className="list-none m-0 p-0 flex flex-col gap-3 mb-10">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-tan/20 inline-flex items-center justify-center">
                  <svg viewBox="0 0 12 12" className="w-3 h-3" aria-hidden="true">
                    <path d="M2 6l3 3 5-5" stroke="#AF7D43" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </span>
                <span className="text-[16px] text-white/80 leading-[1.5]">{b}</span>
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

        {/* Right — hero image */}
        <div className="hidden min-[900px]:flex items-end justify-center">
          <div className="relative w-full max-w-[520px]">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-tan/10 rounded-t-[24px] blur-3xl scale-95 translate-y-4" />
            <Image
              src="/blockchain-hero.png"
              alt="Blockchain trading platform visualisation"
              width={520}
              height={400}
              className="relative w-full h-auto object-contain rounded-t-[16px]"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
