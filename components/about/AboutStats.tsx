const stats = [
  { value: "30+", label: "Years of financial services" },
  { value: "$4B+", label: "Funds raised since 1999" },
  { value: "$4.1B", label: "Investment assets acquired" },
  { value: "4", label: "Countries of operation" },
];

export function AboutStats() {
  return (
    <section className="bg-navy-deep py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 min-[700px]:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif italic font-normal text-tan text-[clamp(32px,4vw,48px)] leading-none m-0 mb-2">
                {s.value}
              </p>
              <p className="text-[14px] text-white/60 m-0 leading-[1.4]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
