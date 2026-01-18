import Link from "next/link";

// Exact logo array from user specifications
const logos = [
  { name: "Franklin Templeton", url: "https://logo.clearbit.com/franklintempleton.com" },
  { name: "Guggenheim", url: "https://logo.clearbit.com/guggenheimpartners.com" },
  { name: "T. Rowe Price", url: "https://logo.clearbit.com/troweprice.com" },
  { name: "Brown Brothers Harriman", url: "https://logo.clearbit.com/bbh.com" },
  { name: "AXA", url: "https://logo.clearbit.com/axa.com" },
  { name: "Grayscale", url: "https://logo.clearbit.com/grayscale.com" },
  { name: "Robinhood", url: "https://logo.clearbit.com/robinhood.com" },
  { name: "Ondo", url: "https://logo.clearbit.com/ondo.finance" },
  { name: "Balancer", url: "https://logo.clearbit.com/balancer.fi" },
  { name: "Orca", url: "https://logo.clearbit.com/orca.so" }
];

export default function Home() {
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

      {/* Hero - Left Aligned, Serif H1 */}
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-[3.25rem] mb-8 leading-[1.2] text-[#1C1917]">
            Bridging the divide between Institutional Finance and the Digital Frontier.
          </h1>
          <p className="text-[#57534E] text-lg leading-relaxed max-w-2xl">
            Strategic counsel for boards and founders navigating the future of regulated markets.
          </p>
        </div>
      </section>

      {/* Logo Section - Grayscale, Opacity 50, Hover Effect */}
      <section className="py-16 px-6 border-t border-[#E7E5E4]">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {logos.map((logo) => (
              <img
                key={logo.name}
                src={logo.url}
                alt={logo.name}
                className="h-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#57534E] text-lg leading-relaxed mb-8">
            General Counsel at AdvisorEngine, a Franklin Templeton company. Board Director
            at GMO-Z Trust, a NYDFS-regulated stablecoin issuer. Advisor to Grayscale,
            Balancer, Orca, and emerging protocols building the next generation of
            financial infrastructure.
          </p>
          <p className="text-[#57534E] text-lg leading-relaxed">
            Twenty-five years navigating the space between what regulators require and
            what innovation demands. Former counsel at Guggenheim Partners, T. Rowe Price,
            and Brown Brothers Harriman.
          </p>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 px-6 border-t border-[#E7E5E4]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-12 text-[#1C1917]">
            Areas of Focus
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-2 text-[#1C1917]">
                Institutional Readiness
              </h3>
              <p className="text-[#57534E] leading-relaxed">
                Preparing digital asset companies for the scrutiny of pension funds,
                endowments, and asset managers.
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-2 text-[#1C1917]">
                Regulatory Strategy
              </h3>
              <p className="text-[#57534E] leading-relaxed">
                Navigating SEC, NYDFS, and emerging global frameworks. Building compliance
                that anticipates rather than reacts.
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-2 text-[#1C1917]">
                Board Governance
              </h3>
              <p className="text-[#57534E] leading-relaxed">
                Structuring governance for companies at the intersection of traditional
                finance and decentralized systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-24 px-6 border-t border-[#E7E5E4]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-12 text-[#1C1917]">
            Selected Work
          </h2>
          <div className="space-y-6">
            <Link href="/work/advisorengine" className="block group">
              <p className="text-[#1C1917] group-hover:text-[#57534E] transition">
                AdvisorEngine
              </p>
              <p className="text-sm text-[#57534E]">
                General Counsel & Head of Compliance
              </p>
            </Link>
            <Link href="/work/gmo-z-trust" className="block group">
              <p className="text-[#1C1917] group-hover:text-[#57534E] transition">
                GMO-Z Trust Company
              </p>
              <p className="text-sm text-[#57534E]">
                Board of Directors
              </p>
            </Link>
            <Link href="/work/grayscale" className="block group">
              <p className="text-[#1C1917] group-hover:text-[#57534E] transition">
                Grayscale Investments
              </p>
              <p className="text-sm text-[#57534E]">
                Strategic Advisor
              </p>
            </Link>
          </div>
          <div className="mt-12">
            <Link
              href="/work"
              className="text-sm text-[#57534E] hover:text-[#1C1917] transition"
            >
              View all work →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6 border-t border-[#E7E5E4]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-6 text-[#1C1917]">
            Get in touch
          </h2>
          <p className="text-[#57534E] leading-relaxed mb-8">
            Available for board positions, strategic advisory, and select consulting engagements.
          </p>
          <a
            href="https://calendly.com/beth-haddock"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1C1917] hover:text-[#57534E] transition border-b border-[#1C1917] hover:border-[#57534E] pb-1"
          >
            Schedule a conversation
          </a>
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
