const stats = [
  { value: "$100M+", label: "of fund commitments placed", note: "i" },
  { value: ">180",   label: "Global Alternative Investment Fund Strategies", note: "ii" },
  { value: "$3.2B+", label: "of live fund opportunities on the platform", note: "iii" },
];

export function BigStats() {
  return (
    <section className="bg-page-bg pt-20 pb-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.6vw,42px)] leading-[1.15] text-center max-w-[780px] mx-auto mb-14">
          Trusted by family offices and institutions placing private capital across the region.
        </h2>

        <div className="grid grid-cols-1 min-[600px]:grid-cols-3 gap-4">
          {stats.map((s, i) => {
            const tinted = i === 0 || i === 2;
            return (
              <div
                key={s.value}
                className={`rounded-[18px] px-6 py-10 text-center ${
                  tinted
                    ? "bg-gradient-to-b from-[#E5ECF8] to-[#D6E2F2]"
                    : "bg-cream"
                }`}
              >
                <p className="font-sans font-bold text-navy text-[clamp(32px,3.2vw,44px)] leading-none -tracking-[0.02em] m-0">
                  {s.value}
                  <sup className="text-[12px] font-medium text-ink/55 ml-0.5 align-super">{s.note}</sup>
                </p>
                <p className="text-[14px] text-ink/70 mt-3 leading-[1.5] m-0">{s.label}</p>
              </div>
            );
          })}
        </div>

        <p className="text-[11px] text-ink/55 mt-6 max-w-[760px] leading-[1.6]">
          <sup>i</sup> Based on a trailing 6-month rolling average of placed commitments. <sup>ii</sup> FloatX internal listing as at 31 March 2026. <sup>iii</sup> Total NAV of fund opportunities currently open to FloatX members.
        </p>
      </div>
    </section>
  );
}
