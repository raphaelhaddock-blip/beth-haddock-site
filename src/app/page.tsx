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
      <header className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-[#1a1a1a] text-white">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto text-center mt-10">
          <p className="animate-fade-in-up text-[#a88b63] font-bold tracking-[0.3em] text-xs md:text-sm uppercase mb-6">
            Strategic Counsel for Tech Leaders
          </p>
          <h1 className="animate-fade-in-up font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1.1]">
            Building Companies <br />
            <span className="italic text-gray-400">That Last.</span>
          </h1>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-gray-400 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              25 years helping tech founders navigate growth—from early stage
              to institutional scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="#work"
                className="px-8 py-4 bg-white text-[#1a1a1a] font-bold text-xs tracking-widest uppercase hover:bg-[#a88b63] hover:text-white transition duration-300"
              >
                See How I Help
              </a>
              <button
                onClick={() => setContactModalOpen(true)}
                className="px-8 py-4 border border-gray-600 text-white font-bold text-xs tracking-widest uppercase hover:border-[#a88b63] hover:text-[#a88b63] transition duration-300"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Logo Bar */}
      <div className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition duration-500">
          <span className="font-[family-name:var(--font-playfair)] font-bold text-xl tracking-tighter">
            GMO-Z.com
          </span>
          <span className="font-[family-name:var(--font-playfair)] font-bold text-xl tracking-tighter">
            CoinDesk
          </span>
          <span className="font-[family-name:var(--font-playfair)] font-bold text-xl tracking-tighter">
            Nasdaq
          </span>
          <span className="font-[family-name:var(--font-playfair)] font-bold text-xl tracking-tighter">
            Forbes
          </span>
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
                Fractional GC and strategic legal advisor to growth-stage tech
                companies. I help founders make the right calls—without the
                overhead of full-time legal.
              </p>
              <ul className="mb-8 space-y-3 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <span className="text-[#a88b63]">✓</span> Fractional / Advisory GC
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#a88b63]">✓</span> Scaling Without Legal Landmines
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#a88b63]">✓</span> Founder-Friendly Strategy
                </li>
              </ul>
              <p className="text-xs text-gray-400 uppercase tracking-wider">
                25+ Years • Wall Street to Web3
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
                Strategic advisor to founders and leadership teams. Advisory
                board roles at AI, fintech, and growth-stage tech companies.
                Pattern recognition from decades of scaling.
              </p>
              <ul className="mb-8 space-y-3 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <span className="text-[#a88b63]">✓</span> Founder & CEO Advisory
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#a88b63]">✓</span> Advisory Board Positions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#a88b63]">✓</span> AI, Fintech & Crypto Focus
                </li>
              </ul>
              <p className="text-xs text-gray-400 uppercase tracking-wider">
                Currently: GMO-Z.com Trust • NYC Bar Web3 Subcommittee
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
                From Wall Street to Web3, I've spent my career in the rooms
                where it matters—helping companies navigate the hardest
                decisions at every stage of growth.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                I work with founders who are building the next generation of
                tech companies. Whether you need a fractional GC, a strategic
                advisor, or someone who's seen it all before—let's talk.
              </p>
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
              <div className="bg-[#f4f4f0] aspect-[4/5] flex items-center justify-center">
                <span className="text-gray-400 text-sm tracking-widest uppercase">
                  Photo
                </span>
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
                  "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80",
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
