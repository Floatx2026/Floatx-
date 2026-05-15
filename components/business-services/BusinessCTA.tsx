import { Button } from "@/components/ui/Button";

export function BusinessCTA() {
  return (
    <section className="bg-navy py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <p className="font-sans font-medium text-tan text-[13px] tracking-[1.6px] uppercase mb-4">
              Get Started
            </p>
            <h2 className="font-serif italic font-normal text-white text-[clamp(28px,3.4vw,44px)] leading-[1.15] m-0 mb-4 max-w-[22ch]">
              Partner with us to unlock your investor network.
            </h2>
            <p className="text-[16px] leading-[1.6] text-white/65 m-0 max-w-[480px]">
              Get your custom growth package — our team will work with you to build the right combination of services for your business stage and goals.
            </p>
          </div>

          <div className="flex flex-col gap-5 min-[900px]:items-end">
            <Button href="/contact" variant="primary" shape="pill" className="whitespace-nowrap">
              Get Your Custom Package
            </Button>
            <div className="flex flex-col gap-3 text-[14px]">
              <a href="mailto:sherry@floatx.com"
                className="flex items-center gap-2.5 text-white/75 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-4 h-4 flex-none text-tan">
                  <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M2 8l10 7 10-7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
                sherry@floatx.com
              </a>
              <a href="tel:+61292260268"
                className="flex items-center gap-2.5 text-white/75 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-4 h-4 flex-none text-tan">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                +61 (2) 9226 0268
              </a>
              <p className="flex items-start gap-2.5 text-white/55 m-0">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-4 h-4 flex-none text-tan mt-0.5">
                  <path d="M12 2C8.7 2 6 4.7 6 8c0 5.3 6 14 6 14s6-8.7 6-14c0-3.3-2.7-6-6-6z" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="12" cy="8" r="2" stroke="currentColor" strokeWidth="1.7" />
                </svg>
                Level 41, 259 George Street<br />Sydney, NSW 2000
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
