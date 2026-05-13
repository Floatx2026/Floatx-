export type BodyBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string; author?: string }
  | { type: "table"; headers: string[]; rows: string[][] };

export type Article = {
  slug: string;
  title: string;
  date: string;
  author: string;
  categories: string[];
  image: string;
  href: string;
  excerpt: string;
  body: BodyBlock[];
};

export const articles: Article[] = [
  {
    slug: "building-a-strong-digital-presence-for-established-private-companies",
    title: "Building a Strong Digital Presence for Established Private Companies",
    date: "28 June 2024",
    author: "Marcus Ritchie",
    categories: ["Strategy"],
    image: "https://floatx.com/wp-content/uploads/2024/03/Rectangle-34624299.png",
    href: "/insights/building-a-strong-digital-presence-for-established-private-companies",
    excerpt: "Many established private companies struggle to translate their vision into a compelling online presence. Here are five key elements to transform from inventor to storyteller.",
    body: [
      { type: "p", text: "Many established private companies, often founded by brilliant inventors or strategists, struggle to translate their vision into a compelling online presence. Unlike startups that build communication into their DNA from the ground up, private companies can sometimes fall into a reactive mode. They focus on internal operations and may not prioritize crafting a clear and consistent message for the digital world. The key missing piece? The ability to tell a clear story." },
      { type: "p", text: "In today's digital landscape, a strong online presence is no longer a luxury – it's a necessity. Even for established private companies that have secured initial funding, a well-crafted digital strategy is essential for attracting new customers, fostering brand loyalty, and driving continued growth. Here are 5 key elements to consider as you transform from inventor to storyteller and build a loyal online following:" },
      { type: "h2", text: "1. Refine Your Brand Identity for the Digital Age" },
      { type: "p", text: "Your brand is more than just a logo. It's the essence of your company, its values, and its mission. Conduct keyword research to understand how your target audience searches for businesses like yours. Incorporate these keywords throughout your website content, meta descriptions, and social media profiles to improve your search engine ranking (SEO). Ensure your brand messaging is consistent across all platforms – website, social media, marketing materials. This builds trust and recognition with your target audience." },
      { type: "p", text: "Example: If you're a private company specialising in sustainable manufacturing, relevant keywords might include \"eco-friendly manufacturing,\" \"sustainable production,\" or \"[your city] sustainable manufacturer.\"" },
      { type: "h2", text: "2. Craft Compelling Messaging that Connects" },
      { type: "p", text: "Move beyond simply describing your products or services. Tell a story. Develop targeted content that highlights the impact your company has and the problems you solve for your specific audience. Use clear, concise language that resonates with their needs and inspires them to take action. Consider different content formats like blog posts, case studies, infographics, or even webinars to cater to diverse learning styles." },
      { type: "p", text: "Example: Instead of a generic product description, create a blog post titled \"5 Ways Sustainable Manufacturing Can Save Your Business Money.\" This content educates potential customers while subtly promoting your company's expertise." },
      { type: "h2", text: "3. Leverage the Power of Video Marketing" },
      { type: "p", text: "People are busy, and video is a powerful tool to grab attention quickly and effectively. Go beyond a static investor pitch. Develop shorter, engaging videos showcasing your products, services, or team. Incorporate user-generated content (UGC) to build trust and relatability. Utilise video platforms YouTube, Facebook, IGTV, Vimeo and Twitch to further expand your reach and brand awareness. Just be sure of your target audience when selecting the video platform." },
      { type: "p", text: "Example: Create a product explainer video that demonstrates the benefits of your sustainable manufacturing process. Share customer testimonials on video to showcase the positive impact of your work." },
      { type: "h2", text: "4. Showcase Social Proof to Build Trust" },
      { type: "p", text: "Testimonials, case studies, and industry awards are all forms of social proof that build trust and credibility. Actively solicit reviews from satisfied customers and showcase them on your website and social media channels. Publish success stories and case studies highlighting the positive outcomes your company has achieved for clients." },
      { type: "p", text: "Example: Feature a section on your website dedicated to client testimonials. Share case studies that showcase how your sustainable manufacturing practices helped other companies reduce their environmental footprint." },
      { type: "h2", text: "5. Invest in Strategic Marketing for Measurable Results" },
      { type: "p", text: "While budget is always a consideration, allocating a specific amount for marketing allows you to reach your target audience and achieve your business goals. This could include social media advertising, search engine optimisation (SEO), or content marketing. Research the best platforms for your industry and audience. Develop a measurable strategy that tracks key metrics like website traffic, lead generation, and conversion rates. This data allows you to optimise your campaigns for maximum return on investment (ROI)." },
      { type: "p", text: "Example: Utilise social media advertising platforms like LinkedIn Ads to target decision-makers in companies seeking sustainable manufacturing solutions. Track the performance of your ads and adjust your targeting or messaging for better results." },
      { type: "h2", text: "Bonus: Master the Art of Presentations" },
      { type: "p", text: "In today's digital world, presentations are no longer confined to conference rooms. You can leverage online presentation tools to host webinars, pitch to potential investors, or even showcase your company culture to recruit top talent." },
      { type: "ul", items: [
        "Keep it clear and concise: Avoid information overload. Focus on the key points you want your audience to remember.",
        "Incorporate visuals: Use high-quality images, charts, and infographics to break up text and enhance understanding.",
        "Practice your delivery: Even online presentations benefit from practice. Record yourself beforehand and refine your pacing and delivery for a more polished performance.",
        "Engage your audience: Use interactive elements like polls or Q&A sessions to keep your audience engaged.",
        "Promote your presentation: Leverage social media and email marketing to promote your online presentation and attract a wider audience.",
      ]},
      { type: "h2", text: "Conclusion" },
      { type: "p", text: "The transition from inventor to storyteller is a powerful one. By harnessing the power of digital marketing and fostering a sense of community, established private companies can move beyond simply selling products and services. They can connect with their audience on a deeper level, build brand loyalty, and achieve sustainable growth in the ever-evolving digital landscape. So, step out of the inventor's lab and embrace the power of storytelling. Your brand's success hinges on it." },
    ],
  },
  {
    slug: "is-the-public-market-fading-for-aussie-tech-floatx-analyzes-the-evolving-landscape",
    title: "Is the Public Market Fading for Aussie Tech?",
    date: "21 May 2024",
    author: "Marcus Ritchie",
    categories: ["Private Trading", "Technology"],
    image: "https://floatx.com/wp-content/uploads/2024/02/Is-the-Public-Market-Fading-for-Aussie-Tech_-1.png",
    href: "/insights/is-the-public-market-fading-for-aussie-tech-floatx-analyzes-the-evolving-landscape",
    excerpt: "Tech delistings are outpacing new listings on the ASX. FloatX analyses the evolving landscape and what it means for Australian tech companies considering their exit strategy.",
    body: [
      { type: "p", text: "A recent article in the Australian Financial Review (AFR) sparked discussions on the challenges faced by ASX hopefuls in the tech sector. The data revealed a trend: tech companies are increasingly opting for private markets over public listings. This begs the crucial question for Australian tech companies: should they prioritise private capital over the public market?" },
      { type: "h2", text: "ASX Landscape for Tech IPOs: A Changing Course" },
      { type: "p", text: "The AFR data highlights a concerning shift: tech delistings are outpacing new listings on the ASX. Over the past five years, a net 19 tech firms have delisted, representing a combined market value exceeding $32 billion. This trend coincides with a significant decline in IPO activity. Since interest rates began rising, only a meagre $600 million has been raised through tech floats in the past two years, compared to the $17.9 billion raised between 2019–2021." },
      { type: "h2", text: "The Enticement of Private Capital" },
      { type: "p", text: "Several factors contribute to the growing appeal of private markets for Aussie tech companies:" },
      { type: "ul", items: [
        "Potentially Higher Valuations: Private investors, especially venture capitalists, might offer more attractive valuations for high-growth tech companies compared to the public market, particularly during economic uncertainty.",
        "Operational Flexibility: Private companies experience less regulatory scrutiny and reporting requirements compared to public companies. This allows for greater agility in decision-making and strategic execution.",
        "Access to Capital: Private equity firms and venture capitalists can provide substantial funding for growth without diluting ownership through public offerings. This empowers companies to scale aggressively without sacrificing control.",
      ]},
      { type: "h2", text: "FloatX's View: Navigating a Two-Sided Coin" },
      { type: "p", text: "While the data suggests a challenging environment for ASX tech IPOs, FloatX believes both public and private markets offer distinct advantages." },
      { type: "p", text: "Public Market Benefits: A successful public listing grants a company access to a wider pool of investors, including retail participants. This can be crucial for future fundraising initiatives. Additionally, a strong public market presence can enhance a company's brand image and establish credibility among potential customers and partners (if the company is performing well)." },
      { type: "p", text: "Private Market Advantages: Private markets provide nurturing environments for early-stage companies, offering access to capital and guidance from experienced investors. The flexibility and freedom from public scrutiny can also be advantageous for companies still establishing their foundation." },
      { type: "h2", text: "Making an Informed Choice: A Strategic Decision" },
      { type: "p", text: "The ideal exit strategy hinges on a company's specific circumstances and growth trajectory. Key considerations:" },
      { type: "ul", items: [
        "Growth Stage: Companies in the early stages of development might benefit from the nurturing environment and access to capital offered by private markets.",
        "Funding Needs: If a company requires significant funding for rapid scaling, private equity or venture capital might be the most viable option.",
        "Long-Term Goals: Companies seeking to build a lasting public profile and access to broader liquidity pools may find the public market more attractive in the long run.",
      ]},
      { type: "h2", text: "FloatX: Your Guide Through the Exit Maze" },
      { type: "p", text: "At FloatX, we understand the complexities of navigating the evolving exit landscape. We offer a comprehensive suite of services to guide Australian tech companies through the entire process, from pre-IPO planning to public listing or strategic sale." },
      { type: "p", text: "Contact us today for a free consultation and explore how FloatX can help your company make a well-informed decision about its future. Remember, a successful exit strategy is all about choosing the path that best fuels your company's growth and long-term vision, whether that path leads to the public market or flourishes in the private sphere." },
    ],
  },
  {
    slug: "streamlining-fund-unit-trading-for-savvy-investors",
    title: "Streamlining Fund Unit Trading for Savvy Investors",
    date: "4 March 2024",
    author: "Marcus Ritchie",
    categories: ["Funds", "Private Trading"],
    image: "https://floatx.com/wp-content/uploads/2024/02/Empowering-Fund-Managers-to-Raise-Capital-and-Enhance-Investor-Liquidity-1.png",
    href: "/insights/streamlining-fund-unit-trading-for-savvy-investors",
    excerpt: "FloatX is a groundbreaking platform designed to address the limitations of traditional fund structures, empowering fund managers with innovative solutions to raise capital and enhance investor liquidity.",
    body: [
      { type: "h2", text: "Revolutionising Capital Raising and Fund Management for the Modern Investor" },
      { type: "p", text: "In today's dynamic financial landscape, traditional fund structures often present challenges for both fund managers and investors. FloatX is a groundbreaking online platform specifically designed to address these limitations, empowering fund managers with innovative solutions to raise capital and enhance investor liquidity." },
      { type: "quote", text: "FloatX streamlines the fundraising process and unlocks an entirely new level of accessibility for investors, making it a win-win situation for both fund managers and investors.", author: "George Wang, Chairman of AIMS Financial Group" },
      { type: "h2", text: "Unveiling the FloatX Advantage for Fund Managers" },
      { type: "ul", items: [
        "Effortless Fundraising: Streamline your capital raising process with FloatX's user-friendly platform, attracting a wider pool of qualified investors.",
        "Increased Liquidity: Enable unit holders to trade their positions in your closed fund prior to maturity through FloatX's secondary market. This attracts investors seeking greater flexibility and portfolio management options.",
        "Reduced Costs: FloatX's competitive fee structure minimises your fundraising expenses, maximising your returns and investment potential.",
        "Enhanced Transparency: Gain valuable insights into investor behaviour and market trends with FloatX's comprehensive data analytics and reporting tools.",
        "Streamlined Operations: Our platform automates many administrative tasks, freeing you up to focus on core business activities.",
      ]},
      { type: "h2", text: "Case Study: AIMS Financial Group Leverages FloatX for Fund Liquidity" },
      { type: "p", text: "A leading financial services firm, AIMS Financial Group, sought to increase investor interest and liquidity for its private unit fund. By listing its fund on the FloatX platform, AIMS achieved the following:" },
      { type: "ul", items: [
        "Enhanced Investor Engagement: The ability to trade fund units on the secondary market attracted new investors seeking greater flexibility and control over their investments.",
        "Streamlined Fund Management: AIMS benefited from FloatX's automated processes and efficient infrastructure, reducing administrative burdens and streamlining fund operations.",
      ]},
      { type: "h2", text: "Join the FloatX Movement" },
      { type: "p", text: "FloatX is redefining the way funds are raised and managed. Partner with us today to unlock the full potential of your fundraising efforts and create a more engaging experience for your investors." },
      { type: "h2", text: "Stay Ahead of the Curve" },
      { type: "p", text: "Visit our website regularly for the latest updates, including new fund offerings, market analysis, and industry insights. Keep your fundraising strategy sharp and stay ahead of the curve with FloatX." },
    ],
  },
  {
    slug: "private-powerhouse-thriving-in-the-tailored-landscape-of-private-markets",
    title: "Private Powerhouse: Thriving in the Tailored Landscape of Private Markets",
    date: "5 February 2024",
    author: "Marcus Ritchie",
    categories: ["Private Trading"],
    image: "https://floatx.com/wp-content/uploads/2024/02/Rectangle-34624303.png",
    href: "/insights/private-powerhouse-thriving-in-the-tailored-landscape-of-private-markets",
    excerpt: "At a critical growth stage, companies grapple with the decision to go public or remain private. FloatX explores the distinct advantages of the private market and what it means for your company's future.",
    body: [
      { type: "p", text: "At a critical growth stage, companies grapple with the decision to go public (IPO) or remain private. While public markets offer vast capital pools and potentially higher valuations, they come with increased public scrutiny, stringent regulations, and short-term performance pressures." },
      { type: "p", text: "The private market, on the other hand, fosters long-term agility and resilience, empowering companies to:" },
      { type: "ul", items: [
        "Maintain Strategic Autonomy: Shield your roadmap from public scrutiny, safeguarding your competitive edge and allowing for swift adaptation in a dynamic market.",
        "Access Diversified Funding via Private Placements: Secure capital from pre-selected, strategic investors.",
        "Enable Secondary Transactions: Provide liquidity for existing shareholders while attracting new investors.",
        "Utilise Debt Facilities: Access flexible debt financing to fuel growth initiatives.",
      ]},
      { type: "h2", text: "Streamlined Efficiency and Expert Guidance" },
      { type: "p", text: "FloatX transcends a mere trading platform. We are your dedicated private market concierge, offering a comprehensive ecosystem and expert navigation through complexities. FloatX provides:" },
      { type: "ul", items: [
        "Simplified Processes: Streamlined workflows minimise administrative burdens, allowing you to focus on core business activities.",
        "Dedicated Support: Our team of specialists offers personalised guidance throughout your private market journey.",
      ]},
      { type: "h2", text: "Public vs. Private: A Balanced Comparison" },
      { type: "p", text: "FloatX champions an informed decision-making process. We recognise the distinct advantages and challenges of both paths:" },
      { type: "table", headers: ["Feature", "Public Market", "Private Market"], rows: [
        ["Capital Pools", "Large and readily accessible", "Varied, tailored to company needs"],
        ["Valuation", "Potentially higher valuations", "More focused on company fundamentals"],
        ["Scrutiny", "High public and regulatory oversight", "Less public scrutiny, fostering strategic agility"],
        ["Focus", "Short-term performance pressures", "Long-term strategic focus"],
        ["Regulation", "Extensive compliance requirements", "Less stringent regulations"],
        ["Speed to Market", "Longer IPO process", "Faster access to capital"],
        ["Liquidity", "Readily tradable shares", "Secondary market options (addressed by FloatX)"],
      ]},
      { type: "h2", text: "Partner with Your Trusted Private Market Expert" },
      { type: "p", text: "Don't navigate this journey alone. Partner with FloatX to unleash your full growth potential. Together, we can unlock the power of the private markets and propel your company's success story." },
      { type: "p", text: "Contact us today and embark on this exciting journey with your trusted private market partner." },
      { type: "p", text: "Disclaimer: This information is not financial advice. Please consult with a licensed professional for specific situations." },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
