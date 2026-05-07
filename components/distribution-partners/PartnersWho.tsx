const audiences = [
  { title: "Independent Financial Advisors", note: "Holding an AFSL or operating as an authorised representative." },
  { title: "Brokers & Wholesale Dealers", note: "Equities, fixed income and alternatives, AU and APAC." },
  { title: "Family Offices", note: "Single and multi-family, allocating across illiquid alts." },
  { title: "Wealth Managers & Private Banks", note: "Servicing sophisticated and professional investor clients." },
  { title: "Accountants under s708(11)", note: "Issuing certificates and advising wholesale clients." },
];

export function PartnersWho() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-[0.85fr_1fr] gap-12 min-[900px]:gap-16 items-start">
          <div>
            <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.4vw,40px)] leading-[1.15] m-0 mb-5">
              Who this is for.
            </h2>
            <p className="text-[16.5px] leading-[1.7] text-ink/75 m-0">
              FloatX is wholesale-only under s708 of the Corporations Act. We partner with licensed professionals who already serve sophisticated clients — and want a curated, AU/APAC-focused alts platform behind them.
            </p>
          </div>
          <ul className="m-0 p-0 list-none grid grid-cols-1 gap-3">
            {audiences.map((a) => (
              <li
                key={a.title}
                className="bg-white border border-line rounded-[14px] px-5 py-4 flex items-start gap-4 transition-all duration-200 ease-out hover:translate-y-0.5 hover:bg-[#f0ede6] hover:shadow-[inset_0_4px_14px_-2px_rgba(22,35,71,0.18)]"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 w-1.5 h-1.5 rounded-full bg-tan flex-none"
                />
                <div className="min-w-0">
                  <p className="font-sans font-bold text-navy text-[15.5px] leading-[1.35] m-0 mb-1">
                    {a.title}
                  </p>
                  <p className="text-[13.5px] leading-[1.55] text-ink/65 m-0">{a.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
