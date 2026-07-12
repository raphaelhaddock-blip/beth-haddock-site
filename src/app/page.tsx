"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { track } from "@vercel/analytics";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";


const credentials = [
  { name: "Franklin Templeton", logo: "/logos/franklin-templeton.svg", width: 160, height: 40, url: "https://www.franklintempleton.com" },
  { name: "Guggenheim", logo: "/logos/guggenheim.svg", width: 180, height: 36, url: "https://www.guggenheimpartners.com" },
  { name: "T. Rowe Price", logo: "/logos/t-rowe-price.svg", width: 180, height: 44, url: "https://www.troweprice.com" },
  { name: "Brown Brothers Harriman", logo: "/logos/bbh.svg", width: 80, height: 40, url: "https://www.bbh.com" },
  { name: "Grayscale", logo: "/logos/grayscale.svg", width: 180, height: 32, url: "https://www.grayscale.com" },
  { name: "a16z", logo: "/logos/a16z.svg", width: 100, height: 32, url: "https://a16z.com" },
  { name: "Ondo", logo: "/logos/ondo.svg", width: 100, height: 32, url: "https://ondo.finance" },
  { name: "Balancer", logo: "/logos/balancer.svg", width: 160, height: 30, url: "https://balancer.fi" },
  { name: "Orca", logo: "/logos/orca.svg", width: 100, height: 32, url: "https://www.orca.so" },
];

const focusAreas = [
  {
    title: "Institutional Readiness",
    description:
      "Preparing FinTech and digital asset innovators for the scrutiny of pension funds, endowments, and asset managers.",
  },
  {
    title: "Regulatory Strategy",
    description:
      "Navigating SEC, OCC, FINRA, NYDFS, and global frameworks. Building compliance that anticipates rather than reacts.",
  },
  {
    title: "Board Governance",
    description:
      "Leading governance for companies at the intersection of traditional finance and technology.",
  },
];

