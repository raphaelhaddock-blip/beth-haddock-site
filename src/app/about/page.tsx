import Link from "next/link";
import { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactButton from "@/components/ContactButton";

export const metadata: Metadata = {
  title: "About | Beth Haddock — Fractional GC & Board Director for Digital Finance",
  description:
    "Beth Haddock has spent 25+ years building the compliance and governance foundations financial institutions run on — now for stablecoin, fintech, and DeFi companies. Former CLO at Franklin Templeton, CCO at Guggenheim, advisor to a16z portfolio companies.",
  keywords: [
    "Beth Haddock",
    "fractional general counsel crypto",
    "board director stablecoin",
    "financial services compliance",
    "digital asset governance",
    "regulatory strategy advisor",
  ],
  alternates: {
    canonical: "https://bethhaddock.com/about",
  },
  openGraph: {
    title: "About | Beth Haddock",
    description:
      "25+ years building the compliance and governance foundations of financial institutions — now for stablecoin, fintech, and DeFi companies.",
    type: "profile",
    url: "https://bethhaddock.com/about",
  },
};

const roles = [
  {
    role: "Former Chief Legal Officer",
    org: "Franklin Templeton",
  },
  {
    role: "Former Chief Compliance Officer",
    org: "Guggenheim",
  },
  {
    role: "Advisor",
    org: "Andreessen Horowitz (a16z) portfolio companies",
  },
  {
    role: "Board Director",
    org: "Regulated stablecoin issuers",
  },
];

const expertise = [
  "Financial services compliance architecture",
  "Regulatory strategy for emerging technology",
  "SEC, FINRA, and NYDFS frameworks",
  "Institutional adoption of new asset classes",
  "Stablecoin regulation",
  "DeFi compliance",
];

const press: { name: string; detail: string; url?: string }[] = [
  {
    name: "Stablecon",
    detail: "Stablecoins' Most Influential list",
    url: "https://content.stablecon.com/stablecoins-most-influential-list",
  },
  { name: "TEDx", detail: "Speaker" },
  { name: "CCN", detail: "Featured interview" },
  { name: "NIESR", detail: "Digital money panel" },
  { name: "Stablecoin Standard", detail: "Advisor & contributor" },
];

export default function AboutPage() {
  return (
    <div className="bg-[#0A0A0A] text-[#FAFAFA] min-h-screen">
      <Nav active="about" alwaysVisible />

      {/* Intro */}
      <section className="pt-32 md:pt-48 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#a88b63] text-sm tracking-[0.3em] uppercase mb-6">
            About
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.1] mb-10">
            I build the foundations that let companies at the frontier of finance{" "}
            <span className="italic text-[#D4AF37]">stand up to scrutiny.</span>
          </h1>
          <div className="space-y-6 text-[#A1A1AA] text-lg md:text-xl leading-relaxed">
            <p>
              I&apos;ve spent 25+ years building the compliance and governance
              backbone that financial institutions run on. For the last several,
              that work has moved to the frontier — stablecoins, digital assets,
              DeFi, and the AI systems reshaping how finance operates.
            </p>
            <p>
              I work with founders and boards at the moments that decide a
              company&apos;s trajectory: getting licensed, raising institutional
              capital, responding to an enforcement action, or standing up the
              legal function that lets the business scale. I&apos;ve done this as
              an operator, not just an advisor — and that&apos;s the difference
              between telling someone what the rules are and building something
              that holds up under them.
            </p>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-20 px-6 border-t border-[#262626] bg-[#141414]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#a88b63] text-sm tracking-[0.2em] uppercase mb-10">
            Roles
          </p>
          <div className="divide-y divide-[#262626]">
            {roles.map((r) => (
              <div
                key={`${r.role}-${r.org}`}
                className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-8 py-6"
              >
                <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-[#FAFAFA]">
                  {r.role}
                </h2>
                <p className="text-[#A1A1AA] sm:text-right">{r.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-20 px-6 border-t border-[#262626]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#a88b63] text-sm tracking-[0.2em] uppercase mb-10">
            Areas of Expertise
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {expertise.map((area) => (
              <div
                key={area}
                className="flex items-start gap-3 border border-[#262626] p-5"
              >
                <span className="text-[#D4AF37] mt-1">—</span>
                <p className="text-[#FAFAFA]">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking & Press */}
      <section className="py-20 px-6 border-t border-[#262626] bg-[#141414]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#a88b63] text-sm tracking-[0.2em] uppercase mb-10">
            Recognition, Speaking &amp; Press
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-4 mb-10">
            {press.map((p) =>
              p.url ? (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <p className="font-[family-name:var(--font-playfair)] text-lg text-[#FAFAFA] group-hover:text-[#D4AF37] transition-colors">
                    {p.name}
                  </p>
                  <p className="text-[#8B8B94] text-sm">{p.detail}</p>
                </a>
              ) : (
                <div key={p.name}>
                  <p className="font-[family-name:var(--font-playfair)] text-lg text-[#FAFAFA]">
                    {p.name}
                  </p>
                  <p className="text-[#8B8B94] text-sm">{p.detail}</p>
                </div>
              )
            )}
          </div>
          <p className="text-[#A1A1AA] text-lg leading-relaxed">
            42 published articles and interviews on crypto regulation, stablecoins,
            and compliance across outlets including CoinDesk, Decrypt, Nasdaq, and
            Forbes.{" "}
            <Link
              href="/insights"
              className="text-[#D4AF37] hover:text-[#F5D77A] transition-colors link-gold"
            >
              Read the writing
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-[#262626]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl mb-6">
            Building at the frontier of finance?{" "}
            <span className="italic text-[#D4AF37]">Let&apos;s talk.</span>
          </h2>
          <p className="text-[#A1A1AA] text-lg mb-10 max-w-xl mx-auto">
            I take on a limited number of engagements each year. If the timing and
            the problem are right, I&apos;d like to hear about it.
          </p>
          <ContactButton
            location="about-cta"
            className="btn-gold inline-flex items-center justify-center gap-3 min-h-[48px]"
          >
            Book a conversation
          </ContactButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}
