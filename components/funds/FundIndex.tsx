import { Button } from "@/components/ui/Button";
import { IndexChart } from "./IndexChart";

const tickers = [
  { name: "AIMS Growth Funds",          nav: "$184.20", change: "+18.42%", positive: true },
  { name: "AIMS Unicorn AI Fund",       nav: "$92.05",  change: "-4.18%",  positive: false },
  { name: "SpaceX Fund",                nav: "$211.77", change: "+12.06%", positive: true },
  { name: "AIMS – Asian Unicorn Fund",  nav: "$148.93", change: "+6.31%",  positive: true },
];

export function FundIndex() {
  return (
    <section className="bg-line-soft py-16">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 min-[1024px]:grid-cols-[1fr_320px] gap-10">
        <div>
          <div className="flex items-baseline gap-3 mb-1">
            <h2 className="font-sans font-bold text-navy text-[34px] leading-none -tracking-[0.01em]">
              FloatX Unicorn Fund Index
            </h2>
            <span className="text-[12px] text-ink/55 inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-tan inline-block" />
              Updated today, 9:05 AM AEST
            </span>
          </div>
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-[28px] font-bold text-ink">218.43</span>
            <span className="text-[14px] font-medium text-emerald-600">+118.43%</span>
            <span className="text-[12px] text-ink/55">all time</span>
          </div>

          <IndexChart />

          <p className="text-[12px] text-ink/55 mt-6 mb-4">
            NAVs are updated daily. Returns reflect the trailing 90-day window.
          </p>

          <div className="grid grid-cols-2 min-[700px]:grid-cols-4 gap-3">
            {tickers.map((t) => (
              <div
                key={t.name}
                className="bg-white border border-line rounded-[12px] px-4 py-3 text-center"
              >
                <p className="text-[12px] text-ink/65 m-0 mb-1 truncate">{t.name}</p>
                <p className="text-[16px] font-bold text-ink m-0">{t.nav}</p>
                <p
                  className={`text-[12px] font-medium m-0 mt-0.5 ${
                    t.positive ? "text-emerald-600" : "text-rose-600"
                  }`}
                >
                  {t.change}
                </p>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-ink/55 mt-5 leading-[1.6] max-w-[640px]">
            The FloatX Unicorn Fund Index is provided for informational and educational purposes only and is not a recommendation to invest in any fund. See full <a href="#" className="underline">disclaimers</a>.
          </p>
        </div>

        <aside className="hidden min-[1024px]:block">
          <div className="border-t-2 border-tan w-12 mb-6" />
          <p className="text-[15px] leading-[1.65] text-ink/[0.78] mb-6">
            The FloatX Unicorn Fund Index is a NAV-weighted performance index of the most-allocated private funds on the FloatX platform — drawn directly from live commitments and redemptions across our investor base.
          </p>
          <Button href="#" variant="primary" shape="pill" className="text-[14px]! px-6! py-2.5!">
            Learn more →
          </Button>

          <div className="mt-8 bg-white border border-line rounded-[16px] p-5">
            <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.12em] font-semibold text-tan border border-tan/40 px-2 py-0.5 rounded-full mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-tan animate-pulse" aria-hidden="true" />
              Coming Soon
            </span>
            <p className="font-sans font-bold text-navy text-[14.5px] leading-[1.35] m-0 mb-3">
              Alternatives Multi Asset Fund
            </p>
            <ul className="m-0 p-0 list-none flex flex-col gap-1.5">
              {["Private equity", "Private credit", "Venture capital", "Real estate & infrastructure", "Hedge funds"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[12.5px] text-ink/65 leading-[1.5]">
                  <span className="w-1 h-1 rounded-full bg-tan flex-none" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
