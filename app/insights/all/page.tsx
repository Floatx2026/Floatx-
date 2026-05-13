import { ArticleCard } from "@/components/insights/ArticleCard";
import { articles } from "@/lib/insights";
import { ContactClosing } from "@/components/contact/ContactClosing";

export const metadata = {
  title: "All Insights — FloatX",
  description:
    "Original commentary on private capital from the FloatX team — written for allocators, not press releases.",
};

export default function InsightsArchivePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-page-bg pt-28 pb-0">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-navy rounded-[24px] px-10 min-[800px]:px-16 py-16">
            <span className="inline-block bg-white/10 text-white/80 rounded-full px-4 py-1.5 text-[13px] font-medium mb-6">
              Insights
            </span>
            <h1 className="font-serif italic font-normal text-white text-[clamp(36px,4.5vw,56px)] leading-[1.1] m-0 mb-5">
              Written by FloatX.
            </h1>
            <p className="text-white/70 text-[18px] leading-[1.65] m-0 max-w-[42ch]">
              Original commentary from our team — written for allocators, not press releases.
            </p>
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="bg-page-bg py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[13px] text-ink/55 m-0 mb-8 font-medium tracking-wide uppercase">
            {articles.length} {articles.length === 1 ? "article" : "articles"}
          </p>
          <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[1024px]:grid-cols-3 gap-6">
            {articles.map((a) => (
              <ArticleCard key={a.slug} a={a} />
            ))}
          </div>
        </div>
      </section>

      <ContactClosing />
    </>
  );
}
