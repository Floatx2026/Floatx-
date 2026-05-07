/*
 * Portfolio company news — STARTER DATA.
 *
 * These items demonstrate the section layout. Before publishing externally:
 *   1. Replace each entry with a verified, attributable news story.
 *   2. Set `href` to the actual article URL (currently set to publication
 *      homepages as placeholders).
 *   3. Confirm headlines match the source verbatim and dates are accurate.
 *
 * FloatX should not present third-party news in a way that could be construed
 * as endorsement of the underlying companies or as financial advice. Items
 * render in array order — keep newest first.
 */

export type PortfolioNewsItem = {
  company: string;
  initials: string;
  logo?: string;
  logoBg?: string;
  headline: string;
  source: string;
  date: string;
  href: string;
};

export const portfolioNews: PortfolioNewsItem[] = [
  {
    company: "OpenAI",
    initials: "OA",
    logo: "openai.com",
    headline: "OpenAI launches new agent framework for enterprise customers",
    source: "TechCrunch",
    date: "2026-04-22",
    href: "https://techcrunch.com/",
  },
  {
    company: "ByteDance",
    initials: "BD",
    logo: "tiktok.com",
    logoBg: "#010101",
    headline: "ByteDance maintains global product roadmap as TikTok review continues",
    source: "Reuters",
    date: "2026-04-15",
    href: "https://www.reuters.com/",
  },
  {
    company: "Ripple",
    initials: "RP",
    logo: "ripple.com",
    headline: "Ripple expands RLUSD stablecoin to additional payment corridors",
    source: "CoinDesk",
    date: "2026-04-02",
    href: "https://www.coindesk.com/",
  },
  {
    company: "Plaid",
    initials: "PL",
    logo: "plaid.com",
    headline: "Plaid extends open-banking integrations across European markets",
    source: "TechCrunch",
    date: "2026-03-26",
    href: "https://techcrunch.com/",
  },
  {
    company: "Epic Games",
    initials: "EG",
    logo: "epicgames.com",
    headline: "Unreal Engine adopted by new wave of automotive simulation studios",
    source: "The Verge",
    date: "2026-03-18",
    href: "https://www.theverge.com/",
  },
  {
    company: "OpenAI",
    initials: "OA",
    logo: "openai.com",
    headline: "OpenAI signals expanded compute partnerships through 2026",
    source: "Reuters",
    date: "2026-03-08",
    href: "https://www.reuters.com/",
  },
  {
    company: "Wealthfront",
    initials: "WF",
    logo: "wealthfront.com",
    headline: "Wealthfront's high-yield cash account holds above benchmark as rates ease",
    source: "Bloomberg",
    date: "2026-03-04",
    href: "https://www.bloomberg.com/",
  },
  {
    company: "ByteDance",
    initials: "BD",
    logo: "tiktok.com",
    logoBg: "#010101",
    headline: "Douyin e-commerce posts strong Q1 across consumer categories",
    source: "South China Morning Post",
    date: "2026-02-26",
    href: "https://www.scmp.com/",
  },
  {
    company: "Plaid",
    initials: "PL",
    logo: "plaid.com",
    headline: "Plaid releases new fraud-prevention layer for fintech partners",
    source: "Finextra",
    date: "2026-02-12",
    href: "https://www.finextra.com/",
  },
  {
    company: "ANAHAD",
    initials: "AH",
    headline: "ANAHAD progresses Series A through wholesale capital raise",
    source: "Australian Financial Review",
    date: "2026-02-04",
    href: "https://www.afr.com/",
  },
  {
    company: "Oxygen Health Clinics",
    initials: "OX",
    headline: "Oxygen Health Clinics expands AU footprint with new locations",
    source: "The Australian",
    date: "2026-01-28",
    href: "https://www.theaustralian.com.au/",
  },
  {
    company: "Epic Games",
    initials: "EG",
    headline: "Fortnite cross-IP collaborations drive record concurrent users",
    source: "IGN",
    date: "2026-01-15",
    href: "https://www.ign.com/",
  },
];
