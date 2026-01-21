import Link from "next/link";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Insights | Crypto Regulation & Fintech Analysis | Beth Haddock",
  description:
    "Perspectives on crypto regulation, fintech compliance, and the evolution of digital asset markets from a 25-year financial services veteran.",
  keywords: [
    "crypto regulation analysis",
    "fintech insights",
    "digital asset commentary",
    "regulatory perspective",
    "crypto compliance news",
    "stablecoin regulation",
    "DeFi regulation",
  ],
  alternates: {
    canonical: "https://bethhaddock.com/insights",
  },
  openGraph: {
    title: "Insights | Crypto Regulation & Fintech Analysis | Beth Haddock",
    description:
      "Perspectives on crypto regulation, fintech compliance, and the evolution of digital asset markets.",
    type: "website",
    url: "https://bethhaddock.com/insights",
  },
};

type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  mainImage?: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
};

export const revalidate = 60;

export default async function InsightsPage() {
  const posts: Post[] = await client.fetch(POSTS_QUERY);

  return (
    <div className="bg-[#0A0A0A] text-[#FAFAFA] min-h-screen">
      <Nav active="insights" alwaysVisible />

      {/* Header */}
      <section className="pt-32 md:pt-48 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase mb-4">
            Perspectives
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            Insights
          </h1>
          <p className="text-[#A1A1AA] text-xl leading-relaxed max-w-2xl">
            Perspectives on crypto regulation, fintech compliance, and the
            evolution of digital asset markets.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          {posts.length > 0 ? (
            <div className="space-y-0">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/insights/${post.slug}`}
                  className="group block py-8 border-b border-[#262626] hover:border-[#D4AF37] transition-colors"
                >
                  <div className="flex gap-6 items-start">
                    {post.mainImage?.asset?.url && (
                      <div className="hidden md:block flex-shrink-0 w-48 h-32 overflow-hidden rounded-lg">
                        <img
                          src={post.mainImage.asset.url}
                          alt={post.mainImage.alt || post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="text-sm text-[#D4AF37] tracking-[0.1em] uppercase mb-3">
                        {post.publishedAt &&
                          new Date(post.publishedAt).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                      </p>
                      <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl mb-3 group-hover:text-[#D4AF37] transition">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-[#A1A1AA] leading-relaxed">{post.excerpt}</p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-[#A1A1AA] text-lg">Coming soon.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
