export function AboutMission() {
  return (
    <section className="bg-cream py-20 border-b border-line">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 min-[860px]:grid-cols-[200px_1fr] gap-10 items-start">
        <div>
          <span className="inline-block text-tan text-[11px] font-semibold uppercase tracking-[0.14em]">
            Our Mission
          </span>
        </div>
        <div>
          <p className="font-serif italic font-normal text-navy text-[clamp(22px,2.8vw,34px)] leading-[1.35] m-0">
            "To give global investors wider access to high-value private opportunities, which were
            previously not accessible — while providing companies a seamless way to trade privately
            held shares or raise capital."
          </p>
        </div>
      </div>
    </section>
  );
}
