---
name: voice-validator
description: Validate content meets Beth Haddock's voice and quality standards before publishing. Use after any writing agent produces content.
---

# Voice Validator

## Purpose

This skill validates that content written for Beth Haddock meets the voice standards in CLAUDE.md. Run this BEFORE content goes to Beth for review.

## CRITICAL: Client Confidentiality Check

**THE FIRST CHECK IS ALWAYS: Does this content reference ANY specific client work?**

Content that names clients and describes specific work done for them FAILS AUTOMATICALLY.

Beth's clients:
- AdvisorEngine
- GMO-Z Trust
- Grayscale
- Balancer
- Ondo
- Orca

**FAIL Examples:**
- "When I joined the GMO-Z Trust board, the first question I asked was..."
- "At Grayscale, I helped build the compliance architecture..."
- "Working with Ondo on their tokenized products..."
- "In my advisory role at Balancer..."

**These must be rewritten as industry-focused statements:**
- "The first question any board member should ask a stablecoin issuer..."
- "Institutional crypto products require compliance architecture that..."
- "Tokenized treasury products need to be structured..."
- "DeFi protocols face governance questions..."

## The Checklist

Every piece of content must pass ALL of these checks:

### 1. Client Confidentiality Test (CRITICAL)
**Check:** Does it reference ANY specific work done for clients?

If YES → AUTOMATIC REJECTION. Rewrite without client references.

### 2. Expert Authority Test
**Check:** Does it establish authority through expertise rather than insider access?

**PASS Examples:**
- "After 25 years in financial services compliance..."
- "The pattern I've seen across the industry..."
- "Based on watching how regulation evolves..."

**FAIL Examples:**
- "When I was at Company X, we..."
- "In my work with Client Y..."
- "The board discussions I've been part of revealed..."

### 3. Actionability Test
**Check:** Would the reader know what to DO after reading this?

**PASS:** Specific recommendations, frameworks, questions to ask
**FAIL:** General observations with no practical application

### 4. Timeliness Test
**Check:** Why does this matter NOW?

**PASS:** Tied to recent news, regulatory development, or market event
**FAIL:** Generic evergreen content without current hook

### 5. Verifiability Test
**Check:** Are claims based on public information or general expertise?

**PASS:** References legislation text, SEC filings, public announcements
**FAIL:** Claims that could only be known through client relationships

### 6. CoinDesk Test
**Check:** Could any section appear on a news site verbatim?

If YES → needs more expert perspective (without client examples)

## AI Detection Flags

These phrases trigger AUTOMATIC REJECTION:

- "In this article, we will explore..."
- "It is important to note that..."
- "In conclusion..."
- "Let's delve into..."
- "On one hand... on the other hand..." (perfectly balanced)
- "There are several factors to consider..."
- "It's worth noting that..."
- "This begs the question..."
- "Moving forward..."

## Validation Output Format

After running validation, output:

```
## Voice Validation Report

**Content:** [Title or first line]
**Type:** [linkedin | long-form | news-analysis | road-ahead]

### Checklist Results

| Check | Status | Notes |
|-------|--------|-------|
| Client confidentiality | ✅/❌ | [any client references?] |
| Expert authority (not insider) | ✅/❌ | [how is authority established?] |
| Actionable | ✅/❌ | [what action?] |
| Timely | ✅/❌ | [why now?] |
| Verifiable claims | ✅/❌ | [sources?] |
| Passes CoinDesk test | ✅/❌ | [any generic sections?] |
| No AI flags | ✅/❌ | [any flagged phrases?] |

### Verdict

**APPROVED** - Ready for Beth's review
— or —
**NEEDS REVISION** - [Specific issues to fix]

### Revision Guidance (if needed)

[Specific instructions for what to change]
```

## Example Validation

**Content being validated:**

> When I joined the GMO-Z Trust board, the first question I asked was about reserve audit cadence. Three years later, that question became federal law with the GENIUS Act.

**Validation:**

```
## Voice Validation Report

**Content:** "When I joined the GMO-Z Trust board..."
**Type:** linkedin

### Checklist Results

| Check | Status | Notes |
|-------|--------|-------|
| Client confidentiality | ❌ | References GMO-Z Trust board work directly |
| Expert authority (not insider) | ❌ | Authority comes from insider access, not expertise |
| Actionable | ⚠️ | Implicit but not explicit |
| Timely | ✅ | Tied to GENIUS Act |
| Verifiable claims | ❌ | Board discussions are not public |
| Passes CoinDesk test | ✅ | Has unique perspective |
| No AI flags | ✅ | None detected |

### Verdict

**NEEDS REVISION** - Content references specific client work.

### Revision Guidance

Rewrite as industry-focused thought leadership:

"The first question any board member should ask a stablecoin issuer: How often do you audit your reserves?

Three years ago, that was a differentiator. Today, it's federal law.

The GENIUS Act requires monthly reserve attestations. The issuers who built this infrastructure early are now positioned for institutional capital."
```

## Integration

This skill should be invoked:
1. By writing agents before saving to `/content/drafts/`
2. By human when manually checking content
3. Before any content is shown to Beth

If validation fails, content returns to the writing agent with specific revision guidance.
