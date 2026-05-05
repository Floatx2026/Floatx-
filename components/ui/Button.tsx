import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outlineNavy" | "outlineInk" | "outlineWhite" | "preview";
type Shape = "rect" | "pill";

const base =
  "inline-flex items-center justify-center font-sans font-medium transition-all duration-150 ease-out cursor-pointer";

const shapes: Record<Shape, string> = {
  rect: "rounded-[12px] px-[22px] py-[11px] text-[14px]",
  pill: "rounded-full px-7 py-[13px] text-[15px]",
};

const variants: Record<Variant, string> = {
  primary: "bg-navy text-white border border-navy hover:bg-navy-deep",
  outlineNavy:
    "bg-transparent text-navy border border-navy hover:bg-navy hover:text-white",
  outlineInk:
    "bg-white text-ink border border-line hover:border-navy hover:text-navy",
  outlineWhite:
    "bg-transparent text-white border border-white/70 hover:bg-white/10",
  preview:
    "bg-navy text-white border border-navy hover:bg-white hover:text-navy",
};

type Props = {
  variant?: Variant;
  shape?: Shape;
  href?: string;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<"a">, "href">;

export function Button({
  variant = "primary",
  shape = "rect",
  href,
  children,
  className = "",
  ...rest
}: Props) {
  const cls = `${base} ${shapes[shape]} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={cls}>
      {children}
    </button>
  );
}
