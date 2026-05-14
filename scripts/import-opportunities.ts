/* eslint-disable no-console */
/**
 * One-time import: pushes lib/opportunities.ts into the Sanity dataset.
 *
 * Run with:
 *   SANITY_WRITE_TOKEN=<token> npx tsx scripts/import-opportunities.ts
 *
 * Generate a write token at sanity.io/manage → API → Tokens → "Editor" or "Write".
 */
import { createClient } from "@sanity/client";
import { opportunities } from "../lib/opportunities.static";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId) throw new Error("NEXT_PUBLIC_SANITY_PROJECT_ID is required");
if (!token) throw new Error("SANITY_WRITE_TOKEN is required");

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-12-01",
  token,
  useCdn: false,
});

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function run() {
  console.log(`Importing ${opportunities.length} opportunities into ${projectId}/${dataset}...`);
  const tx = client.transaction();

  opportunities.forEach((o, index) => {
    const _id = `opportunity.${slugify(o.name)}`;
    tx.createOrReplace({
      _id,
      _type: "opportunity",
      name: o.name,
      initials: o.initials,
      logo: o.logo,
      logoBg: o.logoBg,
      type: o.type,
      isUnicorn: o.isUnicorn ?? false,
      sector: o.sector,
      region: o.region,
      blurb: o.blurb,
      href: o.href,
      order: index,
    });
  });

  const result = await tx.commit();
  console.log(`✓ Imported ${result.results.length} documents.`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
