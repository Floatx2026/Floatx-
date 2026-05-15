import { Button } from "./Button";

type Action = {
  title: string;
  cta: string;
  href: string;
};

const actions: Action[] = [
  {
    title: "Trade private investment opportunities",
    cta: "Invest now",
    href: "https://app.floatx.com/signup",
  },
  {
    title: "List your company or seek capital investment",
    cta: "List now",
    href: "/list-your-asset",
  },
  {
    title: "Become a Distribution Partner",
    cta: "Join now",
    href: "https://app.floatx.com/signup",
  },
];

export function ClosingActions() {
  return (
    <div className="grid grid-cols-1 min-[700px]:grid-cols-3 gap-10 max-w-[1000px] mx-auto">
      {actions.map((a) => (
        <div key={a.cta} className="text-center flex flex-col items-center gap-4">
          <p className="text-white/85 text-[15px] leading-[1.5] m-0 max-w-[22ch]">
            {a.title}
          </p>
          <Button
            href={a.href}
            shape="pill"
            variant="outlineWhite"
            className="px-7 py-[10px] text-[14px] border-white hover:bg-white hover:text-navy"
          >
            {a.cta}
          </Button>
        </div>
      ))}
    </div>
  );
}
