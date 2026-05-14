import { defineField, defineType } from "sanity";

export const opportunityType = defineType({
  name: "opportunity",
  title: "Opportunity",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Company name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "initials",
      title: "Initials (logo fallback)",
      type: "string",
      description: "2-letter fallback shown when no logo is loaded.",
      validation: (r) => r.required().max(3),
    }),
    defineField({
      name: "logo",
      title: "Logo source",
      type: "string",
      description:
        'Clearbit domain (e.g. "openai.com") OR a local public path (e.g. "/logos/anahad.png"). Leave blank to use initials.',
    }),
    defineField({
      name: "logoBg",
      title: "Logo background colour",
      type: "string",
      description: "Hex colour for the logo circle when the favicon has transparency (e.g. #000000).",
    }),
    defineField({
      name: "type",
      title: "Opportunity type",
      type: "string",
      options: {
        list: [
          { title: "Private Trading", value: "Private Trading" },
          { title: "Company Investment", value: "Company Investment" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "isUnicorn",
      title: "Unicorn",
      type: "boolean",
      description: "Adds the unicorn badge to the card.",
      initialValue: false,
    }),
    defineField({
      name: "sector",
      title: "Sector",
      type: "string",
      options: {
        list: ["Technology", "Fintech", "Gaming", "Health"],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "region",
      title: "Region",
      type: "string",
      options: {
        list: [
          { title: "Australia", value: "AU" },
          { title: "United States", value: "US" },
          { title: "China", value: "China" },
          { title: "Global", value: "Global" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "blurb",
      title: "Blurb",
      type: "text",
      rows: 3,
      validation: (r) => r.required().max(280),
    }),
    defineField({
      name: "href",
      title: "Card link URL",
      type: "string",
      description:
        "Where the card links to. Use the app signup URL for Private Trading, or a local route (e.g. /investments/company-investment).",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Lower numbers appear first. Leave blank to fall back to alphabetical.",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "type",
      sector: "sector",
    },
    prepare({ title, subtitle, sector }) {
      return {
        title,
        subtitle: [subtitle, sector].filter(Boolean).join(" • "),
      };
    },
  },
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [
        { field: "order", direction: "asc" },
        { field: "name", direction: "asc" },
      ],
    },
    {
      title: "Name",
      name: "nameAsc",
      by: [{ field: "name", direction: "asc" }],
    },
  ],
});
