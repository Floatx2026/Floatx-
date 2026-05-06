"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  company: string;
  idea: string;
};

const initial: FormState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  company: "",
  idea: "",
};

const inputCls =
  "bg-white border border-line rounded-xl px-4 py-3 text-[15px] text-navy placeholder:text-ink/45 focus:outline-none focus:border-navy transition-colors duration-150";
const labelCls = "font-sans text-[13.5px] font-medium text-ink/80 mb-1.5 block";
const reqCls = "text-tan ml-0.5";

export function TechForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  function update(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="pitch" className="bg-cream py-24 scroll-mt-24">
      <div className="max-w-[860px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.4vw,40px)] leading-[1.15] m-0 mb-4">
            Pitch your idea.
          </h2>
          <p className="text-[16px] leading-[1.65] text-ink/70 m-0 max-w-[56ch] mx-auto">
            Tell us about your startup and FloatX Ventures will be in touch within two business days to discuss next steps.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white border border-line rounded-[20px] px-8 py-10 text-center">
            <div className="w-12 h-12 rounded-full bg-tan/10 text-tan flex items-center justify-center mx-auto mb-4">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
                <path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-serif italic font-normal text-navy text-[26px] leading-[1.2] m-0 mb-2">
              Pitch received.
            </h3>
            <p className="text-[15px] leading-[1.6] text-ink/70 m-0 max-w-[46ch] mx-auto">
              Thanks{form.firstName ? ` ${form.firstName}` : ""} — the FloatX Ventures team will review your submission and be in touch within two business days.
            </p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            noValidate
            className="bg-white border border-line rounded-[20px] p-7 min-[700px]:p-10"
          >
            <div className="grid grid-cols-1 min-[600px]:grid-cols-2 gap-5">
              <div>
                <label htmlFor="firstName" className={labelCls}>
                  First name <span aria-hidden="true" className={reqCls}>*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  autoComplete="given-name"
                  value={form.firstName}
                  onChange={update}
                  placeholder="First name"
                  className={`${inputCls} w-full`}
                />
              </div>

              <div>
                <label htmlFor="lastName" className={labelCls}>
                  Last name <span aria-hidden="true" className={reqCls}>*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  autoComplete="family-name"
                  value={form.lastName}
                  onChange={update}
                  placeholder="Last name"
                  className={`${inputCls} w-full`}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelCls}>
                  Email <span aria-hidden="true" className={reqCls}>*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={update}
                  placeholder="you@startup.com"
                  className={`${inputCls} w-full`}
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelCls}>
                  Phone <span aria-hidden="true" className={reqCls}>*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={form.phone}
                  onChange={update}
                  placeholder="+61 4xx xxx xxx"
                  className={`${inputCls} w-full`}
                />
              </div>

              <div className="min-[600px]:col-span-2">
                <label htmlFor="company" className={labelCls}>
                  Company name <span aria-hidden="true" className={reqCls}>*</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  autoComplete="organization"
                  value={form.company}
                  onChange={update}
                  placeholder="Your startup or company name"
                  className={`${inputCls} w-full`}
                />
              </div>

              <div className="min-[600px]:col-span-2">
                <label htmlFor="idea" className={labelCls}>
                  Tell us about your idea
                  <span className="font-normal text-ink/50 ml-1">(optional)</span>
                </label>
                <textarea
                  id="idea"
                  name="idea"
                  rows={4}
                  value={form.idea}
                  onChange={update}
                  placeholder="What problem are you solving, what stage are you at, and what are you looking for from FloatX Ventures?"
                  className={`${inputCls} w-full resize-y min-h-[110px]`}
                />
              </div>
            </div>

            <div className="mt-7 flex flex-col min-[600px]:flex-row min-[600px]:items-center min-[600px]:justify-between gap-5">
              <p className="text-[12px] text-ink/55 leading-[1.55] m-0 max-w-[52ch]">
                By submitting, you agree to be contacted by FloatX Ventures regarding your application. All applications are subject to review and eligibility assessment.
              </p>
              <button
                type="submit"
                className="self-start min-[600px]:self-auto inline-flex items-center justify-center font-sans font-medium text-[15px] rounded-full px-7 py-[13px] bg-navy text-white border border-navy hover:bg-navy-deep transition-all duration-150 cursor-pointer"
              >
                Submit pitch
                <span aria-hidden="true" className="ml-1.5">→</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
