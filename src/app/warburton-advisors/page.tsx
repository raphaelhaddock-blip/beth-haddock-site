"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function WarburtonAdvisorsPage() {
  return (
    <div className="bg-[#0A0A0A] text-[#FAFAFA] min-h-screen">
      <Nav alwaysVisible />

      {/* Hero */}
      <section className="pt-32 md:pt-48 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-6"
          >
            Advisory Practice
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] mb-8"
          >
            Warburton Advisors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#A1A1AA] text-xl md:text-2xl leading-relaxed max-w-3xl"
          >
            Sustainable governance and compliance solutions for blockchain
            and financial services.
          </motion.p>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 border-t border-[#262626]">
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
                Founder
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl">
                Beth Haddock
              </h2>
            </div>
            <div className="space-y-6 text-[#A1A1AA] text-lg leading-relaxed">
              <p>
                Beth brings over 25 years of executive experience helping organizations
                navigate regulatory change, digital transformation, and cross-border growth.
              </p>
              <p>
                Her background includes positions at{" "}
                <span className="text-[#FAFAFA]">AXA</span>,{" "}
                <span className="text-[#FAFAFA]">Brown Brothers Harriman</span>, and{" "}
                <span className="text-[#FAFAFA]">Guggenheim Investments</span>.
              </p>
              <p>
                She currently serves as Chair of the Compliance Committee at{" "}
                <span className="text-[#FAFAFA]">GMO-Z.com Trust Company</span>{" "}
                (an NYDFS-regulated stablecoin issuer) and as Global Policy Lead
                at the <span className="text-[#FAFAFA]">Stablecoin Standard</span>.
              </p>
              <p className="italic text-[#71717A]">
                &ldquo;Governance is a strategic growth lever—helping clients scale
                responsibly while anticipating regulatory shifts and building
                stakeholder trust.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Notable Work */}
      <section className="py-24 px-6 border-t border-[#262626] bg-[#141414]">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase mb-12"
          >
            Notable Engagements
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex gap-6">
              <span className="text-[#D4AF37] text-2xl font-[family-name:var(--font-playfair)]">01</span>
              <div>
                <h3 className="text-xl mb-2">Cybersecurity Incident Response</h3>
                <p className="text-[#A1A1AA]">
                  Led responses to cybersecurity incidents in digital assets,
                  coordinating regulatory notifications and stakeholder communications.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[#D4AF37] text-2xl font-[family-name:var(--font-playfair)]">02</span>
              <div>
                <h3 className="text-xl mb-2">Cross-Border M&A Integration</h3>
                <p className="text-[#A1A1AA]">
                  Guided cross-border M&A compliance integration for financial
                  services and fintech companies.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[#D4AF37] text-2xl font-[family-name:var(--font-playfair)]">03</span>
              <div>
                <h3 className="text-xl mb-2">RegTech Platform Development</h3>
                <p className="text-[#A1A1AA]">
                  Developed a patented RegTech platform for policy automation,
                  streamlining compliance workflows.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 border-t border-[#262626]">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase mb-12"
          >
            Services
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-[#141414] border border-[#262626]"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl mb-4">
                Build & Audit Programs
              </h3>
              <p className="text-[#A1A1AA] leading-relaxed">
                Design and implement compliance programs from the ground up,
                or audit existing frameworks for gaps and improvements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 bg-[#141414] border border-[#262626]"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl mb-4">
                Compliance Outsourcing
              </h3>
              <p className="text-[#A1A1AA] leading-relaxed">
                Fractional compliance leadership for companies that need
                institutional-grade oversight without full-time overhead.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 bg-[#141414] border border-[#262626]"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl mb-4">
                Advisory & Governance
              </h3>
              <p className="text-[#A1A1AA] leading-relaxed">
                Strategic guidance on regulatory matters, board governance,
                and organizational design for growth.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <span className="text-sm text-[#71717A] border border-[#262626] px-4 py-2 rounded">
              Financial Services
            </span>
            <span className="text-sm text-[#71717A] border border-[#262626] px-4 py-2 rounded">
              Fintech
            </span>
            <span className="text-sm text-[#71717A] border border-[#262626] px-4 py-2 rounded">
              Blockchain
            </span>
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
            We tailor services to each client. Let&apos;s explore how
            Warburton Advisors can support your growth.
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
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 text-[#A1A1AA] hover:text-[#D4AF37] transition border border-[#262626] px-6 py-3 rounded"
            >
              Learn more about Beth
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 border-t border-[#262626] bg-[#141414]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl mb-2">
              Warburton Advisors
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
