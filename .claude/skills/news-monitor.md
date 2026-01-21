---
name: news-monitor
description: Use to find current regulatory news, legislation updates, and enforcement actions that Beth should comment on - finds timely hooks for thought leadership content
---

# News Monitor

## Purpose

Find timely news hooks that Beth can write expert analysis about. Focus on regulatory developments, legislation, and enforcement actions in crypto, fintech, and AI governance.

**CRITICAL: Apply the scoring matrix from `news-gathering-rules.md` to every potential story.**

## The Core Question

**"What happened in the last 7 days that Beth's audience (institutional operators, GCs, compliance officers) needs her analysis on?"**

## Scoring Matrix (from news-gathering-rules.md)

**Before creating a news brief, score against all five rules:**

| Rule | Score | Criteria |
|------|-------|----------|
| Audience Impact | 0-2 | 0=SKIP, 1=SHOULD cover, 2=MUST cover |
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

## News Sources by Priority

### Tier 1: Primary Sources (Check First - REQUIRED for coverage decision)
- **SEC.gov** - Enforcement releases, speeches, guidance
- **CFTC.gov** - Enforcement, orders, speeches
- **OCC.gov** - Guidance, interpretive letters
- **FinCEN** - Guidance, enforcement
- **NYDFS** - Press releases, guidance
- **Congress.gov** - Bill text, committee hearings

### Tier 2: Crypto Industry News
- **CoinDesk** - Breaking regulatory news
- **The Block** - Institutional and regulatory coverage
- **Blockworks** - Institutional focus
- **DL News** - Enforcement and investigations

### Tier 3: Financial Press
- **Bloomberg Law** - Regulatory analysis
- **WSJ** - Major developments
- **Financial Times** - International perspective
- **Reuters** - Wire service speed

## Timeliness Windows (from news-gathering-rules.md)

| News Type | Coverage Window | After Window |
|-----------|-----------------|--------------|
| Enforcement Action | 24-48 hours | Only long-term angle |
| Legislation Passed | 1 week | Implementation focus only |
| Guidance Issued | 2 weeks | Operational implications focus |
| Agency Speech | 1 week | Only if signaling policy shift |
| Court Ruling | 48-72 hours | Precedent analysis only |

## Beth Expertise Tiers (from news-gathering-rules.md)

| Tier | Topics | Coverage Rule |
|------|--------|---------------|
| **Tier 1 (Deep)** | Stablecoin regulation, SEC/FINRA/NYDFS, Compliance architecture, Institutional adoption, DeFi governance | MUST have Beth's unique angle |
| **Tier 2 (Informed)** | CFTC jurisdiction, State MTL, MiCA, Crypto politics, Tokenization | Can analyze with framing |
| **Tier 3 (Watching)** | AI regulation, EU AI Act, Voice AI | Note uncertainty explicitly |

## Output Format

When you find news worth writing about, FIRST score it, THEN create a brief:

```markdown
# News Brief: [Topic]

## Scoring (from news-gathering-rules.md)

| Rule | Score | Reasoning |
|------|-------|-----------|
| Audience Impact | /2 | [Does audience need to act?] |
| Beth Expertise | /2 | [Which tier? See expertise matrix] |
| Source Quality | /1 | [Tier 1 confirmed?] |
| Timeliness | /1 | [Within coverage window?] |
| Differentiation | /1 | [Unique angle beyond news?] |
| **TOTAL** | /7 | |

**VERDICT:** [ ] MUST COVER (6-7) [ ] SHOULD COVER (4-5) [ ] MAYBE (2-3) [ ] SKIP (0-1)

---

## What Happened
[2-3 sentences on the news itself]

## Why It Matters
[2-3 sentences on implications for Beth's audience]

## Beth's Angle
[What specific expertise can Beth bring? Check domain files.]
[Reference expertise tier: Tier 1/2/3]

## Timing
- Priority: HIGH / MEDIUM / EVERGREEN
- Window: [Based on news type - see timeliness windows]
- Coverage deadline: [Date]

## Suggested Content
- [ ] LinkedIn post (quick reaction)
- [ ] 300-500 word hot take
- [ ] 900-word deep analysis
- [ ] Multiple pieces in sequence

## Key Facts (Verified)
- [Fact 1 with Tier 1 source]
- [Fact 2 with Tier 1 source]
- [Fact 3 with Tier 1 source]

## Gap Analysis (What Most Coverage Missed)
[Beth's unique angle - required per research-sufficiency-rules.md]

## Related Domain Research
- domain-XX-[topic].md (sections: ...)

## Primary Sources (Tier 1 Required)
- [Link 1 - agency/official source]
- [Link 2 - agency/official source]
```

