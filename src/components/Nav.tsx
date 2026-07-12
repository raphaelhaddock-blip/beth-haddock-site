"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "./ContactForm";

type NavProps = {
  active?: "about" | "warburton" | "guides" | "insights";
  alwaysVisible?: boolean;
};

export default function Nav({ active, alwaysVisible = false }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(alwaysVisible);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    if (alwaysVisible) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [alwaysVisible]);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-lg border-b border-[#262626] px-6 py-4"
          >
            <div className="max-w-5xl mx-auto flex justify-between items-center">
              {active === "warburton" ? (
                <div className="flex items-baseline gap-2">
                  <Link
                    href="/warburton"
                    className="font-[family-name:var(--font-playfair)] text-lg font-normal text-[#FAFAFA] hover:text-[#D4AF37] transition-colors"
                  >
                    Warburton Advisers
                  </Link>
                  <Link
                    href="/"
                    className="text-xs text-[#A1A1AA] hover:text-[#D4AF37] transition-colors"
                  >
                    by Beth Haddock
                  </Link>
                </div>
              ) : (
                <Link
                  href="/"
                  className="font-[family-name:var(--font-playfair)] text-lg font-normal text-[#FAFAFA] hover:text-[#D4AF37] transition-colors"
                >
                  Beth Haddock
                </Link>
              )}

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-8">
                <Link
                  href="/about"
                  className={`text-sm transition-colors link-gold ${
                    active === "about"
                      ? "text-[#D4AF37]"
                      : "text-[#A1A1AA] hover:text-[#FAFAFA]"
                  }`}
                >
                  About
                </Link>
                <Link
                  href="/warburton"
                  className={`text-sm transition-colors link-gold ${
                    active === "warburton"
                      ? "text-[#D4AF37]"
                      : "text-[#A1A1AA] hover:text-[#FAFAFA]"
                  }`}
                >
                  Warburton
                </Link>
                <Link
                  href="/guides"
                  className={`text-sm transition-colors link-gold ${
                    active === "guides"
                      ? "text-[#D4AF37]"
                      : "text-[#A1A1AA] hover:text-[#FAFAFA]"
                  }`}
                >
                  Guides
                </Link>
                <Link
                  href="/insights"
                  className={`text-sm transition-colors link-gold ${
                    active === "insights"
                      ? "text-[#D4AF37]"
                      : "text-[#A1A1AA] hover:text-[#FAFAFA]"
                  }`}
                >
                  Insights
                </Link>
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="text-sm bg-[#D4AF37] text-[#0A0A0A] px-4 py-2 hover:bg-[#F5D77A] transition-colors"
                >
                  Contact
                </button>
              </div>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 -mr-2"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6 text-[#FAFAFA]"
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
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
              >
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-[family-name:var(--font-playfair)] transition-colors ${
                    active === "about"
                      ? "text-[#D4AF37]"
                      : "text-[#FAFAFA] hover:text-[#D4AF37]"
                  }`}
                >
                  About
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  href="/warburton"
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-[family-name:var(--font-playfair)] transition-colors ${
                    active === "warburton"
                      ? "text-[#D4AF37]"
                      : "text-[#FAFAFA] hover:text-[#D4AF37]"
                  }`}
                >
                  Warburton
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <Link
                  href="/guides"
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-[family-name:var(--font-playfair)] transition-colors ${
                    active === "guides"
                      ? "text-[#D4AF37]"
                      : "text-[#FAFAFA] hover:text-[#D4AF37]"
                  }`}
                >
                  Guides
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  href="/insights"
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-[family-name:var(--font-playfair)] transition-colors ${
                    active === "insights"
                      ? "text-[#D4AF37]"
                      : "text-[#FAFAFA] hover:text-[#D4AF37]"
                  }`}
                >
                  Insights
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsContactOpen(true);
                  }}
                  className="text-xl bg-[#D4AF37] text-[#0A0A0A] px-6 py-3 hover:bg-[#F5D77A] transition-colors"
                >
                  Contact
                </button>
              </motion.div>
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-6 p-2"
              aria-label="Close menu"
            >
              <svg
                className="w-8 h-8 text-[#FAFAFA]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Form Modal */}
      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
