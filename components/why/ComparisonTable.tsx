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

function Check({ yes }: { yes: boolean }) {
  return yes ? (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#E8F6EF]">
      <svg viewBox="0 0 20 20" className="w-4 h-4" aria-label="Yes">
        <path d="M5 10l4 4 6-7" stroke="#1A9E5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </span>
  ) : (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#F5F5F5]">
      <svg viewBox="0 0 20 20" className="w-4 h-4" aria-label="No">
        <path d="M6 6l8 8M14 6l-8 8" stroke="#BDBDBD" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    </span>
  );
}

const competitors = [
  { key: "floatx",  label: "FloatX",  highlight: true  },
  { key: "forge",   label: "Forge",   highlight: false },
  { key: "carta",   label: "carta",   highlight: false },
  { key: "addx",    label: "ADDX",    highlight: false },
  { key: "npm",     label: "NPM",     highlight: false },
] as const;

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
        <div className="overflow-x-auto rounded-[18px] shadow-[0_8px_32px_-12px_rgba(22,35,71,0.14)]">
          <table className="w-full min-w-[640px] border-collapse">
            {/* Header */}
            <thead>
              <tr className="bg-navy">
                <th className="text-left text-white/80 text-[13px] font-medium px-6 py-5 rounded-tl-[18px] w-[36%]">
                  Feature
                </th>
                {competitors.map((c, i) => (
                  <th
                    key={c.key}
                    className={`text-center px-4 py-5 text-[13px] font-semibold ${
                      i === competitors.length - 1 ? "rounded-tr-[18px]" : ""
                    } ${c.highlight ? "text-tan" : "text-white/80"}`}
                  >
                    {c.label}
                    {c.highlight && (
                      <span className="block text-[10px] font-normal text-tan/70 mt-0.5">our platform</span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Rows */}
            <tbody>
              {features.map((f, i) => (
                <tr
                  key={f.name}
                  className={`border-b border-line/60 ${i % 2 === 0 ? "bg-white" : "bg-[#FAFBFE]"} ${
                    i === features.length - 1 ? "last:rounded-b-[18px]" : ""
                  }`}
                >
                  <td className={`px-6 py-4 text-[14px] text-navy/85 font-medium ${i === features.length - 1 ? "rounded-bl-[18px]" : ""}`}>
                    {f.name}
                  </td>
                  {competitors.map((c, ci) => (
                    <td
                      key={c.key}
                      className={`px-4 py-4 text-center ${
                        c.highlight ? "bg-tan/[0.04]" : ""
                      } ${ci === competitors.length - 1 && i === features.length - 1 ? "rounded-br-[18px]" : ""}`}
                    >
                      <div className="flex justify-center">
                        <Check yes={f[c.key]} />
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
