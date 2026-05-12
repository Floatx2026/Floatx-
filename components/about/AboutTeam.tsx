const team = [
  {
    initials: "GW",
    name: "George Wang",
    title: "Chairman & CEO, AIMS Financial Group",
    bio: "George Wang leads AIMS Financial Group, a diversified financial services group spanning mortgage lending, securitisation, investment banking, funds management, property investment and high-tech investments. He oversees AIMS APAC REIT (Singapore Exchange listed), AIMS Total Return Fund, AIMS Commercial Mortgage Fund, and AIMS Property Securities Fund (ASX listed), with operations across Australia, China, Hong Kong and Singapore.",
    bg: "#162347",
    color: "#AF7D43",
  },
  {
    initials: "MR",
    name: "Marcus Ritchie",
    title: "CEO, FloatX",
    bio: "Marcus brings over 20 years of experience in investment banking, mergers & acquisitions, and debt financing across global financial centres including New York, London and Australia. With a background at ANZ Bank and global trading platforms, he has served as CEO for over 10 years — leading the vision and execution of FloatX as a next-generation private markets ecosystem.",
    bg: "#AF7D43",
    color: "#ffffff",
  },
];

export function AboutTeam() {
  return (
    <section className="bg-cream py-20 border-t border-line">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-tan text-[11px] font-semibold uppercase tracking-[0.14em] mb-3">
            Leadership
          </span>
          <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.5vw,42px)] leading-[1.2] m-0">
            The team behind FloatX
          </h2>
        </div>

        <div className="grid grid-cols-1 min-[760px]:grid-cols-2 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-[20px] p-8 shadow-[0_6px_24px_-10px_rgba(22,35,71,0.10)] border border-line/50 flex flex-col gap-6"
            >
              <div className="flex items-center gap-4">
                {/* Initials avatar */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 text-[20px] font-bold"
                  style={{ background: member.bg, color: member.color }}
                >
                  {member.initials}
                </div>
                <div>
                  <p className="font-sans font-bold text-navy text-[18px] leading-[1.2] m-0 mb-1">
                    {member.name}
                  </p>
                  <p className="text-tan text-[13px] font-medium m-0 leading-[1.3]">
                    {member.title}
                  </p>
                </div>
              </div>
              <p className="text-[15px] leading-[1.7] text-ink/72 m-0 border-t border-line pt-5">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
