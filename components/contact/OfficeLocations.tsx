"use client";

import { useState } from "react";

type Office = {
  city: string;
  name: string;
  address: string;
  phone?: string;
  mapSrc: string;
};

const offices: Office[] = [
  {
    city: "Sydney",
    name: "FloatX — Sydney",
    address: "Level 40, 259 George Street Sydney, NSW 2000",
    phone: "+61 2 9017 2727",
    mapSrc:
      "https://maps.google.com/maps?q=259+George+Street+Sydney+NSW+2000&output=embed",
  },
  {
    city: "Melbourne",
    name: "FloatX — Melbourne",
    address: "Details coming soon",
    mapSrc:
      "https://maps.google.com/maps?q=Melbourne+VIC+Australia&output=embed",
  },
  {
    city: "Singapore",
    name: "FloatX — Singapore",
    address: "Details coming soon",
    mapSrc:
      "https://maps.google.com/maps?q=Singapore&output=embed",
  },
  {
    city: "China",
    name: "FloatX — China",
    address: "Details coming soon",
    mapSrc:
      "https://maps.google.com/maps?q=Shanghai+China&output=embed",
  },
];

export function OfficeLocations() {
  const [active, setActive] = useState("Sydney");
  const office = offices.find((o) => o.city === active)!;

  return (
    <section className="bg-[#f4f6fa]">
      <div className="grid grid-cols-1 min-[900px]:grid-cols-[1fr_420px]">
        {/* Google Map */}
        <div className="relative h-[380px] min-[900px]:h-auto min-h-[380px]">
          <iframe
            key={active}
            src={office.mapSrc}
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`FloatX ${active} office map`}
          />
        </div>

        {/* Office details */}
        <div className="bg-white px-10 py-14 flex flex-col justify-center">
          <p className="font-sans font-semibold text-navy text-[15px] m-0 mb-6">
            We have offices in
          </p>

          {/* City tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {offices.map((o) => (
              <button
                key={o.city}
                onClick={() => setActive(o.city)}
                className={`px-5 py-2 rounded-full text-[13px] font-medium border transition-all duration-150 cursor-pointer ${
                  active === o.city
                    ? "bg-navy text-white border-navy"
                    : "bg-white text-navy/65 border-line hover:border-navy hover:text-navy"
                }`}
              >
                {o.city}
              </button>
            ))}
          </div>

          {/* Office info */}
          <div className="flex flex-col gap-5">
            {/* Office name */}
            <div className="flex items-start gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 text-tan mt-0.5 flex-shrink-0"
                aria-hidden="true"
              >
                <path
                  d="M3 21h18M5 21V9l7-6 7 6v12M9 21v-5h6v5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="font-semibold text-navy text-[15px] m-0">
                {office.name}
              </p>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 text-tan mt-0.5 flex-shrink-0"
                aria-hidden="true"
              >
                <path
                  d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.7" />
              </svg>
              <p className="text-ink/80 text-[15px] leading-[1.55] m-0">
                {office.address}
              </p>
            </div>

            {/* Phone */}
            {office.phone && (
              <div className="flex items-center gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5 text-tan flex-shrink-0"
                  aria-hidden="true"
                >
                  <path
                    d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <a
                  href={`tel:${office.phone.replace(/\s/g, "")}`}
                  className="text-navy text-[15px] hover:text-tan transition-colors"
                >
                  {office.phone}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
