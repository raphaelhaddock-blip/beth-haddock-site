"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
};

// All logos combined for a single subtle row
const clientLogos = [
  { name: "Franklin Templeton", logo: "/logos/franklin-templeton.svg", width: 140 },
  { name: "Grayscale", logo: "/logos/grayscale.svg", width: 110 },
  { name: "Guggenheim", logo: "/logos/guggenheim.svg", width: 120 },
  { name: "T. Rowe Price", logo: "/logos/t-rowe-price.svg", width: 110 },
  { name: "Brown Brothers Harriman", logo: "/logos/bbh.svg", width: 140 },
  { name: "Robinhood", logo: "/logos/robinhood.svg", width: 100 },
];

const testimonials = [
  {
    quote:
      "Beth's regulatory foresight saved us months of headaches. She saw the compliance landscape shifting before anyone else did.",
    name: "Series B Founder",
    role: "DeFi Protocol",
  },
  {
    quote:
      "Having someone who's sat on both sides of the table—institutional finance and crypto—is invaluable. Beth bridges worlds.",
    name: "CEO",
    role: "Digital Asset Custodian",
  },
  {
    quote:
      "She doesn't just tell you what's legal. She helps you build something that will still be standing in five years.",
    name: "General Partner",
    role: "Crypto Venture Fund",
  },
];

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);
  const testimonialSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 3)))
      .catch(() => {});
  }, []);

  useEffect(() => {
    const testimonialObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTestimonialsVisible(true);
          testimonialObserver.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (testimonialSectionRef.current) {
      testimonialObserver.observe(testimonialSectionRef.current);
    }

    return () => {
      testimonialObserver.disconnect();
    };
  }, []);

  return (
    <div className="bg-[#FDFCF8] text-stone-900 min-h-screen">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-[#FDFCF8]/95 backdrop-blur border-b border-stone-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
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
              className="px-4 py-2 border border-stone-900 text-stone-900 text-sm font-medium hover:bg-stone-900 hover:text-white transition"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero - Left Aligned, Editorial Style */}
      <section className="pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-stone-400 text-sm mb-8 tracking-wide uppercase">
              General Counsel · Board Director · Strategic Advisor
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-[3.5rem] mb-10 leading-[1.15] text-stone-900">
              Bridging the divide between Institutional Finance and the Digital Frontier.
            </h1>
            <p className="text-stone-600 text-lg leading-relaxed mb-12 max-w-2xl">
              Strategic counsel for boards and founders navigating the future of regulated markets.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://calendly.com/beth-haddock"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-stone-900 text-stone-900 font-medium hover:bg-stone-900 hover:text-white transition"
              >
                Book a Conversation
              </a>
              <Link
                href="/work"
                className="text-stone-500 hover:text-stone-900 transition text-sm"
              >
                View selected work →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brief Bio / Credibility Line */}
      <section className="py-16 px-6 border-t border-stone-200">
        <div className="max-w-4xl mx-auto">
          <p className="text-stone-600 leading-relaxed max-w-3xl">
            General Counsel at AdvisorEngine (Franklin Templeton). Board Director at GMO-Z Trust (NYDFS-regulated stablecoin issuer).
            Former counsel at Guggenheim Partners, T. Rowe Price, and Brown Brothers Harriman.
            Advisor to Grayscale, Balancer, Orca, and emerging protocols building the next generation of financial infrastructure.
          </p>
        </div>
      </section>

      {/* Logo Bar - Subtle, Grayscale, Background Noise */}
      <section className="py-16 px-6 border-t border-stone-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-16">
            {clientLogos.map((company) => (
              <div
                key={company.name}
                className="grayscale opacity-50"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  style={{ width: company.width, height: "auto" }}
                  className="h-6 md:h-7 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Focus */}
      <section className="py-32 px-6 border-t border-stone-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl mb-16 text-stone-900">
            Areas of Focus
          </h2>
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-4 text-stone-900">
                Institutional Readiness
              </h3>
              <p className="text-stone-600 leading-relaxed text-[15px]">
                Preparing digital asset companies for institutional scrutiny.
                Understanding what pension funds, endowments, and asset managers
                require before they can allocate.
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-4 text-stone-900">
                Regulatory Strategy
              </h3>
              <p className="text-stone-600 leading-relaxed text-[15px]">
                Navigating SEC, NYDFS, and emerging global frameworks.
                Building compliance architectures that anticipate
                rather than react to regulatory evolution.
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-4 text-stone-900">
                Board Governance
              </h3>
              <p className="text-stone-600 leading-relaxed text-[15px]">
                Structuring governance for companies operating at the
                intersection of traditional finance and decentralized systems.
                Fiduciary guidance for emerging asset classes.
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-4 text-stone-900">
                Strategic Counsel
              </h3>
              <p className="text-stone-600 leading-relaxed text-[15px]">
                Advising founders on growth, partnerships, and market entry.
                Translating between the language of innovation and the
                requirements of institutional capital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Positions */}
      <section className="py-32 px-6 bg-stone-50 border-t border-stone-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl mb-16 text-stone-900">
            Current Positions
          </h2>

          {/* Primary Role */}
          <div className="mb-16">
            <p className="text-xs text-stone-400 uppercase tracking-widest mb-6">
              Primary Role
            </p>
            <div className="border-l-2 border-stone-300 pl-6">
              <p className="font-[family-name:var(--font-playfair)] text-xl text-stone-900 mb-1">
                AdvisorEngine
              </p>
              <p className="text-stone-600 mb-2">General Counsel & Head of Compliance</p>
              <p className="text-sm text-stone-400">
                Franklin Templeton's advisor technology platform
              </p>
            </div>
          </div>

          {/* Board */}
          <div className="mb-16">
            <p className="text-xs text-stone-400 uppercase tracking-widest mb-6">
              Board
            </p>
            <div className="border-l-2 border-stone-300 pl-6">
              <p className="font-[family-name:var(--font-playfair)] text-xl text-stone-900 mb-1">
                GMO-Z Trust Company
              </p>
              <p className="text-stone-600 mb-2">Board of Directors</p>
              <p className="text-sm text-stone-400">
                NYDFS-regulated stablecoin issuer
              </p>
            </div>
          </div>

          {/* Advisory */}
          <div>
            <p className="text-xs text-stone-400 uppercase tracking-widest mb-6">
              Advisory
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-l border-stone-200 pl-6">
                <p className="font-medium text-stone-900">Balancer</p>
                <p className="text-sm text-stone-500">DeFi Protocol</p>
              </div>
              <div className="border-l border-stone-200 pl-6">
                <p className="font-medium text-stone-900">Orca</p>
                <p className="text-sm text-stone-500">Solana DEX</p>
              </div>
              <div className="border-l border-stone-200 pl-6">
                <p className="font-medium text-stone-900">The Stablecoin Standard</p>
                <p className="text-sm text-stone-500">Policy & Standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-stone-900 text-white overflow-hidden">
        <div ref={testimonialSectionRef} className="max-w-4xl mx-auto">
          <p
            className={`text-xs text-stone-500 uppercase tracking-widest mb-16 transition-all duration-700 ${
              testimonialsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Client Perspectives
          </p>
          <div className="space-y-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`max-w-3xl transition-all duration-700 ${
                  testimonialsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: testimonialsVisible
                    ? `${index * 150}ms`
                    : "0ms",
                }}
              >
                <blockquote>
                  <p className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl leading-relaxed mb-6 text-stone-100">
                    "{testimonial.quote}"
                  </p>
                  <footer className="text-sm">
                    <cite className="not-italic">
                      <span className="text-stone-300">
                        {testimonial.name}
                      </span>
                      <span className="text-stone-500 mx-2">·</span>
                      <span className="text-stone-500">
                        {testimonial.role}
                      </span>
                    </cite>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Writing & Speaking */}
      <section className="py-24 px-6 border-t border-stone-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="font-[family-name:var(--font-playfair)] text-xl mb-4 text-stone-900">
                Writing & Speaking
              </h2>
              <p className="text-stone-600 leading-relaxed">
                CoinDesk contributor. Author of{" "}
                <em className="text-stone-900">Triple Bottom-Line Compliance</em>.
                Regular speaker on crypto regulation, fintech compliance, and
                the evolution of digital asset markets.
              </p>
            </div>
            <Link
              href="/insights"
              className="text-sm border border-stone-300 px-4 py-2 text-stone-600 hover:border-stone-900 hover:text-stone-900 transition whitespace-nowrap"
            >
              Read insights →
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      {posts.length > 0 && (
        <section className="py-32 px-6 bg-stone-50 border-t border-stone-200">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-16">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-stone-900">
                Recent Writing
              </h2>
              <Link
                href="/insights"
                className="text-sm text-stone-500 hover:text-stone-900 transition"
              >
                View all →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/insights/${post.slug}`}
                  className="block bg-[#FDFCF8] p-6 border border-stone-200 hover:border-stone-400 transition group"
                >
                  <p className="text-xs text-stone-400 mb-3">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg mb-3 line-clamp-2 text-stone-900 group-hover:text-stone-600 transition">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-sm text-stone-500 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA - Editorial, Not Salesy */}
      <section className="py-32 px-6 border-t border-stone-200">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl mb-6 text-stone-900">
              Let's discuss your situation.
            </h2>
            <p className="text-stone-600 mb-10 leading-relaxed">
              Whether you're preparing for institutional investment, navigating
              regulatory complexity, or building governance frameworks for emerging
              asset classes—I welcome the conversation.
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
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-stone-200">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-lg text-stone-900 mb-2">
              Beth Haddock
            </p>
            <p className="text-sm text-stone-400">
              © 2026. All rights reserved.
            </p>
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
