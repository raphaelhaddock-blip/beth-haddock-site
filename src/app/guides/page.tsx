import Link from "next/link";
import { guides } from "@/data/guides";

export const metadata = {
  title: "Industry Guides | Beth Haddock",
  description:
    "Expert guides on stablecoins, DeFi, crypto compliance, institutional crypto, and tokenization—from a strategic advisor with 25+ years in finance.",
};

export default function GuidesPage() {
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
              className="text-sm text-[#57534E] hover:text-[#1C1917] transition"
            >
              Work
            </Link>
            <Link
              href="/guides"
              className="text-sm text-[#1C1917]"
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
            Industry Guides
          </h1>
          <p className="text-[#57534E] text-lg leading-relaxed">
            In-depth guides on the topics that matter for institutional investors
            and traditional finance professionals entering the digital asset space.
          </p>
        </div>
      </section>

      {/* Guide List */}
      <section className="pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="block group"
              >
                <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl mb-2 group-hover:text-[#57534E] transition text-[#1C1917]">
                  {guide.title}
                </h2>
                <p className="text-[#57534E] mb-3 leading-relaxed">
                  {guide.subtitle}
                </p>
                <p className="text-sm text-[#57534E]">
                  {guide.readTime} · Updated {guide.lastUpdated}
                </p>
              </Link>
            ))}
          </div>
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
