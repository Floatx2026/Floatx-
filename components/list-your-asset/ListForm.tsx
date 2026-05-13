import { HubSpotForm } from "@/components/ui/HubSpotForm";

export function ListForm() {
  return (
    <section id="list" className="bg-white py-24 scroll-mt-24">
      <div className="max-w-[920px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.4vw,40px)] leading-[1.15] m-0 mb-4">
            Submit your listing inquiry.
          </h2>
          <p className="text-[16px] leading-[1.65] text-ink/70 m-0 max-w-[60ch] mx-auto">
            Tell us about your asset and we&apos;ll be in touch within two business days to begin the onboarding process.
          </p>
        </div>

        <div className="bg-cream border border-line rounded-[20px] p-7 min-[700px]:p-10">
          <HubSpotForm
            portalId="45382735"
            formId="d7e311cb-6f33-421a-af11-f060ccdecced"
            region="na1"
          />
        </div>
      </div>
    </section>
  );
}
