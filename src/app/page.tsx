"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 3)))
      .catch(() => {});
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
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#a88b63] font-medium text-sm mb-3 tracking-wide">
            BOARD DIRECTOR · STRATEGIC COUNSEL · CRYPTO, FINTECH, AI
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight max-w-3xl">
            I've helped build the regulatory frameworks that crypto operates under today.
          </h1>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl">
            Former CLO (Franklin Templeton) · CCO (Guggenheim) · a16z portfolio companies
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
          <p className="text-xl leading-relaxed text-gray-700 max-w-2xl">
            I work with founders at regulatory inflection points—raising, scaling,
            entering new markets, or getting ahead of what's coming. Board seats,
            advisory roles, strategic counsel. If you're building at the frontier
            of finance, let's talk.
          </p>
        </div>
      </section>

      {/* Proof - Logos */}
      <section className="py-12 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-gray-400 text-sm font-medium mb-6">
            <span>Grayscale</span>
            <span>Robinhood</span>
            <span>Franklin Templeton</span>
            <span>Guggenheim</span>
            <span>World Gold Council</span>
          </div>
          <p className="text-center text-sm text-gray-400">
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
