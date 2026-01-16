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

const logos = [
  { name: "Grayscale", logo: "/logos/grayscale.svg", width: 140 },
  { name: "Robinhood", logo: "/logos/robinhood.svg", width: 130 },
  { name: "Franklin Templeton", logo: "/logos/franklin-templeton.svg", width: 160 },
  { name: "Guggenheim", logo: "/logos/guggenheim.svg", width: 150 },
  { name: "World Gold Council", logo: "/logos/world-gold-council.svg", width: 150 },
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
  const [logosVisible, setLogosVisible] = useState(false);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);
  const logoSectionRef = useRef<HTMLDivElement>(null);
  const testimonialSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 3)))
      .catch(() => {});
  }, []);

  useEffect(() => {
    const logoObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLogosVisible(true);
          logoObserver.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const testimonialObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTestimonialsVisible(true);
          testimonialObserver.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (logoSectionRef.current) {
      logoObserver.observe(logoSectionRef.current);
    }

    if (testimonialSectionRef.current) {
      testimonialObserver.observe(testimonialSectionRef.current);
    }

    return () => {
      logoObserver.disconnect();
      testimonialObserver.disconnect();
    };
  }, []);

  return (
    <div className="bg-white text-[#1a1a1a] min-h-screen">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur border-b border-gray-100 px-6 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <span className="font-[family-name:var(--font-playfair)] text-lg font-semibold">
            Beth Haddock
          </span>
          <div className="flex items-center gap-6">
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

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#a88b63] font-medium text-sm mb-4 tracking-wide">
            STRATEGIC ADVISOR · BOARD DIRECTOR
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            I help crypto and fintech founders turn ambition into lasting companies.
          </h1>
          <p className="text-gray-600 text-xl md:text-2xl mb-4 max-w-3xl leading-relaxed">
            From first institutional check to IPO-readiness—I've guided founders through the moments that define whether a company scales or stalls.
          </p>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl">
            20+ years at Franklin Templeton, Guggenheim, and with a16z portfolio companies. I know what institutions need to say yes—and how to build companies they want to back.
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

      {/* What I Do */}
      <section className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-6">
            How I Help
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium text-lg mb-2">Strategic Positioning</h3>
              <p className="text-gray-600 leading-relaxed">
                I help you see your company the way institutional investors and acquirers see it—and close the gaps before they become dealbreakers.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Board & Governance</h3>
              <p className="text-gray-600 leading-relaxed">
                Building the governance structures that signal maturity to partners, investors, and regulators. The foundation that lets you move fast without breaking things.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Regulatory Navigation</h3>
              <p className="text-gray-600 leading-relaxed">
                Crypto and fintech live in a shifting landscape. I've been on both sides—writing the rules and helping companies thrive within them.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Institutional Relationships</h3>
              <p className="text-gray-600 leading-relaxed">
                Two decades of relationships with the firms that write the biggest checks. I know what gets you in the room—and what closes the deal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof - Logo Bar */}
      <section className="py-16 px-6 bg-gray-50 border-y border-gray-100 overflow-hidden">
        <div ref={logoSectionRef} className="max-w-5xl mx-auto">
          <p
            className={`text-center text-xs text-gray-400 uppercase tracking-widest mb-10 transition-all duration-700 ${
              logosVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-16 lg:gap-x-20">
            {logos.map((company, index) => (
              <div
                key={company.name}
                className={`grayscale opacity-0 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ${
                  logosVisible ? "animate-logo-fade-in" : ""
                }`}
                style={{
                  animationDelay: logosVisible ? `${index * 100}ms` : "0ms",
                  animationFillMode: "forwards",
                }}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  style={{ width: company.width, height: "auto" }}
                  className="h-8 md:h-10 object-contain"
                />
              </div>
            ))}
          </div>
          <p
            className={`text-center text-sm text-gray-400 mt-10 transition-all duration-700 delay-500 ${
              logosVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Plus portfolio companies of Andreessen Horowitz and other leading crypto investors.
          </p>
        </div>
      </section>

      {/* Current Roles */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-8">
            Current Roles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-l-2 border-[#a88b63] pl-4">
              <p className="font-medium">GMO-Z.com Trust</p>
              <p className="text-sm text-gray-500">Board of Directors</p>
            </div>
            <div className="border-l-2 border-[#a88b63] pl-4">
              <p className="font-medium">Balancer</p>
              <p className="text-sm text-gray-500">Advisory</p>
            </div>
            <div className="border-l-2 border-[#a88b63] pl-4">
              <p className="font-medium">Stablecoin Standard</p>
              <p className="text-sm text-gray-500">Advisory</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-[#1a1a1a] text-white overflow-hidden">
        <div ref={testimonialSectionRef} className="max-w-5xl mx-auto">
          <p
            className={`text-center text-xs text-[#a88b63] uppercase tracking-widest mb-12 transition-all duration-700 ${
              testimonialsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            What clients say
          </p>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
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
                <span className="absolute -top-4 -left-2 text-6xl text-[#a88b63] opacity-30 font-[family-name:var(--font-playfair)]">
                  "
                </span>
                <blockquote className="relative z-10">
                  <p className="font-[family-name:var(--font-playfair)] text-lg md:text-xl leading-relaxed mb-6 text-gray-100">
                    {testimonial.quote}
                  </p>
                  <footer className="text-sm">
                    <cite className="not-italic">
                      <span className="text-white font-medium">
                        {testimonial.name}
                      </span>
                      <span className="text-gray-400 block mt-1">
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

      {/* Latest Insights */}
      {posts.length > 0 && (
        <section className="py-16 px-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl">
                Latest Insights
              </h2>
              <Link
                href="/insights"
                className="text-sm text-[#a88b63] hover:text-[#1a1a1a] transition"
              >
                View all →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/insights/${post.slug}`}
                  className="block bg-white p-6 border border-gray-200 hover:border-[#a88b63] transition"
                >
                  <p className="text-xs text-gray-400 mb-2">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <h3 className="font-medium mb-2 line-clamp-2">{post.title}</h3>
                  {post.excerpt && (
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl mb-4">
            Let's see if there's a fit.
          </h2>
          <p className="text-gray-600 mb-8">
            If you're a founder building at the frontier of finance and need
            strategic counsel, board expertise, or regulatory guidance—I'd like
            to hear what you're working on.
          </p>
          <a
            href="https://calendly.com/beth-haddock"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#1a1a1a] text-white font-medium hover:bg-[#a88b63] transition"
          >
            Book a Conversation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2026 Beth Haddock
          </p>
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
