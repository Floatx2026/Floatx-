import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { articles, getArticleBySlug, type BodyBlock } from "@/lib/insights";
import { ContactClosing } from "@/components/contact/ContactClosing";

/* ── Static params ──────────────────────────────────────────── */
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

/* ── Metadata ───────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} — FloatX Insights`,
    description: article.excerpt,
    openGraph: { images: [article.image] },
  };
}

/* ── Body renderer ──────────────────────────────────────────── */
function renderBlock(block: BodyBlock, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={i}
          className="font-sans font-bold text-navy text-[20px] leading-[1.3] mt-10 mb-4 pt-8 border-t border-line first:border-t-0 first:pt-0 first:mt-0"
        >
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p key={i} className="text-[16px] leading-[1.8] text-ink/80 m-0">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="pl-5 flex flex-col gap-2.5 m-0">
          {block.items.map((item, j) => (
            <li key={j} className="text-[16px] leading-[1.8] text-ink/80 list-disc">
              {item}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote
          key={i}
          className="border-l-4 border-tan pl-6 py-1 my-2"
        >
          <p className="font-serif italic text-navy text-[18px] leading-[1.6] m-0 mb-2">
            &ldquo;{block.text}&rdquo;
          </p>
          {block.author && (
            <cite className="not-italic text-[13px] text-ink/55 font-medium">
              — {block.author}
            </cite>
          )}
        </blockquote>
      );
    case "table":
      return (
        <div key={i} className="overflow-x-auto rounded-[12px] border border-line">
          <table className="w-full min-w-[560px] border-collapse text-[14px]">
            <thead>
              <tr className="bg-navy text-white">
                {block.headers.map((h, j) => (
                  <th
                    key={j}
                    className={`text-left px-5 py-3.5 font-semibold text-[13px] ${j === 0 ? "rounded-tl-[11px]" : ""} ${j === block.headers.length - 1 ? "rounded-tr-[11px]" : ""}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className={`border-t border-line/60 ${ri % 2 === 0 ? "bg-white" : "bg-[#FAFBFE]"}`}
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-5 py-3.5 text-ink/80 leading-[1.5] ${ci === 0 ? "font-semibold text-navy" : ""}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

/* ── Page ───────────────────────────────────────────────────── */
export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-page-bg pt-28 pb-0">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-navy rounded-[24px] px-10 min-[800px]:px-16 py-16">
            {/* Back link */}
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-white/55 text-[13px] hover:text-white/90 transition-colors mb-6"
            >
              <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
                <path d="M12 4l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All insights
            </Link>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-5">
              {article.categories.map((c) => (
                <span
                  key={c}
                  className="inline-block bg-white/10 text-white/80 rounded-full px-3.5 py-1 text-[12px] font-medium uppercase tracking-[0.08em]"
                >
                  {c}
                </span>
              ))}
            </div>

            <h1 className="font-serif italic font-normal text-white text-[clamp(28px,4vw,50px)] leading-[1.12] m-0 mb-5 max-w-[22ch]">
              {article.title}
            </h1>

            <p className="text-white/55 text-[14px] m-0">
              {article.date} · {article.author}
            </p>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="bg-page-bg pb-0">
        <div className="max-w-[860px] mx-auto px-6 -mt-6">
          <div className="rounded-[20px] overflow-hidden aspect-[16/8] bg-gradient-to-br from-navy to-tan/60">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-page-bg py-16">
        <div className="max-w-[860px] mx-auto px-6">
          {/* Excerpt lead */}
          <p className="text-[18px] leading-[1.7] text-navy font-medium mb-10 pb-10 border-b border-line">
            {article.excerpt}
          </p>

          {/* Body blocks */}
          <div className="flex flex-col gap-5">
            {article.body.map((block, i) => renderBlock(block, i))}
          </div>

          {/* Footer meta */}
          <div className="mt-16 pt-8 border-t border-line flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-[13px] text-ink/50 m-0">Written by</p>
              <p className="font-semibold text-navy text-[15px] m-0">{article.author}</p>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy uppercase tracking-[0.08em] hover:text-tan transition-colors"
            >
              ← Back to all insights
            </Link>
          </div>
        </div>
      </section>

      <ContactClosing />
    </>
  );
}
