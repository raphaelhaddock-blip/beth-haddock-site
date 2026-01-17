# DOMAIN 5: Stablecoin Mechanics & Regulation

## How Stablecoins Work and Why They're the Regulatory Battleground

---

## What Stablecoins Actually Are

### The Problem They Solve

**Crypto's volatility problem:**
- Bitcoin can move 10-20% in a day
- Ethereum has seen 80%+ drawdowns
- Can't price goods/services or run a business on volatile currency
- Traders need a stable "parking spot" between trades

**The solution:** Cryptocurrencies designed to maintain stable value, typically pegged 1:1 to the US dollar.

**Market size (January 2026):**
- Total stablecoin market cap: ~$170+ billion
- USDT (Tether): ~$115+ billion
- USDC (Circle): ~$35+ billion
- DAI: ~$5 billion
- ~99% of fiat-backed stablecoins are pegged to USD

---

## The Three Types of Stablecoins

### Type 1: Fiat-Backed (USDT, USDC)

**How it works:**
1. Issuer holds dollars (or dollar equivalents) in reserve
2. For every dollar deposited, issuer mints 1 stablecoin
3. For every stablecoin redeemed, issuer burns it and returns $1
4. Peg maintained through arbitrage: if price < $1, traders buy and redeem; if > $1, mint and sell

**Reserve assets typically include:**
- Cash in bank accounts
- U.S. Treasury bills
- Money market funds
- Commercial paper (controversial)
- Reverse repurchase agreements

**Advantages:**
- Simple mechanism
- Easy to understand backing
- Predictable redemption

**Disadvantages:**
- Centralized (single company controls reserves)
- Counterparty risk (what if issuer lies about reserves?)
- Censorship possible (issuer can freeze accounts)
- Requires trust

### Type 2: Crypto-Collateralized (DAI)

**How it works:**
1. User deposits crypto (e.g., ETH) into smart contract as collateral
2. Smart contract mints stablecoins against collateral (e.g., DAI)
3. Overcollateralized: typically 150%+ collateral ratio required
4. If collateral value drops below threshold → automatic liquidation
5. Peg maintained through liquidation mechanisms and governance

**Example (MakerDAO/DAI):**
- Deposit $150 worth of ETH
- Can borrow up to ~100 DAI (150% collateralization)
- If ETH price drops and ratio falls below threshold, position liquidated
- Collateral sold to repay DAI, protecting the peg

**Advantages:**
- Decentralized (no single company controls)
- Transparent (all collateral visible on-chain)
- Censorship-resistant (no one can freeze accounts)
- No counterparty on reserves

**Disadvantages:**
- Capital inefficient (need to lock up more than you borrow)
- Liquidation risk during market crashes
- Complexity for average users
- Still depends on collateral asset stability

### Type 3: Algorithmic (UST, FRAX)

**How it works:**
1. No collateral backing (or partial collateral)
2. Algorithm adjusts supply based on demand
3. If price > $1 → mint more coins, increasing supply, lowering price
4. If price < $1 → burn coins (or create arbitrage incentive), decreasing supply, raising price
5. Often involves companion token that absorbs volatility

**The Terra/UST mechanism:**
- UST (stablecoin) and LUNA (volatile companion token)
- Users could always swap 1 UST for $1 worth of LUNA
- This arbitrage was supposed to maintain the peg
- Spoiler: It didn't.

**Advantages:**
- Capital efficient (no locked collateral)
- Theoretically scalable
- Decentralized if done right

**Disadvantages:**
- "Death spiral" risk (confidence loss → selling → more selling)
- No actual backing if things go wrong
- History of spectacular failures

