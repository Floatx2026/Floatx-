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
    <div className="grid grid-cols-1 min-[700px]:grid-cols-3 gap-12 max-w-[960px] mx-auto">
      {actions.map((a) => (
        <div key={a.cta} className="text-center flex flex-col items-center gap-5">
          <p className="text-white text-[16px] leading-[1.45] m-0 max-w-[20ch]">
            {a.title}
          </p>
          <Button href={a.href} shape="pill" variant="outlineWhite">
            {a.cta}
          </Button>
        </div>
      ))}
    </div>
  );
}
