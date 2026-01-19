---
name: news-monitor
description: Use to find current regulatory news, legislation updates, and enforcement actions that Beth should comment on - finds timely hooks for thought leadership content
---

# News Monitor

## Purpose

Find timely news hooks that Beth can write expert analysis about. Focus on regulatory developments, legislation, and enforcement actions in crypto, fintech, and AI governance.

## The Core Question

**"What happened in the last 7 days that Beth's audience (institutional operators, GCs, compliance officers) needs her analysis on?"**

## News Sources by Priority

### Tier 1: Primary Sources (Check First)
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

## What to Look For

### High-Priority News Hooks (Act Within 24-48 Hours)
- New SEC enforcement action against crypto company
- Major legislation passing committee or floor vote
- Regulatory agency issues new guidance
- Significant court ruling affecting crypto/fintech
- Major company compliance failure or scandal

### Medium-Priority (Within 1 Week)
- Agency speeches signaling policy direction
- International regulatory developments (MiCA, etc.)
- Industry reports with regulatory implications
- Personnel changes at regulatory agencies

### Evergreen (Can Schedule)
- Regulatory deadlines approaching
- Anniversary of significant events
- Quarterly compliance calendar items
- Predictable regulatory cycles

## Output Format

When you find news worth writing about, create a brief:

```markdown
# News Brief: [Topic]

## What Happened
[2-3 sentences on the news itself]

## Why It Matters
[2-3 sentences on implications for Beth's audience]

## Beth's Angle
[What specific expertise can Beth bring? Check domain files.]

## Timing
- Priority: HIGH / MEDIUM / EVERGREEN
- Window: [How long until this is stale?]

## Suggested Content
- [ ] LinkedIn post (quick reaction)
- [ ] 300-500 word hot take
- [ ] 900-word deep analysis
- [ ] Multiple pieces in sequence

## Key Facts (Verified)
- [Fact 1 with source]
- [Fact 2 with source]
- [Fact 3 with source]

## Related Domain Research
- domain-XX-[topic].md (sections: ...)

## Primary Sources
- [Link 1]
- [Link 2]
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

1. Create news brief in `/content/research/`
2. Use `content-orchestrator` skill to assign to writers
3. Writers use news brief + domain research to create drafts
4. Voice validator checks before human review
