import Link from "next/link";
import { guides } from "@/data/guides";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Industry Guides | Beth Haddock",
  description:
    "Expert guides on stablecoins, DeFi, crypto compliance, institutional crypto, and tokenization—from a strategic advisor with 25+ years in finance.",
};

export default function GuidesPage() {
  return (
    <div className="bg-[#FAFAF9] text-[#1C1917] min-h-screen">
      <Nav active="guides" />

      {/* Header */}
      <section className="pt-32 md:pt-48 pb-16 px-6">
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

      <Footer />
    </div>
  );
}
