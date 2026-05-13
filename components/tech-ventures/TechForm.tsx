import { HubSpotForm } from "@/components/ui/HubSpotForm";

export function TechForm() {
  return (
    <section id="pitch" className="bg-cream py-24 scroll-mt-24">
      <div className="max-w-[860px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.4vw,40px)] leading-[1.15] m-0 mb-4">
            Pitch your idea.
          </h2>
          <p className="text-[16px] leading-[1.65] text-ink/70 m-0 max-w-[56ch] mx-auto">
            Tell us about your startup and FloatX Ventures will be in touch within two business days to discuss next steps.
          </p>
        </div>

        <div className="bg-white border border-line rounded-[20px] p-7 min-[700px]:p-10">
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
