import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { POST_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  body: any[];
  mainImage?: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
};

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post: Post | null = await client.fetch(POST_QUERY, { slug });

  if (!post) {
    return { title: "Insight Not Found | Beth Haddock" };
  }

  const baseUrl = "https://bethhaddock.com";

  return {
    title: `${post.title} | Beth Haddock`,
    description: post.excerpt || `Insights on ${post.title} from Beth Haddock`,
    alternates: {
      canonical: `${baseUrl}/insights/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt || `Insights on ${post.title}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Beth Haddock"],
      url: `${baseUrl}/insights/${slug}`,
      images: post.mainImage?.asset?.url ? [
        {
          url: post.mainImage.asset.url,
          alt: post.mainImage.alt || post.title,
        }
      ] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || `Insights on ${post.title}`,
      images: post.mainImage?.asset?.url ? [post.mainImage.asset.url] : [],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post: Post | null = await client.fetch(POST_QUERY, { slug });

  if (!post) {
    notFound();
  }

  const baseUrl = "https://bethhaddock.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.mainImage?.asset?.url,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: "Beth Haddock",
      url: baseUrl,
      jobTitle: "Crypto Regulatory & Compliance Expert",
    },
    publisher: {
      "@type": "Person",
      name: "Beth Haddock",
      url: baseUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/insights/${post.slug}`,
    },
  };

  return (
    <div className="bg-[#0A0A0A] text-[#FAFAFA] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav active="insights" alwaysVisible />

      {/* Article */}
      <article className="pt-32 md:pt-48 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/insights"
            className="text-sm text-[#A1A1AA] hover:text-[#D4AF37] transition mb-12 inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Insights
          </Link>

          {/* Header */}
          <header className="mb-16">
            <p className="text-sm text-[#D4AF37] tracking-[0.2em] uppercase mb-4">
              {post.publishedAt &&
                new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-xl text-[#A1A1AA] leading-relaxed">{post.excerpt}</p>
            )}
          </header>

          {/* Featured Image */}
          {post.mainImage?.asset?.url && (
            <div className="mb-12">
              <img
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt || post.title}
                className="w-full rounded-lg"
              />
            </div>
          )}

          {/* Body */}
          {post.body && (
            <div className="prose prose-lg prose-invert max-w-none prose-headings:font-[family-name:var(--font-playfair)] prose-a:text-[#D4AF37] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#FAFAFA] prose-p:text-[#A1A1AA] prose-p:leading-relaxed prose-li:text-[#A1A1AA]">
              <PortableText value={post.body} />
            </div>
          )}

          {/* Contact */}
          <section className="mt-24 pt-12 border-t border-[#262626]">
            <p className="text-[#A1A1AA] mb-6">
              Want to discuss how this applies to your situation?
            </p>
            <a
              href="https://calendly.com/beth-haddock"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-block"
            >
              Schedule a conversation
            </a>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
}
