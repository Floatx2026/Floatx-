type CellContent =
  | { type: "check" }
  | { type: "cross"; count?: number }
  | { type: "dollars"; value: string }
  | { type: "highlight"; value: string };

type Row = {
  feature: string;
  note?: string;
  floatx: CellContent;
  other: CellContent;
  exchange: CellContent;
};

const rows: Row[] = [
  {
    feature: "Multiple financial products",
    note: "Private Trading, Capital Raising, Debt, Funds",
    floatx: { type: "check" },
    other: { type: "cross", count: 2 },
    exchange: { type: "cross", count: 4 },
  },
  {
    feature: "Listing fees",
    note: "+ prospectus costs + legal fees + audit fees",
    floatx: { type: "dollars", value: "$" },
    other: { type: "dollars", value: "$$" },
    exchange: { type: "dollars", value: "$$$$" },
  },
  {
    feature: "Time to list",
    floatx: { type: "highlight", value: "Within 48 Hours" },
    other: { type: "highlight", value: "1 – 3 Months" },
    exchange: { type: "highlight", value: "1 – 3 Months" },
  },
  {
    feature: "Ability to set trading rules",
    floatx: { type: "check" },
    other: { type: "cross" },
    exchange: { type: "cross" },
  },
  {
    feature: "Global FX payments",
    floatx: { type: "check" },
    other: { type: "cross" },
    exchange: { type: "cross" },
  },
  {
    feature: "Faster company payouts",
    floatx: { type: "check" },
    other: { type: "cross" },
    exchange: { type: "cross" },
  },
  {
    feature: "Dedicated Go-To-Market support",
    note: "Promotion & PR services",
    floatx: { type: "check" },
    other: { type: "cross" },
    exchange: { type: "cross" },
  },
  {
    feature: "Blockchain services",
    floatx: { type: "check" },
    other: { type: "highlight", value: "Limited" },
    exchange: { type: "cross" },
  },
  {
    feature: "Referral program to drive demand",
    floatx: { type: "highlight", value: "Global" },
    other: { type: "highlight", value: "Limited" },
    exchange: { type: "cross" },
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-label="Yes" className="w-6 h-6 flex-none">
      <circle cx="12" cy="12" r="10" stroke="#2BAE7E" strokeWidth="1.5" />
      <path d="M8 12l3 3 5-5" stroke="#2BAE7E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon({ small = false }: { small?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-label="No"
      className={small ? "w-5 h-5 flex-none" : "w-6 h-6 flex-none"}
    >
      <circle cx="12" cy="12" r="10" stroke="#C4C8D4" strokeWidth="1.5" />
      <path d="M9 9l6 6M15 9l-6 6" stroke="#C4C8D4" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function Cell({ content }: { content: CellContent }) {
  const count = content.type === "cross" ? (content.count ?? 1) : 0;

  if (content.type === "check") {
    return <div className="flex justify-center"><CheckIcon /></div>;
  }
  if (content.type === "cross") {
    return (
      <div className="flex justify-center flex-wrap gap-1">
        {Array.from({ length: count }, (_, i) => (
          <CrossIcon key={i} small={count > 2} />
        ))}
      </div>
    );
  }
  if (content.type === "dollars") {
    return (
      <p className="text-center font-semibold text-navy text-[15px] m-0">{content.value}</p>
    );
  }
  if (content.type === "highlight") {
    return (
      <p className="text-center font-semibold text-tan text-[13px] m-0">{content.value}</p>
    );
  }
  return null;
}

export function ListComparison() {
  return (
    <section className="bg-cream py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-12 max-w-[48ch] mx-auto">
          <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.4vw,40px)] leading-[1.15] m-0 mb-4">
            How FloatX compares.
          </h2>
          <p className="text-[16px] leading-[1.65] text-ink/70 m-0">
            One platform built for private markets — faster, cheaper and more flexible than the alternatives.
          </p>
        </div>

        <div className="overflow-x-auto rounded-[20px] border border-line shadow-[0_4px_24px_-8px_rgba(22,35,71,0.10)]">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr>
                <th className="bg-white text-left px-6 py-5 text-[13px] font-semibold text-ink/45 tracking-wide uppercase border-b border-line w-[38%]">
                  Comparison
                </th>
                <th className="bg-navy text-center px-4 py-5 border-b border-navy/70 w-[20%]">
                  <span className="font-bold text-white text-[17px] tracking-tight">
                    Float<span style={{ color: "#AF7D43" }}>X</span>
                  </span>
                </th>
                <th className="bg-[#EEF2FB] text-center px-4 py-5 text-[13px] font-semibold text-navy/65 border-b border-line leading-snug w-[21%]">
                  Other Private<br />Platforms
                </th>
                <th className="bg-[#EEF2FB] text-center px-4 py-5 text-[13px] font-semibold text-navy/65 border-b border-line leading-snug w-[21%]">
                  Public<br />Exchanges
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.feature} className={`group transition-colors duration-150 ${i < rows.length - 1 ? "border-b border-line" : ""} hover:bg-navy/[0.025]`}>
                  <td className="px-6 py-4 bg-white align-middle">
                    <p className="font-semibold text-navy text-[14.5px] leading-[1.35] m-0">
                      {row.feature}
                    </p>
                    {row.note && (
                      <p className="text-[11.5px] text-ink/50 leading-[1.4] m-0 mt-0.5">
                        ({row.note})
                      </p>
                    )}
                  </td>
                  <td className="px-4 py-4 bg-navy/[0.035] text-center align-middle">
                    <Cell content={row.floatx} />
                  </td>
                  <td className="px-4 py-4 bg-[#F6F8FD] text-center align-middle">
                    <Cell content={row.other} />
                  </td>
                  <td className="px-4 py-4 bg-[#F6F8FD] text-center align-middle">
                    <Cell content={row.exchange} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
