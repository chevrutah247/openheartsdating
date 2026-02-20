import type { Metadata } from 'next'
import ResourcesClient from './ResourcesClient'

export const metadata: Metadata = {
  title: 'Help & Resources — Grants, Legal Aid, Disability Support Services',
  description:
    'Find and share practical support resources: grants, legal aid, advocacy groups, employment programs, and independent living services.',
  alternates: {
    canonical: '/resources',
  },
  openGraph: {
    title: 'Help & Resources — Open Hearts Dating',
    description:
      'A community directory of trusted support resources for people with disabilities and families.',
    url: 'https://openheartsdating.com/resources',
  },
}

export default function ResourcesPage() {
  return <ResourcesClient />
}
