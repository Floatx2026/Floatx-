export type Article = {
  title: string;
  date: string;
  author: string;
  categories: string[];
  image: string;
  href: string;
};

export const articles: Article[] = [
  {
    title: "Building a Strong Digital Presence for Established Private Companies",
    date: "28 June 2024",
    author: "Marcus Ritchie",
    categories: ["Strategy"],
    image: "https://floatx.com/wp-content/uploads/2024/03/Rectangle-34624299.png",
    href: "https://floatx.com/insights/building-a-strong-digital-presence-for-established-private-companies/",
  },
  {
    title: "Is the Public Market Fading for Aussie Tech?",
    date: "21 May 2024",
    author: "Marcus Ritchie",
    categories: ["Private Trading", "Technology"],
    image: "https://floatx.com/wp-content/uploads/2024/02/Is-the-Public-Market-Fading-for-Aussie-Tech_-1.png",
    href: "https://floatx.com/insights/is-the-public-market-fading-for-aussie-tech-floatx-analyzes-the-evolving-landscape/",
  },
  {
    title: "Streamlining Fund Unit Trading for Savvy Investors",
    date: "4 March 2024",
    author: "Marcus Ritchie",
    categories: ["Funds", "Private Trading"],
    image: "https://floatx.com/wp-content/uploads/2024/02/Empowering-Fund-Managers-to-Raise-Capital-and-Enhance-Investor-Liquidity-1.png",
    href: "https://floatx.com/insights/streamlining-fund-unit-trading-for-savvy-investors/",
  },
  {
    title: "Private Powerhouse: Thriving in the Tailored Landscape of Private Markets",
    date: "5 February 2024",
    author: "Marcus Ritchie",
    categories: ["Private Trading"],
    image: "https://floatx.com/wp-content/uploads/2024/02/Rectangle-34624303.png",
    href: "https://floatx.com/insights/private-powerhouse-thriving-in-the-tailored-landscape-of-private-markets/",
  },
];
