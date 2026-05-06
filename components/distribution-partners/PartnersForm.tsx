"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

type FormState = {
  firmName: string;
  afsl: string;
  licenceType: string;
  contactName: string;
  role: string;
  email: string;
  phone: string;
  clientBase: string;
  aum: string;
  message: string;
};

const initial: FormState = {
  firmName: "",
  afsl: "",
  licenceType: "",
  contactName: "",
  role: "",
  email: "",
  phone: "",
  clientBase: "",
  aum: "",
  message: "",
};

const inputCls =
  "bg-white border border-line rounded-xl px-4 py-3 text-[15px] text-navy placeholder:text-ink/45 focus:outline-none focus:border-navy transition-colors duration-150";
const labelCls = "font-sans text-[13.5px] font-medium text-ink/80 mb-1.5 block";
const reqCls = "text-tan ml-0.5";

export function PartnersForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  function update(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="apply" className="bg-page-bg py-24 scroll-mt-24">
      <div className="max-w-[920px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.4vw,40px)] leading-[1.15] m-0 mb-4">
            Apply to become a distribution partner.
          </h2>
          <p className="text-[16px] leading-[1.65] text-ink/70 m-0 max-w-[60ch] mx-auto">
            Tell us a little about your firm and we&apos;ll be in touch within two business days to set up a conversation.
          </p>
        </div>

        {submitted ? (
          <div className="bg-cream border border-line rounded-[20px] px-8 py-10 text-center">
            <div className="w-12 h-12 rounded-full bg-tan/10 text-tan flex items-center justify-center mx-auto mb-4">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-6 h-6">
                <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-serif italic font-normal text-navy text-[26px] leading-[1.2] m-0 mb-2">
              Application received.
            </h3>
            <p className="text-[15px] leading-[1.6] text-ink/70 m-0 max-w-[48ch] mx-auto">
              Thanks {form.contactName ? form.contactName.split(" ")[0] : ""} — a FloatX partnerships lead will be in touch within two business days to walk you through onboarding and licence verification.
            </p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            noValidate
            className="bg-cream border border-line rounded-[20px] p-7 min-[700px]:p-10"
          >
            <div className="grid grid-cols-1 min-[700px]:grid-cols-2 gap-5">
              <div className="min-[700px]:col-span-2">
                <label htmlFor="firmName" className={labelCls}>
                  Firm name <span aria-hidden="true" className={reqCls}>*</span>
                </label>
                <input
                  id="firmName"
                  name="firmName"
                  type="text"
                  required
                  autoComplete="organization"
                  value={form.firmName}
                  onChange={update}
                  placeholder="e.g. Atlas Wealth Partners"
                  className={`${inputCls} w-full`}
                />
              </div>

              <div>
                <label htmlFor="licenceType" className={labelCls}>
                  Licence type <span aria-hidden="true" className={reqCls}>*</span>
                </label>
                <select
                  id="licenceType"
                  name="licenceType"
                  required
                  value={form.licenceType}
                  onChange={update}
                  className={`${inputCls} w-full appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2210%22 height=%226%22 viewBox=%220 0 10 6%22><path fill=%22none%22 stroke=%22%230D0C22%22 stroke-width=%221.5%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22 d=%22M1 1l4 4 4-4%22/></svg>')] bg-no-repeat bg-[right_1rem_center] pr-10`}
                >
                  <option value="" disabled>Select a licence type</option>
                  <option value="afsl-holder">AFSL holder</option>
                  <option value="authorised-rep">Authorised representative</option>
                  <option value="accountant-s708">Accountant under s708(11)</option>
                  <option value="family-office">Family office</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="afsl" className={labelCls}>
                  AFSL number
                  <span className="font-normal text-ink/50 ml-1">(if applicable)</span>
                </label>
                <input
                  id="afsl"
                  name="afsl"
                  type="text"
                  inputMode="numeric"
                  value={form.afsl}
                  onChange={update}
                  placeholder="e.g. 123456"
                  className={`${inputCls} w-full`}
                />
              </div>

              <div>
                <label htmlFor="contactName" className={labelCls}>
                  Contact name <span aria-hidden="true" className={reqCls}>*</span>
                </label>
                <input
                  id="contactName"
                  name="contactName"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.contactName}
                  onChange={update}
                  placeholder="Full name"
                  className={`${inputCls} w-full`}
                />
              </div>

              <div>
                <label htmlFor="role" className={labelCls}>
                  Role <span aria-hidden="true" className={reqCls}>*</span>
                </label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  required
                  autoComplete="organization-title"
                  value={form.role}
                  onChange={update}
                  placeholder="e.g. Director, Senior Advisor"
                  className={`${inputCls} w-full`}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelCls}>
                  Work email <span aria-hidden="true" className={reqCls}>*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={update}
                  placeholder="you@firm.com.au"
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

              <div>
                <label htmlFor="clientBase" className={labelCls}>
                  Client base <span aria-hidden="true" className={reqCls}>*</span>
                </label>
                <select
                  id="clientBase"
                  name="clientBase"
                  required
                  value={form.clientBase}
                  onChange={update}
                  className={`${inputCls} w-full appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2210%22 height=%226%22 viewBox=%220 0 10 6%22><path fill=%22none%22 stroke=%22%230D0C22%22 stroke-width=%221.5%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22 d=%22M1 1l4 4 4-4%22/></svg>')] bg-no-repeat bg-[right_1rem_center] pr-10`}
                >
                  <option value="" disabled>How many wholesale clients?</option>
                  <option value="lt-50">Fewer than 50</option>
                  <option value="50-200">50 – 200</option>
                  <option value="200-1000">200 – 1,000</option>
                  <option value="1000-plus">1,000+</option>
                </select>
              </div>

              <div>
                <label htmlFor="aum" className={labelCls}>
                  Funds under advice <span aria-hidden="true" className={reqCls}>*</span>
                </label>
                <select
                  id="aum"
                  name="aum"
                  required
                  value={form.aum}
                  onChange={update}
                  className={`${inputCls} w-full appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2210%22 height=%226%22 viewBox=%220 0 10 6%22><path fill=%22none%22 stroke=%22%230D0C22%22 stroke-width=%221.5%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22 d=%22M1 1l4 4 4-4%22/></svg>')] bg-no-repeat bg-[right_1rem_center] pr-10`}
                >
                  <option value="" disabled>Approximate AUM / FUA</option>
                  <option value="lt-50m">Under A$50m</option>
                  <option value="50-250m">A$50m – A$250m</option>
                  <option value="250m-1b">A$250m – A$1b</option>
                  <option value="1b-plus">A$1b+</option>
                </select>
              </div>

              <div className="min-[700px]:col-span-2">
                <label htmlFor="message" className={labelCls}>
                  Anything we should know?
                  <span className="font-normal text-ink/50 ml-1">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={update}
                  placeholder="Client appetite, specific products of interest, target launch timing…"
                  className={`${inputCls} w-full resize-y min-h-[110px]`}
                />
              </div>
            </div>

            <div className="mt-7 flex flex-col min-[600px]:flex-row min-[600px]:items-center min-[600px]:justify-between gap-5">
              <p className="text-[12px] text-ink/55 leading-[1.55] m-0 max-w-[52ch]">
                By submitting, you agree to be contacted by FloatX about wholesale distribution arrangements. FloatX products are offered to wholesale investors only under s708 of the Corporations Act.
              </p>
              <button
                type="submit"
                className="self-start min-[600px]:self-auto inline-flex items-center justify-center font-sans font-medium text-[15px] rounded-full px-7 py-[13px] bg-navy text-white border border-navy hover:bg-navy-deep transition-all duration-150 cursor-pointer"
              >
                Submit application
                <span aria-hidden="true" className="ml-1.5">→</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
