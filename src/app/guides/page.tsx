import Link from "next/link";
import { guides } from "@/data/guides";

export const metadata = {
  title: "Industry Guides | Beth Haddock",
  description:
    "Expert guides on stablecoins, DeFi, crypto compliance, institutional crypto, and tokenization—from a strategic advisor with 25+ years in finance.",
};

export default function GuidesPage() {
  return (
    <div className="bg-[#FDFCF8] text-stone-900 min-h-screen">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-[#FDFCF8]/95 backdrop-blur border-b border-stone-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="font-[family-name:var(--font-playfair)] text-lg font-semibold"
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
              className="text-sm text-stone-900 font-medium"
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
              className="px-4 py-2 border border-stone-900 text-stone-900 text-sm font-medium hover:bg-stone-900 hover:text-white transition"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-40 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-stone-400 text-sm mb-6 tracking-wide uppercase">
            Industry Guides
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl mb-8 leading-tight text-stone-900">
            Crypto & Fintech—Explained
          </h1>
          <p className="text-stone-600 text-lg max-w-2xl leading-relaxed">
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
                className="block p-8 border border-stone-200 hover:border-stone-400 transition group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl mb-3 group-hover:text-stone-600 transition text-stone-900">
                      {guide.title}
                    </h2>
                    <p className="text-stone-600 mb-4 leading-relaxed">
                      {guide.subtitle}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-stone-400">
                      <span>{guide.readTime}</span>
                      <span>·</span>
                      <span>Updated {guide.lastUpdated}</span>
                    </div>
                  </div>
                  <div className="md:ml-8 flex-shrink-0">
                    <span className="text-stone-500 text-sm font-medium group-hover:text-stone-900 transition">
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
      <section className="py-24 px-6 bg-stone-50 border-t border-stone-200">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-6 text-stone-900">
            Need specific guidance?
          </h2>
          <p className="text-stone-600 mb-10 leading-relaxed">
            These guides cover the fundamentals. For strategic advice tailored to
            your situation—regulatory navigation, institutional readiness, or
            market entry—let's talk.
          </p>
          <a
            href="https://calendly.com/beth-haddock"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border-2 border-stone-900 text-stone-900 font-medium hover:bg-stone-900 hover:text-white transition"
          >
            Schedule a Conversation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-stone-200">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-lg text-stone-900 mb-2">
              Beth Haddock
            </p>
            <p className="text-sm text-stone-400">© 2026. All rights reserved.</p>
          </div>
          <div className="flex gap-8 text-sm">
            <a
              href="https://linkedin.com/in/bethhaddock"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-stone-900 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:beth@warburtonadvisers.com"
              className="text-stone-500 hover:text-stone-900 transition"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
