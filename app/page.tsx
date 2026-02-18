import type { Metadata } from 'next'
import HomeContent from './components/HomeContent'

export const metadata: Metadata = {
  title: 'Open Hearts Dating — Building Love Without Barriers',
  description: 'An inclusive, accessible dating platform for people with disabilities. Find meaningful connections with people who understand your journey. Free, safe, and 100% accessible.',
  alternates: {
    canonical: 'https://openheartsdating.com',
  },
  openGraph: {
    title: 'Open Hearts Dating — Building Love Without Barriers',
    description: 'A nonprofit dating platform built by and for people with disabilities. Free, safe, and 100% accessible.',
    url: 'https://openheartsdating.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Open Hearts Dating — Building Love Without Barriers',
      },
    ],
  },
}

export default function HomePage() {
  return <HomeContent />
}
