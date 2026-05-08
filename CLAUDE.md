@AGENTS.md

# FloatX Website

Next.js App Router rebuild of floatx.com — a wholesale alts platform for AU/APAC. Replaces an older generic SaaS template with a brand-led modern site.

- **Live reference:** https://floatx.com
- **Git remote:** https://github.com/Floatx2026/Floatx-.git (`main`)
- **Dev server:** port 3000 (use the preview MCP tools, not `npm run dev` directly)
- **Standing instruction:** commit and push after every individual edit, not just at end of session.

## Stack

- Next.js App Router, Tailwind CSS v4
- Fonts: Bricolage Grotesque (sans), Libre Baskerville italic (display/headlines)
- Path alias: `@/` from project root (`@/components/...`, `@/lib/...`)
- No external UI libraries — use existing primitives in `components/ui/`

## Design tokens (locked — do not invent new colours/sizes)

**Colours:** `navy #162347`, `navy-deep #0E1832`, `tan #AF7D43`, `cream #FAF9F5`, `ink #0D0C22`, `line #DBDBDB`

**Typography:**
- Headlines: `font-serif italic font-normal` (Libre Baskerville italic)
- Body: sans (Bricolage)
- Page hero h1: `font-serif italic font-normal text-navy text-[clamp(44px,6vw,72px)] leading-[1.05] mt-5 mb-5`
- Section h2: `font-serif italic font-normal text-navy text-[clamp(28px,3.4vw,40px)] leading-[1.15]`

**Layout:**
- Container: `max-w-[1200px] mx-auto px-6` (1100px on text-heavy sections)
- Section pattern: alternate cream / white backgrounds; closing CTAs on navy
- Card pattern: `rounded-[20px]`, navy hover shadow `0_18px_36px_-12px_rgba(22,35,71,0.16)`, slight `-translate-y-0.5` on hover

**Primitives:**
- `<Button>` — variants `primary` / `outlineNavy` / `outlineInk` / `outlineWhite` / `preview`; shapes `rect` / `pill`
- `<Eyebrow>`
- One primary CTA per section
- All animations respect `prefers-reduced-motion`

## Conventions

- Italic serif for display, sans for body
- Always read a sibling section component before building a new one — match the existing styling
- Verify changes via the preview server (`preview_*` tools), not Bash or "Claude in Chrome"
- Logos: Google favicon service `https://www.google.com/s2/favicons?domain={domain}&sz=256` (no API key); add `logoBg` for transparent favicons
- **Never write "60,000+" investor count** anywhere on the site (removed across all pages 2026-05-08; ask before reintroducing any investor count)

## Pages

| Route | Status |
|---|---|
| `/` (home) | done — HomeHero, HomeStats, AccessGrid, FeaturedOpportunities, HomePersonas, HomeInsights, HomeClosing |
| `/investments` | done — InvestmentsHero (Sankey SVG), ProductSelector, InvestmentsClosing |
| `/investments/cash-plus` | done — CashPlusHero (WaveField), Features, Calculator, How, Disclosure |
| `/investments/private-trading` | done — Lottie hero, TradingBenefits, TradingCategories, TradingOpportunities (search), TradingClosing |
| `/investments/company-investment` | done — bar chart hero, Benefits, Opportunities, Closing |
| `/investments/fund-investments` | done — FundIndex, IndexChart, FundsClosing |
| `/investments/debt-investments` | done — yield curve hero, Benefits, Types, ComingSoon, Closing |
| `/investments/property-investments` | done — skyline hero, Benefits, ComingSoon, Closing |
| `/investors` | done |
| `/insights` | done |
| `/list-your-asset` | done — see specifics below |
| `/tech-ventures` | done — TechHero (bezier curve), TechStats |
| `/distribution-partners` | **404** — nav links to it, page doesn't exist |

## Shared components & data

- `components/ui/ClosingActions.tsx` — 3 standard CTAs used by ALL closing sections: "Invest now" → `/apply?tier=sophisticated`, "List now" → `/list-your-asset`, "Join now" → `/distribution-partners`
- `components/ui/LottiePlayer.tsx` — wrapper for `@dotlottie/player-component`
- `components/investments/ProductSelector.tsx` — 5 product tiles with gradients and inline-expand reveal
- `components/investments/OpportunityCard.tsx` — client; LogoAvatar (Google favicon + initials fallback); external hrefs open in new tab
- `lib/opportunities.ts` — 17 items; `OpportunityType = "Private Trading" | "Company Investment"`. Top order is intentional (Anthropic, Neuralink, Anduril, Kalshi, OpenAI first). Anthropic/Neuralink/Anduril marked `isUnicorn: true`.
- `lib/insights.ts` — 4 articles with floatx.com WordPress CDN image URLs
- `lib/portfolio-news.ts` — 12 items; hrefs still point to publication homepages, not specific articles (TODO)

