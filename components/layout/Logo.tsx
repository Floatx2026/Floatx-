import Image from "next/image";

type Props = { className?: string };

export function Logo({ className = "" }: Props) {
  return (
    <Image
      src="/floatx-logo.png"
      alt="FloatX"
      width={1700}
      height={500}
      priority
      className={`h-7 w-auto ${className}`}
    />
  );
}
