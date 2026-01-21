"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Fractional GC",
    description: "Institutional-grade legal leadership without full-time overhead.",
    href: "/practice",
  },
  {
    title: "Board & Governance",
    description: "Independent governance for regulated digital asset companies.",
    href: "/practice",
  },
  {
    title: "Strategic Advisory",
    description: "Targeted guidance on regulatory strategy and deal structuring.",
    href: "/practice",
  },
  {
    title: "Special Projects",
    description: "Complex, high-stakes engagements with defined scope.",
    href: "/practice",
  },
];

const valueProps = [
  {
    title: "Regulatory Expertise",
    description: "25+ years navigating SEC, FINRA, NYDFS, and emerging crypto frameworks.",
  },
  {
    title: "Institutional Credibility",
    description: "Board seats and GC roles at regulated stablecoin issuers and asset managers.",
  },
  {
    title: "Operator Experience",
    description: "Built compliance programs that pass regulatory scrutiny and unlock institutional capital.",
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
            Sustainable governance and compliance solutions for blockchain and financial services.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="https://calendly.com/beth-haddock"
              target="_blank"
              rel="noopener noreferrer"
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
            </a>
          </motion.div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-24 px-6 border-t border-[#262626]">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase mb-6"
          >
            Why Warburton
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-[#141414] border border-[#262626]"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-4 text-[#FAFAFA]">
                  {prop.title}
                </h3>
                <p className="text-[#A1A1AA] leading-relaxed">
                  {prop.description}
                </p>
              </motion.div>
            ))}
          </div>
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
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="group block p-8 bg-[#0A0A0A] border border-[#262626] hover:border-[#D4AF37] transition-colors h-full"
                >
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl mb-4 group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#A1A1AA] leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#D4AF37]">
                    <span className="text-sm">Learn more</span>
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
                </Link>
              </motion.div>
            ))}
          </div>
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
            Industries We Serve
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

      {/* The Principal */}
      <section className="py-24 px-6 border-t border-[#262626] bg-[#141414]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-[1fr_2fr] gap-12 items-start"
          >
            <div>
              <p className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase mb-4">
                The Principal
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl">
                Beth Haddock
              </h2>
            </div>
            <div className="space-y-6 text-[#A1A1AA] text-lg leading-relaxed">
              <p>
                Beth brings{" "}
                <span className="text-[#FAFAFA]">25+ years of financial services experience</span>{" "}
                spanning compliance, legal, and governance roles at institutions including{" "}
                <span className="text-[#FAFAFA]">AXA</span>,{" "}
                <span className="text-[#FAFAFA]">Brown Brothers Harriman</span>, and{" "}
                <span className="text-[#FAFAFA]">Guggenheim Investments</span>.
              </p>
              <p>
                She currently serves as{" "}
                <span className="text-[#FAFAFA]">Chair of the Compliance Committee</span>{" "}
                at GMO-Z.com Trust Company, a NYDFS-regulated stablecoin issuer, and as{" "}
                <span className="text-[#FAFAFA]">Global Policy Lead</span>{" "}
                at the Stablecoin Standard.
              </p>
              <p>
                Her advisory experience spans institutional digital asset managers, DeFi protocols, and tokenization platforms navigating complex regulatory environments.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F5D77A] transition mt-2"
              >
                <span>Learn more about Beth</span>
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Insights */}
      <section className="py-24 px-6 border-t border-[#262626]">
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
      <section className="py-24 px-6 border-t border-[#262626] bg-[#141414]">
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
            Every engagement is tailored. Let&apos;s explore how Warburton Advisers can support your growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://calendly.com/beth-haddock"
              target="_blank"
              rel="noopener noreferrer"
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            <Link
              href="/practice"
              className="inline-flex items-center justify-center gap-2 text-[#A1A1AA] hover:text-[#D4AF37] transition border border-[#262626] px-6 py-3 rounded"
            >
              Learn about working with Beth
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
      <section className="py-16 px-6 border-t border-[#262626]">
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
            <a
              href="mailto:beth@warburtonadvisers.com"
              className="text-[#A1A1AA] hover:text-[#D4AF37] transition"
            >
              beth@warburtonadvisers.com
            </a>
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
    </div>
  );
}
