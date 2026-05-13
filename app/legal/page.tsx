import { ContactClosing } from "@/components/contact/ContactClosing";

export const metadata = {
  title: "Legal — FloatX",
  description:
    "Privacy policy, legal disclaimers and regulatory information for FloatX Pty Ltd.",
};

const sections = [
  {
    title: "Privacy & Security",
    content: [
      "FloatX Pty Ltd ('FloatX') ACN 101 231 172 operates as an authorised representative (No. 1309999) of APP Securities Limited, ABN 45 112 871 842, AFS Licence 307706. APP Securities functions as the licensed securities dealer providing custodial services for financial products on the FloatX platform.",
      "The organisation complies with the Privacy Act 1988 (Cth) and Australian Privacy Principles. The website maintains high confidentiality standards and operates defined privacy policies for users.",
      "FloatX represents exclusively one side of platform transactions, charging brokerage fees accordingly.",
    ],
  },
  {
    title: "Information Collection",
    content: [
      "FloatX gathers information during product and service requests and usage. The organisation collects statistical data about website interactions including browser type, previous site visits, accessed pages, visit timing, and server addresses.",
    ],
  },
  {
    title: "Use and Disclosure of Information",
    content: [
      "Collected information may be utilised by FloatX, user advisors, or entities performing FloatX functions on confidential terms. Third-party disclosures occur only for function-related services. Overseas transfers of personal information require consideration of privacy equivalency; consent is sought unless Australian Privacy Principles exempt the requirement.",
      "The organisation uses personal information exclusively for disclosed purposes or reasonably expected related purposes without permission. Communications regarding investment opportunities and relevant products and services may occur, respecting user preferences to decline such contact.",
      "We do not sell personal information to other organisations for their marketing purposes. Legally mandated disclosures may occur.",
    ],
  },
  {
    title: "Security Measures",
    content: [
      "FloatX applies reasonable measures for personal information security. While internet transmission cannot guarantee absolute security, the organisation protects transmitted data. General information from competitions or surveys remains within FloatX and associated entities, not shared with third parties except in aggregate, non-identifying statistical form.",
      "Records are maintained on-premises or with trusted offsite third parties. Publicly disclosed information in online forums may be collected by external parties; users should exercise caution.",
    ],
  },
  {
    title: "Policy Acceptance and Changes",
    content: [
      "Website usage indicates acceptance of terms and conditions plus this Privacy Statement. Policies may change; information collected after amendments falls under updated provisions.",
    ],
  },
  {
    title: "Access and Updates",
    content: [
      "Users may access and update personal information anytime by contacting the organisation at the provided email address.",
    ],
  },
  {
    title: "Privacy Complaints",
    content: [
      "Privacy concerns should be directed to the Privacy Officer. FloatX employs complaints procedures; unresolved issues may be escalated to the Office of the Australian Information Commissioner (OAIC).",
      "OAIC Hotline: 1300 363 992 (Australia) or +61 2 9284 9749 (International). Website: www.oaic.gov.au",
    ],
  },
];

export default function LegalPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-page-bg pt-28 pb-0">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-navy rounded-[24px] px-10 min-[800px]:px-16 py-16">
            <span className="inline-block bg-white/10 text-white/80 rounded-full px-4 py-1.5 text-[13px] font-medium mb-6">
              Legal
            </span>
            <h1 className="font-serif italic font-normal text-white text-[clamp(36px,4.5vw,56px)] leading-[1.1] m-0 mb-5">
              Legal & Privacy
            </h1>
            <p className="text-white/70 text-[18px] leading-[1.65] m-0 max-w-[46ch]">
              Regulatory information, privacy policy and legal disclaimers for FloatX Pty Ltd.
            </p>
          </div>
        </div>
      </section>

      {/* Regulatory banner */}
      <section className="bg-cream border-b border-line">
        <div className="max-w-[1200px] mx-auto px-6 py-6">
          <p className="text-[13px] text-ink/60 leading-[1.7] m-0">
            <strong className="text-ink/80">Regulatory notice:</strong> FloatX Pty Ltd (ACN 101 231 172) is a Corporate Authorised Representative (CAR No. 1309999) of APP Securities Limited (AFSL 307706). FloatX provides access to wholesale and retail investment products in accordance with Australian financial services regulations. Wholesale offers are restricted to investors qualifying as Sophisticated or otherwise eligible under the Corporations Act 2001 (Cth). This website is general information only and does not constitute financial advice.
          </p>
        </div>
      </section>

      {/* Legal content */}
      <section className="bg-page-bg py-20">
        <div className="max-w-[860px] mx-auto px-6">
          <div className="flex flex-col gap-14">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-sans font-bold text-navy text-[20px] leading-[1.3] m-0 mb-5 pb-4 border-b border-line">
                  {s.title}
                </h2>
                <div className="flex flex-col gap-4">
                  {s.content.map((p, i) => (
                    <p key={i} className="text-[15px] leading-[1.75] text-ink/75 m-0">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact box */}
          <div className="mt-16 bg-cream border border-line rounded-[20px] p-8">
            <h3 className="font-sans font-bold text-navy text-[16px] m-0 mb-4">
              Privacy Officer — Mailing Address
            </h3>
            <address className="not-italic text-[15px] leading-[1.8] text-ink/70">
              The Privacy Officer<br />
              FloatX<br />
              Level 41, 259 George St<br />
              Sydney, NSW 2000
            </address>
          </div>

          <p className="mt-8 text-[12px] text-ink/40 leading-relaxed">
            Last updated: May 2026. FloatX reserves the right to amend this policy at any time. Continued use of the website following any changes constitutes acceptance of the updated policy.
          </p>
        </div>
      </section>

      <ContactClosing />
    </>
  );
}
