"use client";

import { useState } from "react";

const inputCls =
  "bg-white border border-line rounded-xl px-4 py-3 text-[15px] text-navy placeholder:text-ink/45 focus:outline-none focus:border-navy transition-colors w-full";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-page-bg py-20">
      <div className="max-w-[760px] mx-auto px-6">
        <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.5vw,42px)] leading-[1.15] text-center m-0 mb-12">
          Get in touch
        </h2>

        {submitted ? (
          <div className="bg-cream border border-line rounded-2xl px-8 py-10 text-center">
            <p className="font-sans font-bold text-navy text-[17px] m-0 mb-2">
              Thanks — message received.
            </p>
            <p className="text-[15px] text-ink/70 m-0">
              A FloatX representative will be in touch with you shortly.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="flex flex-col gap-4"
            noValidate
          >
            <div className="grid grid-cols-1 min-[600px]:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                required
                autoComplete="given-name"
                placeholder="First name*"
                className={inputCls}
              />
              <input
                type="text"
                name="lastName"
                required
                autoComplete="family-name"
                placeholder="Last name*"
                className={inputCls}
              />
            </div>

            <div className="grid grid-cols-1 min-[600px]:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="Email*"
                className={inputCls}
              />
              <input
                type="tel"
                name="phone"
                required
                autoComplete="tel"
                placeholder="Phone number*"
                className={inputCls}
              />
            </div>

            <textarea
              name="message"
              rows={6}
              placeholder="Message"
              className={`${inputCls} resize-none`}
            />

            <div className="flex justify-center mt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center font-sans font-medium text-[15px] rounded-full px-9 py-[13px] bg-navy text-white border border-navy hover:bg-navy-deep transition-all duration-150 cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
