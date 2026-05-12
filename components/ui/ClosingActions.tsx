import { Button } from "./Button";

type Action = {
  title: string;
  cta: string;
  href: string;
};

const actions: Action[] = [
  {
    title: "Trading private investment opportunities",
    cta: "Invest now",
    href: "https://app.floatx.com/signup",
  },
  {
    title: "Listing your company or raising capital",
    cta: "List now",
    href: "/list-your-asset",
  },
  {
    title: "Becoming a Distribution Partner",
    cta: "Join now",
    href: "https://app.floatx.com/signup",
  },
];

export function ClosingActions() {
  return (
    <div className="grid grid-cols-1 min-[700px]:grid-cols-3 gap-10 max-w-[1000px] mx-auto">
      {actions.map((a) => (
        <div key={a.cta} className="text-center flex flex-col items-center gap-7">
          <p className="text-white/85 text-[17px] leading-[1.5] m-0 max-w-[22ch]">
            {a.title}
          </p>
          <Button
            href={a.href}
            shape="pill"
            variant="outlineWhite"
            className="px-9 py-[14px] text-[15px] border-white hover:bg-white hover:text-navy"
          >
            {a.cta}
          </Button>
        </div>
      ))}
    </div>
  );
}
