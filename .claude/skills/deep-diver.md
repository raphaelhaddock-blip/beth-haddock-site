---
name: deep-diver
description: Conduct deep research on a topic for thought leadership content. Use BEFORE writing to gather facts, context, and angles.
---

# Deep Diver

## Purpose

Conduct deep, primary-source research on a topic before writing content. This is NOT news aggregation—it's finding the facts and context that support expert analysis.

## When to Use

- Before writing any long-form content
- Before writing "road ahead" articles
- When a topic needs more context than surface-level news
- When Beth needs specific facts/numbers to anchor claims

## Research Philosophy

**We are NOT:**
- Summarizing news articles
- Aggregating what others have said
- Finding generic industry commentary
- Looking for client-specific experiences to reference

**We ARE:**
- Finding primary sources (SEC filings, legislation, court docs)
- Getting specific numbers with dates and sources
- Identifying what everyone MISSED about a story
- Building the factual foundation for expert analysis

## Research Process

### Step 1: Define the Question

Before researching, write the specific question(s) to answer:

**Bad:** "Research stablecoins"
**Good:** "What specific reserve requirements did GENIUS Act mandate, and how do they compare to what NYDFS already required?"

**Bad:** "Research DeFi regulation"
**Good:** "What did the Ooki DAO ruling actually say about individual liability, and what has happened since?"

### Step 2: Find Primary Sources

**Priority order:**
1. **Official documents** - Legislation text, SEC orders, CFTC enforcement, court rulings
2. **Regulatory statements** - SEC chair speeches, NYDFS guidance, FinCEN advisories
3. **Company filings** - 10-Ks, 8-Ks, prospectuses
4. **Industry data** - DefiLlama, CoinGecko, CoinMetrics for on-chain data
5. **Credible reporting** - WSJ, Bloomberg, Reuters (for context, not as primary source)

**Avoid:**
- Crypto news sites as primary sources (CoinDesk, Decrypt, The Block - use only for leads)
- Twitter/X threads (unless from verified official accounts)
- Opinion pieces without primary source citations

### Step 3: Extract Specific Facts

For every claim, extract:
- **The fact** - What specifically happened/is true
- **The number** - Quantify when possible
- **The date** - When it happened
- **The source** - Where you found it (with link if possible)

**Example:**
```
Fact: SEC under Chair Gensler pursued significantly more crypto enforcement
Number: 125 enforcement actions totaling $6.05B in penalties
Compare: Clayton era was 70 actions, $1.52B
Date: Gensler tenure (2021-2024)
Source: Georgetown Law Center analysis
```

### Step 4: Find the Gap

What is everyone MISSING about this topic? This is where expert value lies.

**Questions to ask:**
- What does the primary source say that news coverage missed?
- What context from history makes this situation different?
- What operational reality do practitioners face that outsiders don't understand?
- What pattern connects this to previous regulatory cycles?

### Step 5: Identify the Expert Angle

How can Beth's 25+ years in financial services compliance add value to this topic?

**Good angles:**
- Pattern recognition from previous technology adoption cycles
- Regulatory framework analysis (how agencies actually work)
- Operational implications (what this means for practitioners)
- "Road ahead" predictions based on historical precedent

**NOT good angles:**
- "What I learned at [specific client]"
- Stories from board meetings or advisory sessions
- Client-specific outcomes or strategies

## Research Output Format

Save research briefs to:
```
/Users/raphyhaddock/beth-haddock-site/content/research/YYYY-MM-DD-topic.md
```

**Template:**

```markdown
# Research Brief: [Topic]

**Date:** YYYY-MM-DD
**Question(s):** [The specific questions this research answers]

---

## Key Facts

| Fact | Number | Date | Source |
|------|--------|------|--------|
| [What] | [Quantified] | [When] | [Where] |

---

## Primary Sources Reviewed

1. [Source name and link]
   - Key finding: [What you learned]

2. [Source name and link]
   - Key finding: [What you learned]

---

## What Everyone Missed

[The gap in public understanding that expert analysis can fill]

---

## Expert Angles

**Pattern recognition:**
- [What historical patterns apply here?]

**Operational implications:**
- [What does this mean for practitioners?]

**Road ahead:**
- [Where is this heading based on precedent?]

---

## Content Recommendations

**Best for:** [linkedin | long-form | news-analysis | road-ahead]

**Suggested hook:**
[Draft opening based on research findings]

**Key points to make:**
1. [Point with supporting fact]
2. [Point with supporting fact]
3. [Point with supporting fact]

**Action for reader:**
[What reader should DO after reading]
```

