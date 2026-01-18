import Link from "next/link";
import { caseStudies, getCaseStudiesByCategory } from "@/data/caseStudies";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
      <Nav active="work" />

      {/* Header */}
      <section className="pt-32 md:pt-48 pb-16 px-6">
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

      <Footer />
    </div>
  );
}
