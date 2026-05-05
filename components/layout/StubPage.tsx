type Props = { title: string; note?: string };

export function StubPage({ title, note }: Props) {
  return (
    <section className="bg-page-bg pt-36 pb-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <span className="eyebrow">Coming Soon</span>
        <h1 className="font-serif italic font-normal text-navy text-[clamp(40px,6vw,64px)] leading-[1.05] my-6 max-w-[18ch]">
          {title}
        </h1>
        <p className="text-[18px] leading-[1.65] max-w-[620px] text-ink/[0.78]">
          {note ?? "This page hasn't been built yet — it's a placeholder so navbar links don't 404."}
        </p>
      </div>
    </section>
  );
}