## Example Research Brief

```markdown
# Research Brief: GENIUS Act Stablecoin Requirements

**Date:** 2026-01-18
**Question(s):** What does GENIUS Act actually require? How does it compare to existing NYDFS requirements?

---

## Key Facts

| Fact | Number | Date | Source |
|------|--------|------|--------|
| GENIUS Act requires liquid reserve backing | 100% | July 2025 | Public Law text |
| Monthly public disclosure required | All issuers | July 2025 | GENIUS Act text |
| Federal supervision required for large issuers | $10B+ | July 2025 | GENIUS Act Sec. 4 |
| NYDFS already required reserve attestations | Monthly | Since 2018 | NYDFS Guidance |
| Tether reserve compliance rate | 27.6% of days | 26-month period | CFTC settlement |
| Senate vote | 68-30 | July 2025 | Congressional record |
| House vote | 308-122 | July 2025 | Congressional record |

---

## Primary Sources Reviewed

1. GENIUS Act full text (Public Law)
   - Key finding: Requires freeze/seize/burn capability for law enforcement

2. NYDFS Stablecoin Guidance (June 2022)
   - Key finding: Already required monthly attestations, 100% reserves

3. CFTC v. Tether Settlement (2021)
   - Key finding: "Tether had sufficient reserves to back USDT in circulation only 27.6% of days"

---

## What Everyone Missed

The GENIUS Act didn't CREATE new requirements—it federalized what NYDFS already enforced. The issuers who chose NYDFS regulation early were already compliant. The Act's real impact is forcing offshore issuers to meet the standard or exit the U.S. market.

---

## Expert Angles

**Pattern recognition:**
- This follows the same pattern as every major financial technology: innovation → crisis → federal regulation → consolidation around compliant players

**Operational implications:**
- 18-month transition period for existing issuers
- State-regulated issuers under $10B can continue under state supervision
- Technical requirement for freeze/seize/burn is significant development

**Road ahead:**
- Offshore issuers will face choice: comply or exit U.S. market
- Institutional capital will flow to federally-supervised issuers
- Circle's IPO positions them as the "institutional choice"

---

## Content Recommendations

**Best for:** linkedin

**Suggested hook:**
The GENIUS Act passed with bipartisan support—68-30 in the Senate.

For stablecoin issuers, this means one thing: the compliance bar just became federal law.

**Key points to make:**
1. GENIUS Act federalized NYDFS requirements (100% reserves, monthly attestations)
2. Tether had adequate reserves only 27.6% of days—now that's illegal
3. The issuers who built compliance infrastructure early are positioned for institutional capital

**Action for reader:**
Before working with any stablecoin, ask: "How long have you been meeting these requirements?"
```

## Research Sources by Topic

### Stablecoins
- GENIUS Act text
- NYDFS guidance documents
- CFTC enforcement orders (Tether, etc.)
- Federal Reserve reports on stablecoin risks

### SEC Enforcement
- SEC press releases (enforcement actions)
- Georgetown Law crypto enforcement tracker
- Court filings (Grayscale v. SEC, Coinbase, etc.)

### DeFi/DEX
- CFTC enforcement orders (Ooki DAO)
- SEC Wells notices and responses
- DefiLlama TVL data
- Protocol documentation

### Tokenization
- BlackRock BUIDL filings
- SEC Reg D filings
- BCG/Ripple tokenization projections
- BIS working papers

### Political/Regulatory Landscape
- Campaign finance data (OpenSecrets)
- Congressional voting records
- Regulatory statements and speeches

## After Research

Pass research brief to:
- linkedin-writer (to create content)
- voice-validator (to check final output)
