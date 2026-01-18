import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warburton Advisors | Beth Haddock",
  description:
    "Strategic counsel for boards and founders navigating the intersection of institutional finance and digital assets. Fractional CLO, Board Director, and Strategic Advisory services.",
  keywords: [
    "warburton advisors",
    "warburton advisers",
    "beth haddock",
    "crypto legal counsel",
    "digital assets advisor",
    "fractional CLO",
    "board director",
    "regulatory strategy",
  ],
  openGraph: {
    title: "Warburton Advisors | Beth Haddock",
    description:
      "Strategic counsel for boards and founders navigating the intersection of institutional finance and digital assets.",
    url: "https://bethhaddock.com/warburton-advisors",
    siteName: "Beth Haddock",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Warburton Advisors | Beth Haddock",
    description:
      "Strategic counsel for boards and founders navigating the intersection of institutional finance and digital assets.",
  },
};

export default function WarburtonAdvisorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
