"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const services = [
  {
    title: "Fractional GC",
    description:
      "Institutional-grade legal leadership without full-time overhead. I embed with your team to build compliance infrastructure that passes regulatory scrutiny and unlocks institutional capital.",
    idealFor: "Series A-C crypto/fintech companies",
  },
  {
    title: "Board & Governance",
    description:
      "Independent governance for companies bridging traditional finance and decentralized systems. I bring operator experience to board-level oversight—not just a name on letterhead.",
    idealFor: "NYDFS licensing, institutional adoption",
  },
  {
    title: "Strategic Advisory",
    description:
      "Targeted guidance on regulatory strategy, deal structuring, or crisis navigation. For moments when you need someone who has been in the room before.",
    idealFor: "M&A, enforcement response, fundraising",
  },
  {
    title: "Special Projects",
    description:
      "Cybersecurity incident response, cross-border M&A integration, RegTech development, and compliance program builds. Complex, high-stakes engagements with defined scope.",
    idealFor: "Incident response, program builds, RegTech",
  },
];

const notableWork = [
  {
    number: "01",
    title: "Cybersecurity Incident Response",
    description:
      "Led responses to cybersecurity incidents in digital assets, coordinating regulatory notifications, stakeholder communications, and remediation strategies under compressed timelines.",
  },
  {
    number: "02",
    title: "Cross-Border M&A Integration",
    description:
      "Guided cross-border M&A compliance integration for financial services and fintech companies, harmonizing regulatory frameworks across jurisdictions.",
  },
  {
    number: "03",
    title: "RegTech Platform Development",
    description:
      "Developed a patented RegTech platform for policy automation, streamlining compliance workflows and reducing manual oversight burden.",
  },
  {
    number: "04",
    title: "Stablecoin Issuer Governance",
    description:
      "Built compliance committee structure and governance framework for NYDFS-regulated stablecoin issuers, establishing institutional-grade oversight.",
  },
];

const industries = [
  "Stablecoins",
  "DeFi Protocols",
  "Digital Asset Custody",
  "Tokenization",
  "Fintech / WealthTech",
  "Institutional Crypto",
];

export default function WarburtonPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="bg-[#0A0A0A] text-[#FAFAFA] min-h-screen">
      <Nav active="warburton" alwaysVisible />

      {/* Hero */}
      <section className="pt-32 md:pt-48 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-6"
          >
            Governance & Compliance
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] mb-8"
          >
            Warburton Advisers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#A1A1AA] text-xl md:text-2xl leading-relaxed max-w-3xl mb-10"
          >
            We&apos;ve built operational foundations that let stablecoin issuers, fintech and digital finance innovators get licensed, raise institutional capital, and scale. Now we build them for others.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button
              onClick={() => setIsContactOpen(true)}
              className="btn-gold inline-flex items-center gap-3"
            >
              Schedule a Conversation
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 border-t border-[#262626] bg-[#141414]">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase mb-6"
          >
            Services
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl mb-12"
          >
            How we can work together
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.button
                key={service.title}
                onClick={() => setIsContactOpen(true)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-[#0A0A0A] border border-[#262626] hover:border-[#D4AF37] transition-colors block text-left"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl mb-4 group-hover:text-[#D4AF37] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#A1A1AA] leading-relaxed mb-4">
                  {service.description}
                </p>
                <p className="text-xs text-[#8B8B94] italic mb-6">
                  Ideal for: {service.idealFor}
                </p>
                <div className="flex items-center gap-2 text-[#D4AF37]">
                  <span className="text-sm">Discuss</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Work */}
      <section className="py-24 px-6 border-t border-[#262626] bg-[#141414]">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase mb-6"
          >
            Notable Engagements
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl mb-12"
          >
            Work that shaped my perspective
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {notableWork.map((work) => (
              <div key={work.number} className="flex gap-6">
                <span className="text-[#D4AF37] text-2xl font-[family-name:var(--font-playfair)] flex-shrink-0">
                  {work.number}
                </span>
                <div>
                  <h3 className="text-xl mb-2">{work.title}</h3>
                  <p className="text-[#A1A1AA] leading-relaxed">
                    {work.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-6 border-t border-[#262626]">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase mb-8"
          >
            Industries I Serve
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {industries.map((industry, index) => (
              <motion.span
                key={industry}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-sm text-[#A1A1AA] border border-[#262626] px-5 py-2.5 rounded-full hover:border-[#D4AF37] hover:text-[#FAFAFA] transition-colors"
              >
                {industry}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Insights */}
      <section className="py-24 px-6 border-t border-[#262626] bg-[#141414]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase mb-6"
          >
            Perspectives
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl mb-6"
          >
            Latest Insights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#A1A1AA] text-lg mb-10 max-w-xl mx-auto"
          >
            Perspectives on crypto regulation, fintech compliance, and the evolution of digital asset markets.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F5D77A] transition border border-[#D4AF37] hover:border-[#F5D77A] px-6 py-3 rounded"
            >
              <span>View All Insights</span>
              <svg
                className="w-4 h-4"
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
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-[#262626]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl mb-6"
          >
            Ready to discuss your{" "}
            <span className="italic text-[#D4AF37]">challenge?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#A1A1AA] text-lg mb-10 max-w-xl mx-auto"
          >
            Every engagement is tailored. Let&apos;s explore how Warburton
            Advisers can support your growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => setIsContactOpen(true)}
              className="btn-gold inline-flex items-center justify-center gap-3"
            >
              Schedule a Conversation
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 text-[#A1A1AA] hover:text-[#D4AF37] transition border border-[#262626] px-6 py-3 rounded"
            >
              Learn more about Beth
              <svg
                className="w-4 h-4"
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
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="py-16 px-6 border-t border-[#262626] bg-[#141414]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl mb-2">
              Warburton Advisers
            </h3>
            <p className="text-[#A1A1AA]">
              Governance and compliance for blockchain and financial services
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <button
              onClick={() => setIsContactOpen(true)}
              className="text-[#A1A1AA] hover:text-[#D4AF37] transition"
            >
              Contact Us
            </button>
            <a
              href="https://linkedin.com/in/bethhaddock"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A1A1AA] hover:text-[#D4AF37] transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Contact Form Modal */}
      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
