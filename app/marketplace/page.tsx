import type { Metadata } from 'next'
import MarketplaceClient from './MarketplaceClient'

export const metadata: Metadata = {
  title: 'Marketplace — Support Disability-Owned Businesses & Services',
  description:
    'Buy products and book services from disability-owned businesses and creators. Inclusive commerce inside the Open Hearts community.',
  alternates: {
    canonical: '/marketplace',
  },
  openGraph: {
    title: 'Marketplace — Open Hearts Dating',
    description:
      'Support disability-owned businesses, discover products, and book services in one inclusive marketplace.',
    url: 'https://openheartsdating.com/marketplace',
  },
}

export default function MarketplacePage() {
  return <MarketplaceClient />
}
