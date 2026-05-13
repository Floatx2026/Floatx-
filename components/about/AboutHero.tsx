export function AboutHero() {
  return (
    <section className="bg-page-bg pt-28 pb-0">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="bg-navy rounded-[24px] px-10 min-[800px]:px-16 py-16">
          <span className="inline-block bg-white/10 text-white/80 rounded-full px-4 py-1.5 text-[13px] font-medium mb-6">
            About FloatX
          </span>
          <h1 className="font-serif italic font-normal text-white text-[clamp(36px,4.5vw,56px)] leading-[1.05] m-0 mb-6">
            About us
          </h1>
          <p className="text-[18px] leading-[1.65] text-white/75 m-0 max-w-[58ch]">
            Our private trading ecosystem enables trading in the widest online range of private
            investments, supported by blockchain technology — connecting investors and companies
            to trade private shares, debt opportunities, capital and fund raising.
          </p>
        </div>
      </div>
    </section>
  );
}
