export type RelatedGuide = {
  slug: string;
  connectionText: string; // The narrative explaining WHY this is related
  linkText: string; // The CTA text like "Learn more →"
};

export type CaseStudy = {
  slug: string;
  company: string;
  role: string;
  period: string;
  category: "Primary" | "Board" | "Advisory" | "Project";
  headline: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  keyContributions: string[];
  relatedGuides: RelatedGuide[]; // narrative connections to guides
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "advisorengine",
    company: "AdvisorEngine",
    role: "General Counsel & Head of Compliance",
    period: "2021–Present",
    category: "Primary",
    headline: "Leading legal strategy for Franklin Templeton's bet on advisor technology",
    summary:
      "AdvisorEngine is a wealth management technology platform backed by Franklin Templeton, serving thousands of financial advisors managing over $600 billion in assets. As General Counsel and Head of Compliance, I lead all legal, regulatory, and compliance functions during a period when the SEC has dramatically increased scrutiny of digital advice—with robo-advisor enforcement actions rising and new regulations like Reg BI reshaping fiduciary standards across the industry.",
    challenge:
      "Franklin Templeton's acquisition of AdvisorEngine created an opportunity—and a challenge. The company needed to scale its legal and compliance infrastructure to match the expectations of a $1.5 trillion asset manager parent while maintaining the agility of a fintech. This came at a particularly fraught moment for the industry: the SEC under Chair Gensler pursued 125 enforcement actions totaling $6.05 billion in penalties—a dramatic increase from the prior administration's 70 actions and $1.52 billion. Meanwhile, the fintech model itself was under scrutiny. The Synapse bankruptcy exposed $85 million in missing customer funds and revealed regulatory gaps in the Banking-as-a-Service model that underpins much of fintech. While AdvisorEngine operates differently as a registered investment advisor technology platform, the broader message was clear: regulators were examining every corner of fintech with new intensity.",
    approach:
      "I rebuilt the legal function from the ground up, learning from both traditional finance rigor and fintech failures. This meant establishing enterprise-grade contract management, implementing compliance monitoring systems that could scale with client growth, and creating a regulatory affairs capability that could anticipate rather than react to regulatory developments. I built BSA/AML programs, transaction monitoring capabilities, and governance frameworks that satisfy Franklin Templeton's standards—the same standards that made them comfortable with a $100 million+ crypto commitment through their Franklin OnChain U.S. Government Money Fund (FOBXX), one of the first tokenized funds. On the product side, I embedded legal review into the development process early—shifting from 'legal as gatekeeper' to 'legal as enabler.' When the SEC released guidance on digital engagement practices and gamification concerns, we were already compliant because we'd designed for it.",
    outcome:
      "AdvisorEngine has expanded its product suite significantly while maintaining a clean regulatory record through an enforcement environment that has penalized competitors. We've successfully navigated multiple SEC and FINRA examinations at a time when examinations are more rigorous than ever. The compliance program I built now serves as a model within the Franklin Templeton family—informing how they think about technology platform oversight more broadly. The platform now serves a significantly larger advisor base than when I joined, with the legal infrastructure to support continued growth. More importantly, we've built the institutional credibility that makes Franklin Templeton comfortable expanding their digital asset offerings, knowing the compliance foundation is solid.",
    keyContributions: [
      "Built enterprise-grade legal and compliance infrastructure meeting $1.5T asset manager standards",
      "Navigated multiple SEC and FINRA examinations during heightened enforcement era",
      "Embedded legal review into product development lifecycle—compliance by design",
      "Created BSA/AML and transaction monitoring frameworks scalable across product lines",
      "Aligned practices with Franklin Templeton while preserving fintech agility",
      "Established governance model that informed Franklin Templeton's broader digital asset strategy",
    ],
    relatedGuides: [
      {
        slug: "institutional-crypto",
        connectionText: "The compliance infrastructure I built at AdvisorEngine follows the same principles institutions need when entering crypto. Franklin Templeton's standards shaped the template—here's the broader framework.",
        linkText: "Learn how institutions should approach crypto →"
      },
      {
        slug: "crypto-compliance",
        connectionText: "Surviving SEC examinations during the Gensler era required anticipating regulatory concerns before they became enforcement actions. These principles apply whether you're building wealth-tech or crypto infrastructure.",
        linkText: "Learn the compliance principles behind this work →"
      }
    ],
  },
  {
    slug: "grayscale",
    company: "Grayscale Investments",
    role: "Strategic Advisor",
    period: "2019–2022",
    category: "Advisory",
    headline: "Advising on the compliance architecture that made Bitcoin ETFs possible",
    summary:
      "Grayscale created the first SEC-reporting Bitcoin investment vehicle, opening digital assets to institutional investors for the first time. I advised on regulatory strategy and compliance architecture during the critical period when Grayscale was establishing the template for institutional crypto investment. The frameworks we built became the foundation for an industry that now manages over $115 billion in ETF assets—with BlackRock's IBIT alone holding $75 billion.",
    challenge:
      "In 2019, institutional investors wanted Bitcoin exposure but couldn't touch it. Custody was immature, regulatory status was unclear, and investment committees had no framework for approving crypto allocations. Grayscale had a product—the Grayscale Bitcoin Trust (GBTC), which began trading on OTCQX in 2015 as the first publicly traded Bitcoin fund—but needed to build the compliance and regulatory infrastructure that would make institutional investors comfortable. The challenge wasn't just legal; it was translational. How do you explain a novel asset class to investment committees trained on decades of traditional finance frameworks? Meanwhile, the SEC rejected every spot ETF application from 2017 through 2023, citing 'fraud and manipulation' concerns. The path forward wasn't clear.",
    approach:
      "I worked with the Grayscale team on multiple fronts. On compliance architecture, we built systems that mirrored what institutional investors expected from traditional fund products—rigorous NAV calculations with clear pricing methodologies, transparent custody arrangements with documented controls, regular reporting cadences, and clear governance structures. On regulatory strategy, we developed approaches for engaging with the SEC proactively rather than defensively—even as the agency was rejecting ETF applications. The bet was that eventually, regulatory consistency would matter. If futures-based Bitcoin ETFs could be approved (they were, in 2021), the logic for rejecting spot ETFs would eventually collapse. We prepared for that moment. On investor relations, I helped develop materials and frameworks that translated Bitcoin's value proposition into language institutional allocators understood. This wasn't about dumbing down—it was about building bridges between two financial cultures that spoke different languages.",
    outcome:
      "The bet paid off. On August 29, 2023, Grayscale won its lawsuit against the SEC—the DC Circuit Court ruled the SEC was 'arbitrary and capricious' for approving futures ETFs while rejecting spot ETFs. On January 11, 2024, the SEC approved 11 spot Bitcoin ETFs. The floodgates opened: $75 billion flowed into crypto products in Q1 2024, a 400% acceleration from pre-approval levels. Today, Bitcoin ETF AUM exceeds $115 billion. BlackRock's IBIT became their top revenue-generating product and the fastest ETF ever to reach $70 billion in assets. BlackRock, Fidelity, and Grayscale now control ~85% of crypto fund AUM ($123B+). The compliance architecture we helped design—the NAV methodologies, custody documentation, regulatory reporting frameworks—became the template everyone else followed. What started as work translating crypto for institutions became the foundation for institutional crypto.",
    keyContributions: [
      "Advised on SEC-compliant compliance architecture that became industry standard",
      "Developed regulatory engagement strategy through years of ETF rejections",
      "Created frameworks translating crypto for institutional investment committees",
      "Built NAV calculation and custody documentation templates adopted industry-wide",
      "Contributed to groundwork that enabled $115B+ in ETF approvals",
      "Helped establish the institutional credibility that made Grayscale's SEC lawsuit viable",
    ],
    relatedGuides: [
      {
        slug: "institutional-crypto",
        connectionText: "The Grayscale work was about translating crypto for institutional investors—years before the ETF approvals proved the thesis. Here's the broader framework for how institutions should approach this asset class.",
        linkText: "Learn the institutional crypto playbook →"
      },
      {
        slug: "crypto-compliance",
        connectionText: "Building the compliance architecture that made GBTC possible required rethinking what 'institutional-grade' means for crypto. These are the principles that eventually convinced the SEC.",
        linkText: "Learn what regulators actually want →"
      }
    ],
  },
  {
    slug: "gmo-z-trust",
    company: "GMO-Z Trust Company",
    role: "Board of Directors",
    period: "2022–Present",
    category: "Board",
    headline: "Board governance for a NYDFS-regulated stablecoin issuer in the GENIUS Act era",
    summary:
      "GMO-Z Trust is a New York-chartered trust company regulated by the New York Department of Financial Services (NYDFS), issuing the GYEN stablecoin—the first regulated Japanese yen stablecoin. As a board member, I provide governance oversight for one of the few fully regulated stablecoin issuers in the United States. The stablecoin market has grown to $170+ billion, dominated by USDT ($115B) and USDC ($35B), with new federal legislation—the GENIUS Act, signed July 2025—creating the first federal framework for stablecoin issuers.",
    challenge:
      "Stablecoins operate in a regulatory environment that has swung dramatically. When I joined the board, most issuers were offshore or minimally regulated—Tether has never submitted to an independent audit and was found by the CFTC to have held sufficient reserves only 27.6% of days in a 26-month period. GMO-Z Trust chose a different path: obtaining a New York trust charter and submitting to NYDFS oversight. NYDFS requires 100% reserve backing, monthly attestations, and the same examination rigor that governs major banks. This decision provided credibility but created governance challenges. Then the landscape shifted: the GENIUS Act of 2025 created federal stablecoin regulation for the first time, requiring 100% liquid reserve backing, monthly public disclosure, and the technical capability to freeze/seize/burn tokens when legally required. For issuers under $10 billion, state regulation remains an option if 'substantially similar' to federal standards. Suddenly, our early compliance investment became competitive advantage.",
    approach:
      "As a board member, I focus on the intersection of regulatory compliance and business strategy in a rapidly evolving framework. This means ensuring that GMO-Z Trust's operations meet NYDFS requirements—reserve composition (U.S. dollars, Treasury bills, money market funds), attestation cadence (monthly by registered public accounting firm), redemption mechanics, and counterparty exposure limits—while preparing for GENIUS Act implementation. We built risk management frameworks for stablecoin-specific risks that traditional banking governance doesn't contemplate: what happens during a market-wide depeg event? How do we manage the technical capability to freeze tokens that the law now requires? How do we ensure reserve assets are genuinely liquid when redemptions spike? I bring both traditional finance governance experience and crypto-native understanding to board discussions. When Terra/Luna collapsed in May 2022—wiping out $40 billion and triggering cascading failures across crypto—our regulated structure meant we weren't exposed to the contagion that destroyed algorithmic stablecoins.",
    outcome:
      "GMO-Z Trust has maintained its regulatory standing through the most volatile period in stablecoin history. While Tether has faced $41 million in CFTC penalties and remains unaudited, and while USDC briefly depegged to $0.87 during the SVB collapse (March 2023), GYEN has provided stable, regulated yen-denominated stablecoin access throughout. The company has passed multiple NYDFS examinations—the same examination process that governs entities like Circle (which received a BitLicense in 2015). Our governance practices have been cited as examples for other crypto companies seeking regulatory status. More importantly, the GENIUS Act validation of our approach—100% reserves, regular attestations, state-level oversight—means the compliance infrastructure we built proactively is now the legal baseline. We were early, and being early is now paying off.",
    keyContributions: [
      "Provide governance oversight for NYDFS-regulated operations meeting banking-grade standards",
      "Navigate GENIUS Act implementation while maintaining state regulatory compliance",
      "Advise on reserve management frameworks—composition, liquidity, attestation cadence",
      "Ensure technical compliance capabilities (freeze/seize/burn) required by federal law",
      "Bridge traditional finance governance with crypto-native business needs",
      "Establish board practices that survived Terra/Luna collapse, SVB crisis, and regulatory shifts",
    ],
    relatedGuides: [
      {
        slug: "stablecoins",
        connectionText: "Everything I know about stablecoin governance comes from this board seat—including what the GENIUS Act actually requires and how NYDFS oversight works in practice. Here's the broader framework.",
        linkText: "Learn how stablecoins actually work →"
      },
      {
        slug: "crypto-compliance",
        connectionText: "NYDFS oversight was the gold standard before GENIUS Act made it the baseline. Here's what compliance actually looks like from the inside—and why being early to regulation matters.",
        linkText: "Learn what regulators actually want →"
      }
    ],
  },
  {
    slug: "balancer",
    company: "Balancer",
    role: "Strategic Advisor",
    period: "2021–Present",
    category: "Advisory",
    headline: "Navigating decentralization and compliance as DeFi faces regulatory reckoning",
    summary:
      "Balancer is one of the largest decentralized exchange protocols, enabling automated portfolio management and liquidity provision through its unique weighted pool mechanism—the constant product formula (x * y = k) that powers automated market makers. I advise on the complex intersection of decentralized protocol governance, regulatory compliance, and institutional engagement during the most intense period of DeFi regulatory scrutiny in history. DeFi TVL peaked at $180 billion in late 2021, crashed to $40 billion post-Terra, and has recovered to $100B+. Throughout, the regulatory question has loomed: who's responsible for a permissionless protocol?",
    challenge:
      "DeFi protocols face a fundamental tension that became existential in 2022-2024: they're designed to be decentralized and permissionless, but regulators increasingly expect someone to be accountable. The SEC issued a Wells notice to Uniswap Labs in April 2024—though it was later closed in February 2025, the threat was real. The CFTC pursued the Ooki DAO case (September 2022), holding individual DAO members liable for protocol governance votes—a precedent that terrified every DeFi governance participant. The message was clear: 'decentralized' doesn't mean 'unaccountable.' Balancer needed to navigate this tension while pursuing institutional adoption. The SEC has articulated theories that DEXs could be unregistered exchanges, that governance tokens could be securities, and that AMM mechanics constitute broker-dealer activity. How do you build compliance frameworks for permissionless systems when the rules are being written through enforcement?",
    approach:
      "I work with the Balancer team on developing frameworks that preserve decentralization while preparing for regulatory engagement. This includes advising on governance structures that distribute decision-making appropriately—the CFTC's five-dimension decentralization framework (control, upgradability, access, economics, governance) provides a roadmap. We analyze where protocol decisions actually concentrate and document the distinction between Balancer Labs (the company) and the Balancer Protocol (the smart contracts). On compliance documentation, I help translate DeFi mechanics for traditional regulators: how weighted pools work, why liquidity providers aren't necessarily securities underwriters, how governance token distribution affects decentralization analysis. For institutional onboarding, we created materials addressing the questions investment committees actually ask: What's the counterparty risk? What happens if the protocol is deemed illegal? How do we explain this to our auditors? The key insight: decentralization and compliance aren't opposites. Well-designed decentralized systems can actually be more compliant than centralized ones—they're transparent, auditable, and operate according to predetermined rules. The challenge is explaining this to regulators trained on 'someone is responsible' models.",
    outcome:
      "Balancer has navigated the DeFi regulatory storm while maintaining its position as one of the most trusted protocols for institutional users. When the Uniswap Wells notice sent shockwaves through DeFi in April 2024, Balancer's governance documentation and compliance frameworks provided clarity that competitors lacked. The protocol continues to process billions in volume while the CLARITY Act—now in the Senate—promises to finally clarify SEC vs. CFTC jurisdiction over DeFi. Our governance frameworks have helped the protocol articulate its decentralization in terms regulators understand. Institutional liquidity on Balancer has grown even as other DeFi protocols retreated from U.S. markets entirely. The protocol is regularly cited as an example of how DeFi can mature without sacrificing its core principles—transparent, auditable, and governed by code.",
    keyContributions: [
      "Advise on regulatory strategy through SEC Wells notice era and CFTC enforcement wave",
      "Develop frameworks documenting decentralization across CFTC's five dimensions",
      "Create governance structures distinguishing protocol from operating company",
      "Translate AMM mechanics and liquidity provision for traditional regulators",
      "Build institutional onboarding materials addressing investment committee concerns",
      "Navigate Ooki DAO precedent implications for governance token holders",
    ],
    relatedGuides: [
      {
        slug: "defi-explained",
        connectionText: "The work at Balancer is about proving that decentralization and compliance can coexist—even as the SEC pursued protocols and the CFTC held DAO members liable. Here's the broader framework for understanding DeFi's regulatory moment.",
        linkText: "Learn how DeFi actually works →"
      },
      {
        slug: "crypto-compliance",
        connectionText: "DeFi compliance requires translating 'code is law' into language regulators understand. Here's how to think about compliance when there's no central entity to regulate.",
        linkText: "Learn what regulators actually want →"
      }
    ],
  },
  {
    slug: "ondo",
    company: "Ondo Finance",
    role: "Project Advisor",
    period: "2023–2024",
    category: "Project",
    headline: "Advising on the regulatory architecture behind $1.6 billion in tokenized assets",
    summary:
      "Ondo Finance is a pioneer in tokenizing real-world assets, bringing US Treasury exposure on-chain through products like USDY (yield-bearing stablecoin-like product) and OUSG (tokenized short-term Treasuries). I advised on regulatory strategy and institutional positioning during the company's growth from early stage to $1.6 billion in assets—making Ondo one of the largest tokenized Treasury issuers alongside BlackRock's BUIDL ($2.8B). The entire tokenized Treasury market has grown from under $100 million to ~$7.3-9 billion, a 50x increase since January 2024.",
    challenge:
      "Tokenized treasuries sit at the intersection of securities law, banking regulation, and crypto infrastructure. When I began advising Ondo, the entire market was nascent—regulators hadn't articulated clear rules, and institutional investors were skeptical that tokenization added value to an already-liquid asset class. The challenge: how do you tokenize one of the most regulated asset classes (US government debt) in a way that's legally sound, institutionally credible, and accessible to crypto-native users? The legal structure matters enormously: you can't 'put a Treasury on the blockchain.' You tokenize ownership of an entity (SPV) that holds the Treasury. That entity needs proper documentation—Private Placement Memorandum, subscription agreements, operating agreements, token purchase agreements—all aligned with the smart contract code. If the legal documents and code diverge, you have a lawsuit waiting to happen.",
    approach:
      "I advised Ondo on structuring their products to fit within existing regulatory frameworks while preserving the benefits of tokenization. This included deep analysis of securities law implications—OUSG is a security, structured under Regulation D exemptions, with transfer restrictions coded into the smart contracts. For USDY, we navigated the complex question of whether a yield-bearing dollar-denominated product is a stablecoin, a security, or something else. We built compliance infrastructure using modern token standards (ERC-3643 and similar) that enforce transfer restrictions, holding periods, and accreditation checks automatically—code that doesn't make mistakes or cut corners. On institutional positioning, I helped articulate why tokenized treasuries aren't just 'crypto complexity layered on top of simple assets.' The real value: 24/7 availability, DeFi composability (use OUSG as collateral in lending protocols), and access for crypto-native users who couldn't easily open traditional brokerage accounts. The BIS estimates tokenized government bonds can reduce costs by 1.2% of nominal value over the bond's lifetime—meaningful at scale.",
    outcome:
      "Ondo's tokenized treasury products have grown from early stage to $1.6 billion in assets—establishing the company as a category leader alongside BlackRock (BUIDL), Franklin Templeton (FOBXX/BENJI), and new entrants like Fidelity and State Street. When BlackRock launched BUIDL in March 2024 through Securitize (the only platform with SEC-registered transfer agent, broker-dealer, and ATS licenses), it validated the entire thesis. Larry Fink called tokenization 'the next generation for markets.' The regulatory frameworks developed during my advisory period—the SPV structures, the securities law analysis, the compliance-by-code architecture—positioned Ondo to benefit from institutional validation rather than scramble to catch up. BCG-Ripple projects the tokenized asset market could reach $18.9 trillion by 2033 (53% CAGR). We built the compliance foundation during the early innings of that growth.",
    keyContributions: [
      "Advised on securities law structuring for OUSG (Reg D) and USDY product classification",
      "Developed SPV documentation architecture—PPM, subscription agreements, operating agreements",
      "Ensured alignment between legal contracts and smart contract code",
      "Built compliance-by-code frameworks using modern token standards (ERC-3643)",
      "Created institutional positioning explaining tokenization value proposition",
      "Supported proactive regulatory engagement during market's 50x growth phase",
    ],
    relatedGuides: [
      {
        slug: "tokenization",
        connectionText: "Ondo is the clearest example of tokenization working at scale—$1.6 billion in a market that didn't exist two years ago. Here's the broader framework for understanding where tokenization creates real value.",
        linkText: "Learn how tokenization is reshaping asset ownership →"
      },
      {
        slug: "defi-explained",
        connectionText: "Tokenized treasuries unlock DeFi composability—use OUSG as collateral, borrow stablecoins, earn yield on yield. Here's how to understand the infrastructure that makes this possible.",
        linkText: "Learn how DeFi infrastructure works →"
      }
    ],
  },
  {
    slug: "orca",
    company: "Orca",
    role: "Strategic Advisor",
    period: "2022–Present",
    category: "Advisory",
    headline: "Strategic advisory for Solana's leading DEX through ecosystem turbulence and recovery",
    summary:
      "Orca is the most-used decentralized exchange on Solana, known for its user-friendly interface and efficient concentrated liquidity pools (CLMMs). I advise on regulatory strategy, institutional partnerships, and long-term positioning in the evolving DEX landscape. Solana's journey has been dramatic: the FTX collapse in November 2022 (SBF was Solana's most prominent backer) sent SOL from $35 to under $10, devastating the ecosystem. By late 2024, SOL had recovered to $200+. Through it all, Orca maintained its position as the ecosystem's leading DEX—a testament to building for the long term.",
    challenge:
      "Orca faced a unique challenge among DeFi protocols: surviving the near-death of its underlying blockchain. When FTX collapsed, taking $8 billion in customer funds and its founder's reputation, Solana was collateral damage. Institutional investors fled. TVL crashed. Many Solana projects shut down. Orca needed to maintain operations, retain team, and prepare for recovery while the ecosystem was at its lowest. Simultaneously, the broader DeFi regulatory environment intensified—the same SEC Wells notices and CFTC enforcement actions affecting Ethereum protocols applied conceptually to Solana DeFi. How does a DeFi protocol on a 'tainted' blockchain establish the credibility needed for institutional adoption while preparing for regulatory scrutiny that could come at any time?",
    approach:
      "My advisory work with Orca focuses on three areas: surviving and positioning for recovery, regulatory preparedness, and institutional relationship building. On survival: we developed frameworks for operating lean while maintaining core development—the protocols that survived the Solana winter were the ones that didn't over-extend during the bull market. On regulation, I help the team anticipate and prepare for evolving DeFi oversight. The Ooki DAO case (CFTC, September 2022) and Uniswap Wells notice (SEC, April 2024) established that DEX operators face real enforcement risk regardless of blockchain. We built governance documentation and compliance frameworks that could withstand scrutiny. On institutional relationships, I advise on how to engage with traditional finance players returning to Solana—many institutions that fled after FTX are now back, but with harder questions about counterparty risk and ecosystem stability. The key insight: the protocols that build compliance infrastructure during downturns are positioned to capture institutional capital during recoveries.",
    outcome:
      "Orca survived the Solana winter and emerged stronger. As SOL recovered from under $10 to over $200, Orca maintained its position as the ecosystem's leading DEX—not by accident, but by building sustainable operations and institutional credibility during the downturn. When traditional finance players returned to Solana (Visa integrated Solana for USDC settlements, PayPal launched PYUSD on Solana), Orca was positioned to capture institutional liquidity. The governance frameworks and compliance documentation developed during the quiet period meant we weren't scrambling when institutional interest returned. The strategic frameworks developed through our advisory relationship have helped the team make decisions that balance short-term growth with long-term sustainability—a philosophy that proved essential when the ecosystem faced existential risk.",
    keyContributions: [
      "Advised on survival strategy through FTX collapse and Solana ecosystem crisis",
      "Developed regulatory preparedness frameworks applicable to Solana DeFi",
      "Built governance documentation anticipating CFTC/SEC scrutiny models",
      "Supported institutional partnership development during ecosystem recovery",
      "Help articulate differentiation in multi-chain DEX landscape",
      "Provide traditional finance perspective on long-term protocol sustainability",
    ],
    relatedGuides: [
      {
        slug: "defi-explained",
        connectionText: "Orca represents DeFi on an alternative blockchain—the same fundamental questions about balancing innovation and compliance, with the added complexity of ecosystem-level risk. Here's the broader framework.",
        linkText: "Learn how DeFi actually works →"
      },
      {
        slug: "crypto-compliance",
        connectionText: "Building compliance infrastructure during a downturn positions you to capture institutional capital during recovery. Here's how to think about compliance as competitive advantage.",
        linkText: "Learn what regulators actually want →"
      }
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}

export function getCaseStudiesByCategory(category: CaseStudy["category"]): CaseStudy[] {
  return caseStudies.filter((study) => study.category === category);
}
