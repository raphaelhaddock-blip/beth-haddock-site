import Link from "next/link";
import { guides } from "@/data/guides";

export const metadata = {
  title: "Industry Guides | Beth Haddock",
  description:
    "Expert guides on stablecoins, DeFi, crypto compliance, institutional crypto, and tokenization—from a strategic advisor with 25+ years in finance.",
};

export default function GuidesPage() {
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
              className="text-sm text-gray-600 hover:text-[#1a1a1a] transition"
            >
              Work
            </Link>
            <Link
              href="/guides"
              className="text-sm text-[#1a1a1a] font-medium"
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
            INDUSTRY GUIDES
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl mb-6 leading-tight">
            Crypto & Fintech—Explained
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
            In-depth guides on the topics that matter for institutional investors
            and traditional finance professionals entering the digital asset space.
            Written from 25 years of experience on both sides of the table.
          </p>
        </div>
      </section>

      {/* Guide Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="block p-8 border border-gray-200 hover:border-[#a88b63] transition group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl mb-2 group-hover:text-[#a88b63] transition">
                      {guide.title}
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {guide.subtitle}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>{guide.readTime}</span>
                      <span>·</span>
                      <span>Updated {guide.lastUpdated}</span>
                    </div>
                  </div>
                  <div className="md:ml-8 flex-shrink-0">
                    <span className="text-[#a88b63] text-sm font-medium group-hover:translate-x-1 inline-block transition-transform">
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
      <section className="py-16 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-4">
            Need specific guidance?
          </h2>
          <p className="text-gray-600 mb-8">
            These guides cover the fundamentals. For strategic advice tailored to
            your situation—regulatory navigation, institutional readiness, or
            market entry—let's talk.
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
