# Site Consolidation Plan: Beth Haddock + Warburton Advisers

## Date: 2026-01-19

## The Decision

**Beth Haddock is the brand. Warburton Advisers is how she engages.**

This is the correct marketing architecture because:
1. Professional services at this level are bought on personal trust
2. Beth's 25-year reputation IS the product
3. All content (CoinDesk, LinkedIn, speaking) builds Beth's name first
4. The credential logos are Beth's relationships, not a firm's
5. "Warburton Advisers" is a generic firm name with no moat
6. Personal brands travel; firm brands don't

---

## Current State

### Beth's Site (beth-haddock-site.vercel.app)
- `/` - Homepage (personal brand, hero, credentials, services, speaking)
- `/warburton-advisors` - Basic practice page (services, about Beth)
- `/guides` - 6 comprehensive thought leadership guides
- `/insights` - Blog/analysis from Sanity CMS
- Published In section (just added)

### Warburton Site (warburtonadvisers.com) - TO BE DEPRECATED
- `/` - Firm homepage
- `/services` - Detailed services
- `/about` - Team page (Beth, Mary Toumpas, Mark Roszak)
- `/media` - Publications archive
- `/blog` - Firm blog
- `/contact` - Contact page

---

## Target State

### Site Architecture

```
bethhaddock.com (primary domain)
│
├── / (Homepage)
│   └── Beth's personal brand - unchanged, already strong
│
├── /practice (NEW - replaces /warburton-advisors)
│   ├── Hero: "My Practice: Warburton Advisers"
│   ├── Philosophy: How Beth approaches engagements
│   ├── Services: Fractional GC, Board, Advisory, Special Projects
│   ├── Team: "I work with..." - Mary Toumpas, Mark Roszak
│   ├── Notable Engagements: Case studies (anonymized)
│   └── CTA: Schedule conversation
│
├── /guides (unchanged)
│   └── Thought leadership under Beth's name
│
├── /insights (unchanged)
│   └── Blog/analysis under Beth's name
│
└── /media (NEW - optional, could be part of /practice)
    └── Full publications archive, podcast, speaking
```

### Navigation Structure

**Desktop Nav:**
```
[Beth Haddock logo/wordmark]     About   Practice   Guides   Insights   [Contact]
```

**Mobile Nav:**
```
[Beth Haddock]                                              [Menu]
  └── About (scrolls to homepage section)
  └── Practice (Warburton Advisers)
  └── Guides
  └── Insights
  └── Contact
```

### Key Changes

| Current | Target | Why |
|---------|--------|-----|
| `/warburton-advisors` | `/practice` | Clearer, shorter, positions as "Beth's practice" |
| No team page | Team section on `/practice` | Mary & Mark need a home |
| Warburton blog separate | Consolidate to `/insights` | One content hub |
| Warburton media page | Consolidate to homepage "Published In" + `/practice` | Already partially done |
| Two domains | One domain, redirect warburtonadvisers.com | Single brand presence |

---

## Implementation Phases

### Phase 1: Enhance /practice Page (replaces /warburton-advisors)

**Tasks:**
1. Rename route from `/warburton-advisors` to `/practice`
2. Update Nav component to show "Practice" instead of current link
3. Expand the page with:
   - Better hero: "My Practice: Warburton Advisers"
   - Philosophy section: Beth's approach to engagements
   - Enhanced services section (pull detail from warburtonadvisers.com)
   - Team section: Mary Toumpas (Compliance Advisor), Mark Roszak (Legal Partner)
   - Client types / ideal engagements
   - Full CTA section
4. Add redirect from `/warburton-advisors` to `/practice`

**Content to pull from warburtonadvisers.com:**
- Service descriptions (more detailed than current)
- Team bios for Mary and Mark
- Any blog posts worth preserving

### Phase 2: Navigation Updates

**Tasks:**
1. Update Nav component with new structure
2. Add "Practice" to main nav
3. Ensure mobile nav works correctly
4. Update footer links

### Phase 3: Content Consolidation

**Tasks:**
1. Review warburtonadvisers.com/blog for any posts worth migrating
2. If valuable posts exist, migrate to Sanity CMS under `/insights`
3. Ensure all media/publications are captured (mostly done with "Published In")

### Phase 4: Domain & Redirect Strategy

**Tasks:**
1. Set up redirect: warburtonadvisers.com → bethhaddock.com/practice
2. Update all external links (LinkedIn, CoinDesk bio, etc.) to point to new URLs
3. Update email signatures, business cards, etc.

**Note:** This phase requires domain access and should be coordinated with Beth.

---

## Detailed Page Specs

### /practice Page Structure