const publications = [
  // 2026
  {
    outlet: "CoinDesk",
    title: "The Crypto Due Diligence Questions You Forgot to Ask",
    date: "June 2026",
    url: "https://www.coindesk.com/coindesk-indices/2026/06/03/crypto-for-advisors-the-crypto-due-diligence-questions-you-forgot-to-ask",
  },
  {
    outlet: "AdvisorEngine",
    title: "AI Governance Is Not Just an IT Problem",
    date: "May 2026",
    url: "https://www.advisorengine.com/action-magazine/articles/ai-governance-is-not-just-an-it-problem",
  },
  {
    outlet: "CCN",
    title: "Stablecoins Enter a New Era: Beth Haddock on DeFi Safety Standards",
    date: "April 2026",
    url: "https://www.ccn.com/education/crypto/stablecoins-new-era-beth-haddock-defi-safety-standards/",
  },
  // 2025
  {
    outlet: "Decrypt",
    title: "StableCheck: An Independent Stablecoin Evaluation Framework",
    date: "October 2025",
    url: "https://decrypt.co/346337/stablecoin-standard-establishes-stablecheck-an-independent-stablecoin-evaluation-framework",
  },
  {
    outlet: "Bell Curve",
    title: "Live At Digital Asset Summit 2025",
    date: "October 2025",
    url: "https://x.com/i/broadcasts/1yoJMPYjpEwGQ",
  },
  {
    outlet: "CoinDesk",
    title: "Crypto Week: What Does it Mean for Advisors?",
    date: "July 2025",
    url: "https://www.coindesk.com/coindesk-indices/2025/07/16/crypto-for-advisors-crypto-week-what-does-it-mean-for-advisors",
  },
  {
    outlet: "Brew Markets",
    title: "The Future of Crypto Regulation",
    date: "July 2025",
    url: "https://www.brewmarkets.com/stories/2025/07/01/crypto-regulation-stablecoin-law",
  },
  {
    outlet: "Stablecoin Standard",
    title: "Positioning for What's Next: The GENIUS Act and the Future of Stablecoins",
    date: "June 2025",
    url: "https://www.stablecoinstandard.com/thought-articles/positioning-for-whats-next-the-genius-act-and-the-future-of-stablecoins",
  },
  {
    outlet: "CQ News",
    title: "Backers See Stablecoins Locking in US Role in Global Commerce",
    date: "March 2025",
    url: "https://warburtonadvisers.com/wp-content/uploads/2025/03/Congressional-Quarterly-News-March-24-2025.pdf",
  },
  {
    outlet: "CoinDesk",
    title: "A New Golden Age For Crypto Assets?",
    date: "March 2025",
    url: "https://www.coindesk.com/coindesk-indices/2025/03/19/crypto-for-advisors-a-new-golden-age-for-crypto-assets",
  },
  {
    outlet: "Crypto Prime",
    title: "Stablecoin Fundamentals and Regulation",
    date: "February 2025",
    url: "https://cryptoprimepodcast.com/warburtons-beth-haddock-on-stablecoin-fundamentals-and-regulation/",
  },
  {
    outlet: "CoinDesk",
    title: "Trump: What's Changed for Crypto?",
    date: "February 2025",
    url: "https://www.coindesk.com/coindesk-indices/2025/02/19/crypto-for-advisors-trump-what-s-changed-for-crypto",
  },
  // 2024
  {
    outlet: "Stern Chats",
    title: "Compliance Career Opportunities",
    date: "October 2024",
    url: "https://open.spotify.com/episode/4Lr4KXlvw4avI1ACMuDvpl",
  },
  {
    outlet: "CoinDesk",
    title: "Planning for Inevitable Regulatory Change",
    date: "October 2024",
    url: "https://www.coindesk.com/business/2024/10/16/planning-for-inevitable-regulatory-change",
  },
  {
    outlet: "Blockchain Reporter",
    title: "Stablecoin Standards and Their Role in Shaping the Global Financial Ecosystem",
    date: "September 2024",
    url: "https://blockchainreporter.net/beth-haddock-on-stablecoin-standards-and-their-role-in-shaping-the-global-financial-ecosystem/",
  },
  {
    outlet: "Bitcoin World",
    title: "An Interview With Stablecoin Standard",
    date: "September 2024",
    url: "https://bitcoinworld.co.in/an-interview-with-stablecoin-standard/",
  },
  {
    outlet: "CoinDesk",
    title: "Crypto and Compliance",
    date: "July 2024",
    url: "https://www.coindesk.com/opinion/2024/07/11/crypto-for-advisors-crypto-and-compliance/",
  },
  {
    outlet: "Morningstar",
    title: "How to Integrate AI to Your Practice",
    date: "June 2024",
    url: "https://magazine.morningstar.com/preview/q2-2024",
  },
  {
    outlet: "Financial Planning",
    title: "3 AI Insights for Advisory Firms",
    date: "May 2024",
    url: "https://www.financial-planning.com/opinion/3-need-to-know-ai-insights-for-advisory-firms",
  },
  // 2023
  {
    outlet: "Nasdaq",
    title: "Crypto Had Reputational Issues. 2024 Will Change That",
    date: "December 2023",
    url: "https://www.nasdaq.com/articles/crypto-had-reputational-issues-this-year.-2024-will-change-that",
  },
  {
    outlet: "CoinDesk",
    title: "Crypto Must Take Fraud Prevention Seriously",
    date: "July 2023",
    url: "https://www.coindesk.com/policy/2023/07/26/crypto-must-take-fraud-prevention-seriously-crypto-long-short",
  },
  // 2022
  {
    outlet: "The Defiant",
    title: "DeFi Debates DAO Governance After Vitalik's Critique",
    date: "December 2022",
    url: "https://thedefiant.io/buterin-criticizes-governance-tokens",
  },
  {
    outlet: "Nasdaq",
    title: "What if Crypto Was The Answer to Our Fraud Problem?",
    date: "May 2022",
    url: "https://www.nasdaq.com/articles/what-if-crypto-was-the-answer-to-our-fraud-problem",
  },
  {
    outlet: "Forbes",
    title: "Is The Decentralized Crypto Case In Trouble?",
    date: "March 2022",
    url: "https://www.forbes.com/sites/kenrapoza/2022/03/08/is-the-decentralized-crypto-case-in-trouble/",
  },
  {
    outlet: "NSCP Currents",
    title: "Kick off 2022 with the NSCP Blockchain & FinTech Roundtable",
    date: "January 2022",
    url: "https://www.linkedin.com/posts/national-society-of-compliance-professionals_kick-off-2022-with-thenscp-blockchain-activity-6887028940393771008-M9K-",
  },
  // 2021
  {
    outlet: "AdvisorEngine",
    title: "What Advisors Need to Know About the SEC, Robo-Advisors and Compliance",
    date: "December 2021",
    url: "https://www.advisorengine.com/blog-feed/what-advisors-need-to-know-about-the-sec-robo-advisors-and-compliance",
  },
  {
    outlet: "NSCP Currents",
    title: "Compliance in the Crypto-Sphere: A Call to Action",
    date: "October 2021",
    url: "https://warburtonadvisers.com/nscp-currents-october-2021/",
  },
  {
    outlet: "NSCP Currents",
    title: "What is the Role of Compliance in ESG Investing?",
    date: "July 2021",
    url: "https://warburtonadvisers.com/wp-content/uploads/2021/08/NSCP-Currents-July-2021-REPRINT-Haddock-1.pdf",
  },
  {
    outlet: "AdvisorEngine",
    title: "Marketing and Sales Compliance Tips for Financial Advisors",
    date: "January 2021",
    url: "https://www.advisorengine.com/blog-feed/marketing-and-sales-compliance-tips-for-financial-advisors-in-2021",
  },
  // 2020
  {
    outlet: "NSCP Currents",
    title: "An Interview About Mentorships & Compliance Decisions",
    date: "August 2020",
    url: "http://warburtonadvisers.com/wp-content/uploads/2020/10/NSCP-Currents-August-2020-REPRINT-Haddock-Ellis.pdf",
  },
  {
    outlet: "NSCP Currents",
    title: "A Case for a Different Type of Computer Code: A Code of Data Ethics",
    date: "May 2020",
    url: "https://warburtonadvisers.com/a-case-for-a-different-type-of-computer-code-a-code-of-data-ethics/",
  },
  {
    outlet: "Pillsbury Law",
    title: "Data Governance and Ethics Best Practices Webinar",
    date: "February 2020",
    url: "https://notifications.pillsburylaw.com/14/2845/compose-email/data-governance-webinar---invite--co-sponsors-.asp",
  },
  // 2019
  {
    outlet: "AdvisorEngine",
    title: "Compliance for Financial Advisors: A Regulatory Year in Review",
    date: "December 2019",
    url: "https://www.advisorengine.com/blog/a-regulatory-year-in-review",
  },
  {
    outlet: "AdvisorEngine",
    title: "Best Interests for Advisors: Your Compliance Program's Reality Check",
    date: "August 2019",
    url: "https://www.advisorengine.com/blog/financial-advisors-compliance-reality-check",
  },
  {
    outlet: "NYU School of Law",
    title: "Why Sustainable Governance Enables Regulation Best Interest Compliance",
    date: "August 2019",
    url: "https://wp.nyu.edu/compliance_enforcement/2019/08/21/why-sustainable-governance-enables-regulation-best-interest-compliance/",
  },
  {
    outlet: "ThinkAdvisor",
    title: "The Advisor Compliance Issue That's Bigger Than Reg BI",
    date: "June 2019",
    url: "https://www.thinkadvisor.com/2019/06/21/the-advisor-compliance-issue-thats-bigger-than-reg-bi/",
  },
  // 2018
  {
    outlet: "Hedge Fund Law Report",
    title: "What Fund Managers Need to Know About Corporate Access",
    date: "November 2018",
    url: "https://www.hflawreport.com/2638276/what-fund-managers-need-to-know-about-corporate-access-the-risks-and-rewards-of-speaking-directly-with-issuer-management-partone-of-three.thtml",
  },
  {
    outlet: "Fordham Environmental Law Review",
    title: "Why Corporate Attorneys Should Consider ESG and Sustainability Principles",
    date: "November 2018",
    url: "https://ir.lawnet.fordham.edu/elr/vol30/iss1/1/",
  },
  {
    outlet: "SCCE Podcast",
    title: "Beth Haddock on Insider Trading",
    date: "October 2018",
    url: "http://complianceandethics.org/beth-haddock-on-insider-trading-podcast/",
  },
  {
    outlet: "NSCP Currents",
    title: "Why Compliance Officers Should Consider ESG and Sustainability Principles",
    date: "July 2018",
    url: "https://warburtonadvisers.com/wp-content/uploads/2018/08/02-nscp-currents-july-2018-reprint-haddock.pdf",
  },
  {
    outlet: "Newsmax",
    title: "Did Opening That Email Place Your Business in Legal Hot Water?",
    date: "May 2018",
    url: "https://www.newsmax.com/finance/streettalk/email-open-legal-hot/2018/05/17/id/861058/",
  },
  {
    outlet: "Newsmax",
    title: "3 Ways Facebook's Data Breach Provides Safety Lessons",
    date: "May 2018",
    url: "https://www.newsmax.com/finance/personal-finance/facebook-data-breach-safety/2018/05/01/id/857733/",
  },
];

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showAllPublications, setShowAllPublications] = useState(false);

  const openContact = (location: string) => {
    track("contact_cta_click", { location });
    setIsContactOpen(true);
  };

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
              Strategic Counsel for Tech Leaders
            </motion.p>

            {/* Semantic H1 for SEO - visually hidden */}
            <h1 className="sr-only">
              Bridging Institutional Finance and the Digital Frontier
            </h1>

            {/* Visual presentation of headline - hidden from screen readers */}
            <div className="space-y-1 md:space-y-2" aria-hidden="true">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="block font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal leading-[1.1]"
              >
                Bridging
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="block font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal leading-[1.1] text-[#A1A1AA]"
              >
                Institutional Finance
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="block font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal leading-[1.1]"
              >
                and the
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal leading-[1.1] italic text-[#D4AF37]"
              >
                Digital Frontier.
              </motion.span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-[#FAFAFA] text-lg md:text-xl mt-10 max-w-lg leading-relaxed font-medium"
            >
              Strategic Advisor. General Counsel Services. Board Member.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-[#A1A1AA] text-lg md:text-xl mt-4 max-w-lg leading-relaxed"
            >
              I&apos;ve built operational foundations that let stablecoin issuers, fintech and digital asset innovators, and DeFi teams get licensed, raise institutional capital, and scale. Now I build them for others.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10"
            >
              <button
                onClick={() => openContact("home-hero")}
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
              </button>
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

      {/* Speaking - 4 Events Collage */}
      <section className="border-t border-[#262626]">
        {/* TEDx Banner - Cropped to show Beth only */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative w-full aspect-[1.6/1] overflow-hidden"
        >
          <Image
            src="/images/beth/tedx-banner-cropped.png"
            alt="Beth Haddock TEDx talk"
            fill
            sizes="100vw"
            quality={95}
            className="object-cover"
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase mb-6"
            >
              On the Stage
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight max-w-3xl mx-auto"
            >
              Building infrastructure isn&apos;t just boardroom work.
              <span className="text-[#D4AF37] italic"> It&apos;s sharing what I&apos;ve learned.</span>
            </motion.h2>
          </div>

          {/* CCN Feature - Stablecoins Enter a New Era */}
          <motion.a
            href="https://www.ccn.com/education/crypto/stablecoins-new-era-beth-haddock-defi-safety-standards/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group block mb-8 relative rounded-2xl overflow-hidden"
          >
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/images/press/ccn-stablecoins-new-era.webp"
                alt="Beth Haddock featured on CCN — Stablecoins Enter a New Era"
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-2">
                  CCN · April 2026
                </p>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl lg:text-4xl mb-3 text-white">
                  Stablecoins Enter a New Era
                </h3>
                <p className="text-white/80 text-sm md:text-base mb-4 max-w-2xl">
                  On DeFi safety, transparency and voluntary standards — how the Stablecoin Standard&apos;s three pillars are pushing stablecoin issuers to self-correct before regulators intervene.
                </p>
                <span className="inline-flex items-center gap-2 text-[#D4AF37] text-sm font-medium group-hover:gap-3 transition-all">
                  Read the Interview
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </motion.a>

          {/* NIESR Digital Money Panel - Watch Recording */}
          <motion.a
            href="https://youtu.be/n39iV4iSfn4?si=mJLDa6N-eILKGtJ0"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group block mb-8 relative rounded-2xl overflow-hidden"
          >
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/images/events/niesr-digital-money-2026.png"
                alt="NIESR Digital Money & Financial Stability Panel"
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-2">
                  NIESR · January 2026
                </p>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl lg:text-4xl mb-3 text-white">
                  Digital Money &amp; Financial Stability
                </h3>
                <p className="text-white/80 text-sm md:text-base mb-4 max-w-2xl">
                  Panel hosted by the UK&apos;s National Institute of Economic and Social Research (NIESR) on &ldquo;Financing Growth, Safeguarding Stability: How Should the Financial System Evolve?&rdquo; — exploring the future of digital money, monetary sovereignty, and financial fragmentation.
                </p>
                <span className="inline-flex items-center gap-2 text-[#D4AF37] text-sm font-medium group-hover:gap-3 transition-all">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch the Discussion
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </motion.a>

          {/* Efi Pylarinou Interview - Programmable Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 rounded-2xl bg-[#141414] border border-[#262626] p-8 md:p-10"
          >
            <p className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-3">
              Stablecoin Standard · 2026
            </p>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl lg:text-4xl mb-4 text-white">
              Programmable Compliance: Balancing Privacy and Enforcement
            </h3>
            <p className="text-white/80 text-sm md:text-base mb-6 max-w-2xl">
              Interviewed by Dr. Efi Pylarinou to discuss the white paper with the Stablecoin Standard: Programmable Compliance for Digital Money and Assets — a framework to prevent illicit finance without compromising financial privacy.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="https://youtu.be/irtlteRv3SA?si=VfnR5WkP37WZzTzC"
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta inline-flex items-center gap-2 text-[#D4AF37] text-sm font-medium hover:text-[#F5D77A] transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch the Interview
                <svg className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="https://www.stablecoinstandard.com/s/Whitepaper-Programmable-Compliance-for-Digital-Money-and-Assets.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta inline-flex items-center gap-2 text-[#D4AF37] text-sm font-medium hover:text-[#F5D77A] transition-colors"
              >
                Read the White Paper
                <svg className="w-4 h-4 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* 3-Photo Grid */}
          <div className="grid md:grid-cols-3 gap-4">
            {/* DC Blockchain Summit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <Image
                src="/images/beth/speaking-dc-summit-1.png"
                alt="Beth Haddock speaking at DC Blockchain Summit"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={95}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-white text-xl font-medium">DC Blockchain Summit</p>
                <p className="text-white/60 text-sm mt-1">2025</p>
              </div>
            </motion.div>

            {/* Stablecoin Standard / State Street */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <Image
                src="/images/beth/speaking-stablecoin-standard.jpg"
                alt="Beth Haddock at Stablecoin Standard with State Street and Solana"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={95}
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-white text-xl font-medium">Stablecoin Standard</p>
                <p className="text-white/60 text-sm mt-1">State Street · Solana</p>
              </div>
            </motion.div>

            {/* Stablecon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <Image
                src="/images/beth/speaking-stablecon.png"
                alt="Beth Haddock on main stage at Stablecon"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={95}
                className="object-cover object-left transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-white text-xl font-medium">Stablecon</p>
                <p className="text-white/60 text-sm mt-1">Main Stage</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Published In */}
      <section className="py-24 px-6 border-t border-[#262626]">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase mb-6"
          >
            Published In
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl mb-12"
          >
            Industry analysis and regulatory perspectives—
            <span className="italic text-[#D4AF37]">featured in leading publications.</span>
          </motion.h2>

          <div className="grid gap-0">
            {(showAllPublications ? publications : publications.slice(0, 8)).map((pub, index) => (
              <motion.a
                key={`${pub.outlet}-${index}`}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group flex items-start justify-between gap-8 py-6 border-b border-[#262626] hover:border-[#D4AF37] transition-colors"
              >
                <div className="flex-1">
                  <p className="text-[#D4AF37] text-sm font-medium mb-1">{pub.outlet}</p>
                  <p className="font-[family-name:var(--font-playfair)] text-lg sm:text-xl group-hover:text-[#D4AF37] transition-colors">
                    {pub.title}
                  </p>
                  <p className="text-[#8B8B94] text-sm mt-2">{pub.date}</p>
                </div>
                <svg
                  className="w-5 h-5 text-[#A1A1AA] group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all mt-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <button
              onClick={() => setShowAllPublications(!showAllPublications)}
              className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F5D77A] transition-colors text-sm font-medium"
            >
              {showAllPublications ? (
                <>
                  Show Less
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  Show All {publications.length} Publications
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </motion.div>
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
              <p className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-[#D4AF37] italic leading-tight">
                Deep<br />Experience
              </p>
            </div>
            <div className="space-y-8">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl leading-tight">
                I&apos;ve been in the room
                <span className="text-[#D4AF37] italic"> when it mattered.</span>
              </h2>
              <p className="text-[#A1A1AA] text-xl leading-relaxed">
                Board seats at regulated stablecoin issuers.
                <br />
                GC leadership at companies raising institutional capital.
                <br />
                Advisory work through enforcement actions and acquisitions.
                <br />
                <span className="text-[#FAFAFA]">I build infrastructure that survives scrutiny.</span>
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
            <motion.button
              onClick={() => openContact("home-card-fractional-gc")}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="group card-hover p-6 bg-[#141414] border border-[#262626] hover:border-[#D4AF37] transition-colors block text-left"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-3 group-hover:text-[#D4AF37] transition-colors">
                Fractional GC
              </h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed mb-3">
                Institutional-grade legal leadership without full-time overhead. I embed with your team to build a legal and compliance infrastructure.
              </p>
              <p className="text-xs text-[#8B8B94] italic mb-4">
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
            </motion.button>

            {/* Board Director Card */}
            <motion.button
              onClick={() => openContact("home-card-board-director")}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group card-hover p-6 bg-[#141414] border border-[#262626] hover:border-[#D4AF37] transition-colors block text-left"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-3 group-hover:text-[#D4AF37] transition-colors">
                Board Director
              </h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed mb-3">
                Independent governance for companies bridging traditional finance and blockchain innovation.
              </p>
              <p className="text-xs text-[#8B8B94] italic mb-4">
                NYDFS licensing, institutional adoption
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

            {/* Strategic Advisor Card */}
            <motion.button
              onClick={() => openContact("home-card-strategic-advisor")}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group card-hover p-6 bg-[#141414] border border-[#262626] hover:border-[#D4AF37] transition-colors block text-left"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-3 group-hover:text-[#D4AF37] transition-colors">
                Strategic Advisor
              </h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed mb-3">
                Targeted guidance on regulatory strategy, deal structuring, or crisis navigation.
              </p>
              <p className="text-xs text-[#8B8B94] italic mb-4">
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
            </motion.button>

            {/* Special Projects Card */}
            <motion.button
              onClick={() => openContact("home-card-special-projects")}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group card-hover p-6 bg-[#141414] border border-[#262626] hover:border-[#D4AF37] transition-colors block text-left"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-3 group-hover:text-[#D4AF37] transition-colors">
                Special Projects
              </h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed mb-3">
                Cybersecurity incident response, cross-border M&A integration, RegTech development, and compliance program builds.
              </p>
              <p className="text-xs text-[#8B8B94] italic mb-4">
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
            </motion.button>
          </div>

          {/* Qualification Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#A1A1AA] text-lg mt-16 max-w-3xl mx-auto text-center leading-relaxed"
          >
            I work with founders, boards, and executives building infrastructure for digital finance, AI and FinTech.
            If you&apos;re navigating <span className="text-[#FAFAFA]">SEC, OCC, NYDFS, or emerging AI/crypto regulatory frameworks</span>—we should talk.
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
            <button
              onClick={() => openContact("home-footer-cta")}
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Contact Form Modal */}
      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

