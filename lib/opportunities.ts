export type OpportunityType = "Private Trading" | "Company Investment";
export type Sector = "Technology" | "Fintech" | "Gaming" | "Health";
export type Region = "AU" | "US" | "China" | "Global";

export type Opportunity = {
  name: string;
  initials: string;
  /** Clearbit domain (e.g. "openai.com") OR a local path (e.g. "/logos/anahad.png") */
  logo?: string;
  /** Background colour for the logo circle when the favicon has transparency */
  logoBg?: string;
  type: OpportunityType;
  isUnicorn?: boolean;
  sector: Sector;
  region: Region;
  blurb: string;
  href: string;
};

export const opportunities: Opportunity[] = [
  {
    name: "OpenAI",
    initials: "OA",
    logo: "openai.com",
    type: "Private Trading",
    sector: "Technology",
    region: "US",
    blurb: "AI research and deployment lab behind ChatGPT and the GPT model family.",
    href: "/investments/private-trading",
  },
  {
    name: "Scale AI",
    initials: "SA",
    logo: "scale.com",
    type: "Private Trading",
    sector: "Technology",
    region: "US",
    blurb: "Data and AI infrastructure for training the next generation of foundation models.",
    href: "/investments/private-trading",
  },
  {
    name: "Plaid",
    initials: "PL",
    logo: "plaid.com",
    type: "Private Trading",
    sector: "Fintech",
    region: "US",
    blurb: "Financial data infrastructure connecting consumer apps to banks across North America and Europe.",
    href: "/investments/private-trading",
  },
  {
    name: "Airtable",
    initials: "AT",
    logo: "airtable.com",
    type: "Private Trading",
    sector: "Fintech",
    region: "US",
    blurb: "Collaborative platform that combines the power of a database with the simplicity of a spreadsheet.",
    href: "/investments/private-trading",
  },
  {
    name: "Kraken",
    initials: "KR",
    logo: "kraken.com",
    type: "Private Trading",
    isUnicorn: true,
    sector: "Fintech",
    region: "AU",
    blurb: "Leading global cryptocurrency exchange known for institutional-grade security and broad asset coverage.",
    href: "/investments/private-trading",
  },
  {
    name: "DriveWealth",
    initials: "DW",
    logo: "drivewealth.com",
    type: "Private Trading",
    sector: "Fintech",
    region: "US",
    blurb: "Brokerage-as-a-service platform powering fractional investing for global fintechs.",
    href: "/investments/private-trading",
  },
  {
    name: "Miro",
    initials: "MR",
    logo: "miro.com",
    type: "Private Trading",
    sector: "Technology",
    region: "US",
    blurb: "Collaborative online whiteboard for distributed teams working through complex visual problems.",
    href: "/investments/private-trading",
  },
  {
    name: "Patreon",
    initials: "PT",
    logo: "patreon.com",
    type: "Private Trading",
    sector: "Fintech",
    region: "US",
    blurb: "Membership platform helping artists, writers, and creators earn directly from their fans.",
    href: "/investments/private-trading",
  },
  {
    name: "Epic Games",
    initials: "EG",
    logo: "epicgames.com",
    type: "Private Trading",
    sector: "Gaming",
    region: "US",
    blurb: "Maker of Fortnite and Unreal Engine — one of the largest privately-held games and 3D-tooling businesses.",
    href: "/investments/private-trading",
  },
  {
    name: "Chime",
    initials: "CH",
    logo: "chime.com",
    logoBg: "#00D54B",
    type: "Private Trading",
    sector: "Fintech",
    region: "US",
    blurb: "Fee-free mobile banking covering checking, savings, and credit-builder accounts.",
    href: "/investments/private-trading",
  },
  {
    name: "Ripple",
    initials: "RP",
    logo: "ripple.com",
    type: "Private Trading",
    sector: "Fintech",
    region: "US",
    blurb: "Blockchain infrastructure for cross-border payments and institutional digital-asset settlement.",
    href: "/investments/private-trading",
  },
  {
    name: "ByteDance",
    initials: "BD",
    logo: "bytedance.com",
    type: "Private Trading",
    sector: "Technology",
    region: "China",
    blurb: "Technology group behind TikTok, Douyin and a global suite of consumer applications.",
    href: "/investments/private-trading",
  },
  {
    name: "Wealthfront",
    initials: "WF",
    logo: "wealthfront.com",
    type: "Private Trading",
    sector: "Fintech",
    region: "US",
    blurb: "Digital wealth manager combining automated investing with high-yield cash strategies.",
    href: "/investments/private-trading",
  },
  {
    name: "ANAHAD",
    initials: "AH",
    type: "Company Investment",
    sector: "Fintech",
    region: "AU",
    blurb: "Innovative pharmacy supply-chain platform raising primary capital through FloatX.",
    href: "/investments/company-investment",
  },
  {
    name: "ArthroLase",
    initials: "AL",
    type: "Company Investment",
    sector: "Health",
    region: "AU",
    blurb: "Intelligent joint-resurfacing technology company raising primary capital through FloatX.",
    href: "/investments/company-investment",
  },
  {
    name: "Deep Touch",
    initials: "DT",
    type: "Company Investment",
    sector: "Fintech",
    region: "AU",
    blurb: "Australian deep-tech R&D company raising primary capital through FloatX.",
    href: "/investments/company-investment",
  },
  {
    name: "Oxygen Health Clinics",
    initials: "OX",
    type: "Company Investment",
    sector: "Health",
    region: "AU",
    blurb: "Accessible health-services group raising primary capital through FloatX.",
    href: "/investments/company-investment",
  },
];

export const regionLabel: Record<Region, string> = {
  AU: "AU",
  US: "US",
  Global: "Global",
  China: "CN",
};

export const sectors: Sector[] = ["Technology", "Fintech", "Gaming", "Health"];
