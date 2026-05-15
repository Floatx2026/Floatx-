const stats = [
  { value: "40+",     label: "Access Global Unicorns" },
  { value: "$3.2B+",  label: "of live opportunities on the platform" },
  { value: "#1",      label: "AI & Blockchain powered investment ecosystem" },
];

export function HomeStats() {
  return (
    <section className="bg-page-bg pt-20 pb-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.6vw,42px)] leading-[1.15] text-center max-w-[820px] mx-auto mb-14">
          Trusted by Private Capital Allocators.
        </h2>

        <div className="grid grid-cols-1 min-[700px]:grid-cols-3 gap-4">
          {stats.map((s, i) => {
            const tinted = i === 1;
            return (
              <div
                key={s.value}
                className={`rounded-[18px] px-6 py-12 text-center ${
                  tinted
                    ? "bg-gradient-to-b from-[#E5ECF8] to-[#D6E2F2]"
                    : "bg-cream"
                }`}
              >
                <p className="font-sans font-bold text-navy text-[clamp(36px,3.6vw,52px)] leading-none -tracking-[0.02em] m-0">
                  {s.value}
                </p>
                <p className="text-[14px] text-ink/70 mt-3 leading-[1.5] m-0 max-w-[28ch] mx-auto">
                  {s.label}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-[11px] text-ink/55 mt-6 max-w-[820px] leading-[1.6] text-center mx-auto">
          Live opportunity NAV reflects the total value of investments currently open to FloatX members.
        </p>
      </div>
    </section>
  );
}
