"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { guides } from "@/data/guides";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function GuidesPage() {
  return (
    <div className="bg-[#0A0A0A] text-[#FAFAFA] min-h-screen">
      <Nav active="guides" alwaysVisible />

      {/* Header */}
      <section className="pt-32 md:pt-48 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase mb-4"
          >
            Resources
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight"
          >
            Industry Guides
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#A1A1AA] text-xl leading-relaxed max-w-2xl"
          >
            In-depth guides on the topics that matter for institutional investors
            and traditional finance professionals entering the digital asset space.
          </motion.p>
        </div>
      </section>

      {/* Guide List */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-0">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/guides/${guide.slug}`}
                  className="group block py-8 border-b border-[#262626] hover:border-[#D4AF37] transition-colors"
                >
                  <div className="flex items-start justify-between gap-8">
                    <div className="flex-1">
                      <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl mb-3 group-hover:text-[#D4AF37] transition">
                        {guide.title}
                      </h2>
                      <p className="text-[#A1A1AA] mb-4 leading-relaxed">
                        {guide.subtitle}
                      </p>
                      <p className="text-sm text-[#A1A1AA]">
                        {guide.readTime} · Updated {guide.lastUpdated}
                      </p>
                    </div>
                    <svg
                      className="w-6 h-6 text-[#A1A1AA] group-hover:text-[#D4AF37] group-hover:translate-x-2 transition-all mt-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
