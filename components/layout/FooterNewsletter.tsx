"use client";

import { useState, type FormEvent } from "react";

const PORTAL_ID = "45382735";
const FORM_ID   = "4ecdbe40-be22-40bd-bf67-14bdbbae439b";

export function FooterNewsletter() {
  const [email, setEmail]       = useState("");
  const [status, setStatus]     = useState<"idle" | "loading" | "done" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: [{ objectTypeId: "0-1", name: "email", value: email }],
            context: { pageUri: window.location.href, pageName: document.title },
          }),
        }
      );

      if (res.ok) {
        setStatus("done");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="text-white/80 text-[14px] py-3">
        ✓ You&apos;re subscribed — thanks!
      </p>
    );
  }

  return (
    <>
      <form
        className="flex items-center bg-white rounded-full pl-5 pr-2 py-2 max-w-[460px]"
        onSubmit={onSubmit}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          aria-label="Email address"
          className="flex-1 border-0 outline-none bg-transparent text-[15px] text-ink py-1.5"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          disabled={status === "loading"}
          className="bg-navy text-white rounded-full w-10 h-10 inline-flex items-center justify-center disabled:opacity-60"
        >
          {status === "loading" ? (
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="32" strokeDashoffset="12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-[18px] h-[18px]">
              <path d="M5 12h14m-5-5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </form>
      {status === "error" && (
        <p className="text-red-400 text-[12px] mt-2">
          Something went wrong — please try again.
        </p>
      )}
    </>
  );
}
