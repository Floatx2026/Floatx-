import { HubSpotForm } from "@/components/ui/HubSpotForm";

export function ContactForm() {
  return (
    <section className="bg-page-bg py-20">
      <div className="max-w-[760px] mx-auto px-6">
        <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.5vw,42px)] leading-[1.15] text-center m-0 mb-12">
          Get in touch
        </h2>
        <div className="bg-cream border border-line rounded-[20px] p-7 min-[700px]:p-10">
          <HubSpotForm
            portalId="45382735"
            formId="c60aaeaa-17f7-4392-a904-e5153e496dac"
            region="na1"
          />
        </div>
      </div>
    </section>
  );
}
