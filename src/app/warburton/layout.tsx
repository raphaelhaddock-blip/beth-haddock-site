import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warburton Advisers | Governance & Compliance for Digital Assets",
  description:
    "Sustainable governance and compliance solutions for blockchain and financial services. Fractional GC, Board Services, and Strategic Advisory from 25+ years of institutional experience.",
  keywords: [
    "warburton advisers",
    "crypto compliance firm",
    "digital asset governance",
    "blockchain legal services",
    "fractional GC services",
    "fintech compliance advisory",
    "NYDFS licensing",
    "stablecoin governance",
  ],
  openGraph: {
    title: "Warburton Advisers | Governance & Compliance for Digital Assets",
    description:
      "Sustainable governance and compliance solutions for blockchain and financial services.",
    type: "website",
  },
};

export default function WarburtonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
