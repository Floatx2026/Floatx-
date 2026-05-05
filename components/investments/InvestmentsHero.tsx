"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

function OpportunitiesAnim() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <>
      <Script
        src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
        type="module"
        strategy="lazyOnload"
      />
      <div className="relative w-full max-w-[520px] aspect-square mx-auto">
        <dotlottie-player
          src="/animations/opportunities-hero.json"
          background="transparent"
          speed={1}
          loop={!reduced}
          autoplay={!reduced}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </>
  );
}

export function InvestmentsHero() {
  return (
    <section className="bg-cream pt-36 pb-16 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-[1.1fr_1fr] gap-12 min-[900px]:gap-16 items-center">
          <div className="text-center min-[900px]:text-left">
            <Eyebrow>Investments</Eyebrow>
            <h1 className="font-serif italic font-normal text-navy text-[clamp(44px,6vw,72px)] leading-[1.05] mt-5 mb-5 max-w-[14ch] mx-auto min-[900px]:mx-0">
              Opportunities.
            </h1>
            <p className="text-[18px] leading-[1.6] max-w-[520px] text-ink/[0.75] m-0 mb-8 mx-auto min-[900px]:mx-0">
              Invest and trade across global private opportunities — from late-stage technology and fintech leaders to Australian capital raises.
            </p>
            <Button href="#opportunities" variant="primary" shape="pill">
              Browse opportunities
            </Button>
          </div>
          <div>
            <OpportunitiesAnim />
          </div>
        </div>
      </div>
    </section>
  );
}
