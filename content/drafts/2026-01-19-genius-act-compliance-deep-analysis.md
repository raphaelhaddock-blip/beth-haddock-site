---
title: "GENIUS Act Compliance: What Stablecoin Issuers Actually Need to Build"
type: long-form
status: draft
created: 2026-01-19
author: claude
reviewer: beth
linkedin_ready: false
---

## The Federal Framework Has Arrived

The GENIUS Act became law on July 18, 2025. For the first time, stablecoin issuers have a federal regulatory framework—not guidance, not enforcement threats, but actual legislation defining what's required.

This changes everything for stablecoin compliance.

The law establishes that only "permitted issuers" may issue payment stablecoins for US persons. Permitted issuers must be federally-supervised depository institutions, state-licensed money transmitters meeting federal standards, or entities registered with the OCC under the new framework.

For compliance officers at stablecoin issuers, the question is no longer "what might regulators want?" It's "what does federal law require?"

## The Core Requirements

The GENIUS Act mandates specific operational requirements that many issuers will need to build from scratch.

**1. Reserve Requirements**

Payment stablecoins must be backed 1:1 by qualifying reserves. The law defines qualifying reserves narrowly:
- US currency
- Demand deposits at insured depository institutions
- Treasury bills with maturities under 93 days
- Reverse repurchase agreements fully collateralized by Treasuries
- Money market funds investing only in the above

Commercial paper, corporate bonds, and other assets that some issuers currently hold don't qualify. This isn't a technicality—it's a structural requirement that may force portfolio restructuring.

**2. Monthly Attestations**

Issuers must obtain monthly attestations from registered public accounting firms confirming reserve adequacy. These aren't internal audits or third-party reviews—they're formal attestations under accounting standards.

The CFTC documented that Tether had adequate reserves only 27.6% of the days during a 26-month period. Under GENIUS Act requirements, that pattern would trigger immediate regulatory action.

**3. Redemption Requirements**

Stablecoin holders must have the right to redeem at par. Issuers must maintain the operational capability to process redemptions in a timely manner—the law doesn't specify exact timeframes, but implementing regulations will.

This creates infrastructure requirements: payment rails, banking relationships, customer identification, and anti-fraud systems capable of handling redemption volume.

**4. Freeze, Seize, and Burn**

Issuers must have technical capability to freeze, seize, and destroy tokens when required by law enforcement. For many blockchain architectures, this requires specific smart contract design.

Some existing stablecoins lack this functionality. They'll need to upgrade or face prohibition from the US market.

**5. AML/BSA Compliance**

Payment stablecoin issuers are explicitly subject to Bank Secrecy Act requirements. This includes:
- Written AML programs with board approval
- Customer identification programs
- Suspicious activity reporting
- Currency transaction reporting
- OFAC screening

For issuers who've operated in regulatory ambiguity, BSA compliance at scale is a significant operational undertaking.

## The Implementation Timeline

The GENIUS Act didn't take effect immediately. Understanding the timeline is critical for compliance planning.

**January 14, 2026:** Treasury Secretary's report to Congress on illicit finance detection is due. This will signal regulatory priorities for AML enforcement.

**July 2026:** Final implementing regulations expected. These will fill in the details the legislation left to agency discretion.

**January 2027:** GENIUS Act enforcement begins for new issuers.

**July 2028:** Digital asset service providers prohibited from offering non-compliant stablecoins to US persons.

That final deadline is the binding constraint. Exchanges, custodians, and payment processors that want to serve US customers will need to delist non-compliant stablecoins by that date.

## What I've Seen in Previous Compliance Transitions

After 25 years in financial services, I've watched multiple industries transition from regulatory ambiguity to explicit requirements. The pattern is consistent—and the mistakes are predictable.

**Mistake 1: Waiting for final regulations.** Companies that wait until July 2026 to start building will be two years behind competitors who started in 2025. Compliance infrastructure takes time to build, test, and operationalize.

**Mistake 2: Underestimating attestation requirements.** Monthly attestations from registered accounting firms require established relationships, documented processes, and control environments that auditors can test. Building this from scratch takes 12-18 months.

**Mistake 3: Treating reserves as a finance problem.** Reserve management under GENIUS Act requires treasury operations, accounting systems, and compliance monitoring working in coordination. Siloed approaches fail.

**Mistake 4: Ignoring the BSA/AML buildout.** BSA compliance for a stablecoin issuer operating at scale is not a checkbox exercise. It requires dedicated staff, technology systems, and ongoing investment. The institutions that treat AML as a compliance tax rather than an operational function struggle during examination.

## The Competitive Landscape After GENIUS

The GENIUS Act will consolidate the stablecoin market.

Issuers who already operate near these standards—primarily Circle with USDC—face manageable transitions. Their reserves already consist largely of Treasuries and cash. They already have attestation relationships. They already operate BSA programs.

Issuers who've operated with less rigorous standards face a choice: build the infrastructure the law requires, or exit the US market.

Algorithmic stablecoins face the steepest challenge. Without reserves backing the token, they cannot meet the 1:1 requirement by definition. The GENIUS Act effectively prohibits algorithmic stablecoins for US persons.

For DeFi protocols that depend on stablecoin liquidity, this creates strategic risk. Liquidity pools denominated in non-compliant stablecoins will face pressure as the July 2028 deadline approaches.

## Building for GENIUS Compliance

For issuers evaluating their compliance position, here's the infrastructure checklist:

**Treasury operations:** Can you maintain qualifying reserves at 100% of outstanding tokens? Do you have banking relationships that can hold the required volumes?

**Attestation readiness:** Do you have an accounting firm relationship capable of monthly attestations? Are your internal controls documented to audit standards?

**Redemption infrastructure:** Can you process redemptions at the scale your token volume requires? What's your maximum redemption capacity in a stress scenario?

**Smart contract capabilities:** Can you freeze, seize, and burn tokens? If not, what's the technical path to adding this functionality?

**BSA/AML program:** Do you have a written AML program with board approval? Customer identification processes? SAR and CTR filing capabilities? OFAC screening?

The 18-month transition period is shorter than most compliance buildouts require. The time to start is now.

---

## Research Sources
- GENIUS Act (S.1582) text, signed July 18, 2025
- Treasury ANPRM on GENIUS Act implementation (September 2025)
- FDIC proposed rulemaking for stablecoin application procedures
- CFTC Tether settlement: 27.6% reserve compliance documented
- NYDFS stablecoin guidance (June 2022): State-level precedent for reserve requirements

## News Hook
- GENIUS Act implementation timeline, FDIC application procedures announced

## Voice Validation Notes
- Zero client references
- Authority through 25+ years expertise and compliance buildout patterns
- Specific legal requirements cited from legislation
- Actionable compliance checklist
- All claims from public legislative/regulatory sources
