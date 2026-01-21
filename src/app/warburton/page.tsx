"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Fractional GC",
    description:
      "Institutional-grade legal leadership without full-time overhead. I embed with your team to build compliance infrastructure that passes regulatory scrutiny and unlocks institutional capital.",
    idealFor: "Series A-C crypto/fintech companies",
    calendlyType: "fractional-gc",
  },
  {
    title: "Board & Governance",
    description:
      "Independent governance for companies bridging traditional finance and decentralized systems. I bring operator experience to board-level oversight—not just a name on letterhead.",
    idealFor: "NYDFS licensing, IPO readiness, institutional adoption",
    calendlyType: "board",
  },
  {
    title: "Strategic Advisory",
    description:
      "Targeted guidance on regulatory strategy, deal structuring, or crisis navigation. For moments when you need someone who has been in the room before.",
    idealFor: "M&A, enforcement response, fundraising",
    calendlyType: "advisory",
  },
  {
    title: "Special Projects",
    description:
      "Cybersecurity incident response, cross-border M&A integration, RegTech development, and compliance program builds. Complex, high-stakes engagements with defined scope.",
    idealFor: "Incident response, program builds, RegTech",
    calendlyType: "special-projects",
  },
];

const team = [
  {
    name: "Mary Toumpas",
    title: "Compliance Advisor",
    bio: "Seasoned chief compliance officer providing practical, risk-managed guidance. Mary brings decades of experience building and running compliance programs at scale.",
  },
  {
    name: "Mark Roszak",
    title: "Legal Partner",
    bio: "Specializes in structuring and corporate advisory work. Mark handles complex transaction structures and corporate governance matters.",
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

      {/* Philosophy */}
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
                How I Work
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl">
                Deep Partnership,
                <br />
                <span className="italic text-[#D4AF37]">Not Surface Advice</span>
              </h2>
            </div>
            <div className="space-y-6 text-[#A1A1AA] text-lg leading-relaxed">
              <p>
                I take on a{" "}
                <span className="text-[#FAFAFA]">limited number of engagements</span>{" "}
                each year. This isn&apos;t scarcity marketing—it&apos;s how I ensure every
                client gets the depth of attention these challenges require.
              </p>
              <p>
                My background includes 25+ years at{" "}
                <span className="text-[#FAFAFA]">AXA</span>,{" "}
                <span className="text-[#FAFAFA]">Brown Brothers Harriman</span>, and{" "}
                <span className="text-[#FAFAFA]">Guggenheim Investments</span>—plus
                board and advisory roles at regulated stablecoin issuers, DeFi
                protocols, and institutional digital asset companies.
              </p>
              <p>
                I currently serve as Chair of the Compliance Committee at{" "}
                <span className="text-[#FAFAFA]">GMO-Z.com Trust Company</span> and
                as Global Policy Lead at the{" "}
                <span className="text-[#FAFAFA]">Stablecoin Standard</span>.
              </p>
              <p className="italic text-[#71717A] border-l-2 border-[#D4AF37] pl-6">
                &ldquo;Governance isn&apos;t a checkbox—it&apos;s a strategic growth lever.
                Done right, it helps you scale responsibly while anticipating
                regulatory shifts and building stakeholder trust.&rdquo;
              </p>
            </div>
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
              <motion.a
                key={service.title}
                href={`https://calendly.com/beth-haddock?type=${service.calendlyType}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-[#0A0A0A] border border-[#262626] hover:border-[#D4AF37] transition-colors block"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl mb-4 group-hover:text-[#D4AF37] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#A1A1AA] leading-relaxed mb-4">
                  {service.description}
                </p>
                <p className="text-xs text-[#71717A] italic mb-6">
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
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 border-t border-[#262626]">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase mb-6"
          >
            The Team
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl mb-4"
          >
            I work with trusted specialists
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#A1A1AA] text-lg mb-12 max-w-2xl"
          >
            For certain engagements, I bring in experts who complement my
            background. Together, we cover the full spectrum of governance,
            compliance, and legal needs.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-[#141414] border border-[#262626]"
              >
                <div className="w-16 h-16 bg-[#262626] rounded-full mb-6 flex items-center justify-center">
                  <span className="text-2xl text-[#D4AF37] font-[family-name:var(--font-playfair)]">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-1">
                  {member.name}
                </h3>
                <p className="text-[#D4AF37] text-sm mb-4">{member.title}</p>
                <p className="text-[#A1A1AA] leading-relaxed">{member.bio}</p>
              </motion.div>
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
