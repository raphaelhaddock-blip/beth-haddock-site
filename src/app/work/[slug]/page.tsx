import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  caseStudies,
  getCaseStudyBySlug,
  getAllCaseStudySlugs,
} from "@/data/caseStudies";
import { getGuideBySlug } from "@/data/guides";

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
    <div className="bg-[#FAFAF9] text-[#1C1917] min-h-screen">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-[#FAFAF9]/95 backdrop-blur border-b border-[#E7E5E4] px-6 py-4">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#1C1917]"
          >
            Beth Haddock
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href="/work"
              className="text-sm text-[#1C1917]"
            >
              Work
            </Link>
            <Link
              href="/guides"
              className="text-sm text-[#57534E] hover:text-[#1C1917] transition"
            >
              Guides
            </Link>
            <Link
              href="/insights"
              className="text-sm text-[#57534E] hover:text-[#1C1917] transition"
            >
              Insights
            </Link>
            <a
              href="https://calendly.com/beth-haddock"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#57534E] hover:text-[#1C1917] transition"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="pt-48 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/work"
            className="text-sm text-[#57534E] hover:text-[#1C1917] transition mb-12 inline-block"
          >
            ← Work
          </Link>

          {/* Header */}
          <header className="mb-16">
            <p className="text-sm text-[#57534E] mb-4">
              {study.category} · {study.period}
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight text-[#1C1917]">
              {study.company}
            </h1>
            <p className="text-[#57534E] mb-4">{study.role}</p>
            <p className="text-xl text-[#57534E] leading-relaxed">
              {study.headline}
            </p>
          </header>

          {/* Summary */}
          <section className="mb-16">
            <p className="text-[#57534E] text-lg leading-relaxed">
              {study.summary}
            </p>
          </section>

          {/* Challenge */}
          <section className="mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-4 text-[#1C1917]">
              The Challenge
            </h2>
            <p className="text-[#57534E] leading-relaxed">{study.challenge}</p>
          </section>

          {/* Approach */}
          <section className="mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-4 text-[#1C1917]">
              Approach
            </h2>
            <p className="text-[#57534E] leading-relaxed">{study.approach}</p>
          </section>

          {/* Outcome */}
          <section className="mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-4 text-[#1C1917]">
              Outcome
            </h2>
            <p className="text-[#57534E] leading-relaxed">{study.outcome}</p>
          </section>

          {/* Key Contributions */}
          <section className="mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-6 text-[#1C1917]">
              Key Contributions
            </h2>
            <ul className="space-y-3">
              {study.keyContributions.map((contribution, index) => (
                <li key={index} className="text-[#57534E] leading-relaxed">
                  {contribution}
                </li>
              ))}
            </ul>
          </section>

          {/* Related Guides */}
          {study.relatedGuides.length > 0 && (
            <section className="mt-24 pt-12 border-t border-[#E7E5E4]">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-8 text-[#1C1917]">
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
                      <p className="text-[#1C1917] group-hover:text-[#57534E] transition">
                        {guide.title}
                      </p>
                      <p className="text-sm text-[#57534E]">
                        {related.linkText}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* Contact */}
          <section className="mt-24 pt-12 border-t border-[#E7E5E4]">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-4 text-[#1C1917]">
              Facing similar challenges?
            </h2>
            <p className="text-[#57534E] leading-relaxed mb-6">
              Whether you're navigating regulatory complexity, preparing for
              institutional growth, or building at the intersection of
              traditional finance and crypto.
            </p>
            <a
              href="https://calendly.com/beth-haddock"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1C1917] hover:text-[#57534E] transition border-b border-[#1C1917] hover:border-[#57534E] pb-1"
            >
              Schedule a conversation
            </a>
          </section>
        </div>
      </article>

      {/* More Work */}
      {relatedStudies.length > 0 && (
        <section className="py-24 px-6 border-t border-[#E7E5E4]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-8 text-[#1C1917]">
              More Work
            </h2>
            <div className="space-y-8">
              {relatedStudies.map((related) => (
                <Link
                  key={related.slug}
                  href={`/work/${related.slug}`}
                  className="block group"
                >
                  <p className="text-[#1C1917] group-hover:text-[#57534E] transition">
                    {related.company}
                  </p>
                  <p className="text-sm text-[#57534E]">
                    {related.role}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-[#E7E5E4]">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-sm text-[#57534E]">
            © 2026 Beth Haddock
          </p>
          <div className="flex gap-8 text-sm">
            <a
              href="https://linkedin.com/in/bethhaddock"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#57534E] hover:text-[#1C1917] transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:beth@warburtonadvisers.com"
              className="text-[#57534E] hover:text-[#1C1917] transition"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
