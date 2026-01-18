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
    <div className="bg-[#FDFCF8] text-stone-900 min-h-screen">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-[#FDFCF8]/95 backdrop-blur border-b border-stone-200 px-6 py-4">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-stone-900"
          >
            Beth Haddock
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href="/work"
              className="text-sm text-stone-900"
            >
              Work
            </Link>
            <Link
              href="/guides"
              className="text-sm text-stone-500 hover:text-stone-900 transition"
            >
              Guides
            </Link>
            <Link
              href="/insights"
              className="text-sm text-stone-500 hover:text-stone-900 transition"
            >
              Insights
            </Link>
            <a
              href="https://calendly.com/beth-haddock"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-stone-500 hover:text-stone-900 transition"
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
            className="text-sm text-stone-400 hover:text-stone-900 transition mb-12 inline-block"
          >
            ← Work
          </Link>

          {/* Header */}
          <header className="mb-16">
            <p className="text-sm text-stone-400 mb-4">
              {study.category} · {study.period}
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight text-stone-900">
              {study.company}
            </h1>
            <p className="text-stone-500 mb-4">{study.role}</p>
            <p className="text-xl text-stone-600 leading-relaxed">
              {study.headline}
            </p>
          </header>

          {/* Summary */}
          <section className="mb-16">
            <p className="text-stone-600 text-lg leading-relaxed">
              {study.summary}
            </p>
          </section>

          {/* Challenge */}
          <section className="mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-4 text-stone-900">
              The Challenge
            </h2>
            <p className="text-stone-600 leading-relaxed">{study.challenge}</p>
          </section>

          {/* Approach */}
          <section className="mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-4 text-stone-900">
              Approach
            </h2>
            <p className="text-stone-600 leading-relaxed">{study.approach}</p>
          </section>

          {/* Outcome */}
          <section className="mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-4 text-stone-900">
              Outcome
            </h2>
            <p className="text-stone-600 leading-relaxed">{study.outcome}</p>
          </section>

          {/* Key Contributions */}
          <section className="mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-6 text-stone-900">
              Key Contributions
            </h2>
            <ul className="space-y-3">
              {study.keyContributions.map((contribution, index) => (
                <li key={index} className="text-stone-600 leading-relaxed">
                  {contribution}
                </li>
              ))}
            </ul>
          </section>

          {/* Related Guides */}
          {study.relatedGuides.length > 0 && (
            <section className="mt-24 pt-12 border-t border-stone-200">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-8 text-stone-900">
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
                      <p className="text-stone-900 group-hover:text-stone-600 transition">
                        {guide.title}
                      </p>
                      <p className="text-sm text-stone-500">
                        {related.linkText}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* Contact */}
          <section className="mt-24 pt-12 border-t border-stone-200">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-4 text-stone-900">
              Facing similar challenges?
            </h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              Whether you're navigating regulatory complexity, preparing for
              institutional growth, or building at the intersection of
              traditional finance and crypto.
            </p>
            <a
              href="https://calendly.com/beth-haddock"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-900 hover:text-stone-600 transition border-b border-stone-900 hover:border-stone-600 pb-1"
            >
              Schedule a conversation
            </a>
          </section>
        </div>
      </article>

      {/* More Work */}
      {relatedStudies.length > 0 && (
        <section className="py-24 px-6 border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-8 text-stone-900">
              More Work
            </h2>
            <div className="space-y-8">
              {relatedStudies.map((related) => (
                <Link
                  key={related.slug}
                  href={`/work/${related.slug}`}
                  className="block group"
                >
                  <p className="text-stone-900 group-hover:text-stone-600 transition">
                    {related.company}
                  </p>
                  <p className="text-sm text-stone-500">
                    {related.role}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-stone-200">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-sm text-stone-400">
            © 2026 Beth Haddock
          </p>
          <div className="flex gap-8 text-sm">
            <a
              href="https://linkedin.com/in/bethhaddock"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-stone-900 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:beth@warburtonadvisers.com"
              className="text-stone-400 hover:text-stone-900 transition"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
