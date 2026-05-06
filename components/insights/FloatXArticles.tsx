import Link from "next/link";
import { articles } from "@/lib/insights";
import { ArticleCard } from "./ArticleCard";

const HOME_LIMIT = 4;

export function FloatXArticles() {
  const recent = articles.slice(0, HOME_LIMIT);
  const hasMore = articles.length > HOME_LIMIT;

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col min-[700px]:flex-row min-[700px]:items-end min-[700px]:justify-between gap-6 mb-12">
          <div className="max-w-[640px]">
            <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.4vw,40px)] leading-[1.15] m-0 mb-3">
              Written by FloatX.
            </h2>
            <p className="text-[16px] leading-[1.65] text-ink/[0.78] m-0">
              Original commentary from our team — written for allocators, not press releases.
            </p>
          </div>
          {hasMore && (
            <Link
              href="/insights/all"
              className="self-start min-[700px]:self-end inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy uppercase tracking-[0.10em] hover:text-tan transition-colors duration-150"
            >
              View all insights
              <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[1024px]:grid-cols-4 gap-5">
          {recent.map((a) => (
            <ArticleCard key={a.href} a={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
