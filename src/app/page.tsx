"use client";

import { useState } from "react";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="bg-white text-[#1a1a1a]">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur border-b border-gray-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <span className="font-[family-name:var(--font-playfair)] text-lg font-bold">
            Beth Haddock
          </span>
          <button
            onClick={() => setContactOpen(true)}
            className="px-5 py-2 bg-[#1a1a1a] text-white text-sm font-medium hover:bg-[#a88b63] transition"
          >
            Let's Talk
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#a88b63] font-medium text-sm mb-4">
                Fractional General Counsel
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                Legal leadership for growth-stage tech.
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                I've been CLO at Franklin Templeton subsidiary, CCO at Guggenheim,
                Head of Legal at Brown Brothers Harriman. Now I help crypto, fintech,
                and AI companies get the legal leadership they need—without the
                $500K/year hire.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setContactOpen(true)}
                  className="px-6 py-3 bg-[#1a1a1a] text-white font-medium hover:bg-[#a88b63] transition"
                >
                  Schedule a Call
                </button>
                <a
                  href="#services"
                  className="px-6 py-3 border border-gray-300 font-medium hover:border-[#1a1a1a] transition"
                >
                  How I Help
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.squarespace-cdn.com/content/v1/668a232b9b08a7321bf41326/1d98205a-dda2-46e2-9232-041d233fa810/LA3-copy-new3.jpg"
                alt="Beth Haddock"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="py-8 border-y border-gray-100 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-xs text-gray-400 uppercase tracking-wider mb-6">
            Companies I've worked with
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-gray-400 text-sm font-medium">
            <span>Grayscale</span>
            <span>Robinhood</span>
            <span>Franklin Templeton</span>
            <span>Guggenheim</span>
            <span>World Gold Council</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl mb-12 text-center">
            How I Help
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Fractional GC */}
            <div className="border border-gray-200 p-8 hover:border-[#a88b63] transition">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl mb-4">
                Fractional GC
              </h3>
              <p className="text-gray-600 mb-6">
                Ongoing legal leadership for companies that aren't ready for a
                full-time hire. I work with your team 10-20 hours/week on
                contracts, regulatory strategy, fundraising, and the legal
                decisions that matter.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Contract review & negotiation</li>
                <li>• Regulatory strategy & compliance</li>
                <li>• Fundraising & M&A support</li>
                <li>• Board & investor relations</li>
              </ul>
              <p className="text-sm text-gray-400">
                Best for: Series A-C companies in crypto, fintech, AI
              </p>
            </div>

            {/* Advisory */}
            <div className="border border-gray-200 p-8 hover:border-[#a88b63] transition">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl mb-4">
                Board & Advisory
              </h3>
              <p className="text-gray-600 mb-6">
                Strategic guidance for founders and boards navigating complex
                regulatory environments. I bring pattern recognition from 25
                years of scaling companies through the hardest legal challenges.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Independent board director</li>
                <li>• Advisory board member</li>
                <li>• Founder/CEO advisor</li>
                <li>• Regulatory strategy</li>
              </ul>
              <p className="text-sm text-gray-400">
                Current: GMO-Z.com Trust, Balancer, Stablecoin Standard
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="py-20 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl mb-6">
                25 years in the room where it happens.
              </h2>
              <p className="text-gray-400 mb-6">
                I've sat in the GC chair at companies from startup to $200B AUM.
                I've negotiated with the SEC, built compliance programs from scratch,
                and helped companies navigate the messiest regulatory situations.
              </p>
              <p className="text-gray-400 mb-8">
                Now I bring that experience to growth-stage companies who need
                senior legal thinking without the senior legal price tag.
              </p>
              <div className="space-y-3 text-sm">
                <p><span className="text-[#a88b63]">→</span> Chief Legal Officer, AdvisorEngine (Franklin Templeton)</p>
                <p><span className="text-[#a88b63]">→</span> Chief Compliance Officer, Guggenheim Investments</p>
                <p><span className="text-[#a88b63]">→</span> Head of Legal, Brown Brothers Harriman</p>
                <p><span className="text-[#a88b63]">→</span> Deputy General Counsel, AXA Financial</p>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.squarespace-cdn.com/content/v1/668a232b9b08a7321bf41326/c0a60ae1-eb33-4c96-8179-aef1f2fc5120/bethhaddock.com+.jpg"
                alt="Beth Haddock"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured In */}
      <section className="py-12 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs text-gray-400 uppercase tracking-wider mb-6">
            Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <img src="https://images.squarespace-cdn.com/content/v1/668a232b9b08a7321bf41326/a4740dcd-243c-48bf-839d-0725ccd99073/logo-coindesk.jpg" alt="CoinDesk" className="h-6 object-contain" />
            <img src="https://images.squarespace-cdn.com/content/v1/668a232b9b08a7321bf41326/8d4ebd14-b540-4805-a03a-71df08687014/logo-nasdaq.jpg" alt="Nasdaq" className="h-6 object-contain" />
            <img src="https://images.squarespace-cdn.com/content/v1/668a232b9b08a7321bf41326/b84bb5cb-ba5a-4212-a048-4c6653969ce6/logo-morningstar.jpg" alt="Morningstar" className="h-6 object-contain" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl mb-6">
            Let's talk about your legal needs.
          </h2>
          <p className="text-gray-600 mb-8">
            Whether you need a fractional GC, board advisor, or just want to
            explore how I might help—I'm happy to have a conversation.
          </p>
          <button
            onClick={() => setContactOpen(true)}
            className="px-8 py-4 bg-[#1a1a1a] text-white font-medium hover:bg-[#a88b63] transition"
          >
            Schedule a Call
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © 2026 Beth Haddock
          </div>
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

      {/* Contact Modal */}
      {contactOpen && (
        <div className="fixed inset-0 z-[100]">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setContactOpen(false)}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl">
                Get in Touch
              </h3>
              <button
                onClick={() => setContactOpen(false)}
                className="text-2xl text-gray-400 hover:text-black"
              >
                ×
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#1a1a1a]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#1a1a1a]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  What can I help with?
                </label>
                <select className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#1a1a1a]">
                  <option>Fractional GC</option>
                  <option>Board/Advisory Role</option>
                  <option>Strategic Consultation</option>
                  <option>Something Else</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tell me more
                </label>
                <textarea
                  rows={3}
                  className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#1a1a1a]"
                />
              </div>
              <button
                type="button"
                className="w-full bg-[#1a1a1a] text-white py-3 font-medium hover:bg-[#a88b63] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
