# DOMAIN 7: Tokenization - Real World Assets

## Bringing Traditional Finance On-Chain

---

## What Tokenization Actually Means

### The Core Concept

**Tokenization:** Representing ownership of real-world assets as digital tokens on a blockchain.

**What gets tokenized:**
- Securities (stocks, bonds)
- Real estate
- Private credit/debt
- Commodities
- Fund shares
- Treasury bonds
- Art, collectibles

**What the token represents:**
- NOT the asset itself
- Ownership rights to the asset
- Claim on cash flows
- Proportional share of an underlying entity

**The "digital wrapper" metaphor:**
> "It's the same as using a known asset and putting a digital wrapper around it. It's not a new product from the perspective of regulators—it's merely a new distribution channel."

### Why Tokenization Matters

**Problems with traditional assets:**
- Settlement takes T+2 (stocks) or longer (real estate)
- Trading hours limited (NYSE: 9:30am-4pm ET)
- Minimum investments high (hedge funds: often $1M+)
- Geographic restrictions
- Intermediary costs (brokers, custodians, transfer agents)

**What tokenization enables:**
- Near-instant settlement (blockchain finality)
- 24/7 trading capability
- Fractional ownership (buy $100 of real estate)
- Global access (if compliant)
- Programmable compliance
- Potential cost reduction

---

## Security Tokens vs. Utility Tokens

### The Critical Distinction

**Security tokens:**
- Represent ownership or stake in an underlying asset
- Subject to securities regulations
- Holders have legal rights (dividends, voting, profits)
- Must comply with SEC registration or exemptions
- Value tied to underlying asset performance

**Utility tokens:**
- Provide access to a product or service
- Like a "key" or "voucher" for platform functionality
- Not primarily investment vehicles
- No ownership rights
- Largely unregulated (if truly utility)

### The Problem: Misclassification

**The ICO mistake:**
- 2017-2018: Projects called tokens "utility" to avoid SEC
- "It's for using our platform, not investing!"
- SEC response: If it meets Howey Test, it's a security regardless of label

**SEC's view:**
> "Even if a token is marketed as a utility token, the SEC may still consider it a security if it meets the Howey Test criteria."

### Security Tokens vs. Tokenized Securities

**These are different concepts:**

**Security tokens:**
- New digital assets that are securities
- May represent new investment products
- Created natively on blockchain

**Tokenized securities:**
- Existing securities (stocks, bonds) put on blockchain
- Same legal instrument, different rails
- "Digital wrapper" around traditional asset

**Regulatory implication:**
> "Tokenized securities are still securities. Putting a traditional security on a blockchain does not change its legal nature."

