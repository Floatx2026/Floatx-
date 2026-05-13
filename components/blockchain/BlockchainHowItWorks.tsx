
const features = [
  {
    title: "No central authority",
    blurb: "No single entity can manipulate the market or control your assets.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M4 10l4.5 4.5L20 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Unwavering security",
    blurb: "Data is encrypted and distributed across a network of computers, making it virtually hack-proof.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M12 3l8 4v5c0 4.8-3.4 8.8-8 9.5C7.4 20.8 4 16.8 4 12V7l8-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Complete transparency",
    blurb: "All participants see the same ledger — enabling real-time auditing without waiting for periodic reports.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M2 12C2 12 5 5 12 5s10 7 10 7-3 7-10 7S2 12 2 12z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Tamper-proof records",
    blurb: "Transaction records are grouped, hashed and uploaded daily to the blockchain — without centralised storage.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function BlockchainHowItWorks() {
  return (
    <section className="bg-[#EEF3FF] py-24">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 min-[960px]:grid-cols-2 gap-16 items-center">

        {/* Left — text + features */}
        <div>
          <h2 className="font-sans font-bold text-navy text-[clamp(26px,3vw,36px)] leading-[1.2] m-0 mb-8">
            How blockchain works<br />in Private Trading
          </h2>

          <div className="flex flex-col gap-4 mb-10">
            <p className="text-[15px] leading-[1.7] text-ink/75 m-0">
              Blockchain's distributed ledger technology creates a secure, tamper-proof record of every transaction.
            </p>
            <p className="text-[15px] leading-[1.7] text-ink/75 m-0">
              These records are then grouped and hashed multiple times, making them impossible to decipher.
            </p>
            <p className="text-[15px] leading-[1.7] text-ink/75 m-0">
              Each day all transactions are uploaded and stored on the blockchain, meaning this data does not have to be stored by any single entity, including us.
            </p>
          </div>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-[10px] bg-navy/10 text-navy flex items-center justify-center flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <p className="font-semibold text-navy text-[15px] m-0 mb-1">{f.title}</p>
                  <p className="text-[13.5px] leading-[1.6] text-ink/65 m-0">{f.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — blue tree image in iPad frame */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-[460px]">
            <div className="bg-[#1a1a2e] rounded-[28px] p-2.5 shadow-[0_32px_64px_-16px_rgba(22,35,71,0.3)]">
              {/* Notch */}
              <div className="flex items-center justify-center mb-1.5">
                <div className="w-14 h-[4px] rounded-full bg-[#333355]" />
              </div>
              {/* Screen — fixed height so image fills it */}
              <div className="rounded-[16px] overflow-hidden bg-[#03122b] h-[380px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/blockchain-tree.png"
                  alt="Blockchain network tree visualisation"
                  className="w-full h-full object-cover object-center block"
                />
              </div>
              {/* Home indicator */}
              <div className="flex items-center justify-center mt-1.5">
                <div className="w-20 h-[4px] rounded-full bg-[#333355]" />
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
