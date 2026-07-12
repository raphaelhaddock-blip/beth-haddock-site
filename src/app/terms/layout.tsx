import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Beth Haddock",
  description:
    "Terms of service for bethhaddock.com and Warburton Advisers.",
};

export default function TermsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
