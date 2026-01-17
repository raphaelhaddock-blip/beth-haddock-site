import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import { guides, getGuideBySlug, getAllGuideSlugs } from "@/data/guides";
import { getCaseStudyBySlug } from "@/data/caseStudies";

// Generate static params for all guides
export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

// Generate metadata for each guide
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return { title: "Guide Not Found | Beth Haddock" };
  }

  return {
    title: `${guide.title} | Beth Haddock`,
    description: guide.description,
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  // Find related guides (exclude current)
  const relatedGuides = guides.filter((g) => g.slug !== slug).slice(0, 2);

  // Get related case studies - fetch full data for each connection
  const relatedCaseStudies = guide.relatedCaseStudies
    .map((related) => getCaseStudyBySlug(related.slug))
    .filter(Boolean);

  return (
    <div className="bg-[#FDFCF8] text-stone-900 min-h-screen">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-[#FDFCF8]/95 backdrop-blur border-b border-stone-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="font-[family-name:var(--font-playfair)] text-lg font-semibold"
          >
            Beth Haddock
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href="/work"
              className="text-sm text-stone-500 hover:text-stone-900 transition"
            >
              Work
            </Link>
            <Link
              href="/guides"
              className="text-sm text-stone-900 font-medium"
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
              className="px-4 py-2 border border-stone-900 text-stone-900 text-sm font-medium hover:bg-stone-900 hover:text-white transition"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="pt-40 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/guides"
            className="text-sm text-stone-500 hover:text-stone-900 transition mb-8 inline-block"
          >
            ← All Guides
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-stone-400 mb-4">
              <span>{guide.readTime}</span>
              <span>·</span>
              <span>Updated {guide.lastUpdated}</span>
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight text-stone-900">
              {guide.title}
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed">
              {guide.subtitle}
            </p>
          </header>

          {/* Table of Contents */}
          <nav className="mb-12 p-6 bg-stone-50 border border-stone-200">
            <p className="text-sm font-medium text-stone-500 uppercase tracking-wide mb-4">
              In this guide
            </p>
            <ul className="space-y-2">
              {guide.sections.map((section, index) => (
                <li key={index}>
                  <a
                    href={`#section-${index}`}
                    className="text-stone-600 hover:text-stone-900 transition text-sm"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Content Sections */}
          <div className="space-y-12">
            {guide.sections.map((section, index) => (
              <section key={index} id={`section-${index}`} className="scroll-mt-32">
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl mb-6 text-stone-900">
                  {section.title}
                </h2>
                <div className="prose prose-lg max-w-none prose-headings:font-[family-name:var(--font-playfair)] prose-a:text-stone-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-stone-900 prose-p:text-stone-600 prose-p:leading-relaxed prose-li:text-stone-600">
                  <ReactMarkdown>{section.content}</ReactMarkdown>
                </div>
              </section>
            ))}
          </div>

          {/* Related Work - Narrative Connections */}
          {guide.relatedCaseStudies.length > 0 && (
            <section className="mt-20 pt-12 border-t border-stone-200">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-8 text-stone-900">
                See This in Practice
              </h2>
              <div className="space-y-8">
                {guide.relatedCaseStudies.map((related) => {
                  const study = relatedCaseStudies.find(s => s?.slug === related.slug);
                  if (!study) return null;
                  return (
                    <div key={related.slug} className="border-l-2 border-stone-300 pl-6">
                      <p className="text-stone-600 mb-4 leading-relaxed">
                        {related.connectionText}
                      </p>
                      <Link
                        href={`/work/${study.slug}`}
                        className="inline-flex items-center gap-2 text-stone-600 font-medium hover:text-stone-900 transition group"
                      >
                        <span className="text-xs uppercase tracking-widest text-stone-400 mr-2">
                          {study.category}
                        </span>
                        <span className="font-[family-name:var(--font-playfair)] text-lg">
                          {study.company}
                        </span>
                      </Link>
                      <p className="text-sm text-stone-500 mt-2">
                        {related.linkText}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="mt-20 pt-12 border-t border-stone-200">
            <div className="bg-stone-900 text-white p-8 md:p-10">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl mb-4">
                {guide.cta.title}
              </h3>
              <p className="text-stone-300 mb-6 leading-relaxed">
                {guide.cta.description}
              </p>
              <a
                href="https://calendly.com/beth-haddock"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-white text-stone-900 font-medium hover:bg-stone-100 transition"
              >
                Schedule a Conversation
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Guides */}
      {relatedGuides.length > 0 && (
        <section className="py-24 px-6 bg-stone-50 border-t border-stone-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-8 text-stone-900">
              More Guides
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedGuides.map((related) => (
                <Link
                  key={related.slug}
                  href={`/guides/${related.slug}`}
                  className="block p-6 bg-[#FDFCF8] border border-stone-200 hover:border-stone-400 transition group"
                >
                  <h3 className="font-medium text-lg mb-2 group-hover:text-stone-600 transition line-clamp-2 text-stone-900">
                    {related.title}
                  </h3>
                  <p className="text-sm text-stone-500 mb-3 line-clamp-2">
                    {related.subtitle}
                  </p>
                  <span className="text-sm text-stone-400">
                    {related.readTime}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-stone-200">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-lg text-stone-900 mb-2">
              Beth Haddock
            </p>
            <p className="text-sm text-stone-400">© 2026. All rights reserved.</p>
          </div>
          <div className="flex gap-8 text-sm">
            <a
              href="https://linkedin.com/in/bethhaddock"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-stone-900 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:beth@warburtonadvisers.com"
              className="text-stone-500 hover:text-stone-900 transition"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
