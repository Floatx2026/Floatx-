import { sanityClient } from "@/sanity/lib/client";
import { opportunitiesQuery } from "@/sanity/lib/queries";
import { opportunities as staticOpportunities } from "./opportunities.static";

export type {
  Opportunity,
  OpportunityType,
  Sector,
  Region,
} from "./opportunities.static";
export { regionLabel, sectors } from "./opportunities.static";

import type { Opportunity } from "./opportunities.static";

export async function getOpportunities(): Promise<Opportunity[]> {
  if (!sanityClient) return staticOpportunities;
  try {
    const result = await sanityClient.fetch<Opportunity[]>(
      opportunitiesQuery,
      {},
      { next: { revalidate: 60, tags: ["opportunity"] } },
    );
    if (!result || result.length === 0) return staticOpportunities;
    return result;
  } catch (err) {
    console.error("[opportunities] Sanity fetch failed, falling back to static list", err);
    return staticOpportunities;
  }
}
