"use client";

import { useState } from "react";

export type LogoAvatarProps = {
  name: string;
  initials: string;
  logo?: string;
  logoBg?: string;
  size?: number;
};

// Local high-res logos in /public/logos/ — takes priority over Google favicons
const LOCAL_LOGOS: Record<string, string> = {
  "openai.com":       "/logos/openai.png",
  "epicgames.com":    "/logos/epicgames.svg",
  "anthropic.com":    "/logos/anthropic.svg",
  "tiktok.com":       "/logos/tiktok.svg",
  "ripple.com":       "/logos/ripple.svg",
  "airtable.com":     "/logos/airtable.svg",
  "miro.com":         "/logos/miro.svg",
  "patreon.com":      "/logos/patreon.svg",
  "lambdalabs.com":   "/logos/lambdalabs.svg",
  "plaid.com":        "/logos/plaid.png",
  "neuralink.com":    "/logos/neuralink.png",
  "drivewealth.com":  "/logos/drivewealth.png",
  "kalshi.com":       "/logos/kalshi.png",
  "chime.com":        "/logos/chime.png",
};

function resolveLogoSrc(logo?: string): string | null {
  if (!logo) return null;
  if (logo.startsWith("/")) return logo;
  if (LOCAL_LOGOS[logo]) return LOCAL_LOGOS[logo];
  return `https://www.google.com/s2/favicons?domain=${logo}&sz=256`;
}

export function LogoAvatar({ name, initials, logo, logoBg, size = 56 }: LogoAvatarProps) {
  const [failed, setFailed] = useState(false);

  const logoSrc = resolveLogoSrc(logo);
  const dimension = { width: size, height: size };

  if (logoSrc && !failed) {
    return (
      <div
        className="rounded-full border border-line flex items-center justify-center overflow-hidden flex-none"
        style={{ backgroundColor: logoBg ?? "#ffffff", ...dimension }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt={`${name} logo`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div
      className="rounded-full bg-navy text-white flex items-center justify-center font-sans font-bold text-[16px] -tracking-[0.01em] flex-none"
      style={dimension}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
