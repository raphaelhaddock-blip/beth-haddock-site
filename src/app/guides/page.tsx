import Link from "next/link";
import { guides } from "@/data/guides";

export const metadata = {
  title: "Industry Guides | Beth Haddock",
  description:
    "Expert guides on stablecoins, DeFi, crypto compliance, institutional crypto, and tokenization—from a strategic advisor with 25+ years in finance.",
};

export default function GuidesPage() {
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
              className="text-sm text-slate-500 hover:text-slate-900 transition"
            >
              Work
            </Link>
            <Link
              href="/guides"
              className="text-sm text-slate-900 font-medium"
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
            INDUSTRY GUIDES
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl mb-8 leading-tight text-slate-900">
            Crypto & Fintech—Explained
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            In-depth guides on the topics that matter for institutional investors
            and traditional finance professionals entering the digital asset space.
            Written from 25 years of experience on both sides of the table.
          </p>
        </div>
      </section>

      {/* Guide Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="block p-8 border border-slate-200 hover:border-[#9a7b4f] transition group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl mb-3 group-hover:text-[#9a7b4f] transition text-slate-900">
                      {guide.title}
                    </h2>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {guide.subtitle}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <span>{guide.readTime}</span>
                      <span>·</span>
                      <span>Updated {guide.lastUpdated}</span>
                    </div>
                  </div>
                  <div className="md:ml-8 flex-shrink-0">
                    <span className="text-[#9a7b4f] text-sm font-medium group-hover:translate-x-1 inline-block transition-transform">
                      Read guide →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-6 text-slate-900">
            Need specific guidance?
          </h2>
          <p className="text-slate-600 mb-10 leading-relaxed">
            These guides cover the fundamentals. For strategic advice tailored to
            your situation—regulatory navigation, institutional readiness, or
            market entry—let's talk.
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
