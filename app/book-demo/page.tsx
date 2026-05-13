import { ContactClosing } from "@/components/contact/ContactClosing";

export const metadata = {
  title: "Book a Demo — FloatX",
  description:
    "Schedule a demo with the FloatX team and discover how our platform unlocks private market investment opportunities.",
};

export default function BookDemoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-page-bg pt-28 pb-0">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-navy rounded-[24px] px-10 min-[800px]:px-16 py-16">
            <h1 className="font-serif italic font-normal text-white text-[clamp(36px,4.5vw,56px)] leading-[1.1] m-0 mb-5">
              Book a demo
            </h1>
            <p className="text-white/70 text-[18px] leading-[1.65] m-0 max-w-[40ch]">
              See FloatX in action. Schedule a personalised walkthrough with our team.
            </p>
          </div>
        </div>
      </section>

      {/* HubSpot Meeting Embed */}
      <section className="bg-page-bg py-16">
        <div className="max-w-[900px] mx-auto px-6">
          <iframe
            src="https://meetings.hubspot.com/marcus-ritchie/marcus-?uuid=0cb3851a-16de-4c4e-977c-75295c795707&embed=true"
            title="Book a meeting with FloatX"
            width="100%"
            height="700"
            frameBorder="0"
            className="rounded-[20px] shadow-[0_12px_40px_-12px_rgba(22,35,71,0.15)]"
            allow="camera; microphone"
          />
        </div>
      </section>

      <ContactClosing />
    </>
  );
}
