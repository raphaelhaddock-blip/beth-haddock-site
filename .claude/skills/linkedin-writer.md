---
name: linkedin-writer
description: Write LinkedIn posts in Beth Haddock's voice. Use when creating thought leadership content for LinkedIn.
---

# LinkedIn Writer

## Purpose

Write LinkedIn posts that position Beth as an industry expert in crypto/fintech compliance, financial services regulation, and institutional adoption.

## CRITICAL: Client Confidentiality

**Beth CANNOT reference specific client work in LinkedIn posts.**

Do NOT write:
- "When I joined the GMO-Z Trust board..."
- "At Grayscale, I helped build..."
- "Working with Ondo on..."

DO write:
- "The first question any board member should ask a stablecoin issuer..."
- "Institutional crypto products require..."
- "Tokenized treasury products need to be structured..."

Authority comes from expertise and analysis, NOT from revealing insider information.

## Before Starting

1. Read `/Users/raphyhaddock/beth-haddock-site/CLAUDE.md`
2. Have a topic and recent news hook ready
3. Focus on regulatory developments, market events, or industry patterns
4. **Gather primary sources for every claim** (see research-validator)

## Research Standards (CRITICAL)

**Every factual claim must have a source.** Even in a LinkedIn post.

- Statistics need source + date
- Regulatory claims need official document citation
- Quotes need speaker + date
- "Breaking news" must be verified

**Source Tiers:**
- **Tier 1:** sec.gov, occ.gov, congress.gov, court filings
- **Tier 2:** Law firm alerts, research institutions
- **Tier 3:** Reuters, Bloomberg, CoinDesk
- **FORBIDDEN:** Wikipedia, blogs, "according to reports"

## LinkedIn Post Constraints

- **Optimal length:** 1,200-1,300 characters (LinkedIn truncates after ~210 chars on mobile)
- **Hook:** First 2 lines MUST make reader want to click "see more"
- **Format:** Short paragraphs (1-3 sentences), visual breaks
- **CTA:** End with a question or clear action

## The Formula

### Part 1: The Hook (First 2 Lines)
Start with a surprising fact, regulatory development, or contrarian take tied to recent news.

**Good hooks:**
```
The SEC approved 11 spot Bitcoin ETFs in January 2024.

Most people celebrated. Few asked the right question: Who built the compliance infrastructure that made this possible?
```

```
The GENIUS Act passed with bipartisan support—68-30 in the Senate.

For stablecoin issuers, this means one thing: the compliance bar just became federal law.
```

```
Tether had adequate reserves only 27.6% of the days during a 26-month period.

The CFTC documented this. Now it's illegal under federal law.
```

**Bad hooks:**
```
Stablecoins are becoming increasingly important in the financial ecosystem.
```
```
I'm thrilled to share my thoughts on crypto regulation.
```
```
When I was working with [client]...
```

### Part 2: The Context (2-3 Short Paragraphs)
What happened and why it matters. Use public facts and industry analysis.

- What the news/development actually means
- What patterns this follows
- What the industry is missing

### Part 3: The Expert Perspective (1-2 Sentences)
The "so what" that comes from 25+ years in financial services. NOT from specific client work.

**Good:** "The pattern from previous technology adoptions is clear: slow start, skepticism, then rapid acceleration once regulatory clarity exists."

**Bad:** "I saw this firsthand at [company]..."

### Part 4: The Call to Action
Ask a question OR give a specific action.

**Good CTAs:**
- "What's the first question you'd ask a stablecoin issuer before working with them?"
- "Founders: Does your compliance framework survive regulatory scrutiny?"
- "How are you preparing for the GENIUS Act requirements?"

**Bad CTAs:**
- "Like and share if you agree!"
- "Follow for more insights!"

## Voice Rules

### DO:
- Establish expertise through analysis, not insider access
- Reference public information (legislation, SEC filings, enforcement actions)
- Include specific numbers and dates
- Take a position (contrarian is good)
- Write like you're advising a colleague

### DON'T:
- Reference specific client work
- Explain what crypto/DeFi/stablecoins are
- Use hedge words ("I think," "might be," "could potentially")
- Balance both sides equally (take a stance)
- Use AI-sounding phrases (see voice-validator)

## Template

```markdown
---
title: "[Topic]"
type: linkedin
status: draft
created: [YYYY-MM-DD]
author: claude
reviewer: beth
linkedin_ready: false
---

[HOOK - 2 lines that make reader click "see more"]

[LINE BREAK]

[CONTEXT - What happened and why it matters, 2-3 short paragraphs]

[LINE BREAK]

[EXPERT PERSPECTIVE - The "so what" from 25+ years experience]

[LINE BREAK]

[CTA - Question or specific action]

---

## Research Sources
- [Links to any research used]

## News Hook
- [What current event/development this is tied to]
```

## Example Post

```markdown
---
title: "GENIUS Act: What it actually requires"
type: linkedin
status: draft
created: 2026-01-18
author: claude
reviewer: beth
linkedin_ready: false
---

The GENIUS Act passed with bipartisan support—68-30 in the Senate.

For stablecoin issuers, this means one thing: the compliance bar just became federal law.

What's required now:
- 100% liquid reserve backing
- Monthly attestations by registered accountants
- Technical capability to freeze, seize, and burn tokens for law enforcement

The issuers who built this infrastructure years ago? They're positioned to capture institutional capital.

The ones treating compliance as optional? They have 18 months to catch up—or exit.

After 25 years watching financial technology adoption, the pattern is clear: the companies that built for regulation during downturns captured the recovery. Every time.

What's the first question you'd ask any stablecoin issuer before working with them?

---

## Research Sources
- GENIUS Act text (July 2025)
- NYDFS stablecoin guidance (June 2022)
- CFTC Tether settlement: 27.6% reserve compliance

## News Hook
- GENIUS Act implementation timeline (18-month transition)
```

## Post-Writing Checklist

After writing, validate against BOTH validators:

**Voice (voice-validator):**
- [ ] Zero references to specific client work
- [ ] Authority through expertise, not insider access
- [ ] Reader knows what to DO
- [ ] No AI detection flags

**Research (research-validator):**
- [ ] Every statistic has source + date
- [ ] Regulatory claims cite official documents
- [ ] News hook verified as real and recent
- [ ] No speculation presented as fact
- [ ] No hallucinated facts (verify each claim)
- [ ] All sources are Tier 1-3 (no Wikipedia/blogs)

## Saving

Save completed drafts to:
```
/Users/raphyhaddock/beth-haddock-site/content/drafts/YYYY-MM-DD-topic-slug.md
```

## After Writing

Run voice-validator skill to check quality. If passes, draft is ready for Beth's review.

## Integration with Content Pipeline

This skill is part of the content agent system:

```
news-monitor → content-orchestrator → linkedin-writer → voice-validator → research-validator → /content/drafts/
```

**Both validators must pass before content moves to human review.**

The orchestrator coordinates weekly content:
- 3x LinkedIn posts per week target
- Use news briefs from `/content/research/news-*.md`
- Reference domain research from `/research/domain-*.md`
