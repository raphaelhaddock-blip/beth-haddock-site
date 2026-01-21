---
name: news-gathering-rules
description: Rule-based system for filtering which news to cover - scoring matrix, expertise matching, source requirements, and timeliness windows
---

# News Gathering Rules

## Purpose

Systematic rules for determining WHAT to cover and WHEN. Eliminates subjective "this seems interesting" decisions. Every news item either passes the gates or gets skipped.

## RULE 1: Audience Impact Test

**The Core Question:** Does this require action from Beth's audience?

| Impact Level | Definition | Action |
|--------------|------------|--------|
| **MUST COVER** | Requires audience action within 30 days | Publish within 24-48 hours |
| **SHOULD COVER** | Audience should evaluate current practices | Publish within 1 week |
| **SKIP** | No action required, just interesting | Do not cover |

### Impact Examples

**MUST COVER (Action Required):**
- New SEC enforcement action → Compliance teams need to review own practices
- Legislation signed into law → Operators need to prepare for requirements
- Regulatory deadline approaching → Immediate compliance implications
- Major guidance issued → Policies need updating

**SHOULD COVER (Evaluate Practices):**
- Agency speeches signaling direction → Strategic planning
- International regulatory developments → Global operations context
- Court rulings affecting precedent → Legal strategy implications
- Personnel changes at agencies → Relationship/strategy implications

**SKIP (No Action):**
- General market commentary
- Price movements
- Token launches
- Celebrity crypto involvement
- Speculation without regulatory substance

## RULE 2: Beth Expertise Match

**Every news item must map to Beth's expertise tiers.**

| Tier | Topics | Coverage Rule |
|------|--------|---------------|
| **Tier 1 (Deep Expertise)** | Stablecoin regulation, SEC/FINRA/NYDFS frameworks, Compliance architecture, Institutional adoption, DeFi governance | MUST have Beth's unique angle. Can make bold claims. |
| **Tier 2 (Informed Perspective)** | CFTC jurisdiction, State MTL, International frameworks (MiCA), Crypto political landscape, Tokenization regulatory paths | Can analyze with appropriate framing. Note complexity. |
| **Tier 3 (Watching)** | AI regulation in financial services, EU AI Act, Voice AI authentication, Emerging tech regulation | Note uncertainty explicitly. Frame as "watching" not "expert." |

### Expertise Matching Questions

Before covering any news, answer:

1. **Which tier does this fall into?**
   - If Tier 1 → Proceed with authority
   - If Tier 2 → Proceed with analytical framing
   - If Tier 3 → Proceed with explicit uncertainty

2. **Can Beth add something CoinDesk can't?**
   - Pattern recognition from 25 years
   - Operational implications for practitioners
   - Predictions based on regulatory cycles
   - If NO → SKIP (just aggregating news)

3. **Does this connect to Beth's domain research files?**
   - Check `/research/domain-*.md`
   - If no connection → Weak angle, consider skipping

## RULE 3: Source Quality Gate

**No coverage without confirmable primary source.**

### Source Requirements by Claim Type

| Claim Type | Required Source |
|------------|-----------------|
| Enforcement action | Agency press release (sec.gov, cftc.gov, etc.) |
| Legislation | Bill text on congress.gov + vote record |
| Regulatory guidance | Published guidance document |
| Agency statement | Speech transcript or official statement |
| Court ruling | Court filing or docket |
| Market data | Named data provider with date |

### Source Verification Rules

1. **Tier 1 Source REQUIRED** for any coverage decision
   - Primary regulatory sources (sec.gov, occ.gov, congress.gov, etc.)
   - Cannot rely on journalism alone for coverage decision

2. **Within 48 hours of development**
   - Primary source must be accessible
   - If source unavailable, delay coverage

3. **Cross-verification for major claims**
   - Breaking news: 2+ outlets confirming
   - Statistics: Named methodology/source
   - Quotes: Transcript or direct attribution

### Automatic SKIP (Source Failures)

- "According to sources familiar with the matter"
- Rumors without official confirmation
- "Expected to" without official signal
- Social media posts as primary source (unless post IS the news)

## RULE 4: Timeliness Windows

**Different news types have different coverage windows.**

