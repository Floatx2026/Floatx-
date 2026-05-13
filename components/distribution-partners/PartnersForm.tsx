import { HubSpotForm } from "@/components/ui/HubSpotForm";

export function PartnersForm() {
  return (
    <section id="apply" className="bg-page-bg py-24 scroll-mt-24">
      <div className="max-w-[920px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif italic font-normal text-navy text-[clamp(28px,3.4vw,40px)] leading-[1.15] m-0 mb-4">
            Apply to become a distribution partner.
          </h2>
          <p className="text-[16px] leading-[1.65] text-ink/70 m-0 max-w-[60ch] mx-auto">
            Tell us a little about your firm and we&apos;ll be in touch within two business days to set up a conversation.
          </p>
        </div>

        <div className="bg-cream border border-line rounded-[20px] p-7 min-[700px]:p-10">
          <HubSpotForm
            portalId="45382735"
            formId="299e4187-f6f3-47b9-ba4e-82b29c0dfaf5"
            region="na1"
          />
        </div>
      </div>
    </section>
  );
}
