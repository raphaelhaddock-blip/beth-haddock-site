"use client";

import { useState } from "react";
import Link from "next/link";

type NavProps = {
  active?: "work" | "guides" | "insights";
};

export default function Nav({ active }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#FAFAF9]/95 backdrop-blur border-b border-[#E7E5E4] px-6 py-4">
      <div className="max-w-3xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#1C1917]"
        >
          Beth Haddock
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/work"
            className={`text-sm transition ${
              active === "work"
                ? "text-[#1C1917]"
                : "text-[#57534E] hover:text-[#1C1917]"
            }`}
          >
            Work
          </Link>
          <Link
            href="/guides"
            className={`text-sm transition ${
              active === "guides"
                ? "text-[#1C1917]"
                : "text-[#57534E] hover:text-[#1C1917]"
            }`}
          >
            Guides
          </Link>
          <Link
            href="/insights"
            className={`text-sm transition ${
              active === "insights"
                ? "text-[#1C1917]"
                : "text-[#57534E] hover:text-[#1C1917]"
            }`}
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

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-[#1C1917]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-[#E7E5E4] pt-4">
          <div className="flex flex-col gap-4">
            <Link
              href="/work"
              onClick={() => setIsOpen(false)}
              className={`text-base py-2 transition ${
                active === "work"
                  ? "text-[#1C1917]"
                  : "text-[#57534E] hover:text-[#1C1917]"
              }`}
            >
              Work
            </Link>
            <Link
              href="/guides"
              onClick={() => setIsOpen(false)}
              className={`text-base py-2 transition ${
                active === "guides"
                  ? "text-[#1C1917]"
                  : "text-[#57534E] hover:text-[#1C1917]"
              }`}
            >
              Guides
            </Link>
            <Link
              href="/insights"
              onClick={() => setIsOpen(false)}
              className={`text-base py-2 transition ${
                active === "insights"
                  ? "text-[#1C1917]"
                  : "text-[#57534E] hover:text-[#1C1917]"
              }`}
            >
              Insights
            </Link>
            <a
              href="https://calendly.com/beth-haddock"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base py-2 text-[#57534E] hover:text-[#1C1917] transition"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
