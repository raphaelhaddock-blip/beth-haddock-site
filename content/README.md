# Beth Haddock Editorial Content

This folder contains thought leadership content at various stages of the editorial pipeline.

## Folder Structure

```
content/
├── drafts/      # Agent-generated, pending Beth's review
├── ready/       # Beth-approved, ready to publish
├── published/   # Archive of published content
└── research/    # Research briefs (internal, not published)
```

## Workflow

1. **Research** → Agent gathers deep context on a topic
2. **Draft** → Writer agent creates draft in `drafts/`
3. **Review** → Beth reviews, edits, approves or rejects
4. **Ready** → Approved content moves to `ready/`
5. **Publish** → Content goes to LinkedIn and/or website
6. **Archive** → Published content moves to `published/`

## File Naming

```
YYYY-MM-DD-topic-slug.md
```

Example: `2026-01-18-stablecoin-road-ahead.md`

## Draft Template

Every draft must include frontmatter:

```yaml
---
title: "Title Here"
type: linkedin | long-form | hot-take | road-ahead
status: draft | ready | published
created: 2026-01-18
author: claude
reviewer: beth
linkedin_ready: false
---
```

## Voice Requirements (from CLAUDE.md)

Every piece of content must:

1. Open with war story or specific experience (not definition)
2. Use "I" at least 5 times with specific experience
3. Name at least one company Beth has worked with
4. Include at least one mistake/failure pattern she witnessed
5. Be actionable: reader knows what to DO
6. Pass the "CoinDesk test" - no generic crypto explainers

## Companies Beth Can Reference

**Tier 1 - Deep Expertise (Can Make Bold Claims):**
- GMO-Z Trust (NYDFS stablecoin board)
- Grayscale (crypto institutional infrastructure)
- AdvisorEngine (wealth-tech GC)
- Ondo (tokenized treasuries)
- Balancer (DeFi advisory)
- Orca (Solana DeFi advisory)

**Tier 2 - Background (Can Reference):**
- Guggenheim Investments
- Franklin Templeton
- AXA
- Brown Brothers Harriman

## Anti-AI Patterns

Content is REJECTED if it contains:
- "In this article, we will explore..."
- "It is important to note that..."
- "In conclusion..."
- "On one hand... on the other hand..." (perfectly balanced)
- Generic crypto explainers
- No personal experience anchor
