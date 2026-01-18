import Link from "next/link";
import { caseStudies, getCaseStudiesByCategory } from "@/data/caseStudies";

export const metadata = {
  title: "Work | Beth Haddock",
  description:
    "Case studies from 25+ years advising crypto, fintech, and traditional finance companies.",
};

export default function WorkPage() {
  const primaryRoles = getCaseStudiesByCategory("Primary");
  const boardRoles = getCaseStudiesByCategory("Board");
  const advisoryRoles = getCaseStudiesByCategory("Advisory");

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

      {/* Header */}
      <section className="pt-48 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl mb-6 leading-tight text-[#1C1917]">
            Selected Work
          </h1>
          <p className="text-[#57534E] text-lg leading-relaxed">
            From leading legal at Franklin Templeton-backed fintech to advising
            protocols defining DeFi.
          </p>
        </div>
      </section>

      {/* Work by Category */}
      <section className="pb-32 px-6">
        <div className="max-w-3xl mx-auto space-y-24">
          {/* Primary Role */}
          {primaryRoles.length > 0 && (
            <div>
              <p className="text-sm text-[#57534E] mb-8">Primary Role</p>
              <div className="space-y-8">
                {primaryRoles.map((study) => (
                  <Link
                    key={study.slug}
                    href={`/work/${study.slug}`}
                    className="block group"
                  >
                    <p className="font-[family-name:var(--font-playfair)] text-xl text-[#1C1917] group-hover:text-[#57534E] transition">
                      {study.company}
                    </p>
                    <p className="text-[#57534E] mb-2">{study.role}</p>
                    <p className="text-[#57534E] leading-relaxed">
                      {study.headline}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Board */}
          {boardRoles.length > 0 && (
            <div>
              <p className="text-sm text-[#57534E] mb-8">Board</p>
              <div className="space-y-8">
                {boardRoles.map((study) => (
                  <Link
                    key={study.slug}
                    href={`/work/${study.slug}`}
                    className="block group"
                  >
                    <p className="font-[family-name:var(--font-playfair)] text-xl text-[#1C1917] group-hover:text-[#57534E] transition">
                      {study.company}
                    </p>
                    <p className="text-[#57534E] mb-2">{study.role}</p>
                    <p className="text-[#57534E] leading-relaxed">
                      {study.headline}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Advisory */}
          {advisoryRoles.length > 0 && (
            <div>
              <p className="text-sm text-[#57534E] mb-8">Advisory</p>
              <div className="space-y-8">
                {advisoryRoles.map((study) => (
                  <Link
                    key={study.slug}
                    href={`/work/${study.slug}`}
                    className="block group"
                  >
                    <p className="font-[family-name:var(--font-playfair)] text-xl text-[#1C1917] group-hover:text-[#57534E] transition">
                      {study.company}
                    </p>
                    <p className="text-[#57534E] mb-2">{study.role}</p>
                    <p className="text-[#57534E] leading-relaxed">
                      {study.headline}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

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