## Execution Steps

1. **Web Search** - Use WebSearch tool for recent news:
   ```
   "SEC crypto enforcement 2026"
   "CFTC digital assets guidance"
   "stablecoin legislation Congress"
   "OCC crypto bank charter"
   "[topic] regulation news"
   ```

2. **Check Primary Sources** - Use WebFetch to check:
   - SEC press releases: sec.gov/news/press-releases
   - CFTC newsroom: cftc.gov/PressRoom
   - OCC news: occ.gov/news-issuances

3. **Cross-Reference Domain Files** - Read `/research/domain-*.md` to find Beth's angle

4. **Create News Brief** - Save to `/content/research/news-YYYY-MM-DD-topic.md`

5. **Flag for Content Creation** - Add to orchestrator queue

## What NOT to Report

- **Price movements** - Beth doesn't do market commentary
- **Token launches** - Not her domain
- **Celebrity crypto** - Not institutional focus
- **Speculation** - Only verifiable regulatory news
- **Old news** - Must be within 7-14 days unless evergreen

## Quality Checks

Before reporting a news hook, verify:

1. [ ] **Recent enough** - Within appropriate timeframe for priority level
2. [ ] **Verifiable** - Can link to primary source
3. [ ] **Relevant** - Affects Beth's audience (institutional, compliance, legal)
4. [ ] **Actionable** - Readers need to DO something
5. [ ] **Has angle** - Beth can add unique perspective (check domain files)

## Example News Briefs

### Good Example
```markdown
# News Brief: OCC Grants Trust Bank Charter to Circle

## What Happened
OCC approved Circle's national trust bank charter application, making it the first major stablecoin issuer with federal banking charter. Effective January 15, 2026.

## Why It Matters
Legitimizes stablecoin operations at federal level. Sets precedent for other issuers. Changes competitive landscape.

## Beth's Angle
25+ years in financial services + stablecoin board experience. Can analyze what charter requirements mean operationally.

## Timing
- Priority: HIGH
- Window: 48-72 hours (fast-moving story)

## Suggested Content
- [x] LinkedIn post (quick reaction)
- [ ] 900-word deep analysis on charter requirements
```

### Bad Example (Skip)
```markdown
# News Brief: Bitcoin Price Hits New High

## What Happened
Bitcoin reached $150,000...
```
*Skip - Price movements are not Beth's domain.*

## Integration with Content Pipeline

After finding news hooks:

1. **Score against rules** - Apply `news-gathering-rules.md` scoring matrix
2. Create news brief in `/content/research/` (only if score >= 4)
3. Use `content-orchestrator` skill to assign to writers
4. Writers check `research-sufficiency-rules.md` for minimum sources
5. Writers apply `voice-matching-rules.md` patterns
6. Voice validator checks against `voice-validator.md` checklist
7. Research validator checks against `research-validator.md` standards
8. Human review

## Related Rule Files

- `news-gathering-rules.md` - Full scoring matrix, timeliness windows, expertise tiers
- `research-sufficiency-rules.md` - Source minimums before writing
- `voice-matching-rules.md` - Beth's patterns for drafting
