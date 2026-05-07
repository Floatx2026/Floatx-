import { ListHero } from "@/components/list-your-asset/ListHero";
import { ListOpportunities } from "@/components/list-your-asset/ListOpportunities";
import { ListComparison } from "@/components/list-your-asset/ListComparison";
import { ListProcess } from "@/components/list-your-asset/ListProcess";
import { ListForm } from "@/components/list-your-asset/ListForm";
import { ListClosing } from "@/components/list-your-asset/ListClosing";

export const metadata = {
  title: "List Your Asset — FloatX",
  description:
    "List your company, fund or asset on FloatX and gain access to global accredited investors. Private trading, company growth, debt and property — go live in as little as 48 hours.",
};

export default function ListYourAssetPage() {
  return (
    <>
      <ListHero />
      <ListOpportunities />
      <ListComparison />
      <ListProcess />
      <ListForm />
      <ListClosing />
    </>
  );
}
