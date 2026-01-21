---
name: research-sufficiency-rules
description: Rule-based system defining minimum research requirements - source thresholds by content type, recency gates, and gap analysis requirements
---

# Research Sufficiency Rules

## Purpose

Define exactly what "enough research" means. No more "I think I have enough" - either you meet the minimums or you don't publish.

## MINIMUM SOURCE REQUIREMENTS

**Different content types require different research depth.**

### Source Tiers (Reference)

| Tier | Examples | Authority Level |
|------|----------|-----------------|
| **Tier 1** | sec.gov, occ.gov, congress.gov, court filings, company filings | Primary/Authoritative |
| **Tier 2** | Law firm alerts, research institutions, Big 4 reports, industry associations | Institutional Analysis |
| **Tier 3** | CoinDesk, The Block, Bloomberg, WSJ, Reuters | Quality Journalism |
| **Tier 4** | Wikipedia, blogs, social media, AI summaries | FORBIDDEN |

### Minimum Requirements by Content Type

| Content Type | Tier 1 | Tier 2 | Tier 3 | Total Minimum |
|--------------|--------|--------|--------|---------------|
| **LinkedIn Post** | 1 | 0 | 1 | 2 |
| **Hot Take (300-500w)** | 2 | 1 | 1 | 4 |
| **Deep Analysis (900w)** | 3 | 2 | 2 | 7 |
| **Guide/Evergreen** | 5 | 3 | 2 | 10 |

### Source Requirements by Claim Type

| Claim Type | Required Sources |
|------------|------------------|
| **Statistics** | Tier 1 with named methodology |
| **Regulatory facts** | Tier 1 (actual regulation/guidance) |
| **Quotes** | Tier 1 transcript or Tier 2/3 with date/venue |
| **Enforcement outcomes** | Tier 1 press release |
| **Market data** | Named provider with date |
| **Historical events** | Multiple sources confirming |

## RULE 1: Key Claim Coverage

**Every claim must have a traceable source.**

### The "Where Did I Read This?" Test

For every factual statement in your content, ask: "Where did I read this?"

| Answer | Status |
|--------|--------|
| "In [specific document/article]" → | VERIFIED |
| "I know this" / "Everyone knows this" → | NOT VERIFIED - Research more |
| "I think I read it somewhere" → | NOT VERIFIED - Find the source or remove |

### Required Coverage Checklist

Every piece of content must document sources for:

- [ ] All statistics
- [ ] All regulatory facts
- [ ] All quotes
- [ ] All enforcement outcomes
- [ ] All dates
- [ ] All market data

### Source Documentation Format

```markdown
## Research Sources

### Key Claims

| Claim | Source | Tier | Date | Verified |
|-------|--------|------|------|----------|
| [claim] | [source + URL] | 1/2/3 | YYYY-MM-DD | Yes/No |
```

## RULE 2: Recency Gate

**Stale data misleads. Enforce freshness.**

### Maximum Age by Data Type

| Data Type | Maximum Age | Exception |
|-----------|-------------|-----------|
| **Market data** | 30 days | Historical comparison (note "as of date") |
| **Enforcement data** | 90 days | Pattern analysis across time |
| **Legislation status** | Must be CURRENT | None - check latest status |
| **Regulatory guidance** | Until superseded | Note if guidance is under review |
| **Company data** | 6 months | Historical comparison |
| **Personnel** | 30 days | Historical roles are forever |

### Recency Verification Steps

1. **Check the source date** - When was this published?
2. **Check for updates** - Has anything superseded this?
3. **Check current status** - Is this still accurate?
4. **Note "as of" dates** - If using older data, make it explicit

### Recency Failures to Catch

| Failure | Example | Fix |
|---------|---------|-----|
| Stale market cap | "Stablecoin market is $130B" (2023 number) | Update to current (~$170B) |
| Outdated legislation | "The bill is in committee" (but it passed) | Check congress.gov for current status |
| Superseded guidance | Citing 2021 OCC letter that's been updated | Find current guidance |
| Former personnel | "SEC Chair Gary Gensler" (if no longer) | Verify current status |

## RULE 3: Gap Analysis Requirement

**Research is INCOMPLETE unless you know what's missing.**

### The Gap Analysis Question

> "What did most coverage of this topic miss?"

**If you can't answer this, you haven't researched enough.**

### Gap Types to Identify

| Gap Type | Question to Ask |
|----------|-----------------|
| **Context Gap** | What history/background does the audience need? |
| **Implication Gap** | What does this mean operationally? |
| **Timeline Gap** | What comes next? What's the deadline? |
| **Counter-Argument Gap** | What's the opposing view? Why might this be wrong? |
| **Action Gap** | What should practitioners DO? |

