"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { caseStudies, getCaseStudiesByCategory } from "@/data/caseStudies";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function WorkPage() {
  const primaryRoles = getCaseStudiesByCategory("Primary");
  const boardRoles = getCaseStudiesByCategory("Board");
  const advisoryRoles = getCaseStudiesByCategory("Advisory");

  const WorkItem = ({ study, index }: { study: typeof caseStudies[0]; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        href={`/work/${study.slug}`}
        className="group block py-6 border-b border-[#262626] hover:border-[#D4AF37] transition-colors"
      >
        <p className="font-[family-name:var(--font-playfair)] text-2xl text-[#FAFAFA] group-hover:text-[#D4AF37] transition">
          {study.company}
        </p>
        <p className="text-[#A1A1AA] mt-1">{study.role}</p>
        <p className="text-[#A1A1AA] mt-3 leading-relaxed">
          {study.headline}
        </p>
      </Link>
    </motion.div>
  );

  return (
    <div className="bg-[#0A0A0A] text-[#FAFAFA] min-h-screen">
      <Nav active="work" alwaysVisible />

      {/* Header */}
      <section className="pt-32 md:pt-48 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase mb-4"
          >
            Case Studies
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight"
          >
            Selected Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#A1A1AA] text-xl leading-relaxed max-w-2xl"
          >
            From leading legal at Franklin Templeton-backed fintech to advising
            protocols defining DeFi.
          </motion.p>
        </div>
      </section>

      {/* Work by Category */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto space-y-24">
          {/* Primary Role */}
          {primaryRoles.length > 0 && (
            <div>
              <p className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase mb-8">
                Primary Role
              </p>
              <div className="space-y-0">
                {primaryRoles.map((study, index) => (
                  <WorkItem key={study.slug} study={study} index={index} />
                ))}
              </div>
            </div>
          )}

          {/* Board */}
          {boardRoles.length > 0 && (
            <div>
              <p className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase mb-8">
                Board
              </p>
              <div className="space-y-0">
                {boardRoles.map((study, index) => (
                  <WorkItem key={study.slug} study={study} index={index} />
                ))}
              </div>
            </div>
          )}

          {/* Advisory */}
          {advisoryRoles.length > 0 && (
            <div>
              <p className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase mb-8">
                Advisory
              </p>
              <div className="space-y-0">
                {advisoryRoles.map((study, index) => (
                  <WorkItem key={study.slug} study={study} index={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
