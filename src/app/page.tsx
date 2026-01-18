"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const credentials = [
  { name: "Franklin Templeton", logo: "/logos/franklin-templeton.svg", width: 160, height: 40 },
  { name: "Guggenheim", logo: "/logos/guggenheim.svg", width: 140, height: 32 },
  { name: "T. Rowe Price", logo: "/logos/t-rowe-price.svg", width: 150, height: 42 },
  { name: "Brown Brothers Harriman", logo: "/logos/bbh.svg", width: 80, height: 40 },
  { name: "Grayscale", logo: "/logos/grayscale.svg", width: 130, height: 32 },
  { name: "Ondo", logo: "/logos/ondo.svg", width: 100, height: 32 },
  { name: "Balancer", logo: "/logos/balancer.svg", width: 120, height: 32 },
  { name: "Orca", logo: "/logos/orca.svg", width: 110, height: 38 },
];

const focusAreas = [
  {
    title: "Institutional Readiness",
    description:
      "Preparing digital asset companies for the scrutiny of pension funds, endowments, and asset managers.",
  },
  {
    title: "Regulatory Strategy",
    description:
      "Navigating SEC, NYDFS, and emerging global frameworks. Building compliance that anticipates rather than reacts.",
  },
  {
    title: "Board Governance",
    description:
      "Structuring governance for companies at the intersection of traditional finance and decentralized systems.",
  },
];

const selectedWork = [
  {
    number: "01",
    company: "AdvisorEngine",
    role: "Chief Legal Officer",
    slug: "advisorengine",
  },
  {
    number: "02",
    company: "GMO-Z Trust Company",
    role: "Board of Directors",
    slug: "gmo-z-trust",
  },
  {
    number: "03",
    company: "Grayscale Investments",
    role: "Strategic Advisor",
    slug: "grayscale",
  },
];

export default function Home() {
  return (
    <div className="bg-[#0A0A0A] text-[#FAFAFA] min-h-screen">
      <Nav />

      {/* Hero - Full Height */}
      <section className="min-h-screen flex flex-col justify-center px-6 relative">
        <div className="max-w-5xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-8"
          >
            Strategic Advisor
          </motion.p>

          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.1]"
            >
              Bridging
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.1] text-[#A1A1AA]"
            >
              Institutional Finance
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.1]"
            >
              and the
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.1] italic text-[#D4AF37]"
            >
              Digital Frontier.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-[#A1A1AA] text-xl md:text-2xl mt-12 max-w-2xl leading-relaxed"
          >
            Strategic counsel for boards and founders navigating the future of
            regulated markets.
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-[#A1A1AA]"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Credentials */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-16 px-6 border-t border-[#262626]"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase mb-10 text-center">
            Trusted By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 md:gap-x-12 lg:gap-x-16">
            {credentials.map((cred, index) => (
              <motion.div
                key={cred.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex-shrink-0"
              >
                <Image
                  src={cred.logo}
                  alt={cred.name}
                  width={cred.width}
                  height={cred.height}
                  className="h-10 md:h-14 w-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Bio */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-32 px-6"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-7xl md:text-8xl text-[#D4AF37] italic">
              25+
            </p>
            <p className="text-[#A1A1AA] text-lg mt-2">Years of Experience</p>
          </div>
          <div className="space-y-8">
            <p className="text-[#A1A1AA] text-xl leading-relaxed">
              Chief Legal Officer at{" "}
              <span className="text-[#FAFAFA]">AdvisorEngine</span>, a Franklin
              Templeton company. Board Director at{" "}
              <span className="text-[#FAFAFA]">GMO-Z Trust</span>, a
              NYDFS-regulated stablecoin issuer. Advisor to{" "}
              <span className="text-[#FAFAFA]">Balancer</span> and emerging
              protocols building the next generation of financial
              infrastructure.
            </p>
            <p className="text-[#A1A1AA] text-xl leading-relaxed">
              Twenty-five years navigating the space between what regulators
              require and what innovation demands. Former counsel at Guggenheim
              Partners, T. Rowe Price, and Brown Brothers Harriman. Former advisor to{" "}
              <span className="text-[#FAFAFA]">Grayscale</span>,{" "}
              <span className="text-[#FAFAFA]">Ondo</span>, and{" "}
              <span className="text-[#FAFAFA]">Orca</span>.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Focus Areas */}
      <section className="py-32 px-6 border-t border-[#262626]">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase mb-16"
          >
            Areas of Focus
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-hover p-8 bg-[#141414]"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl mb-4">
                  {area.title}
                </h3>
                <p className="text-[#A1A1AA] leading-relaxed">
                  {area.description}
                </p>
                <div className="mt-6 text-[#D4AF37]">
                  <svg
                    className="w-5 h-5"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-32 px-6 border-t border-[#262626]">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase mb-16"
          >
            Selected Work
          </motion.p>

          <div className="space-y-0">
            {selectedWork.map((work, index) => (
              <motion.div
                key={work.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/work/${work.slug}`}
                  className="group block py-8 border-b border-[#262626] hover:border-[#D4AF37] transition-colors"
                >
                  <div className="flex items-start gap-8">
                    <span className="number-accent text-2xl">
                      {work.number}
                    </span>
                    <div className="flex-1">
                      <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl group-hover:text-[#D4AF37] transition-colors">
                        {work.company}
                      </p>
                      <p className="text-[#A1A1AA] mt-1">{work.role}</p>
                    </div>
                    <svg
                      className="w-6 h-6 text-[#A1A1AA] group-hover:text-[#D4AF37] group-hover:translate-x-2 transition-all mt-2"
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-[#A1A1AA] hover:text-[#D4AF37] transition-colors"
            >
              View all work
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
      <section className="py-32 px-6 border-t border-[#262626]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl mb-8"
          >
            Ready to navigate the
            <br />
            <span className="italic text-[#D4AF37]">future of markets?</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
