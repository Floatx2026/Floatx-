import { Button } from "@/components/ui/Button";

export function InvestmentsClosing() {
  return (
    <section className="bg-tan py-20">
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 min-[900px]:grid-cols-[1.5fr_1fr] gap-10 items-center">
        <div>
          <h2 className="font-serif italic font-normal text-white text-[clamp(28px,3.6vw,40px)] leading-[1.15] m-0 max-w-[20ch]">
            Ready to allocate?
          </h2>
          <p className="text-white/85 text-[15px] leading-[1.65] mt-4 max-w-[55ch] m-0">
            Apply for FloatX platform access to view live deal terms, request information memoranda, and place orders alongside our wholesale investor base.
          </p>
        </div>
        <div className="text-left min-[900px]:text-right">
          <Button
            href="/apply?tier=sophisticated"
            shape="pill"
            variant="outlineWhite"
            className="bg-white! text-tan! border-white! hover:bg-white! hover:text-tan!"
          >
            Become a Member
          </Button>
        </div>
      </div>
    </section>
  );
}
