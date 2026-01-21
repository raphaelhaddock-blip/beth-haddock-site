import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry Guides | Crypto, DeFi & Fintech | Beth Haddock",
  description:
    "In-depth guides on stablecoins, DeFi, crypto compliance, institutional adoption, and tokenization. Expert analysis from deep experience in financial services.",
  keywords: [
    "crypto guides",
    "stablecoin guide",
    "DeFi explained",
    "crypto compliance guide",
    "institutional crypto guide",
    "tokenization guide",
    "digital asset regulation",
    "fintech compliance",
  ],
  openGraph: {
    title: "Industry Guides | Crypto, DeFi & Fintech | Beth Haddock",
    description:
      "In-depth guides on stablecoins, DeFi, crypto compliance, institutional adoption, and tokenization.",
    type: "website",
  },
};

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
