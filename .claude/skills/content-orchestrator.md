---
name: content-orchestrator
description: Use to coordinate Beth's weekly content pipeline - monitors news, assigns topics to writers, tracks drafts through validation and review
---

# Content Orchestrator

## Purpose

Coordinate Beth's thought leadership content pipeline. Target cadence:
- **3x** 900-word deep analysis articles per week
- **3x** 300-500 word hot takes per week
- **3x** LinkedIn posts per week

## The Weekly Rhythm

### Monday: Planning
1. Run news-monitor to find fresh hooks
2. Review domain research for evergreen topics
3. Identify 3 hot take topics + 3 deep dive topics + 3 LinkedIn topics
4. Create content calendar for the week

### Tuesday-Thursday: Production
- Generate drafts using article-writer and linkedin-writer
- Run voice-validator on each draft
- Move validated drafts to `/content/drafts/`

### Friday: Review Prep
- Compile all drafts for Beth/Raphy review
- Create summary of what needs feedback
- Note any time-sensitive pieces

## Content Calendar Template

Create `/content/calendar/week-YYYY-MM-DD.md`:

```markdown
# Content Calendar: Week of YYYY-MM-DD

## Hot Takes (300-500 words)
| Day | Topic | News Hook | Status | File |
|-----|-------|-----------|--------|------|
| Tue | | | pending | |
| Wed | | | pending | |
| Thu | | | pending | |

## Deep Analysis (900 words)
| Day | Topic | Angle | Status | File |
|-----|-------|-------|--------|------|
| Tue | | | pending | |
| Wed | | | pending | |
| Thu | | | pending | |

## LinkedIn Posts
| Day | Topic | News Hook | Status | File |
|-----|-------|-----------|--------|------|
| Tue | | | pending | |
| Wed | | | pending | |
| Thu | | | pending | |

## Time-Sensitive Items
- [ ] [Item with deadline]

## Notes
- [Any context for the week]
```

## Topic Selection Framework

### Priority Matrix

| Topic Type | Timeliness | Effort | Priority |
|------------|------------|--------|----------|
| Breaking regulatory news | Hours | Low | HIGHEST |
| Legislation passing | Days | Medium | HIGH |
| Industry report/data | Week | Medium | MEDIUM |
| Evergreen guidance | Anytime | High | QUEUE |
| Pattern recognition | Anytime | Medium | QUEUE |

### Topic Sources

1. **News Monitor** - Fresh hooks from last 7 days
2. **Domain Research** - Deep topics from `/research/domain-*.md`
3. **Calendar** - Upcoming deadlines, anniversaries, events
4. **Audience Questions** - What are GCs asking about?

### Topic Assignment

| Content Type | Best For |
|--------------|----------|
| LinkedIn Post | Breaking news, quick reactions, engagement |
| Hot Take | News with clear opinion angle |
| Deep Analysis | Complex topics requiring context |

## Execution: Run Content Week

### Step 1: News Scan (Monday)

```bash
# Use news-monitor skill
1. WebSearch for recent regulatory news
2. Check SEC/CFTC/OCC press releases
3. Create news briefs for relevant items
4. Save to /content/research/news-*.md
```

### Step 2: Topic Selection (Monday)

Review these sources:
- Fresh news briefs from Step 1
- Domain files for evergreen angles
- Any pending topics from last week

Select:
- 3 topics for hot takes (need news hooks)
- 3 topics for deep analysis
- 3 topics for LinkedIn

### Step 3: Content Creation (Tue-Thu)

For each topic:

1. **If LinkedIn post:**
   - Run `linkedin-writer` skill
   - Save to `/content/drafts/`

2. **If hot take or deep analysis:**
   - Run `article-writer` skill
   - Save to `/content/drafts/`

3. **For all drafts:**
   - Run `voice-validator` skill
   - Fix any issues flagged
   - Confirm validation passes

### Step 4: Pipeline Tracking

Update calendar with status:
- `pending` - Not started
- `drafting` - In progress
- `validation` - With voice-validator
- `draft` - Ready for human review
- `ready` - Approved, ready to publish
- `published` - Live

### Step 5: Review Summary (Friday)

Create review summary for Beth/Raphy:

```markdown
# Weekly Review: YYYY-MM-DD

## Ready for Review
| File | Type | Topic | Priority |
|------|------|-------|----------|
| 2026-01-20-genius-act.md | hot-take | GENIUS Act | HIGH |
| ... | | | |

## Time-Sensitive
- [ ] [Item] - publish by [date]

## Questions for Beth
- [ ] [Any topics needing input]

## Next Week Preview
- [Upcoming topics/hooks]
```

## Content Pipeline Status

Check current state:

```
/content/
├── drafts/      # [N] drafts pending review
├── ready/       # [N] approved, ready to publish
├── published/   # [N] live content
└── research/    # [N] research briefs
```

Commands to check:
```bash
ls -la /content/drafts/
ls -la /content/ready/
ls -la /content/published/
```

## Quality Gates

Before moving content through pipeline:

### Draft → Ready (Human Review)
- Beth or Raphy must approve
- Any client reference concerns addressed
- Factual accuracy verified
- Positioning approved

### Ready → Published
- Final proofread
- Links verified
- Images/formatting checked
- Scheduled for optimal time

## Skills Integration

```
┌──────────────────┐
│  news-monitor    │ ─── Finds timely hooks
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│content-orchestrator│ ─── This skill: coordinates
└────────┬─────────┘
         │
    ┌────┴────┐
    │         │
    ▼         ▼
┌─────────┐ ┌──────────────┐
│linkedin-│ │article-writer│ ─── Creates drafts
│writer   │ └──────┬───────┘
└────┬────┘        │
     │             │
     └──────┬──────┘
            │
            ▼
   ┌────────────────┐
   │ voice-validator│ ─── Quality check
   └────────┬───────┘
            │
            ▼
   ┌────────────────┐
   │ /content/drafts│ ─── Human review
   └────────────────┘
```

## Troubleshooting

### Not enough news hooks
- Check domain files for evergreen topics
- Look for anniversary/calendar pegs
- Review pending topics from previous weeks

### Content failing validation
- Re-read CLAUDE.md requirements
- Check for client references
- Remove hedge words
- Add more "I" statements with expertise

### Falling behind cadence
- Prioritize LinkedIn (fastest to produce)
- Batch similar topics together
- Consider "series" to reuse research

## Weekly Metrics

Track in calendar file:
- Drafts created: X/9 target
- Validation pass rate: X%
- Published this week: X
- Engagement (if tracked): likes, comments, shares

## Startup Checklist

When running content orchestrator:

1. [ ] Read `/content/README.md` for templates
2. [ ] Read `CLAUDE.md` for voice requirements
3. [ ] Check `/content/drafts/` for pending items
4. [ ] Check `/content/research/` for recent briefs
5. [ ] Run news-monitor for fresh hooks
6. [ ] Create/update weekly calendar
7. [ ] Execute pipeline
