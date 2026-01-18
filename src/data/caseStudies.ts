export type RelatedGuide = {
  slug: string;
  linkText: string;
};

export type CaseStudy = {
  slug: string;
  company: string;
  role: string;
  period: string;
  category: "Primary" | "Board" | "Advisory";
  roleType: "fractional-gc" | "board" | "advisor";
  isCurrent: boolean;
  headline: string;
  relatedGuides: RelatedGuide[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "advisorengine",
    company: "AdvisorEngine",
    role: "Chief Legal Officer",
    period: "2021–Present",
    category: "Primary",
    roleType: "fractional-gc",
    isCurrent: true,
    headline: "Legal and compliance leadership for a wealth management technology platform.",
    relatedGuides: [],
  },
  {
    slug: "gmo-z-trust",
    company: "GMO-Z Trust Company",
    role: "Board of Directors",
    period: "2022–Present",
    category: "Board",
    roleType: "board",
    isCurrent: true,
    headline: "Governance and compliance oversight for a regulated stablecoin issuer.",
    relatedGuides: [],
  },
  {
    slug: "grayscale",
    company: "Grayscale Investments",
    role: "Strategic Advisor",
    period: "2019–2022",
    category: "Advisory",
    roleType: "advisor",
    isCurrent: false,
    headline: "Regulatory strategy and compliance advisory for institutional crypto investment.",
    relatedGuides: [],
  },
  {
    slug: "balancer",
    company: "Balancer",
    role: "Strategic Advisor",
    period: "2021–Present",
    category: "Advisory",
    roleType: "advisor",
    isCurrent: true,
    headline: "Strategic advisory for decentralized exchange protocol governance.",
    relatedGuides: [],
  },
  {
    slug: "ondo",
    company: "Ondo Finance",
    role: "Project Advisor",
    period: "2023–2024",
    category: "Advisory",
    roleType: "advisor",
    isCurrent: false,
    headline: "Regulatory advisory for tokenized treasury products.",
    relatedGuides: [],
  },
  {
    slug: "orca",
    company: "Orca",
    role: "Strategic Advisor",
    period: "2022–2024",
    category: "Advisory",
    roleType: "advisor",
    isCurrent: false,
    headline: "Strategic advisory for Solana-based decentralized exchange.",
    relatedGuides: [],
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