```
PRACTICE PAGE
─────────────────────────────────────────────────────────

[Nav - same as rest of site]

HERO
├── Eyebrow: "My Practice"
├── Title: "Warburton Advisers"
├── Subtitle: "Sustainable governance and compliance solutions
│             for blockchain and financial services."
└── Brief intro paragraph about Beth's approach

─────────────────────────────────────────────────────────

PHILOSOPHY
├── Title: "How I Work"
├── Content: Beth's approach - limited engagements,
│            deep partnership, operator perspective
└── Quote: "Governance is a strategic growth lever..."

─────────────────────────────────────────────────────────

SERVICES (4 cards, enhanced from current)
├── Fractional GC
│   ├── Description (expanded)
│   ├── Ideal for: Series A-C crypto/fintech
│   └── CTA: Discuss
├── Board & Governance
│   ├── Description (expanded)
│   ├── Ideal for: NYDFS licensing, IPO readiness
│   └── CTA: Discuss
├── Strategic Advisory
│   ├── Description (expanded)
│   ├── Ideal for: M&A, enforcement, regulatory strategy
│   └── CTA: Discuss
└── Special Projects
    ├── Description (expanded)
    ├── Examples: Incident response, RegTech, program builds
    └── CTA: Discuss

─────────────────────────────────────────────────────────

TEAM
├── Title: "I Work With"
├── Intro: "For certain engagements, I bring in trusted specialists..."
├── Mary Toumpas
│   ├── Photo (if available)
│   ├── Title: Compliance Advisor
│   └── Bio: Seasoned CCO, practical risk-managed guidance
└── Mark Roszak
    ├── Photo (if available)
    ├── Title: Legal Partner
    └── Bio: Structuring and corporate advisory

─────────────────────────────────────────────────────────

NOTABLE ENGAGEMENTS (anonymized case studies)
├── 01: Cybersecurity Incident Response
├── 02: Cross-Border M&A Integration
├── 03: RegTech Platform Development
└── (Keep existing content, possibly expand)

─────────────────────────────────────────────────────────

INDUSTRIES
├── Tags: Financial Services, Fintech, Blockchain, DeFi, Stablecoins
└── (Visual treatment - pills or icons)

─────────────────────────────────────────────────────────

CTA
├── Title: "Ready to discuss your challenge?"
├── Calendly button
└── Alternative: Email beth@warburtonadvisers.com

─────────────────────────────────────────────────────────

[Footer - same as rest of site]
```

### Nav Component Updates

```tsx
// Current nav items (approximate)
const navItems = [
  { name: "About", href: "/#about" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/#contact" },
];

// Updated nav items
const navItems = [
  { name: "About", href: "/#how-i-work" },
  { name: "Practice", href: "/practice" },
  { name: "Guides", href: "/guides" },
  { name: "Insights", href: "/insights" },
];
```

---

## Content Migration Checklist

### From warburtonadvisers.com:

- [ ] Service descriptions (enhance current)
- [ ] Mary Toumpas bio
- [ ] Mark Roszak bio
- [ ] Team photos (if available)
- [ ] Any blog posts worth preserving (review content)
- [ ] Contact information

### Already on Beth's site:
- [x] Beth's bio and positioning
- [x] Services overview
- [x] Notable engagements
- [x] Publications (just added "Published In" section)
- [x] Speaking section
- [x] Guides (thought leadership)
- [x] Insights (blog via Sanity)

---

## Success Metrics

1. **Single source of truth:** All Beth/Warburton content lives on one site
2. **Clear navigation:** Visitors understand Beth = person, Warburton = practice
3. **Team visibility:** Mary and Mark have appropriate presence
4. **SEO preserved:** Redirects maintain any existing search equity
5. **Conversion path clear:** Every page leads to Calendly

---

## Timeline Estimate

| Phase | Scope | Effort |
|-------|-------|--------|
| Phase 1 | Enhanced /practice page | 2-3 hours |
| Phase 2 | Navigation updates | 30 min |
| Phase 3 | Content consolidation | 1-2 hours (depends on blog review) |
| Phase 4 | Domain redirects | Requires Beth's input on domain access |

**Total implementation: ~4-6 hours + domain coordination**

---

## Open Questions for Beth

1. **Team photos:** Do we have photos of Mary Toumpas and Mark Roszak?
2. **Blog migration:** Any posts from warburtonadvisers.com/blog worth keeping?
3. **Domain access:** Who controls warburtonadvisers.com for redirect setup?
4. **Email:** Keep beth@warburtonadvisers.com or transition to @bethhaddock.com?

---

## Next Steps

1. ✅ Plan written
2. [ ] Implement Phase 1: Enhanced /practice page
3. [ ] Implement Phase 2: Navigation updates
4. [ ] Review warburtonadvisers.com blog for migration
5. [ ] Coordinate domain redirect with Beth
