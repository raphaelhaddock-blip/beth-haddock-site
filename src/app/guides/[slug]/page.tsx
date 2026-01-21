import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import { guides, getGuideBySlug, getAllGuideSlugs } from "@/data/guides";
import { getRelatedGuides } from "@/data/guideRelationships";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LeadCapture from "@/components/LeadCapture";

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
    keywords: guide.keywords,
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
    },
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

  // Get semantically related guides instead of random selection
  const relatedSlugs = getRelatedGuides(slug, 2);
  const relatedGuides = relatedSlugs
    .map((s) => guides.find((g) => g.slug === s))
    .filter((g): g is NonNullable<typeof g> => g !== undefined);

  return (
    <div className="bg-[#0A0A0A] text-[#FAFAFA] min-h-screen">
      <Nav active="guides" alwaysVisible />

      {/* Article */}
      <article className="pt-32 md:pt-48 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/guides"
            className="text-sm text-[#A1A1AA] hover:text-[#D4AF37] transition mb-12 inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Guides
          </Link>

          {/* Header */}
          <header className="mb-16">
            <p className="text-sm text-[#D4AF37] tracking-[0.2em] uppercase mb-4">
              {guide.readTime} · Updated {guide.lastUpdated}
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              {guide.title}
            </h1>
            <p className="text-xl text-[#A1A1AA] leading-relaxed">
              {guide.subtitle}
            </p>
          </header>

          {/* Table of Contents */}
          <nav className="mb-16 pb-8 border-b border-[#262626]">
            <p className="text-sm text-[#D4AF37] tracking-[0.2em] uppercase mb-4">Contents</p>
            <ul className="space-y-2">
              {guide.sections.map((section, index) => (
                <li key={index}>
                  <a
                    href={`#section-${index}`}
                    className="text-[#A1A1AA] hover:text-[#D4AF37] transition"
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
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl mb-6">
                  {section.title}
                </h2>
                <div className="prose prose-lg prose-invert max-w-none prose-headings:font-[family-name:var(--font-playfair)] prose-a:text-[#D4AF37] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#FAFAFA] prose-p:text-[#A1A1AA] prose-p:leading-relaxed prose-li:text-[#A1A1AA]">
                  <ReactMarkdown>{section.content}</ReactMarkdown>
                </div>
              </section>
            ))}
          </div>

          {/* Contact */}
          <section className="mt-24 pt-12 border-t border-[#262626]">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-4">
              {guide.cta.title}
            </h2>
            <p className="text-[#A1A1AA] leading-relaxed mb-6">
              {guide.cta.description}
            </p>
            <a
              href="https://calendly.com/beth-haddock"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-block"
            >
              Schedule a conversation
            </a>
          </section>

          {/* Lead Capture */}
          <section className="mt-16">
            <LeadCapture />
          </section>
        </div>
      </article>

      {/* More Guides */}
      {relatedGuides.length > 0 && (
        <section className="py-24 px-6 border-t border-[#262626]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-8">
              More Guides
            </h2>
            <div className="space-y-8">
              {relatedGuides.map((related) => (
                <Link
                  key={related.slug}
                  href={`/guides/${related.slug}`}
                  className="block group"
                >
                  <p className="text-[#FAFAFA] group-hover:text-[#D4AF37] transition">
                    {related.title}
                  </p>
                  <p className="text-sm text-[#A1A1AA]">
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
