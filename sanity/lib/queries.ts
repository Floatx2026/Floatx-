import { groq } from "next-sanity";

export const opportunitiesQuery = groq`
  *[_type == "opportunity"] | order(coalesce(order, 9999) asc, name asc) {
    "id": _id,
    name,
    initials,
    logo,
    logoBg,
    type,
    isUnicorn,
    sector,
    region,
    blurb,
    href
  }
`;
