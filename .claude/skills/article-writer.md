---
name: article-writer
description: Use to write 300-500 word hot takes or 900-word deep analysis pieces for Beth's thought leadership - uses domain research and news hooks to create drafts
---

# Article Writer

## Purpose

Create thought leadership articles for Beth's website/blog. Two formats:
- **Hot Take** (300-500 words) - Quick reaction to news
- **Deep Analysis** (900 words) - Comprehensive analysis of a topic

## Content Types

### Hot Take (300-500 words)
- **When:** News breaks, need quick expert reaction
- **Tone:** Punchy, opinionated, clear position
- **Structure:** Hook → What happened → Why it matters → What to do → CTA
- **Turnaround:** Same day or next day

### Deep Analysis (900 words)
- **When:** Topic warrants thorough treatment
- **Tone:** Authoritative, educational, layered
- **Structure:** Hook → Context → Analysis → Implications → Action
- **Turnaround:** 2-3 days

## Before Writing: Required Research

1. **Check news brief** - `/content/research/news-*.md`
2. **Read relevant domain files** - `/research/domain-*.md`
3. **Check CLAUDE.md** - Voice requirements, forbidden patterns
4. **Check content/README.md** - Template and frontmatter requirements

## Article Structure: Hot Take (300-500 words)

```markdown
---
title: "[Headline - specific, not clickbait]"
type: hot-take
status: draft
created: YYYY-MM-DD
author: claude
reviewer: beth
linkedin_ready: false
---

[HOOK - 1-2 sentences maximum. News peg or provocative statement.]

[CONTEXT - 2-3 sentences. What happened and why readers should care.]

[ANALYSIS - 3-4 paragraphs. Beth's expert perspective. Use "I" statements.
Reference 25+ years experience. Connect to patterns she's seen.]

[SO WHAT - 1-2 paragraphs. What should readers DO with this information?]

[CTA - Question or call to action for engagement.]

---

## Research Sources
- [Source 1]
- [Source 2]

## News Hook
- [What triggered this piece]

## Voice Validation Notes
- Zero client references
- Authority through expertise, not insider access
- [Other validation notes]
```

## Article Structure: Deep Analysis (900 words)

```markdown
---
title: "[Headline - specific, promises value]"
type: long-form
status: draft
created: YYYY-MM-DD
author: claude
reviewer: beth
linkedin_ready: false
---

## [Section 1: The Hook] (100-150 words)

[Open with news peg or specific situation that illustrates the problem.]
[Why this matters NOW, not in general.]
[Preview what reader will learn.]

## [Section 2: Context - What's Happening] (150-200 words)

[Explain the landscape for readers who need background.]
[But don't start from zero - assume intelligent professional audience.]
[Key facts, recent developments, regulatory context.]

## [Section 3: Analysis - What It Means] (300-350 words)

[This is the meat - Beth's expert analysis.]
[Use "I" statements: "In 25 years of financial services, I've seen..."]
[Patterns from history, parallels to other situations.]
[What the smart money is doing vs. what most people are doing.]
[Specific frameworks or mental models.]

## [Section 4: Implications] (150-200 words)

[Who wins, who loses from this development.]
[What changes over 6-12 months.]
[Second-order effects most people miss.]

## [Section 5: Action] (100-150 words)

[Specific steps readers should take.]
[Questions they should be asking.]
[How to evaluate their own situation.]

[CTA - Engagement hook or offer to discuss further.]

---

## Research Sources
- [Source 1]
- [Source 2]
- [Source 3]

## News Hook
- [What triggered this piece]

## Domain Research Used
- domain-XX-[topic].md

## Voice Validation Notes
- Zero client references
- Authority through expertise
- [Validation checklist]
```

## Voice Requirements (Critical)

### Must Include
- "I" statements with specific expertise (minimum 5)
- Reference to 25+ years in financial services
- Clear opinion/position (no hedge words)
- Actionable guidance
- Verifiable facts with sources

### Must Avoid
- Client references or insider stories
- Hedge words: "might," "perhaps," "it could be argued"
- AI patterns: "In this article," "It is important to note"
- Generic crypto explainers
- Balanced "on one hand / on the other hand"

### Authority Framework

**Say this:** "In 25 years of financial services compliance..."
**Not this:** "When I was GC at Company X..."

**Say this:** "The pattern I've observed across stablecoin issuers..."
**Not this:** "At my board seat, I saw..."

**Say this:** "Institutional operators tell me..."
**Not this:** "My client told me..."

## Headline Writing

### Good Headlines
- "The GENIUS Act: What Stablecoin Issuers Must Do Now"
- "Why Your DeFi Compliance Program Will Fail"
- "Three Questions Every Crypto GC Should Ask Their CEO"

### Bad Headlines
- "Understanding Stablecoin Regulation" (boring, generic)
- "The Future of Crypto Compliance" (vague)
- "What You Need to Know About..." (clickbait)

## Execution Steps

1. **Gather inputs:**
   - News brief (if applicable)
   - Relevant domain files
   - Verified facts from CLAUDE.md

2. **Outline first:**
   - Write section headers
   - Note key points for each section
   - Identify "I" statements to include

3. **Write draft:**
   - Follow structure above
   - Include frontmatter
   - Add sources section

4. **Self-check:**
   - Count "I" statements (minimum 5)
   - Check for forbidden patterns
   - Verify all claims have sources
   - Confirm actionable advice included

5. **Save draft:**
   - Save to `/content/drafts/YYYY-MM-DD-topic-slug.md`

6. **Request validation:**
   - Run `voice-validator` skill on draft

## Word Count Guidelines

### Hot Take (300-500 words)
- Hook: 30-50 words
- Context: 50-75 words
- Analysis: 150-250 words
- Action: 50-100 words
- CTA: 20-30 words

### Deep Analysis (900 words)
- Hook: 100-150 words
- Context: 150-200 words
- Analysis: 300-350 words
- Implications: 150-200 words
- Action: 100-150 words

## Quality Checklist

Before submitting draft:

1. [ ] Frontmatter complete
2. [ ] Word count in range
3. [ ] Minimum 5 "I" statements
4. [ ] Zero client references
5. [ ] All claims sourced
6. [ ] Clear position (no hedging)
7. [ ] Actionable guidance
8. [ ] No AI patterns
9. [ ] Passes "CoinDesk test" (would they publish this?)
10. [ ] News hook is current (if applicable)

## Integration

- **Input from:** News Monitor, Domain Research files
- **Output to:** /content/drafts/ → Voice Validator → Human review
