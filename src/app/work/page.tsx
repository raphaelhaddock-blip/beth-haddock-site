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

      {/* Header */}
      <section className="pt-48 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl mb-6 leading-tight text-stone-900">
            Selected Work
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed">
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
              <p className="text-sm text-stone-400 mb-8">Primary Role</p>
              <div className="space-y-8">
                {primaryRoles.map((study) => (
                  <Link
                    key={study.slug}
                    href={`/work/${study.slug}`}
                    className="block group"
                  >
                    <p className="font-[family-name:var(--font-playfair)] text-xl text-stone-900 group-hover:text-stone-600 transition">
                      {study.company}
                    </p>
                    <p className="text-stone-500 mb-2">{study.role}</p>
                    <p className="text-stone-600 leading-relaxed">
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
              <p className="text-sm text-stone-400 mb-8">Board</p>
              <div className="space-y-8">
                {boardRoles.map((study) => (
                  <Link
                    key={study.slug}
                    href={`/work/${study.slug}`}
                    className="block group"
                  >
                    <p className="font-[family-name:var(--font-playfair)] text-xl text-stone-900 group-hover:text-stone-600 transition">
                      {study.company}
                    </p>
                    <p className="text-stone-500 mb-2">{study.role}</p>
                    <p className="text-stone-600 leading-relaxed">
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
              <p className="text-sm text-stone-400 mb-8">Advisory</p>
              <div className="space-y-8">
                {advisoryRoles.map((study) => (
                  <Link
                    key={study.slug}
                    href={`/work/${study.slug}`}
                    className="block group"
                  >
                    <p className="font-[family-name:var(--font-playfair)] text-xl text-stone-900 group-hover:text-stone-600 transition">
                      {study.company}
                    </p>
                    <p className="text-stone-500 mb-2">{study.role}</p>
                    <p className="text-stone-600 leading-relaxed">
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
