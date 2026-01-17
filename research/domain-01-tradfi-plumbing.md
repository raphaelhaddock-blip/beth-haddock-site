# DOMAIN 1: Traditional Finance Plumbing

## How Money Actually Moves in the Legacy System

---

## Historical Context: How We Got Here

### The Paperwork Crisis (1960s-1970s)

The modern securities infrastructure exists because Wall Street nearly collapsed under its own paperwork in the late 1960s.

**What happened:**
- Trading volumes tripled from 5 million to 12 million shares per day between 1965-1968
- The entire system ran on physical paper certificates that had to be physically delivered
- Back offices couldn't keep up with the volume
- The NYSE was forced to close every Wednesday just to let brokers catch up on paperwork
- Approximately one-third of investors experienced lost or late-delivered securities
- One-sixth of NYSE member firms failed, merged, or disbanded
- An estimated $100-400 million was stolen from investors (1964-1969) as the chaos enabled fraud
- In October 1970, Goodbody and Company (5th largest brokerage) collapsed, costing $21 million

**Sources:** [SEC Historical Museum](https://www.sechistorical.org/museum/galleries/msr/msr02b_institutional_investors.php), [Brown Brothers Harriman](https://www.bbh.com/us/en/bbh-who-we-are/our-story/200-years-of-partnership/the-paperwork-crisis.html), [DTCC 40th Anniversary](https://www.dtcc.com/dtcc-anniversary/index.html)

### The Solution: Central Depositories

**1973: Depository Trust Company (DTC) created**
- Purpose: Immobilize physical certificates in a central vault
- Innovation: "Book-entry" ownership - instead of moving paper, change database records
- Result: Securities now exist as electronic entries, not physical certificates

**1976: National Securities Clearing Corporation (NSCC) created**
- Merged NYSE/AMEX and NASDAQ clearing operations
- Unified settlement across all major U.S. equity markets

**1999: DTCC formed**
- Merger of DTC and NSCC under one holding company
- Created single infrastructure for clearing, settlement, and custody

**Current state:** Over 99% of U.S. securities are now "dematerialized" - they exist only as electronic records. Physical certificates represent less than 1% of DTCC's vault inventory.

**Sources:** [Wikipedia - Dematerialization](https://en.wikipedia.org/wiki/Dematerialization_(securities)), [DTCC Dematerialization Whitepaper](https://www.dtcc.com/~/media/Files/PDFs/DTCC-Dematerialization-Whitepaper-092020.pdf)

---

## How Securities Settlement Actually Works

### The Players

1. **Exchanges** (NYSE, NASDAQ) - Where trades are matched
2. **NSCC** (National Securities Clearing Corporation) - Clearing and netting
3. **DTC** (Depository Trust Company) - Central securities depository
4. **Custodian Banks** (BNY Mellon, State Street, JPMorgan) - Hold securities on behalf of clients
5. **Settling Banks** - Move cash through Federal Reserve
6. **Broker-Dealers** - Execute trades for customers

### The Settlement Process (Step by Step)

**Trade Day (T):**
1. Buyer and seller agree on price and quantity on exchange
2. Trade is matched and confirmed
3. Details sent to NSCC for clearing

**Clearing Phase:**
4. NSCC becomes the "central counterparty" - buyer to every seller, seller to every buyer
5. NSCC nets all trades - if Broker A bought 1000 shares of Apple and sold 600 shares of Apple, net obligation is only 400 shares
6. **Key insight:** Multilateral netting reduces the value of payments by an average of 98%

**Settlement Day (T+1):**
7. At approximately 4:15 PM ET, settlement occurs
8. DTC moves securities between participant accounts (book-entry transfer)
9. Cash moves through the Federal Reserve's National Settlement Service
10. About 70 transfers through the Federal Reserve settle over 1.3 million transactions daily

**Sources:** [DTCC Settlement Guide](https://www.dtcc.com/clearance-settlement-guide/index.html), [DTCC Understanding Settlement](https://www.dtcc.com/understanding-settlement/index.html)

### Why Settlement Takes Time (T+1, Not T+0)

**T+2 → T+1 Transition (May 28, 2024):**
- SEC mandated move from 2-day to 1-day settlement
- Benefits: 41% reduction in counterparty credit exposure, lower margin requirements
- Average $13.4 billion held daily in margin was reduced

**Why T+0 (Same-Day) Isn't Possible Yet:**

1. **Netting would be eliminated**
   - Real-time settlement means trade-by-trade funding
   - Loses the 98% reduction in payment values from netting
   - Dramatically increases liquidity needs

2. **Foreign Exchange Settlement**
   - FX transactions settle on T+2
   - International investors need to convert currency before settling securities
   - Different time zones create operational impossibility for same-day FX + securities

3. **Interconnected Systems**
   - Settlement depends on: exchanges, clearinghouses, custodians, payment systems, FX markets
   - All would need to move to real-time simultaneously
   - "T+0 will never be achievable unless other activities in the investment value chain become real-time"

4. **Technology and Process Changes**
   - Current infrastructure assumes time for confirmation, matching, funding
   - Would require fundamental redesign of every system in the chain

**Sources:** [Deutsche Bank Flow](https://flow.db.com/securities-services/accelerated-settlement-the-move-towards-t-0), [FINRA T+1 Guidance](https://www.finra.org/investors/insights/understanding-settlement-cycles), [SEC T+1 Rulemaking](https://www.federalregister.gov/documents/2023/03/06/2023-03566/shortening-the-securities-transaction-settlement-cycle)

---

## Clearinghouses and Counterparty Risk

### Why Clearinghouses Exist

**The Problem They Solve:**
Without a clearinghouse, every trade creates direct counterparty risk. If Party A sells to Party B, but Party B defaults before settlement, Party A is exposed to loss.

**Before 2008:** Many derivatives traded "over-the-counter" (OTC) bilaterally. When Lehman Brothers failed, counterparties across the system faced massive exposure. This nearly collapsed the financial system.

**The Central Counterparty (CCP) Model:**
- CCP inserts itself between buyer and seller
- Becomes "buyer to every seller, seller to every buyer"
- If one party defaults, the CCP absorbs the loss and completes the trade
- Eliminates direct counterparty exposure between market participants

**Risk Management Tools:**
1. **Margin Requirements** - Participants must post collateral
2. **Netting** - Reduces gross exposures
3. **Default Funds** - Pool of resources to cover member failures
4. **Credit Monitoring** - Continuous surveillance of member creditworthiness

### Historical Context: NYSE Clearinghouse (1892)

Research on the establishment of the NYSE clearinghouse found:
- Introduction of multilateral netting substantially reduced volatility
- "At least half of the average reduction in counterparty risk was driven by a reduction in contagion risk - the risk of a cascade of broker defaults"
- Clearinghouses improve market stability and increase asset values

**Post-2008 Reforms:**
- G20 mandated central clearing for standardized derivatives
- Regulators expanded mandatory clearing to OTC markets
- CCPs are now systemically important - their failure would be catastrophic

**Sources:** [Wikipedia - CCP](https://en.wikipedia.org/wiki/Central_counterparty_clearing), [NBER Paper on NYSE Clearinghouse](https://www.nber.org/papers/w20459), [Federal Reserve CCP Analysis](https://www.federalreserve.gov/econres/notes/feds-notes/central-clearing-counterparties-in-the-financial-accounts-of-the-united-states-20240712.html)

---

## How International Payments Work: Correspondent Banking

### The Correspondent Banking Model

**The Problem:**
Banks don't have branches everywhere. How does a bank in India send dollars to a bank in Brazil?

**The Solution: Correspondent Banking**
Banks maintain relationships with banks in other countries/currencies. A network of bilateral relationships enables global money movement.

### Nostro and Vostro Accounts

**From Italian:** "ours" (nostro) and "yours" (vostro)

**Example:**
- HDFC Bank (India) wants to send USD payments
- HDFC opens a USD account at Citibank (US)
- From HDFC's perspective: "Our account at Citi" = **Nostro account**
- From Citi's perspective: "Your account with us" = **Vostro account**
- Same account, two perspectives

### How a Cross-Border Payment Actually Flows

**Scenario:** Dutch oil company (ING customer) sells cargo to Swiss trader (Credit Suisse customer) for $40M

1. Swiss trader instructs Credit Suisse to pay
2. Credit Suisse debits trader's account
3. Credit Suisse transfers dollars from its account at Bank of New York Mellon (its USD nostro) to ING's account at Bank of America (ING's USD nostro)
4. ING credits the oil company's dollar account

**Key insight:** The dollars never "move" internationally. They stay in the US (at BNY Mellon and BofA). What moves is ownership - debits and credits in the nostro/vostro accounts.

### Why It's Slow and Expensive

**Costs:** $25-75+ per cross-border transaction
- Messaging fees (SWIFT)
- Transaction fees (each bank in chain)
- FX spread
- Intermediary bank fees
- Recipient bank fees

**Time:** Often 1-3 days (though improving)
- Multiple banks in the chain
- Compliance checks at each step
- Time zone differences
- Batch processing at some links

**Sources:** [Thunes Correspondent Banking Guide](https://www.thunes.com/insights/learn/correspondent-banking-explained/), [Wikipedia - Nostro/Vostro](https://en.wikipedia.org/wiki/Nostro_and_vostro_accounts)

---

## SWIFT: The Messaging Backbone

### What SWIFT Is (and Isn't)

**SWIFT is NOT a payment system.** It doesn't move money.

**SWIFT IS a secure messaging network** that banks use to send payment instructions to each other.

**Founded:** 1973 (same year as DTC - both responses to industry need for standardization)

**Scale:** Over 11,000 institutions in 200+ countries

### How SWIFT Messaging Works

**MT Messages (Legacy - 1977-2025):**
- "Message Type" format
- Three-digit codes (MT103 = customer payment, MT202 = bank-to-bank payment)
- Limited data fields
- Text-based format

**MX Messages (ISO 20022 - Current Standard):**
- XML-based, structured data
- 940+ fields vs ~100 in MT
- Richer information for compliance, reconciliation
- Global standard beyond just SWIFT

### ISO 20022 Migration Timeline

- **2004:** ISO 20022 created for investment funds industry
- **2018:** SWIFT community announced adoption for cross-border payments
- **March 2023:** Coexistence period began (MT and MX both accepted)
- **November 2025:** Coexistence ended - ISO 20022 now mandatory
- **November 2026:** Structured addresses required (no more free-form text)

**Why This Matters:**
- Better data = better compliance (AML, sanctions screening)
- Better reconciliation = fewer failed payments
- Better interoperability = foundation for future innovation

**Sources:** [SWIFT ISO 20022 Guide](https://www.swift.com/standards/iso-20022/iso-20022-financial-institutions-focus-payments-instructions), [JP Morgan ISO 20022 Migration](https://www.jpmorgan.com/insights/payments/fx-cross-border/iso-20022-migration)

---

## U.S. Payment Rails: Fedwire vs ACH

### Fedwire Funds Service

**Operated by:** Federal Reserve Banks

**How it works:**
- Real-Time Gross Settlement (RTGS)
- Each transaction settles individually, immediately, irrevocably
- Once settled, it's final

**Characteristics:**
- Operating hours: 9 PM (prior day) to 7 PM ET, weekdays
- Used for: Large-value, urgent payments
- Volume (2007): ~537,000 transactions/day
- Value (2007): ~$2.7 trillion/day
- Fees: Higher (appropriate for large values)

### ACH (Automated Clearing House)

**Governed by:** Nacha (industry association)

**Operated by:** Federal Reserve (FedACH) or The Clearing House (EPN)

**How it works:**
- Batch processing at scheduled intervals
- Transactions netted and settled together
- 1-3 business days (same-day ACH now available)

**Characteristics:**
- Used for: Payroll, bill payments, P2P transfers, recurring payments
- Volume (2007): ~37 million transactions/day
- Value (2007): ~$58 billion/day
- Fees: Much lower than Fedwire

### Key Difference

| Feature | Fedwire | ACH |
|---------|---------|-----|
| Settlement | Real-time, individual | Batch, netted |
| Speed | Immediate | 1-3 days (or same-day) |
| Cost | Higher | Lower |
| Use Case | Large, urgent | Routine, recurring |
| Daily Volume | ~500K transactions | ~37M transactions |
| Daily Value | ~$2.7 trillion | ~$58 billion |

**Insight:** ACH handles 70x more transactions but 50x less value. Fedwire is for moving serious money fast.

**Sources:** [Modern Treasury - Fedwire](https://www.moderntreasury.com/learn/fedwire), [Wikipedia - FedACH](https://en.wikipedia.org/wiki/FedACH), [Lightspark ACH vs Fedwire](https://www.lightspark.com/knowledge/ach-vs-fedwire)

---

## Custodian Banks: The Safekeepers

### What Custodians Do

**Core Function:** Hold securities on behalf of institutional investors

**Key Services:**
1. **Safekeeping** - Maintain records of ownership
2. **Trade Settlement** - Process buy/sell transactions
3. **Corporate Actions** - Handle dividends, stock splits, rights issues
4. **Tax Reporting** - Withholding, reclaims, compliance
5. **Securities Lending** - Lend held securities for fees
6. **Fund Administration** - NAV calculations, accounting

### Major Global Custodians

| Custodian | Assets Under Custody |
|-----------|---------------------|
| BNY Mellon | $52+ trillion |
| State Street | $43+ trillion |
| JPMorgan | $35+ trillion |
| Citi | $27+ trillion |
| Northern Trust | $16+ trillion |

**Total global custody market:** ~$230 trillion (end of 2023)

### Evolution of Custody

**Past:** Pure "back office" - safekeeping and settlement only

**Present:** "Middle office" expansion:
- Regulatory compliance monitoring
- Risk analytics
- Performance measurement
- Data services
- Digital asset custody (emerging)

**Sources:** [Wikipedia - Custodian Bank](https://en.wikipedia.org/wiki/Custodian_bank), [BNY Mellon Custody Services](https://www.bnymellon.com/us/en/solutions/securities-services/custody-services.html)

---

## Key Facts (Verified with Sources)

### Settlement System
- DTCC processes over 1.3 million transactions daily ([DTCC](https://www.dtcc.com/understanding-settlement/index.html))
- Settlement occurs at approximately 4:15 PM ET ([DTCC](https://www.dtcc.com/understanding-settlement/index.html))
- Average $13.4 billion held in margin daily to manage counterparty risk ([DTCC T+1 Whitepaper](https://www.dtcc.com/-/media/Files/PDFs/T2/T1-Functional-Changes.pdf))
- Multilateral netting reduces payment values by average of 98% ([DTCC](https://www.dtcc.com/-/media/Files/PDFs/T2/Accelerating-the-US-Securities-Settlement-Cycle-to-T1-December-1-2021.pdf))
- U.S. moved from T+2 to T+1 on May 28, 2024 ([SEC](https://www.sec.gov/newsroom/press-releases/2024-62))
- T+1 provides 41% reduction in counterparty credit exposure ([DTCC](https://www.dtcc.com/-/media/Files/PDFs/T2/T1-Functional-Changes.pdf))

### Correspondent Banking
- Cross-border wire transfers typically cost $25-75+ per transaction ([Thunes](https://www.thunes.com/insights/learn/correspondent-banking-explained/))
- SWIFT network connects 11,000+ institutions across 200+ countries ([SWIFT](https://www.swift.com/))
- ISO 20022 became mandatory for cross-border payments November 2025 ([SWIFT](https://www.swift.com/standards/iso-20022/iso-20022-faqs/implementation))

### Payment Systems
- Fedwire processes ~$2.7 trillion daily in ~537,000 transactions ([Federal Reserve](https://www.federalreserve.gov/))
- ACH processes ~$58 billion daily in ~37 million transactions ([Nacha](https://www.nacha.org/))

### Custody
- Global custody market size: ~$230 trillion (2023) ([Industry reports](https://www.assetservicingtimes.com/))
- BNY Mellon is world's largest custodian at $52+ trillion ([BNY Mellon](https://www.bnymellon.com/))

### Historical
- 1960s paperwork crisis: trading tripled from 5M to 12M shares/day (1965-1968)
- NYSE closed Wednesdays to catch up on paperwork
- One-sixth of NYSE member firms failed or merged
- DTC created 1973, NSCC created 1976, DTCC formed 1999
- Over 99% of U.S. securities now exist only as electronic records

---

## Beth's Expertise Connection

### AdvisorEngine
As General Counsel at AdvisorEngine (a Franklin Templeton company), Beth operates within this infrastructure daily:
- Wealth management platforms interface with custodians (Schwab, Fidelity, Pershing)
- Trade execution flows through DTCC settlement
- Compliance monitoring depends on settlement finality
- Understanding settlement risk is core to fiduciary obligations

### Grayscale
Advising Grayscale on compliance architecture required understanding:
- How traditional securities custody differs from crypto custody
- Why the SEC cares about settlement and custody (investor protection)
- What institutional investors expect from settlement infrastructure
- How to build "institutional-grade" processes that mirror TradFi standards

### GMO-Z Trust
As a board member of a NYDFS-regulated stablecoin issuer:
- Stablecoin reserves connect to traditional banking/custody infrastructure
- Reserve management uses traditional money market instruments
- Settlement of stablecoin redemptions touches correspondent banking
- Regulatory expectations shaped by traditional finance standards

---

## Collision Points with New Technology

### Blockchain Challenge to Settlement
- **TradFi:** T+1 settlement, batch netting, central counterparties
- **Crypto:** T+0 (instant) settlement, atomic transactions, no counterparty risk

**Tension:** The reasons TradFi can't do T+0 (netting benefits, interconnected systems) don't apply to blockchain-native assets. This raises the question: why maintain slow infrastructure for new asset classes?

### Stablecoins vs Correspondent Banking
- **TradFi:** $25-75 fees, 1-3 days, multiple intermediaries
- **Stablecoins:** Near-zero fees, minutes, peer-to-peer

**Tension:** Stablecoins can replicate the payment function of correspondent banking at a fraction of the cost and time. This threatens a core revenue stream for global banks.

### Tokenization vs Custody
- **TradFi:** Securities held in custodian accounts, beneficial ownership records
- **Tokenized:** Ownership on blockchain, self-custody possible

**Tension:** If securities exist as tokens on a public blockchain, what role do traditional custodians play? How do you regulate self-custody?

### DeFi vs Clearinghouses
- **TradFi:** CCPs eliminate counterparty risk through intermediation
- **DeFi:** Smart contracts eliminate counterparty risk through atomic settlement

**Tension:** DeFi achieves the same risk reduction without the overhead of clearinghouses. But it lacks the "someone is responsible" structure regulators expect.

---

## Summary: Why the Old System Works the Way It Does

1. **It's a response to crisis** - The 1960s paperwork crisis forced centralization and standardization
2. **It optimizes for risk reduction** - Netting, CCPs, and custody protect against counterparty default
3. **It's interconnected** - Settlement depends on payments, FX, custody, and clearing all working together
4. **It trades speed for safety** - T+1 (not T+0) because netting benefits outweigh speed benefits
5. **It requires trust in institutions** - Banks, custodians, clearinghouses, and regulators form a web of accountability

The new technologies (blockchain, stablecoins, DeFi) challenge each of these assumptions. That's where the collision happens.
