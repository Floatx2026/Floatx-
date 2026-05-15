const stats = [
  { value: "63K+",  label: "APAC Media Contacts" },
  { value: "880K+", label: "Global Media Contacts" },
  { value: "30+",   label: "Years of Capital Markets Expertise" },
];

export function BusinessStats() {
  return (
    <section className="bg-navy py-20">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <p className="font-sans font-medium text-tan text-[13px] tracking-[1.6px] uppercase mb-12">
          Our Global Network
        </p>
        <div className="grid grid-cols-1 min-[600px]:grid-cols-3 gap-10 min-[600px]:gap-6">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-serif italic font-normal text-tan text-[clamp(40px,5vw,64px)] leading-none m-0 mb-2">
                {s.value}
              </p>
              <p className="font-sans text-white/70 text-[14px] leading-[1.5] m-0 max-w-[18ch] mx-auto">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
