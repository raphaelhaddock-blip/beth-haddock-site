import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  caseStudies,
  getCaseStudyBySlug,
  getAllCaseStudySlugs,
} from "@/data/caseStudies";
import { getGuideBySlug } from "@/data/guides";

// Generate static params for all case studies
export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

// Generate metadata for each case study
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

  // Find related case studies (same category, exclude current)
  const relatedStudies = caseStudies
    .filter((s) => s.slug !== slug)
    .slice(0, 2);

  // Get related guides - fetch full data for each connection
  const relatedGuides = study.relatedGuides
    .map((related) => getGuideBySlug(related.slug))
    .filter(Boolean);

  return (
    <div className="bg-white text-[#1a1a1a] min-h-screen">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur border-b border-gray-100 px-6 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="font-[family-name:var(--font-playfair)] text-lg font-semibold"
          >
            Beth Haddock
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/work"
              className="text-sm text-gray-600 hover:text-[#1a1a1a] transition"
            >
              Work
            </Link>
            <Link
              href="/guides"
              className="text-sm text-gray-600 hover:text-[#1a1a1a] transition"
            >
              Guides
            </Link>
            <Link
              href="/insights"
              className="text-sm text-gray-600 hover:text-[#1a1a1a] transition"
            >
              Insights
            </Link>
            <a
              href="https://calendly.com/beth-haddock"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#1a1a1a] text-white text-sm font-medium hover:bg-[#a88b63] transition"
            >
              Book a Conversation
            </a>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/work"
            className="text-sm text-[#a88b63] hover:text-[#1a1a1a] transition mb-8 inline-block"
          >
            ← All Work
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs text-[#a88b63] uppercase tracking-widest font-medium">
                {study.category}
              </span>
              <span className="text-gray-300">·</span>
              <span className="text-sm text-gray-500">{study.period}</span>
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight">
              {study.company}
            </h1>
            <p className="text-lg text-gray-500 mb-2">{study.role}</p>
            <p className="text-xl text-gray-700 leading-relaxed">
              {study.headline}
            </p>
          </header>

          {/* Summary */}
          <section className="mb-12">
            <p className="text-gray-700 text-lg leading-relaxed">
              {study.summary}
            </p>
          </section>

          {/* Challenge */}
          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-4">
              The Challenge
            </h2>
            <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
          </section>

          {/* Approach */}
          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-4">
              My Approach
            </h2>
            <p className="text-gray-700 leading-relaxed">{study.approach}</p>
          </section>

          {/* Outcome */}
          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-4">
              The Outcome
            </h2>
            <p className="text-gray-700 leading-relaxed">{study.outcome}</p>
          </section>

          {/* Key Contributions */}
          <section className="mb-12 p-8 bg-gray-50 border border-gray-100">
            <h2 className="font-[family-name:var(--font-playfair)] text-xl mb-6">
              Key Contributions
            </h2>
            <ul className="space-y-3">
              {study.keyContributions.map((contribution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#a88b63] mt-1.5">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700">{contribution}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Related Guides - Narrative Connections */}
          {study.relatedGuides.length > 0 && (
            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-playfair)] text-xl mb-6">
                The Bigger Picture
              </h2>
              <div className="space-y-6">
                {study.relatedGuides.map((related) => {
                  const guide = relatedGuides.find(g => g?.slug === related.slug);
                  if (!guide) return null;
                  return (
                    <div key={related.slug} className="border-l-2 border-[#a88b63] pl-6">
                      <p className="text-gray-700 mb-3 leading-relaxed">
                        {related.connectionText}
                      </p>
                      <Link
                        href={`/guides/${guide.slug}`}
                        className="group"
                      >
                        <h3 className="font-medium text-lg mb-1 group-hover:text-[#a88b63] transition">
                          {guide.title}
                        </h3>
                        <p className="text-sm text-[#a88b63]">
                          {related.linkText}
                        </p>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="bg-[#1a1a1a] text-white p-8 md:p-10">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl mb-4">
                Facing similar challenges?
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Whether you're navigating regulatory complexity, preparing for
                institutional growth, or building at the intersection of
                traditional finance and crypto—I can help.
              </p>
              <a
                href="https://calendly.com/beth-haddock"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-white text-[#1a1a1a] font-medium hover:bg-[#a88b63] hover:text-white transition"
              >
                Book a Conversation
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Work */}
      {relatedStudies.length > 0 && (
        <section className="py-16 px-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-8">
              More Work
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedStudies.map((related) => (
                <Link
                  key={related.slug}
                  href={`/work/${related.slug}`}
                  className="block p-6 bg-white border border-gray-200 hover:border-[#a88b63] transition group"
                >
                  <p className="text-xs text-[#a88b63] uppercase tracking-widest mb-2">
                    {related.category}
                  </p>
                  <h3 className="font-medium text-lg mb-2 group-hover:text-[#a88b63] transition">
                    {related.company}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                    {related.headline}
                  </p>
                  <span className="text-sm text-gray-400">{related.role}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© 2026 Beth Haddock</p>
          <div className="flex gap-6 text-sm">
            <a
              href="https://linkedin.com/in/bethhaddock"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#1a1a1a] transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:beth@warburtonadvisers.com"
              className="text-gray-500 hover:text-[#1a1a1a] transition"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
