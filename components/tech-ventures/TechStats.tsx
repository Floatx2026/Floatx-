const stats = [
  { value: "$4B+", label: "Assets under management", note: "Across AIMS Financial Group since 1999" },
  { value: "33", label: "Years operating experience", note: "Backing founders since 1991" },
];

export function TechStats() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-[11.5px] uppercase tracking-[0.14em] font-semibold text-ink/45 mb-3 text-center">
          Facts &amp; figures
        </p>
        <p className="text-center text-[15px] text-ink/60 leading-[1.6] mb-14 max-w-[52ch] mx-auto">
          FloatX Ventures&apos; performance metrics underscore our commitment to providing a thriving ecosystem for startup investments.
        </p>
        <div className="grid grid-cols-1 min-[600px]:grid-cols-2 gap-10 text-center max-w-[640px] mx-auto">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-serif italic font-normal text-navy text-[clamp(52px,6.5vw,76px)] leading-none m-0 mb-2">
                {s.value}
              </p>
              <p className="font-sans font-semibold text-navy text-[15px] leading-[1.4] m-0 mb-1">
                {s.label}
              </p>
              <p className="text-[13px] text-ink/50 leading-[1.5] m-0">{s.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
