# DOMAIN 9: Fintech & BaaS Evolution

## How Tech Companies Became Quasi-Banks

---

## The Fintech Revolution: Historical Context

### Before 2008: Early Digital Payments

**PayPal's origins (1998-2000):**
- Confinity founded by Max Levchin, Peter Thiel, Luke Nosek
- Initially security software for handheld devices
- 1999: Pivoted to digital wallet, enabling email money transfers
- 2000: Merged with X.com (Elon Musk's online banking company)
- 2001: Combined company rebranded as PayPal
- eBay integration drove adoption

**The "PayPal Mafia":**
- Former PayPal executives became influential tech founders
- Peter Thiel (Palantir), Reid Hoffman (LinkedIn), Elon Musk (Tesla, SpaceX)
- Later founded or funded: Affirm, Square, Stripe, YouTube, Yelp
- Set template for fintech entrepreneurship

### The 2008 Inflection Point

**Why the financial crisis mattered for fintech:**

> "The 2008 global financial crisis was not just an economic disaster—it was a turning point. Trust in traditional banks eroded, and consumers began demanding transparency, fairness, and control."

**What happened:**
- Bank failures destroyed consumer confidence
- "Too big to fail" created resentment
- Regulatory burden on banks increased (Dodd-Frank)
- Banks pulled back from small/medium lending
- Mobile smartphones reached mass adoption
- Cloud computing made banking infrastructure cheaper

**Result:** Most major fintech companies—Square, Venmo, Stripe—were created after 2008.

### The "Great Unbundling" (2010s)

**The thesis:**
- Banks offered bundled services (deposits, lending, payments, advice)
- Fintechs could attack individual services
- Digital-first = structurally cheaper operating models
- No physical branches, less regulatory overhead
- Better user experience as competitive advantage

**The five waves of fintech (Bessemer Venture Partners framework):**

1. **Payments (2008-2012):** Square, Stripe, Braintree
2. **Lending (2010-2014):** LendingClub, Prosper, SoFi
3. **Personal Finance (2012-2016):** Mint, Personal Capital, Betterment
4. **Banking (2014-2018):** Chime, Current, N26
5. **Embedded Finance (2018+):** BaaS, vertical software with payments

### The PayFac Model

**Payment Facilitation (PayFac):**
- Traditional merchant acquiring: Each merchant applies for own account
- PayFac model: One master merchant account, sub-merchants underneath
- Square, Stripe became payment facilitators
- Enabled rapid onboarding of small businesses
- Democratized card acceptance for micro-merchants

**Impact:**
- Before Square (2009): Merchants needed complicated setup to accept cards
- After: Plug in Square Reader, accept payments same day
- Millions of small businesses gained card acceptance ability

**Sources:** [Bessemer - Five Waves of Fintech](https://www.bvp.com/atlas/the-five-waves-of-fintech), [FinTechtris - PayPal History](https://www.fintechtris.com/blog/paypal-fintech-first-global-company), [Fortune - Synapse Collapse](https://fortune.com/2025/03/07/synapse-evolve-mercury-bankruptcy-lawsuits/)

---

## The Banking-as-a-Service (BaaS) Model

### What BaaS Actually Is

**The structure:**

```
[Consumer] → [Fintech App (Chime, Current, etc.)]
                    ↓
           [Middleware Provider (formerly Synapse, etc.)]
                    ↓
           [Sponsor Bank (Evolve, Cross River, etc.)]
                    ↓
           [Banking Rails (Fed, ACH, Visa/Mastercard)]
```

**Why this exists:**
- Starting a bank requires charter (expensive, years-long process)
- Fintechs want to offer "banking" without being a bank
- Sponsor banks rent their charter to fintechs
- Middleware connects the pieces

**What the sponsor bank provides:**
- Banking license and regulatory standing
- FDIC insurance eligibility
- Access to payment rails (ACH, card networks)
- Regulatory compliance infrastructure

**What the fintech provides:**
- Customer interface (app)
- User acquisition and marketing
- Product design
- Customer service

**What middleware providers do (did):**
- API connections between fintech and bank
- Ledger management
- Compliance tooling
- Account reconciliation

### The Revenue Model

**How sponsor banks make money:**
- Per-account fees
- Share of interchange revenue
- Net interest margin on deposits
- Compliance fees

**How fintechs make money:**
- Interchange fees (debit card swipes)
- Float on deposits
- Premium subscription fees
- Interest on loans (if applicable)

**The Chime example:**
- Revenue model: ~50 cents per $100 spent on Chime Visa debit cards
- 2024 revenue: $1.6 billion (mostly interchange)
- Achieved profitability in Q1 2024
- Uses two sponsor banks: Stride Bank and The Bancorp Bank

### The Regulatory Arbitrage Problem

**What banks face:**
- Direct regulatory examination
- Capital requirements
- Community Reinvestment Act obligations
- BSA/AML compliance programs
- Consumer protection examination

**What fintechs faced (historically):**
- Limited direct oversight
- Relied on sponsor bank's compliance
- Could market "bank-like" services without bank oversight
- Often called themselves "banks" in marketing

**The "rent-a-charter" critique:**
> Fintechs found ways to offer banking services while avoiding the regulatory burden that actual banks face.

**Sources:** [Contrary Research - Chime](https://research.contrary.com/company/chime), [Banking Dive - BaaS Consent Orders](https://www.bankingdive.com/news/a-running-list-of-baas-banks-hit-with-consent-orders-in-2024/729121/)

---

## Neobanks: The Consumer-Facing Layer

### What Neobanks Are

**Definition:** Digital-only financial services companies that partner with traditional banks to offer bank-like products without holding a banking license.

**Key characteristic:**
> "Chime is not a bank. It is able to offer its services via its relationships with banks; customer funds are routed to a chartered bank."

### The Chime Model

**Company profile:**
- Founded: 2012 in San Francisco
- Largest neobank in the US
- ~38 million accounts
- Valued at $25 billion (2021 peak)
- Planning IPO in 2025

**Product offering:**
- No-fee checking and savings accounts
- Early direct deposit (SpotMe)
- Earned wage access (MyPay, launched 2024)
- Credit builder card
- All via mobile app

**Banking partners:**
- Stride Bank, N.A.
- The Bancorp Bank, N.A.

**The charter question:**
> "Pursuing a charter is something the San Francisco-based fintech reevaluates every six months. 'Today, we feel like the advantages of the bank partnership model are greater for us than the costs.'" —Chime COO

**Why they don't pursue a charter:**
- Would bring full regulatory examination
- Would require significant capital
- Would change cost structure
- Partner model working profitably

### Regulatory Friction

**CFPB enforcement (2024):**
- $3.25 million penalty
- Additional $1.3 million+ in customer redress
- Violation: Not returning deposits from closed accounts timely

**The risk disclosure:**
> "Chime's business model relies on partnerships with regional banks like The Bancorp Bank. Disruption to these partnerships or financial, regulatory, or legal issues with their partner banks could severely impact Chime's operations and service offerings."

**Sources:** [Wikipedia - Chime](https://en.wikipedia.org/wiki/Chime_(company)), [Business of Apps - Chime Statistics](https://www.businessofapps.com/data/chime-statistics/), [Banking Dive - Chime Charter](https://www.bankingdive.com/news/chime-fintech-bank-charter-jdpower-digital-banking/807063/)

---

## The OCC Fintech Charter: A Failed Experiment

### The Proposal

**December 2016:** Comptroller Thomas Curry proposed special-purpose national bank (SPNB) charter for fintechs.

**The promise:**
- Federal charter for non-depository fintechs
- Single national license (no 50-state licensing)
- OCC oversight instead of state-by-state
- Access to national bank preemption

**Who wanted it:**
- Payment companies
- Lending platforms
- Fintechs tired of state-by-state compliance

### The State Regulator Backlash

**May 2017:** Conference of State Bank Supervisors (CSBS) sued to block the charter.

**Argument:**
- OCC exceeded authority under National Bank Act
- "Business of banking" requires deposit-taking
- Fintechs aren't banks

**May 2019:** New York DFS won in district court
- Court agreed: National Bank Act requires deposit-taking
- OCC couldn't charter non-depository institutions

### The Appeals Battle

**June 2021:** Second Circuit reversed the lower court decision

**Ruling:**
- OCC CAN grant special-purpose charters to non-depositories
- BUT: DFS lacked standing (too speculative)
- No fintech had actually applied yet

**December 2020:** CSBS filed new lawsuit over Figure Technologies' charter application

**June 2021:** Case stayed as new OCC leadership (Acting Comptroller Hsu) signaled caution

**2022 Resolution:**
- Figure Technologies amended application to include FDIC-insured deposits
- CSBS withdrew lawsuit
- Fintech charter effectively dead

### Why It Failed

**Political opposition:**
- State regulators protecting turf
- Community banks fearing competition
- Progressive groups opposing "regulatory arbitrage"

**Practical problems:**
- No FDIC insurance without deposit-taking
- No Fed access without charter
- Limited value without the key benefits

**Current status:** No pure fintech charter exists. Fintechs either:
1. Use BaaS/sponsor bank model
2. Apply for full bank charter (like Varo)
3. Pursue ILC (Industrial Loan Company) charter in Utah

**Sources:** [Gibson Dunn - Second Circuit Ruling](https://www.gibsondunn.com/second-circuit-dismisses-new-york-dfs-lawsuit-challenging-special-purpose-national-bank-charters/), [Banking Dive - OCC Charter](https://www.bankingdive.com/news/second-circuit-overturns-challenge-to-occ-fintech-charter/601289/)

---

## The Synapse Collapse: A Case Study in BaaS Risk

### What Synapse Was

**The company:**
- Founded: 2014
- Role: BaaS middleware provider
- Connected fintechs to sponsor banks
- Provided ledger, API, compliance tools
- Used by: Yotta, Juno, Copper, Mercury (partially)

**The banks:**
- Evolve Bank & Trust (primary)
- American Bank
- AMG National Trust
- Lineage Bank

### The Collapse Timeline

**2023:**
- October: Synapse laid off 86 people (~40% of workforce)
- Four months earlier: Already laid off 18%
- October-November: Evolve moved $300+ million of end-user funds to other banks at Synapse's direction

**April 2024:**
- April 22: Synapse filed Chapter 11 bankruptcy
- Claimed assets would be acquired by TabaPay

**May 2024:**
- May 9: TabaPay abandoned acquisition
- Finger-pointing between Synapse CEO and Evolve Bank
- May 16: U.S. Trustee filed emergency motion to convert to Chapter 7 liquidation
- Cited "gross" mismanagement
- May 24: Synapse fired last remaining employees

**June 2024:**
- Bankruptcy trustee Jelena McWilliams (former FDIC Chair) began reconciliation
- Worked with four banks to match ledgers

### The $85 Million Problem

**What the trustee found:**
- Customer balances on fintech apps: $265 million
- Actual funds held at banks: $180 million
- **Shortfall: ~$85 million**

**How this happened:**

> "Synapse apparently commingled funds among several institutions, using multiple banks to serve the same companies. It remained unclear what happened to the missing funds."

**The ledger problem:**
- Synapse maintained internal ledger
- Banks maintained their own records
- The two didn't reconcile
- When Synapse collapsed, no one knew which customer owned which dollars

### The Human Impact

**Affected customers:**
- 200,000+ accounts frozen
- $160-265 million inaccessible
- Some frozen for months

**Partial payments (October 2024):**
- Evolve began issuing payments
- Amounts far below balances
- Example: One customer with $26,735.23 balance received $2.78
- Another with $282,000 balance received $500

**The FDIC insurance illusion:**

> "FDIC insurance will not play a role here, will not make you whole. The only time that the FDIC insurance pays out is if a bank fails." —Jelena McWilliams, Bankruptcy Trustee

**Why FDIC didn't help:**
- Banks didn't fail
- FDIC insures against bank failure, not fintech/middleware failure
- Customers thought they had FDIC protection
- They didn't—in this scenario

### DOJ Investigation

**January 2025:** Court filing revealed:
- DOJ Southern District of New York convened grand jury
- Criminal investigation into Synapse
- Investigation dating back to at least October 2024

**Sources:** [CNBC - $85M Missing](https://www.cnbc.com/2024/06/07/synapse-bankruptcy-trustee-85-million-of-customer-savings-is-missing.html), [TechCrunch - Synapse Timeline](https://techcrunch.com/2024/08/22/synapses-collapse-has-frozen-nearly-160m-from-fintech-users-heres-how-it-happened/), [Fortune - Synapse Collapse](https://fortune.com/2025/03/07/synapse-evolve-mercury-bankruptcy-lawsuits/)

---

## The Regulatory Crackdown: Consent Orders Everywhere

### The Pattern (2023-2024)

**What regulators found across BaaS banks:**
- BSA/AML compliance failures
- Inadequate oversight of fintech partners
- Weak due diligence on new relationships
- Poor transaction monitoring
- Capital deficiencies

### Cross River Bank (April 2023)

**FDIC consent order:**
- One of leading BaaS providers
- Partners: Affirm, Upstart, Rocket Loans, former Kabbage
- Violations: Non-compliance with fair lending program
- Deficiencies in fintech lending partner management

**Requirement:**
> "The order requires the bank to conduct due diligence and obtain FDIC approval before entering into any new fintech relationship, significantly limiting the bank's BaaS program."

### Blue Ridge Bank (January 2024)

**OCC consent order:**
- Bank declared in "troubled condition"
- BSA/AML program failures
- Systemic internal controls breakdowns
- Weak independent testing
- Insufficient BSA staffing

**The BaaS connection:**
> "Deficiencies stemmed from risk management challenges related to third-party fintech partners."

**Outcome:**
- At peak: ~70 fintech partnerships
- By end of 2024: Exited BaaS program entirely
- Exited consent order after full BaaS exit

### Evolve Bank & Trust (2024)

**Federal Reserve consent order:**
- Primary Synapse banking partner
- Hit for unsafe and unsound practices
- AML and risk management deficiencies

### Other Banks Hit With Orders (2024)

**Lineage Bank:**
- FDIC consent order (January 2024)
- Synapse banking partner
- Required: Enhanced risk management, increased capital, drop some fintech partners

**Piermont Bank:**
- Consent order over fintech relationships

**Sutton Bank:**
- Consent order related to BaaS partnerships

### Banks Exiting BaaS

**Metropolitan Commercial Bank (February 2024):**
- Announced exit from all BaaS relationships
- Reason: "heightened, and evolving, regulatory standards"

**Blue Ridge Bank (2024):**
- Fully exited 70+ fintech partnerships
- Only then released from consent order

**Sources:** [Banking Dive - BaaS Consent Orders](https://www.bankingdive.com/news/a-running-list-of-baas-banks-hit-with-consent-orders-in-2024/729121/), [American Banker - Cross River Order](https://www.americanbanker.com/news/fdic-consent-order-against-cross-river-bank-a-fintech-partnership-warning)

---

## FDIC Proposed Rule: Fixing the Ledger Problem

### The September 2024 Proposal

**Trigger:** Synapse collapse exposed fundamental flaw—no one could match customer deposits to actual funds.

**What the rule addresses:**
- "Custodial deposit accounts with transactional features"
- Accounts where fintech holds customer funds at bank
- Bank doesn't necessarily know individual owners

### Key Requirements

**Daily reconciliation:**
- Banks must reconcile customer ownership daily
- Not just quarterly or monthly
- Real-time knowledge of who owns what

**Electronic format:**
- Records must be in FDIC-specified format
- Enables rapid insurance determination
- No more manual spreadsheet reconciliation

**Beneficial owner identification:**
- Banks must identify actual owners of funds
- Not just the fintech as account holder
- Pass-through of FDIC insurance requires this

### Why This Matters

**The Synapse lesson:**

> "Non-banks often deposit customer funds together into a single custodial account at a bank. These custodial accounts may hold funds of many thousands of consumers and businesses, and the bank may not readily know or be able to determine the individual owners of funds in the custodial account."

**FDIC insurance gap:**
- FDIC insurance passes through to end customers only if properly documented
- Without proper records, insurance determination impossible
- Even if bank fails, customers may not get protected

### Industry Impact

**Compliance costs:**
> "The costs of coming into compliance with the Proposed Rule could be significant and potentially require banks and fintechs to invest in new recordkeeping and reconciliation technology."

**What changes:**
- Banks must invest in better ledger systems
- Fintechs must provide real-time customer data
- Reconciliation frequency increases dramatically
- Some BaaS relationships may become uneconomic

**Comment period:** Extended to January 16, 2025

**Sources:** [FDIC Press Release](https://www.fdic.gov/news/press-releases/2024/fdic-proposes-deposit-insurance-recordkeeping-rule-banks-third-party), [Sullivan & Cromwell - FDIC Proposal](https://www.sullcrom.com/insights/memo/2024/September/FDIC-Proposes-Recordkeeping-Reconciliation-Requirements-Fintech-Custodial-Accounts)

---

## Market Data: The Fintech Landscape

### Industry Size

**Global fintech market:**
- 2023: $294.74 billion
- 2024: $340.10 billion
- 2032 projection: $1,152.06 billion
- CAGR: 16.5%

### Key Players

**Payments:**
- Stripe: ~$50 billion valuation (2023)
- Square/Block: Public company
- PayPal: Public company

**Neobanks (US):**
- Chime: ~$25 billion valuation (2021), IPO expected 2025
- Current: ~$750 million valuation
- Varo: First fintech to get national bank charter (2020)

**BaaS Providers:**
- Cross River Bank: Major BaaS player, under consent order
- Evolve Bank & Trust: Major BaaS player, under consent order
- Coastal Community Bank: Growing BaaS business

### Funding Environment

**2021:** Record fintech funding
**2022-2023:** Sharp pullback (rising rates, Synapse concerns)
**2024:** Modest recovery, focus on profitability

---

## Key Facts (Verified with Sources)

### Synapse Collapse
- $85 million customer funds missing (CNBC)
- 200,000+ accounts affected
- DOJ grand jury convened January 2025
- Evolved moved $300+ million at Synapse direction (October-November 2023)
- FDIC insurance did NOT apply

### BaaS Enforcement
- Cross River: FDIC consent order April 2023
- Blue Ridge: OCC consent order January 2024, exited BaaS by end of 2024
- Evolve: Federal Reserve consent order 2024
- Lineage: FDIC consent order January 2024
- Multiple other banks: Piermont, Sutton hit with orders

### Neobanks
- Chime: $1.6 billion revenue (2024), profitable Q1 2024
- Chime CFPB penalty: $3.25 million + $1.3 million redress (2024)
- Chime sponsor banks: Stride Bank, The Bancorp Bank

### Regulatory
- OCC fintech charter: Proposed 2016, effectively dead by 2022
- FDIC proposed rule: September 2024, daily reconciliation required
- Comment period extended to January 16, 2025

### Market
- Global fintech market: $340 billion (2024)
- Projected 2032: $1.15 trillion
- CAGR: 16.5%

---

## Beth's Expertise Connection

### AdvisorEngine as Wealth-Tech

**The relevance:**
- AdvisorEngine is a wealth management technology platform
- Operates in fintech space (technology enabling financial services)
- Subject to SEC/FINRA oversight (investment advisors, not deposits)
- Different regulatory framework than BaaS, but similar "tech + finance" structure

**Key distinction:**
- AdvisorEngine: SEC-regulated investment advisory technology
- BaaS: Banking products through non-bank interfaces
- Both represent "fintech" but different regulatory regimes

### Where These Worlds Connect

**Fintech compliance patterns Beth understands:**
- Third-party vendor oversight
- Regulatory examination of technology platforms
- "Technology doesn't change the law" principle
- Compliance responsibility even when outsourcing

**The common thread:**
> Technology enables financial services, but the underlying activity determines regulation. An app that holds customer money is banking. An app that provides investment advice is securities. The interface doesn't change the substance.

---

## Collision Points

### The "Not a Bank" Problem

**The tension:**
- Fintechs market "banking" services
- Customers think they have a bank
- Legal reality: They have an account at a fintech that uses a bank
- FDIC insurance doesn't work the way customers assume

**Synapse proved:**
- "Pass-through" insurance requires proper documentation
- Middleware failure can sever the insurance chain
- Customers bear risk they don't understand

### The Responsibility Gap

**In traditional banking:**
- Bank is directly responsible to customer
- Regulators examine bank directly
- Customer has clear counterparty

**In BaaS:**
- Fintech is customer interface
- Bank holds funds
- Middleware connects them
- Regulatory responsibility: Unclear

**The question:** When things go wrong, who is accountable?

### The Regulatory Arbitrage Question

**The critique:**
> Fintechs achieved scale by avoiding banking regulation while offering bank-like services.

**The counterargument:**
> Innovation required different business models; sponsor bank partnerships provided regulatory compliance.

**2024 reality:**
- Regulators clearly uncomfortable with arbitrage
- Consent orders demanding direct bank oversight of fintechs
- New rules requiring better documentation
- Some banks exiting BaaS entirely

### The Innovation vs. Protection Tradeoff

**What fintechs provided:**
- Banking access to underbanked populations
- Better user interfaces
- Lower fees (no overdraft, etc.)
- Faster access to funds

**What was sacrificed:**
- Regulatory clarity
- Customer protection certainty
- Balance sheet strength
- Accountability structures

**The policy question:**
How do you preserve fintech innovation benefits while ensuring customers are actually protected?

---

## Trajectory

### Near-Term (2025-2026)

**FDIC rule:**
- Likely finalized with modifications
- Will increase BaaS compliance costs
- May push some sponsor banks out of BaaS
- Surviving players will be larger, better capitalized

**Synapse fallout:**
- DOJ investigation ongoing
- More customer lawsuits expected
- Industry reputation damaged

**Consolidation:**
- Weak BaaS banks exiting
- Stronger banks absorbing partnerships
- Middleware layer shrinking
- Direct bank-fintech relationships preferred

### Medium-Term Trends

**Bank charter pursuit:**
- More large fintechs may seek charters (like Varo)
- Charter provides certainty, control
- But: Regulatory burden significant

**Embedded finance evolution:**
- BaaS model not dead, but restructuring
- Better capitalized, better supervised
- Higher compliance bar for entry

**Technology investment:**
- Real-time ledger systems
- Better reconciliation tools
- Customer identity documentation

### The Fundamental Question

**Will "rent-a-charter" survive?**

The current form—where fintechs can operate banking businesses at arm's length from bank regulation—appears to be ending.

What may emerge:
1. **Direct relationships:** Fintechs work directly with banks (no middleware)
2. **Fintech banks:** More fintechs obtain their own charters
3. **Stricter BaaS:** Surviving BaaS with heavy compliance burden
4. **Regulatory clarity:** New rules specifically for fintech-bank relationships

---

## Why This Matters

The BaaS/fintech story illustrates a pattern that recurs throughout financial regulation:

1. **Innovation finds gaps:** New business models exploit regulatory seams
2. **Scale reveals risks:** Small experiments don't show systemic issues; scale does
3. **Crisis triggers response:** Synapse collapse forced regulatory action
4. **Rules catch up:** New requirements address exposed problems
5. **Market restructures:** Weaker players exit; survivors adapt

**For understanding the broader landscape:**

- Stablecoins: Technology enabling banking-like activity outside bank regulation (similar pattern)
- DeFi: Financial services without traditional intermediaries (similar pattern)
- AI: New capabilities outpacing existing oversight (similar pattern)

**The common thread:**
Technology moves faster than regulation. The gap creates opportunity AND risk. Eventually, regulation catches up—usually after something breaks.

