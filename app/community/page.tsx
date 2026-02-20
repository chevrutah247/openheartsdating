import type { Metadata } from 'next'
import CommunityClient from './CommunityClient'

export const metadata: Metadata = {
  title: 'Community Hub — Dating, Resources & Disability-Owned Marketplace',
  description:
    'One inclusive platform for accessible dating, disability support resources, and a marketplace for disability-owned businesses and services.',
  alternates: {
    canonical: '/community',
  },
  openGraph: {
    title: 'Community Hub — Open Hearts Dating',
    description:
      'Discover dating, support resources, and marketplace opportunities in one trusted community platform.',
    url: 'https://openheartsdating.com/community',
  },
}

export default function CommunityPage() {
  return <CommunityClient />
}
