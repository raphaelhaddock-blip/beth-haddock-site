import { client } from '@/sanity/lib/client'
import { POSTS_QUERY } from '@/sanity/lib/queries'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const posts = await client.fetch(POSTS_QUERY)
    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json([], { status: 500 })
  }
}
