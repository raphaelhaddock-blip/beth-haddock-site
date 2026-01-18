import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import { guides, getGuideBySlug, getAllGuideSlugs } from "@/data/guides";
import { getCaseStudyBySlug } from "@/data/caseStudies";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
    <div className="bg-[#FAFAF9] text-[#1C1917] min-h-screen">
      <Nav active="guides" />

      {/* Article */}
      <article className="pt-32 md:pt-48 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/guides"
            className="text-sm text-[#57534E] hover:text-[#1C1917] transition mb-12 inline-block"
          >
            ← Guides
          </Link>

          {/* Header */}
          <header className="mb-16">
            <p className="text-sm text-[#57534E] mb-4">
              {guide.readTime} · Updated {guide.lastUpdated}
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight text-[#1C1917]">
              {guide.title}
            </h1>
            <p className="text-xl text-[#57534E] leading-relaxed">
              {guide.subtitle}
            </p>
          </header>

          {/* Table of Contents */}
          <nav className="mb-16 pb-8 border-b border-[#E7E5E4]">
            <p className="text-sm text-[#57534E] mb-4">Contents</p>
            <ul className="space-y-2">
              {guide.sections.map((section, index) => (
                <li key={index}>
                  <a
                    href={`#section-${index}`}
                    className="text-[#57534E] hover:text-[#1C1917] transition"
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
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl mb-6 text-[#1C1917]">
                  {section.title}
                </h2>
                <div className="prose prose-lg max-w-none prose-headings:font-[family-name:var(--font-playfair)] prose-a:text-[#57534E] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#1C1917] prose-p:text-[#57534E] prose-p:leading-relaxed prose-li:text-[#57534E]">
                  <ReactMarkdown>{section.content}</ReactMarkdown>
                </div>
              </section>
            ))}
          </div>

          {/* Related Work */}
          {guide.relatedCaseStudies.length > 0 && (
            <section className="mt-24 pt-12 border-t border-[#E7E5E4]">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-8 text-[#1C1917]">
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
                      <p className="text-[#1C1917] group-hover:text-[#57534E] transition">
                        {study.company}
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
              {guide.cta.title}
            </h2>
            <p className="text-[#57534E] leading-relaxed mb-6">
              {guide.cta.description}
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

      {/* More Guides */}
      {relatedGuides.length > 0 && (
        <section className="py-24 px-6 border-t border-[#E7E5E4]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-8 text-[#1C1917]">
              More Guides
            </h2>
            <div className="space-y-8">
              {relatedGuides.map((related) => (
                <Link
                  key={related.slug}
                  href={`/guides/${related.slug}`}
                  className="block group"
                >
                  <p className="text-[#1C1917] group-hover:text-[#57534E] transition">
                    {related.title}
                  </p>
                  <p className="text-sm text-[#57534E]">
                    {related.readTime}
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
