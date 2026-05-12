import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Props = {
  eyebrow: string;
  title: string;
  tagline: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  ctaVariant?: "primary" | "outlineNavy";
};

export function TierCard({
  eyebrow,
  title,
  tagline,
  bullets,
  ctaLabel,
  ctaHref,
  ctaVariant = "outlineNavy",
}: Props) {
  return (
    <div className="relative bg-navy border border-white/[0.08] rounded-[18px] pt-[52px] px-8 pb-8 flex flex-col transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_28px_56px_-18px_rgba(22,35,71,0.45),0_8px_16px_-8px_rgba(22,35,71,0.25)] hover:border-white/[0.16]">
      <span className="absolute top-4 right-4 bg-tan text-white font-sans text-[10px] font-semibold tracking-[0.04em] uppercase px-2.5 py-[5px] rounded-full leading-none">
        Accredited Investor
      </span>

      <Eyebrow>{eyebrow}</Eyebrow>
      <h3 className="font-sans font-bold text-white text-[24px] leading-[1.2] mt-2 mb-1 -tracking-[0.01em]">{title}</h3>
      <p className="text-white/[0.72] m-0 mb-5 text-[15px]">{tagline}</p>
      <ul className="m-0 mb-7 flex-1">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-[14px] leading-[1.6] mb-2.5 text-white/[0.88] last:mb-0">
            <span className="flex-none w-[7px] h-[7px] rounded-full bg-tan mt-2" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {ctaVariant === "primary" ? (
        <Button
          href={ctaHref}
          variant="primary"
          shape="pill"
          className="w-full bg-white! text-navy! border-white! hover:bg-white! hover:text-navy! hover:-translate-y-[3px] hover:shadow-[0_12px_22px_-6px_rgba(0,0,0,0.3)]"
        >
          {ctaLabel}
        </Button>
      ) : (
        <Button
          href={ctaHref}
          variant="outlineNavy"
          shape="pill"
          className="w-full bg-white! text-navy! border-white! hover:bg-white! hover:text-navy! hover:-translate-y-[3px] hover:shadow-[0_12px_22px_-6px_rgba(0,0,0,0.3)]"
        >
          {ctaLabel}
        </Button>
      )}
    </div>
  );
}
