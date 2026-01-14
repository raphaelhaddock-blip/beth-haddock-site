import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beth Haddock | Board Advisor & Governance Expert",
  description:
    "Strategic advisor helping organizations navigate digital assets, AI governance, and fintech compliance. 25+ years of executive leadership in finance and technology.",
  keywords: [
    "board advisor",
    "crypto compliance",
    "AI governance",
    "fintech compliance",
    "stablecoin governance",
    "digital assets",
    "regulatory compliance",
  ],
  authors: [{ name: "Beth Haddock" }],
  openGraph: {
    title: "Beth Haddock | Board Advisor & Governance Expert",
    description:
      "Strategic advisor helping organizations navigate digital assets, AI governance, and fintech compliance.",
    url: "https://bethhaddock.com",
    siteName: "Beth Haddock",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beth Haddock | Board Advisor & Governance Expert",
    description:
      "Strategic advisor helping organizations navigate digital assets, AI governance, and fintech compliance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
