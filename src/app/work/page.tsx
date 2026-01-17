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
    <div className="bg-[#faf9f7] text-slate-900 min-h-screen">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-[#faf9f7]/95 backdrop-blur border-b border-slate-200 px-6 py-4">
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
              className="text-sm text-slate-900 font-medium"
            >
              Work
            </Link>
            <Link
              href="/guides"
              className="text-sm text-slate-500 hover:text-slate-900 transition"
            >
              Guides
            </Link>
            <Link
              href="/insights"
              className="text-sm text-slate-500 hover:text-slate-900 transition"
            >
              Insights
            </Link>
            <a
              href="https://calendly.com/beth-haddock"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-900 text-white text-sm font-medium hover:bg-[#9a7b4f] transition"
            >
              Book a Conversation
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-40 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#9a7b4f] font-medium text-sm mb-6 tracking-wide">
            SELECTED WORK
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl mb-8 leading-tight text-slate-900">
            Companies I've Helped Build
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            From leading legal at Franklin Templeton-backed fintech to advising
            the protocols defining DeFi—here's how I've helped companies navigate
            the intersection of traditional finance and crypto.
          </p>
        </div>
      </section>

      {/* Case Studies by Category */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto space-y-20">
          {/* Primary Role */}
          {primaryRoles.length > 0 && (
            <div>
              <p className="text-xs text-[#9a7b4f] uppercase tracking-widest mb-8">
                Primary Role
              </p>
              <div className="space-y-8">
                {primaryRoles.map((study) => (
                  <Link
                    key={study.slug}
                    href={`/work/${study.slug}`}
                    className="block p-8 border-l-4 border-[#9a7b4f] bg-slate-50 hover:bg-slate-100 transition group"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-sm text-slate-500 mb-1">{study.role}</p>
                        <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-3 group-hover:text-[#9a7b4f] transition text-slate-900">
                          {study.company}
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                          {study.headline}
                        </p>
                      </div>
                      <div className="md:ml-8 flex-shrink-0">
                        <span className="text-[#9a7b4f] text-sm font-medium group-hover:translate-x-1 inline-block transition-transform">
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
              <p className="text-xs text-[#9a7b4f] uppercase tracking-widest mb-8">
                Board
              </p>
              <div className="space-y-8">
                {boardRoles.map((study) => (
                  <Link
                    key={study.slug}
                    href={`/work/${study.slug}`}
                    className="block p-8 border border-slate-200 hover:border-[#9a7b4f] transition group"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-sm text-slate-500 mb-1">{study.role}</p>
                        <h2 className="font-[family-name:var(--font-playfair)] text-xl mb-3 group-hover:text-[#9a7b4f] transition text-slate-900">
                          {study.company}
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                          {study.headline}
                        </p>
                      </div>
                      <div className="md:ml-8 flex-shrink-0">
                        <span className="text-[#9a7b4f] text-sm font-medium group-hover:translate-x-1 inline-block transition-transform">
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
              <p className="text-xs text-[#9a7b4f] uppercase tracking-widest mb-8">
                Advisory
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {advisoryRoles.map((study) => (
                  <Link
                    key={study.slug}
                    href={`/work/${study.slug}`}
                    className="block p-6 border border-slate-200 hover:border-[#9a7b4f] transition group"
                  >
                    <p className="text-sm text-slate-500 mb-1">{study.role}</p>
                    <h2 className="font-[family-name:var(--font-playfair)] text-lg mb-3 group-hover:text-[#9a7b4f] transition text-slate-900">
                      {study.company}
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {study.headline}
                    </p>
                    <span className="text-[#9a7b4f] text-sm font-medium group-hover:translate-x-1 inline-block transition-transform">
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
              <p className="text-xs text-[#9a7b4f] uppercase tracking-widest mb-8">
                Select Projects
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {projectRoles.map((study) => (
                  <Link
                    key={study.slug}
                    href={`/work/${study.slug}`}
                    className="block p-6 border border-slate-200 hover:border-[#9a7b4f] transition group"
                  >
                    <p className="text-sm text-slate-500 mb-1">{study.role}</p>
                    <h2 className="font-[family-name:var(--font-playfair)] text-lg mb-3 group-hover:text-[#9a7b4f] transition text-slate-900">
                      {study.company}
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {study.headline}
                    </p>
                    <span className="text-[#9a7b4f] text-sm font-medium group-hover:translate-x-1 inline-block transition-transform">
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
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-6 text-slate-900">
            Building something similar?
          </h2>
          <p className="text-slate-600 mb-10 leading-relaxed">
            Whether you need strategic counsel, board expertise, or regulatory
            guidance—I'd like to hear what you're working on.
          </p>
          <a
            href="https://calendly.com/beth-haddock"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-slate-900 text-white font-medium hover:bg-[#9a7b4f] transition"
          >
            Book a Conversation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">© 2026 Beth Haddock</p>
          <div className="flex gap-6 text-sm">
            <a
              href="https://linkedin.com/in/bethhaddock"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:beth@warburtonadvisers.com"
              className="text-slate-500 hover:text-slate-900 transition"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
