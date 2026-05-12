import Image from "next/image";

const features = [
  { name: "Private trading — with market depth", floatx: true,  forge: false, carta: false, addx: false, npm: false },
  { name: "Capital raising",                     floatx: true,  forge: false, carta: false, addx: true,  npm: true  },
  { name: "Fund investments",                    floatx: true,  forge: false, carta: false, addx: true,  npm: false },
  { name: "Debt investments",                    floatx: true,  forge: false, carta: false, addx: true,  npm: false },
  { name: "Property investments",                floatx: true,  forge: false, carta: false, addx: false, npm: false },
  { name: "Digital wallet services",             floatx: true,  forge: false, carta: false, addx: true,  npm: false },
  { name: "Global FX payments",                  floatx: true,  forge: false, carta: false, addx: false, npm: false },
  { name: "AI integrations",                     floatx: true,  forge: false, carta: false, addx: false, npm: false },
  { name: "Custodian services",                  floatx: true,  forge: false, carta: false, addx: true,  npm: false },
  { name: "Blockchain services",                 floatx: true,  forge: false, carta: false, addx: true,  npm: false },
];

const competitors = [
  {
    key:       "floatx",
    label:     "FloatX",
    sublabel:  "Our platform",
    logo:      null,          // uses floatx-logo-white.svg
    favicon:   null,
    highlight: true,
  },
  {
    key:       "forge",
    label:     "Forge",
    sublabel:  "forge.global",
    logo:      null,
    favicon:   "forge.global",
    highlight: false,
  },
  {
    key:       "carta",
    label:     "Carta",
    sublabel:  "carta.com",
    logo:      null,
    favicon:   "carta.com",
    highlight: false,
  },
  {
    key:       "addx",
    label:     "ADDX",
    sublabel:  "addx.co",
    logo:      null,
    favicon:   "addx.co",
    highlight: false,
  },
  {
    key:       "npm",
    label:     "NPM",
    sublabel:  "Nasdaq Private",
    logo:      null,
    favicon:   "nasdaqprivatemarket.com",
    highlight: false,
  },
] as const;

function Check({ yes }: { yes: boolean }) {
  return yes ? (
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E6F6EE] transition-transform duration-200 group-hover:scale-110">
      <svg viewBox="0 0 20 20" className="w-4 h-4" aria-label="Yes">
        <path d="M4 10l4.5 4.5L16 6" stroke="#16A35A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </span>
  ) : (
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#F4F4F6]">
      <svg viewBox="0 0 20 20" className="w-4 h-4" aria-label="No">
        <path d="M6 6l8 8M14 6l-8 8" stroke="#C8C8D0" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    </span>
  );
}

export function ComparisonTable() {
  return (
    <section className="bg-page-bg py-20">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-serif italic font-normal text-navy text-[clamp(26px,3.5vw,40px)] leading-[1.2] m-0 mb-3">
            Unmatched choice in private markets: compare investment options
          </h2>
          <p className="text-[16px] text-ink/65 m-0">
            Simplify your search: compare private investment platforms
          </p>
        </div>

        {/* Table — scrollable on mobile */}
        <div className="overflow-x-auto rounded-[20px] shadow-[0_12px_40px_-12px_rgba(22,35,71,0.18)]">
          <table className="w-full min-w-[680px] border-collapse">

            {/* ── Header ─────────────────────────────────────────────── */}
            <thead>
              <tr className="bg-navy">
                {/* Feature column label */}
                <th className="text-left text-white/60 text-[12px] font-medium px-7 py-6 rounded-tl-[20px] w-[34%] uppercase tracking-[0.08em]">
                  Feature
                </th>

                {competitors.map((c, i) => (
                  <th
                    key={c.key}
                    className={`text-center px-4 py-6 ${i === competitors.length - 1 ? "rounded-tr-[20px]" : ""} ${c.highlight ? "bg-white/[0.07]" : ""}`}
                  >
                    {/* Best badge above FloatX */}
                    {c.highlight && (
                      <span className="block mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-tan bg-tan/20 rounded-full px-2.5 py-0.5 w-fit mx-auto">
                        Best
                      </span>
                    )}

                    {/* Logo / favicon */}
                    <div className="flex justify-center mb-2">
                      {c.highlight ? (
                        /* FloatX white logo */
                        <div className="h-7 flex items-center">
                          <Image
                            src="/floatx-logo-white.svg"
                            alt="FloatX"
                            width={72}
                            height={16}
                            className="h-4 w-auto"
                          />
                        </div>
                      ) : c.favicon ? (
                        /* Competitor favicon in white pill */
                        <div className="w-8 h-8 rounded-lg bg-white/90 flex items-center justify-center overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={`https://www.google.com/s2/favicons?domain=${c.favicon}&sz=64`}
                            alt={c.label}
                            width={22}
                            height={22}
                            className="object-contain"
                          />
                        </div>
                      ) : null}
                    </div>

                    {/* Label */}
                    <span className={`block text-[13px] font-semibold ${c.highlight ? "text-tan" : "text-white/80"}`}>
                      {c.label}
                    </span>
                    <span className="block text-[10px] text-white/40 mt-0.5 font-normal">
                      {c.sublabel}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>

            {/* ── Rows ───────────────────────────────────────────────── */}
            <tbody>
              {features.map((f, i) => {
                const isLast = i === features.length - 1;
                return (
                  <tr
                    key={f.name}
                    className={`group border-b border-line/50 transition-colors duration-150 cursor-default
                      ${i % 2 === 0 ? "bg-white" : "bg-[#FAFBFE]"}
                      hover:bg-[#EEF3FF]
                      ${isLast ? "last-of-type:border-b-0" : ""}
                    `}
                  >
                    {/* Feature name — slides right on hover */}
                    <td className={`px-7 py-4 text-[14px] text-navy/85 font-medium ${isLast ? "rounded-bl-[20px]" : ""}`}>
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                        {f.name}
                      </span>
                    </td>

                    {/* Competitor cells */}
                    {competitors.map((c, ci) => (
                      <td
                        key={c.key}
                        className={`px-4 py-4 text-center transition-colors duration-150
                          ${c.highlight ? "bg-tan/[0.04] group-hover:bg-tan/[0.09]" : ""}
                          ${ci === competitors.length - 1 && isLast ? "rounded-br-[20px]" : ""}
                        `}
                      >
                        <div className="flex justify-center">
                          <Check yes={f[c.key]} />
                        </div>
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>

          </table>
        </div>

        {/* Note */}
        <p className="text-center text-[12px] text-ink/40 mt-5 m-0">
          Based on publicly available platform information. FloatX comparison is indicative only.
        </p>
      </div>
    </section>
  );
}
