import Link from "next/link";
import { caseStudies, getCaseStudiesByCategory } from "@/data/caseStudies";

export const metadata = {
  title: "Work | Beth Haddock",
  description:
    "Case studies from 25+ years advising crypto, fintech, and traditional finance companies. See how I've helped companies navigate regulatory complexity and institutional growth.",
};

export default function WorkPage() {
  const primaryRoles = getCaseStudiesByCategory("Primary");
  const boardRoles = getCaseStudiesByCategory("Board");
  const advisoryRoles = getCaseStudiesByCategory("Advisory");
  const projectRoles = getCaseStudiesByCategory("Project");

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
              className="text-sm text-[#1a1a1a] font-medium"
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

      {/* Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#a88b63] font-medium text-sm mb-4 tracking-wide">
            SELECTED WORK
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl mb-6 leading-tight">
            Companies I've Helped Build
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
            From leading legal at Franklin Templeton-backed fintech to advising
            the protocols defining DeFi—here's how I've helped companies navigate
            the intersection of traditional finance and crypto.
          </p>
        </div>
      </section>

      {/* Case Studies by Category */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Primary Role */}
          {primaryRoles.length > 0 && (
            <div>
              <p className="text-xs text-[#a88b63] uppercase tracking-widest mb-6">
                Primary Role
              </p>
              <div className="space-y-6">
                {primaryRoles.map((study) => (
                  <Link
                    key={study.slug}
                    href={`/work/${study.slug}`}
                    className="block p-8 border-l-4 border-[#a88b63] bg-gray-50 hover:bg-gray-100 transition group"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 mb-1">{study.role}</p>
                        <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-2 group-hover:text-[#a88b63] transition">
                          {study.company}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                          {study.headline}
                        </p>
                      </div>
                      <div className="md:ml-8 flex-shrink-0">
                        <span className="text-[#a88b63] text-sm font-medium group-hover:translate-x-1 inline-block transition-transform">
                          Read case study →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Board */}
          {boardRoles.length > 0 && (
            <div>
              <p className="text-xs text-[#a88b63] uppercase tracking-widest mb-6">
                Board
              </p>
              <div className="space-y-6">
                {boardRoles.map((study) => (
                  <Link
                    key={study.slug}
                    href={`/work/${study.slug}`}
                    className="block p-8 border border-gray-200 hover:border-[#a88b63] transition group"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 mb-1">{study.role}</p>
                        <h2 className="font-[family-name:var(--font-playfair)] text-xl mb-2 group-hover:text-[#a88b63] transition">
                          {study.company}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                          {study.headline}
                        </p>
                      </div>
                      <div className="md:ml-8 flex-shrink-0">
                        <span className="text-[#a88b63] text-sm font-medium group-hover:translate-x-1 inline-block transition-transform">
                          Read case study →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Advisory */}
          {advisoryRoles.length > 0 && (
            <div>
              <p className="text-xs text-[#a88b63] uppercase tracking-widest mb-6">
                Advisory
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {advisoryRoles.map((study) => (
                  <Link
                    key={study.slug}
                    href={`/work/${study.slug}`}
                    className="block p-6 border border-gray-200 hover:border-[#a88b63] transition group"
                  >
                    <p className="text-sm text-gray-500 mb-1">{study.role}</p>
                    <h2 className="font-[family-name:var(--font-playfair)] text-lg mb-2 group-hover:text-[#a88b63] transition">
                      {study.company}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {study.headline}
                    </p>
                    <span className="text-[#a88b63] text-sm font-medium group-hover:translate-x-1 inline-block transition-transform">
                      Read more →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Project */}
          {projectRoles.length > 0 && (
            <div>
              <p className="text-xs text-[#a88b63] uppercase tracking-widest mb-6">
                Select Projects
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {projectRoles.map((study) => (
                  <Link
                    key={study.slug}
                    href={`/work/${study.slug}`}
                    className="block p-6 border border-gray-200 hover:border-[#a88b63] transition group"
                  >
                    <p className="text-sm text-gray-500 mb-1">{study.role}</p>
                    <h2 className="font-[family-name:var(--font-playfair)] text-lg mb-2 group-hover:text-[#a88b63] transition">
                      {study.company}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {study.headline}
                    </p>
                    <span className="text-[#a88b63] text-sm font-medium group-hover:translate-x-1 inline-block transition-transform">
                      Read more →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-4">
            Building something similar?
          </h2>
          <p className="text-gray-600 mb-8">
            Whether you need strategic counsel, board expertise, or regulatory
            guidance—I'd like to hear what you're working on.
          </p>
          <a
            href="https://calendly.com/beth-haddock"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#1a1a1a] text-white font-medium hover:bg-[#a88b63] transition"
          >
            Book a Conversation
          </a>
        </div>
      </section>

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
