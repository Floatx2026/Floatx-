import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { articles } from "@/lib/insights";

export const metadata = {
  title: "All insights — FloatX",
  description:
    "The full FloatX insights archive — original commentary written for allocators, not press releases.",
};

export default function InsightsArchivePage() {
  return (
    <>
      <section className="bg-cream pt-36 pb-16">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex items-center gap-2 text-[12.5px] text-ink/55 mb-5 font-medium tracking-wide">
            <Link
              href="/insights"
              className="hover:text-navy transition-colors duration-150"
            >
              Insights
            </Link>
            <span aria-hidden="true">›</span>
            <span className="text-ink/70">All</span>
          </div>
          <Eyebrow>Archive</Eyebrow>
          <h1 className="font-serif italic font-normal text-navy text-[clamp(40px,5.4vw,64px)] leading-[1.05] mt-5 mb-5 max-w-[18ch]">
            Every insight, in one place.
          </h1>
          <p className="text-[17px] leading-[1.65] max-w-[640px] text-ink/[0.75] m-0">
            Original commentary from the FloatX team — strategy, private trading, funds and the AU/APAC private market in plain language.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[13px] text-ink/55 m-0 mb-8 font-medium tracking-wide uppercase">
            {articles.length} {articles.length === 1 ? "article" : "articles"}
          </p>
          <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[1024px]:grid-cols-3 gap-6">
            {articles.map((a) => (
              <ArticleCard key={a.href} a={a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