**Sources:** [Wikipedia - Stablecoin](https://en.wikipedia.org/wiki/Stablecoin), [Federal Reserve - Stablecoins](https://www.federalreserve.gov/econres/notes/feds-notes/primary-and-secondary-markets-for-stablecoins-20240223.html), [JP Morgan - Stablecoins](https://privatebank.jpmorgan.com/apac/en/insights/markets-and-investing/demystifying-stablecoins)

---

## Tether (USDT): The Controversial Giant

### History

**Founded:** September 5, 2014 (Tether Holdings Limited incorporated in British Virgin Islands)
**Originally:** Called "RealCoin," rebranded to Tether November 2014
**Founders:** Phil Potter (Bitfinex CSO) and Giancarlo Devasini
**Connection:** Tether and Bitfinex share ownership through iFinex

**January 2015:** Bitfinex exchange enabled USDT trading

### The 2017 Crisis and Attestation Scandal

**Summer 2017:** Rumors circulated that Tether wasn't fully backed

**The attestation setup:**
- Tether hired Friedman LLP for attestation
- On September 15, 2017 (the morning of the attestation), Bitfinex transferred $382 million from Bitfinex's account at Noble Bank to Tether's account at Noble Bank
- Friedman conducted verification that evening
- Attestation showed Tether had $382 million in reserves

**The problem (revealed later by NY Attorney General):**
> "No one reviewing Tether's representations would have reasonably understood that the $382,064,782 listed as cash reserves for tethers had only been placed in Tether's account as of the very morning that Friedman verified the bank balance."

**December 5, 2017:** CFTC issued subpoenas to Bitfinex and Tether

**January 2018:** Tether announced they no longer had a relationship with their auditor

### Regulatory Findings

**CFTC Finding (October 2021):**
> "Tether held sufficient fiat reserves in its accounts to back USDT tokens in circulation for only **27.6%** of the days in a 26-month sample time period from 2016 through 2018."

**NY Attorney General Finding:**
> "Starting no later than mid-2017, Tether had no access to banking, anywhere in the world, and so for periods of time held no reserves to back tethers in circulation at the rate of one dollar for every tether, contrary to its representations."

### The Definition Change

**Before February 25, 2019:**
> "Every tether is always backed 1-to-1, by traditional currency held in our reserves. So 1 USDT is always equivalent to 1 USD."

**After February 25, 2019:**
> "Tether Tokens are 100% backed by Tether's Reserves"

**New definition of "reserves":** "traditional currency and cash equivalents and, from time to time, may include other assets and receivables from loans made by Tether to third parties, which may include affiliated entities."

### Settlements and Fines

**February 23, 2021:** Bitfinex/Tether paid $18.5 million to settle with NY Attorney General
- Agreed to cease trading in New York
- Did not admit wrongdoing

**October 15, 2021:** CFTC ordered Tether to pay $41 million civil penalty
- "Making untrue or misleading statements and omissions of material fact"

### Market Manipulation Allegations

**Academic Study (Griffin & Shams):**
- Throughout 2017, Tether purchases consistently followed crypto market downturns
- This buying pattern resulted in price lifts for Bitcoin
- Conclusion: "entities associated with Bitfinex" traded Tether to manipulate BTC prices

### Current Status

**July 2022:** Tether began quarterly attestations by BDO Italia

**Key distinction (Wall Street Journal):**
> "Since at least 2017, Tether has been assuring investors that it will get audited, though it has yet to deliver" - attestations are "snapshots of a company's assets held at one moment in time with less rigorous standards than audits."

**Tether has never submitted to an independent audit.**

**Despite controversies:** USDT remains the largest stablecoin by market cap and trading volume.

**Sources:** [Wikipedia - Tether](https://en.wikipedia.org/wiki/Tether_(cryptocurrency)), [NY AG Press Release](https://ag.ny.gov/press-release/2021/attorney-general-james-ends-virtual-currency-trading-platform-bitfinexs-illegal), [CFTC Order](https://www.cftc.gov/PressRoom/PressReleases/8450-21), [Amy Castor Timeline](https://amycastor.com/2019/01/17/the-curious-case-of-tether-a-complete-timeline-of-events/)

---

## USDC (Circle): The Regulated Alternative

### History

**September 26, 2018:** USDC launched as collaboration between Circle and Coinbase
**Founding vision:** Create a "compliant" alternative to Tether

**Circle's evolution:**
- Founded by Jeremy Allaire and Sean Neville during early blockchain days
- Initially a Bitcoin payments app and crypto exchange
- Around 2018: Pivoted to focus entirely on stablecoins

### Reserve Management

**Current reserve composition:**
- ~88% U.S. Treasuries and overnight reverse repurchase agreements
- All maturities less than 2 months
- Majority held in Circle Reserve Fund (SEC-registered government money market fund managed by BlackRock)
- Segregated from Circle's operational funds

**Key differentiators from Tether:**
- Monthly reserve attestations (not just quarterly)
- SEC-registered money market fund structure
- U.S.-based and regulated
- Transparent about reserve composition

### The SVB Crisis (March 2023)

**March 10, 2023:** Circle announced $3.3 billion of USDC reserves were held at Silicon Valley Bank
- SVB was seized by regulators
- Circle couldn't wire out funds in time

**The de-peg:** USDC fell to ~$0.87 on secondary markets

**Resolution:**
- Federal government guaranteed all SVB deposits
- Circle regained access to full $3.3 billion
- USDC returned to $1 peg
- But: demonstrated risk of even "compliant" stablecoins

### IPO Attempt and S-1 Filing

**First attempt (2021):** SPAC merger failed - didn't complete SEC qualification in time

**January 2024:** Filed draft IPO registration

**April 2025:** Filed S-1 with SEC

**Key S-1 disclosures:**
- 2024 revenue: $1.68 billion (~99% from reserve income)
- 2024 net income: $156 million
- Working with JPMorgan Chase and Citi on IPO
- Expected ticker: CRCL
- Target valuation: ~$5 billion

**Coinbase relationship:**
- Coinbase took minority equity stake in Circle (2023)
- Revenue-sharing: Coinbase receives 100% of interest on USDC held on Coinbase, 50% on USDC held elsewhere
- Critical distribution partner

**Risk factors disclosed:**
- 1% decrease in interest rates → ~$441 million revenue drop
- 87% of reserves concentrated in single money market fund structure
- Heavy dependence on Coinbase relationship

**Sources:** [Fortune - Circle IPO](https://fortune.com/crypto/2025/04/01/crypto-giant-circle-just-filed-for-an-ipo-here-are-5-key-takeaways/), [CoinDesk - Circle S-1](https://www.coindesk.com/business/2025/04/01/stablecoin-giant-circle-files-for-ipo), [Coin Metrics](https://coinmetrics.substack.com/p/state-of-the-network-issue-307)

---

## Terra/Luna Collapse: Algorithmic Failure

### The Promise

**Do Kwon's vision:** Algorithmic stablecoin without collateral requirements
- TerraUSD (UST): Algorithmic stablecoin
- LUNA: Companion volatile token that absorbs volatility

**The mechanism:**
- Users could always swap 1 UST for $1 worth of LUNA (and vice versa)
- If UST < $1: Arbitrageurs buy UST, swap for LUNA, sell LUNA for profit
- This buying pressure should return UST to $1
- If UST > $1: Mint new UST with LUNA, sell UST, profit from premium

**Anchor Protocol:** Offered 20% APY on UST deposits - attracted massive capital

### The Death Spiral (May 2022)

**The fatal flaw:**
> "The design relied entirely on confidence. If UST holders lost faith and began selling en masse, the death spiral would be unstoppable."

**Timeline:**

**May 7, 2022:** UST begins losing peg
- Dropped to $0.98, then $0.95, then $0.90
- Holders rushed for exits

**The spiral:**
1. UST drops below $1
2. Arbitrageurs swap UST for LUNA
3. Billions of new LUNA created
4. LUNA price crashes (from $116 peak to <$30)
5. Confidence collapses further
6. More UST selling
7. More LUNA creation
8. LUNA crashes harder
9. Repeat until both worthless

**May 9, 2022:** Do Kwon's infamous tweet: "Deploying more capital — steady lads"

**May 12, 2022:** LUNA plunged 96% to less than $0.10, exchanges halted trading

**May 13, 2022:** LUNA effectively worth $0

### The Aftermath

**Losses:**
- ~$40 billion in market value wiped out "almost overnight"
- 280,000 South Korean investors affected
- Triggered broader crypto contagion

**Cascading failures:**
- Three Arrows Capital bankruptcy (had Terra exposure)
- Deepened 2022 "crypto winter"
- Celsius, Voyager, and other firms failed partly due to contagion

### Legal Consequences

**Do Kwon's flight:**
- Fled South Korea to Montenegro
- March 2023: Arrested attempting to board flight to Dubai with fake passport
- Extradited to United States

**Criminal charges:**
- Pleaded guilty to wire fraud and conspiracy (August 2025)
- Admitted lying to investors about safety and backing

**Sentencing (December 2025):**
- 15 years federal prison
- Judge called it "fraud on epic, generational scale"
- Exceeded both defense request (5 years) and prosecution request (12 years)

### Regulatory Implications

The Terra collapse directly influenced:
- NYDFS's strict stablecoin guidance (issued June 2022, one month after collapse)
- Congressional focus on stablecoin legislation
- SEC and CFTC enforcement attention on stablecoins
- General skepticism of algorithmic stablecoins

**Sources:** [Baker McKenzie - Do Kwon](https://blockchain.bakermckenzie.com/2025/08/13/the-rise-and-fall-of-do-kwon-and-the-ust-stablecoin-from-crypto-visionary-to-convicted-fraudster/), [The Block - Do Kwon Sentencing](https://www.theblock.co/post/382204/terraform-labs-founder-do-kwon-sentenced-to-15-years-over-40-billion-terra-luna-collapse-inner-city-press), [Bitstamp - Terra Collapse](https://www.bitstamp.net/en-gb/learn/crypto-101/terra-network-collapse/)

---

## NYDFS: The Gold Standard Regulator

### Background

**New York Department of Financial Services (NYDFS):**
- Created BitLicense (2015) - first state crypto regulatory framework
- Superintendent Adrienne A. Harris led stablecoin guidance effort
- Regulates stablecoin issuers operating in New York

**Why NYDFS matters:**
- New York is financial capital
- Many major stablecoins need NY access
- NYDFS guidance became de facto national standard before federal legislation

### June 2022 Stablecoin Guidance

**Issued:** June 8, 2022 (one month after Terra collapse)

**Applies to:** U.S. dollar-backed stablecoins issued by DFS-regulated entities (BitLicense holders or limited purpose trust companies)

**Core requirements:**

**1. Full Backing (1:1 Reserve):**
> "The stablecoin must be fully backed by a Reserve of assets, meaning that the market value of the Reserve is at least equal to the nominal value of all outstanding units of the stablecoin as of the end of each business day."

**2. Permitted Reserve Assets (Strict Limits):**
- U.S. Treasury bills (≤3 months to maturity)
- Overnight reverse repurchase agreements backed by Treasuries
- Government money-market funds (with NYDFS-approved caps)
- Deposit accounts at FDIC-insured depository institutions

**What's NOT permitted:**
- Commercial paper
- Corporate bonds
- Crypto assets
- Loans to affiliates

**3. Segregation:**
- Reserve assets must be segregated from issuer's proprietary assets
- Held in custody at U.S. depository institutions or NYDFS-approved custodians
- Held for benefit of stablecoin holders

**4. Redemption Rights:**
> "The issuer must adopt clear redemption policies that confer on any lawful holder of the stablecoin a right to redeem units from the Issuer in a timely fashion at par — at a 1:1 exchange rate for the U.S. dollar."

**5. Monthly Attestations:**
- Management assertions examined by U.S.-licensed CPA
- Must be made public
- Copy to NYDFS within 30 days

**Compliance deadline:** September 8, 2022

### Why This Framework Matters

**Before NYDFS guidance:**
- Tether could claim "reserves" included commercial paper, loans to affiliates
- No standard for what "backed" meant
- Issuers could define terms however they wanted

**After NYDFS guidance:**
- Clear definition of acceptable reserves
- Mandatory segregation
- Redemption rights codified
- Monthly transparency requirements

**The NYDFS model influenced federal legislation that followed.**

**Sources:** [NYDFS Industry Letter](https://www.dfs.ny.gov/industry_guidance/industry_letters/il20220608_issuance_stablecoins), [CNBC](https://www.cnbc.com/2022/06/08/new-yorks-financial-watchdog-issues-stablecoin-guidance-calls-for-reserve-requirements.html), [Cooley](https://www.cooley.com/news/insight/2022/2022-06-21-ny-guidance-on-stablecoins-establishes-requirements-for-reserve-assets-and-redeemability)

---

## GENIUS Act: Federal Stablecoin Framework (2025)

### Legislative History

**Introduction:** February 4, 2025 (Senate)
**Full name:** Guiding and Establishing National Innovation for U.S. Stablecoins Act
**Senate passage:** June 17, 2025 (68-30, bipartisan)
**House passage:** July 17, 2025 (308-122)
**Signed into law:** July 18, 2025 (President Trump)

**Significance:** First federal digital asset legislation in U.S. history

### Key Provisions

**1. Definition of Payment Stablecoin:**
- Digital asset issued for payment or settlement
- Redeemable at predetermined fixed amount (e.g., $1)

**2. Permitted Issuers (Three Categories):**
1. Subsidiaries of FDIC-insured depository institutions (regulated by banking agencies)
2. Nonbank institutions supervised by OCC
3. State-chartered entities meeting federal standards (or substantially similar state standards)

**3. Reserve Requirements:**
- **1:1 backing** with U.S. dollars or low-risk assets
- Permitted reserves limited to:
  - Cash and coin
  - Deposits at FDIC-insured institutions
  - Short-dated Treasury bills
  - Repos and reverse repos backed by T-bills
  - Government money market funds
  - Central bank reserves
  - Other regulator-approved government assets

**4. Federal vs. State Regulation:**
- Issuers may choose federal or state regulation
- **BUT:** State regulation limited to issuers with ≤$10 billion in stablecoin issuance
- Above $10 billion → must transition to federal regime

**5. Securities Law Exemption:**
> "A payment stablecoin issued by a permitted payment stablecoin issuer is not a 'security' under the US federal securities laws or a 'commodity' under the Commodity Exchange Act."

This removes SEC and CFTC jurisdiction over compliant payment stablecoins.

**6. Prohibition on Non-Financial Issuers:**
- Non-financial public companies generally prohibited from issuing stablecoins
- Requires unanimous approval from Stablecoin Certification Review Committee (Treasury, Fed, FDIC) for exceptions
- Aimed at preventing tech giants (Apple, Google, Meta) from creating their own stablecoins

**7. Foreign Issuers:**
- May operate in U.S. if:
  - Register with OCC
  - Maintain reserves in U.S. financial institutions
  - Home country has comparable regulatory regime (Treasury determination)

**8. AML/BSA Requirements:**
- Stablecoin issuers treated as "financial institutions" under Bank Secrecy Act
- Full KYC/CIP requirements
- Suspicious activity monitoring and reporting
- Sanctions screening

**9. Reporting Requirements:**
- Disclose redemption procedures
- Periodic reports on outstanding stablecoins and reserve composition
- Executive certification required
- Public accounting firm examination
- **>$50 billion outstanding:** audited annual financial statements required

**10. Interest Prohibition:**
- Issuers prohibited from paying interest to stablecoin holders
- Distinguishes stablecoins from bank deposits

**11. Bankruptcy Protections:**
- Stablecoin holders have priority status in bankruptcy
- Reserve assets excluded from debtor's estate

**Effective Date:** Earlier of 18 months after enactment or 120 days after final regulations issued

**Sources:** [Congress.gov - S.1582](https://www.congress.gov/bill/119th-congress/senate-bill/1582), [Covington](https://www.cov.com/news-and-insights/insights/2025/07/the-genius-act-becomes-law-key-provisions-from-the-federal-stablecoin-regulatory-framework), [Latham & Watkins](https://www.lw.com/en/insights/the-genius-act-of-2025-stablecoin-legislation-adopted-in-the-us), [Mayer Brown](https://www.mayerbrown.com/en/insights/publications/2025/07/genius-act-signed-into-law-us-enacts-federal-stablecoin-legislation)

---

## Key Facts (Verified with Sources)

### Market Data
- Total stablecoin market: ~$170+ billion
- USDT market cap: ~$115+ billion
- USDC market cap: ~$35+ billion
- ~99% of fiat-backed stablecoins pegged to USD

### Tether
- Founded: September 5, 2014 (British Virgin Islands)
- CFTC finding: Fully backed only 27.6% of days (2016-2018)
- NY AG settlement: $18.5 million (February 2021)
- CFTC penalty: $41 million (October 2021)
- Never submitted to independent audit

### Circle/USDC
- Launched: September 26, 2018
- SVB exposure: $3.3 billion (March 2023)
- 2024 revenue: $1.68 billion (99% from reserve income)
- 2024 net income: $156 million
- S-1 filed: April 2025

### Terra/Luna
- Collapse: May 7-13, 2022
- Losses: ~$40 billion
- Do Kwon sentenced: 15 years federal prison (December 2025)
- Korean investors affected: ~280,000

### NYDFS Guidance
- Issued: June 8, 2022
- Compliance deadline: September 8, 2022
- Key requirement: Monthly attestations

### GENIUS Act
- Signed: July 18, 2025
- Senate vote: 68-30
- House vote: 308-122
- State regulation cap: $10 billion
- Audit threshold: $50 billion

---

## Beth's Expertise Connection

### GMO-Z Trust

**Direct relevance:** Beth sits on the board of a NYDFS-regulated stablecoin issuer.

**This means she understands:**
- The actual reserve management requirements
- Monthly attestation processes
- Segregation and custody requirements
- How issuers navigate redemption policies
- The operational reality of compliance

**Questions she can answer from experience:**
- What does NYDFS actually require day-to-day?
- How do you structure reserves to meet requirements?
- What's the audit/attestation process really like?
- How do you handle redemption at scale?

### Pre- vs. Post-GENIUS Act

Beth experienced stablecoin regulation:
- Before federal framework (NYDFS-only regime)
- Through passage of GENIUS Act
- During implementation planning

**This gives perspective on:**
- How state regulation became the template
- What federal law adds (or changes)
- Implementation challenges ahead

---

## Collision Points

### The Tether Paradox

**The uncomfortable truth:**
- Tether has been fined for misrepresentation
- Never had a real audit
- Backed only 27.6% of days during key period
- **Yet remains the dominant stablecoin**

**Why this matters:**
- Market chose convenience over compliance
- Offshore issuers can serve global market without U.S. regulation
- U.S. regulation may just push activity elsewhere

### The De-Peg Risk

**Even "compliant" stablecoins can de-peg:**
- USDC de-pegged during SVB collapse (March 2023)
- $3.3 billion trapped at failed bank
- Government bailout saved the day

**Questions this raises:**
- Is any reserve "safe"?
- What happens in a broader banking crisis?
- Should stablecoin reserves be at the Fed directly?

### The Tech Giant Question

**GENIUS Act's non-financial company ban targets:**
- Apple (could integrate stablecoin with Apple Pay)
- Google (could integrate with Android Pay)
- Meta (tried Libra/Diem, failed)
- Amazon, Microsoft, etc.

**The tension:**
- Tech giants have distribution (billions of users)
- Banks don't want tech competition
- GENIUS Act protects banks from tech encroachment
- Is this regulatory capture or prudent policy?

### Offshore vs. Onshore

**Post-GENIUS Act landscape:**
- U.S. issuers: Heavy regulation, federal oversight, AML requirements
- Tether (British Virgin Islands): Lighter touch, global access

**The question:**
- Will U.S. regulation make USDC dominant domestically?
- Or will global users continue choosing USDT?
- Can offshore issuers be forced to comply for U.S. access?

---

## Why This Matters

Stablecoins are:
1. **The bridge** between crypto and traditional finance
2. **The payment rail** for DeFi and crypto trading
3. **The potential threat** to commercial bank deposits
4. **The regulatory battleground** defining crypto's future

The GENIUS Act represents the first time Congress created a comprehensive framework for any digital asset. How stablecoin regulation works (or doesn't) will shape:
- Whether crypto integrates with traditional finance
- Whether U.S. maintains role in global digital payments
- Whether banks or tech companies control the next payment infrastructure

This is why stablecoins—not Bitcoin, not Ethereum—are the center of regulatory attention.