| News Type | Coverage Window | After Window |
|-----------|-----------------|--------------|
| **Enforcement Action** | 24-48 hours | Only with longer-term angle (pattern analysis) |
| **Legislation Passed** | 1 week | Implementation focus only |
| **Guidance Issued** | 2 weeks | Operational implications focus |
| **Agency Speech** | 1 week | Only if signaling policy shift |
| **Court Ruling** | 48-72 hours | Precedent analysis only |
| **Personnel Change** | 72 hours | Only if significant policy implications |

### Timeliness Decision Tree

```
Is this breaking (< 48 hours old)?
├── YES: High-priority reaction possible
│   └── Does it pass Rules 1-3?
│       ├── YES → Cover now
│       └── NO → Skip entirely
└── NO: Is it within coverage window?
    ├── YES: Can still cover with fresh angle
    │   └── Does it pass Rules 1-3 + unique angle?
    │       ├── YES → Cover with angle
    │       └── NO → Skip
    └── NO: Window closed
        └── Only cover if:
            - Part of pattern/trend analysis
            - Anniversary/retrospective
            - Legislative implementation deadline approaching
```

## RULE 5: CoinDesk Differentiation

**Beth's content must add what news outlets can't.**

### What CoinDesk/BlockWorks/The Block CAN Do
- Break news first
- Summarize what happened
- Quote officials
- Report facts

### What Beth MUST Add (Passes Differentiation)
- **Pattern recognition:** "This is the third time we've seen this signal before..."
- **Operational implications:** "What compliance teams need to do Monday morning..."
- **Practitioner questions:** "The first question any GC should ask..."
- **Road-ahead predictions:** "Based on previous cycles, here's what's coming..."
- **Framework application:** "Here's how to evaluate this for your organization..."

### Differentiation Test

Ask: "If I remove Beth's name, could this be a CoinDesk article?"

- **YES** → FAIL. Add practitioner angle or skip.
- **NO** → PASS. Unique expert perspective present.

## SCORING MATRIX

**For each potential story, score against all rules:**

| Rule | Score | Criteria |
|------|-------|----------|
| Audience Impact | 0-2 | 0=SKIP, 1=SHOULD, 2=MUST |
| Beth Expertise | 0-2 | 0=Tier 3, 1=Tier 2, 2=Tier 1 |
| Source Quality | 0-1 | 0=Tier 2-3 only, 1=Tier 1 confirmed |
| Timeliness | 0-1 | 0=Outside window, 1=Within window |
| Differentiation | 0-1 | 0=Could be news, 1=Unique angle clear |

### Score Interpretation

| Total Score | Verdict | Action |
|-------------|---------|--------|
| 6-7 points | **MUST COVER** | Prioritize immediately |
| 4-5 points | **SHOULD COVER** | Queue for this week |
| 2-3 points | **MAYBE** | Only if content calendar has gap |
| 0-1 points | **SKIP** | Do not cover |

## NEWS EVALUATION TEMPLATE

```markdown
## News Evaluation: [Topic]

**Date:** YYYY-MM-DD
**Source:** [Primary source URL]

### Scoring

| Rule | Score | Reasoning |
|------|-------|-----------|
| Audience Impact | /2 | |
| Beth Expertise | /2 | |
| Source Quality | /1 | |
| Timeliness | /1 | |
| Differentiation | /1 | |
| **TOTAL** | /7 | |

### Verdict

[ ] MUST COVER (6-7)
[ ] SHOULD COVER (4-5)
[ ] MAYBE (2-3)
[ ] SKIP (0-1)

### If Covering

**Beth's Angle:** [What unique perspective?]
**Content Type:** LinkedIn / Hot Take / Deep Analysis
**Deadline:** [Based on timeliness window]
```

## QUICK REFERENCE

**Before covering any news:**

1. Can I link to the primary source? (Rule 3)
2. Does the audience need to act? (Rule 1)
3. Is Beth the right expert? (Rule 2)
4. Am I within the coverage window? (Rule 4)
5. Am I adding something news outlets can't? (Rule 5)

**If any answer is NO → Reconsider or SKIP**

## INTEGRATION

This rule set is referenced by:
- `news-monitor.md` - Uses scoring matrix for news briefs
- `content-orchestrator.md` - Uses verdicts for calendar planning
- `article-writer.md` - Uses Beth expertise tiers for framing