## ProductSelector tile order & colours

1. Private Trading — `from-white to-[#EDF1FA]`, navy shadow, icon `#2D4899`
2. Fund Investments — `from-white to-[#F0EDFA]`, purple shadow, icon `#7C5DC7`
3. Company Investment — `from-white to-[#F8F1E5]`, tan shadow, icon `#AF7D43`
4. Debt Investments — `from-white to-[#E8F5F0]`, green shadow, icon `#2BAE7E`
5. Property Investments — `from-white to-[#FAF0EA]`, rust shadow, icon `#C4693A`

## /list-your-asset specifics

- **ListHero is STACKED, not the standard 2-col hero pattern.** Layout: full-width eyebrow + headline on top (font cap 68px, 2 lines via `<br />`), then a 5fr/7fr grid below with body+CTA on the left and `ListingAnim` SVG on the right (~644px wide at 1280px+). Headline is fixed: "Reach Global Accredited Investors. List on FloatX." CTA: "Learn more" → `#list`.
- **ListOpportunities** — 4 cards, heading "Four ways to list on FloatX.": `List for Private Trading`, `List your Fund`, `List to Support Company Growth`, `List a Debt or Property Opportunity`. Section `id="opportunities"`. Grid: 1 / 2 / 4 cols by breakpoint.
- **ListProcess** — 4 steps: `Initial screening`, `Reviewed by Investment Committee`, `Onboarding`, `Open to investors`. Desktop `grid-cols-4`. Step 2 title wraps to 2 lines (accepted as-is).
- **ListForm** has `id="list"` and `scroll-mt-24`.
- Dropped "across the AU/APAC region" from the debt/property listing card body.

## /investments/private-trading specifics

- `TradingOpportunities` is a **client component** with a search input filtering by name + sector + blurb (case-insensitive `.includes()`). Empty state with "Clear search" button. Grid 1 / 2 / 3 / 4 cols.
- `TradingCategories` — all 4 cards (Private trading / Unicorn / Funds / Debt) link to `#opportunities` (same in-page section, not other pages).

## Navbar

- **Investments dropdown:** All Opportunities, Cash Plus (featured), Company Investment, Fund Investments, Property Investments, Debt Investments, Tech Ventures
- **Top-level chips:** Private Trading, Investors, List Your Asset, Insights, Distribution Partners
- **Right side:** "Log In" → `https://app.floatx.com/signup` (new tab); language picker (🇦🇺 En)

## Cash Plus product spec (locked)

- Target return: RBA cash rate + 2.00% p.a. (`CURRENT_TARGET_RATE = 6.10` in `CashPlusHero.tsx`)
- Wholesale only (s708 Corporations Act)
- A$1,000 min start, A$100 top-up, instant liquidity (T+1)

## Hero animations built (reference)

- `/investments` — Sankey: 5 streams with orbital ellipse nodes + `animateMotion` particles
- `/investments/private-trading` — Lottie at `public/animations/opportunities-hero.json`
- `/investments/company-investment` — Funding rounds bar chart (SEED → PRE-IPO)
- `/investments/debt-investments` — Yield curve bezier with 8.3% endpoint badge
- `/investments/property-investments` — Skyline with yield % pills
- `/investments/cash-plus` — WaveField (5 layered horizontal waves)
- `/tech-ventures` — Bezier curve with PRE-SEED → SCALE milestones, FloatX Ventures hub badge

## Open items / TODO

1. **`/distribution-partners` 404** — nav links to it, no page exists (high priority)
2. **Portfolio news hrefs** — all 12 items in `lib/portfolio-news.ts` point to publication homepages, not specific articles. Need real URLs before launch.
3. **Cash Plus issuer placeholder** — `CashPlusDisclosure.tsx` says `[Issuer + ARSN to confirm]`
4. **Investors form** — client-side state only, no backend (HubSpot/Mailchimp/CRM TBD)
5. **`PreviewCta.tsx` exists but is unwired** — keep or delete
6. **FeaturedOpportunities not refactored** — still has inline 8-company array, not using `lib/opportunities.ts`

## Public assets

- `public/floatx-logo.png` — RGBA PNG, 1593×462, white bg stripped
- `public/floatx-logo-white.svg` — white SVG logo for footer
- `public/animations/opportunities-hero.json` — 290KB Lottie (Private Trading hero)
