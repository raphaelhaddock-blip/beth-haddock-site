"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const credentials = [
  { name: "Franklin Templeton", logo: "/logos/franklin-templeton.svg", width: 160, height: 40, url: "https://www.franklintempleton.com" },
  { name: "Guggenheim", logo: "/logos/guggenheim.svg", width: 140, height: 32, url: "https://www.guggenheimpartners.com" },
  { name: "T. Rowe Price", logo: "/logos/t-rowe-price.svg", width: 150, height: 42, url: "https://www.troweprice.com" },
  { name: "Brown Brothers Harriman", logo: "/logos/bbh.svg", width: 80, height: 40, url: "https://www.bbh.com" },
  { name: "Grayscale", logo: "/logos/grayscale.svg", width: 130, height: 32, url: "https://www.grayscale.com" },
  { name: "Ondo", logo: "/logos/ondo.svg", width: 100, height: 32, url: "https://ondo.finance" },
  { name: "Balancer", logo: "/logos/balancer.svg", width: 120, height: 32, url: "https://balancer.fi" },
  { name: "Orca", logo: "/logos/orca.svg", width: 110, height: 38, url: "https://www.orca.so" },
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

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt: string;
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data.slice(0, 3));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="bg-[#0A0A0A] text-[#FAFAFA] min-h-screen">
      <Nav />

      {/* Hero - Split Screen with Large Portrait */}
      <section className="min-h-screen relative">
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center px-6 lg:px-12 xl:px-20 py-24 lg:py-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-8"
            >
              25+ Years in Financial Services
            </motion.p>

            <div className="space-y-1 md:space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal leading-[1.1]"
              >
                Bridging
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal leading-[1.1] text-[#A1A1AA]"
              >
                Institutional Finance
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal leading-[1.1]"
              >
                and the
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal leading-[1.1] italic text-[#D4AF37]"
              >
                Digital Frontier.
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-[#FAFAFA] text-lg md:text-xl mt-10 max-w-lg leading-relaxed font-medium"
            >
              Fractional General Counsel. Special Projects. Board Member.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-[#A1A1AA] text-lg md:text-xl mt-4 max-w-lg leading-relaxed"
            >
              I&apos;ve built the compliance infrastructure that passes regulatory scrutiny—for stablecoin issuers, DeFi protocols, and companies preparing for institutional capital. Now I build it for others.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10"
            >
              <a
                href="https://calendly.com/beth-haddock"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[#D4AF37] hover:text-[#F5D77A] transition-colors group"
              >
                <span className="text-sm tracking-wide">Start a conversation</span>
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
              </a>
            </motion.div>
          </div>

          {/* Right: Large Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0">
              <Image
                src="/images/beth/hero-bw.jpeg"
                alt="Beth Haddock"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Subtle gradient overlay on left edge for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent w-1/4" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-6 lg:left-12 xl:left-20"
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
              <motion.a
                key={cred.name}
                href={cred.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity"
              >
                <Image
                  src={cred.logo}
                  alt={cred.name}
                  width={cred.width}
                  height={cred.height}
                  className="h-10 md:h-14 w-auto"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Latest Insights */}
      <section className="py-32 px-6 border-t border-[#262626]">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase mb-6"
          >
            Latest Insights
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl mb-12"
          >
            Perspectives from the front lines—
            <span className="italic text-[#D4AF37]">where I&apos;ve built and operated.</span>
          </motion.h2>

          {loading ? (
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="py-8 border-b border-[#262626] animate-pulse">
                  <div className="h-6 bg-[#262626] rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-[#262626] rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : posts.length > 0 ? (
            <div className="space-y-0">
              {posts.map((post, index) => (
                <motion.div
                  key={post._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/insights/${post.slug.current}`}
                    className="group block py-8 border-b border-[#262626] hover:border-[#D4AF37] transition-colors"
                  >
                    <div className="flex items-start justify-between gap-8">
                      <div className="flex-1">
                        <p className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl group-hover:text-[#D4AF37] transition-colors">
                          {post.title}
                        </p>
                        {post.excerpt && (
                          <p className="text-[#A1A1AA] mt-2 line-clamp-2">
                            {post.excerpt}
                          </p>
                        )}
                        <p className="text-[#71717A] text-sm mt-3">
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
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
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="py-12 text-center"
            >
              <p className="text-[#A1A1AA] text-lg mb-4">
                Insights coming soon.
              </p>
              <p className="text-[#71717A]">
                Follow me on LinkedIn for perspectives from 25+ years in the field.
              </p>
            </motion.div>
          )}

          {posts.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-[#A1A1AA] hover:text-[#D4AF37] transition-colors"
              >
                View all insights
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
          )}
        </div>
      </section>

      {/* Speaking - One Powerful Image */}
      <section className="py-32 px-6 border-t border-[#262626]">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase mb-6"
          >
            On the Stage
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* The photo - she's commanding the room */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[3/4] overflow-hidden rounded-lg"
            >
              <Image
                src="/images/beth/speaking-dc-summit-1.png"
                alt="Beth Haddock speaking at DC Blockchain Summit"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 via-transparent to-transparent" />
            </motion.div>

            {/* The message */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
                Building infrastructure isn&apos;t just boardroom work.
                <span className="text-[#D4AF37] italic"> It&apos;s sharing what I&apos;ve learned.</span>
              </h2>
              <p className="text-[#A1A1AA] text-lg leading-relaxed mb-6">
                Regular speaker at DC Blockchain Summit, Stablecon, and industry conferences on compliance, governance, and regulatory strategy.
              </p>
              <p className="text-[#71717A] text-sm">
                DC Blockchain Summit 2025
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-32 px-6 border-t border-[#262626]"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
            <div>
              <p className="font-[family-name:var(--font-playfair)] text-7xl md:text-8xl text-[#D4AF37] italic">
                25+
              </p>
              <p className="text-[#A1A1AA] text-lg mt-2">Years Shaping the Industry</p>
            </div>
            <div className="space-y-8">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl leading-tight">
                I&apos;ve been in the room
                <span className="text-[#D4AF37] italic"> when it mattered.</span>
              </h2>
              <p className="text-[#A1A1AA] text-xl leading-relaxed">
                Board seats at regulated stablecoin issuers. GC roles at companies raising institutional capital.
                Advisory positions through enforcement actions and IPO preparations.
                <span className="text-[#FAFAFA]"> I&apos;ve built the infrastructure that survives scrutiny.</span>
              </p>
              <p className="text-[#A1A1AA] text-xl leading-relaxed">
                When you work with me, you get someone who has done the work—not just studied it.
                <span className="text-[#FAFAFA]"> That&apos;s the difference between advice and execution.</span>
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* How I Work */}
      <section id="how-i-work" className="py-32 px-6 border-t border-[#262626]">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase mb-6"
          >
            How I Work
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#A1A1AA] text-xl mb-16 max-w-2xl"
          >
            I take on a limited number of engagements each year to ensure deep partnership with every client.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Fractional GC Card */}
            <motion.a
              href="https://calendly.com/beth-haddock?type=fractional-gc"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="group card-hover p-6 bg-[#141414] border border-[#262626] hover:border-[#D4AF37] transition-colors block"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-3 group-hover:text-[#D4AF37] transition-colors">
                Fractional GC
              </h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed mb-3">
                Institutional-grade legal leadership without full-time overhead. I embed with your team to build compliance infrastructure.
              </p>
              <p className="text-xs text-[#71717A] italic mb-4">
                Series A-C crypto/fintech companies
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

            {/* Board Director Card */}
            <motion.a
              href="https://calendly.com/beth-haddock?type=board"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group card-hover p-6 bg-[#141414] border border-[#262626] hover:border-[#D4AF37] transition-colors block"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-3 group-hover:text-[#D4AF37] transition-colors">
                Board Director
              </h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed mb-3">
                Independent governance for companies bridging traditional finance and decentralized systems.
              </p>
              <p className="text-xs text-[#71717A] italic mb-4">
                NYDFS licensing, IPO readiness
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

            {/* Strategic Advisor Card */}
            <motion.a
              href="https://calendly.com/beth-haddock?type=advisory"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group card-hover p-6 bg-[#141414] border border-[#262626] hover:border-[#D4AF37] transition-colors block"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-3 group-hover:text-[#D4AF37] transition-colors">
                Strategic Advisor
              </h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed mb-3">
                Targeted guidance on regulatory strategy, deal structuring, or crisis navigation.
              </p>
              <p className="text-xs text-[#71717A] italic mb-4">
                M&A, enforcement response
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

            {/* Special Projects Card */}
            <motion.a
              href="https://calendly.com/beth-haddock?type=special-projects"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group card-hover p-6 bg-[#141414] border border-[#262626] hover:border-[#D4AF37] transition-colors block"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-3 group-hover:text-[#D4AF37] transition-colors">
                Special Projects
              </h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed mb-3">
                Cybersecurity incident response, cross-border M&A integration, RegTech development, and compliance program builds.
              </p>
              <p className="text-xs text-[#71717A] italic mb-4">
                Complex, high-stakes engagements
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
          </div>

          {/* Qualification Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#A1A1AA] text-lg mt-16 max-w-3xl mx-auto text-center leading-relaxed"
          >
            I work with founders, boards, and executives building infrastructure for institutional digital assets.
            If you&apos;re navigating <span className="text-[#FAFAFA]">SEC, NYDFS, or emerging AI/crypto regulatory frameworks</span>—we should talk.
          </motion.p>
        </div>
      </section>

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

      {/* CTA */}
      <section className="py-32 px-6 border-t border-[#262626]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            Ready to navigate the
            <br />
            <span className="italic text-[#D4AF37]">future of regulated markets?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#A1A1AA] text-lg mb-10 max-w-xl mx-auto"
          >
            Whether you need fractional legal leadership, board governance, or strategic advice—let&apos;s discuss your challenge.
          </motion.p>

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
              Discuss Your Challenge
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

