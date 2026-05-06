"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

type Props = {
  src: string;
  className?: string;
};

export function LottiePlayer({ src, className }: Props) {
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
      <dotlottie-player
        src={src}
        background="transparent"
        speed={1}
        loop={!reduced}
        autoplay={!reduced}
        className={className}
        style={{ width: "100%", height: "100%" }}
      />
    </>
  );
}
