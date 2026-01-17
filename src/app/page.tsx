import Link from "next/link";

// Subtle logo bar - just names, no images needed for true minimalism
const credentials = [
  "Franklin Templeton",
  "Grayscale",
  "Guggenheim Partners",
  "T. Rowe Price",
  "Brown Brothers Harriman",
];

export default function Home() {
  return (
    <div className="bg-[#FDFCF8] text-stone-900 min-h-screen">
      {/* Nav - Minimal */}
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
              className="text-sm text-stone-500 hover:text-stone-900 transition"
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

      {/* Hero - Left Aligned, Maximum Restraint */}
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-[3.25rem] mb-8 leading-[1.2] text-stone-900">
            Bridging the divide between Institutional Finance and the Digital Frontier.
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed max-w-2xl">
            Strategic counsel for boards and founders navigating the future of regulated markets.
          </p>
        </div>
      </section>

      {/* Credentials - Text Only, Subtle */}
      <section className="py-12 px-6 border-t border-stone-200">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-stone-400 leading-relaxed">
            Experience includes {credentials.join(" · ")}
          </p>
        </div>
      </section>

      {/* Bio - Single Paragraph, Editorial */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-stone-600 text-lg leading-relaxed mb-8">
            General Counsel at AdvisorEngine, a Franklin Templeton company. Board Director
            at GMO-Z Trust, a NYDFS-regulated stablecoin issuer. Advisor to Grayscale,
            Balancer, Orca, and emerging protocols building the next generation of
            financial infrastructure.
          </p>
          <p className="text-stone-600 text-lg leading-relaxed">
            Twenty-five years navigating the space between what regulators require and
            what innovation demands. Former counsel at Guggenheim Partners, T. Rowe Price,
            and Brown Brothers Harriman.
          </p>
        </div>
      </section>

      {/* Focus Areas - Minimal List */}
      <section className="py-24 px-6 border-t border-stone-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-12 text-stone-900">
            Areas of Focus
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-2 text-stone-900">
                Institutional Readiness
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Preparing digital asset companies for the scrutiny of pension funds,
                endowments, and asset managers.
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-2 text-stone-900">
                Regulatory Strategy
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Navigating SEC, NYDFS, and emerging global frameworks. Building compliance
                that anticipates rather than reacts.
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-2 text-stone-900">
                Board Governance
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Structuring governance for companies at the intersection of traditional
                finance and decentralized systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work - Simple Links */}
      <section className="py-24 px-6 border-t border-stone-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-12 text-stone-900">
            Selected Work
          </h2>
          <div className="space-y-6">
            <Link href="/work/advisorengine" className="block group">
              <p className="text-stone-900 group-hover:text-stone-600 transition">
                AdvisorEngine
              </p>
              <p className="text-sm text-stone-500">
                General Counsel & Head of Compliance
              </p>
            </Link>
            <Link href="/work/gmo-z-trust" className="block group">
              <p className="text-stone-900 group-hover:text-stone-600 transition">
                GMO-Z Trust Company
              </p>
              <p className="text-sm text-stone-500">
                Board of Directors
              </p>
            </Link>
            <Link href="/work/grayscale" className="block group">
              <p className="text-stone-900 group-hover:text-stone-600 transition">
                Grayscale Investments
              </p>
              <p className="text-sm text-stone-500">
                Strategic Advisor
              </p>
            </Link>
          </div>
          <div className="mt-12">
            <Link
              href="/work"
              className="text-sm text-stone-500 hover:text-stone-900 transition"
            >
              View all work →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact - Understated */}
      <section className="py-24 px-6 border-t border-stone-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-6 text-stone-900">
            Get in touch
          </h2>
          <p className="text-stone-600 leading-relaxed mb-8">
            Available for board positions, strategic advisory, and select consulting engagements.
          </p>
          <a
            href="https://calendly.com/beth-haddock"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-900 hover:text-stone-600 transition border-b border-stone-900 hover:border-stone-600 pb-1"
          >
            Schedule a conversation
          </a>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="py-16 px-6 border-t border-stone-200">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="text-sm text-stone-400">
              © 2026 Beth Haddock
            </p>
          </div>
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
