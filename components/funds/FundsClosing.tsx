import { Button } from "@/components/ui/Button";

export function FundsClosing() {
  return (
    <section className="bg-tan py-16">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 min-[900px]:grid-cols-[1.4fr_1fr_1fr] gap-10 items-center">
        <h2 className="font-serif italic font-normal text-white text-[clamp(32px,3.6vw,44px)] leading-[1.15] m-0 max-w-[18ch]">
          A new standard for accessing private funds.
        </h2>

        <div className="text-center">
          <p className="text-white/90 text-[14px] m-0 mb-3 leading-[1.4]">
            Got a question?<br />Talk to us
          </p>
          <Button
            href="/apply"
            shape="pill"
            variant="outlineWhite"
            className="bg-white! text-tan! border-white! hover:bg-white! hover:text-tan!"
          >
            Request demo
          </Button>
        </div>

        <div className="text-center">
          <p className="text-white/90 text-[14px] m-0 mb-3 leading-[1.4]">
            Ready to allocate?<br />Get started today
          </p>
          <Button
            href="/apply?tier=sophisticated"
            shape="pill"
            variant="outlineWhite"
            className="bg-white! text-tan! border-white! hover:bg-white! hover:text-tan!"
          >
            Apply for access
          </Button>
        </div>
      </div>
    </section>
  );
}
