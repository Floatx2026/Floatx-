import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { OfficeLocations } from "@/components/contact/OfficeLocations";
import { ContactClosing } from "@/components/contact/ContactClosing";

export const metadata = {
  title: "Contact — FloatX",
  description:
    "Get in touch with the FloatX team. We have offices in Sydney, Melbourne, Singapore and China.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <OfficeLocations />
      <ContactClosing />
    </>
  );
}
