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

// Traditional Finance
const tradFiLogos = [
  { name: "Franklin Templeton", logo: "/logos/franklin-templeton.svg", width: 160 },
  { name: "Guggenheim", logo: "/logos/guggenheim.svg", width: 140 },
  { name: "T. Rowe Price", logo: "/logos/t-rowe-price.svg", width: 130 },
  { name: "Brown Brothers Harriman", logo: "/logos/bbh.svg", width: 170 },
  { name: "AXA", logo: "/logos/axa.svg", width: 70 },
];

// Crypto & Fintech
const cryptoLogos = [
  { name: "Grayscale", logo: "/logos/grayscale.svg", width: 130 },
  { name: "Robinhood", logo: "/logos/robinhood.svg", width: 120 },
  { name: "Ondo", logo: "/logos/ondo.svg", width: 90 },
  { name: "Balancer", logo: "/logos/balancer.svg", width: 110 },
  { name: "Orca", logo: "/logos/orca.svg", width: 80 },
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
    <div className="bg-[#faf9f7] text-slate-900 min-h-screen">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-[#faf9f7]/95 backdrop-blur border-b border-slate-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <span className="font-[family-name:var(--font-playfair)] text-lg font-semibold">
            Beth Haddock
          </span>
          <div className="flex items-center gap-6">
            <Link
              href="/work"
              className="text-sm text-slate-500 hover:text-slate-900 transition"
            >
              Work
            </Link>
            <Link
              href="/guides"
              className="text-sm text-slate-500 hover:text-slate-900 transition"
            >
              Guides
            </Link>
            <Link
              href="/insights"
              className="text-sm text-slate-500 hover:text-slate-900 transition"
            >
              Insights
            </Link>
            <a
              href="https://calendly.com/beth-haddock"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-900 text-white text-sm font-medium hover:bg-[#9a7b4f] transition"
            >
              Book a Conversation
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#9a7b4f] font-medium text-sm mb-6 tracking-wide">
            GENERAL COUNSEL · BOARD DIRECTOR · ADVISOR
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl mb-10 leading-tight text-slate-900">
            The institutions have their playbook. So do the founders. I know both.
          </h1>
          <p className="text-slate-600 text-lg md:text-xl mb-6 leading-relaxed">
            General Counsel at AdvisorEngine. Board at GMO-Z Trust. Advisor to Grayscale, Balancer, Orca, and the teams building what's next.
          </p>
          <p className="text-slate-500 text-base md:text-lg mb-10 leading-relaxed">
            25 years inside Franklin Templeton, Guggenheim, and Brown Brothers Harriman taught me what institutions need. The last decade in crypto taught me what founders need. I bridge the gap.
          </p>
          <a
            href="https://calendly.com/beth-haddock"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-slate-900 text-white font-medium hover:bg-[#9a7b4f] transition"
          >
            Book a Conversation
          </a>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-24 px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-12 text-slate-900">
            How I Work
          </h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            <div>
              <h3 className="font-medium text-lg mb-3 text-slate-900">Get Institutional-Ready</h3>
              <p className="text-slate-600 leading-relaxed">
                I see your company the way a pension fund's investment committee sees it. Let's close the gaps before they become dealbreakers.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-3 text-slate-900">Build the Structure</h3>
              <p className="text-slate-600 leading-relaxed">
                I've sat on both sides. I know what boards need to greenlight—and what trips up companies that move too fast without the right foundation.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-3 text-slate-900">Stay Ahead of the Rules</h3>
              <p className="text-slate-600 leading-relaxed">
                NYDFS, SEC, global frameworks—I've shaped policy and helped companies thrive within it. The landscape shifts. I help you stay ahead.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-3 text-slate-900">Open the Right Doors</h3>
              <p className="text-slate-600 leading-relaxed">
                Traditional finance speaks a different language. I translate—and open doors that founders can't reach alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof - Logo Bar */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-200 overflow-hidden">
        <div ref={logoSectionRef} className="max-w-5xl mx-auto">
          {/* Traditional Finance Row */}
          <div className="mb-12">
            <p
              className={`text-center text-xs text-slate-400 uppercase tracking-widest mb-8 transition-all duration-700 ${
                logosVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Traditional Finance
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 md:gap-x-14 lg:gap-x-16">
              {tradFiLogos.map((company, index) => (
                <div
                  key={company.name}
                  className={`grayscale opacity-0 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ${
                    logosVisible ? "animate-logo-fade-in" : ""
                  }`}
                  style={{
                    animationDelay: logosVisible ? `${index * 80}ms` : "0ms",
                    animationFillMode: "forwards",
                  }}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    style={{ width: company.width, height: "auto" }}
                    className="h-7 md:h-8 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Crypto & Fintech Row */}
          <div>
            <p
              className={`text-center text-xs text-slate-400 uppercase tracking-widest mb-8 transition-all duration-700 delay-300 ${
                logosVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Crypto & Fintech
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 md:gap-x-14 lg:gap-x-16">
              {cryptoLogos.map((company, index) => (
                <div
                  key={company.name}
                  className={`grayscale opacity-0 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ${
                    logosVisible ? "animate-logo-fade-in" : ""
                  }`}
                  style={{
                    animationDelay: logosVisible ? `${(index + 5) * 80}ms` : "0ms",
                    animationFillMode: "forwards",
                  }}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    style={{ width: company.width, height: "auto" }}
                    className="h-7 md:h-8 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Roles */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-12 text-slate-900">
            Where I'm Active
          </h2>

          {/* Primary Role */}
          <div className="mb-12">
            <p className="text-xs text-[#9a7b4f] uppercase tracking-widest mb-4">Primary Role</p>
            <div className="border-l-2 border-[#9a7b4f] pl-5">
              <p className="font-medium text-lg text-slate-900">AdvisorEngine</p>
              <p className="text-slate-600">General Counsel & Head of Compliance</p>
              <p className="text-sm text-slate-400 mt-1">Franklin Templeton's advisor technology platform</p>
            </div>
          </div>

          {/* Board */}
          <div className="mb-12">
            <p className="text-xs text-[#9a7b4f] uppercase tracking-widest mb-4">Board</p>
            <div className="border-l-2 border-[#9a7b4f] pl-5">
              <p className="font-medium text-lg text-slate-900">GMO-Z Trust Company</p>
              <p className="text-slate-600">Board of Directors</p>
              <p className="text-sm text-slate-400 mt-1">NYDFS-regulated stablecoin issuer</p>
            </div>
          </div>

          {/* Advisory */}
          <div>
            <p className="text-xs text-[#9a7b4f] uppercase tracking-widest mb-4">Advisory</p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-l-2 border-slate-200 pl-5">
                <p className="font-medium text-slate-900">Balancer</p>
                <p className="text-sm text-slate-500">DeFi Protocol</p>
              </div>
              <div className="border-l-2 border-slate-200 pl-5">
                <p className="font-medium text-slate-900">Orca</p>
                <p className="text-sm text-slate-500">Solana DEX</p>
              </div>
              <div className="border-l-2 border-slate-200 pl-5">
                <p className="font-medium text-slate-900">The Stablecoin Standard</p>
                <p className="text-sm text-slate-500">Policy & Standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thought Leadership */}
      <section className="py-16 px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-slate-600">
                <span className="font-medium text-slate-900">CoinDesk contributor</span>
                <span className="mx-2 text-slate-300">·</span>
                Author of <em className="text-slate-900">Triple Bottom-Line Compliance</em>
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Frequent speaker on crypto regulation, fintech compliance, and the future of digital assets.
              </p>
            </div>
            <Link
              href="/insights"
              className="text-sm text-[#9a7b4f] hover:text-slate-900 transition whitespace-nowrap"
            >
              Read insights →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-slate-900 text-white overflow-hidden">
        <div ref={testimonialSectionRef} className="max-w-5xl mx-auto">
          <p
            className={`text-center text-xs text-[#9a7b4f] uppercase tracking-widest mb-16 transition-all duration-700 ${
              testimonialsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            What clients say
          </p>
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
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
                <span className="absolute -top-4 -left-2 text-6xl text-[#9a7b4f] opacity-30 font-[family-name:var(--font-playfair)]">
                  "
                </span>
                <blockquote className="relative z-10">
                  <p className="font-[family-name:var(--font-playfair)] text-lg md:text-xl leading-relaxed mb-6 text-slate-100">
                    {testimonial.quote}
                  </p>
                  <footer className="text-sm">
                    <cite className="not-italic">
                      <span className="text-white font-medium">
                        {testimonial.name}
                      </span>
                      <span className="text-slate-400 block mt-1">
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
        <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-slate-900">
                Latest Insights
              </h2>
              <Link
                href="/insights"
                className="text-sm text-[#9a7b4f] hover:text-slate-900 transition"
              >
                View all →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/insights/${post.slug}`}
                  className="block bg-white p-6 border border-slate-200 hover:border-[#9a7b4f] transition"
                >
                  <p className="text-xs text-slate-400 mb-2">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <h3 className="font-medium mb-2 line-clamp-2 text-slate-900">{post.title}</h3>
                  {post.excerpt && (
                    <p className="text-sm text-slate-500 line-clamp-2">
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
      <section className="py-32 px-6 border-t border-slate-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl mb-6 text-slate-900">
            Let's see if there's a fit.
          </h2>
          <p className="text-slate-600 mb-10 leading-relaxed">
            If you're a founder building at the frontier of finance and need
            strategic counsel, board expertise, or regulatory guidance—I'd like
            to hear what you're working on.
          </p>
          <a
            href="https://calendly.com/beth-haddock"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-slate-900 text-white font-medium hover:bg-[#9a7b4f] transition"
          >
            Book a Conversation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © 2026 Beth Haddock
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="https://linkedin.com/in/bethhaddock"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:beth@warburtonadvisers.com"
              className="text-slate-500 hover:text-slate-900 transition"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
