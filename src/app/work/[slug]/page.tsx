import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  caseStudies,
  getCaseStudyBySlug,
  getAllCaseStudySlugs,
} from "@/data/caseStudies";
import { getGuideBySlug } from "@/data/guides";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return { title: "Case Study Not Found | Beth Haddock" };
  }

  return {
    title: `${study.company} | Work | Beth Haddock`,
    description: study.headline,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const relatedStudies = caseStudies
    .filter((s) => s.slug !== slug)
    .slice(0, 2);

  const relatedGuides = study.relatedGuides
    .map((related) => getGuideBySlug(related.slug))
    .filter(Boolean);

  return (
    <div className="bg-[#0A0A0A] text-[#FAFAFA] min-h-screen">
      <Nav active="work" alwaysVisible />

      {/* Article */}
      <article className="pt-32 md:pt-48 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/work"
            className="text-sm text-[#A1A1AA] hover:text-[#D4AF37] transition mb-12 inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Work
          </Link>

          {/* Header */}
          <header className="mb-16">
            <p className="text-sm text-[#D4AF37] tracking-[0.2em] uppercase mb-4">
              {study.category} · {study.period}
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight">
              {study.company}
            </h1>
            <p className="text-[#A1A1AA] mb-4">{study.role}</p>
            <p className="text-xl text-[#A1A1AA] leading-relaxed">
              {study.headline}
            </p>
          </header>

          {/* Summary */}
          <section className="mb-16">
            <p className="text-[#A1A1AA] text-lg leading-relaxed">
              {study.summary}
            </p>
          </section>

          {/* Challenge */}
          <section className="mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-4">
              The Challenge
            </h2>
            <p className="text-[#A1A1AA] leading-relaxed">{study.challenge}</p>
          </section>

          {/* Approach */}
          <section className="mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-4">
              Approach
            </h2>
            <p className="text-[#A1A1AA] leading-relaxed">{study.approach}</p>
          </section>

          {/* Outcome */}
          <section className="mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-4">
              Outcome
            </h2>
            <p className="text-[#A1A1AA] leading-relaxed">{study.outcome}</p>
          </section>

          {/* Key Contributions */}
          <section className="mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-6">
              Key Contributions
            </h2>
            <ul className="space-y-3">
              {study.keyContributions.map((contribution, index) => (
                <li key={index} className="text-[#A1A1AA] leading-relaxed flex gap-3">
                  <span className="text-[#D4AF37]">—</span>
                  {contribution}
                </li>
              ))}
            </ul>
          </section>

          {/* Related Guides */}
          {study.relatedGuides.length > 0 && (
            <section className="mt-24 pt-12 border-t border-[#262626]">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-8">
                Related Guides
              </h2>
              <div className="space-y-6">
                {study.relatedGuides.map((related) => {
                  const guide = relatedGuides.find(g => g?.slug === related.slug);
                  if (!guide) return null;
                  return (
                    <Link
                      key={related.slug}
                      href={`/guides/${guide.slug}`}
                      className="block group"
                    >
                      <p className="text-[#FAFAFA] group-hover:text-[#D4AF37] transition">
                        {guide.title}
                      </p>
                      <p className="text-sm text-[#A1A1AA]">
                        {related.linkText}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* Contact CTA */}
          <section className="mt-24 pt-12 border-t border-[#262626]">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-4">
              {study.roleType === "fractional-gc" && "Need institutional-grade legal leadership?"}
              {study.roleType === "board" && "Building a board for the crypto x TradFi edge?"}
              {study.roleType === "advisor" && "Facing similar challenges?"}
            </h2>
            <p className="text-[#A1A1AA] leading-relaxed mb-6">
              {study.roleType === "fractional-gc" &&
                "I embed with teams to build compliance infrastructure that satisfies institutional scrutiny—without the overhead of a full-time hire."}
              {study.roleType === "board" &&
                "I bring regulatory foresight, institutional credibility, and a network that opens doors for companies seeking NYDFS licensing, institutional partnerships, or IPO readiness."}
              {study.roleType === "advisor" &&
                "Whether you're navigating regulatory complexity, preparing for institutional growth, or building at the intersection of traditional finance and crypto."}
            </p>
            <a
              href={`https://calendly.com/beth-haddock${study.roleType === "fractional-gc" ? "?type=fractional-gc" : study.roleType === "board" ? "?type=board" : "?type=advisory"}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2"
            >
              Let&apos;s talk
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </section>
        </div>
      </article>

      {/* More Work */}
      {relatedStudies.length > 0 && (
        <section className="py-24 px-6 border-t border-[#262626]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-8">
              More Work
            </h2>
            <div className="space-y-8">
              {relatedStudies.map((related) => (
                <Link
                  key={related.slug}
                  href={`/work/${related.slug}`}
                  className="block group"
                >
                  <p className="text-[#FAFAFA] group-hover:text-[#D4AF37] transition">
                    {related.company}
                  </p>
                  <p className="text-sm text-[#A1A1AA]">
                    {related.role}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
