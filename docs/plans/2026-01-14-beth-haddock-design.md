# Beth Haddock Website Design

## Date: 2026-01-14

## The Problem

Beth has deep expertise and incredible credentials but:
- Prospects she meets don't know what to do next
- She can't/won't sell herself
- Everything comes through her network (not enough deal flow)
- She wants more opportunities to choose from (she's very picky)

## What We Learned (Brainstorming)

### What Beth wants:
- Impact and optionality
- Strategic work, not operational grind
- To work with founders who listen
- More opportunities in the funnel so she can be selective

### What energizes her:
- Strategic conversations
- Teaching/advising founders who actually listen
- Being the expert voice
- Building something new
- High-stakes moments (fundraising, M&A, regulatory pivots)

### What drains her:
- Ongoing operational compliance work
- Large corporate bureaucracy
- Companies that don't listen
- Defensive posture only
- Being just a "name on letterhead"

### What's worked:
- Deep relationships over time
- Specific expertise asks (crypto/stablecoin regulatory)
- Warm introductions

### What hasn't worked:
- Waiting for referrals passively
- General networking at conferences

### Her expertise people seek:
1. Crypto/stablecoin regulatory navigation
2. Strategic regulatory positioning
3. Credibility/trust signal
4. Building legal/compliance functions

### Her stature:
- Peer to top founders/executives
- Relationships at the highest levels (SEC, major institutions)
- Seen the full arc (crypto from fringe to mainstream, fintech, AI)
- Has shaped the industry, not just participated
- Worked with a16z portfolio companies (NDA'd)

### Sweet spot:
- Growth-stage companies (Series B-D)
- Early-stage also good
- Crypto, fintech, AI at the frontier

---

## The Positioning

**Who she is:**
An industry insider who has shaped crypto and fintech regulation from the inside. She selectively works with founders building the future of finance.

**The line:**
> "I've helped build the regulatory frameworks that crypto operates under today. I work with founders who want to get ahead of what's coming next."

**What she's NOT:**
- "Fractional GC" (too operational)
- "Board Director seeking opportunities" (too passive)
- "Regulatory consultant" (too generic)

---

## The Lead Generation Strategy

### The formula:
Content on site → Share to LinkedIn → Drives traffic → Site converts to Calendly

### Lead sources:
1. **Blog/Content** - Multiple posts per week on crypto regulation, AI governance, regulatory strategy
2. **LinkedIn** - Share blog posts, engage with comments, build presence
3. **Podcast appearances** - Borrowed audience, she just shows up and talks
4. **Network referrals** - Tell network specifically what she wants
5. **PE/VC relationships** - Get on radar for portfolio company needs

### The website's job:
1. **Validate** - When someone Googles her, they see credibility
2. **Clarify** - What she does, for whom
3. **Convert** - One click to book a call

---

## Website Structure

### Homepage

**Above the fold:**
- Name: Beth Haddock
- One line: "Board director. Strategic counsel. Crypto, fintech, AI."
- Proof line: "Former CLO (Franklin Templeton) · CCO (Guggenheim) · a16z portfolio companies"
- Button: "Book a conversation" → Calendly

**What I do (50 words max):**
> "I work with founders at regulatory inflection points - raising, scaling, entering new markets, or getting ahead of what's coming. Board seats, advisory roles, strategic counsel. If you're building at the frontier of finance, let's talk."

**Proof section:**
- Logo bar: Grayscale, Robinhood, Franklin Templeton, Guggenheim, World Gold Council
- Line: "Plus portfolio companies of Andreessen Horowitz and other leading crypto investors."

**Current roles:**
- GMO-Z.com Trust (Board)
- Balancer (Advisory)
- Stablecoin Standard (Advisory)

**Latest insights:**
- 3 most recent blog posts

**Footer:**
- LinkedIn
- Email
- CTA button again

### Blog/Insights Section

**Purpose:** Thought leadership content that drives leads

**Volume:** Multiple posts per week

**Topics:**
- Crypto regulation news and analysis
- Stablecoin compliance
- AI governance for founders
- Regulatory strategy for growth-stage companies
- What founders need to know about [current events]

**Format:**
- AI generates drafts based on news/trends
- Beth's perspective woven in
- 500-1000 words each
- Ends with CTA: "Let's talk" → Calendly

**Example titles:**
- "What the latest SEC action means for crypto founders"
- "Stablecoin regulation: what's coming in 2026"
- "Why your Series B needs a regulatory strategy"
- "AI governance: what founders should know now"
- "The board seat checklist for crypto companies"

### Individual Blog Post

- Title
- Date
- Content
- Author bio (short)
- CTA: Book a conversation
- Related posts

---

## Conversion Flow

1. **Lead finds content** (LinkedIn, Google, referral)
2. **Clicks to website** (blog post or homepage)
3. **Sees credibility** (logos, proof, current roles)
4. **Understands fit** (clear positioning)
5. **Clicks CTA** ("Book a conversation")
6. **Calendly** with one question: "What's on your mind?"
7. **Call booked**

---

## Content Engine

| Step | Who | Tool |
|------|-----|------|
| Monitor news/trends | AI/System | News feeds, alerts |
| Generate draft | AI | Claude or similar |
| Add Beth's perspective | Beth/Raphy | Quick review/edit |
| Publish to site | System | CMS (Sanity) |
| Share to LinkedIn | Beth | Manual or scheduled |
| Respond to comments | Beth | LinkedIn app |

---

## Technical Implementation

**Stack:**
- Next.js (current)
- Tailwind CSS (current)
- Sanity CMS (for blog posts)
- Calendly (for booking)
- Vercel (hosting)

**Pages:**
- `/` - Homepage
- `/insights` - Blog listing
- `/insights/[slug]` - Individual blog post

**Sanity schemas needed:**
- `post` - Blog posts with title, slug, content, publishedAt, excerpt

---

## Design Principles

1. **Substance over style** - Not trying to win design awards
2. **Confident and understated** - She doesn't need to convince you
3. **Clear hierarchy** - Proof, clarity, conversion
4. **Mobile-first** - Founders read on phones
5. **Fast** - No heavy animations or slow loads

---

## Success Metrics

**Right metrics:**
- Blog posts published per week
- LinkedIn engagement (comments, shares)
- Website traffic from LinkedIn
- Calendly bookings
- Conversations had
- Opportunities in pipeline

**Wrong metrics:**
- Design compliments
- Total page views (vanity)
- Social media followers

---

## What We're NOT Building

- Multiple service pages (unnecessary)
- Pricing or packages (she's not a vendor)
- Email capture / newsletter (not the bottleneck)
- Fancy animations (substance over style)
- About page (homepage has enough)

---

## Next Steps

1. Build the homepage with new positioning
2. Set up Sanity CMS for blog posts
3. Create blog listing and post pages
4. Connect Calendly
5. Deploy
6. Start content engine

---

## Summary

Beth is an industry insider who has shaped crypto/fintech regulation. The website validates her credibility and converts interested prospects to calls. The blog drives leads through LinkedIn distribution. The formula: Content → LinkedIn → Website → Calendly → Conversation.
