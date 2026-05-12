"use client";

import { useState } from "react";

export type LogoAvatarProps = {
  name: string;
  initials: string;
  logo?: string;
  logoBg?: string;
  size?: number;
};

export function LogoAvatar({ name, initials, logo, logoBg, size = 56 }: LogoAvatarProps) {
  const [failed, setFailed] = useState(false);

  const logoSrc = logo
    ? logo.startsWith("/")
      ? logo
      : `https://www.google.com/s2/favicons?domain=${logo}&sz=256`
    : null;

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
          className="w-full h-full object-cover rounded-full"
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
