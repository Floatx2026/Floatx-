import Image from "next/image";

type Props = { className?: string };

export function Logo({ className = "" }: Props) {
  return (
    <Image
      src="/floatx-logo.png"
      alt="FloatX"
      width={1593}
      height={462}
      priority
      className={`h-7 w-auto ${className}`}
    />
  );
}
