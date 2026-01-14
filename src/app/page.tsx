"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reveal on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Prevent scroll when modal open
  useEffect(() => {
    document.body.style.overflow = contactModalOpen ? "hidden" : "auto";
  }, [contactModalOpen]);

  return (
    <div className="bg-[#f4f4f0] text-[#1a1a1a]">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 px-6 md:px-12 border-b ${
          isScrolled
            ? "bg-white/95 backdrop-blur py-4 shadow-sm border-gray-200"
            : "bg-transparent py-6 border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="font-[family-name:var(--font-playfair)] text-xl tracking-wider font-bold z-50 relative"
          >
            BETH HADDOCK<span className="text-[#a88b63]">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-widest text-gray-600">
            <a href="#work" className="hover:text-[#a88b63] transition">
              THE WORK
            </a>
            <a href="#intellect" className="hover:text-[#a88b63] transition">
              INTELLECT
            </a>
            <a href="#about" className="hover:text-[#a88b63] transition">
              ABOUT
            </a>
            <button
              onClick={() => setContactModalOpen(true)}
              className="px-6 py-2 border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition uppercase text-xs font-bold"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-[#f4f4f0] z-40 flex flex-col items-center justify-center space-y-8 transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="font-[family-name:var(--font-playfair)] text-3xl hover:text-[#a88b63]"
          >
            The Work
          </a>
          <a
            href="#intellect"
            onClick={() => setMobileMenuOpen(false)}
            className="font-[family-name:var(--font-playfair)] text-3xl hover:text-[#a88b63]"
          >
            Intellect
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="font-[family-name:var(--font-playfair)] text-3xl hover:text-[#a88b63]"
          >
            About
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setContactModalOpen(true);
            }}
            className="text-xl underline decoration-[#a88b63] underline-offset-4"
          >
            Get in Touch
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative min-h-screen flex items-center px-6 overflow-hidden bg-[#f4f4f0]">
        {/* Abstract shapes */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#a88b63]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#a88b63]/5 rounded-full blur-2xl" />

        <div className="relative z-10 max-w-7xl mx-auto w-full pt-32 pb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="animate-fade-in-up text-[#a88b63] font-bold tracking-[0.2em] text-xs uppercase mb-6">
                Strategic Counsel for Tech Leaders
              </p>
              <h1 className="animate-fade-in-up font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl mb-8 leading-[1.1] text-[#1a1a1a]">
                Building <br />
                Companies <br />
                <span className="italic text-[#a88b63]">That Last.</span>
              </h1>
              <p className="animate-fade-in-up text-gray-600 text-lg md:text-xl font-light mb-10 max-w-lg leading-relaxed">
                25 years helping tech founders navigate growth—from early stage
                to institutional scale.
              </p>
              <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4">
                <a
                  href="#work"
                  className="px-8 py-4 bg-[#1a1a1a] text-white font-bold text-xs tracking-widest uppercase hover:bg-[#a88b63] transition duration-300"
                >
                  See How I Help
                </a>
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="px-8 py-4 border-2 border-[#1a1a1a] text-[#1a1a1a] font-bold text-xs tracking-widest uppercase hover:bg-[#1a1a1a] hover:text-white transition duration-300"
                >
                  Let's Talk
                </button>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="aspect-[3/4] bg-[#1a1a1a] relative overflow-hidden">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/668a232b9b08a7321bf41326/1d98205a-dda2-46e2-9232-041d233fa810/LA3-copy-new3.jpg"
                  alt="Beth Haddock"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#a88b63]/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-[#a88b63]" />
            </div>
          </div>
        </div>
      </header>

      {/* Logo Bar */}
      <div className="bg-white border-y border-gray-100 py-6">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-6">Featured In</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition duration-500">
            <img src="https://images.squarespace-cdn.com/content/v1/668a232b9b08a7321bf41326/a4740dcd-243c-48bf-839d-0725ccd99073/logo-coindesk.jpg" alt="CoinDesk" className="h-6 md:h-8 object-contain" />
            <img src="https://images.squarespace-cdn.com/content/v1/668a232b9b08a7321bf41326/8d4ebd14-b540-4805-a03a-71df08687014/logo-nasdaq.jpg" alt="Nasdaq" className="h-6 md:h-8 object-contain" />
            <img src="https://images.squarespace-cdn.com/content/v1/668a232b9b08a7321bf41326/b84bb5cb-ba5a-4212-a048-4c6653969ce6/logo-morningstar.jpg" alt="Morningstar" className="h-6 md:h-8 object-contain" />
            <img src="https://images.squarespace-cdn.com/content/v1/668a232b9b08a7321bf41326/c549ec78-29a9-4d23-8a23-b518df086dbb/logo-financial.jpg" alt="Financial Planning" className="h-6 md:h-8 object-contain" />
            <img src="https://images.squarespace-cdn.com/content/v1/668a232b9b08a7321bf41326/44eccdd3-0669-4548-98eb-40ce09312988/logo-privatewealth.jpg" alt="Private Wealth" className="h-6 md:h-8 object-contain" />
          </div>
        </div>
      </div>

      {/* The Work Section */}
      <section id="work" className="py-24 px-6 bg-[#f4f4f0]">
        <div className="max-w-7xl mx-auto">
          <div className="reveal mb-16 text-center">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl mb-4 text-[#1a1a1a]">
              The Work
            </h2>
            <div className="h-1 w-20 bg-[#a88b63] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Strategic Counsel */}
            <div className="reveal group bg-white p-10 md:p-14 shadow-sm border-t-4 border-[#1a1a1a] hover:shadow-xl transition duration-500">
              <div className="mb-6 text-[#a88b63] text-4xl">✦</div>
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl mb-4">
                Strategic Counsel
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                CLO at Franklin Templeton subsidiary. CCO at Guggenheim. Head of
                Legal at Brown Brothers Harriman. I've built and led legal teams
                at every stage—now I help founders do the same.
              </p>
              <ul className="mb-8 space-y-3 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <span className="text-[#a88b63]">✓</span> Fractional GC for Growth-Stage
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#a88b63]">✓</span> M&A, Fundraising, Licensing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#a88b63]">✓</span> Crypto, Fintech, AI Focus
                </li>
              </ul>
              <p className="text-xs text-gray-400 uppercase tracking-wider">
                Clients: Grayscale • Robinhood • World Gold Council
              </p>
            </div>

            {/* Advisory Roles */}
            <div className="reveal group bg-white p-10 md:p-14 shadow-sm border-t-4 border-gray-200 hover:border-[#a88b63] hover:shadow-xl transition duration-500">
              <div className="mb-6 text-gray-400 text-4xl group-hover:text-[#a88b63] transition">
                ❖
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl mb-4">
                Advisory Roles
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Independent Director at GMO-Z.com Trust (NYDFS-regulated stablecoin
                issuer). Advisory boards at Balancer, Stablecoin Standard, and
                emerging tech companies. I bridge Wall Street and Web3.
              </p>
              <ul className="mb-8 space-y-3 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <span className="text-[#a88b63]">✓</span> Board & Advisory Positions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#a88b63]">✓</span> Stablecoin & DeFi Expertise
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#a88b63]">✓</span> a16z Portfolio Companies
                </li>
              </ul>
              <p className="text-xs text-gray-400 uppercase tracking-wider">
                Board: GMO-Z.com Trust • Balancer • Stablecoin Standard
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <span className="text-[#a88b63] font-bold tracking-widest text-xs uppercase mb-4 block">
                About
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl mb-6">
                25 Years in the Room
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                I've been CLO, CCO, and Head of Legal at firms from startups to
                $10B+ enterprises. Brown Brothers Harriman. Guggenheim. Franklin
                Templeton. I know what it takes to scale—and what breaks when
                you don't do it right.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Now I work with founders building the next generation of tech
                companies. Grayscale. Robinhood. World Gold Council. a16z
                portfolio companies. Whether you need a fractional GC, a
                strategic advisor, or someone who's navigated this before.
              </p>
              <div className="flex flex-wrap gap-3 mb-8 text-xs text-gray-500">
                <span className="px-3 py-1 bg-gray-100 rounded">JD, Catholic University</span>
                <span className="px-3 py-1 bg-gray-100 rounded">BA Economics, Bucknell</span>
                <span className="px-3 py-1 bg-gray-100 rounded">Yale Executive Program</span>
                <span className="px-3 py-1 bg-gray-100 rounded">Berkeley Law</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://linkedin.com/in/bethhaddock"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold tracking-widest text-[#1a1a1a] hover:text-[#a88b63] transition"
                >
                  LINKEDIN →
                </a>
                <a
                  href="https://twitter.com/bethhaddock"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold tracking-widest text-[#1a1a1a] hover:text-[#a88b63] transition"
                >
                  X / TWITTER →
                </a>
              </div>
            </div>
            <div className="reveal">
              <div className="bg-[#f4f4f0] aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/668a232b9b08a7321bf41326/c0a60ae1-eb33-4c96-8179-aef1f2fc5120/bethhaddock.com+.jpg"
                  alt="Beth Haddock"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intellect Section */}
      <section id="intellect" className="py-24 px-6 bg-[#2d2d2d] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-700 pb-8 reveal">
            <div>
              <span className="text-[#a88b63] font-bold tracking-widest text-xs uppercase mb-2 block">
                Thought Leadership
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl">
                Intellect & Insight
              </h2>
            </div>
            <a
              href="#"
              className="hidden md:block text-sm font-bold tracking-widest hover:text-[#a88b63] transition mt-6 md:mt-0"
            >
              VIEW ALL PUBLICATIONS →
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                type: "Book",
                title: "Triple Bottom-Line Compliance: How to Deliver Protection, Productivity, and Impact",
                image:
                  "https://images.squarespace-cdn.com/content/v1/668a232b9b08a7321bf41326/c7f24b8c-10a2-449a-a8a1-d26618304ec4/Screenshot+2024-07-07+at+13.13.21.png",
              },
              {
                type: "Framework",
                title: "StableCheck: A Framework for Evaluating Stablecoin Quality",
                image:
                  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80",
              },
              {
                type: "Op-Ed",
                title: "AI Strategy for Leaders: What Founders Need to Know Now",
                image:
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
              },
            ].map((item, i) => (
              <article key={i} className="reveal cursor-pointer group">
                <div className="bg-gray-800 aspect-[4/3] mb-6 overflow-hidden">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-80 group-hover:opacity-100"
                    alt={item.title}
                  />
                </div>
                <p className="text-xs text-[#a88b63] font-bold uppercase tracking-widest mb-2">
                  {item.type}
                </p>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl leading-tight group-hover:underline decoration-1 underline-offset-4">
                  {item.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <h4 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-2">
              BETH HADDOCK
            </h4>
            <p className="text-gray-500 text-sm">New York City • Global Advisory</p>
          </div>
          <div className="flex gap-8 text-sm font-medium text-gray-400">
            <a
              href="https://linkedin.com/in/bethhaddock"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/bethhaddock"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Twitter / X
            </a>
            <button
              onClick={() => setContactModalOpen(true)}
              className="hover:text-white transition"
            >
              Email
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-900 text-center md:text-left text-xs text-gray-600 flex flex-col md:flex-row justify-between">
          <p>© 2026 Beth Haddock. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">
            Strategic Counsel • Advisory • Speaking
          </p>
        </div>
      </footer>

      {/* Contact Modal */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setContactModalOpen(false)}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white p-8 md:p-12 shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1a1a1a]">
                Get in Touch
              </h3>
              <button
                onClick={() => setContactModalOpen(false)}
                className="text-2xl text-gray-400 hover:text-black"
              >
                ×
              </button>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#a88b63] transition bg-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#a88b63] transition bg-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Inquiry Type
                </label>
                <select className="w-full border-b border-gray-300 py-2 bg-transparent focus:outline-none focus:border-[#a88b63] transition">
                  <option>GC / Legal Advisory</option>
                  <option>Advisory Board Role</option>
                  <option>Strategic Consultation</option>
                  <option>Speaking / Media</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Message
                </label>
                <textarea
                  rows={3}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#a88b63] transition bg-transparent resize-none"
                />
              </div>
              <button
                type="button"
                className="w-full bg-[#1a1a1a] text-white py-4 font-bold text-xs uppercase tracking-widest hover:bg-[#a88b63] transition mt-4"
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
