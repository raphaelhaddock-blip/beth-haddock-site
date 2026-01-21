import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Beth Haddock | Strategic Leadership",
  description:
    "Board Director & Strategic Advisor. Bridging the gap between institutional Wall Street governance and the digital asset economy.",
  keywords: [
    "board director",
    "strategic advisor",
    "digital assets",
    "crypto governance",
    "AI governance",
    "fintech compliance",
    "regulatory strategy",
  ],
  authors: [{ name: "Beth Haddock" }],
  openGraph: {
    title: "Beth Haddock | Strategic Leadership",
    description:
      "Board Director & Strategic Advisor. Bridging institutional governance and the digital asset economy.",
    url: "https://bethhaddock.com",
    siteName: "Beth Haddock",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beth Haddock | Strategic Leadership",
    description:
      "Board Director & Strategic Advisor. Bridging institutional governance and the digital asset economy.",
  },
};

// Schema.org JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://bethhaddock.com/#person",
      name: "Beth Haddock",
      jobTitle: "Board Director & Strategic Advisor",
      description:
        "25+ years in financial services, bridging institutional finance and digital assets",
      url: "https://bethhaddock.com",
      sameAs: ["https://linkedin.com/in/bethhaddock"],
    },
    {
      "@type": "Organization",
      "@id": "https://bethhaddock.com/#organization",
      name: "Warburton Advisers",
      url: "https://bethhaddock.com/warburton",
      founder: { "@id": "https://bethhaddock.com/#person" },
    },
    {
      "@type": "WebSite",
      "@id": "https://bethhaddock.com/#website",
      url: "https://bethhaddock.com",
      name: "Beth Haddock",
      publisher: { "@id": "https://bethhaddock.com/#person" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
