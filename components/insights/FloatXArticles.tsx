"use client";

import { useEffect, useRef, useState } from "react";
import { articles } from "@/lib/insights";
import { ArticleCard } from "./ArticleCard";
import { Button } from "@/components/ui/Button";

export function FloatXArticles() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  function updateScrollState() {
    const el = scrollerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollPrev(el.scrollLeft > 8);
    setCanScrollNext(el.scrollLeft < maxScroll - 8);
  }

  useEffect(() => {
    updateScrollState();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  function scrollByCards(dir: -1 | 1) {
    const el = scrollerRef.current;
    if (!el) return;
    const distance = dir * Math.round(el.clientWidth * 0.85);
    const start = el.scrollLeft;
    const target = Math.max(0, Math.min(start + distance, el.scrollWidth - el.clientWidth));
    if (target === start) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const prevSnap = el.style.scrollSnapType;
    el.style.scrollSnapType = "none";
    if (reduced) {
      el.scrollLeft = target;
      el.style.scrollSnapType = prevSnap;
      return;
    }
    const duration = 350;
    const t0 = performance.now();
    const delta = target - start;
    const tick = (now: number) => {
      const k = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - k, 3);
      el.scrollLeft = start + delta * eased;
      if (k < 1) requestAnimationFrame(tick);
      else el.style.scrollSnapType = prevSnap;
    };
    requestAnimationFrame(tick);
  }

  const showArrows = canScrollPrev || canScrollNext;

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div className="max-w-[640px]">
            <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.4vw,40px)] leading-[1.15] m-0 mb-3">
              Written by FloatX.
            </h2>
            <p className="text-[16px] leading-[1.65] text-ink/[0.78] m-0">
              Original commentary from our team — written for allocators, not press releases.
            </p>
          </div>

          {showArrows && (
            <div className="hidden min-[700px]:flex items-center gap-2 flex-none">
              <button
                type="button"
                onClick={() => scrollByCards(-1)}
                disabled={!canScrollPrev}
                aria-label="Previous insights"
                className="w-10 h-10 rounded-full border border-line bg-white text-navy flex items-center justify-center transition-all duration-150 hover:border-navy disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-4 h-4">
                  <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollByCards(1)}
                disabled={!canScrollNext}
                aria-label="Next insights"
                className="w-10 h-10 rounded-full border border-line bg-white text-navy flex items-center justify-center transition-all duration-150 hover:border-navy disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-4 h-4">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          )}
        </div>

        <div
          ref={scrollerRef}
          className="-mx-6 px-6 flex gap-5 overflow-x-auto snap-x snap-proximity pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {articles.map((a) => (
            <div
              key={a.slug}
              className="snap-start flex-none w-[78%] min-[600px]:w-[44%] min-[1024px]:w-[calc((100%-3*1.25rem)/4)]"
            >
              <ArticleCard a={a} />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button href="/insights/all" variant="outlineNavy" shape="pill">
            View all insights
            <span aria-hidden="true" className="ml-1.5">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