**Sources:** [Coinbase - Utility vs Security](https://www.coinbase.com/learn/crypto-basics/utility-tokens-vs-security-tokens-what-are-the-differences), [Blockchain Council](https://www.blockchain-council.org/blockchain/security-tokens-vs-utility-tokens-guide/), [Zoniqx](https://www.zoniqx.com/resources/security-tokens-stos-the-complete-guide-to-regulated-digital-securities)

---

## The Legal Structure: SPVs and Transfer Agents

### Why You Can't Just "Tokenize" Property

**The misconception:** "We'll put the building on the blockchain"

**The reality:** You can't put a building on a blockchain. You tokenize ownership of an *entity* that holds the building.

### The SPV Structure

**SPV = Special Purpose Vehicle**

**How it works:**
1. Create legal entity (LLC, trust, or corporation)
2. Entity takes title to the property/asset
3. Investors buy shares/interests in the *entity*
4. Shares represented as tokens on blockchain
5. SPV's operating agreement governs rights

**Why this structure:**
- Provides legal wrapper
- Enables fractional ownership
- Maintains regulatory compliance
- Separates asset from issuer's other business

**Document stack:**
- Private Placement Memorandum (PPM)
- Subscription agreement
- Operating agreement of SPV
- Token purchase agreement
- Smart contract code

**Critical requirement:**
> "Ensuring alignment between the code (smart contract) and the legal contract is a key best practice."

### Transfer Agent Requirements

**What transfer agents do:**
- Maintain official shareholder register
- Process transfers of ownership
- Handle corporate actions (dividends, votes)
- Ensure accurate record-keeping

**Why this matters for tokenization:**
- SEC requires registered transfer agents for securities
- Blockchain ledger must sync with legal register
- Someone must bridge on-chain and off-chain records

**The compliance stack typically includes:**
- SEC-registered broker-dealer
- SEC-registered transfer agent
- Fund administrator
- ATS (Alternative Trading System) operator

**Sources:** [Legal Nodes](https://www.legalnodes.com/article/real-estate-tokenization), [Antier Solutions](https://www.antiersolutions.com/blogs/the-role-of-spv-structure-in-tokenization-a-comprehensive-guide/), [InnReg](https://www.innreg.com/blog/tokenized-real-estate)

---

## SEC Registration Exemptions

### The Three Main Paths

**Security token offerings require either:**
1. Full SEC registration (expensive, time-consuming)
2. Exemption from registration (more common)

**Key exemptions:**

**Regulation D (Rule 506):**
- Most common for tokenized securities
- Limited to accredited investors
- No SEC qualification process
- Must file Form D after first sale
- Rule 506(b): No general solicitation, 35 non-accredited max
- Rule 506(c): General solicitation allowed, ALL must be accredited

**Regulation A+ (Reg A+):**
- "Mini IPO" for smaller offerings
- Tier 1: Up to $20 million, state registration required
- Tier 2: Up to $75 million, no state registration
- Retail investors CAN participate
- Longer approval process (SEC qualification)

**Regulation S (Reg S):**
- For offerings outside the United States
- Non-U.S. investors only
- No SEC registration required
- Distribution restrictions to prevent flowback

### Compliance Requirements

**Regardless of exemption:**
- KYC (Know Your Customer) required
- AML (Anti-Money Laundering) checks
- Accredited investor verification (for Reg D)
- Holding period restrictions (Rule 144)
- Transfer restrictions programmed into tokens

**Modern token standards (ERC-3643, ERC-7518):**
> "Allow compliance requirements to be programmed directly into the smart contract... making compliance automatic rather than operational."

---

## Tokenized Treasury Bonds: The Killer App

### Why Treasuries First?

**Characteristics that make treasuries ideal:**
- Low risk (backed by U.S. government)
- Well-understood instrument
- Clear regulatory status
- Yield-generating (interest payments)
- High liquidity in traditional markets

**The use case:**
> "U.S. Treasuries have emerged as a gateway for tokenization efforts as a low-risk, well-known instrument where investors can park their on-chain cash and earn stable yield."

### Market Growth

**The explosion:**
- Early 2023: ~$100 million in tokenized treasuries
- Mid-2024: ~$1.5 billion
- Late 2024: ~$4 billion
- 2025: ~$7.3-9 billion

**50x growth since January 2024**

### The Key Players

**BlackRock BUIDL:**
- Launched: March 2024
- AUM: $2.8+ billion (late 2025)
- ~32% market share
- On Ethereum blockchain
- Partnered with Securitize
- Backed by: Treasury bills, repos, cash
- Minimum: $5 million (institutional)

**Franklin Templeton FOBXX/BENJI:**
- Earlier entrant (2021)
- First tokenized U.S. government money fund
- Was largest until BUIDL launched
- Uses Stellar and Polygon blockchains

**Ondo Finance:**
- OUSG: Tokenized short-term Treasuries
- USDY: Yield-bearing stablecoin-like product
- ~$1.6 billion in assets
- Enables DeFi integration

**Others entering:**
- Fidelity
- State Street
- UBS (uMINT fund)
- WisdomTree
- Janus Henderson

### Why BlackRock Matters

**March 2024 BUIDL launch = watershed moment:**
- Largest asset manager in the world ($10+ trillion)
- Institutional validation of tokenization
- Brought credibility to the space
- Set standard for institutional-grade tokenization

**Larry Fink (BlackRock CEO) evolution:**
- 2017: Called Bitcoin "index of money laundering"
- 2023: Applied for Bitcoin ETF
- 2024: Launched tokenized fund, called tokenization "the next generation for markets"

**Sources:** [CoinDesk - BUIDL](https://www.coindesk.com/markets/2024/04/30/blackrocks-buidl-becomes-largest-tokenized-treasury-fund-hitting-375m-toppling-franklin-templetons), [Yellow.com](https://yellow.com/research/tokenized-us-treasuries-hit-dollar73b-in-2025-complete-guide-to-digital-treasury-bonds), [RWA.xyz](https://app.rwa.xyz/treasuries)

---

## Securitize: The Infrastructure Layer

### What Securitize Does

**The vertically integrated platform:**
- **SEC-registered transfer agent:** Maintains shareholder records
- **SEC-registered broker-dealer:** Facilitates securities transactions
- **Fund administrator:** NAV calculations, investor reporting
- **Alternative Trading System (ATS):** Secondary market trading
- **FINRA and SIPC member**

**Why this matters:**
- Only platform with all regulatory licenses
- Can handle entire lifecycle of tokenized security
- Used by BlackRock, KKR, Hamilton Lane, Apollo

### Track Record

**Assets tokenized:** $4+ billion

**Notable firsts:**
- KKR Health Care Fund II (2022): First major PE fund tokenized
- BlackRock BUIDL (2024): Largest tokenized RWA

### Going Public

**Announced 2025:** SPAC merger at $1.25 billion valuation

**The meta-move:** Securitize plans to tokenize its own equity as part of going public—demonstrating that public company stock itself can be on-chain.

**Projected market:** $19 trillion TAM (total addressable market) for tokenization

**Sources:** [Securitize.io](https://securitize.io/), [PR Newswire - SPAC](https://www.prnewswire.com/news-releases/securitize-the-leading-tokenization-platform-to-become-a-public-company-at-1-25b-valuation-via-business-combination-with-cantor-equity-partners-ii-302596208.html)

---

## DeFi Integration: Composability

### The Unique Value Proposition

**Tokenized assets can be used in DeFi:**
- Use BUIDL or OUSG as collateral
- Borrow stablecoins against Treasury exposure
- Earn additional yield through DeFi protocols
- 24/7 availability vs. traditional market hours

**Example:**
1. Hold $1M in tokenized Treasuries (earning ~5% yield)
2. Use as collateral in Aave or Maker
3. Borrow stablecoins at lower rate
4. Deploy borrowed funds for additional yield
5. Net result: Higher returns than just holding Treasuries

### The Composability Promise

**"Money Legos":**
- Tokenized assets can plug into any DeFi protocol
- Build complex financial products from simple components
- Institutional-grade assets meet DeFi efficiency

**Why this excites institutions:**
- Productive collateral (earns yield while posted)
- Capital efficiency
- New strategies impossible in traditional finance

---

## Key Facts (Verified with Sources)

### Market Data
- Tokenized Treasury market (2025): ~$7.3-9 billion
- Growth since January 2024: ~50x
- BlackRock BUIDL AUM: $2.8+ billion
- Ondo Finance AUM: ~$1.6 billion
- Total RWA market (excluding stablecoins): $15-24 billion

### Growth Projections
- BCG-Ripple projection: $18.9 trillion tokenized assets by 2033
- CAGR: 53%
- Institutional investors in tokenized assets (2024): ~1.6%
- Projected by 2027: ~6%

### Key Players
- Securitize: $4+ billion tokenized, $1.25B valuation
- BlackRock BUIDL: Launched March 2024, largest in 6 weeks
- Franklin Templeton: Pioneer, FOBXX/BENJI
- Ondo Finance: OUSG and USDY

### Cost Savings
- BIS estimate: Tokenized government bonds can reduce costs by 1.2% of nominal value over bond lifetime

---

## Beth's Expertise Connection

### Ondo Finance

**Direct relevance:** Beth advises Ondo, a leading tokenized Treasury and RWA platform.

**This means she understands:**
- The actual structure of tokenized Treasury products
- How OUSG and USDY work mechanically
- Regulatory considerations for tokenized securities
- The intersection of DeFi and traditional securities

### The Translation Function

Beth can explain:
- **To institutions:** How tokenization works technically and legally
- **To crypto natives:** What compliance requirements apply
- **To both:** How to structure products that work across both worlds

### Securities Law Application

From Domain 2 (Securities Law), Beth knows:
- The Howey Test applies to tokenized assets
- Registration exemptions available
- Disclosure requirements
- Transfer restrictions

**This knowledge directly applies to tokenization advisory.**

---

## Collision Points

### The Transfer Agent Problem

**Traditional transfer agents:**
- Maintain one master record
- Process changes centrally
- Clear chain of authority

**Blockchain:**
- Distributed ledger
- Multiple nodes hold records
- How does legal register map to on-chain state?

**Current solution:** Securitize and others maintain both, ensure sync

**Future question:** Can blockchain BE the legal register?

### The Custody Problem

**Securities require custody:**
- Who holds the underlying asset?
- Who holds the token?
- Are these the same custody question?

**Current answer:** Multiple custody layers
- Underlying asset (traditional custodian)
- SPV structure (legal custody)
- Token custody (crypto wallet or qualified custodian)

### The Secondary Market Problem

**Tokenized securities need places to trade:**
- ATS (Alternative Trading System) for securities
- DEXs can't trade securities (not registered)
- Liquidity fragmented across platforms

**The limitation:** Can't just list tokenized securities on Uniswap

### The Accreditation Problem

**Many tokenized offerings are Reg D:**
- Limited to accredited investors
- Must verify before every transfer
- Smart contracts can enforce, but verification is off-chain

**The friction:** Can't freely trade like regular tokens

### The Cross-Border Problem

**Securities law is jurisdictional:**
- U.S. rules differ from EU, Asia, etc.
- Token can move globally; compliance doesn't
- Must restrict who can hold/trade based on jurisdiction

**Current solution:** Geofencing, transfer restrictions in smart contracts

---

## Why This Matters

Tokenization represents the convergence of:
- **Traditional finance assets** (known, regulated, institutional)
- **Blockchain infrastructure** (efficient, programmable, global)
- **DeFi mechanics** (composable, 24/7, automated)

**What BlackRock's entry signals:**
- This is no longer experimental
- Institutions see real benefits (efficiency, cost savings)
- Regulatory path exists (via proper structure and licensing)

**The trajectory:**
- Treasury bonds first (safest, clearest)
- Money market funds next
- Private credit and equity following
- Eventually: public equities?

**The question:** How much of traditional finance moves on-chain, and how fast?

**Commissioner Hester Peirce (SEC), July 2025:**
> "Tokenized securities are still securities."

This statement is both limiting (must comply with existing law) and liberating (existing law provides a path).

