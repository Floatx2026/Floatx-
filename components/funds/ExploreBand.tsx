"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function ExploreBand() {
  const router = useRouter();
  const [q, setQ] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const term = q.trim();
    if (!term) return;
    router.push(`/funds?search=${encodeURIComponent(term)}`);
  };

  return (
    <section className="bg-navy py-14">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 min-[900px]:grid-cols-2 gap-8 items-center">
        <h2 className="font-serif italic font-normal text-white text-[clamp(30px,3.4vw,42px)] leading-[1.15] m-0 max-w-[14ch]">
          Explore our private fund opportunities
        </h2>
        <form
          onSubmit={submit}
          className="bg-white rounded-full pl-5 pr-2 py-2 flex items-center gap-3 max-w-[480px] w-full justify-self-end"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-ink/55 flex-none">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="m20 20-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search funds, managers, strategies"
            aria-label="Search funds"
            className="flex-1 bg-transparent border-0 outline-none text-[14px] text-ink placeholder:text-ink/45 min-w-0"
          />
          <button
            type="submit"
            className="bg-tan text-white text-[14px] font-medium rounded-full px-5 py-2 hover:bg-tan-soft transition-colors"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
