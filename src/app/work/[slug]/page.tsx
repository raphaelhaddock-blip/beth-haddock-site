import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  caseStudies,
  getCaseStudyBySlug,
  getAllCaseStudySlugs,
} from "@/data/caseStudies";
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
    return { title: "Work | Beth Haddock" };
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
    .slice(0, 3);

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
            <p className="text-[#A1A1AA] mb-8">{study.role}</p>
            <p className="text-xl text-[#A1A1AA] leading-relaxed">
              {study.headline}
            </p>
          </header>

          {/* Contact CTA */}
          <section className="mt-16 pt-12 border-t border-[#262626]">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-4">
              {study.roleType === "fractional-gc" && "Need institutional-grade legal leadership?"}
              {study.roleType === "board" && "Looking for board expertise?"}
              {study.roleType === "advisor" && "Need strategic advisory?"}
            </h2>
            <p className="text-[#A1A1AA] leading-relaxed mb-6">
              {study.roleType === "fractional-gc" &&
                "I work with teams to build compliance infrastructure that satisfies institutional scrutiny."}
              {study.roleType === "board" &&
                "I bring regulatory foresight and institutional credibility to board governance."}
              {study.roleType === "advisor" &&
                "Whether you're navigating regulatory complexity or preparing for institutional growth."}
            </p>
            <a
              href="https://calendly.com/beth-haddock"
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
