import { Button } from "@/components/ui/Button";

export function InsightsClosing() {
  return (
    <section className="bg-tan py-20">
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 min-[900px]:grid-cols-[1.5fr_1fr] gap-10 items-center">
        <div>
          <h2 className="font-serif italic font-normal text-white text-[clamp(28px,3.6vw,40px)] leading-[1.15] m-0 max-w-[20ch]">
            Stay close to the conversation.
          </h2>
          <p className="text-white/85 text-[15px] leading-[1.65] mt-4 max-w-[55ch] m-0">
            FloatX members receive new commentary, platform updates, and notification of upcoming raises by email.
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