### Gap Documentation

Every research file should include:

```markdown
## Gap Analysis

### What most coverage missed:
[Beth's unique angle goes here]

### Questions this raises:
1. [Question that standard coverage doesn't answer]
2. [Question that standard coverage doesn't answer]

### What practitioners still need to know:
- [Operational question]
- [Implementation question]
```

## COMPLETENESS CHECKLIST

**ALL items required before research is "sufficient":**

### For Any Content

- [ ] Primary source downloaded and actually read (not just cited)
- [ ] Key dates verified against official sources
- [ ] Numbers cross-referenced (2+ sources for key statistics)
- [ ] Quotes traced to original source (not second-hand)
- [ ] Current status confirmed (not outdated)
- [ ] Beth's unique angle identified (gap analysis done)

### Additional for Deep Analysis (900w+)

- [ ] Historical context researched (what led to this)
- [ ] Counter-arguments considered
- [ ] Timeline for next steps researched
- [ ] Multiple expert perspectives reviewed
- [ ] Operational implications mapped out

### Additional for Guides/Evergreen

- [ ] Framework derived from multiple sources
- [ ] Examples from different contexts
- [ ] Edge cases considered
- [ ] Update triggers identified (what would make this stale)

## SUFFICIENCY VALIDATION

### Quick Check (LinkedIn)

```markdown
## Research Sufficiency: LinkedIn

**Topic:** [topic]

### Source Count
- Tier 1: [count] (minimum: 1)
- Tier 2: [count] (minimum: 0)
- Tier 3: [count] (minimum: 1)
- Total: [count] (minimum: 2)

### Key Claim Coverage
- [ ] Statistic sourced
- [ ] Regulatory fact sourced
- [ ] Date verified

### Recency
- [ ] Data within allowed age

### Gap Identified
- [ ] What most coverage missed: [answer]

### VERDICT: SUFFICIENT / INSUFFICIENT
```

### Full Check (Deep Analysis)

```markdown
## Research Sufficiency: Deep Analysis

**Topic:** [topic]

### Source Count
- Tier 1: [count] (minimum: 3)
- Tier 2: [count] (minimum: 2)
- Tier 3: [count] (minimum: 2)
- Total: [count] (minimum: 7)

### Source Inventory

| Source | Tier | Date | Claims Supported |
|--------|------|------|------------------|
| [source] | 1 | YYYY-MM-DD | [claims] |

### Key Claim Coverage

| Claim | Source | Verified |
|-------|--------|----------|
| [claim] | [source] | Yes/No |

### Recency Check

| Data Point | Source Date | Current? |
|------------|-------------|----------|
| [data] | YYYY-MM-DD | Yes/No |

### Gap Analysis

**What most coverage missed:**
[answer]

**Beth's unique angle:**
[answer]

### Completeness Checklist
- [ ] Primary source read
- [ ] Dates verified
- [ ] Numbers cross-referenced
- [ ] Quotes traced
- [ ] Status confirmed
- [ ] Gap analysis done
- [ ] Historical context researched
- [ ] Counter-arguments considered
- [ ] Timeline researched

### VERDICT: SUFFICIENT / INSUFFICIENT

### If Insufficient

Missing:
- [ ] [specific gap]
- [ ] [specific gap]

Research needed:
- [specific research action]
```

## COMMON INSUFFICIENCY PATTERNS

### Pattern 1: "I Stopped at the News Article"

**Problem:** Research ends at CoinDesk/The Block article
**Solution:** Follow to primary source. Read the actual regulation/filing/speech.

### Pattern 2: "One Good Source"

**Problem:** Single Tier 1 source for everything
**Solution:** Cross-reference. Different sources catch different angles.

### Pattern 3: "I Know This Already"

**Problem:** Relying on memory instead of verifying
**Solution:** Every fact needs a source, even "obvious" ones.

### Pattern 4: "Data From Last Year"

**Problem:** Using 2024 statistics in 2026 content
**Solution:** Check recency. Update or note "as of [date]."

### Pattern 5: "No Gap Analysis"

**Problem:** Research matches what everyone else wrote
**Solution:** Find Beth's angle. What did others miss?

## INTEGRATION

This rule set is referenced by:
- `research-validator.md` - Uses minimums for validation
- `article-writer.md` - Uses requirements before writing
- `content-orchestrator.md` - Uses for quality gates
- `deep-diver.md` - Uses for research depth guidance
