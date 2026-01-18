import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import { guides, getGuideBySlug, getAllGuideSlugs } from "@/data/guides";
import { getCaseStudyBySlug } from "@/data/caseStudies";

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

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

  const relatedGuides = guides.filter((g) => g.slug !== slug).slice(0, 2);

  const relatedCaseStudies = guide.relatedCaseStudies
    .map((related) => getCaseStudyBySlug(related.slug))
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
              className="text-sm text-stone-500 hover:text-stone-900 transition"
            >
              Work
            </Link>
            <Link
              href="/guides"
              className="text-sm text-stone-900"
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
            href="/guides"
            className="text-sm text-stone-400 hover:text-stone-900 transition mb-12 inline-block"
          >
            ← Guides
          </Link>

          {/* Header */}
          <header className="mb-16">
            <p className="text-sm text-stone-400 mb-4">
              {guide.readTime} · Updated {guide.lastUpdated}
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight text-stone-900">
              {guide.title}
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed">
              {guide.subtitle}
            </p>
          </header>

          {/* Table of Contents */}
          <nav className="mb-16 pb-8 border-b border-stone-200">
            <p className="text-sm text-stone-400 mb-4">Contents</p>
            <ul className="space-y-2">
              {guide.sections.map((section, index) => (
                <li key={index}>
                  <a
                    href={`#section-${index}`}
                    className="text-stone-600 hover:text-stone-900 transition"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Content Sections */}
          <div className="space-y-16">
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

          {/* Related Work */}
          {guide.relatedCaseStudies.length > 0 && (
            <section className="mt-24 pt-12 border-t border-stone-200">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-8 text-stone-900">
                Related Work
              </h2>
              <div className="space-y-6">
                {guide.relatedCaseStudies.map((related) => {
                  const study = relatedCaseStudies.find(s => s?.slug === related.slug);
                  if (!study) return null;
                  return (
                    <Link
                      key={related.slug}
                      href={`/work/${study.slug}`}
                      className="block group"
                    >
                      <p className="text-stone-900 group-hover:text-stone-600 transition">
                        {study.company}
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
              {guide.cta.title}
            </h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              {guide.cta.description}
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

      {/* More Guides */}
      {relatedGuides.length > 0 && (
        <section className="py-24 px-6 border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-8 text-stone-900">
              More Guides
            </h2>
            <div className="space-y-8">
              {relatedGuides.map((related) => (
                <Link
                  key={related.slug}
                  href={`/guides/${related.slug}`}
                  className="block group"
                >
                  <p className="text-stone-900 group-hover:text-stone-600 transition">
                    {related.title}
                  </p>
                  <p className="text-sm text-stone-500">
                    {related.readTime}
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
