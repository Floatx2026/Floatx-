import Link from "next/link";

export function WhyBlurbs() {
  return (
    <section className="bg-page-bg pb-20">
      <div className="max-w-[820px] mx-auto px-6 flex flex-col gap-5">
        <p className="text-[16px] leading-[1.7] text-ink/80 m-0">
          <strong className="text-navy font-semibold">All-in-One Solution: </strong>
          With FloatX, you can manage your entire private investment portfolio in one place,
          eliminating the need to juggle multiple platforms like some competitors require.
        </p>
        <p className="text-[16px] leading-[1.7] text-ink/80 m-0">
          Feeling overwhelmed? Let us help! Our team can{" "}
          <Link href="/contact" className="text-tan underline underline-offset-2 hover:text-navy transition-colors">
            guide you through the investment process
          </Link>{" "}
          and answer any questions you may have.
        </p>
        <p className="text-[16px] leading-[1.7] text-navy font-medium m-0">
          Ready to unlock the full potential of private markets?
        </p>
      </div>
    </section>
  );
}
