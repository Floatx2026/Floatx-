"use client";

import Link from "next/link";
import { useState } from "react";
import { FadeUp } from "@/components/ui/FadeUp";
import { articles, type Article } from "@/lib/insights";

function ArticleCard({ a }: { a: Article }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <Link
      href={a.href}
      className="group bg-white rounded-[20px] border border-line overflow-hidden flex flex-col hover:border-navy/40 hover:shadow-[0_18px_36px_-12px_rgba(22,35,71,0.16)] hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="relative aspect-[16/10] bg-gradient-to-br from-navy via-navy to-tan/70 overflow-hidden">
        {!imgFailed && (
          <img
            src={a.image}
            alt=""
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {imgFailed && (
          <div className="absolute inset-0 flex items-end p-5">
            <span className="font-serif italic text-white/85 text-[18px] leading-[1.25]">
              {a.categories[0]}
            </span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {a.categories.map((c) => (
            <span
              key={c}
              className="text-[10.5px] uppercase tracking-[0.10em] font-semibold text-tan border border-tan/40 px-2 py-0.5 rounded-full"
            >
              {c}
            </span>
          ))}
        </div>
        <h3 className="font-sans font-bold text-navy text-[17px] leading-[1.3] m-0 mb-3 -tracking-[0.005em] flex-1">
          {a.title}
        </h3>
        <p className="text-[12px] text-ink/55 m-0 mb-4">
          {a.date} · {a.author}
        </p>
        <span className="text-[12.5px] font-semibold text-navy uppercase tracking-[0.10em] inline-flex items-center gap-1.5">
          Read more
          <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}

export function HomeInsights() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeUp>
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div className="max-w-[640px]">
            <h2 className="font-serif italic font-normal text-navy text-[clamp(32px,4vw,48px)] leading-[1.15] m-0 mb-3">
              Insights.
            </h2>
            <p className="text-[16px] leading-[1.65] text-ink/[0.78] m-0">
              Original commentary on the issues shaping private capital — written for allocators, not press releases.
            </p>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-navy bg-white border border-line rounded-full px-5 py-2.5 hover:bg-navy hover:text-white transition-colors"
          >
            View all
            <span aria-hidden="true">→</span>
          </Link>
        </div>
        </FadeUp>

        <FadeUp delay={80}>
        <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[1024px]:grid-cols-4 gap-5">
          {articles.map((a) => (
            <ArticleCard key={a.href} a={a} />
          ))}
        </div>
        </FadeUp>
      </div>
    </section>
  );
}
