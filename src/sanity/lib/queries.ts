import { defineQuery } from 'next-sanity'

export const POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    category,
    mainImage {
      asset-> {
        _id,
        url
      },
      alt
    }
  }
`)

export const POST_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    category,
    body,
    mainImage {
      asset-> {
        _id,
        url
      },
      alt
    }
  }
`)

export const LATEST_POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    category,
    mainImage {
      asset-> {
        _id,
        url
      },
      alt
    }
  }
`)
