import Link from "next/link";

// Media logos Beth has been featured in
const mediaLogos = [
  { name: "CoinDesk", url: "#" },
  { name: "Nasdaq", url: "#" },
  { name: "Forbes", url: "#" },
  { name: "Financial Planning", url: "#" },
];

// Service offerings
const services = [
  {
    title: "Board & Advisory",
    description:
      "Independent director and advisory board positions for companies navigating digital transformation, crypto compliance, and AI governance.",
    href: "/services/board-advisory",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
  },
  {
    title: "Strategic Advisory",
    description:
      "Compliance and governance consulting for fintech, crypto, and traditional finance organizations seeking regulatory readiness.",
    href: "/services/strategic-advisory",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
        />
      </svg>
    ),
  },
  {
    title: "Speaking & Training",
    description:
      "Keynotes, workshops, and executive education on digital assets, AI governance, and building compliance programs that drive value.",
    href: "/services/speaking",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
        />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation placeholder - will be component in F002 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-slate-900">
            Beth Haddock
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/about"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/insights"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Insights
            </Link>
            <Link
              href="/book"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Book
            </Link>
            <Link
              href="/contact"
              className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
          {/* Mobile menu button - functionality in F002 */}
          <button className="md:hidden p-2" aria-label="Menu">
            <svg
              className="h-6 w-6 text-slate-900"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <p className="text-amber-700 font-medium mb-4 tracking-wide uppercase text-sm">
              Board Advisor & Governance Expert
            </p>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-slate-900 leading-tight mb-6">
              Translating Complex Regulation Into{" "}
              <span className="text-amber-700">Practical Strategy</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
              25+ years of executive leadership helping organizations scale
              responsibly at the intersection of finance, regulation, and
              innovation. Specializing in digital assets, AI governance, and
              fintech compliance.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-slate-800 transition-colors"
              >
                Discuss Your Needs
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full text-base font-medium hover:border-slate-400 hover:bg-slate-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Bar */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-sm text-slate-500 uppercase tracking-wide mb-8">
            Featured In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {mediaLogos.map((logo) => (
              <span
                key={logo.name}
                className="text-slate-400 font-semibold text-lg tracking-wide"
              >
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-slate-900 mb-4">
              How I Can Help
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Whether you&apos;re building a board, navigating regulatory
              complexity, or developing your leadership team, I bring deep
              expertise and practical insight.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-8 bg-white border border-slate-200 rounded-2xl hover:border-slate-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-amber-700 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 text-amber-700 font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                Governance That Drives Growth
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Great compliance isn&apos;t about checking boxes—it&apos;s
                about building trust, enabling innovation, and creating
                sustainable value. I help organizations see governance as a
                competitive advantage, not a cost center.
              </p>
              <ul className="space-y-4">
                {[
                  "Digital Assets & Stablecoin Governance",
                  "AI & Emerging Technology Risk",
                  "Cross-Border Regulatory Strategy",
                  "Board & Audit Committee Leadership",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="h-6 w-6 text-amber-500 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800 rounded-2xl p-8">
              <blockquote className="text-xl text-slate-200 italic leading-relaxed mb-6">
                &ldquo;Beth brings a rare combination of deep regulatory
                knowledge and practical business sense. She doesn&apos;t just
                identify risks—she helps you turn compliance into a strategic
                asset.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-slate-700 rounded-full flex items-center justify-center text-slate-400 text-lg font-semibold">
                  JD
                </div>
                <div>
                  <p className="font-medium text-white">Board Member</p>
                  <p className="text-slate-400 text-sm">
                    Fintech Company
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-slate-900 mb-4">
            Ready to Strengthen Your Governance?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re seeking a board member, strategic advisor, or
            expert speaker, let&apos;s discuss how I can help your organization
            navigate what&apos;s next.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-slate-800 transition-colors"
          >
            Start a Conversation
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer placeholder - will be component later */}
      <footer className="py-12 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-600">
              <p className="font-semibold text-slate-900">Beth Haddock</p>
              <p className="text-sm">Board Advisor & Governance Expert</p>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://linkedin.com/in/bethhaddock"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/bethhaddock"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-700 transition-colors"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Beth Haddock. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
